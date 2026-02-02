// modules/polls/PollsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var0 = function arg0, arg1() {
        _fun54278: for (var _fun54278_ip = 0;;) switch (_fun54278_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun54278_ip = 46;
                    continue _fun54278
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun54278_ip = 55;
                    continue _fun54278
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun54278_ip = 343;
                    continue _fun54278
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun54278_ip = 323;
                    continue _fun54278
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun54278_ip = 283;
                    continue _fun54278
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun54278_ip = 270;
                    continue _fun54278
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
                    _fun54278_ip = 163;
                    continue _fun54278
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun54278_ip = 179;
                    continue _fun54278
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun54278_ip = 249;
                    continue _fun54278
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun54278_ip = 249;
                    continue _fun54278
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun54278_ip = 234;
                    continue _fun54278
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun54278_ip = 247;
                    continue _fun54278
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun54278_ip = 265;
                continue _fun54278;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun54278_ip = 283;
                continue _fun54278;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun54278_ip = 323;
                    continue _fun54278
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
                    _fun54278_ip = 330;
                    continue _fun54278
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun54279: for (var _fun54279_ip = 0;;) switch (_fun54279_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun54279_ip = 56;
                                continue _fun54279
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
                            _fun54279_ip = 67;
                            continue _fun54279;
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
        _fun54280: for (var _fun54280_ip = 0;;) switch (_fun54280_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun54280_ip = 23;
                    continue _fun54280
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun54280_ip = 33;
                    continue _fun54280
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
                    _fun54280_ip = 70;
                    continue _fun54280
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun54280_ip = 55;
                    continue _fun54280
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var7 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.v4;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot14 = var7;
    var6 = function arg0() {
        _fun54282: for (var _fun54282_ip = 0;;) switch (_fun54282_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.text;
                var0 = null;
                var2 = var0 == var3;
                var1 = undefined;
                if (var2) {
                    _fun54282_ip = 29;
                    continue _fun54282
                }
            case 19:
                var2 = var3.trim;
                var1 = var2.bind(var3)();
            case 29:
                var0 = var0 != var1;
                if (!var0) {
                    _fun54282_ip = 47;
                    continue _fun54282
                }
            case 36:
                var2 = var1.length;
                var1 = 0;
                var0 = var2 > var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot15 = var6;
    var5 = function arg0() {
        var0 = global;
        var2 = var0.Date;
        var1 = var0.Date;
        var0 = var1.now;
        var1 = var0.bind(var1)();
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 10;
        var3 = var3[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var3);
        var0 = var0.Millis;
        var3 = var0.HOUR;
        var0 = arg0;
        var0 = var0 * var3;
        var5 = var1 + var0;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var6 = var1;
        var0 = new var6[var2](var5, var4);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = var1.toISOString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot16 = var5;
    var0 = function arg0, arg1() {
        _fun54284: for (var _fun54284_ip = 0;;) switch (_fun54284_ip) {
            case 0:
                var4 = arg1;
                var0 = arg0;
                var1 = var0.embeds;
                var0 = 0;
                var2 = var1[var0];
                var1 = null;
                var3 = var1 == var2;
                var5 = undefined;
                var0 = undefined;
                if (var3) {
                    _fun54284_ip = 78;
                    continue _fun54284
                }
            case 31:
                var6 = var2.fields;
                var2 = var1 == var6;
                var0 = undefined;
                if (var2) {
                    _fun54284_ip = 78;
                    continue _fun54284
                }
            case 46:
                var3 = var6.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.rawName;
                    var0 = 'poll_question_text';
                    var0 = var0 === var1;
                    return var0;
                };
                var2 = var3.bind(var6)(var2);
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun54284_ip = 78;
                    continue _fun54284
                }
            case 72:
                var0 = var2.rawValue;
            case 78:
                var2 = var1 != var0;
                var3 = '';
                if (!var2) {
                    _fun54284_ip = 92;
                    continue _fun54284
                }
            case 89:
                var3 = var0;
            case 92:
                var0 = var3;
                if (!(var1 != var4)) {
                    _fun54284_ip = 134;
                    continue _fun54284
                }
            case 99:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.truncateText;
                var0 = var1.bind(var2)(var3, var4);
            case 134:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var4 = function arg0, arg1() {
        _fun54286: for (var _fun54286_ip = 0;;) switch (_fun54286_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.getChannelId;
                var5 = var1.bind(var2)();
                var9 = _closure1_slot4;
                var8 = var9.getReactions;
                var14 = var2.id;
                var6 = {
                    'id': null,
                    'name': '',
                    'animated': false
                };
                var2 = arg1;
                var6.id = var2;
                var12 = _closure1_slot9;
                var10 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var10.bind(var4)(var2);
                var2 = var2.ReactionTypes;
                var11 = var2.VOTE;
                var16 = var9;
                var15 = var5;
                var13 = var6;
                var9 = var16[var8](var15, var14, var13, var12, var11, var10);
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var5 = var2.bind(var3)(var5);
                var _closure2_slot0 = var5;
                var7 = null;
                var3 = var7 == var5;
                var2 = null;
                if (var3) {
                    _fun54286_ip = 161;
                    continue _fun54286
                }
            case 136:
                var3 = var5.isPrivate;
                var3 = var3.bind(var5)();
                var2 = null;
                if (var3) {
                    _fun54286_ip = 161;
                    continue _fun54286
                }
            case 151:
                var3 = var5.getGuildId;
                var2 = var3.bind(var5)();
            case 161:
                var _closure2_slot1 = var2;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 15;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = global;
                var6 = var2.Array;
                var5 = var6.from;
                var8 = var7 == var9;
                var2 = undefined;
                if (var8) {
                    _fun54286_ip = 216;
                    continue _fun54286
                }
            case 207:
                var8 = var9.values;
                var2 = var8.bind(var9)();
            case 216:
                if (!(var7 == var2)) {
                    _fun54286_ip = 224;
                    continue _fun54286
                }
            case 220:
                var2 = new Array(0);
            case 224:
                var2 = var5.bind(var6)(var2);
                var4 = var3.bind(var4)(var2);
                var3 = var4.reject;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.isBlockedOrIgnored;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.take;
                var1 = _closure1_slot9;
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun54288: for (var _fun54288_ip = 0;;) switch (_fun54288_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 16;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var2.bind(var1)(var0);
                            var3 = var4.getName;
                            var2 = _closure2_slot1;
                            var6 = _closure2_slot0;
                            var5 = null;
                            var5 = var5 == var6;
                            if (var5) {
                                _fun54288_ip = 60;
                                continue _fun54288
                            }
                        case 51:
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                        case 60:
                            var0 = arg0;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var1 = var1.bind(var2)(var0);
                var0 = var1.value;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot18 = var4;
    var3 = function arg0, arg1() {
        _fun54289: for (var _fun54289_ip = 0;;) switch (_fun54289_ip) {
            case 0:
                var8 = arg0;
                var0 = global;
                var2 = var0.Math;
                var1 = var2.max;
                var3 = var8.length;
                var0 = arg1;
                var0 = var0 - var3;
                var7 = 0;
                var6 = var1.bind(var2)(var7, var0);
                var0 = var8.length;
                var9 = 1;
                if (!(var9 !== var0)) {
                    _fun54289_ip = 532;
                    continue _fun54289
                }
            case 51:
                var0 = var8.length;
                var10 = 2;
                if (!(var10 !== var0)) {
                    _fun54289_ip = 352;
                    continue _fun54289
                }
            case 66:
                var1 = var8.length;
                var0 = 3;
                if (!(var0 !== var1)) {
                    _fun54289_ip = 153;
                    continue _fun54289
                }
            case 78:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 13;
                var2 = var5[var0];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var5[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.yVX6kE;
                var0 = {};
                var0.n = var6;
                var0 = var2.bind(var3)(var1, var0);
                _fun54289_ip = 347;
                continue _fun54289;
            case 153:
                if (!(!(var6 > var7))) {
                    _fun54289_ip = 249;
                    continue _fun54289
                }
            case 157:
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 13;
                var3 = var11[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var11[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["0UzBM3"];
                var1 = {};
                var5 = var8[var7];
                var1.a = var5;
                var5 = var8[var9];
                var1.b = var5;
                var5 = var8[var10];
                var1.c = var5;
                var1 = var3.bind(var4)(var2, var1);
                _fun54289_ip = 344;
                continue _fun54289;
            case 249:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 13;
                var4 = var12[var2];
                var3 = undefined;
                var4 = var11.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var12[var2];
                var2 = var11.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2["ThXp+N"];
                var2 = {};
                var11 = var8[var7];
                var2.a = var11;
                var11 = var8[var9];
                var2.b = var11;
                var10 = var8[var10];
                var2.c = var10;
                var2.n = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 344:
                var0 = var1;
            case 347:
                _fun54289_ip = 530;
                continue _fun54289;
            case 352:
                if (!(!(var6 > var7))) {
                    _fun54289_ip = 440;
                    continue _fun54289
                }
            case 356:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 13;
                var3 = var10[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var10[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["O5+f5c"];
                var1 = {};
                var5 = var8[var7];
                var1.a = var5;
                var5 = var8[var9];
                var1.b = var5;
                var1 = var3.bind(var4)(var2, var1);
                _fun54289_ip = 527;
                continue _fun54289;
            case 440:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 13;
                var4 = var11[var2];
                var3 = undefined;
                var4 = var10.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var11[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2.YBnZK0;
                var2 = {};
                var10 = var8[var7];
                var2.a = var10;
                var9 = var8[var9];
                var2.b = var9;
                var2.n = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 527:
                var0 = var1;
            case 530:
                _fun54289_ip = 623;
                continue _fun54289;
            case 532:
                if (!(!(var6 > var7))) {
                    _fun54289_ip = 542;
                    continue _fun54289
                }
            case 536:
                var1 = var8[var7];
                _fun54289_ip = 620;
                continue _fun54289;
            case 542:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 13;
                var4 = var10[var2];
                var3 = undefined;
                var4 = var9.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var10[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2["SV/iZn"];
                var2 = {};
                var7 = var8[var7];
                var2.a = var7;
                var2.n = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 620:
                var0 = var1;
            case 623:
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var8 = var10[var0];
    var0 = undefined;
    var8 = var11.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.POLL_RESULT_MESSAGE_POLL_TITLE_MAX_VISIBLE_CHARS;
    var _closure1_slot8 = var11;
    var8 = var8.VOTES_TOOLTIP_MAX_USERS;
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.ChannelTypesSets;
    var _closure1_slot10 = var11;
    var8 = var8.Permissions;
    var _closure1_slot11 = var8;
    var8 = 17;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/polls/PollsUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function() {
        var0 = {};
        var2 = undefined;
        var0.text = var2;
        var0.image = var2;
        var1 = _closure1_slot14;
        var1 = var1.bind(var2)();
        var0.localCreationAnswerId = var1;
        return var0;
    };
    var2.generateEmptyPollAnswer = var8;
    var2.generateLocalCreationAnswerId = var7;
    var7 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.filterOutUUID = var7;
    var7 = function arg0() {
        _fun54292: for (var _fun54292_ip = 0;;) switch (_fun54292_ip) {
            case 0:
                var1 = _closure1_slot12;
                var0 = arg0;
                var0 = var0.reactions;
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var1 = var3.bind(var4)();
                var0 = var1.done;
                var2 = null;
                if (var0) {
                    _fun54292_ip = 73;
                    continue _fun54292
                }
            case 37:
                var0 = var1.value;
                var0 = var0.me_vote;
                if (!(var2 != var0)) {
                    _fun54292_ip = 69;
                    continue _fun54292
                }
            case 52:
                var5 = var3.bind(var4)();
                var0 = var5.done;
                var1 = var5;
                if (var0) {
                    _fun54292_ip = 73;
                    continue _fun54292
                }
            case 67:
                _fun54292_ip = 37;
                continue _fun54292;
            case 69:
                var0 = true;
                return var0;
            case 73:
                var0 = false;
                return var0;
        }
    };
    var2.hasNonVoteReactions = var7;
    var7 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot6;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun54294: for (var _fun54294_ip = 0;;) switch (_fun54294_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun54294_ip = 60;
                        continue _fun54294
                    }
                case 16:
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var3);
                    var1 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    var0 = var2 !== var1;
                case 60:
                    if (!var0) {
                        _fun54294_ip = 202;
                        continue _fun54294
                    }
                case 66:
                    var1 = _closure1_slot10;
                    var3 = var1.POLLS;
                    var2 = var3.has;
                    var1 = _closure2_slot0;
                    var1 = var1.type;
                    var1 = var2.bind(var3)(var1);
                    var2 = !var1;
                    var1 = !var2;
                    if (var2) {
                        _fun54294_ip = 199;
                        continue _fun54294
                    }
                case 107:
                    var3 = _closure2_slot0;
                    var2 = var3.isPrivate;
                    var2 = var2.bind(var3)();
                    var3 = !var2;
                    var2 = !var3;
                    if (!var3) {
                        _fun54294_ip = 196;
                        continue _fun54294
                    }
                case 130:
                    var8 = _closure1_slot6;
                    var7 = var8.can;
                    var3 = _closure1_slot11;
                    var6 = var3.SEND_MESSAGES;
                    var3 = _closure2_slot0;
                    var3 = var7.bind(var8)(var6, var3);
                    if (!var3) {
                        _fun54294_ip = 193;
                        continue _fun54294
                    }
                case 163:
                    var7 = _closure1_slot6;
                    var6 = var7.can;
                    var5 = _closure1_slot11;
                    var5 = var5.SEND_POLLS;
                    var4 = _closure2_slot0;
                    var3 = var6.bind(var7)(var5, var4);
                case 193:
                    var2 = var3;
                case 196:
                    var1 = var2;
                case 199:
                    var0 = var1;
                case 202:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanPostPollsInChannel = var7;
    var7 = function arg0, arg1() {
        _fun54295: for (var _fun54295_ip = 0;;) switch (_fun54295_ip) {
            case 0:
                var3 = arg1;
                var0 = arg0;
                var1 = var0.length;
                var0 = 0;
                var0 = var0 === var1;
                if (!var0) {
                    _fun54295_ip = 43;
                    continue _fun54295
                }
            case 20:
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot15;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var0 = var1 == var2;
            case 43:
                return var0;
        }
    };
    var2.isPollCreationEmpty = var7;
    var2.isAnswerFilled = var6;
    var6 = function arg0() {
        _fun54297: for (var _fun54297_ip = 0;;) switch (_fun54297_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.text;
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if (var3) {
                    _fun54297_ip = 29;
                    continue _fun54297
                }
            case 19:
                var3 = var4.trim;
                var2 = var3.bind(var4)();
            case 29:
                var0 = var0.image;
                var0 = var1 != var0;
                if (!var0) {
                    _fun54297_ip = 63;
                    continue _fun54297
                }
            case 42:
                var1 = var1 == var2;
                if (var1) {
                    _fun54297_ip = 60;
                    continue _fun54297
                }
            case 49:
                var3 = var2.length;
                var2 = 0;
                var1 = var2 === var3;
            case 60:
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var2.isIncompleteAnswer = var6;
    var2.createPollExpiryTimestamp = var5;
    var5 = function arg0() {
        _fun54298: for (var _fun54298_ip = 0;;) switch (_fun54298_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                if (!(var3 == var1)) {
                    _fun54298_ip = 13;
                    continue _fun54298
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = var3 == var1;
                var5 = undefined;
                var2 = undefined;
                if (var0) {
                    _fun54298_ip = 56;
                    continue _fun54298
                }
            case 24:
                var6 = var1.answers;
                var0 = var3 == var6;
                var2 = undefined;
                if (var0) {
                    _fun54298_ip = 56;
                    continue _fun54298
                }
            case 39:
                var4 = var6.map;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun54299: for (var _fun54299_ip = 0;;) switch (_fun54299_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.poll_media;
                            var4 = null;
                            var2 = var4 == var0;
                            var5 = undefined;
                            if (var2) {
                                _fun54299_ip = 26;
                                continue _fun54299
                            }
                        case 20:
                            var5 = var0.emoji;
                        case 26:
                            var2 = {};
                            var7 = var1.poll_media;
                            var8 = var2;
                            var0 = copyDataProperties(var8, var7);
                            var0 = var4 != var5;
                            var3 = undefined;
                            if (!var0) {
                                _fun54299_ip = 87;
                                continue _fun54299
                            }
                        case 50:
                            var0 = {};
                            var6 = var5.id;
                            var0.id = var6;
                            var5 = var5.name;
                            var6 = var4 != var5;
                            var4 = '';
                            if (!var6) {
                                _fun54299_ip = 80;
                                continue _fun54299
                            }
                        case 77:
                            var4 = var5;
                        case 80:
                            var0.name = var4;
                            var3 = var0;
                        case 87:
                            var0 = 'emoji';
                            var2[var0] = var3;
                            var0 = {};
                            var8 = var0;
                            var7 = var1;
                            var1 = copyDataProperties(var8, var7);
                            var3 = arg1;
                            var1 = 1;
                            var3 = var3 + var1;
                            var1 = 'answer_id';
                            var0[var1] = var3;
                            var1 = 'poll_media';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var2 = var4.bind(var6)(var0);
            case 56:
                var4 = var3 == var1;
                var0 = undefined;
                if (var4) {
                    _fun54298_ip = 70;
                    continue _fun54298
                }
            case 65:
                var0 = var1.duration;
            case 70:
                var0 = var3 != var0;
                var3 = '0';
                if (!var0) {
                    _fun54298_ip = 100;
                    continue _fun54298
                }
            case 83:
                var4 = _closure1_slot16;
                var0 = var1.duration;
                var3 = var4.bind(var5)(var0);
            case 100:
                var0 = {};
                var8 = var0;
                var7 = var1;
                var1 = copyDataProperties(var8, var7);
                var1 = 'expiry';
                var0[var1] = var3;
                var1 = 'answers';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.createPollServerDataFromCreateRequest = var5;
    var5 = function arg0() {
        _fun54300: for (var _fun54300_ip = 0;;) switch (_fun54300_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.poll;
                var0 = null;
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun54300_ip = 40;
                    continue _fun54300
                }
            case 20:
                var2 = var2.question;
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun54300_ip = 40;
                    continue _fun54300
                }
            case 35:
                var1 = var2.text;
            case 40:
                var2 = var0 != var1;
                var0 = '';
                if (!var2) {
                    _fun54300_ip = 54;
                    continue _fun54300
                }
            case 51:
                var0 = var1;
            case 54:
                return var0;
        }
    };
    var2.getPollReplyPreview = var5;
    var5 = function arg0() {
        var3 = arg0;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 12;
        var2 = var7[var1];
        var1 = undefined;
        var4 = var6.bind(var1)(var2);
        var2 = var4.getMessageAuthor;
        var5 = var2.bind(var4)(var3);
        var2 = _closure1_slot17;
        var0 = _closure1_slot8;
        var4 = var2.bind(var1)(var3, var0);
        var0 = 13;
        var2 = var7[var0];
        var2 = var6.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.format;
        var0 = var7[var0];
        var0 = var6.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Vn97Ka;
        var0 = {};
        var5 = var5.nick;
        var0.username = var5;
        var0.title = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getPollResultsReplyPreview = var5;
    var5 = function arg0() {
        _fun54302: for (var _fun54302_ip = 0;;) switch (_fun54302_ip) {
            case 0:
                var3 = arg0;
                var0 = 'author';
                var0 = var0 in var3;
                if (var0) {
                    _fun54302_ip = 18;
                    continue _fun54302
                }
            case 14:
                var0 = null;
                return var0;
            case 18:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 12;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var2 = var4.getMessageAuthor;
                var5 = var2.bind(var4)(var3);
                var2 = _closure1_slot17;
                var0 = _closure1_slot8;
                var4 = var2.bind(var1)(var3, var0);
                var0 = 13;
                var2 = var7[var0];
                var2 = var6.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToParts;
                var0 = var7[var0];
                var0 = var6.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.Vn97Ka;
                var0 = {};
                var5 = var5.nick;
                var0.username = var5;
                var0.title = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getPollResultsReplyPreviewMobile = var5;
    var5 = function arg0() {
        var3 = arg0;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun54304: for (var _fun54304_ip = 0;;) switch (_fun54304_ip) {
                case 0:
                    var0 = arg1;
                    var2 = var0.count_details;
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun54304_ip = 26;
                        continue _fun54304
                    }
                case 20:
                    var0 = var2.vote;
                case 26:
                    var2 = var1 != var0;
                    var1 = 0;
                    if (!var2) {
                        _fun54304_ip = 38;
                        continue _fun54304
                    }
                case 35:
                    var1 = var0;
                case 38:
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
            }
        };
        var0 = 0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getTotalVotes = var5;
    var2.getSampleOfVoterUsernamesForAnswer = var4;
    var2.formatVoterTooltipText = var3;
    var3 = function arg0, arg1, arg2() {
        _fun54305: for (var _fun54305_ip = 0;;) switch (_fun54305_ip) {
            case 0:
                var7 = arg2;
                var4 = _closure1_slot5;
                var3 = var4.getMessage;
                var2 = arg1;
                var0 = arg0;
                var5 = var3.bind(var4)(var2, var0);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun54305_ip = 148;
                    continue _fun54305
                }
            case 34:
                var4 = var5.getReaction;
                var2 = {
                    'id': null,
                    'name': '',
                    'animated': false
                };
                var2.id = var7;
                var0 = '';
                var6 = var4.bind(var5)(var2);
                var8 = var3 == var6;
                var4 = undefined;
                var2 = undefined;
                if (var8) {
                    _fun54305_ip = 103;
                    continue _fun54305
                }
            case 82:
                var6 = var6.count_details;
                var8 = var3 == var6;
                var2 = undefined;
                if (var8) {
                    _fun54305_ip = 103;
                    continue _fun54305
                }
            case 97:
                var2 = var6.vote;
            case 103:
                var8 = var3 != var2;
                var6 = 0;
                var3 = 0;
                if (!var8) {
                    _fun54305_ip = 117;
                    continue _fun54305
                }
            case 114:
                var3 = var2;
            case 117:
                var2 = _closure1_slot18;
                var2 = var2.bind(var4)(var5, var7);
                var5 = var2.length;
                if (!(var6 !== var5)) {
                    _fun54305_ip = 146;
                    continue _fun54305
                }
            case 136:
                var1 = _closure1_slot19;
                var0 = var1.bind(var4)(var2, var3);
            case 146:
                return var0;
            case 148:
                var0 = '';
                return var0;
        }
    };
    var2.getPollAnswerVotesTooltipText = var3;
    var1 = function arg0() {
        _fun54306: for (var _fun54306_ip = 0;;) switch (_fun54306_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.questionText;
                var6 = var0.victorAnswerText;
                var3 = var0.victorAnswerVotes;
                var1 = var0.victorAnswerId;
                var2 = var0.totalVotes;
                var4 = var0.totalVotes;
                var0 = 0;
                var4 = var4 > var0;
                var9 = 0;
                if (!var4) {
                    _fun54306_ip = 79;
                    continue _fun54306
                }
            case 50:
                var4 = global;
                var7 = var4.Math;
                var4 = var7.round;
                var8 = var3 / var2;
                var3 = 100;
                var3 = var8 * var3;
                var9 = var4.bind(var7)(var3);
            case 79:
                if (!(var0 !== var2)) {
                    _fun54306_ip = 305;
                    continue _fun54306
                }
            case 86:
                var0 = null;
                if (!(var0 == var1)) {
                    _fun54306_ip = 196;
                    continue _fun54306
                }
            case 92:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 13;
                var2 = var7[var0];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var7[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.XVk6Zv;
                var0 = {};
                var0.questionText = var5;
                var4 = global;
                var4 = var4.HermesInternal;
                var8 = var4.concat;
                var7 = '';
                var4 = '%';
                var4 = var8.bind(var7)(var9, var4);
                var0.percentage = var4;
                var0 = var2.bind(var3)(var1, var0);
                _fun54306_ip = 303;
                continue _fun54306;
            case 196:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 13;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["8yEgvE"];
                var1 = {};
                var1.questionText = var5;
                var1.victorAnswerText = var6;
                var6 = global;
                var6 = var6.HermesInternal;
                var8 = var6.concat;
                var7 = '';
                var6 = '%';
                var6 = var8.bind(var7)(var9, var6);
                var1.percentage = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 303:
                _fun54306_ip = 375;
                continue _fun54306;
            case 305:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 13;
                var3 = var7[var1];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["8anM0l"];
                var1 = {};
                var1.questionText = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 375:
                return var0;
        }
    };
    var2.formatPollResultNotificationCenterText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 6516, 4215, 3052, 3061, 6572, 660, 491, 566, 5608, 667, 1608, 3944, 1234, 6518, 22, 3922, 2]);