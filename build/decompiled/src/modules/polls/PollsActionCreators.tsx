// modules/polls/PollsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function arg0, arg1() {
        _fun76095: for (var _fun76095_ip = 0;;) switch (_fun76095_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun76095_ip = 46;
                    continue _fun76095
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun76095_ip = 55;
                    continue _fun76095
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun76095_ip = 345;
                    continue _fun76095
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun76095_ip = 323;
                    continue _fun76095
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun76095_ip = 283;
                    continue _fun76095
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun76095_ip = 270;
                    continue _fun76095
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
                    _fun76095_ip = 163;
                    continue _fun76095
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun76095_ip = 179;
                    continue _fun76095
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun76095_ip = 249;
                    continue _fun76095
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun76095_ip = 249;
                    continue _fun76095
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun76095_ip = 234;
                    continue _fun76095
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun76095_ip = 247;
                    continue _fun76095
                }
            case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun76095_ip = 265;
                continue _fun76095;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun76095_ip = 283;
                continue _fun76095;
            case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun76095_ip = 323;
                    continue _fun76095
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
                    _fun76095_ip = 330;
                    continue _fun76095
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun76096: for (var _fun76096_ip = 0;;) switch (_fun76096_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun76096_ip = 56;
                                continue _fun76096
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
                            _fun76096_ip = 67;
                            continue _fun76096;
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
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun76097: for (var _fun76097_ip = 0;;) switch (_fun76097_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun76097_ip = 23;
                    continue _fun76097
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun76097_ip = 33;
                    continue _fun76097
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
                    _fun76097_ip = 70;
                    continue _fun76097
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun76097_ip = 55;
                    continue _fun76097
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun76098: for (var _fun76098_ip = 0;;) switch (_fun76098_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var2 = new Array(0);
                var7 = arg1;
                var3 = 0;
                var8 = var2;
                var6 = 0;
                var0 = arraySpread(var8, var7, var6);
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var5 = function arg0() {
                    _fun76099: for (var _fun76099_ip = 0;;) switch (_fun76099_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var0 = _closure2_slot0;
                            var3 = null;
                            var5 = var3 == var0;
                            var0 = undefined;
                            var4 = undefined;
                            if (var5) {
                                _fun76099_ip = 65;
                                continue _fun76099
                            }
                        case 29:
                            var6 = _closure2_slot0;
                            var5 = var6.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.answer_id;
                                var0 = global;
                                var3 = var0.parseInt;
                                var2 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var5.bind(var6)(var1);
                            var5 = var3 == var1;
                            var4 = undefined;
                            if (var5) {
                                _fun76099_ip = 65;
                                continue _fun76099
                            }
                        case 59:
                            var4 = var1.poll_media;
                        case 65:
                            var5 = var3 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun76099_ip = 79;
                                continue _fun76099
                            }
                        case 74:
                            var1 = var4.text;
                        case 79:
                            if (!(var3 != var1)) {
                                _fun76099_ip = 98;
                                continue _fun76099
                            }
                        case 83:
                            var5 = _closure2_slot1;
                            var1 = 1;
                            var1 = var5 + var1;
                            _closure2_slot1 = var1;
                        case 98:
                            var5 = var3 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun76099_ip = 113;
                                continue _fun76099
                            }
                        case 107:
                            var1 = var4.emoji;
                        case 113:
                            if (!(var3 != var1)) {
                                _fun76099_ip = 132;
                                continue _fun76099
                            }
                        case 117:
                            var3 = _closure2_slot2;
                            var1 = 1;
                            var1 = var3 + var1;
                            _closure2_slot2 = var1;
                        case 132:
                            return var0;
                    }
                };
                var0 = var2.length;
                var0 = var3 < var0;
                var4 = undefined;
                if (!var0) {
                    _fun76098_ip = 77;
                    continue _fun76098
                }
            case 56:
                var0 = var2[var3];
                var0 = var5.bind(var4)(var0);
                var3 = var3 + 1;
                var0 = var2.length;
                if (var3 < var0) {
                    _fun76098_ip = 56;
                    continue _fun76098
                }
            case 77:
                var0 = {};
                var0.analyticsSelectedAnswerIds = var2;
                var2 = _closure2_slot1;
                var0.selectedTextAnswersCount = var2;
                var1 = _closure2_slot2;
                var0.selectedEmojiAnswersCount = var1;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.guildId;
        var _closure2_slot0 = var1;
        var7 = var0.title;
        var6 = var0.body;
        var2 = _closure1_slot1;
        var9 = _closure1_slot3;
        var0 = 12;
        var1 = var9[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.show;
        var1 = {};
        var1.title = var7;
        var1.body = var6;
        var8 = _closure1_slot0;
        var5 = 13;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var6 = var6.t;
        var6 = var6["9VLmlZ"];
        var6 = var7.bind(var10)(var6);
        var1.confirmText = var6;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5["2m+Sqk"];
        var5 = var6.bind(var7)(var5);
        var1.cancelText = var5;
        var4 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.joinGuild;
            var2 = _closure2_slot0;
            var1 = {};
            var5 = _closure1_slot16;
            var5 = var5.POLL_ALERT;
            var1.source = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var1.onConfirm = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var1 = function arg0() {
        _fun76103: for (var _fun76103_ip = 0;;) switch (_fun76103_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channelId;
                var6 = var0.messageId;
                var5 = var0.answerId;
                var2 = _closure1_slot8;
                var1 = var2.getChannel;
                var3 = var1.bind(var2)(var7);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun76103_ip = 354;
                    continue _fun76103
                }
            case 45:
                var8 = _closure1_slot5;
                var4 = var8.isLurking;
                var2 = var3.guild_id;
                var2 = var4.bind(var8)(var2);
                if (var2) {
                    _fun76103_ip = 223;
                    continue _fun76103
                }
            case 71:
                var4 = _closure1_slot11;
                var2 = var4.getMessage;
                var6 = var2.bind(var4)(var7, var6);
                if (!(var1 != var6)) {
                    _fun76103_ip = 354;
                    continue _fun76103
                }
            case 94:
                var2 = var6.poll;
                if (!(var1 != var2)) {
                    _fun76103_ip = 354;
                    continue _fun76103
                }
            case 107:
                var2 = var6.poll;
                var2 = var2.answers;
                var4 = var2.length;
                var2 = 0;
                if (!(var2 !== var4)) {
                    _fun76103_ip = 354;
                    continue _fun76103
                }
            case 133:
                if (!(var1 == var5)) {
                    _fun76103_ip = 174;
                    continue _fun76103
                }
            case 137:
                var1 = global;
                var4 = var1.String;
                var1 = var6.poll;
                var1 = var1.answers;
                var1 = var1[var2];
                var2 = var1.answer_id;
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
            case 174:
                var4 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.showVotesForAnswer;
                var1 = {};
                var1.message = var6;
                var1.initialAnswerId = var5;
                var1 = var2.bind(var4)(var1);
                _fun76103_ip = 354;
                continue _fun76103;
            case 223:
                var2 = _closure1_slot20;
                var1 = {};
                var3 = var3.guild_id;
                var1.guildId = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var3 = 13;
                var4 = var7[var3];
                var0 = undefined;
                var4 = var6.bind(var0)(var4);
                var8 = var4.intl;
                var5 = var8.string;
                var4 = var7[var3];
                var4 = var6.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4["7LpysO"];
                var4 = var5.bind(var8)(var4);
                var1.title = var4;
                var4 = var7[var3];
                var4 = var6.bind(var0)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var7[var3];
                var3 = var6.bind(var0)(var3);
                var3 = var3.t;
                var3 = var3["5sHHoy"];
                var3 = var4.bind(var5)(var3);
                var1.body = var3;
                var0 = var2.bind(var0)(var1);
            case 354:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot21 = var1;
    var7 = function arg0() {
        var0 = arg0;
        var4 = var0.channelId;
        var _closure2_slot0 = var4;
        var3 = var0.messageId;
        var0 = var0.isEditing;
        var _closure2_slot1 = var0;
        var2 = _closure1_slot14;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            _fun76105: for (var _fun76105_ip = 0;;) switch (_fun76105_ip) {
                case 0:
                    var3 = arg0;
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.channelId = var2;
                    var2 = global;
                    var2 = var2.Set;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var4;
                    var2 = new var5[var2](var4);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var0.selectedAnswerIds = var2;
                    var2 = false;
                    var0.submitting = var2;
                    var1 = _closure2_slot1;
                    var0.editing = var1;
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun76105_ip = 82;
                        continue _fun76105
                    }
                case 76:
                    var2 = var3.showResults;
                case 82:
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun76105_ip = 92;
                        continue _fun76105
                    }
                case 89:
                    var1 = var2;
                case 92:
                    var0.showResults = var1;
                    return var0;
            }
        };
        var1 = var2.bind(var0)(var4, var3, var1);
        return var0;
    };
    var _closure1_slot22 = var7;
    var0 = function arg0() {
        _fun76106: for (var _fun76106_ip = 0;;) switch (_fun76106_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = var0.messageId;
                var1 = _closure1_slot11;
                var0 = var1.getMessage;
                var0 = var0.bind(var1)(var3, var2);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun76106_ip = 66;
                    continue _fun76106
                }
            case 38:
                var2 = var0.reactions;
                var1 = var2.flatMap;
                var0 = function(arg0) { // Environment: var0
                    _fun76107: for (var _fun76107_ip = 0;;) switch (_fun76107_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.me_vote;
                            var0 = true;
                            if (!(var0 !== var2)) {
                                _fun76107_ip = 21;
                                continue _fun76107
                            }
                        case 15:
                            var0 = new Array(0);
                            _fun76107_ip = 32;
                            continue _fun76107;
                        case 21:
                            var1 = var1.emoji;
                            var0 = var1.name;
                        case 32:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                _fun76106_ip = 70;
                continue _fun76106;
            case 66:
                var0 = new Array(0);
            case 70:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot25;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76111: for (var _fun76111_ip = 0;;) switch (_fun76111_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun76111_ip = 274;
                            continue _fun76111
                        }
                    case 15:
                        var8 = var1.channelId;
                        var _closure4_slot0 = var8;
                        var7 = var1.messageId;
                        var _closure4_slot1 = var7;
                        var11 = var1.answerIds;
                        var3 = undefined;
                        var _closure4_slot2 = var3;
                        var _closure4_slot3 = var3;
                        SaveGenerator(address = 53);
                    case 51:
                        return var3;
                    case 53:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun76111_ip = 271;
                            continue _fun76111
                        }
                    case 62:
                        var6 = _closure1_slot23;
                        var5 = {};
                        var5.channelId = var8;
                        var5.messageId = var7;
                        var10 = var6.bind(var3)(var5);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var7 = 18;
                        var8 = var6[var7];
                        var9 = var5.bind(var3)(var8);
                        var8 = var9.difference;
                        var8 = var8.bind(var9)(var10, var11);
                        var7 = var6[var7];
                        var9 = var5.bind(var3)(var7);
                        var7 = var9.difference;
                        var10 = var7.bind(var9)(var11, var10);
                        var7 = _closure1_slot7;
                        var4 = var7.getId;
                        var4 = var4.bind(var7)();
                        _closure4_slot2 = var4;
                        var7 = var8.map;
                        var4 = function(arg0) { // Environment: var2
                            var0 = {};
                            var1 = 'MESSAGE_REACTION_REMOVE';
                            var0.type = var1;
                            var1 = arg0;
                            var0.id = var1;
                            return var0;
                        };
                        var13 = var7.bind(var8)(var4);
                        var4 = new Array(0);
                        var12 = 0;
                        var14 = var4;
                        var12 = arraySpread(var14, var13, var12);
                        var9 = var10.map;
                        var7 = function(arg0) { // Environment: var2
                            var0 = {};
                            var1 = 'MESSAGE_REACTION_ADD';
                            var0.type = var1;
                            var1 = arg0;
                            var0.id = var1;
                            return var0;
                        };
                        var13 = var9.bind(var10)(var7);
                        var14 = var4;
                        var7 = arraySpread(var14, var13, var12);
                        _closure4_slot3 = var4;
                        var4 = 19;
                        var4 = var6[var4];
                        var4 = var5.bind(var3)(var4);
                        var5 = var4.Emitter;
                        var4 = var5.batched;
                        var2 = function() { // Environment: var2
                            _fun76114: for (var _fun76114_ip = 0;;) switch (_fun76114_ip) {
                                case 0:
                                    var8 = _closure4_slot3;
                                    var0 = var8.length;
                                    var7 = 0;
                                    var1 = var7 < var0;
                                    var6 = undefined;
                                    var4 = 20;
                                    var3 = true;
                                    var2 = 21;
                                    var0 = undefined;
                                    if (!var1) {
                                        _fun76114_ip = 175;
                                        continue _fun76114
                                    }
                                case 39:
                                    var1 = var8[var7];
                                    var14 = var1.id;
                                    var13 = var1.type;
                                    var10 = _closure1_slot1;
                                    var12 = _closure1_slot3;
                                    var1 = var12[var4];
                                    var11 = var10.bind(var6)(var1);
                                    var10 = var11.dispatch;
                                    var1 = {};
                                    var1.type = var13;
                                    var13 = _closure4_slot0;
                                    var1.channelId = var13;
                                    var13 = _closure4_slot1;
                                    var1.messageId = var13;
                                    var13 = {};
                                    var13.id = var14;
                                    var13.name = var14;
                                    var1.emoji = var13;
                                    var13 = _closure4_slot2;
                                    var1.userId = var13;
                                    var1.optimistic = var3;
                                    var13 = _closure1_slot0;
                                    var12 = var12[var2];
                                    var12 = var13.bind(var6)(var12);
                                    var12 = var12.ReactionTypes;
                                    var12 = var12.VOTE;
                                    var1.reactionType = var12;
                                    var0 = var10.bind(var11)(var1);
                                    var7 = var7 + 1;
                                    var1 = var8.length;
                                    if (var7 < var1) {
                                        _fun76114_ip = 39;
                                        continue _fun76114
                                    }
                                case 175:
                                    return var0;
                            }
                        };
                        var2 = var4.bind(var5)(var2);
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun76111_ip = 265;
                            continue _fun76111
                        }
                    case 255:
                        SaveGenerator(address = 259);
                    case 257:
                        return var2;
                    case 259:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun76111_ip = 268;
                            continue _fun76111
                        }
                    case 265:
                        return var3;
                    case 268:
                        return var2;
                    case 271:
                        return var1;
                    case 274:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot25 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot27;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var8;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76118: for (var _fun76118_ip = 0;;) switch (_fun76118_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun76118_ip = 1116;
                            continue _fun76118
                        }
                    case 15:
                        var8 = var1.channelId;
                        var7 = var1.messageId;
                        var2 = undefined;
                        var3 = undefined;
                        var10 = undefined;
                        var11 = undefined;
                        var13 = undefined;
                        var15 = undefined;
                        SaveGenerator(address = 41);
                    case 39:
                        return var2;
                    case 41:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun76118_ip = 1113;
                            continue _fun76118
                        }
                    case 50:
                        var14 = _closure1_slot8;
                        var9 = var14.getChannel;
                        var6 = var8;
                        var6 = var9.bind(var14)(var6);
                        var14 = null;
                        if (!(var14 != var6)) {
                            _fun76118_ip = 1110;
                            continue _fun76118
                        }
                    case 79:
                        var17 = _closure1_slot5;
                        var16 = var17.isLurking;
                        var9 = var6.guild_id;
                        var9 = var16.bind(var17)(var9);
                        if (var9) {
                            _fun76118_ip = 981;
                            continue _fun76118
                        }
                    case 105:
                        var17 = _closure1_slot10;
                        var16 = var17.canChatInGuild;
                        var9 = var6.guild_id;
                        var9 = var16.bind(var17)(var9);
                        if (var9) {
                            _fun76118_ip = 276;
                            continue _fun76118
                        }
                    case 131:
                        var16 = _closure1_slot1;
                        var22 = _closure1_slot3;
                        var9 = 12;
                        var9 = var22[var9];
                        var17 = var16.bind(var2)(var9);
                        var16 = var17.show;
                        var9 = {};
                        var21 = _closure1_slot0;
                        var18 = 13;
                        var19 = var22[var18];
                        var19 = var21.bind(var2)(var19);
                        var23 = var19.intl;
                        var20 = var23.string;
                        var19 = var22[var18];
                        var19 = var21.bind(var2)(var19);
                        var19 = var19.t;
                        var19 = var19.p245wu;
                        var19 = var20.bind(var23)(var19);
                        var9.title = var19;
                        var19 = var22[var18];
                        var19 = var21.bind(var2)(var19);
                        var20 = var19.intl;
                        var19 = var20.string;
                        var18 = var22[var18];
                        var18 = var21.bind(var2)(var18);
                        var18 = var18.t;
                        var18 = var18["U/uodt"];
                        var18 = var19.bind(var20)(var18);
                        var9.body = var18;
                        var9 = var16.bind(var17)(var9);
                        _fun76118_ip = 1110;
                        continue _fun76118;
                    case 276:
                        var9 = _closure1_slot13;
                        var18 = var8;
                        var17 = var7;
                        var9 = var9.bind(var2)(var18, var17);
                        var3 = var9;
                        var19 = _closure1_slot1;
                        var20 = _closure1_slot3;
                        var16 = 11;
                        var16 = var20[var16];
                        var19 = var19.bind(var2)(var16);
                        var16 = var14 != var9;
                        var9 = 'Must not be able to vote without existing state!';
                        var9 = var19.bind(var2)(var16, var9);
                        var16 = _closure1_slot23;
                        var9 = {};
                        var9.channelId = var18;
                        var9.messageId = var17;
                        var10 = var16.bind(var2)(var9);
                    case 350: // try_start_0
                        var9 = var3.selectedAnswerIds;
                        var3 = var9.values;
                        var25 = var3.bind(var9)();
                        var16 = new Array(0);
                        var18 = 0;
                        var26 = var16;
                        var24 = 0;
                        var3 = arraySpread(var26, var25, var24);
                        var11 = var16;
                        var9 = _closure1_slot14;
                        var19 = var8;
                        var17 = var7;
                        var3 = function(arg0) { // Environment: var4
                            var1 = arg0;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var0 = 11;
                            var0 = var3[var0];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var0);
                            var0 = null;
                            var2 = var0 != var1;
                            var0 = 'Must not be able to vote without existing state!';
                            var0 = var3.bind(var4)(var2, var0);
                            var0 = {};
                            var6 = var0;
                            var5 = var1;
                            var1 = copyDataProperties(var6, var5);
                            var2 = true;
                            var1 = 'submitting';
                            var0[var1] = var2;
                            var2 = false;
                            var1 = 'editing';
                            var0[var1] = var2;
                            return var0;
                        };
                        var3 = var9.bind(var2)(var19, var17, var3);
                        var9 = _closure1_slot24;
                        var3 = {};
                        var3.channelId = var19;
                        var3.messageId = var17;
                        var3.answerIds = var16;
                        var3 = var9.bind(var2)(var3);
                        SaveGenerator(address = 435);
                    case 433:
                        return var3;
                    case 435:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 9);
                        if (var9) {
                            _fun76118_ip = 706;
                            continue _fun76118
                        }
                    case 444:
                        var16 = _closure1_slot2;
                        var17 = _closure1_slot3;
                        var9 = 22;
                        var9 = var17[var9];
                        var17 = var16.bind(var2)(var9);
                        var16 = var17.submitPollVote;
                        var9 = {};
                        var19 = var8;
                        var9.channelId = var19;
                        var19 = var7;
                        var9.messageId = var19;
                        var19 = var11;
                        var9.answerIds = var19;
                        var9 = var16.bind(var17)(var9);
                        SaveGenerator(address = 503);
                    case 501:
                        return var9;
                    case 503:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 16);
                        if (var16) {
                            _fun76118_ip = 703;
                            continue _fun76118
                        }
                    case 512:
                        var20 = _closure1_slot14;
                        var19 = var8;
                        var17 = var7;
                        var16 = function() { // Environment: var4
                            var0 = undefined;
                            return var0;
                        };
                        var16 = var20.bind(var2)(var19, var17, var16);
                        var17 = _closure1_slot0;
                        var19 = _closure1_slot3;
                        var16 = 23;
                        var16 = var19[var16];
                        var16 = var17.bind(var2)(var16);
                        var17 = var16.AccessibilityAnnouncer;
                        var16 = var17.announce;
                        var11 = var11.length;
                        if (!(var18 !== var11)) {
                            _fun76118_ip = 636;
                            continue _fun76118
                        }
                    case 577:
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot3;
                        var11 = 13;
                        var18 = var21[var11];
                        var18 = var20.bind(var2)(var18);
                        var19 = var18.intl;
                        var18 = var19.string;
                        var11 = var21[var11];
                        var11 = var20.bind(var2)(var11);
                        var11 = var11.t;
                        var11 = var11.o20GSo;
                        var11 = var18.bind(var19)(var11);
                        _fun76118_ip = 693;
                        continue _fun76118;
                    case 636:
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot3;
                        var18 = 13;
                        var19 = var22[var18];
                        var19 = var21.bind(var2)(var19);
                        var20 = var19.intl;
                        var19 = var20.string;
                        var18 = var22[var18];
                        var18 = var21.bind(var2)(var18);
                        var18 = var18.t;
                        var18 = var18["xcvy+3"];
                        var11 = var19.bind(var20)(var18);
                    case 693:
                        var11 = var16.bind(var17)(var11);
                    case 698: // try_end0
                        _fun76118_ip = 1110;
                        continue _fun76118;
                    case 703:
                        return var9;
                    case 706:
                        return var3;
                    case 709: // catch_target0
                        CatchBlockStart(arg_register = 16);
                        var12 = var16;
                        var9 = _closure1_slot1;
                        var18 = _closure1_slot3;
                        var3 = 12;
                        var3 = var18[var3];
                        var11 = var9.bind(var2)(var3);
                        var9 = var11.show;
                        var3 = {};
                        var21 = _closure1_slot0;
                        var17 = 13;
                        var19 = var18[var17];
                        var19 = var21.bind(var2)(var19);
                        var20 = var19.intl;
                        var19 = var20.string;
                        var18 = var18[var17];
                        var18 = var21.bind(var2)(var18);
                        var18 = var18.t;
                        var18 = var18.iufib1;
                        var18 = var19.bind(var20)(var18);
                        var3.title = var18;
                        var16 = var16.getAnyErrorMessage;
                        var18 = var14 == var16;
                        var16 = undefined;
                        if (var18) {
                            _fun76118_ip = 825;
                            continue _fun76118
                        }
                    case 812:
                        var19 = var12;
                        var18 = var19.getAnyErrorMessage;
                        var16 = var18.bind(var19)();
                    case 825:
                        var15 = var16;
                        if (!(var14 == var16)) {
                            _fun76118_ip = 839;
                            continue _fun76118
                        }
                    case 832:
                        var12 = var12.message;
                        _fun76118_ip = 842;
                        continue _fun76118;
                    case 839:
                        var12 = var15;
                    case 842:
                        var13 = var12;
                        if (!(var14 == var12)) {
                            _fun76118_ip = 903;
                            continue _fun76118
                        }
                    case 849:
                        var16 = _closure1_slot0;
                        var12 = _closure1_slot3;
                        var14 = var12[var17];
                        var14 = var16.bind(var2)(var14);
                        var15 = var14.intl;
                        var14 = var15.string;
                        var12 = var12[var17];
                        var12 = var16.bind(var2)(var12);
                        var12 = var12.t;
                        var12 = var12.eAn6z2;
                        var12 = var14.bind(var15)(var12);
                        _fun76118_ip = 906;
                        continue _fun76118;
                    case 903:
                        var12 = var13;
                    case 906:
                        var3.body = var12;
                        var3 = var9.bind(var11)(var3);
                        var9 = _closure1_slot24;
                        var3 = {};
                        var11 = var8;
                        var3.channelId = var11;
                        var11 = var7;
                        var3.messageId = var11;
                        var3.answerIds = var10;
                        var3 = var9.bind(var2)(var3);
                        SaveGenerator(address = 949);
                    case 947:
                        return var3;
                    case 949:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 9);
                        if (var9) {
                            _fun76118_ip = 978;
                            continue _fun76118
                        }
                    case 955:
                        var9 = _closure1_slot14;
                        var4 = function(arg0) { // Environment: var4
                            _fun76121: for (var _fun76121_ip = 0;;) switch (_fun76121_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = null;
                                    if (!(var0 == var1)) {
                                        _fun76121_ip = 13;
                                        continue _fun76121
                                    }
                                case 9:
                                    var0 = undefined;
                                    return var0;
                                case 13:
                                    var0 = {};
                                    var4 = var0;
                                    var3 = var1;
                                    var1 = copyDataProperties(var4, var3);
                                    var2 = false;
                                    var1 = 'submitting';
                                    var0[var1] = var2;
                                    var1 = 'editing';
                                    var0[var1] = var2;
                                    return var0;
                            }
                        };
                        var4 = var9.bind(var2)(var8, var7, var4);
                        _fun76118_ip = 1110;
                        continue _fun76118;
                    case 978:
                        return var3;
                    case 981:
                        var4 = _closure1_slot20;
                        var3 = {};
                        var6 = var6.guild_id;
                        var3.guildId = var6;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var5 = 13;
                        var6 = var9[var5];
                        var6 = var8.bind(var2)(var6);
                        var10 = var6.intl;
                        var7 = var10.string;
                        var6 = var9[var5];
                        var6 = var8.bind(var2)(var6);
                        var6 = var6.t;
                        var6 = var6.Qic1FD;
                        var6 = var7.bind(var10)(var6);
                        var3.title = var6;
                        var6 = var9[var5];
                        var6 = var8.bind(var2)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var2)(var5);
                        var5 = var5.t;
                        var5 = var5["5sHHoy"];
                        var5 = var6.bind(var7)(var5);
                        var3.body = var5;
                        var3 = var4.bind(var2)(var3);
                    case 1110:
                        return var2;
                    case 1113:
                        return var1;
                    case 1116:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot27 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76124: for (var _fun76124_ip = 0;;) switch (_fun76124_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun76124_ip = 283;
                            continue _fun76124
                        }
                    case 15:
                        var8 = var1.channelId;
                        var _closure4_slot0 = var8;
                        var7 = var1.messageId;
                        var2 = undefined;
                        SaveGenerator(address = 35);
                    case 33:
                        return var2;
                    case 35:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun76124_ip = 280;
                            continue _fun76124
                        }
                    case 44:
                        var6 = _closure1_slot8;
                        var4 = var6.getChannel;
                        var6 = var4.bind(var6)(var8);
                        var4 = null;
                        if (!(var4 != var6)) {
                            _fun76124_ip = 277;
                            continue _fun76124
                        }
                    case 70:
                        var10 = _closure1_slot5;
                        var9 = var10.isLurking;
                        var4 = var6.guild_id;
                        var4 = var9.bind(var10)(var4);
                        if (var4) {
                            _fun76124_ip = 146;
                            continue _fun76124
                        }
                    case 93:
                        var4 = _closure1_slot14;
                        var3 = function(arg0) { // Environment: var3
                            _fun76125: for (var _fun76125_ip = 0;;) switch (_fun76125_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = {};
                                    var1 = _closure4_slot0;
                                    var0.channelId = var1;
                                    var1 = global;
                                    var1 = var1.Set;
                                    var2 = var1.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var5 = var2;
                                    var1 = new var5[var1](var4);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    var0.selectedAnswerIds = var1;
                                    var1 = false;
                                    var0.submitting = var1;
                                    var0.editing = var1;
                                    var1 = null;
                                    var4 = var1 == var3;
                                    var2 = undefined;
                                    if (var4) {
                                        _fun76125_ip = 78;
                                        continue _fun76125
                                    }
                                case 72:
                                    var2 = var3.showResults;
                                case 78:
                                    var1 = var1 != var2;
                                    if (!var1) {
                                        _fun76125_ip = 88;
                                        continue _fun76125
                                    }
                                case 85:
                                    var1 = var2;
                                case 88:
                                    var0.showResults = var1;
                                    return var0;
                            }
                        };
                        var3 = var4.bind(var2)(var8, var7, var3);
                        var4 = _closure1_slot26;
                        var3 = {};
                        var3.channelId = var8;
                        var3.messageId = var7;
                        var3 = var4.bind(var2)(var3);
                        SaveGenerator(address = 134);
                    case 132:
                        return var3;
                    case 134:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun76124_ip = 143;
                            continue _fun76124
                        }
                    case 140:
                        return var3;
                    case 143:
                        return var3;
                    case 146:
                        var4 = _closure1_slot20;
                        var3 = {};
                        var6 = var6.guild_id;
                        var3.guildId = var6;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var5 = 13;
                        var6 = var9[var5];
                        var6 = var8.bind(var2)(var6);
                        var10 = var6.intl;
                        var7 = var10.string;
                        var6 = var9[var5];
                        var6 = var8.bind(var2)(var6);
                        var6 = var6.t;
                        var6 = var6.B9QnBp;
                        var6 = var7.bind(var10)(var6);
                        var3.title = var6;
                        var6 = var9[var5];
                        var6 = var8.bind(var2)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var2)(var5);
                        var5 = var5.t;
                        var5 = var5.BVZCTn;
                        var5 = var6.bind(var7)(var5);
                        var3.body = var5;
                        var3 = var4.bind(var2)(var3);
                    case 277:
                        return var2;
                    case 280:
                        return var1;
                    case 283:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot28 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76128: for (var _fun76128_ip = 0;;) switch (_fun76128_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun76128_ip = 313;
                            continue _fun76128
                        }
                    case 15:
                        var6 = var1.channelId;
                        var5 = var1.messageId;
                        var9 = var1.type;
                        var3 = undefined;
                        SaveGenerator(address = 36);
                    case 34:
                        return var3;
                    case 36:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun76128_ip = 310;
                            continue _fun76128
                        }
                    case 45:
                        var4 = 'submit';
                        if (!(var4 !== var9)) {
                            _fun76128_ip = 272;
                            continue _fun76128
                        }
                    case 56:
                        var4 = 'remove';
                        if (!(var4 !== var9)) {
                            _fun76128_ip = 237;
                            continue _fun76128
                        }
                    case 67:
                        var4 = 'cancel';
                        if (!(var4 !== var9)) {
                            _fun76128_ip = 206;
                            continue _fun76128
                        }
                    case 78:
                        var4 = 'showVotes';
                        if (!(var4 !== var9)) {
                            _fun76128_ip = 182;
                            continue _fun76128
                        }
                    case 88:
                        var4 = 'showVoterDetails';
                        if (!(var4 !== var9)) {
                            _fun76128_ip = 158;
                            continue _fun76128
                        }
                    case 98:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var4 = 11;
                        var4 = var8[var4];
                        var8 = var7.bind(var3)(var4);
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var7 = var4.concat;
                        var4 = 'Unknown poll action type: ';
                        var7 = var7.bind(var4)(var9);
                        var4 = false;
                        var4 = var8.bind(var3)(var4, var7);
                        _fun76128_ip = 304;
                        continue _fun76128;
                    case 158:
                        var7 = _closure1_slot21;
                        var4 = {};
                        var4.channelId = var6;
                        var4.messageId = var5;
                        var4 = var7.bind(var3)(var4);
                        _fun76128_ip = 304;
                        continue _fun76128;
                    case 182:
                        var7 = {};
                        var7.channelId = var6;
                        var7.messageId = var5;
                        var4 = function arg0() {
                            var0 = arg0;
                            var4 = var0.channelId;
                            var _closure5_slot0 = var4;
                            var3 = var0.messageId;
                            var _closure5_slot1 = var3;
                            var2 = _closure1_slot14;
                            var0 = undefined;
                            var1 = function(arg0) { // Environment: var1
                                _fun76131: for (var _fun76131_ip = 0;;) switch (_fun76131_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var2 = null;
                                        var1 = var2 == var4;
                                        if (var1) {
                                            _fun76131_ip = 21;
                                            continue _fun76131
                                        }
                                    case 12:
                                        var0 = var4.showResults;
                                        var1 = !var0;
                                    case 21:
                                        var7 = _closure1_slot11;
                                        var6 = var7.getMessage;
                                        var5 = _closure5_slot0;
                                        var3 = _closure5_slot1;
                                        var3 = var6.bind(var7)(var5, var3);
                                        var5 = var2 != var3;
                                        var7 = 0;
                                        var9 = 0;
                                        if (!var5) {
                                            _fun76131_ip = 89;
                                            continue _fun76131
                                        }
                                    case 62:
                                        var6 = var3.reactions;
                                        var5 = var6.reduce;
                                        var3 = function(arg0, arg1) { // Environment: var3
                                            _fun76132: for (var _fun76132_ip = 0;;) switch (_fun76132_ip) {
                                                case 0:
                                                    var0 = arg1;
                                                    var2 = var0.count_details;
                                                    var1 = null;
                                                    var3 = var1 == var2;
                                                    var0 = undefined;
                                                    if (var3) {
                                                        _fun76132_ip = 26;
                                                        continue _fun76132
                                                    }
                                                case 20:
                                                    var0 = var2.vote;
                                                case 26:
                                                    var2 = var1 != var0;
                                                    var1 = 0;
                                                    if (!var2) {
                                                        _fun76132_ip = 38;
                                                        continue _fun76132
                                                    }
                                                case 35:
                                                    var1 = var0;
                                                case 38:
                                                    var0 = arg0;
                                                    var0 = var0 + var1;
                                                    return var0;
                                            }
                                        };
                                        var9 = var5.bind(var6)(var3, var7);
                                    case 89:
                                        var6 = _closure1_slot1;
                                        var5 = _closure1_slot3;
                                        var3 = 17;
                                        var5 = var5[var3];
                                        var3 = undefined;
                                        var8 = var6.bind(var3)(var5);
                                        var7 = var8.trackWithMetadata;
                                        var0 = _closure1_slot15;
                                        var6 = var0.POLL_SHOW_RESULTS_CLICKED;
                                        var0 = {};
                                        var5 = _closure5_slot0;
                                        var0.channel_id = var5;
                                        var10 = _closure5_slot1;
                                        var0.message_id = var10;
                                        var0.show_results = var1;
                                        var0.votes_count = var9;
                                        var0 = var7.bind(var8)(var6, var0);
                                        var0 = {};
                                        var0.channelId = var5;
                                        var5 = global;
                                        var5 = var5.Set;
                                        var6 = var5.prototype;
                                        var6 = Object.create(var6, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var14 = var6;
                                        var5 = new var14[var5](var13);
                                        var5 = var5 instanceof Object ? var5 : var6;
                                        var0.selectedAnswerIds = var5;
                                        var5 = var2 == var4;
                                        var6 = undefined;
                                        if (var5) {
                                            _fun76131_ip = 220;
                                            continue _fun76131
                                        }
                                    case 214:
                                        var6 = var4.submitting;
                                    case 220:
                                        var5 = var2 != var6;
                                        if (!var5) {
                                            _fun76131_ip = 230;
                                            continue _fun76131
                                        }
                                    case 227:
                                        var5 = var6;
                                    case 230:
                                        var0.submitting = var5;
                                        var5 = var2 == var4;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun76131_ip = 250;
                                            continue _fun76131
                                        }
                                    case 244:
                                        var3 = var4.submitting;
                                    case 250:
                                        var2 = var2 != var3;
                                        if (!var2) {
                                            _fun76131_ip = 260;
                                            continue _fun76131
                                        }
                                    case 257:
                                        var2 = var3;
                                    case 260:
                                        var0.editing = var2;
                                        var0.showResults = var1;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var0)(var4, var3, var1);
                            return var0;
                        };
                        var4 = var4.bind(var3)(var7);
                        _fun76128_ip = 304;
                        continue _fun76128;
                    case 206:
                        var7 = _closure1_slot22;
                        var4 = {};
                        var4.channelId = var6;
                        var4.messageId = var5;
                        var8 = false;
                        var4.isEditing = var8;
                        var4 = var7.bind(var3)(var4);
                        _fun76128_ip = 304;
                        continue _fun76128;
                    case 237:
                        var4 = {};
                        var4.channelId = var6;
                        var4.messageId = var5;
                        var2 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot28;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = var2.bind(var3)(var4);
                        SaveGenerator(address = 263);
                    case 261:
                        return var2;
                    case 263:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (!var4) {
                            _fun76128_ip = 304;
                            continue _fun76128
                        }
                    case 269:
                        return var2;
                    case 272:
                        var4 = _closure1_slot26;
                        var2 = {};
                        var2.channelId = var6;
                        var2.messageId = var5;
                        var2 = var4.bind(var3)(var2);
                        SaveGenerator(address = 298);
                    case 296:
                        return var2;
                    case 298:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun76128_ip = 307;
                            continue _fun76128
                        }
                    case 304:
                        return var3;
                    case 307:
                        return var2;
                    case 310:
                        return var1;
                    case 313:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot29 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76135: for (var _fun76135_ip = 0;;) switch (_fun76135_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun76135_ip = 472;
                            continue _fun76135
                        }
                    case 15:
                        var5 = var1.channel;
                        var7 = var5;
                        var _closure4_slot0 = var5;
                        var16 = var1.question;
                        var8 = var1.answers;
                        var13 = var1.allowMultiSelect;
                        var10 = var1.duration;
                        var5 = var1.layout;
                        var9 = var5;
                        var _closure4_slot1 = var5;
                        var6 = var1.onClose;
                        var5 = undefined;
                        var12 = undefined;
                        var _closure4_slot2 = var5;
                        var3 = undefined;
                        SaveGenerator(address = 83);
                    case 81:
                        return var5;
                    case 83:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun76135_ip = 469;
                            continue _fun76135
                        }
                    case 92:
                        var18 = _closure1_slot12;
                        var17 = var18.getUploads;
                        var14 = var7;
                        var15 = var14.id;
                        var14 = _closure1_slot9;
                        var14 = var14.Poll;
                        var14 = var17.bind(var18)(var15, var14);
                        var12 = var14;
                        _closure4_slot2 = var14;
                        var15 = var8;
                        var14 = var15.map;
                        var8 = function(arg0) { // Environment: var11
                            _fun76136: for (var _fun76136_ip = 0;;) switch (_fun76136_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var2 = _closure4_slot2;
                                    var3 = null;
                                    var5 = var3 == var2;
                                    var2 = undefined;
                                    var8 = undefined;
                                    if (var5) {
                                        _fun76136_ip = 51;
                                        continue _fun76136
                                    }
                                case 29:
                                    var6 = _closure4_slot2;
                                    var5 = var6.findIndex;
                                    var1 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var1 = var0.id;
                                        var0 = _closure5_slot0;
                                        var0 = var0.localCreationAnswerId;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var8 = var5.bind(var6)(var1);
                                case 51:
                                    var1 = {};
                                    var6 = -1;
                                    var5 = undefined;
                                    if (!(var6 !== var8)) {
                                        _fun76136_ip = 98;
                                        continue _fun76136
                                    }
                                case 65:
                                    var6 = global;
                                    var6 = var6.HermesInternal;
                                    var7 = var6.concat;
                                    var6 = '';
                                    var7 = var7.bind(var6)(var8);
                                    var6 = new Array(1);
                                    var6[0] = var7;
                                    var5 = var6;
                                case 98:
                                    var1.attachment_ids = var5;
                                    var5 = _closure4_slot1;
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var4 = 24;
                                    var4 = var7[var4];
                                    var4 = var6.bind(var2)(var4);
                                    var4 = var4.PollLayoutTypes;
                                    var4 = var4.DEFAULT;
                                    if (!(var5 === var4)) {
                                        _fun76136_ip = 176;
                                        continue _fun76136
                                    }
                                case 146:
                                    var6 = var0.text;
                                    var5 = var3 == var6;
                                    var4 = undefined;
                                    if (var5) {
                                        _fun76136_ip = 170;
                                        continue _fun76136
                                    }
                                case 160:
                                    var5 = var6.trim;
                                    var4 = var5.bind(var6)();
                                case 170:
                                    var1.text = var4;
                                case 176:
                                    var0 = var0.image;
                                    var4 = var3 == var0;
                                    var2 = undefined;
                                    if (var4) {
                                        _fun76136_ip = 197;
                                        continue _fun76136
                                    }
                                case 191:
                                    var2 = var0.emoji;
                                case 197:
                                    if (!(var3 != var2)) {
                                        _fun76136_ip = 265;
                                        continue _fun76136
                                    }
                                case 201:
                                    var0 = var2.id;
                                    if (!(var3 == var0)) {
                                        _fun76136_ip = 240;
                                        continue _fun76136
                                    }
                                case 210:
                                    var0 = var2.optionallyDiverseSequence;
                                    if (!(var3 != var0)) {
                                        _fun76136_ip = 265;
                                        continue _fun76136
                                    }
                                case 220:
                                    var0 = {};
                                    var3 = var2.optionallyDiverseSequence;
                                    var0.name = var3;
                                    var1.emoji = var0;
                                    _fun76136_ip = 265;
                                    continue _fun76136;
                                case 240:
                                    var0 = {};
                                    var2 = var2.id;
                                    var0.id = var2;
                                    var2 = '';
                                    var0.name = var2;
                                    var1.emoji = var0;
                                case 265:
                                    var0 = {};
                                    var0.poll_media = var1;
                                    return var0;
                            }
                        };
                        var14 = var14.bind(var15)(var8);
                        var8 = {};
                        var15 = {};
                        var17 = var16;
                        var16 = var17.trim;
                        var16 = var16.bind(var17)();
                        var15.text = var16;
                        var8.question = var15;
                        var8.answers = var14;
                        var8.allow_multiselect = var13;
                        var8.duration = var10;
                        var8.layout_type = var9;
                        var3 = var8;
                    case 204: // try_start_0
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var8 = 25;
                        var8 = var10[var8];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.sendPollMessage;
                        var8 = var7.id;
                        var7 = var3;
                        var3 = {};
                        var3.attachmentsToUpload = var12;
                        var11 = function arg0, arg1, arg2() {
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 26;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.handleUploadMessageAttachmentsErrors;
                            var1 = {};
                            var4 = arg0;
                            var1.file = var4;
                            var5 = _closure4_slot0;
                            var4 = var5.getGuildId;
                            var4 = var4.bind(var5)();
                            var1.guildId = var4;
                            var4 = new Array(0);
                            var1.analyticsLocations = var4;
                            var4 = arg1;
                            var1.code = var4;
                            var4 = arg2;
                            var1.reason = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var3.onAttachmentUploadError = var11;
                        var3 = var9.bind(var10)(var8, var7, var3);
                        SaveGenerator(address = 268);
                    case 266:
                        return var3;
                    case 268:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun76135_ip = 290;
                            continue _fun76135
                        }
                    case 274:
                        var8 = var6;
                        var7 = null;
                        if (!(var7 != var8)) {
                            _fun76135_ip = 287;
                            continue _fun76135
                        }
                    case 283:
                        var6 = var6.bind(var5)();
                    case 287: // try_end0
                        return var5;
                    case 290:
                        return var3;
                    case 293: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var4 = var7;
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var6 = 27;
                        var3 = var3[var6];
                        var3 = var8.bind(var5)(var3);
                        var3 = var3.APIError;
                        var3 = var7 instanceof var3;
                        if (var3) {
                            _fun76135_ip = 379;
                            continue _fun76135
                        }
                    case 331:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var2 = var2[var6];
                        var2 = var3.bind(var5)(var2);
                        var5 = var2.APIError;
                        var21 = var4;
                        var3 = var5.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var22 = var3;
                        var2 = new var22[var5](var21, var20);
                        var3 = var2 instanceof Object ? var2 : var3;
                        _fun76135_ip = 382;
                        continue _fun76135;
                    case 379:
                        var3 = var4;
                    case 382:
                        var2 = var3.getAnyErrorMessage;
                        var3 = var2.bind(var3)();
                        var2 = 'poll';
                        if (!(var2 === var3)) {
                            _fun76135_ip = 414;
                            continue _fun76135
                        }
                    case 400:
                        var2 = var4;
                        var3 = var2.text;
                        var2 = null;
                        if (!(var2 == var3)) {
                            _fun76135_ip = 419;
                            continue _fun76135
                        }
                    case 414:
                        var2 = var4;
                        _fun76135_ip = 467;
                        continue _fun76135;
                    case 419:
                        var3 = {};
                        var21 = var3;
                        var20 = var4;
                        var5 = copyDataProperties(var21, var20);
                        var5 = global;
                        var6 = var5.JSON;
                        var5 = var6.parse;
                        var4 = var4.text;
                        var5 = var5.bind(var6)(var4);
                        var4 = 'body';
                        var3[var4] = var5;
                        var2 = var3;
                    case 467:
                        throw var2;
                    case 469:
                        return var1;
                    case 472:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot30 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76141: for (var _fun76141_ip = 0;;) switch (_fun76141_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun76141_ip = 257;
                            continue _fun76141
                        }
                    case 13:
                        var8 = var1.channelId;
                        var7 = var1.messageId;
                        var4 = undefined;
                        SaveGenerator(address = 29);
                    case 27:
                        return var4;
                    case 29:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun76141_ip = 254;
                            continue _fun76141
                        }
                    case 38:
                        var5 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var2 = 12;
                        var2 = var13[var2];
                        var6 = var5.bind(var4)(var2);
                        var5 = var6.confirm;
                        var2 = {};
                        var12 = _closure1_slot0;
                        var9 = 13;
                        var10 = var13[var9];
                        var10 = var12.bind(var4)(var10);
                        var14 = var10.intl;
                        var11 = var14.string;
                        var10 = var13[var9];
                        var10 = var12.bind(var4)(var10);
                        var10 = var10.t;
                        var10 = var10["+rfkTK"];
                        var10 = var11.bind(var14)(var10);
                        var2.title = var10;
                        var10 = var13[var9];
                        var10 = var12.bind(var4)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var9 = var13[var9];
                        var9 = var12.bind(var4)(var9);
                        var9 = var9.t;
                        var9 = var9.H2I1gL;
                        var9 = var10.bind(var11)(var9);
                        var2.body = var9;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 185);
                    case 183:
                        return var2;
                    case 185:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun76141_ip = 251;
                            continue _fun76141
                        }
                    case 191:
                        if (!var2) {
                            _fun76141_ip = 245;
                            continue _fun76141
                        }
                    case 194:
                        var5 = _closure1_slot2;
                        var6 = _closure1_slot3;
                        var3 = 22;
                        var3 = var6[var3];
                        var6 = var5.bind(var4)(var3);
                        var5 = var6.endPollEarly;
                        var3 = {};
                        var3.channelId = var8;
                        var3.messageId = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 239);
                    case 237:
                        return var3;
                    case 239:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun76141_ip = 248;
                            continue _fun76141
                        }
                    case 245:
                        return var4;
                    case 248:
                        return var3;
                    case 251:
                        return var2;
                    case 254:
                        return var1;
                    case 257:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot31 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var9 = var3.getPollState;
    var _closure1_slot13 = var9;
    var3 = var3.updatePollState;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var9 = var3.AnalyticEvents;
    var _closure1_slot15 = var9;
    var3 = var3.JoinGuildSources;
    var _closure1_slot16 = var3;
    var3 = {};
    var9 = function arg0() {
        _fun76142: for (var _fun76142_ip = 0;;) switch (_fun76142_ip) {
            case 0:
                var3 = arg0;
                var9 = var3.answerId;
                var _closure2_slot0 = var9;
                var5 = null;
                var2 = Object.create(var5);
                var0 = 0;
                var2.answerId = var0;
                var14 = {};
                var13 = var3;
                var12 = var2;
                var2 = copyDataProperties(var14, var13, var12);
                var0 = undefined;
                var _closure2_slot4 = var0;
                var7 = var2.channelId;
                var4 = var2.messageId;
                var6 = _closure1_slot11;
                var3 = var6.getMessage;
                var8 = var3.bind(var6)(var7, var4);
                if (!(var5 == var8)) {
                    _fun76142_ip = 190;
                    continue _fun76142
                }
            case 78:
                var6 = _closure1_slot6;
                var3 = var6.getMessage;
                var3 = var3.bind(var6)(var7, var4);
                var6 = var3.message;
                if (!(var5 == var6)) {
                    _fun76142_ip = 169;
                    continue _fun76142
                }
            case 103:
                var10 = _closure1_slot1;
                var11 = _closure1_slot3;
                var6 = 11;
                var6 = var11[var6];
                var11 = var10.bind(var0)(var6);
                var10 = var5 != var8;
                var6 = 'Tapped on a non-existent poll message';
                var6 = var11.bind(var0)(var10, var6);
                var6 = global;
                var6 = var6.Error;
                var10 = var6.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var6
                    }
                });
                var15 = var10;
                var6 = new var15[var6](var14);
                var6 = var6 instanceof Object ? var6 : var10;
                throw var6;
            case 169:
                var6 = {};
                var6.channelId = var7;
                var6.messageId = var4;
                var3 = var3.message;
                var6.message = var3;
                _fun76142_ip = 207;
                continue _fun76142;
            case 190:
                var3 = {};
                var3.message = var8;
                var3.channelId = var7;
                var3.messageId = var4;
                var6 = var3;
            case 207:
                var4 = var6.channelId;
                var _closure2_slot1 = var4;
                var3 = var6.messageId;
                var _closure2_slot2 = var3;
                var6 = var6.message;
                var _closure2_slot3 = var6;
                var8 = _closure1_slot0;
                var10 = _closure1_slot3;
                var7 = 16;
                var7 = var10[var7];
                var8 = var8.bind(var0)(var7);
                var7 = var8.computeBasicPollChatData;
                var7 = var7.bind(var8)(var6);
                if (!(var5 == var7)) {
                    _fun76142_ip = 271;
                    continue _fun76142
                }
            case 269:
                var7 = {};
            case 271:
                var8 = var7.tapShouldOpenVotersModal;
                var7 = true;
                if (!(var7 === var8)) {
                    _fun76142_ip = 309;
                    continue _fun76142
                }
            case 283:
                var8 = _closure1_slot21;
                var7 = {};
                var7.channelId = var4;
                var7.messageId = var3;
                var7.answerId = var9;
                var7 = var8.bind(var0)(var7);
                _fun76142_ip = 352;
                continue _fun76142;
            case 309:
                var6 = var6.poll;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun76142_ip = 330;
                    continue _fun76142
                }
            case 324:
                var5 = var6.allow_multiselect;
            case 330:
                _closure2_slot4 = var5;
                var2 = _closure1_slot14;
                var1 = function(arg0) { // Environment: var1
                    _fun76143: for (var _fun76143_ip = 0;;) switch (_fun76143_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun76143_ip = 313;
                                continue _fun76143
                            }
                        case 12:
                            var0 = {};
                            var12 = var0;
                            var11 = var1;
                            var1 = copyDataProperties(var12, var11);
                            var1 = global;
                            var4 = var1.Set;
                            var12 = var0.selectedAnswerIds;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var13 = var3;
                            var1 = new var13[var4](var12, var11);
                            var6 = var1 instanceof Object ? var1 : var3;
                            var0.selectedAnswerIds = var6;
                            var3 = var6.has;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var6)(var1);
                            if (var1) {
                                _fun76143_ip = 163;
                                continue _fun76143
                            }
                        case 84:
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun76143_ip = 147;
                                continue _fun76143
                            }
                        case 91:
                            var1 = _closure1_slot17;
                            var5 = undefined;
                            var4 = var1.bind(var5)(var6);
                            var3 = var4.bind(var5)();
                            var1 = var3.done;
                            if (var1) {
                                _fun76143_ip = 147;
                                continue _fun76143
                            }
                        case 117:
                            var7 = var3.value;
                            var1 = var6.delete;
                            var1 = var1.bind(var6)(var7);
                            var7 = var4.bind(var5)();
                            var1 = var7.done;
                            var3 = var7;
                            if (!var1) {
                                _fun76143_ip = 117;
                                continue _fun76143
                            }
                        case 147:
                            var3 = var6.add;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var6)(var1);
                            _fun76143_ip = 177;
                            continue _fun76143;
                        case 163:
                            var3 = var6.delete;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var6)(var1);
                        case 177:
                            var4 = _closure1_slot19;
                            var3 = _closure2_slot3;
                            var7 = var3.poll;
                            var8 = var2 == var7;
                            var5 = undefined;
                            var3 = undefined;
                            if (var8) {
                                _fun76143_ip = 211;
                                continue _fun76143
                            }
                        case 205:
                            var3 = var7.answers;
                        case 211:
                            var3 = var4.bind(var5)(var3, var6);
                            var8 = var3.analyticsSelectedAnswerIds;
                            var7 = var3.selectedTextAnswersCount;
                            var6 = var3.selectedEmojiAnswersCount;
                            var4 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var3 = 17;
                            var3 = var10[var3];
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.trackWithMetadata;
                            var1 = _closure1_slot15;
                            var3 = var1.POLL_VOTE_SELECTED;
                            var1 = {};
                            var10 = _closure2_slot1;
                            var1.channel_id = var10;
                            var9 = _closure2_slot2;
                            var1.message_id = var9;
                            var1.selected_answer_ids = var8;
                            var1.selected_text_answers_count = var7;
                            var1.selected_emoji_answers_count = var6;
                            var1 = var4.bind(var5)(var3, var1);
                            return var0;
                        case 313:
                            var0 = global;
                            var3 = var0.Set;
                            var1 = _closure2_slot0;
                            var0 = new Array(1);
                            var0[0] = var1;
                            var1 = var3.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var13 = var1;
                            var12 = var0;
                            var0 = new var13[var3](var12, var11);
                            var1 = var0 instanceof Object ? var0 : var1;
                            var3 = _closure1_slot19;
                            var4 = _closure2_slot3;
                            var5 = var4.poll;
                            var6 = var2 == var5;
                            var4 = undefined;
                            var2 = undefined;
                            if (var6) {
                                _fun76143_ip = 393;
                                continue _fun76143
                            }
                        case 387:
                            var2 = var5.answers;
                        case 393:
                            var2 = var3.bind(var4)(var2, var1);
                            var8 = var2.analyticsSelectedAnswerIds;
                            var7 = var2.selectedTextAnswersCount;
                            var6 = var2.selectedEmojiAnswersCount;
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var2 = 17;
                            var2 = var5[var2];
                            var5 = var3.bind(var4)(var2);
                            var4 = var5.trackWithMetadata;
                            var0 = _closure1_slot15;
                            var3 = var0.POLL_VOTE_SELECTED;
                            var0 = {};
                            var2 = _closure2_slot1;
                            var0.channel_id = var2;
                            var9 = _closure2_slot2;
                            var0.message_id = var9;
                            var0.selected_answer_ids = var8;
                            var0.selected_text_answers_count = var7;
                            var0.selected_emoji_answers_count = var6;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = {
                                'channelId': null,
                                'selectedAnswerIds': null,
                                'submitting': false,
                                'editing': false,
                                'showResults': false
                            };
                            var0.channelId = var2;
                            var0.selectedAnswerIds = var1;
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var4, var3, var1);
            case 352:
                return var0;
        }
    };
    var3.handlePollAnswerTapped = var9;
    var3.handlePollSubmitVote = var8;
    var3.handleUpdateVoteEditingState = var7;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot29;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var3.handlePollActionTapped = var7;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot30;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var3.createPoll = var7;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot31;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var3.endPollEarly = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/PollsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.handleShowVotesForAnswer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3083, 4264, 1216, 1372, 3992, 4230, 4245, 3991, 6796, 660, 44, 3994, 1234, 4674, 9644, 6795, 4298, 22, 566, 806, 6549, 9649, 3197, 6800, 6521, 7603, 3341, 2]);