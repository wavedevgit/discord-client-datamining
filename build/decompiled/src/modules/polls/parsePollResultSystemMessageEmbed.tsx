// modules/polls/parsePollResultSystemMessageEmbed.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function arg0, arg1() {
        _fun55794: for (var _fun55794_ip = 0;;) switch (_fun55794_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun55794_ip = 46;
                    continue _fun55794
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun55794_ip = 55;
                    continue _fun55794
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun55794_ip = 343;
                    continue _fun55794
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun55794_ip = 323;
                    continue _fun55794
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun55794_ip = 283;
                    continue _fun55794
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun55794_ip = 270;
                    continue _fun55794
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
                    _fun55794_ip = 163;
                    continue _fun55794
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun55794_ip = 179;
                    continue _fun55794
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun55794_ip = 249;
                    continue _fun55794
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun55794_ip = 249;
                    continue _fun55794
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun55794_ip = 234;
                    continue _fun55794
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun55794_ip = 247;
                    continue _fun55794
                }
            case 234:
                var8 = _closure1_slot1;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun55794_ip = 265;
                continue _fun55794;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun55794_ip = 283;
                continue _fun55794;
            case 270:
                var6 = _closure1_slot1;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun55794_ip = 323;
                    continue _fun55794
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
                    _fun55794_ip = 330;
                    continue _fun55794
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun55795: for (var _fun55795_ip = 0;;) switch (_fun55795_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun55795_ip = 56;
                                continue _fun55795
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
                            _fun55795_ip = 67;
                            continue _fun55795;
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
    var _closure1_slot0 = var0;
    var0 = function arg0, arg1() {
        _fun55796: for (var _fun55796_ip = 0;;) switch (_fun55796_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun55796_ip = 23;
                    continue _fun55796
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun55796_ip = 33;
                    continue _fun55796
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
                    _fun55796_ip = 70;
                    continue _fun55796
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun55796_ip = 55;
                    continue _fun55796
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/parsePollResultSystemMessageEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55797: for (var _fun55797_ip = 0;;) switch (_fun55797_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = var0 == var3;
                var17 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun55797_ip = 22;
                    continue _fun55797
                }
            case 16:
                var1 = var3.fields;
            case 22:
                if (!(var0 != var1)) {
                    _fun55797_ip = 373;
                    continue _fun55797
                }
            case 29:
                var1 = {};
                var2 = {};
                var4 = _closure1_slot0;
                var3 = var3.fields;
                var16 = var4.bind(var17)(var3);
                var4 = var16.bind(var17)();
                var3 = var4.done;
                var15 = global;
                var14 = 10;
                var13 = 'true';
                var12 = 'victor_answer_emoji_animated';
                var11 = 'victor_answer_emoji_name';
                var10 = 'victor_answer_emoji_id';
                var9 = 'total_votes';
                var8 = 'victor_answer_votes';
                var7 = 'victor_answer_text';
                var6 = 'victor_answer_id';
                var5 = 'poll_question_text';
                if (var3) {
                    _fun55797_ip = 334;
                    continue _fun55797
                }
            case 123:
                var3 = var4.value;
                var18 = var3.rawName;
                if (!(var5 !== var18)) {
                    _fun55797_ip = 304;
                    continue _fun55797
                }
            case 141:
                if (!(var6 !== var18)) {
                    _fun55797_ip = 290;
                    continue _fun55797
                }
            case 148:
                if (!(var7 !== var18)) {
                    _fun55797_ip = 276;
                    continue _fun55797
                }
            case 155:
                if (!(var8 !== var18)) {
                    _fun55797_ip = 250;
                    continue _fun55797
                }
            case 159:
                if (!(var9 !== var18)) {
                    _fun55797_ip = 224;
                    continue _fun55797
                }
            case 163:
                if (!(var10 !== var18)) {
                    _fun55797_ip = 210;
                    continue _fun55797
                }
            case 167:
                if (!(var11 !== var18)) {
                    _fun55797_ip = 196;
                    continue _fun55797
                }
            case 171:
                if (!(var12 === var18)) {
                    _fun55797_ip = 316;
                    continue _fun55797
                }
            case 178:
                var18 = var3.rawValue;
                var18 = var13 === var18;
                var2.animated = var18;
                _fun55797_ip = 316;
                continue _fun55797;
            case 196:
                var18 = var3.rawValue;
                var2.name = var18;
                _fun55797_ip = 316;
                continue _fun55797;
            case 210:
                var18 = var3.rawValue;
                var2.id = var18;
                _fun55797_ip = 316;
                continue _fun55797;
            case 224:
                var19 = var15.parseInt;
                var18 = var3.rawValue;
                var18 = var19.bind(var17)(var18, var14);
                var1.totalVotes = var18;
                _fun55797_ip = 316;
                continue _fun55797;
            case 250:
                var19 = var15.parseInt;
                var18 = var3.rawValue;
                var18 = var19.bind(var17)(var18, var14);
                var1.victorAnswerVotes = var18;
                _fun55797_ip = 316;
                continue _fun55797;
            case 276:
                var18 = var3.rawValue;
                var1.victorAnswerText = var18;
                _fun55797_ip = 316;
                continue _fun55797;
            case 290:
                var18 = var3.rawValue;
                var1.victorAnswerId = var18;
                _fun55797_ip = 316;
                continue _fun55797;
            case 304:
                var3 = var3.rawValue;
                var1.questionText = var3;
            case 316:
                var18 = var16.bind(var17)();
                var3 = var18.done;
                var4 = var18;
                if (!var3) {
                    _fun55797_ip = 123;
                    continue _fun55797
                }
            case 334:
                var3 = var2.name;
                if (!(var0 != var3)) {
                    _fun55797_ip = 371;
                    continue _fun55797
                }
            case 343:
                var4 = var2.animated;
                var3 = var0 != var4;
                if (!var3) {
                    _fun55797_ip = 359;
                    continue _fun55797
                }
            case 356:
                var3 = var4;
            case 359:
                var2.animated = var3;
                var1.victorEmoji = var2;
            case 371:
                return var1;
            case 373:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);