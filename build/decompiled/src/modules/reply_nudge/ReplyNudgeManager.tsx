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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun118527: for (var _fun118527_ip = 0;;) switch (_fun118527_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun118527_ip = 45;
                    continue _fun118527
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun118527_ip = 54;
                    continue _fun118527
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun118527_ip = 344;
                    continue _fun118527
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun118527_ip = 322;
                    continue _fun118527
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun118527_ip = 282;
                    continue _fun118527
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun118527_ip = 269;
                    continue _fun118527
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
                    _fun118527_ip = 162;
                    continue _fun118527
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun118527_ip = 178;
                    continue _fun118527
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun118527_ip = 248;
                    continue _fun118527
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun118527_ip = 248;
                    continue _fun118527
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun118527_ip = 233;
                    continue _fun118527
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun118527_ip = 246;
                    continue _fun118527
                }
            case 233:
                var8 = _closure1_slot21;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun118527_ip = 264;
                continue _fun118527;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun118527_ip = 282;
                continue _fun118527;
            case 269:
                var6 = _closure1_slot21;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun118527_ip = 322;
                    continue _fun118527
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
                    _fun118527_ip = 329;
                    continue _fun118527
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun118528: for (var _fun118528_ip = 0;;) switch (_fun118528_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun118528_ip = 56;
                                continue _fun118528
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
                            _fun118528_ip = 67;
                            continue _fun118528;
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
    var _closure1_slot20 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun118529: for (var _fun118529_ip = 0;;) switch (_fun118529_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun118529_ip = 23;
                    continue _fun118529
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun118529_ip = 33;
                    continue _fun118529
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
                    _fun118529_ip = 70;
                    continue _fun118529
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun118529_ip = 55;
                    continue _fun118529
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun118530: for (var _fun118530_ip = 0;;) switch (_fun118530_ip) {
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
                _fun118530_ip = 76;
                continue _fun118530;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot22 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0, arg1) { // Original name: isMentionOrReply, environment: var1
        _fun118533: for (var _fun118533_ip = 0;;) switch (_fun118533_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var7 = var1.mentions;
                var4 = null;
                var6 = var4 == var7;
                var0 = undefined;
                if (var6) {
                    _fun118533_ip = 47;
                    continue _fun118533
                }
            case 29:
                var6 = var7.some;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var6.bind(var7)(var3);
            case 47:
                if (var0) {
                    _fun118533_ip = 89;
                    continue _fun118533
                }
            case 50:
                var3 = var1.referenced_message;
                var6 = var4 == var3;
                var1 = undefined;
                if (var6) {
                    _fun118533_ip = 85;
                    continue _fun118533
                }
            case 65:
                var3 = var3.author;
                var4 = var4 == var3;
                var1 = undefined;
                if (var4) {
                    _fun118533_ip = 85;
                    continue _fun118533
                }
            case 80:
                var1 = var3.id;
            case 85:
                var0 = var1 === var2;
            case 89:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: hasReacted, environment: var1
        _fun118535: for (var _fun118535_ip = 0;;) switch (_fun118535_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.reactions;
                var0 = null;
                var2 = var0 == var4;
                var1 = undefined;
                if (var2) {
                    _fun118535_ip = 40;
                    continue _fun118535
                }
            case 20:
                var3 = var4.some;
                var2 = function(arg0) { // Environment: var2
                    _fun118536: for (var _fun118536_ip = 0;;) switch (_fun118536_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.me;
                            if (var0) {
                                _fun118536_ip = 18;
                                continue _fun118536
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
                    _fun118535_ip = 50;
                    continue _fun118535
                }
            case 47:
                var0 = var1;
            case 50:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
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
    var7 = 3;
    var3 = var6[var7];
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
    var9 = 7;
    var3 = var6[var9];
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
    var3 = var5.bind(var0)(var3);
    var8 = var3.AnalyticEvents;
    var _closure1_slot15 = var8;
    var3 = var3.Consents;
    var _closure1_slot16 = var3;
    var3 = 13;
    var8 = var6[var3];
    var8 = var4.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.DAY;
    var8 = var9 * var8;
    var _closure1_slot17 = var8;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.HOUR;
    var3 = -var3;
    var3 = var7 * var3;
    var _closure1_slot18 = var3;
    var3 = 14;
    var3 = var6[var3];
    var8 = var4.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var12 = 'ReplyNudgeManager';
    var13 = var7;
    var3 = new var13[var8](var12, var11);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot19 = var3;
    var3 = 22;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: ReplyNudgeManager, environment: var5
            _fun118538: for (var _fun118538_ip = 0;;) switch (_fun118538_ip) {
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
                    var0 = _closure1_slot22;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun118538_ip = 86;
                        continue _fun118538
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun118538_ip = 120;
                    continue _fun118538;
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
                    var2 = function() { // Original name: POST_CONNECTION_OPEN, environment: var2
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
        var0 = function() { // Original name: value, environment: var5
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
        var7 = function() { // Original name: value, environment: var5
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
            var3 = 13;
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
                _fun118544: for (var _fun118544_ip = 0;;) switch (_fun118544_ip) {
                    case 0:
                        StartGenerator();
                        var6 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118544_ip = 409;
                            continue _fun118544
                        }
                    case 13:
                        var1 = undefined;
                        var7 = undefined;
                        var4 = undefined;
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var5 = 15;
                        var3 = var3[var5];
                        var3 = var8.bind(var1)(var3);
                        var8 = var3.EnableDmReplyNudgeReminders;
                        var3 = var8.getSetting;
                        var8 = var3.bind(var8)();
                        var3 = false;
                        var3 = var3 !== var8;
                        if (!var3) {
                            _fun118544_ip = 128;
                            continue _fun118544
                        }
                    case 67:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = var10[var5];
                        var5 = var9.bind(var1)(var5);
                        var8 = var5.MessagePreviewSetting;
                        var5 = var8.getSetting;
                        var8 = var5.bind(var8)();
                        var5 = 16;
                        var5 = var10[var5];
                        var5 = var9.bind(var1)(var5);
                        var5 = var5.MessagePreviewTypes;
                        var5 = var5.ALL;
                        var3 = var8 === var5;
                    case 128:
                        if (!var3) {
                            _fun118544_ip = 156;
                            continue _fun118544
                        }
                    case 131:
                        var9 = _closure1_slot12;
                        var8 = var9.hasConsented;
                        var5 = _closure1_slot16;
                        var5 = var5.PERSONALIZATION;
                        var3 = var8.bind(var9)(var5);
                    case 156:
                        if (!var3) {
                            _fun118544_ip = 406;
                            continue _fun118544
                        }
                    case 162:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 18;
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
                            _fun118544_ip = 406;
                            continue _fun118544
                        }
                    case 222:
                        var8 = _closure1_slot19;
                        var5 = var8.info;
                        var3 = 'Updating most recent DMs';
                        var3 = var5.bind(var8)(var3);
                    case 243: // try_start_0
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 19;
                        var3 = var8[var3];
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.messages;
                        var3 = var3.bind(var5)();
                        var7 = var3;
                        var5 = null;
                        var8 = var5 == var3;
                        var3 = undefined;
                        if (var8) {
                            _fun118544_ip = 301;
                            continue _fun118544
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
                            _fun118544_ip = 380;
                            continue _fun118544
                        }
                    case 311:
                        var4 = var3;
                        if (!(var5 != var3)) {
                            _fun118544_ip = 355;
                            continue _fun118544
                        }
                    case 318:
                        var5 = var6.processMostRecentDMs;
                        var8 = var4;
                        var7 = var8.map;
                        var4 = function(arg0) { // Environment: var4
                            _fun118545: for (var _fun118545_ip = 0;;) switch (_fun118545_ip) {
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
                                        _fun118545_ip = 27;
                                        continue _fun118545
                                    }
                                case 24:
                                    var2 = var1;
                                case 27:
                                    var1 = undefined;
                                    if (var3) {
                                        _fun118545_ip = 57;
                                        continue _fun118545
                                    }
                                case 32:
                                    var5 = var4().value;
                                    var4 = var0;
                                    var4 = var4 === var6;
                                    var1 = undefined;
                                    var3 = var4;
                                    if (var4) {
                                        _fun118545_ip = 57;
                                        continue _fun118545
                                    }
                                case 51:
                                    var1 = var5;
                                    var3 = var4;
                                case 57:
                                    if (var3) {
                                        _fun118545_ip = 63;
                                        continue _fun118545
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
                        _fun118544_ip = 406;
                        continue _fun118544;
                    case 355: // try_start_1
                        var6 = _closure1_slot19;
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
                        var4 = _closure1_slot19;
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
        var6 = function() { // Original name: updateReplyNudges, environment: var5
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
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun118548: for (var _fun118548_ip = 0;;) switch (_fun118548_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118548_ip = 111;
                            continue _fun118548
                        }
                    case 10:
                        var4 = _closure1_slot14;
                        var2 = var4.isChannelNudged;
                        var4 = var2.bind(var4)(var3);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 20;
                        var5 = var5[var2];
                        var2 = undefined;
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.setReplyNudge;
                        var7 = global;
                        var8 = var7.Date;
                        var7 = var8.now;
                        var7 = var7.bind(var8)();
                        var1 = _closure1_slot18;
                        var1 = var7 + var1;
                        var1 = var5.bind(var6)(var3, var1);
                        SaveGenerator(address = 91);
                    case 89:
                        return var1;
                    case 91:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun118548_ip = 108;
                            continue _fun118548
                        }
                    case 97:
                        var2 = undefined;
                        if (var4) {
                            _fun118548_ip = 105;
                            continue _fun118548
                        }
                    case 102:
                        var2 = var3;
                    case 105:
                        return var2;
                    case 108:
                        return var1;
                    case 111:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot1 = var6;
        var6 = function() { // Original name: nudgeChannel, environment: var5
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
                _fun118551: for (var _fun118551_ip = 0;;) switch (_fun118551_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun118551_ip = 642;
                            continue _fun118551
                        }
                    case 18:
                        var2 = var1;
                        var _closure4_slot0 = var1;
                        var6 = arg1;
                        var5 = arg2;
                        var1 = undefined;
                        var _closure4_slot1 = var1;
                    case 37: // try_start_0 // try_start_2
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 19;
                        var4 = var9[var4];
                        var8 = var8.bind(var1)(var4);
                        var4 = var8.messages;
                        var4 = var4.bind(var8)();
                        _closure4_slot1 = var4;
                        var21 = null;
                        if (!(var21 != var4)) {
                            _fun118551_ip = 537;
                            continue _fun118551
                        }
                    case 83:
                        var10 = _closure1_slot19;
                        var9 = var10.timeAsync;
                        var4 = var2;
                        var11 = var4.channel_id;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var8 = var4.concat;
                        var4 = 'fetching lookbehind messages for ';
                        var8 = var8.bind(var4)(var11);
                        var4 = function() { // Environment: var7
                            var4 = _closure4_slot1;
                            var3 = var4.getLatest;
                            var0 = _closure4_slot0;
                            var2 = var0.channel_id;
                            var1 = null;
                            var0 = 15;
                            var0 = var3.bind(var4)(var1, var2, var0);
                            return var0;
                        };
                        var4 = var9.bind(var10)(var8, var4);
                        SaveGenerator(address = 142);
                    case 140:
                        return var4;
                    case 142:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun118551_ip = 510;
                            continue _fun118551
                        }
                    case 151:
                        var20 = var2;
                        var8 = var4.map;
                        var7 = function(arg0) { // Environment: var7
                            var0 = arg0;
                            var0 = var0.message;
                            return var0;
                        };
                        var19 = var8.bind(var4)(var7);
                        var18 = var6;
                        var17 = var5;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var16 = 17;
                        var5 = var5[var16];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.extractTimestamp;
                        var5 = var20.id;
                        var15 = var6.bind(var7)(var5);
                        var5 = var19.length;
                        var14 = 0;
                        var6 = var14 < var5;
                        var11 = 1;
                        var10 = 0;
                        var9 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var5 = false;
                        if (!var6) {
                            _fun118551_ip = 456;
                            continue _fun118551
                        }
                    case 243:
                        var26 = var19[var10];
                        var23 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var16];
                        var25 = var23.bind(var1)(var6);
                        var24 = var25.compare;
                        var23 = var26.id;
                        var6 = var20.id;
                        var6 = var24.bind(var25)(var23, var6);
                        if (!(!(var6 >= var14))) {
                            _fun118551_ip = 436;
                            continue _fun118551
                        }
                    case 293:
                        var23 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var16];
                        var24 = var23.bind(var1)(var6);
                        var23 = var24.extractTimestamp;
                        var6 = var26.id;
                        var23 = var23.bind(var24)(var6);
                        var6 = var15 - var17;
                        var6 = var23 < var6;
                        var5 = true;
                        if (var6) {
                            _fun118551_ip = 456;
                            continue _fun118551
                        }
                    case 339:
                        var25 = var26.author;
                        var24 = null;
                        if (!(var10 > var14)) {
                            _fun118551_ip = 359;
                            continue _fun118551
                        }
                    case 351:
                        var6 = var10 - var11;
                        var24 = var19[var6];
                    case 359:
                        var6 = var21 == var24;
                        var23 = undefined;
                        if (var6) {
                            _fun118551_ip = 374;
                            continue _fun118551
                        }
                    case 368:
                        var23 = var24.author;
                    case 374:
                        if (!(var21 != var25)) {
                            _fun118551_ip = 398;
                            continue _fun118551
                        }
                    case 378:
                        if (!(var21 != var23)) {
                            _fun118551_ip = 398;
                            continue _fun118551
                        }
                    case 382:
                        var27 = var25.id;
                        var6 = var23.id;
                        var5 = false;
                        if (!(var27 === var6)) {
                            _fun118551_ip = 456;
                            continue _fun118551
                        }
                    case 398:
                        var6 = _closure1_slot24;
                        var6 = var6.bind(var1)(var26);
                        var5 = false;
                        if (var6) {
                            _fun118551_ip = 456;
                            continue _fun118551
                        }
                    case 412:
                        var6 = _closure1_slot23;
                        var6 = var6.bind(var1)(var26, var18);
                        var9 = var25;
                        var8 = var24;
                        var7 = var23;
                        var5 = true;
                        if (var6) {
                            _fun118551_ip = 456;
                            continue _fun118551
                        }
                    case 436:
                        var10 = var10 + 1;
                        var6 = var19.length;
                        var6 = var10 < var6;
                        var5 = false;
                        if (var6) {
                            _fun118551_ip = 243;
                            continue _fun118551
                        }
                    case 456:
                        if (var5) {
                            _fun118551_ip = 464;
                            continue _fun118551
                        }
                    case 459: // try_end0
                        _fun118551_ip = 590;
                        continue _fun118551;
                    case 464: // try_start_1
                        var6 = var3.nudgeChannel;
                        var5 = var2;
                        var5 = var5.channel_id;
                        var5 = var6.bind(var3)(var5);
                    case 483: // try_end1 // try_end2
                        var8 = var3.pendingFetch;
                        var7 = var8.delete;
                        var6 = var2;
                        var6 = var6.channel_id;
                        var6 = var7.bind(var8)(var6);
                        return var5;
                    case 510:
                        var7 = var3.pendingFetch;
                        var6 = var7.delete;
                        var5 = var2;
                        var5 = var5.channel_id;
                        var5 = var6.bind(var7)(var5);
                        return var4;
                    case 537:
                        var6 = var3.pendingFetch;
                        var5 = var6.delete;
                        var4 = var2;
                        var4 = var4.channel_id;
                        var4 = var5.bind(var6)(var4);
                        return var1;
                    case 564: // try_start_3 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot19;
                        var5 = var6.error;
                        var4 = 'Error fetching lookbehind messages';
                        var4 = var5.bind(var6)(var4, var7);
                    case 590: // try_end3
                        var6 = var3.pendingFetch;
                        var5 = var6.delete;
                        var4 = var2;
                        var4 = var4.channel_id;
                        var4 = var5.bind(var6)(var4);
                        return var1;
                    case 617: // catch_target2 // catch_target3
                        CatchBlockStart(arg_register = 1);
                        var4 = var3.pendingFetch;
                        var3 = var4.delete;
                        var2 = var2.channel_id;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 642:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var6 = function() { // Original name: fetchLookbehindMessages, environment: var5
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
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun118555: for (var _fun118555_ip = 0;;) switch (_fun118555_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 18;
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
                    var10 = function(arg0) { // Original name: _loop, environment: var1
                        _fun118556: for (var _fun118556_ip = 0;;) switch (_fun118556_ip) {
                            case 0:
                                var5 = arg0;
                                var _closure4_slot0 = var5;
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 17;
                                var0 = var3[var0];
                                var7 = undefined;
                                var3 = var2.bind(var7)(var0);
                                var2 = var3.extractTimestamp;
                                var0 = var5.id;
                                var2 = var2.bind(var3)(var0);
                                var0 = _closure3_slot5;
                                var2 = var0 - var2;
                                var0 = _closure3_slot4;
                                if (!(!(var2 < var0))) {
                                    _fun118556_ip = 382;
                                    continue _fun118556
                                }
                            case 72:
                                var0 = _closure1_slot17;
                                if (!(!(var2 > var0))) {
                                    _fun118556_ip = 382;
                                    continue _fun118556
                                }
                            case 83:
                                var2 = var5.author;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun118556_ip = 382;
                                    continue _fun118556
                                }
                            case 98:
                                var2 = var5.author;
                                var6 = var2.id;
                                var2 = _closure3_slot6;
                                if (!(var6 !== var2)) {
                                    _fun118556_ip = 382;
                                    continue _fun118556
                                }
                            case 120:
                                var2 = _closure1_slot24;
                                var2 = var2.bind(var7)(var5);
                                if (var2) {
                                    _fun118556_ip = 382;
                                    continue _fun118556
                                }
                            case 135:
                                var2 = var5.author;
                                if (!(var0 != var2)) {
                                    _fun118556_ip = 157;
                                    continue _fun118556
                                }
                            case 145:
                                var2 = var2.bot;
                                if (var2) {
                                    _fun118556_ip = 382;
                                    continue _fun118556
                                }
                            case 157:
                                var8 = _closure1_slot10;
                                var6 = var8.getUserAffinity;
                                var2 = var5.author;
                                var2 = var2.id;
                                var6 = var6.bind(var8)(var2);
                                var8 = var0 == var6;
                                var0 = 0;
                                if (var8) {
                                    _fun118556_ip = 380;
                                    continue _fun118556
                                }
                            case 195:
                                var8 = var6.dmProbability;
                                var6 = _closure3_slot2;
                                var6 = var8 < var6;
                                var0 = 0;
                                if (var6) {
                                    _fun118556_ip = 380;
                                    continue _fun118556
                                }
                            case 217:
                                var6 = _closure1_slot23;
                                var1 = _closure3_slot6;
                                var1 = var6.bind(var7)(var5, var1);
                                if (var1) {
                                    _fun118556_ip = 342;
                                    continue _fun118556
                                }
                            case 234:
                                var1 = _closure3_slot1;
                                var7 = var1.pendingFetch;
                                var6 = var7.has;
                                var1 = var5.channel_id;
                                var6 = var6.bind(var7)(var1);
                                var1 = 0;
                                if (var6) {
                                    _fun118556_ip = 340;
                                    continue _fun118556
                                }
                            case 264:
                                var6 = _closure3_slot1;
                                var7 = var6.pendingFetch;
                                var6 = var7.add;
                                var5 = var5.channel_id;
                                var5 = var6.bind(var7)(var5);
                                var6 = _closure3_slot7;
                                var5 = var6.push;
                                var7 = global;
                                var8 = var7.Promise;
                                var7 = var8.prototype;
                                var7 = Object.create(var7, {
                                    constructor: {
                                        value: var8
                                    }
                                });
                                var10 = function(arg0, arg1) { // Environment: var4
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
                                        var1 = _closure3_slot6;
                                        var0 = _closure3_slot3;
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
                                var11 = var7;
                                var4 = new var11[var8](var10, var9);
                                var4 = var4 instanceof Object ? var4 : var7;
                                var4 = var5.bind(var6)(var4);
                                var1 = undefined;
                            case 340:
                                _fun118556_ip = 377;
                                continue _fun118556;
                            case 342:
                                var5 = _closure3_slot7;
                                var4 = var5.push;
                                var7 = _closure3_slot1;
                                var6 = var7.nudgeChannel;
                                var3 = _closure3_slot8;
                                var3 = var6.bind(var7)(var3);
                                var3 = var4.bind(var5)(var3);
                                var1 = 0;
                            case 377:
                                var0 = var1;
                            case 380:
                                return var0;
                            case 382:
                                var0 = 0;
                                return var0;
                        }
                    };
                    var5 = _closure1_slot20;
                    var3 = arg0;
                    var9 = var5.bind(var0)(var3);
                    var5 = var9.bind(var0)();
                    var3 = var5.done;
                    var8 = 2;
                    var7 = 0;
                    var6 = 1;
                    if (var3) {
                        _fun118555_ip = 230;
                        continue _fun118555
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
                        _fun118555_ip = 183;
                        continue _fun118555
                    }
                case 230:
                    var3 = var2.Promise;
                    var2 = var3.allSettled;
                    var3 = var2.bind(var3)(var4);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        var3 = arg0;
                        var2 = var3.filter;
                        var1 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.status;
                            var0 = 'fulfilled';
                            var0 = var0 === var1;
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.map;
                        var1 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.value;
                            return var0;
                        };
                        var4 = var2.bind(var3)(var1);
                        var2 = _closure3_slot0;
                        var1 = var2.trackNudgesCreated;
                        var3 = var4.filter;
                        var0 = function(arg0) { // Environment: var0
                            var1 = null;
                            var0 = arg0;
                            var0 = var1 != var0;
                            return var0;
                        };
                        var0 = var3.bind(var4)(var0);
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
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
        var5 = function(arg0) { // Original name: trackNudgesCreated, environment: var5
            _fun118563: for (var _fun118563_ip = 0;;) switch (_fun118563_ip) {
                case 0:
                    var5 = arg0;
                    var2 = var5.length;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun118563_ip = 111;
                        continue _fun118563
                    }
                case 16:
                    var3 = _closure1_slot13;
                    var2 = var3.getPrivateChannelIds;
                    var2 = var2.bind(var3)();
                    var _closure3_slot0 = var2;
                    var2 = var5.map;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.indexOf;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var2.bind(var5)(var1);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.track;
                    var0 = _closure1_slot15;
                    var1 = var0.REPLY_NUDGES_CREATED;
                    var0 = {};
                    var0.channel_ids = var5;
                    var0.channel_dm_list_indexes = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 111:
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
    var13 = var4;
    var3 = new var13[var1](var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reply_nudge/ReplyNudgeManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ReplyNudgeManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 6, 7, 15, 17, 18, 6936, 1216, 4522, 8293, 8294, 660, 667, 3, 1348, 8749, 21, 8295, 1637, 15057, 795, 4262, 2]);