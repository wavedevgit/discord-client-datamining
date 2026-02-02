// stores/MessageStore.tsx
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
        _fun38810: for (var _fun38810_ip = 0;;) switch (_fun38810_ip) {
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
                _fun38810_ip = 74;
                continue _fun38810;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot28 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun38813: for (var _fun38813_ip = 0;;) switch (_fun38813_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun38813_ip = 46;
                    continue _fun38813
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun38813_ip = 55;
                    continue _fun38813
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun38813_ip = 343;
                    continue _fun38813
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun38813_ip = 323;
                    continue _fun38813
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun38813_ip = 283;
                    continue _fun38813
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun38813_ip = 270;
                    continue _fun38813
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
                    _fun38813_ip = 163;
                    continue _fun38813
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun38813_ip = 179;
                    continue _fun38813
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun38813_ip = 249;
                    continue _fun38813
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun38813_ip = 249;
                    continue _fun38813
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun38813_ip = 234;
                    continue _fun38813
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun38813_ip = 247;
                    continue _fun38813
                }
            case 234:
                var8 = _closure1_slot30;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun38813_ip = 265;
                continue _fun38813;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun38813_ip = 283;
                continue _fun38813;
            case 270:
                var6 = _closure1_slot30;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun38813_ip = 323;
                    continue _fun38813
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
                    _fun38813_ip = 330;
                    continue _fun38813
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun38814: for (var _fun38814_ip = 0;;) switch (_fun38814_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun38814_ip = 56;
                                continue _fun38814
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
                            _fun38814_ip = 67;
                            continue _fun38814;
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
    var _closure1_slot29 = var0;
    var0 = function arg0, arg1() {
        _fun38815: for (var _fun38815_ip = 0;;) switch (_fun38815_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun38815_ip = 23;
                    continue _fun38815
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun38815_ip = 33;
                    continue _fun38815
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
                    _fun38815_ip = 70;
                    continue _fun38815
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun38815_ip = 55;
                    continue _fun38815
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var12 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 21;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.forEach;
        var2 = function(arg0) { // Environment: var2
            var5 = arg0;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.commit;
            var4 = var5.mutate;
            var1 = {
                'ready': false,
                'loadingMore': false
            };
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot25;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        return var0;
    };
    var10 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 21;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun38819: for (var _fun38819_ip = 0;;) switch (_fun38819_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.channelId;
                    var3 = _closure1_slot12;
                    var1 = var3.getChannel;
                    var3 = var1.bind(var3)(var2);
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun38819_ip = 64;
                        continue _fun38819
                    }
                case 31:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var0 = var1.clear;
                    var0 = var0.bind(var1)(var2);
                case 64:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var9 = function() {
        var1 = false;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 21;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            var5 = arg0;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.commit;
            var4 = var5.reset;
            var6 = var5.map;
            var1 = function(arg0) { // Environment: var1
                _fun38822: for (var _fun38822_ip = 0;;) switch (_fun38822_ip) {
                    case 0:
                        var5 = arg0;
                        var3 = var5.blocked;
                        var2 = _closure1_slot18;
                        var0 = var2.isBlockedForMessage;
                        var2 = var0.bind(var2)(var5);
                        var0 = var5;
                        if (!(var3 !== var2)) {
                            _fun38822_ip = 73;
                            continue _fun38822
                        }
                    case 34:
                        var2 = true;
                        _closure2_slot0 = var2;
                        var4 = var5.set;
                        var3 = _closure1_slot18;
                        var2 = var3.isBlockedForMessage;
                        var3 = var2.bind(var3)(var5);
                        var2 = 'blocked';
                        var0 = var4.bind(var5)(var2, var3);
                    case 73:
                        var3 = var0.ignored;
                        var4 = _closure1_slot18;
                        var2 = var4.isIgnoredForMessage;
                        var2 = var2.bind(var4)(var0);
                        var4 = var0;
                        var0 = var4;
                        if (!(var3 !== var2)) {
                            _fun38822_ip = 143;
                            continue _fun38822
                        }
                    case 104:
                        var2 = true;
                        _closure2_slot0 = var2;
                        var3 = var4.set;
                        var2 = _closure1_slot18;
                        var1 = var2.isIgnoredForMessage;
                        var2 = var1.bind(var2)(var4);
                        var1 = 'ignored';
                        var0 = var3.bind(var4)(var1, var2);
                    case 143:
                        return var0;
                }
            };
            var1 = var6.bind(var5)(var1);
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 21;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun38824: for (var _fun38824_ip = 0;;) switch (_fun38824_ip) {
                case 0:
                    var5 = arg0;
                    var4 = _closure1_slot12;
                    var3 = var4.getChannel;
                    var0 = var5.channelId;
                    var3 = var3.bind(var4)(var0);
                    var0 = null;
                    var6 = var0 == var3;
                    var0 = undefined;
                    var4 = undefined;
                    if (var6) {
                        _fun38824_ip = 45;
                        continue _fun38824
                    }
                case 40:
                    var4 = var3.guild_id;
                case 45:
                    var3 = _closure2_slot0;
                    if (!(var4 === var3)) {
                        _fun38824_ip = 134;
                        continue _fun38824
                    }
                case 56:
                    var4 = new Array(0);
                    var _closure3_slot0 = var4;
                    var3 = false;
                    var _closure3_slot1 = var3;
                    var6 = var5.forEach;
                    var3 = function(arg0) { // Environment: var2
                        _fun38825: for (var _fun38825_ip = 0;;) switch (_fun38825_ip) {
                            case 0:
                                var5 = arg0;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 27;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getMessageAuthor;
                                var1 = var1.bind(var2)(var5);
                                var7 = var1.nick;
                                var6 = var1.colorString;
                                var1 = var5.nick;
                                if (!(var7 === var1)) {
                                    _fun38825_ip = 90;
                                    continue _fun38825
                                }
                            case 61:
                                var1 = var5.colorString;
                                if (!(var6 === var1)) {
                                    _fun38825_ip = 90;
                                    continue _fun38825
                                }
                            case 71:
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var5);
                                _fun38825_ip = 136;
                                continue _fun38825;
                            case 90:
                                var2 = true;
                                _closure3_slot1 = var2;
                                var3 = _closure3_slot0;
                                var2 = var3.push;
                                var4 = var5.merge;
                                var1 = {};
                                var1.nick = var7;
                                var1.colorString = var6;
                                var1 = var4.bind(var5)(var1);
                                var1 = var2.bind(var3)(var1);
                            case 136:
                                return var0;
                        }
                    };
                    var3 = var6.bind(var5)(var3);
                    var2 = _closure3_slot1;
                    if (!var2) {
                        _fun38824_ip = 134;
                        continue _fun38824
                    }
                case 92:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.commit;
                    var1 = var5.reset;
                    var1 = var1.bind(var5)(var4);
                    var1 = var2.bind(var3)(var1);
                case 134:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var8 = function arg0() {
        _fun38826: for (var _fun38826_ip = 0;;) switch (_fun38826_ip) {
            case 0:
                var9 = arg0;
                var _closure2_slot0 = var9;
                var0 = var9.type;
                var _closure2_slot1 = var0;
                var8 = var9.channelId;
                var6 = var9.messageId;
                var7 = var9.userId;
                var0 = var9.emoji;
                var _closure2_slot2 = var0;
                var0 = var9.reactionType;
                var _closure2_slot3 = var0;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var3 = var0[var4];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.get;
                var5 = var3.bind(var5)(var8);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun38826_ip = 201;
                    continue _fun38826
                }
            case 94:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 28;
                var3 = var10[var3];
                var8 = var8.bind(var0)(var3);
                var3 = var8.shouldApplyReaction;
                var3 = var3.bind(var8)(var9);
                if (var3) {
                    _fun38826_ip = 132;
                    continue _fun38826
                }
            case 128:
                var3 = false;
                return var3;
            case 132:
                var8 = _closure1_slot11;
                var3 = var8.getId;
                var3 = var3.bind(var8)();
                var3 = var3 === var7;
                var _closure2_slot4 = var3;
                var3 = var5.update;
                var2 = function(arg0) { // Environment: var2
                    _fun38827: for (var _fun38827_ip = 0;;) switch (_fun38827_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure2_slot1;
                            var0 = 'MESSAGE_REACTION_ADD';
                            if (!(var0 !== var2)) {
                                _fun38827_ip = 45;
                                continue _fun38827
                            }
                        case 18:
                            var4 = var6.removeReaction;
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot4;
                            var0 = _closure2_slot3;
                            var0 = var4.bind(var6)(var3, var2, var0);
                            _fun38827_ip = 79;
                            continue _fun38827;
                        case 45:
                            var5 = var6.addReaction;
                            var10 = _closure2_slot2;
                            var9 = _closure2_slot4;
                            var2 = _closure2_slot0;
                            var8 = var2.colors;
                            var7 = _closure2_slot3;
                            var11 = var6;
                            var0 = var11[var5](var10, var9, var8, var7, var6);
                        case 79:
                            return var0;
                    }
                };
                var3 = var3.bind(var5)(var6, var2);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 201:
                var0 = false;
                return var0;
        }
    };
    var11 = function arg0() {
        _fun38828: for (var _fun38828_ip = 0;;) switch (_fun38828_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.type;
                var _closure2_slot0 = var1;
                var7 = var0.messageData;
                var4 = var7.message;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 29;
                var5 = var3[var0];
                var0 = undefined;
                var6 = var6.bind(var0)(var5);
                var5 = var6.getFailedMessageId;
                var6 = var5.bind(var6)(var7);
                var7 = var4.channelId;
                var5 = _closure1_slot1;
                var4 = 21;
                var3 = var3[var4];
                var5 = var5.bind(var0)(var3);
                var3 = var5.getOrCreate;
                var5 = var3.bind(var5)(var7);
                var3 = var5.has;
                var3 = var3.bind(var5)(var6);
                if (var3) {
                    _fun38828_ip = 110;
                    continue _fun38828
                }
            case 106:
                var3 = false;
                return var3;
            case 110:
                var3 = var5.update;
                var2 = function(arg0) { // Environment: var2
                    _fun38829: for (var _fun38829_ip = 0;;) switch (_fun38829_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = var3.embeds;
                            var0 = null;
                            var0 = var0 == var4;
                            var6 = undefined;
                            var1 = undefined;
                            if (var0) {
                                _fun38829_ip = 66;
                                continue _fun38829
                            }
                        case 22:
                            var2 = var4.filter;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 30;
                            var0 = var7[var0];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.isNotAutomodEmbed;
                            var0 = var2.bind(var4)(var0);
                            var1 = var0.length;
                        case 66:
                            var0 = 0;
                            var4 = var3;
                            if (!(var1 > var0)) {
                                _fun38829_ip = 94;
                                continue _fun38829
                            }
                        case 75:
                            var2 = var3.set;
                            var1 = 'embeds';
                            var0 = new Array(0);
                            var4 = var2.bind(var3)(var1, var0);
                        case 94:
                            var2 = _closure2_slot0;
                            var1 = 'MESSAGE_SEND_FAILED_AUTOMOD';
                            var0 = var4;
                            if (!(var1 === var2)) {
                                _fun38829_ip = 177;
                                continue _fun38829
                            }
                        case 112:
                            var3 = var4.set;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 23;
                            var2 = var7[var2];
                            var6 = var5.bind(var6)(var2);
                            var5 = var6.addFlag;
                            var2 = var4.flags;
                            var1 = _closure1_slot22;
                            var1 = var1.EPHEMERAL;
                            var2 = var5.bind(var6)(var2, var1);
                            var1 = 'flags';
                            var0 = var3.bind(var4)(var1, var2);
                        case 177:
                            return var0;
                    }
                };
                var3 = var3.bind(var5)(var6, var2);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var13.bind(var14)(var2, var0, var7);
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
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var7 = 12;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot15 = var7;
    var7 = 13;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot16 = var7;
    var7 = 14;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot17 = var7;
    var7 = 15;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot18 = var7;
    var7 = 16;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot19 = var7;
    var7 = 17;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot20 = var7;
    var7 = 18;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot21 = var7;
    var7 = 19;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var13 = var7.MessageFlags;
    var _closure1_slot22 = var13;
    var13 = var7.MessageStates;
    var _closure1_slot23 = var13;
    var7 = var7.Permissions;
    var _closure1_slot24 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var18 = var7;
    var1 = new var18[var1](var17);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot25 = var1;
    var1 = 20;
    var1 = var5[var1];
    var7 = var6.bind(var0)(var1);
    var1 = var7.prototype;
    var13 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var1 = 'MessageStore';
    var18 = var13;
    var17 = var1;
    var7 = new var18[var7](var17, var16);
    var7 = var7 instanceof Object ? var7 : var13;
    var _closure1_slot26 = var7;
    var7 = false;
    var _closure1_slot27 = var7;
    var7 = 34;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var13 = var7.Store;
    var7 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun38831: for (var _fun38831_ip = 0;;) switch (_fun38831_ip) {
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
                    var0 = _closure1_slot28;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun38831_ip = 69;
                        continue _fun38831
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun38831_ip = 105;
                    continue _fun38831;
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
            var14 = var3.waitFor;
            var27 = _closure1_slot11;
            var26 = _closure1_slot12;
            var25 = _closure1_slot13;
            var24 = _closure1_slot14;
            var23 = _closure1_slot15;
            var22 = _closure1_slot16;
            var0 = _closure1_slot9;
            var20 = _closure1_slot10;
            var19 = _closure1_slot17;
            var18 = _closure1_slot18;
            var17 = _closure1_slot19;
            var16 = _closure1_slot20;
            var15 = _closure1_slot21;
            var28 = var3;
            var21 = var0;
            var1 = var28[var14](var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
            var2 = var3.syncWith;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = function() { // Environment: var0
                var0 = undefined;
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(15);
        var0[0] = var4;
        var4 = {};
        var6 = 'getMessages';
        var4.key = var6;
        var6 = function arg0() {
            _fun38834: for (var _fun38834_ip = 0;;) switch (_fun38834_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure1_slot9;
                    var1 = var3.hasViewingRoles;
                    var1 = var1.bind(var3)();
                    if (!var1) {
                        _fun38834_ip = 157;
                        continue _fun38834
                    }
                case 28:
                    var3 = _closure1_slot12;
                    var1 = var3.getChannel;
                    var6 = var1.bind(var3)(var2);
                    var1 = null;
                    var1 = var1 == var6;
                    var4 = undefined;
                    var5 = undefined;
                    if (var1) {
                        _fun38834_ip = 65;
                        continue _fun38834
                    }
                case 55:
                    var1 = var6.getGuildId;
                    var5 = var1.bind(var6)();
                case 65:
                    var3 = _closure1_slot9;
                    var1 = var3.isViewingRoles;
                    var1 = var1.bind(var3)(var5);
                    if (!var1) {
                        _fun38834_ip = 157;
                        continue _fun38834
                    }
                case 83:
                    var5 = _closure1_slot17;
                    var3 = var5.can;
                    var1 = _closure1_slot24;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var3.bind(var5)(var1, var6);
                    if (var1) {
                        _fun38834_ip = 157;
                        continue _fun38834
                    }
                case 112:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 21;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var9 = var3;
                    var8 = var2;
                    var1 = new var9[var1](var8, var7);
                    var1 = var1 instanceof Object ? var1 : var3;
                    return var1;
                case 157:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var0 = var1.getOrCreate;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMessage';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getOrCreate;
            var0 = arg0;
            var2 = var1.bind(var2)(var0);
            var1 = var2.get;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getLastEditableMessage';
        var4.key = var6;
        var6 = function arg0() {
            var5 = this;
            var3 = _closure1_slot21;
            var2 = var3.getCurrentUser;
            var2 = var2.bind(var3)();
            var _closure3_slot0 = var2;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var4 = var5.getMessages;
            var1 = arg0;
            var4 = var4.bind(var5)(var1);
            var1 = var4.toArray;
            var1 = var1.bind(var4)();
            var2 = var2.bind(var3)(var1);
            var1 = var2.reverse;
            var2 = var1.bind(var2)();
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                _fun38837: for (var _fun38837_ip = 0;;) switch (_fun38837_ip) {
                    case 0:
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 32;
                        var0 = var2[var0];
                        var3 = undefined;
                        var2 = var1.bind(var3)(var0);
                        var4 = _closure3_slot0;
                        var1 = null;
                        var4 = var1 == var4;
                        var1 = undefined;
                        if (var4) {
                            _fun38837_ip = 52;
                            continue _fun38837
                        }
                    case 43:
                        var0 = _closure3_slot0;
                        var1 = var0.id;
                    case 52:
                        var0 = arg0;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getLastChatCommandMessage';
        var4.key = var6;
        var6 = function arg0() {
            var3 = this;
            var2 = _closure1_slot21;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var _closure3_slot0 = var1;
            var2 = var3.getMessages;
            var1 = arg0;
            var2 = var2.bind(var3)(var1);
            var1 = var2.toArray;
            var2 = var1.bind(var2)();
            var1 = var2.reverse;
            var2 = var1.bind(var2)();
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                _fun38839: for (var _fun38839_ip = 0;;) switch (_fun38839_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = var2.interaction;
                        var5 = null;
                        var3 = var5 == var0;
                        var1 = undefined;
                        var4 = undefined;
                        if (var3) {
                            _fun38839_ip = 27;
                            continue _fun38839
                        }
                    case 22:
                        var4 = var0.type;
                    case 27:
                        var6 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var7 = 33;
                        var0 = var0[var7];
                        var0 = var6.bind(var1)(var0);
                        var0 = var0.InteractionTypes;
                        var0 = var0.APPLICATION_COMMAND;
                        var0 = var4 === var0;
                        if (!var0) {
                            _fun38839_ip = 122;
                            continue _fun38839
                        }
                    case 69:
                        var6 = var2.interactionData;
                        var8 = var5 == var6;
                        var4 = undefined;
                        if (var8) {
                            _fun38839_ip = 89;
                            continue _fun38839
                        }
                    case 84:
                        var4 = var6.type;
                    case 89:
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.ApplicationCommandType;
                        var3 = var3.CHAT;
                        var0 = var4 === var3;
                    case 122:
                        if (!var0) {
                            _fun38839_ip = 170;
                            continue _fun38839
                        }
                    case 125:
                        var2 = var2.interaction;
                        var2 = var2.user;
                        var2 = var2.id;
                        var4 = _closure3_slot0;
                        var4 = var5 == var4;
                        var1 = undefined;
                        if (var4) {
                            _fun38839_ip = 166;
                            continue _fun38839
                        }
                    case 157:
                        var3 = _closure3_slot0;
                        var1 = var3.id;
                    case 166:
                        var0 = var2 === var1;
                    case 170:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getLastMessage';
        var4.key = var6;
        var6 = function arg0() {
            var4 = this;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 24;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var3 = var4.getMessages;
            var0 = arg0;
            var3 = var3.bind(var4)(var0);
            var0 = var3.toArray;
            var0 = var0.bind(var3)();
            var1 = var1.bind(var2)(var0);
            var0 = var1.reverse;
            var2 = var0.bind(var1)();
            var1 = var2.get;
            var0 = 0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getLastNonCurrentUserMessage';
        var4.key = var6;
        var6 = function arg0() {
            var5 = this;
            var3 = _closure1_slot21;
            var2 = var3.getCurrentUser;
            var2 = var2.bind(var3)();
            var _closure3_slot0 = var2;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var4 = var5.getMessages;
            var1 = arg0;
            var4 = var4.bind(var5)(var1);
            var1 = var4.toArray;
            var1 = var1.bind(var4)();
            var2 = var2.bind(var3)(var1);
            var1 = var2.reverse;
            var2 = var1.bind(var2)();
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                _fun38842: for (var _fun38842_ip = 0;;) switch (_fun38842_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.author;
                        var1 = var0.id;
                        var3 = _closure3_slot0;
                        var0 = null;
                        var3 = var0 == var3;
                        var0 = undefined;
                        if (var3) {
                            _fun38842_ip = 41;
                            continue _fun38842
                        }
                    case 32:
                        var2 = _closure3_slot0;
                        var0 = var2.id;
                    case 41:
                        var0 = var1 !== var0;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'jumpedMessageId';
        var4.key = var6;
        var6 = function arg0() {
            _fun38843: for (var _fun38843_ip = 0;;) switch (_fun38843_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.get;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    var2 = var2 == var1;
                    if (var2) {
                        _fun38843_ip = 53;
                        continue _fun38843
                    }
                case 47:
                    var0 = var1.jumpTargetId;
                case 53:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'focusedMessageId';
        var4.key = var6;
        var6 = function arg0() {
            _fun38844: for (var _fun38844_ip = 0;;) switch (_fun38844_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.get;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    var2 = var2 == var1;
                    if (var2) {
                        _fun38844_ip = 53;
                        continue _fun38844
                    }
                case 47:
                    var0 = var1.focusTargetId;
                case 53:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'hasPresent';
        var4.key = var6;
        var6 = function arg0() {
            _fun38845: for (var _fun38845_ip = 0;;) switch (_fun38845_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun38845_ip = 53;
                        continue _fun38845
                    }
                case 47:
                    var0 = var2.ready;
                case 53:
                    if (!var0) {
                        _fun38845_ip = 66;
                        continue _fun38845
                    }
                case 56:
                    var1 = var2.hasPresent;
                    var0 = var1.bind(var2)();
                case 66:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isReady';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getOrCreate;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = var0.ready;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'whenReady';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = this;
            var _closure3_slot0 = var2;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = arg1;
            var _closure3_slot2 = var1;
            var1 = var2.addConditionalChangeListener;
            var0 = function() { // Environment: var0
                _fun38848: for (var _fun38848_ip = 0;;) switch (_fun38848_ip) {
                    case 0:
                        var3 = _closure3_slot0;
                        var2 = var3.isReady;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
                        var2 = undefined;
                        if (var1) {
                            _fun38848_ip = 29;
                            continue _fun38848
                        }
                    case 27:
                        return var2;
                    case 29:
                        var1 = global;
                        var1 = var1.setImmediate;
                        var0 = _closure3_slot2;
                        var0 = var1.bind(var2)(var0);
                        var0 = false;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'isLoadingMessages';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getOrCreate;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = var0.loadingMore;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'hasCurrentUserSentMessage';
        var4.key = var6;
        var6 = function arg0() {
            var3 = this;
            var2 = _closure1_slot21;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var _closure3_slot0 = var1;
            var2 = var3.getMessages;
            var1 = arg0;
            var2 = var2.bind(var3)(var1);
            var1 = var2.findNewest;
            var0 = function(arg0) { // Environment: var0
                _fun38851: for (var _fun38851_ip = 0;;) switch (_fun38851_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.author;
                        var1 = var0.id;
                        var3 = _closure3_slot0;
                        var0 = null;
                        var3 = var0 == var3;
                        var0 = undefined;
                        if (var3) {
                            _fun38851_ip = 41;
                            continue _fun38851
                        }
                    case 32:
                        var2 = _closure3_slot0;
                        var0 = var2.id;
                    case 41:
                        var0 = var1 === var0;
                        return var0;
                }
            };
            var1 = var1.bind(var2)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'hasCurrentUserSentMessageSinceAppStart';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot27;
            return var0;
        };
        var4.value = var5;
        var0[14] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var7.bind(var0)(var13);
    var7.displayName = var1;
    var1 = 35;
    var1 = var5[var1];
    var17 = var6.bind(var0)(var1);
    var1 = {};
    var13 = function arg0() {
        _fun38853: for (var _fun38853_ip = 0;;) switch (_fun38853_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.changesByChannelId;
                var15 = var17;
                var0 = undefined;
                var10 = global;
                var9 = 'Skipping background message sync for ';
                var8 = ' cached:';
                var7 = ' ready:';
                var6 = ' hasMoreAfter:';
                var5 = ' isConnected:';
                var4 = 22;
                var3 = 21;
                var2 = null;
                var1 = undefined;
                for (var12 in var15)
                    case 70: {
                        case 82: var19 = var12;
                        var20 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var18 = var18[var3];
                        var20 = var20.bind(var0)(var18);
                        var18 = var20.get;
                        var23 = var18.bind(var20)(var19);
                        if (var2 == var23) {
                            _fun38853_ip = 70;
                            continue _fun38853
                        }
                        case 116: var20 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var18 = var18[var4];
                        var18 = var20.bind(var0)(var18);
                        var20 = var18.default;
                        var18 = var20.isConnected;
                        var18 = var18.bind(var20)();
                        var20 = var23.cached;
                        if (var20) {
                            _fun38853_ip = 236;
                            continue _fun38853
                        }
                        case 157: if (!var18) {
                            _fun38853_ip = 236;
                            continue _fun38853
                        }
                        case 160: var22 = _closure1_slot26;
                        var21 = var22.log;
                        var33 = var23.cached;
                        var31 = var23.ready;
                        var29 = var23.hasMoreAfter;
                        var20 = var10.HermesInternal;
                        var20 = var20.concat;
                        var36 = var9;
                        var35 = var19;
                        var34 = var8;
                        var32 = var7;
                        var30 = var6;
                        var28 = var5;
                        var27 = var18;
                        var20 = var36[var20](var35, var34, var33, var32, var31, var30, var29, var28, var27, var26);
                        var20 = var21.bind(var22)(var20);
                        var1 = var18;
                        _fun38853_ip = 70;
                        continue _fun38853;
                        case 236: var22 = var23.mergeDelta;
                        var20 = var17[var19];
                        var21 = var20.new_messages;
                        var20 = var17[var19];
                        var20 = var20.modified_messages;
                        var19 = var17[var19];
                        var19 = var19.deleted_message_ids;
                        var19 = var22.bind(var23)(var21, var20, var19);
                        var1 = var18;
                        _fun38853_ip = 70;
                        continue _fun38853;
                    }
            case 289:
                return var0;
        }
    };
    var1.BACKGROUND_SYNC_CHANNEL_MESSAGES = var13;
    var1.CONNECTION_OPEN = var12;
    var1.OVERLAY_INITIALIZE = var12;
    var12 = function arg0() {
        _fun38854: for (var _fun38854_ip = 0;;) switch (_fun38854_ip) {
            case 0:
                var2 = _closure1_slot29;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 31;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var1);
                var3 = var4.entries;
                var1 = arg0;
                var1 = var1.messages;
                var1 = var3.bind(var4)(var1);
                var8 = var2.bind(var0)(var1);
                var2 = var8.bind(var0)();
                var1 = var2.done;
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = 21;
                var3 = true;
                if (var1) {
                    _fun38854_ip = 177;
                    continue _fun38854
                }
            case 79:
                var10 = var2.value;
                var1 = _closure1_slot8;
                var1 = var1.bind(var0)(var10, var7);
                var14 = var1[var6];
                var13 = var1[var5];
                var10 = _closure1_slot1;
                var1 = _closure1_slot2;
                var11 = var1[var4];
                var12 = var10.bind(var0)(var11);
                var11 = var12.getOrCreate;
                var12 = var11.bind(var12)(var14);
                var11 = var12.addCachedMessages;
                var11 = var11.bind(var12)(var13, var3);
                var1 = var1[var4];
                var10 = var10.bind(var0)(var1);
                var1 = var10.commit;
                var1 = var1.bind(var10)(var11);
                var10 = var8.bind(var0)();
                var1 = var10.done;
                var2 = var10;
                if (!var1) {
                    _fun38854_ip = 79;
                    continue _fun38854
                }
            case 177:
                return var0;
        }
    };
    var1.CACHE_LOADED = var12;
    var12 = function() {
        var0 = true;
        return var0;
    };
    var1.LOAD_MESSAGES = var12;
    var12 = function arg0() {
        _fun38856: for (var _fun38856_ip = 0;;) switch (_fun38856_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channelId;
                var7 = var0.isBefore;
                var6 = var0.isAfter;
                var13 = var0.jump;
                var12 = var0.hasMoreBefore;
                var11 = var0.hasMoreAfter;
                var14 = var0.messages;
                var10 = var0.isStale;
                var3 = var0.truncate;
                var9 = var0.avoidInitialScroll;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var2 = var0[var4];
                var0 = undefined;
                var5 = var5.bind(var0)(var2);
                var2 = var5.getOrCreate;
                var8 = var2.bind(var5)(var8);
                var5 = var8.loadComplete;
                var2 = {};
                var2.newMessages = var14;
                var2.isBefore = var7;
                var2.isAfter = var6;
                var2.jump = var13;
                var2.hasMoreBefore = var12;
                var2.hasMoreAfter = var11;
                var2.cached = var10;
                var10 = true;
                var2.hasFetched = var10;
                var2.avoidInitialScroll = var9;
                var5 = var5.bind(var8)(var2);
                var2 = null;
                var2 = var2 == var3;
                if (var2) {
                    _fun38856_ip = 179;
                    continue _fun38856
                }
            case 167:
                var3 = !var7;
                if (!var3) {
                    _fun38856_ip = 176;
                    continue _fun38856
                }
            case 173:
                var3 = !var6;
            case 176:
                var2 = var3;
            case 179:
                if (var2) {
                    _fun38856_ip = 194;
                    continue _fun38856
                }
            case 182:
                var3 = var7;
                if (!var3) {
                    _fun38856_ip = 191;
                    continue _fun38856
                }
            case 188:
                var3 = var6;
            case 191:
                var2 = var3;
            case 194:
                var3 = var5;
                if (var2) {
                    _fun38856_ip = 212;
                    continue _fun38856
                }
            case 200:
                var2 = var5.truncate;
                var3 = var2.bind(var5)(var7, var6);
            case 212:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var1.LOAD_MESSAGES_SUCCESS = var12;
    var12 = function arg0() {
        var0 = arg0;
        var6 = var0.channelId;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 21;
        var4 = var3[var1];
        var0 = undefined;
        var5 = var2.bind(var0)(var4);
        var4 = var5.getOrCreate;
        var5 = var4.bind(var5)(var6);
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.commit;
        var4 = var5.mutate;
        var1 = {
            'loadingMore': false,
            'error': true
        };
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.LOAD_MESSAGES_FAILURE = var12;
    var12 = function arg0() {
        _fun38858: for (var _fun38858_ip = 0;;) switch (_fun38858_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channelId;
                var11 = var0.jump;
                var6 = var0.focus;
                var5 = var0.before;
                var8 = var0.after;
                var10 = var0.limit;
                var3 = var0.truncate;
                var7 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var2 = var0[var4];
                var0 = undefined;
                var7 = var7.bind(var0)(var2);
                var2 = var7.getOrCreate;
                var9 = var2.bind(var7)(var9);
                var2 = null;
                if (!(var2 != var11)) {
                    _fun38858_ip = 97;
                    continue _fun38858
                }
            case 85:
                var7 = var11.present;
                if (var7) {
                    _fun38858_ip = 234;
                    continue _fun38858
                }
            case 97:
                var12 = var2 == var6;
                var7 = undefined;
                if (var12) {
                    _fun38858_ip = 111;
                    continue _fun38858
                }
            case 106:
                var7 = var6.messageId;
            case 111:
                if (!(var2 == var7)) {
                    _fun38858_ip = 214;
                    continue _fun38858
                }
            case 115:
                var12 = var2 == var11;
                var7 = undefined;
                if (var12) {
                    _fun38858_ip = 129;
                    continue _fun38858
                }
            case 124:
                var7 = var11.messageId;
            case 129:
                if (!(var2 == var7)) {
                    _fun38858_ip = 170;
                    continue _fun38858
                }
            case 133:
                var12 = var2 == var5;
                if (!var12) {
                    _fun38858_ip = 144;
                    continue _fun38858
                }
            case 140:
                var12 = var2 == var8;
            case 144:
                var7 = var9;
                if (var12) {
                    _fun38858_ip = 245;
                    continue _fun38858
                }
            case 150:
                var13 = var9.loadFromCache;
                var12 = var2 != var5;
                var7 = var13.bind(var9)(var12, var10);
                _fun38858_ip = 245;
                continue _fun38858;
            case 170:
                var16 = var9.jumpToMessage;
                var21 = var11.messageId;
                var20 = var11.flash;
                var19 = var11.offset;
                var18 = var11.returnMessageId;
                var17 = var11.jumpType;
                var22 = var9;
                var7 = var22[var16](var21, var20, var19, var18, var17, var16);
                _fun38858_ip = 245;
                continue _fun38858;
            case 214:
                var11 = var9.focusOnMessage;
                var6 = var6.messageId;
                var7 = var11.bind(var9)(var6);
                _fun38858_ip = 245;
                continue _fun38858;
            case 234:
                var6 = var9.jumpToPresent;
                var7 = var6.bind(var9)(var10);
            case 245:
                var6 = var2 == var3;
                if (var6) {
                    _fun38858_ip = 266;
                    continue _fun38858
                }
            case 252:
                var3 = var2 == var5;
                if (!var3) {
                    _fun38858_ip = 263;
                    continue _fun38858
                }
            case 259:
                var3 = var2 == var8;
            case 263:
                var6 = var3;
            case 266:
                if (var6) {
                    _fun38858_ip = 283;
                    continue _fun38858
                }
            case 269:
                var3 = var2 != var5;
                if (!var3) {
                    _fun38858_ip = 280;
                    continue _fun38858
                }
            case 276:
                var3 = var2 != var8;
            case 280:
                var6 = var3;
            case 283:
                var3 = var7;
                if (var6) {
                    _fun38858_ip = 309;
                    continue _fun38858
                }
            case 289:
                var6 = var7.truncate;
                var5 = var2 != var5;
                var2 = var2 != var8;
                var3 = var6.bind(var7)(var5, var2);
            case 309:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var1.LOAD_MESSAGES_SUCCESS_CACHED = var12;
    var12 = function arg0() {
        _fun38859: for (var _fun38859_ip = 0;;) switch (_fun38859_ip) {
            case 0:
                var1 = arg0;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var3 = var0[var4];
                var0 = undefined;
                var6 = var5.bind(var0)(var3);
                var5 = var6.getOrCreate;
                var3 = var1.channelId;
                var6 = var5.bind(var6)(var3);
                var3 = var1.shouldForceCommitMessages;
                if (var3) {
                    _fun38859_ip = 59;
                    continue _fun38859
                }
            case 53:
                var3 = var6.cached;
            case 59:
                if (var3) {
                    _fun38859_ip = 71;
                    continue _fun38859
                }
            case 62:
                var5 = var6.ready;
                var3 = !var5;
            case 71:
                if (!var3) {
                    _fun38859_ip = 126;
                    continue _fun38859
                }
            case 74:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var3 = var3.bind(var0)(var2);
                var2 = var3.commit;
                var5 = var6.addCachedMessages;
                var4 = var1.messages;
                var1 = var1.stale;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
            case 126:
                return var0;
        }
    };
    var1.LOCAL_MESSAGES_LOADED = var12;
    var12 = function arg0() {
        _fun38860: for (var _fun38860_ip = 0;;) switch (_fun38860_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var6 = var0.messageId;
                var7 = var0.channelId;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var3 = var0[var4];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.get;
                var5 = var3.bind(var5)(var7);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun38860_ip = 120;
                    continue _fun38860
                }
            case 60:
                var3 = var5.has;
                var3 = var3.bind(var5)(var6);
                if (!var3) {
                    _fun38860_ip = 120;
                    continue _fun38860
                }
            case 73:
                var3 = var5.update;
                var2 = function(arg0) { // Environment: var2
                    var3 = arg0;
                    var2 = var3.set;
                    var0 = _closure2_slot0;
                    var1 = var0.interactionData;
                    var0 = 'interactionData';
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var3 = var3.bind(var5)(var6, var2);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 120:
                var0 = false;
                return var0;
        }
    };
    var1.LOAD_MESSAGE_INTERACTION_DATA_SUCCESS = var12;
    var12 = function arg0() {
        var0 = arg0;
        var8 = var0.channelId;
        var7 = var0.truncateBottom;
        var6 = var0.truncateTop;
        var3 = _closure1_slot26;
        var2 = var3.log;
        var1 = global;
        var1 = var1.HermesInternal;
        var9 = var1.concat;
        var15 = 'Truncating messages for ';
        var13 = ' bottom:';
        var11 = ' top:';
        var14 = var8;
        var12 = var7;
        var10 = var6;
        var1 = var15[var9](var14, var13, var12, var11, var10, var9);
        var1 = var2.bind(var3)(var1);
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 21;
        var3 = var4[var1];
        var0 = undefined;
        var5 = var2.bind(var0)(var3);
        var3 = var5.getOrCreate;
        var5 = var3.bind(var5)(var8);
        var3 = var5.truncate;
        var3 = var3.bind(var5)(var7, var6);
        var1 = var4[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.commit;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.TRUNCATE_MESSAGES = var12;
    var12 = function arg0() {
        var0 = arg0;
        var4 = var0.channelId;
        var3 = _closure1_slot26;
        var2 = var3.log;
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var0 = 'Clearing messages for ';
        var0 = var5.bind(var0)(var4);
        var0 = var2.bind(var3)(var0);
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 21;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.clear;
        var2 = var2.bind(var3)(var4);
        var2 = _closure1_slot25;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        return var0;
    };
    var1.CLEAR_MESSAGES = var12;
    var12 = function arg0() {
        _fun38864: for (var _fun38864_ip = 0;;) switch (_fun38864_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channelId;
                var6 = var0.message;
                var0 = var0.isPushNotification;
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var7 = 21;
                var2 = var8[var7];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.getOrCreate;
                var5 = var2.bind(var4)(var11);
                var4 = _closure1_slot0;
                var2 = 22;
                var2 = var8[var2];
                var2 = var4.bind(var3)(var2);
                var4 = var2.default;
                var2 = var4.isConnected;
                var4 = var2.bind(var4)();
                if (var0) {
                    _fun38864_ip = 275;
                    continue _fun38864
                }
            case 92:
                var0 = var5.ready;
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun38864_ip = 273;
                    continue _fun38864
                }
            case 110:
                var8 = var6.nonce;
                var2 = null;
                var2 = var2 != var8;
                if (!var2) {
                    _fun38864_ip = 144;
                    continue _fun38864
                }
            case 125:
                var9 = var6.state;
                var8 = _closure1_slot23;
                var8 = var8.SENDING;
                var2 = var9 !== var8;
            case 144:
                if (!var2) {
                    _fun38864_ip = 167;
                    continue _fun38864
                }
            case 147:
                var10 = _closure1_slot25;
                var9 = var10.has;
                var8 = var6.nonce;
                var2 = var9.bind(var10)(var8);
            case 167:
                var9 = var5;
                if (!var2) {
                    _fun38864_ip = 210;
                    continue _fun38864
                }
            case 173:
                var8 = var5.remove;
                var2 = var6.nonce;
                var9 = var8.bind(var5)(var2);
                var12 = _closure1_slot25;
                var10 = var12.delete;
                var8 = var6.nonce;
                var8 = var10.bind(var12)(var8);
            case 210:
                var8 = var9.receiveMessage;
                var10 = _closure1_slot13;
                var2 = var10.isAtBottom;
                var10 = var2.bind(var10)(var11);
                var2 = true;
                var2 = var2 === var10;
                var9 = var8.bind(var9)(var6, var2);
                var8 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var8 = var8.bind(var3)(var2);
                var2 = var8.commit;
                var2 = var2.bind(var8)(var9);
                var0 = undefined;
            case 273:
                _fun38864_ip = 351;
                continue _fun38864;
            case 275:
                var11 = _closure1_slot26;
                var10 = var11.log;
                var9 = var6.id;
                var8 = var6.channel_id;
                var2 = 'Inserting message tapped on from a push notification';
                var2 = var10.bind(var11)(var2, var9, var8);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var3 = var2.bind(var3)(var1);
                var2 = var3.commit;
                var1 = var5.receivePushNotification;
                var1 = var1.bind(var5)(var6, var4);
                var1 = var2.bind(var3)(var1);
                var0 = undefined;
            case 351:
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var12;
    var12 = function arg0() {
        _fun38865: for (var _fun38865_ip = 0;;) switch (_fun38865_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channelId;
                var6 = var0.messageId;
                var0 = var0.reason;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var3 = var0[var4];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.getOrCreate;
                var5 = var3.bind(var5)(var7);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun38865_ip = 176;
                    continue _fun38865
                }
            case 67:
                var7 = var5.has;
                var7 = var7.bind(var5)(var6);
                if (!var7) {
                    _fun38865_ip = 176;
                    continue _fun38865
                }
            case 80:
                var8 = var5.get;
                var7 = true;
                var9 = var8.bind(var5)(var6, var7);
                var8 = var3 == var9;
                var3 = undefined;
                if (var8) {
                    _fun38865_ip = 112;
                    continue _fun38865
                }
            case 102:
                var8 = var9.isPoll;
                var3 = var8.bind(var9)();
            case 112:
                if (!(var7 !== var3)) {
                    _fun38865_ip = 135;
                    continue _fun38865
                }
            case 116:
                var3 = var5.update;
                var2 = function(arg0) { // Environment: var2
                    _fun38866: for (var _fun38866_ip = 0;;) switch (_fun38866_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = var4.set;
                            var0 = _closure1_slot23;
                            var2 = var0.SEND_FAILED;
                            var0 = 'state';
                            var5 = var3.bind(var4)(var0, var2);
                            var0 = var5.isCommandType;
                            var0 = var0.bind(var5)();
                            if (var0) {
                                _fun38866_ip = 99;
                                continue _fun38866
                            }
                        case 47:
                            var3 = _closure2_slot0;
                            var4 = null;
                            var0 = var5;
                            if (!(var4 != var3)) {
                                _fun38866_ip = 199;
                                continue _fun38866
                            }
                        case 63:
                            var6 = var5.set;
                            var3 = _closure2_slot0;
                            var3 = var4 != var3;
                            var4 = '';
                            if (!var3) {
                                _fun38866_ip = 87;
                                continue _fun38866
                            }
                        case 83:
                            var4 = _closure2_slot0;
                        case 87:
                            var3 = 'interactionError';
                            var0 = var6.bind(var5)(var3, var4);
                            _fun38866_ip = 199;
                            continue _fun38866;
                        case 99:
                            var4 = var5.set;
                            var6 = _closure2_slot0;
                            var3 = null;
                            var6 = var3 != var6;
                            var3 = '';
                            if (!var6) {
                                _fun38866_ip = 125;
                                continue _fun38866
                            }
                        case 121:
                            var3 = _closure2_slot0;
                        case 125:
                            var2 = 'interactionError';
                            var4 = var4.bind(var5)(var2, var3);
                            var3 = var4.set;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 23;
                            var5 = var5[var2];
                            var2 = undefined;
                            var6 = var6.bind(var2)(var5);
                            var5 = var6.addFlag;
                            var2 = var4.flags;
                            var1 = _closure1_slot22;
                            var1 = var1.EPHEMERAL;
                            var2 = var5.bind(var6)(var2, var1);
                            var1 = 'flags';
                            var0 = var3.bind(var4)(var1, var2);
                        case 199:
                            return var0;
                    }
                };
                var3 = var3.bind(var5)(var6, var2);
                _fun38865_ip = 146;
                continue _fun38865;
            case 135:
                var2 = var5.remove;
                var3 = var2.bind(var5)(var6);
            case 146:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 176:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_SEND_FAILED = var12;
    var1.MESSAGE_SEND_FAILED_AUTOMOD = var11;
    var1.MESSAGE_EDIT_FAILED_AUTOMOD = var11;
    var11 = function arg0() {
        _fun38867: for (var _fun38867_ip = 0;;) switch (_fun38867_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var1 = var0.message;
                var6 = var1.id;
                var0 = var0.message;
                var7 = var0.channel_id;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var3 = var0[var4];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.getOrCreate;
                var5 = var3.bind(var5)(var7);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun38867_ip = 131;
                    continue _fun38867
                }
            case 71:
                var3 = var5.has;
                var3 = var3.bind(var5)(var6);
                if (!var3) {
                    _fun38867_ip = 131;
                    continue _fun38867
                }
            case 84:
                var3 = var5.update;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 25;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.updateMessageRecord;
                    var0 = _closure2_slot0;
                    var1 = var0.message;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var3 = var3.bind(var5)(var6, var2);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 131:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_UPDATE = var11;
    var11 = function arg0() {
        _fun38869: for (var _fun38869_ip = 0;;) switch (_fun38869_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.messageId;
                var5 = var0.channelId;
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var1 = var0[var4];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.get;
                var6 = var1.bind(var3)(var5);
                var1 = null;
                if (!(var1 != var6)) {
                    _fun38869_ip = 131;
                    continue _fun38869
                }
            case 54:
                var1 = var6.has;
                var1 = var1.bind(var6)(var7);
                if (!var1) {
                    _fun38869_ip = 131;
                    continue _fun38869
                }
            case 67:
                var5 = var6.update;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = 26;
                var3 = var1[var3];
                var3 = var8.bind(var0)(var3);
                var3 = var3.handleExplicitMediaScanTimeoutForMessage;
                var3 = var5.bind(var6)(var7, var3);
                var2 = _closure1_slot1;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 131:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT = var11;
    var11 = function arg0() {
        _fun38870: for (var _fun38870_ip = 0;;) switch (_fun38870_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.id;
                var5 = var0.channelId;
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 21;
                var2 = var0[var6];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.getOrCreate;
                var8 = var2.bind(var4)(var5);
                var7 = null;
                if (!(var7 != var8)) {
                    _fun38870_ip = 212;
                    continue _fun38870
                }
            case 58:
                var2 = var8.has;
                var2 = var2.bind(var8)(var3);
                if (!var2) {
                    _fun38870_ip = 212;
                    continue _fun38870
                }
            case 74:
                var2 = var8.revealedMessageId;
                var4 = var8;
                if (!(var2 === var3)) {
                    _fun38870_ip = 157;
                    continue _fun38870
                }
            case 87:
                var2 = var8.getAfter;
                var9 = var2.bind(var8)(var3);
                if (!(var7 != var9)) {
                    _fun38870_ip = 111;
                    continue _fun38870
                }
            case 102:
                var2 = var9.blocked;
                if (var2) {
                    _fun38870_ip = 131;
                    continue _fun38870
                }
            case 111:
                var5 = var8.mutate;
                var2 = {};
                var2.revealedMessageId = var7;
                var2 = var5.bind(var8)(var2);
                _fun38870_ip = 154;
                continue _fun38870;
            case 131:
                var7 = var8.mutate;
                var5 = {};
                var9 = var9.id;
                var5.revealedMessageId = var9;
                var2 = var7.bind(var8)(var5);
            case 154:
                var4 = var2;
            case 157:
                var2 = var4.remove;
                var5 = var2.bind(var4)(var3);
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var4 = var4.bind(var0)(var2);
                var2 = var4.commit;
                var2 = var2.bind(var4)(var5);
                var2 = _closure1_slot25;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 212:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_DELETE = var11;
    var11 = function arg0() {
        _fun38871: for (var _fun38871_ip = 0;;) switch (_fun38871_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.ids;
                var7 = var0.channelId;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var6 = 21;
                var4 = var4[var6];
                var5 = var5.bind(var0)(var4);
                var4 = var5.getOrCreate;
                var4 = var4.bind(var5)(var7);
                var8 = null;
                if (!(var8 != var4)) {
                    _fun38871_ip = 275;
                    continue _fun38871
                }
            case 65:
                var5 = var4.removeMany;
                var9 = var5.bind(var4)(var3);
                _closure2_slot0 = var9;
                if (!(var4 !== var9)) {
                    _fun38871_ip = 271;
                    continue _fun38871
                }
            case 87:
                var4 = var9.revealedMessageId;
                var5 = var9;
                if (!(var8 != var4)) {
                    _fun38871_ip = 226;
                    continue _fun38871
                }
            case 103:
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 24;
                var4 = var10[var4];
                var10 = var7.bind(var0)(var4);
                var7 = var10.some;
                var4 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var1 = var0.revealedMessageId;
                    var0 = arg0;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var7.bind(var10)(var3, var4);
                var5 = var9;
                if (!var4) {
                    _fun38871_ip = 226;
                    continue _fun38871
                }
            case 146:
                var7 = var9.getAfter;
                var4 = var9.revealedMessageId;
                var10 = var7.bind(var9)(var4);
                if (!(var8 != var10)) {
                    _fun38871_ip = 176;
                    continue _fun38871
                }
            case 167:
                var4 = var10.blocked;
                if (var4) {
                    _fun38871_ip = 196;
                    continue _fun38871
                }
            case 176:
                var7 = var9.mutate;
                var4 = {};
                var4.revealedMessageId = var8;
                var4 = var7.bind(var9)(var4);
                _fun38871_ip = 219;
                continue _fun38871;
            case 196:
                var8 = var9.mutate;
                var7 = {};
                var10 = var10.id;
                var7.revealedMessageId = var10;
                var4 = var8.bind(var9)(var7);
            case 219:
                _closure2_slot0 = var4;
                var5 = var4;
            case 226:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var4 = var4.bind(var0)(var2);
                var2 = var4.commit;
                var2 = var2.bind(var4)(var5);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot25;
                    var1 = var2.delete;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            case 271:
                var0 = false;
                return var0;
            case 275:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_DELETE_BULK = var11;
    var11 = function arg0() {
        var0 = arg0;
        var7 = var0.channelId;
        var6 = var0.messageId;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 21;
        var4 = var3[var1];
        var0 = undefined;
        var5 = var2.bind(var0)(var4);
        var4 = var5.getOrCreate;
        var5 = var4.bind(var5)(var7);
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.commit;
        var4 = var5.mutate;
        var1 = {};
        var1.revealedMessageId = var6;
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.MESSAGE_REVEAL = var11;
    var11 = function arg0() {
        var0 = arg0;
        var6 = var0.channelId;
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 21;
        var3 = var4[var1];
        var0 = undefined;
        var5 = var2.bind(var0)(var3);
        var3 = var5.getOrCreate;
        var6 = var3.bind(var5)(var6);
        var5 = var6.loadComplete;
        var3 = {
            'newMessages': null,
            'hasMoreAfter': false,
            'hasMoreBefore': false
        };
        var7 = new Array(0);
        var3.newMessages = var7;
        var3 = var5.bind(var6)(var3);
        var1 = var4[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.commit;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.THREAD_CREATE_LOCAL = var11;
    var1.CHANNEL_DELETE = var10;
    var1.THREAD_DELETE = var10;
    var1.GUILD_DELETE = var10;
    var1.RELATIONSHIP_ADD = var9;
    var1.RELATIONSHIP_UPDATE = var9;
    var1.RELATIONSHIP_REMOVE = var9;
    var9 = function arg0() {
        _fun38876: for (var _fun38876_ip = 0;;) switch (_fun38876_ip) {
            case 0:
                var2 = _closure1_slot29;
                var0 = arg0;
                var1 = var0.chunks;
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun38876_ip = 69;
                    continue _fun38876
                }
            case 35:
                var5 = _closure1_slot31;
                var1 = var2.value;
                var1 = var1.guildId;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun38876_ip = 35;
                    continue _fun38876
                }
            case 69:
                return var0;
        }
    };
    var1.GUILD_MEMBERS_CHUNK_BATCH = var9;
    var9 = function arg0() {
        var2 = _closure1_slot31;
        var0 = arg0;
        var1 = var0.guildId;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.THREAD_MEMBER_LIST_UPDATE = var9;
    var1.MESSAGE_REACTION_ADD = var8;
    var9 = function arg0() {
        _fun38878: for (var _fun38878_ip = 0;;) switch (_fun38878_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channelId;
                var6 = var0.messageId;
                var0 = var0.reactions;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var3 = var0[var4];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.get;
                var5 = var3.bind(var5)(var7);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun38878_ip = 113;
                    continue _fun38878
                }
            case 66:
                var3 = var5.update;
                var2 = function(arg0) { // Environment: var2
                    _fun38879: for (var _fun38879_ip = 0;;) switch (_fun38879_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.addReactionBatch;
                            var1 = _closure2_slot0;
                            var4 = _closure1_slot21;
                            var0 = var4.getCurrentUser;
                            var4 = var0.bind(var4)();
                            var0 = null;
                            var5 = var0 == var4;
                            var0 = undefined;
                            if (var5) {
                                _fun38879_ip = 48;
                                continue _fun38879
                            }
                        case 43:
                            var0 = var4.id;
                        case 48:
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var3 = var3.bind(var5)(var6, var2);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 113:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_REACTION_ADD_MANY = var9;
    var1.MESSAGE_REACTION_REMOVE = var8;
    var8 = function arg0() {
        _fun38880: for (var _fun38880_ip = 0;;) switch (_fun38880_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channelId;
                var6 = var0.messageId;
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var2 = var0[var4];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.get;
                var5 = var2.bind(var3)(var5);
                var2 = null;
                if (!(var2 != var5)) {
                    _fun38880_ip = 103;
                    continue _fun38880
                }
            case 54:
                var3 = var5.update;
                var2 = function(arg0) { // Environment: var2
                    var3 = arg0;
                    var2 = var3.set;
                    var1 = 'reactions';
                    var0 = new Array(0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var3 = var3.bind(var5)(var6, var2);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 103:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_REACTION_REMOVE_ALL = var8;
    var8 = function arg0() {
        _fun38882: for (var _fun38882_ip = 0;;) switch (_fun38882_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channelId;
                var6 = var0.messageId;
                var0 = var0.emoji;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var3 = var0[var4];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.get;
                var5 = var3.bind(var5)(var7);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun38882_ip = 113;
                    continue _fun38882
                }
            case 66:
                var3 = var5.update;
                var2 = function(arg0) { // Environment: var2
                    var2 = arg0;
                    var1 = var2.removeReactionsForEmoji;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var3.bind(var5)(var6, var2);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 113:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_REACTION_REMOVE_EMOJI = var8;
    var8 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 21;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.forEach;
        var2 = function(arg0) { // Environment: var2
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.clear;
            var1 = arg0;
            var1 = var1.channelId;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot25;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        return var0;
    };
    var1.LOGOUT = var8;
    var8 = function arg0() {
        _fun38886: for (var _fun38886_ip = 0;;) switch (_fun38886_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.message;
                var3 = null;
                var4 = var3 == var1;
                var0 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun38886_ip = 27;
                    continue _fun38886
                }
            case 21:
                var2 = var1.nonce;
            case 27:
                if (!(var3 != var2)) {
                    _fun38886_ip = 54;
                    continue _fun38886
                }
            case 31:
                var3 = _closure1_slot25;
                var2 = var3.add;
                var1 = var1.nonce;
                var1 = var2.bind(var3)(var1);
            case 54:
                return var0;
        }
    };
    var1.UPLOAD_START = var8;
    var8 = function arg0() {
        _fun38887: for (var _fun38887_ip = 0;;) switch (_fun38887_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channelId;
                var6 = var0.messageId;
                var2 = null;
                if (!(var2 != var6)) {
                    _fun38887_ip = 171;
                    continue _fun38887
                }
            case 22:
                var3 = _closure1_slot25;
                var0 = var3.has;
                var0 = var0.bind(var3)(var6);
                if (var0) {
                    _fun38887_ip = 46;
                    continue _fun38887
                }
            case 42:
                var0 = false;
                return var0;
            case 46:
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 21;
                var3 = var0[var4];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.getOrCreate;
                var3 = var3.bind(var5)(var7);
                var5 = var3.get;
                var7 = var5.bind(var3)(var6);
                if (!(var2 != var7)) {
                    _fun38887_ip = 167;
                    continue _fun38887
                }
            case 93:
                var2 = var3.remove;
                var5 = var2.bind(var3)(var6);
                var3 = var5.merge;
                var2 = new Array(1);
                var2[0] = var7;
                var3 = var3.bind(var5)(var2);
                var5 = _closure1_slot25;
                var2 = var5.delete;
                var2 = var2.bind(var5)(var6);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.commit;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 167:
                var0 = false;
                return var0;
            case 171:
                var0 = false;
                return var0;
        }
    };
    var1.UPLOAD_FAIL = var8;
    var3 = function arg0() {
        _fun38888: for (var _fun38888_ip = 0;;) switch (_fun38888_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.message;
                var2 = _closure1_slot21;
                var0 = var2.getCurrentUser;
                var2 = var0.bind(var2)();
                var4 = null;
                var0 = var4 != var3;
                if (!var0) {
                    _fun38888_ip = 43;
                    continue _fun38888
                }
            case 33:
                var5 = var3.author;
                var0 = var4 != var5;
            case 43:
                if (!var0) {
                    _fun38888_ip = 50;
                    continue _fun38888
                }
            case 46:
                var0 = var4 != var2;
            case 50:
                if (!var0) {
                    _fun38888_ip = 73;
                    continue _fun38888
                }
            case 53:
                var3 = var3.author;
                var3 = var3.id;
                var2 = var2.id;
                var0 = var3 === var2;
            case 73:
                if (!var0) {
                    _fun38888_ip = 82;
                    continue _fun38888
                }
            case 76:
                var0 = true;
                _closure1_slot27 = var0;
            case 82:
                var0 = undefined;
                return var0;
        }
    };
    var1.LOCAL_MESSAGE_CREATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var18 = var3;
    var16 = var1;
    var1 = new var18[var7](var17, var16, var15);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 36;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/MessageStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1664, 1676, 1216, 1372, 4194, 1662, 1672, 1410, 3052, 3061, 1661, 3174, 1613, 660, 3, 4216, 3435, 1384, 22, 3933, 4222, 3944, 3063, 4267, 12180, 21, 9782, 1636, 566, 806, 2]);