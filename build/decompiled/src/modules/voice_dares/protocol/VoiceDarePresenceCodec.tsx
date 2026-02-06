// modules/voice_dares/protocol/VoiceDarePresenceCodec.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun50554: for (var _fun50554_ip = 0;;) switch (_fun50554_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun50554_ip = 46;
                    continue _fun50554
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun50554_ip = 55;
                    continue _fun50554
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun50554_ip = 343;
                    continue _fun50554
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun50554_ip = 323;
                    continue _fun50554
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun50554_ip = 283;
                    continue _fun50554
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun50554_ip = 270;
                    continue _fun50554
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
                    _fun50554_ip = 163;
                    continue _fun50554
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun50554_ip = 179;
                    continue _fun50554
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun50554_ip = 249;
                    continue _fun50554
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun50554_ip = 249;
                    continue _fun50554
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun50554_ip = 234;
                    continue _fun50554
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun50554_ip = 247;
                    continue _fun50554
                }
            case 234:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun50554_ip = 265;
                continue _fun50554;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun50554_ip = 283;
                continue _fun50554;
            case 270:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun50554_ip = 323;
                    continue _fun50554
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
                    _fun50554_ip = 330;
                    continue _fun50554
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun50555: for (var _fun50555_ip = 0;;) switch (_fun50555_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun50555_ip = 56;
                                continue _fun50555
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
                            _fun50555_ip = 67;
                            continue _fun50555;
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
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        _fun50556: for (var _fun50556_ip = 0;;) switch (_fun50556_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun50556_ip = 23;
                    continue _fun50556
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun50556_ip = 33;
                    continue _fun50556
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
                    _fun50556_ip = 70;
                    continue _fun50556
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun50556_ip = 55;
                    continue _fun50556
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0() {
        _fun50557: for (var _fun50557_ip = 0;;) switch (_fun50557_ip) {
            case 0:
                var8 = arguments[1];
                var7 = arguments[2];
                var6 = undefined;
                if (!(var8 === var6)) {
                    _fun50557_ip = 16;
                    continue _fun50557
                }
            case 12:
                var8 = '';
            case 16:
                if (!(var7 === var6)) {
                    _fun50557_ip = 24;
                    continue _fun50557
                }
            case 20:
                var7 = '';
            case 24:
                var1 = new Array(0);
                var2 = _closure1_slot4;
                var0 = arg0;
                var5 = var2.bind(var6)(var0);
                var2 = var5.bind(var6)();
                var0 = var2.done;
                var3 = 4;
                if (var0) {
                    _fun50557_ip = 120;
                    continue _fun50557
                }
            case 58:
                var10 = var2.value;
                var9 = var10.startsWith;
                var0 = _closure1_slot3;
                var0 = var9.bind(var10)(var0);
                if (var0) {
                    _fun50557_ip = 85;
                    continue _fun50557
                }
            case 81:
                var0 = null;
                return var0;
            case 85:
                var9 = var1.push;
                var0 = var10.slice;
                var0 = var0.bind(var10)(var3);
                var0 = var9.bind(var1)(var0);
                var9 = var5.bind(var6)();
                var0 = var9.done;
                var2 = var9;
                if (!var0) {
                    _fun50557_ip = 58;
                    continue _fun50557
                }
            case 120:
                var0 = var1.join;
                var2 = '';
                var1 = var0.bind(var1)(var2);
                var0 = function arg0() {
                    _fun50558: for (var _fun50558_ip = 0;;) switch (_fun50558_ip) {
                        case 0:
                            var0 = arg0;
                        case 3: // try_start_0
                            var3 = var0;
                            var2 = var3.replace;
                            var1 = /-/g;
                            var0 = '+';
                            var3 = var2.bind(var3)(var1, var0);
                            var2 = var3.replace;
                            var1 = /_/g;
                            var0 = '/';
                            var4 = var2.bind(var3)(var1, var0);
                            var0 = var4.length;
                            var5 = 4;
                            var0 = var0 % var5;
                            var1 = 0;
                            var3 = var4;
                            if (!(var1 !== var0)) {
                                _fun50558_ip = 127;
                                continue _fun50558
                            }
                        case 85:
                            var2 = '=';
                            var1 = var2.repeat;
                            var0 = var5 - var0;
                            var2 = var1.bind(var2)(var0);
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = '';
                            var3 = var1.bind(var0)(var4, var2);
                        case 127:
                            var0 = global;
                            var2 = var0.atob;
                            var1 = undefined;
                            var4 = var2.bind(var1)(var3);
                            var3 = var0.Uint8Array;
                            var2 = var3.from;
                            var1 = function(arg0) { // Environment: var1
                                var2 = arg0;
                                var1 = var2.charCodeAt;
                                var0 = 0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var2.bind(var3)(var4, var1);
                            var0 = var0.TextDecoder;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var8 = var1;
                            var0 = new var8[var0](var7);
                            var1 = var0 instanceof Object ? var0 : var1;
                            var0 = var1.decode;
                            var0 = var0.bind(var1)(var2);
                        case 203: // try_end0
                            return var0;
                        case 205: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var0 = null;
                            return var0;
                    }
                };
                var5 = var0.bind(var6)(var1);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun50557_ip = 1546;
                    continue _fun50557
                }
            case 155:
                var1 = var5;
            case 158: // try_start_0
                var5 = global;
                var9 = var5.JSON;
                var5 = var9.parse;
                var1 = var5.bind(var9)(var1);
            case 177: // try_end0
                var5 = var1;
                _fun50557_ip = 186;
                continue _fun50557;
            case 182: // catch_target0
                CatchBlockStart(arg_register = 1);
                var5 = null;
            case 186:
                var1 = global;
                var9 = var1.Array;
                var1 = var9.isArray;
                var1 = var1.bind(var9)(var5);
                var9 = var5;
                var5 = false;
                if (!var1) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 215:
                var10 = var9.length;
                var1 = 2;
                var10 = var10 < var1;
                var5 = false;
                if (var10) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 235:
                var12 = _closure1_slot8;
                var10 = 0;
                var10 = var9[var10];
                var10 = var12.bind(var6)(var10);
                var5 = false;
                if (!var10) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 258:
                var14 = _closure1_slot10;
                var13 = _closure1_slot0;
                var10 = _closure1_slot1;
                var12 = 1;
                var10 = var10[var12];
                var10 = var13.bind(var6)(var10);
                var13 = var10.VoiceDareMessageKind;
                var10 = var9[var12];
                var10 = var14.bind(var6)(var13, var10);
                var5 = false;
                if (!var10) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 306:
                var10 = var9[var12];
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var12];
                var13 = var14.bind(var6)(var13);
                var13 = var13.VoiceDareMessageKind;
                var13 = var13.OFFER;
                if (!(var13 !== var10)) {
                    _fun50557_ip = 478;
                    continue _fun50557
                }
            case 346:
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var12];
                var13 = var14.bind(var6)(var13);
                var13 = var13.VoiceDareMessageKind;
                var13 = var13.STATE;
                if (!(var13 !== var10)) {
                    _fun50557_ip = 436;
                    continue _fun50557
                }
            case 379:
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var12];
                var13 = var14.bind(var6)(var13);
                var13 = var13.VoiceDareMessageKind;
                var13 = var13.COMMAND;
                var5 = false;
                if (!(var13 === var10)) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 417:
                var14 = var9.length;
                var13 = 9;
                var5 = false;
                if (!(var13 === var14)) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 434:
                _fun50557_ip = 495;
                continue _fun50557;
            case 436:
                var14 = var9.length;
                var13 = 9;
                var13 = var14 < var13;
                var5 = false;
                if (var13) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 456:
                var14 = var9.length;
                var13 = 10;
                var13 = var14 > var13;
                var5 = false;
                if (var13) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 476:
                _fun50557_ip = 495;
                continue _fun50557;
            case 478:
                var14 = var9.length;
                var13 = 8;
                var5 = false;
                if (!(var13 === var14)) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 495:
                var13 = _closure1_slot8;
                var1 = var9[var1];
                var1 = var13.bind(var6)(var1);
                var5 = false;
                if (!var1) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 516:
                var13 = _closure1_slot8;
                var1 = 3;
                var1 = var9[var1];
                var1 = var13.bind(var6)(var1);
                var5 = false;
                if (!var1) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 540:
                var14 = _closure1_slot10;
                var13 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var12];
                var1 = var13.bind(var6)(var1);
                var13 = var1.VoiceDareKind;
                var1 = var9[var3];
                var1 = var14.bind(var6)(var13, var1);
                var5 = false;
                if (!var1) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 585:
                var14 = _closure1_slot9;
                var1 = 5;
                var13 = var9[var1];
                var13 = var14.bind(var6)(var13);
                var5 = false;
                if (!var13) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 609:
                var15 = var9[var1];
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var12];
                var13 = var14.bind(var6)(var13);
                var13 = var13.VOICE_DARE_MIN_DURATION_MIN;
                var14 = 60;
                var13 = var14 * var13;
                var13 = var15 < var13;
                var5 = false;
                if (var13) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 655:
                var13 = var9[var1];
                var15 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var12];
                var1 = var15.bind(var6)(var1);
                var1 = var1.VOICE_DARE_MAX_DURATION_MIN;
                var1 = var14 * var1;
                var1 = var13 > var1;
                var5 = false;
                if (var1) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 698:
                var14 = _closure1_slot10;
                var13 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var12];
                var1 = var13.bind(var6)(var1);
                var13 = var1.VoiceDareSpiciness;
                var1 = 6;
                var1 = var9[var1];
                var1 = var14.bind(var6)(var13, var1);
                var5 = false;
                if (!var1) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 746:
                var14 = _closure1_slot9;
                var1 = 7;
                var13 = var9[var1];
                var13 = var14.bind(var6)(var13);
                var5 = false;
                if (!var13) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 770:
                var14 = var9[var1];
                var15 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var12];
                var13 = var15.bind(var6)(var13);
                var13 = var13.VOICE_DARE_MIN_FAIL_AFTER_HOURS;
                var13 = var14 < var13;
                var5 = false;
                if (var13) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 809:
                var13 = var9[var1];
                var14 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var12];
                var1 = var14.bind(var6)(var1);
                var1 = var1.VOICE_DARE_MAX_FAIL_AFTER_HOURS;
                var1 = var13 > var1;
                var5 = false;
                if (var1) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 848:
                var11 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var12];
                var1 = var11.bind(var6)(var1);
                var1 = var1.VoiceDareMessageKind;
                var1 = var1.OFFER;
                var5 = true;
                if (!(var1 !== var10)) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 886:
                var11 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var12];
                var1 = var11.bind(var6)(var1);
                var1 = var1.VoiceDareMessageKind;
                var1 = var1.STATE;
                if (!(var1 !== var10)) {
                    _fun50557_ip = 999;
                    continue _fun50557
                }
            case 919:
                var11 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var12];
                var1 = var11.bind(var6)(var1);
                var1 = var1.VoiceDareMessageKind;
                var1 = var1.COMMAND;
                var5 = undefined;
                if (!(var1 === var10)) {
                    _fun50557_ip = 1088;
                    continue _fun50557
                }
            case 957:
                var11 = _closure1_slot10;
                var10 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var12];
                var1 = var10.bind(var6)(var1);
                var10 = var1.VoiceDareCommandType;
                var1 = 8;
                var1 = var9[var1];
                var5 = var11.bind(var6)(var10, var1);
                _fun50557_ip = 1088;
                continue _fun50557;
            case 999:
                var11 = _closure1_slot10;
                var10 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var12];
                var1 = var10.bind(var6)(var1);
                var10 = var1.VoiceDarePhase;
                var1 = 8;
                var1 = var9[var1];
                var1 = var11.bind(var6)(var10, var1);
                var10 = !var1;
                var1 = !var10;
                if (var10) {
                    _fun50557_ip = 1085;
                    continue _fun50557
                }
            case 1048:
                var11 = var9.length;
                var10 = 10;
                var10 = var10 === var11;
                if (!var10) {
                    _fun50557_ip = 1082;
                    continue _fun50557
                }
            case 1063:
                var12 = _closure1_slot9;
                var11 = 9;
                var11 = var9[var11];
                var11 = var12.bind(var6)(var11);
                var10 = !var11;
            case 1082:
                var1 = !var10;
            case 1085:
                var5 = var1;
            case 1088:
                var1 = null;
                if (!var5) {
                    _fun50557_ip = 1544;
                    continue _fun50557
                }
            case 1096:
                if (!(var8 === var6)) {
                    _fun50557_ip = 1103;
                    continue _fun50557
                }
            case 1100:
                var8 = var2;
            case 1103:
                if (!(var7 === var6)) {
                    _fun50557_ip = 1110;
                    continue _fun50557
                }
            case 1107:
                var7 = var2;
            case 1110:
                var5 = {};
                var10 = 0;
                var10 = var9[var10];
                var5.dareId = var10;
                var5.guildId = var8;
                var5.channelId = var7;
                var7 = 2;
                var7 = var9[var7];
                var5.senderId = var7;
                var7 = 3;
                var7 = var9[var7];
                var5.targetId = var7;
                var3 = var9[var3];
                var5.kind = var3;
                var5.prompt = var2;
                var2 = 5;
                var2 = var9[var2];
                var5.durationSec = var2;
                var2 = 7;
                var2 = var9[var2];
                var5.failAfterHours = var2;
                var2 = 6;
                var2 = var9[var2];
                var5.spiciness = var2;
                var7 = 1;
                var2 = var9[var7];
                var5.messageKind = var2;
                var8 = var9[var7];
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var3.bind(var6)(var2);
                var2 = var2.VoiceDareMessageKind;
                var2 = var2.OFFER;
                if (!(var2 !== var8)) {
                    _fun50557_ip = 1488;
                    continue _fun50557
                }
            case 1256:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var3.bind(var6)(var2);
                var2 = var2.VoiceDareMessageKind;
                var2 = var2.STATE;
                if (!(var2 !== var8)) {
                    _fun50557_ip = 1401;
                    continue _fun50557
                }
            case 1289:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var3.bind(var6)(var2);
                var2 = var2.VoiceDareMessageKind;
                var3 = var2.COMMAND;
                var2 = undefined;
                if (!(var3 === var8)) {
                    _fun50557_ip = 1541;
                    continue _fun50557
                }
            case 1327:
                var3 = {};
                var17 = var3;
                var16 = var5;
                var8 = copyDataProperties(var17, var16);
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.VoiceDareMessageKind;
                var10 = var8.COMMAND;
                var8 = 'messageKind';
                var3[var8] = var10;
                var8 = 8;
                var10 = var9[var8];
                var8 = 'commandType';
                var3[var8] = var10;
                var2 = var3;
                _fun50557_ip = 1541;
                continue _fun50557;
            case 1401:
                var3 = {};
                var17 = var3;
                var16 = var5;
                var8 = copyDataProperties(var17, var16);
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.VoiceDareMessageKind;
                var10 = var8.STATE;
                var8 = 'messageKind';
                var3[var8] = var10;
                var8 = 8;
                var10 = var9[var8];
                var8 = 'phase';
                var3[var8] = var10;
                var8 = 9;
                var9 = var9[var8];
                var8 = 'startedAtMs';
                var3[var8] = var9;
                var2 = var3;
                _fun50557_ip = 1541;
                continue _fun50557;
            case 1488:
                var3 = {};
                var17 = var3;
                var16 = var5;
                var5 = copyDataProperties(var17, var16);
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.VoiceDareMessageKind;
                var5 = var4.OFFER;
                var4 = 'messageKind';
                var3[var4] = var5;
                var2 = var3;
            case 1541:
                var1 = var2;
            case 1544:
                return var1;
            case 1546:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        _fun50560: for (var _fun50560_ip = 0;;) switch (_fun50560_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var0 = null;
                if (var3) {
                    _fun50560_ip = 53;
                    continue _fun50560
                }
            case 14:
                var3 = '';
                var0 = null;
                if (!(var3 !== var2)) {
                    _fun50560_ip = 53;
                    continue _fun50560
                }
            case 24:
                var4 = var2.startsWith;
                var3 = _closure1_slot3;
                var3 = var4.bind(var2)(var3);
                var1 = null;
                if (!var3) {
                    _fun50560_ip = 50;
                    continue _fun50560
                }
            case 47:
                var1 = var2;
            case 50:
                var0 = var1;
            case 53:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun50561: for (var _fun50561_ip = 0;;) switch (_fun50561_ip) {
            case 0:
                var2 = arg0;
                var1 = 'string';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun50561_ip = 38;
                    continue _fun50561
                }
            case 17:
                var1 = var2.trim;
                var1 = var1.bind(var2)();
                var2 = var1.length;
                var1 = 0;
                var0 = var2 > var1;
            case 38:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun50562: for (var _fun50562_ip = 0;;) switch (_fun50562_ip) {
            case 0:
                var3 = arg0;
                var1 = 'number';
                var0 = typeof var3;
                var0 = var1 === var0;
                if (!var0) {
                    _fun50562_ip = 36;
                    continue _fun50562
                }
            case 17:
                var1 = global;
                var2 = var1.Number;
                var1 = var2.isFinite;
                var0 = var1.bind(var2)(var3);
            case 36:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun50563: for (var _fun50563_ip = 0;;) switch (_fun50563_ip) {
            case 0:
                var3 = arg1;
                var1 = 'number';
                var0 = typeof var3;
                var0 = var1 === var0;
                if (!var0) {
                    _fun50563_ip = 48;
                    continue _fun50563
                }
            case 17:
                var1 = global;
                var4 = var1.Object;
                var2 = var4.values;
                var1 = arg0;
                var2 = var2.bind(var4)(var1);
                var1 = var2.includes;
                var0 = var1.bind(var2)(var3);
            case 48:
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot2 = var3;
    var3 = 'vd1:';
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_dares/protocol/VoiceDarePresenceCodec.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 'voice_dares';
    var2.VOICE_DARE_METADATA_NAMESPACE = var3;
    var3 = function arg0() {
        _fun50564: for (var _fun50564_ip = 0;;) switch (_fun50564_ip) {
            case 0:
                var6 = arg0;
                var0 = var6.senderId;
                var3 = new Array(6);
                var3[0] = var0;
                var0 = var6.targetId;
                var3[1] = var0;
                var0 = var6.kind;
                var3[2] = var0;
                var0 = var6.durationSec;
                var3[3] = var0;
                var0 = var6.spiciness;
                var3[4] = var0;
                var0 = var6.failAfterHours;
                var3[5] = var0;
                var1 = var6.messageKind;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 1;
                var0 = var0[var7];
                var4 = undefined;
                var0 = var5.bind(var4)(var0);
                var0 = var0.VoiceDareMessageKind;
                var0 = var0.OFFER;
                if (!(var0 !== var1)) {
                    _fun50564_ip = 384;
                    continue _fun50564
                }
            case 116:
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var5.bind(var4)(var0);
                var0 = var0.VoiceDareMessageKind;
                var0 = var0.STATE;
                if (!(var0 !== var1)) {
                    _fun50564_ip = 273;
                    continue _fun50564
                }
            case 152:
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var5.bind(var4)(var0);
                var0 = var0.VoiceDareMessageKind;
                var0 = var0.COMMAND;
                var5 = undefined;
                if (!(var0 === var1)) {
                    _fun50564_ip = 447;
                    continue _fun50564
                }
            case 190:
                var1 = var6.dareId;
                var0 = new Array(3);
                var0[0] = var1;
                var8 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var8.bind(var4)(var1);
                var1 = var1.VoiceDareMessageKind;
                var1 = var1.COMMAND;
                var0[1] = var1;
                var15 = 2;
                var17 = var0;
                var16 = var3;
                var1 = arraySpread(var17, var16, var15);
                var8 = var6.commandType;
                var0[var1] = var8;
                var1 = var1 + var7;
                var5 = var0;
                _fun50564_ip = 447;
                continue _fun50564;
            case 273:
                var1 = var6.dareId;
                var0 = new Array(3);
                var0[0] = var1;
                var8 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var8.bind(var4)(var1);
                var1 = var1.VoiceDareMessageKind;
                var1 = var1.STATE;
                var0[1] = var1;
                var15 = 2;
                var17 = var0;
                var16 = var3;
                var1 = arraySpread(var17, var16, var15);
                var8 = var6.phase;
                var0[var1] = var8;
                var1 = var1 + var7;
                var8 = var6.startedAtMs;
                var1 = null;
                var5 = var0;
                if (!(var1 != var8)) {
                    _fun50564_ip = 447;
                    continue _fun50564
                }
            case 363:
                var8 = var0.push;
                var1 = var6.startedAtMs;
                var1 = var8.bind(var0)(var1);
                var5 = var0;
                _fun50564_ip = 447;
                continue _fun50564;
            case 384:
                var1 = var6.dareId;
                var0 = new Array(2);
                var0[0] = var1;
                var8 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var8.bind(var4)(var1);
                var1 = var1.VoiceDareMessageKind;
                var1 = var1.OFFER;
                var0[1] = var1;
                var15 = 2;
                var17 = var0;
                var16 = var3;
                var1 = arraySpread(var17, var16, var15);
                var5 = var0;
            case 447:
                var1 = global;
                var3 = var1.JSON;
                var0 = var3.stringify;
                var3 = var0.bind(var3)(var5);
                var0 = function arg0() {
                    _fun50565: for (var _fun50565_ip = 0;;) switch (_fun50565_ip) {
                        case 0:
                            var0 = global;
                            var1 = var0.TextEncoder;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var12 = var2;
                            var1 = new var12[var1](var11);
                            var3 = var1 instanceof Object ? var1 : var2;
                            var2 = var3.encode;
                            var1 = arg0;
                            var3 = var2.bind(var3)(var1);
                            var1 = _closure1_slot4;
                            var2 = undefined;
                            var7 = var1.bind(var2)(var3);
                            var1 = var7.bind(var2)();
                            var4 = var1.done;
                            var3 = '';
                            var6 = var1;
                            var5 = var3;
                            var1 = var5;
                            if (var4) {
                                _fun50565_ip = 125;
                                continue _fun50565
                            }
                        case 81:
                            var9 = var6.value;
                            var8 = var0.String;
                            var4 = var8.fromCharCode;
                            var4 = var4.bind(var8)(var9);
                            var5 = var5 + var4;
                            var9 = var7.bind(var2)();
                            var4 = var9.done;
                            var6 = var9;
                            var1 = var5;
                            if (!var4) {
                                _fun50565_ip = 81;
                                continue _fun50565
                            }
                        case 125:
                            var0 = var0.btoa;
                            var4 = var0.bind(var2)(var1);
                            var2 = var4.replace;
                            var1 = /\+/g;
                            var0 = '-';
                            var4 = var2.bind(var4)(var1, var0);
                            var2 = var4.replace;
                            var1 = /\\/ / g;
                            var0 = '_';
                            var2 = var2.bind(var4)(var1, var0);
                            var1 = var2.replace;
                            var0 = /=+$/;
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                var4 = var0.bind(var4)(var3);
                var0 = {};
                var5 = var6.prompt;
                var3 = '';
                if (!(var3 !== var5)) {
                    _fun50564_ip = 506;
                    continue _fun50564
                }
            case 494:
                var5 = var6.prompt;
                var0.name = var5;
            case 506:
                var8 = var6.guildId;
                var5 = null;
                var9 = var5 != var8;
                var11 = var3;
                if (!var9) {
                    _fun50564_ip = 526;
                    continue _fun50564
                }
            case 523:
                var11 = var8;
            case 526:
                var6 = var6.channelId;
                var8 = var5 != var6;
                var10 = var3;
                if (!var8) {
                    _fun50564_ip = 544;
                    continue _fun50564
                }
            case 541:
                var10 = var6;
            case 544:
                var6 = var1.HermesInternal;
                var9 = var6.concat;
                var17 = 'vd:';
                var15 = ':';
                var18 = var3;
                var16 = var11;
                var14 = var10;
                var6 = var18[var9](var17, var16, var15, var14, var13);
                var0.partyId = var6;
                var6 = var4.length;
                var11 = 124;
                if (!(!(var6 <= var11))) {
                    _fun50564_ip = 783;
                    continue _fun50564
                }
            case 599:
                var6 = new Array(0);
                var9 = var4.length;
                var8 = 0;
                var9 = var9 > var8;
                var10 = 0;
                if (!var9) {
                    _fun50564_ip = 643;
                    continue _fun50564
                }
            case 619:
                var12 = var6.push;
                var9 = var4.slice;
                var9 = var9.bind(var4)(var8, var11);
                var9 = var12.bind(var6)(var9);
                var10 = var11;
            case 643:
                var9 = var4.length;
                if (!(var10 < var9)) {
                    _fun50564_ip = 689;
                    continue _fun50564
                }
            case 652:
                var13 = var6.push;
                var9 = var4.slice;
                var12 = var10 + var11;
                var9 = var9.bind(var4)(var10, var12);
                var9 = var13.bind(var6)(var9);
                var9 = var4.length;
                var10 = var12;
                if (var10 < var9) {
                    _fun50564_ip = 652;
                    continue _fun50564
                }
            case 689:
                var10 = var6.length;
                var9 = 2;
                if (!(!(var10 > var9))) {
                    _fun50564_ip = 781;
                    continue _fun50564
                }
            case 701:
                var9 = var6[var8];
                if (!(var5 != var9)) {
                    _fun50564_ip = 740;
                    continue _fun50564
                }
            case 709:
                var10 = _closure1_slot3;
                var9 = var6[var8];
                var8 = var1.HermesInternal;
                var8 = var8.concat;
                var8 = var8.bind(var3)(var10, var9);
                var0.state = var8;
            case 740:
                var8 = var6[var7];
                if (!(var5 != var8)) {
                    _fun50564_ip = 810;
                    continue _fun50564
                }
            case 748:
                var8 = _closure1_slot3;
                var7 = var6[var7];
                var6 = var1.HermesInternal;
                var6 = var6.concat;
                var6 = var6.bind(var3)(var8, var7);
                var0.details = var6;
                _fun50564_ip = 810;
                continue _fun50564;
            case 781:
                return var5;
            case 783:
                var2 = _closure1_slot3;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var3)(var2, var4);
                var0.state = var1;
            case 810:
                return var0;
        }
    };
    var2.encodeVoiceDareToFields = var3;
    var1 = function arg0() {
        _fun50566: for (var _fun50566_ip = 0;;) switch (_fun50566_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun50566_ip = 443;
                    continue _fun50566
                }
            case 12:
                var3 = var4.type;
                var2 = _closure1_slot2;
                var2 = var2.CUSTOM_STATUS;
                if (!(var3 === var2)) {
                    _fun50566_ip = 443;
                    continue _fun50566
                }
            case 37:
                var3 = var4.party;
                var5 = var0 == var3;
                var7 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun50566_ip = 59;
                    continue _fun50566
                }
            case 54:
                var2 = var3.id;
            case 59:
                var2 = var0 != var2;
                var6 = '';
                var5 = var6;
                var3 = var5;
                if (!var2) {
                    _fun50566_ip = 221;
                    continue _fun50566
                }
            case 79:
                var2 = var4.party;
                var10 = var2.id;
                var8 = var10.startsWith;
                var2 = 'vd:';
                var8 = var8.bind(var10)(var2);
                var2 = null;
                if (!var8) {
                    _fun50566_ip = 198;
                    continue _fun50566
                }
            case 112:
                var9 = var10.slice;
                var8 = 3;
                var12 = var9.bind(var10)(var8);
                var9 = var12.indexOf;
                var8 = ':';
                var13 = var9.bind(var12)(var8);
                var9 = -1;
                var8 = null;
                if (!(var9 !== var13)) {
                    _fun50566_ip = 195;
                    continue _fun50566
                }
            case 152:
                var9 = {};
                var11 = var12.slice;
                var10 = 0;
                var10 = var11.bind(var12)(var10, var13);
                var9.guildId = var10;
                var11 = var12.slice;
                var10 = 1;
                var10 = var13 + var10;
                var10 = var11.bind(var12)(var10);
                var9.channelId = var10;
                var8 = var9;
            case 195:
                var2 = var8;
            case 198:
                var8 = var0 != var2;
                var5 = var6;
                var3 = var5;
                if (!var8) {
                    _fun50566_ip = 221;
                    continue _fun50566
                }
            case 211:
                var5 = var2.guildId;
                var3 = var2.channelId;
            case 221:
                var2 = new Array(0);
                var13 = var4.state;
                var8 = var0 == var13;
                var9 = null;
                if (var8) {
                    _fun50566_ip = 303;
                    continue _fun50566
                }
            case 239:
                var9 = null;
                if (!(var6 !== var13)) {
                    _fun50566_ip = 303;
                    continue _fun50566
                }
            case 245:
                var10 = var13.indexOf;
                var8 = '\u2063';
                var14 = var10.bind(var13)(var8);
                var10 = -1;
                var8 = null;
                if (!(var10 !== var14)) {
                    _fun50566_ip = 300;
                    continue _fun50566
                }
            case 274:
                var11 = _closure1_slot7;
                var12 = var13.slice;
                var10 = 1;
                var10 = var14 + var10;
                var10 = var12.bind(var13)(var10);
                var8 = var11.bind(var7)(var10);
            case 300:
                var9 = var8;
            case 303:
                if (!(var0 != var9)) {
                    _fun50566_ip = 317;
                    continue _fun50566
                }
            case 307:
                var8 = var2.push;
                var8 = var8.bind(var2)(var9);
            case 317:
                var9 = _closure1_slot7;
                var8 = var4.details;
                var9 = var9.bind(var7)(var8);
                if (!(var0 != var9)) {
                    _fun50566_ip = 346;
                    continue _fun50566
                }
            case 336:
                var8 = var2.push;
                var8 = var8.bind(var2)(var9);
            case 346:
                var9 = var2.length;
                var8 = 0;
                if (!(var8 !== var9)) {
                    _fun50566_ip = 441;
                    continue _fun50566
                }
            case 357:
                var1 = _closure1_slot6;
                var5 = var1.bind(var7)(var2, var5, var3);
                var2 = var0 == var5;
                var1 = null;
                if (var2) {
                    _fun50566_ip = 439;
                    continue _fun50566
                }
            case 377:
                var3 = var4.name;
                var2 = var5;
                if (!(var6 !== var3)) {
                    _fun50566_ip = 436;
                    continue _fun50566
                }
            case 389:
                var6 = var4.name;
                var3 = 'Custom Status';
                var2 = var5;
                if (!(var3 !== var6)) {
                    _fun50566_ip = 436;
                    continue _fun50566
                }
            case 407:
                var3 = {};
                var17 = var3;
                var16 = var5;
                var5 = copyDataProperties(var17, var16);
                var5 = var4.name;
                var4 = 'prompt';
                var3[var4] = var5;
                var2 = var3;
            case 436:
                var1 = var2;
            case 439:
                return var1;
            case 441:
                return var0;
            case 443:
                return var0;
        }
    };
    var2.extractVoiceDarePresenceFromActivity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5671, 2]);