// modules/forums/ForumPostMessagesStore.tsx
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
        _fun50078: for (var _fun50078_ip = 0;;) switch (_fun50078_ip) {
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
            case 70: // try_end0
                _fun50078_ip = 74;
                continue _fun50078;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun50081: for (var _fun50081_ip = 0;;) switch (_fun50081_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun50081_ip = 46;
                    continue _fun50081
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun50081_ip = 55;
                    continue _fun50081
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun50081_ip = 343;
                    continue _fun50081
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun50081_ip = 323;
                    continue _fun50081
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun50081_ip = 283;
                    continue _fun50081
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun50081_ip = 270;
                    continue _fun50081
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
                    _fun50081_ip = 163;
                    continue _fun50081
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun50081_ip = 179;
                    continue _fun50081
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun50081_ip = 249;
                    continue _fun50081
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun50081_ip = 249;
                    continue _fun50081
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun50081_ip = 234;
                    continue _fun50081
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun50081_ip = 247;
                    continue _fun50081
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun50081_ip = 265;
                continue _fun50081;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun50081_ip = 283;
                continue _fun50081;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun50081_ip = 323;
                    continue _fun50081
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
                    _fun50081_ip = 330;
                    continue _fun50081
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun50082: for (var _fun50082_ip = 0;;) switch (_fun50082_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun50082_ip = 56;
                                continue _fun50082
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
                            _fun50082_ip = 67;
                            continue _fun50082;
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
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun50083: for (var _fun50083_ip = 0;;) switch (_fun50083_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun50083_ip = 23;
                    continue _fun50083
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun50083_ip = 33;
                    continue _fun50083
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
                    _fun50083_ip = 70;
                    continue _fun50083
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun50083_ip = 55;
                    continue _fun50083
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var8 = function arg0() {
        _fun50084: for (var _fun50084_ip = 0;;) switch (_fun50084_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.threads;
                var2 = var0.firstMessages;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun50084_ip = 155;
                    continue _fun50084
                }
            case 24:
                var1 = _closure1_slot12;
                var0 = undefined;
                var5 = var1.bind(var0)(var3);
                var3 = var5.bind(var0)();
                var1 = var3.done;
                if (var1) {
                    _fun50084_ip = 97;
                    continue _fun50084
                }
            case 50:
                var1 = var3.value;
                var7 = _closure1_slot10;
                var6 = var1.id;
                var1 = {
                    'loaded': true,
                    'firstMessage': null
                };
                var7[var6] = var1;
                var6 = var5.bind(var0)();
                var1 = var6.done;
                var3 = var6;
                if (!var1) {
                    _fun50084_ip = 50;
                    continue _fun50084
                }
            case 97:
                var1 = _closure1_slot12;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun50084_ip = 153;
                    continue _fun50084
                }
            case 118:
                var6 = var2.value;
                var5 = _closure1_slot14;
                var1 = var6.channel_id;
                var1 = var5.bind(var0)(var1, var6);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun50084_ip = 118;
                    continue _fun50084
                }
            case 153:
                return var0;
            case 155:
                var0 = false;
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun50085: for (var _fun50085_ip = 0;;) switch (_fun50085_ip) {
            case 0:
                var3 = arg1;
                var0 = null;
                var1 = var0 == var3;
                if (var1) {
                    _fun50085_ip = 48;
                    continue _fun50085
                }
            case 12:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.createMessageRecord;
                var0 = var1.bind(var2)(var3);
            case 48:
                var2 = _closure1_slot10;
                var1 = {};
                var3 = true;
                var1.loaded = var3;
                var1.firstMessage = var0;
                var0 = arg0;
                var2[var0] = var1;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var9 = function arg0() {
        _fun50086: for (var _fun50086_ip = 0;;) switch (_fun50086_ip) {
            case 0:
                var2 = arg0;
                var4 = var2.type;
                var1 = var2.channelId;
                var11 = var2.messageId;
                var10 = var2.userId;
                var7 = var2.emoji;
                var8 = var2.optimistic;
                var6 = var2.reactionType;
                var3 = _closure1_slot10;
                var3 = var3[var1];
                var5 = null;
                if (!(var5 != var3)) {
                    _fun50086_ip = 235;
                    continue _fun50086
                }
            case 61:
                var9 = var3.firstMessage;
                if (!(var5 != var9)) {
                    _fun50086_ip = 235;
                    continue _fun50086
                }
            case 74:
                var9 = var3.firstMessage;
                var9 = var9.id;
                if (!(var11 === var9)) {
                    _fun50086_ip = 231;
                    continue _fun50086
                }
            case 92:
                var11 = _closure1_slot9;
                var9 = var11.getCurrentUser;
                var9 = var9.bind(var11)();
                var5 = var5 != var9;
                if (!var5) {
                    _fun50086_ip = 121;
                    continue _fun50086
                }
            case 112:
                var9 = var9.id;
                var5 = var9 === var10;
            case 121:
                if (!var8) {
                    _fun50086_ip = 131;
                    continue _fun50086
                }
            case 124:
                if (var5) {
                    _fun50086_ip = 131;
                    continue _fun50086
                }
            case 127:
                var8 = false;
                return var8;
            case 131:
                var9 = _closure1_slot10;
                var8 = {};
                var15 = var8;
                var14 = var3;
                var10 = copyDataProperties(var15, var14);
                var9[var1] = var8;
                var0 = _closure1_slot10;
                var1 = var0[var1];
                var0 = 'MESSAGE_REACTION_ADD';
                if (!(var0 !== var4)) {
                    _fun50086_ip = 188;
                    continue _fun50086
                }
            case 167:
                var4 = var3.firstMessage;
                var0 = var4.removeReaction;
                var0 = var0.bind(var4)(var7, var5, var6);
                _fun50086_ip = 221;
                continue _fun50086;
            case 188:
                var4 = var3.firstMessage;
                var3 = var4.addReaction;
                var13 = var2.colors;
                var16 = var4;
                var15 = var7;
                var14 = var5;
                var12 = var6;
                var0 = var16[var3](var15, var14, var13, var12, var11);
            case 221:
                var1.firstMessage = var0;
                var0 = undefined;
                return var0;
            case 231:
                var0 = false;
                return var0;
            case 235:
                var0 = false;
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun50088: for (var _fun50088_ip = 0;;) switch (_fun50088_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50088_ip = 69;
                        continue _fun50088
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50088_ip = 105;
                    continue _fun50088;
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
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var0 = _closure1_slot9;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'isLoading';
        var4.key = var6;
        var6 = function arg0() {
            _fun50090: for (var _fun50090_ip = 0;;) switch (_fun50090_ip) {
                case 0:
                    var1 = _closure1_slot10;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    var2 = var1 == var0;
                    var1 = undefined;
                    if (var2) {
                        _fun50090_ip = 31;
                        continue _fun50090
                    }
                case 25:
                    var1 = var0.loaded;
                case 31:
                    var0 = true;
                    var0 = var0 !== var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMessage';
        var4.key = var6;
        var5 = function arg0() {
            _fun50091: for (var _fun50091_ip = 0;;) switch (_fun50091_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot10;
                    var2 = var1 in var2;
                    if (var2) {
                        _fun50091_ip = 39;
                        continue _fun50091
                    }
                case 17:
                    var3 = _closure1_slot10;
                    var2 = {
                        'loaded': false,
                        'firstMessage': null
                    };
                    var3[var1] = var2;
                case 39:
                    var0 = _closure1_slot10;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ForumPostMessagesStore';
    var7.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function() {
        var0 = {};
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var10;
    var10 = function arg0() {
        _fun50093: for (var _fun50093_ip = 0;;) switch (_fun50093_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.isPushNotification;
                var0 = !var0;
                if (!var0) {
                    _fun50093_ip = 108;
                    continue _fun50093
                }
            case 15:
                var1 = var3.message;
                var5 = var1.id;
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var1 = var2[var1];
                var2 = undefined;
                var7 = var6.bind(var2)(var1);
                var6 = var7.castChannelIdAsMessageId;
                var1 = var3.message;
                var1 = var1.channel_id;
                var1 = var6.bind(var7)(var1);
                var1 = var5 === var1;
                if (!var1) {
                    _fun50093_ip = 105;
                    continue _fun50093
                }
            case 78:
                var5 = _closure1_slot14;
                var4 = var3.message;
                var4 = var4.channel_id;
                var3 = var3.message;
                var3 = var5.bind(var2)(var4, var3);
                var1 = undefined;
            case 105:
                var0 = var1;
            case 108:
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var10;
    var10 = function arg0() {
        _fun50094: for (var _fun50094_ip = 0;;) switch (_fun50094_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.message;
                var1 = var0.id;
                var0 = var5.message;
                var0 = var0.channel_id;
                if (!(var1 === var0)) {
                    _fun50094_ip = 222;
                    continue _fun50094
                }
            case 30:
                var1 = _closure1_slot10;
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 7;
                var0 = var0[var2];
                var9 = undefined;
                var4 = var3.bind(var9)(var0);
                var3 = var4.castMessageIdAsChannelId;
                var0 = var5.message;
                var0 = var0.id;
                var0 = var3.bind(var4)(var0);
                var6 = var1[var0];
                var3 = null;
                var0 = var3 != var6;
                if (!var0) {
                    _fun50094_ip = 220;
                    continue _fun50094
                }
            case 96:
                var1 = var6.firstMessage;
                var1 = var3 != var1;
                if (!var1) {
                    _fun50094_ip = 217;
                    continue _fun50094
                }
            case 109:
                var4 = _closure1_slot10;
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = var10[var2];
                var8 = var3.bind(var9)(var2);
                var3 = var8.castMessageIdAsChannelId;
                var2 = var5.message;
                var2 = var2.id;
                var3 = var3.bind(var8)(var2);
                var2 = {};
                var12 = var2;
                var11 = var6;
                var8 = copyDataProperties(var12, var11);
                var8 = _closure1_slot0;
                var7 = 8;
                var7 = var10[var7];
                var8 = var8.bind(var9)(var7);
                var7 = var8.updateMessageRecord;
                var6 = var6.firstMessage;
                var5 = var5.message;
                var6 = var7.bind(var8)(var6, var5);
                var5 = 'firstMessage';
                var2[var5] = var6;
                var4[var3] = var2;
                var1 = undefined;
            case 217:
                var0 = var1;
            case 220:
                return var0;
            case 222:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_UPDATE = var10;
    var10 = function arg0() {
        _fun50095: for (var _fun50095_ip = 0;;) switch (_fun50095_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.id;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 7;
                var3 = var3[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var3);
                var5 = var6.castChannelIdAsMessageId;
                var3 = var1.channelId;
                var3 = var5.bind(var6)(var3);
                if (!(var4 === var3)) {
                    _fun50095_ip = 82;
                    continue _fun50095
                }
            case 53:
                var3 = _closure1_slot10;
                var2 = var1.channelId;
                var1 = {
                    'loaded': true,
                    'firstMessage': null
                };
                var3[var2] = var1;
                return var0;
            case 82:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_DELETE = var10;
    var10 = function arg0() {
        _fun50096: for (var _fun50096_ip = 0;;) switch (_fun50096_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var0 = var2.channel;
                var0 = var0.id;
                var1 = var1[var0];
                var0 = null;
                var0 = var0 == var1;
                if (!var0) {
                    _fun50096_ip = 104;
                    continue _fun50096
                }
            case 33:
                var5 = _closure1_slot8;
                var4 = var5.isSubscribedToThreads;
                var1 = var2.channel;
                var1 = var1.guild_id;
                var1 = var4.bind(var5)(var1);
                var4 = !var1;
                var1 = !var4;
                if (var4) {
                    _fun50096_ip = 101;
                    continue _fun50096
                }
            case 67:
                var4 = _closure1_slot10;
                var2 = var2.channel;
                var3 = var2.id;
                var2 = {
                    'loaded': true,
                    'firstMessage': null
                };
                var4[var3] = var2;
                var1 = undefined;
            case 101:
                var0 = var1;
            case 104:
                return var0;
        }
    };
    var1.THREAD_CREATE = var10;
    var1.MESSAGE_REACTION_ADD = var9;
    var1.MESSAGE_REACTION_REMOVE = var9;
    var9 = function arg0() {
        _fun50097: for (var _fun50097_ip = 0;;) switch (_fun50097_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var3 = var0.messageId;
                var0 = _closure1_slot10;
                var5 = var0[var4];
                var6 = null;
                var0 = var6 != var5;
                if (!var0) {
                    _fun50097_ip = 43;
                    continue _fun50097
                }
            case 33:
                var1 = var5.firstMessage;
                var0 = var6 != var1;
            case 43:
                if (!var0) {
                    _fun50097_ip = 123;
                    continue _fun50097
                }
            case 46:
                var1 = var5.firstMessage;
                var1 = var1.id;
                var1 = var3 === var1;
                if (!var1) {
                    _fun50097_ip = 120;
                    continue _fun50097
                }
            case 64:
                var3 = _closure1_slot10;
                var2 = {};
                var10 = var2;
                var9 = var5;
                var6 = copyDataProperties(var10, var9);
                var8 = var5.firstMessage;
                var7 = var8.set;
                var6 = 'reactions';
                var5 = new Array(0);
                var6 = var7.bind(var8)(var6, var5);
                var5 = 'firstMessage';
                var2[var5] = var6;
                var3[var4] = var2;
                var1 = undefined;
            case 120:
                var0 = var1;
            case 123:
                return var0;
        }
    };
    var1.MESSAGE_REACTION_REMOVE_ALL = var9;
    var9 = function arg0() {
        _fun50098: for (var _fun50098_ip = 0;;) switch (_fun50098_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var3 = var0.messageId;
                var7 = var0.emoji;
                var0 = _closure1_slot10;
                var5 = var0[var4];
                var6 = null;
                var0 = var6 != var5;
                if (!var0) {
                    _fun50098_ip = 49;
                    continue _fun50098
                }
            case 39:
                var1 = var5.firstMessage;
                var0 = var6 != var1;
            case 49:
                if (!var0) {
                    _fun50098_ip = 121;
                    continue _fun50098
                }
            case 52:
                var1 = var5.firstMessage;
                var1 = var1.id;
                var1 = var3 === var1;
                if (!var1) {
                    _fun50098_ip = 118;
                    continue _fun50098
                }
            case 70:
                var3 = _closure1_slot10;
                var2 = {};
                var9 = var2;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var6 = var5.firstMessage;
                var5 = var6.removeReactionsForEmoji;
                var6 = var5.bind(var6)(var7);
                var5 = 'firstMessage';
                var2[var5] = var6;
                var3[var4] = var2;
                var1 = undefined;
            case 118:
                var0 = var1;
            case 121:
                return var0;
        }
    };
    var1.MESSAGE_REACTION_REMOVE_EMOJI = var9;
    var9 = function arg0() {
        _fun50099: for (var _fun50099_ip = 0;;) switch (_fun50099_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var5 = var0.messageId;
                var7 = var0.reactions;
                var0 = _closure1_slot10;
                var4 = var0[var3];
                var0 = null;
                if (!(var0 != var4)) {
                    _fun50099_ip = 143;
                    continue _fun50099
                }
            case 36:
                var2 = var4.firstMessage;
                if (!(var0 != var2)) {
                    _fun50099_ip = 143;
                    continue _fun50099
                }
            case 46:
                var2 = var4.firstMessage;
                var2 = var2.id;
                if (!(var5 === var2)) {
                    _fun50099_ip = 139;
                    continue _fun50099
                }
            case 61:
                var5 = _closure1_slot9;
                var2 = var5.getCurrentUser;
                var8 = var2.bind(var5)();
                var6 = var4.firstMessage;
                var5 = var6.addReactionBatch;
                var9 = var0 == var8;
                var0 = undefined;
                var2 = undefined;
                if (var9) {
                    _fun50099_ip = 102;
                    continue _fun50099
                }
            case 97:
                var2 = var8.id;
            case 102:
                var5 = var5.bind(var6)(var7, var2);
                var2 = _closure1_slot10;
                var1 = {};
                var11 = var1;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = 'firstMessage';
                var1[var4] = var5;
                var2[var3] = var1;
                return var0;
            case 139:
                var0 = false;
                return var0;
            case 143:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_REACTION_ADD_MANY = var9;
    var9 = function arg0() {
        _fun50100: for (var _fun50100_ip = 0;;) switch (_fun50100_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.threads;
                var5 = var7;
                var0 = undefined;
                for (var2 in var5)
                    case 25: {
                        case 34: var10 = var2;
                        var9 = _closure1_slot14;
                        var8 = var7[var10];
                        var8 = var8.first_message;
                        var8 = var9.bind(var0)(var10, var8);
                        _fun50100_ip = 25;
                        continue _fun50100;
                    }
            case 59:
                return var0;
        }
    };
    var1.LOAD_FORUM_POSTS = var9;
    var1.LOAD_THREADS_SUCCESS = var8;
    var1.LOAD_ARCHIVED_THREADS_SUCCESS = var8;
    var3 = function arg0() {
        _fun50101: for (var _fun50101_ip = 0;;) switch (_fun50101_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var1 = var0.messages;
                var3 = var1.length;
                var0 = 1;
                var0 = var3 - var0;
                var5 = var1[var0];
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun50101_ip = 84;
                    continue _fun50101
                }
            case 39:
                var3 = var5.id;
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 7;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var1 = var4.castChannelIdAsMessageId;
                var1 = var1.bind(var4)(var2);
                var0 = var3 === var1;
            case 84:
                if (!var0) {
                    _fun50101_ip = 145;
                    continue _fun50101
                }
            case 87:
                var1 = _closure1_slot10;
                var0 = {};
                var4 = true;
                var0.loaded = var4;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.createMessageRecord;
                var3 = var3.bind(var4)(var5);
                var0.firstMessage = var3;
                var1[var2] = var0;
            case 145:
                var0 = undefined;
                return var0;
        }
    };
    var1.LOAD_MESSAGES_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/ForumPostMessagesStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5651, 1621, 21, 3971, 566, 806, 2]);