// stores/TypingStore.tsx
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
        _fun89618: for (var _fun89618_ip = 0;;) switch (_fun89618_ip) {
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
                _fun89618_ip = 76;
                continue _fun89618;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun89621: for (var _fun89621_ip = 0;;) switch (_fun89621_ip) {
            case 0:
                var2 = _closure1_slot14;
                var0 = arg0;
                var0 = var2[var0];
                var2 = null;
                if (!(var2 == var0)) {
                    _fun89621_ip = 24;
                    continue _fun89621
                }
            case 20:
                var0 = _closure1_slot15;
            case 24:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var5 = var0.userId;
        var2 = {};
        var4 = _closure1_slot17;
        var0 = undefined;
        var7 = var4.bind(var0)(var3);
        var8 = var2;
        var4 = copyDataProperties(var8, var7);
        var4 = global;
        var6 = var4.clearTimeout;
        var4 = var2[var5];
        var4 = var6.bind(var0)(var4);
        var4 = function arg0, arg1() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = global;
            var3 = var1.setTimeout;
            var2 = _closure1_slot12;
            var1 = undefined;
            var0 = function() { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'TYPING_STOP';
                var1.type = var4;
                var5 = _closure3_slot0;
                var1.channelId = var5;
                var4 = _closure3_slot1;
                var1.userId = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0 = var3.bind(var1)(var0, var2);
            return var0;
        };
        var4 = var4.bind(var0)(var3, var5);
        var2[var5] = var4;
        var1 = _closure1_slot14;
        var1[var3] = var2;
        return var0;
    };
    var _closure1_slot18 = var10;
    var9 = function arg0() {
        _fun89625: for (var _fun89625_ip = 0;;) switch (_fun89625_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var4 = var0.userId;
                var0 = _closure1_slot14;
                var0 = var0[var3];
                var5 = null;
                if (!(var5 != var0)) {
                    _fun89625_ip = 83;
                    continue _fun89625
                }
            case 30:
                var2 = var0[var4];
                if (!(var5 != var2)) {
                    _fun89625_ip = 83;
                    continue _fun89625
                }
            case 38:
                var2 = {};
                var8 = var2;
                var7 = var0;
                var0 = copyDataProperties(var8, var7);
                var0 = global;
                var6 = var0.clearTimeout;
                var5 = var2[var4];
                var0 = undefined;
                var5 = var6.bind(var0)(var5);
                var4 = delete var2[var4];
                var1 = _closure1_slot14;
                var1[var3] = var2;
                return var0;
            case 83:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot19 = var9;
    var8 = function() {
        var0 = {};
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.SlowmodeType;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.Endpoints;
    var _closure1_slot10 = var7;
    var7 = 8;
    var11 = var5[var7];
    var11 = var6.bind(var0)(var11);
    var11 = var11.Millis;
    var12 = var11.SECOND;
    var11 = 10;
    var11 = var11 * var12;
    var _closure1_slot12 = var11;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var11 = var7.SECOND;
    var7 = 1.5;
    var7 = var7 * var11;
    var _closure1_slot13 = var7;
    var7 = {};
    var _closure1_slot14 = var7;
    var11 = var1.Object;
    var7 = var11.freeze;
    var1 = {};
    var1 = var7.bind(var11)(var1);
    var _closure1_slot15 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun89628: for (var _fun89628_ip = 0;;) switch (_fun89628_ip) {
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
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun89628_ip = 69;
                        continue _fun89628
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun89628_ip = 105;
                    continue _fun89628;
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
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getTypingUsers';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot17;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isTyping';
        var4.key = var6;
        var5 = function arg0, arg1() {
            var2 = _closure1_slot17;
            var1 = undefined;
            var0 = arg0;
            var1 = var2.bind(var1)(var0);
            var0 = arg1;
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'TypingStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var15 = var6.bind(var0)(var1);
    var1 = {};
    var1.TYPING_START = var10;
    var1.TYPING_STOP = var9;
    var9 = function arg0() {
        _fun89632: for (var _fun89632_ip = 0;;) switch (_fun89632_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot8;
                var0 = var3.getId;
                var3 = var0.bind(var3)();
                var _closure2_slot1 = var3;
                var8 = null;
                if (!(var8 != var3)) {
                    _fun89632_ip = 332;
                    continue _fun89632
                }
            case 44:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 9;
                var5 = var5[var0];
                var0 = undefined;
                var5 = var6.bind(var0)(var5);
                var5 = var5.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                if (!(var4 !== var5)) {
                    _fun89632_ip = 328;
                    continue _fun89632
                }
            case 79:
                var5 = _closure1_slot11;
                var5 = var8 != var5;
                if (!var5) {
                    _fun89632_ip = 103;
                    continue _fun89632
                }
            case 90:
                var6 = _closure1_slot11;
                var6 = var6.channelId;
                var5 = var6 !== var4;
            case 103:
                if (!var5) {
                    _fun89632_ip = 147;
                    continue _fun89632
                }
            case 106:
                var5 = _closure1_slot11;
                var5 = var5.timeout;
                if (!(var8 != var5)) {
                    _fun89632_ip = 143;
                    continue _fun89632
                }
            case 120:
                var5 = global;
                var6 = var5.clearTimeout;
                var5 = _closure1_slot11;
                var5 = var5.timeout;
                var5 = var6.bind(var0)(var5);
            case 143:
                var _closure1_slot11 = var8;
            case 147:
                var6 = global;
                var7 = var6.Date;
                var5 = var7.now;
                var5 = var5.bind(var7)();
                var9 = _closure1_slot12;
                var7 = 0.8;
                var9 = var7 * var9;
                var7 = _closure1_slot11;
                if (!(var8 != var7)) {
                    _fun89632_ip = 222;
                    continue _fun89632
                }
            case 190:
                var7 = _closure1_slot11;
                var7 = var7.timeout;
                if (!(var8 == var7)) {
                    _fun89632_ip = 324;
                    continue _fun89632
                }
            case 204:
                var7 = _closure1_slot11;
                var7 = var7.prevSend;
                var7 = var7 + var9;
                if (!(!(var7 > var5))) {
                    _fun89632_ip = 324;
                    continue _fun89632
                }
            case 222:
                var7 = _closure1_slot11;
                if (!(var8 != var7)) {
                    _fun89632_ip = 260;
                    continue _fun89632
                }
            case 230:
                var7 = _closure1_slot11;
                var8 = var7.prevSend;
                var7 = 2;
                var7 = var7 * var9;
                var7 = var5 - var7;
                var8 = var8 > var7;
                var7 = 0;
                if (!var8) {
                    _fun89632_ip = 264;
                    continue _fun89632
                }
            case 260:
                var7 = _closure1_slot13;
            case 264:
                var6 = var6.setTimeout;
                var2 = function() { // Environment: var2
                    _fun89633: for (var _fun89633_ip = 0;;) switch (_fun89633_ip) {
                        case 0:
                            var0 = _closure1_slot11;
                            var1 = null;
                            var0 = var1 != var0;
                            if (!var0) {
                                _fun89633_ip = 36;
                                continue _fun89633
                            }
                        case 16:
                            var2 = _closure1_slot11;
                            var3 = var2.channelId;
                            var2 = _closure2_slot0;
                            var0 = var3 === var2;
                        case 36:
                            if (!var0) {
                                _fun89633_ip = 64;
                                continue _fun89633
                            }
                        case 39:
                            var3 = _closure2_slot1;
                            var5 = _closure1_slot8;
                            var2 = var5.getId;
                            var2 = var2.bind(var5)();
                            var0 = var3 === var2;
                        case 64:
                            if (!var0) {
                                _fun89633_ip = 81;
                                continue _fun89633
                            }
                        case 67:
                            var2 = _closure1_slot11;
                            var2 = var2.timeout;
                            var0 = var1 != var2;
                        case 81:
                            if (!var0) {
                                _fun89633_ip = 245;
                                continue _fun89633
                            }
                        case 87:
                            var0 = _closure1_slot11;
                            var0.timeout = var1;
                            var1 = _closure2_slot0;
                            var0 = _closure1_slot17;
                            var2 = undefined;
                            var6 = var0.bind(var2)(var1);
                            var0 = _closure1_slot15;
                            var1 = 0;
                            if (!(var6 !== var0)) {
                                _fun89633_ip = 148;
                                continue _fun89633
                            }
                        case 125:
                            var0 = global;
                            var5 = var0.Object;
                            var0 = var5.keys;
                            var0 = var0.bind(var5)(var6);
                            var1 = var0.length;
                        case 148:
                            var0 = 5;
                            if (!(!(var1 > var0))) {
                                _fun89633_ip = 245;
                                continue _fun89633
                            }
                        case 155:
                            var1 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 10;
                            var0 = var5[var0];
                            var0 = var1.bind(var2)(var0);
                            var2 = var0.HTTP;
                            var1 = var2.post;
                            var0 = {
                                'url': null,
                                'oldFormErrors': true,
                                'rejectWithError': true
                            };
                            var5 = _closure1_slot10;
                            var4 = var5.TYPING;
                            var3 = _closure2_slot0;
                            var3 = var4.bind(var5)(var3);
                            var0.url = var3;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                _fun89634: for (var _fun89634_ip = 0;;) switch (_fun89634_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.status;
                                        var0 = 200;
                                        if (!(var0 === var2)) {
                                            _fun89634_ip = 236;
                                            continue _fun89634
                                        }
                                    case 18:
                                        var0 = var1.body;
                                        var3 = var0.message_send_cooldown_ms;
                                        var2 = null;
                                        var4 = var2 != var3;
                                        var0 = 0;
                                        var5 = 0;
                                        if (!var4) {
                                            _fun89634_ip = 47;
                                            continue _fun89634
                                        }
                                    case 44:
                                        var5 = var3;
                                    case 47:
                                        var1 = var1.body;
                                        var1 = var1.thread_create_cooldown_ms;
                                        var2 = var2 != var1;
                                        var3 = 0;
                                        if (!var2) {
                                            _fun89634_ip = 72;
                                            continue _fun89634
                                        }
                                    case 69:
                                        var3 = var1;
                                    case 72:
                                        if (!(var5 > var0)) {
                                            _fun89634_ip = 154;
                                            continue _fun89634
                                        }
                                    case 76:
                                        var4 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 11;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var2);
                                        var2 = var4.dispatch;
                                        var1 = {};
                                        var7 = 'SLOWMODE_SET_COOLDOWN';
                                        var1.type = var7;
                                        var7 = _closure2_slot0;
                                        var1.channelId = var7;
                                        var6 = _closure1_slot9;
                                        var6 = var6.SendMessage;
                                        var1.slowmodeType = var6;
                                        var1.cooldownMs = var5;
                                        var1 = var2.bind(var4)(var1);
                                    case 154:
                                        if (!(var3 > var0)) {
                                            _fun89634_ip = 236;
                                            continue _fun89634
                                        }
                                    case 158:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 11;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.dispatch;
                                        var0 = {};
                                        var5 = 'SLOWMODE_SET_COOLDOWN';
                                        var0.type = var5;
                                        var5 = _closure2_slot0;
                                        var0.channelId = var5;
                                        var4 = _closure1_slot9;
                                        var4 = var4.CreateThread;
                                        var0.slowmodeType = var4;
                                        var0.cooldownMs = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 236:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 245:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var6.bind(var0)(var2, var7);
                var2 = {};
                var2.channelId = var4;
                var2.timeout = var6;
                var2.prevSend = var5;
                _closure1_slot11 = var2;
                var2 = _closure1_slot18;
                var1 = {};
                var1.channelId = var4;
                var1.userId = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 324:
                var0 = false;
                return var0;
            case 328:
                var0 = false;
                return var0;
            case 332:
                var0 = false;
                return var0;
        }
    };
    var1.TYPING_START_LOCAL = var9;
    var9 = function arg0() {
        _fun89635: for (var _fun89635_ip = 0;;) switch (_fun89635_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var1 = _closure1_slot8;
                var0 = var1.getId;
                var5 = var0.bind(var1)();
                var3 = null;
                var0 = var3 != var5;
                if (!var0) {
                    _fun89635_ip = 129;
                    continue _fun89635
                }
            case 34:
                var1 = _closure1_slot11;
                var1 = var3 != var1;
                if (!var1) {
                    _fun89635_ip = 58;
                    continue _fun89635
                }
            case 45:
                var4 = _closure1_slot11;
                var4 = var4.channelId;
                var1 = var4 === var6;
            case 58:
                if (!var1) {
                    _fun89635_ip = 75;
                    continue _fun89635
                }
            case 61:
                var4 = _closure1_slot11;
                var4 = var4.timeout;
                var1 = var3 != var4;
            case 75:
                if (!var1) {
                    _fun89635_ip = 126;
                    continue _fun89635
                }
            case 78:
                var4 = global;
                var8 = var4.clearTimeout;
                var4 = _closure1_slot11;
                var7 = var4.timeout;
                var4 = undefined;
                var7 = var8.bind(var4)(var7);
                _closure1_slot11 = var3;
                var3 = _closure1_slot19;
                var2 = {};
                var2.channelId = var6;
                var2.userId = var5;
                var1 = var3.bind(var4)(var2);
            case 126:
                var0 = var1;
            case 129:
                return var0;
        }
    };
    var1.TYPING_STOP_LOCAL = var9;
    var1.CONNECTION_OPEN = var8;
    var1.OVERLAY_INITIALIZE = var8;
    var3 = function arg0() {
        _fun89636: for (var _fun89636_ip = 0;;) switch (_fun89636_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var1 = var0.message;
                var1 = var1.author;
                var0 = var0.optimistic;
                if (!var0) {
                    _fun89636_ip = 97;
                    continue _fun89636
                }
            case 28:
                var3 = _closure1_slot11;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun89636_ip = 97;
                    continue _fun89636
                }
            case 41:
                var3 = _closure1_slot11;
                var3 = var3.channelId;
                if (!(var3 === var4)) {
                    _fun89636_ip = 97;
                    continue _fun89636
                }
            case 54:
                var3 = _closure1_slot11;
                var3 = var3.timeout;
                if (!(var0 != var3)) {
                    _fun89636_ip = 93;
                    continue _fun89636
                }
            case 68:
                var3 = global;
                var6 = var3.clearTimeout;
                var3 = _closure1_slot11;
                var5 = var3.timeout;
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
            case 93:
                _closure1_slot11 = var0;
            case 97:
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun89636_ip = 135;
                    continue _fun89636
                }
            case 106:
                var3 = _closure1_slot19;
                var2 = {};
                var2.channelId = var4;
                var1 = var1.id;
                var2.userId = var1;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 135:
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var16 = var3;
    var14 = var1;
    var1 = new var16[var7](var15, var14, var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/TypingStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 6555, 660, 667, 5648, 507, 806, 566, 2]);