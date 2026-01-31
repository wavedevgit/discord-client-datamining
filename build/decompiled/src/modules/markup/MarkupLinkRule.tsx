// modules/markup/MarkupLinkRule.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var6
        _fun43979: for (var _fun43979_ip = 0;;) switch (_fun43979_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun43979_ip = 46;
                    continue _fun43979
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun43979_ip = 55;
                    continue _fun43979
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun43979_ip = 343;
                    continue _fun43979
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun43979_ip = 323;
                    continue _fun43979
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun43979_ip = 283;
                    continue _fun43979
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun43979_ip = 270;
                    continue _fun43979
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
                    _fun43979_ip = 163;
                    continue _fun43979
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun43979_ip = 179;
                    continue _fun43979
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun43979_ip = 249;
                    continue _fun43979
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun43979_ip = 249;
                    continue _fun43979
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun43979_ip = 234;
                    continue _fun43979
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun43979_ip = 247;
                    continue _fun43979
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun43979_ip = 265;
                continue _fun43979;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun43979_ip = 283;
                continue _fun43979;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun43979_ip = 323;
                    continue _fun43979
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
                    _fun43979_ip = 330;
                    continue _fun43979
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun43980: for (var _fun43980_ip = 0;;) switch (_fun43980_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun43980_ip = 56;
                                continue _fun43980
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
                            _fun43980_ip = 67;
                            continue _fun43980;
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
    var _closure1_slot11 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var6
        _fun43981: for (var _fun43981_ip = 0;;) switch (_fun43981_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun43981_ip = 23;
                    continue _fun43981
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun43981_ip = 33;
                    continue _fun43981
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
                    _fun43981_ip = 70;
                    continue _fun43981
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun43981_ip = 55;
                    continue _fun43981
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: sanitizeWithCache, environment: var6
        _fun43982: for (var _fun43982_ip = 0;;) switch (_fun43982_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot4;
                var0 = var1.get;
                var0 = var0.bind(var1)(var4);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun43982_ip = 108;
                    continue _fun43982
                }
            case 26:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 2;
                var1 = var8[var3];
                var5 = undefined;
                var6 = var7.bind(var5)(var1);
                var1 = var6.sanitizeWhitespace;
                var6 = var1.bind(var6)(var4);
                var1 = {};
                var1.whitespaceSanitized = var6;
                var3 = var8[var3];
                var5 = var7.bind(var5)(var3);
                var3 = var5.sanitizeUnicodeConfusables;
                var3 = var3.bind(var5)(var6);
                var1.fullySanitized = var3;
                var3 = _closure1_slot4;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                return var1;
            case 108:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: validateContentTypes, environment: var6
        _fun43983: for (var _fun43983_ip = 0;;) switch (_fun43983_ip) {
            case 0:
                var2 = arg0;
                var11 = arg1;
                var10 = arguments[2];
                var9 = undefined;
                if (!(var10 === var9)) {
                    _fun43983_ip = 19;
                    continue _fun43983
                }
            case 15:
                var10 = new Array(0);
            case 19:
                var8 = global;
                var1 = var8.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var2);
                var0 = var2;
                if (var1) {
                    _fun43983_ip = 54;
                    continue _fun43983
                }
            case 43:
                var1 = new Array(1);
                var1[0] = var2;
                var0 = var1;
            case 54:
                var1 = _closure1_slot11;
                var6 = var1.bind(var9)(var0);
                var3 = var6.bind(var9)();
                var2 = var3.done;
                var1 = null;
                var4 = 3;
                if (var2) {
                    _fun43983_ip = 272;
                    continue _fun43983
                }
            case 86:
                var2 = var3.value;
                if (!(var9 !== var2)) {
                    _fun43983_ip = 270;
                    continue _fun43983
                }
            case 98:
                var13 = var11.includes;
                var12 = var2.type;
                var12 = var13.bind(var11)(var12);
                if (!var12) {
                    _fun43983_ip = 270;
                    continue _fun43983
                }
            case 119:
                var13 = var2.type;
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var4];
                var12 = var14.bind(var9)(var12);
                var12 = var12.AST_KEY;
                var12 = var12.INLINE_CODE;
                if (!(var13 === var12)) {
                    _fun43983_ip = 203;
                    continue _fun43983
                }
            case 157:
                var14 = new Array(0);
                var17 = var14;
                var16 = var11;
                var15 = 0;
                var15 = arraySpread(var17, var16, var15);
                var17 = var14;
                var16 = var10;
                var12 = arraySpread(var17, var16, var15);
                var13 = _closure1_slot14;
                var12 = var2.validationChildContent;
                var12 = var13.bind(var9)(var12, var14);
                if (!(var1 != var12)) {
                    _fun43983_ip = 268;
                    continue _fun43983
                }
            case 203:
                var14 = var8.Array;
                var13 = var14.isArray;
                var12 = var2.content;
                var12 = var13.bind(var14)(var12);
                if (!var12) {
                    _fun43983_ip = 246;
                    continue _fun43983
                }
            case 227:
                var12 = _closure1_slot14;
                var2 = var2.content;
                var2 = var12.bind(var9)(var2, var11);
                if (!(var1 != var2)) {
                    _fun43983_ip = 266;
                    continue _fun43983
                }
            case 246:
                var12 = var6.bind(var9)();
                var2 = var12.done;
                var3 = var12;
                if (var2) {
                    _fun43983_ip = 272;
                    continue _fun43983
                }
            case 261:
                _fun43983_ip = 86;
                continue _fun43983;
            case 266:
                return var1;
            case 268:
                return var1;
            case 270:
                return var1;
            case 272:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: getRawText, environment: var6
        _fun43984: for (var _fun43984_ip = 0;;) switch (_fun43984_ip) {
            case 0:
                var1 = _closure1_slot11;
                var12 = undefined;
                var0 = arg0;
                var11 = var1.bind(var12)(var0);
                var2 = var11.bind(var12)();
                var1 = var2.done;
                var0 = '';
                var10 = '\n';
                var9 = '<timestamp>';
                var8 = global;
                var7 = '<';
                var6 = 'Content>';
                var5 = 4;
                var4 = 3;
                var3 = var2;
                var2 = var0;
                var0 = var2;
                if (var1) {
                    _fun43984_ip = 768;
                    continue _fun43984
                }
            case 73:
                var1 = var3.value;
                var15 = var1.type;
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.TEXT;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 735;
                    continue _fun43984
                }
            case 119:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.INLINE_CODE;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 735;
                    continue _fun43984
                }
            case 155:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.CUSTOM_EMOJI;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 724;
                    continue _fun43984
                }
            case 191:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.EMOJI;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 712;
                    continue _fun43984
                }
            case 227:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.LINE_BREAK;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 706;
                    continue _fun43984
                }
            case 263:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.STRONG;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 686;
                    continue _fun43984
                }
            case 299:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.ITALICS;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 686;
                    continue _fun43984
                }
            case 335:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.UNDERLINE;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 686;
                    continue _fun43984
                }
            case 371:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.STRIKETHROUGH;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 686;
                    continue _fun43984
                }
            case 407:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.SPOILER;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 686;
                    continue _fun43984
                }
            case 443:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.TIMESTAMP;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 680;
                    continue _fun43984
                }
            case 479:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.BLOCK_QUOTE;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 652;
                    continue _fun43984
                }
            case 515:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.LIST;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 652;
                    continue _fun43984
                }
            case 548:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.HEADING;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 652;
                    continue _fun43984
                }
            case 581:
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var4];
                var14 = var16.bind(var12)(var14);
                var14 = var14.AST_KEY;
                var14 = var14.SUBTEXT;
                if (!(var14 !== var15)) {
                    _fun43984_ip = 652;
                    continue _fun43984
                }
            case 614:
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var5];
                var16 = var15.bind(var12)(var14);
                var15 = var16.assertNever;
                var14 = var1.type;
                var14 = var15.bind(var16)(var14);
                var14 = var2;
                _fun43984_ip = 744;
                continue _fun43984;
            case 652:
                var16 = var1.type;
                var15 = var8.HermesInternal;
                var15 = var15.concat;
                var15 = var15.bind(var7)(var16, var6);
                var14 = var2 + var15;
                _fun43984_ip = 744;
                continue _fun43984;
            case 680:
                var14 = var2 + var9;
                _fun43984_ip = 744;
                continue _fun43984;
            case 686:
                var16 = _closure1_slot15;
                var15 = var1.content;
                var15 = var16.bind(var12)(var15);
                var14 = var2 + var15;
                _fun43984_ip = 744;
                continue _fun43984;
            case 706:
                var14 = var2 + var10;
                _fun43984_ip = 744;
                continue _fun43984;
            case 712:
                var15 = var1.surrogate;
                var14 = var2 + var15;
                _fun43984_ip = 744;
                continue _fun43984;
            case 724:
                var15 = var1.name;
                var14 = var2 + var15;
                _fun43984_ip = 744;
                continue _fun43984;
            case 735:
                var1 = var1.content;
                var14 = var2 + var1;
            case 744:
                var15 = var11.bind(var12)();
                var1 = var15.done;
                var2 = var14;
                var3 = var15;
                var0 = var2;
                if (!var1) {
                    _fun43984_ip = 73;
                    continue _fun43984
                }
            case 768:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var3 = function(arg0) { // Original name: isSuspiciousUrl, environment: var6
        _fun43985: for (var _fun43985_ip = 0;;) switch (_fun43985_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var5 = undefined;
                var1 = var1.bind(var5)(var0);
                var0 = var1.isSuspiciousCodedLink;
                var0 = var0.bind(var1)(var3);
                if (var0) {
                    _fun43985_ip = 242;
                    continue _fun43985
                }
            case 45:
                var0 = _closure1_slot13;
                var0 = var0.bind(var5)(var3);
                var0 = var0.whitespaceSanitized;
                if (!(var0 === var3)) {
                    _fun43985_ip = 238;
                    continue _fun43985
                }
            case 67:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 6;
                var0 = var0[var6];
                var1 = var1.bind(var5)(var0);
                var0 = var1.toURLSafe;
                var0 = var0.bind(var1)(var3);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun43985_ip = 234;
                    continue _fun43985
                }
            case 107:
                var4 = var0.protocol;
                var1 = 'http:';
                if (!(var1 !== var4)) {
                    _fun43985_ip = 135;
                    continue _fun43985
                }
            case 121:
                var1 = var0.protocol;
                var0 = 'https:';
                if (!(var0 === var1)) {
                    _fun43985_ip = 230;
                    continue _fun43985
                }
            case 135:
                var1 = var3.split;
                var0 = '/';
                var4 = var1.bind(var3)(var0);
                var1 = var4.length;
                var0 = 3;
                var0 = var1 < var0;
                if (var0) {
                    _fun43985_ip = 228;
                    continue _fun43985
                }
            case 164:
                var1 = 1;
                var3 = var4[var1];
                var1 = '';
                var1 = var1 !== var3;
                if (var1) {
                    _fun43985_ip = 225;
                    continue _fun43985
                }
            case 182:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var6 = var3.bind(var5)(var2);
                var5 = var6.safeDecodeURIComponent;
                var2 = 2;
                var3 = var4[var2];
                var3 = var5.bind(var6)(var3);
                var2 = var4[var2];
                var1 = var3 !== var2;
            case 225:
                var0 = var1;
            case 228:
                return var0;
            case 230:
                var0 = false;
                return var0;
            case 234:
                var0 = true;
                return var0;
            case 238:
                var0 = true;
                return var0;
            case 242:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot16 = var3;
    var1 = function(arg0) { // Original name: punycodeLink, environment: var6
        _fun43986: for (var _fun43986_ip = 0;;) switch (_fun43986_ip) {
            case 0:
                var0 = arg0;
                var6 = undefined;
                var8 = undefined;
                var4 = undefined;
                var5 = undefined;
            case 11: // try_start_0
                var2 = _closure1_slot16;
                var1 = var0;
                var2 = var2.bind(var6)(var1);
                var1 = global;
                if (var2) {
                    _fun43986_ip = 383;
                    continue _fun43986
                }
            case 34:
                var9 = var1.URL;
                var12 = var0;
                var7 = var9.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var9
                    }
                });
                var13 = var7;
                var2 = new var13[var9](var12, var11);
                var2 = var2 instanceof Object ? var2 : var7;
                var4 = var2;
                var2 = var2.protocol;
                var8 = var2;
                var7 = null;
                var9 = var7 != var2;
                var2 = '';
                var11 = var2;
                if (!var9) {
                    _fun43986_ip = 94;
                    continue _fun43986
                }
            case 91:
                var11 = var8;
            case 94:
                var5 = var11;
                var10 = _closure1_slot5;
                var9 = var10.includes;
                var8 = var11.toLowerCase;
                var8 = var8.bind(var11)();
                var8 = var9.bind(var10)(var8);
                if (var8) {
                    _fun43986_ip = 165;
                    continue _fun43986
                }
            case 124:
                var10 = var1.Error;
                var9 = var5;
                var8 = 'Provided protocol is not allowed: ';
                var12 = var8 + var9;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var13 = var9;
                var8 = new var13[var10](var12, var11);
                var8 = var8 instanceof Object ? var8 : var9;
                throw var8;
            case 165:
                var9 = var5;
                var8 = 'http:';
                if (!(var8 !== var9)) {
                    _fun43986_ip = 187;
                    continue _fun43986
                }
            case 176:
                var8 = var5;
                var5 = 'https:';
                if (!(var5 === var8)) {
                    _fun43986_ip = 254;
                    continue _fun43986
                }
            case 187:
                var5 = var4;
                var5 = var5.hostname;
                if (!(var7 != var5)) {
                    _fun43986_ip = 220;
                    continue _fun43986
                }
            case 200:
                var5 = var4;
                var5 = var5.hostname;
                var7 = var5.length;
                var5 = 0;
                if (!(var5 === var7)) {
                    _fun43986_ip = 254;
                    continue _fun43986
                }
            case 220:
                var8 = var1.Error;
                var5 = var8.prototype;
                var7 = Object.create(var5, {
                    constructor: {
                        value: var8
                    }
                });
                var12 = 'no hostname';
                var13 = var7;
                var5 = new var13[var8](var12, var11);
                var5 = var5 instanceof Object ? var5 : var7;
                throw var5;
            case 254:
                var5 = var4;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 7;
                var4 = var7[var4];
                var9 = var8.bind(var6)(var4);
                var8 = var9.toASCII;
                var10 = var5.hostname;
                var4 = var10.toLowerCase;
                var4 = var4.bind(var10)();
                var4 = var8.bind(var9)(var4);
                var5.hostname = var4;
                var4 = _closure1_slot0;
                var3 = 2;
                var8 = var7[var3];
                var9 = var4.bind(var6)(var8);
                var8 = var9.safelyMakeUrlHumanReadable;
                var8 = var8.bind(var9)(var5);
                var5.username = var2;
                var5.password = var2;
                var2 = {};
                var2.target = var8;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.safelyMakeUrlHumanReadable;
                var3 = var3.bind(var4)(var5);
                var2.displayTarget = var3;
            case 381: // try_end0
                return var2;
            case 383: // try_start_1
                var2 = var1.Error;
                var3 = var1.JSON;
                var1 = var3.stringify;
                var1 = var1.bind(var3)(var0);
                var0 = 'Rejected due to suspicious characters in URL: ';
                var12 = var0 + var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = var1;
                var0 = new var13[var2](var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 438: // try_end1 // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 0);
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot17 = var1;
    var0 = global;
    var9 = var0.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var9)(var2, var0, var4);
    var13 = 0;
    var4 = var8[var13];
    var0 = undefined;
    var4 = var10.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var8[var12];
    var9 = var10.bind(var0)(var4);
    var4 = {};
    var5 = 50;
    var4.max = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var17 = var5;
    var16 = var4;
    var4 = new var17[var9](var16, var15);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot4 = var4;
    var4 = ['http:', 'https:', 'discord:', 'tel:', 'sms:', 'mailto:'];
    var _closure1_slot5 = var4;
    var9 = 3;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var5 = var5.TEXT;
    var11 = new Array(9);
    var11[0] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var5 = var5.UNDERLINE;
    var11[1] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var5 = var5.STRONG;
    var11[2] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var5 = var5.ITALICS;
    var11[3] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var5 = var5.STRIKETHROUGH;
    var11[4] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var5 = var5.INLINE_CODE;
    var11[5] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var5 = var5.SPOILER;
    var11[6] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var5 = var5.LINE_BREAK;
    var11[7] = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var5 = var5.TIMESTAMP;
    var11[8] = var5;
    var _closure1_slot6 = var11;
    var5 = new Array(2);
    var16 = var5;
    var15 = var11;
    var14 = 0;
    var11 = arraySpread(var16, var15, var14);
    var13 = var8[var9];
    var13 = var7.bind(var0)(var13);
    var13 = var13.AST_KEY;
    var13 = var13.EMOJI;
    var5[var11] = var13;
    var12 = var11 + var12;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.CUSTOM_EMOJI;
    var5[var12] = var11;
    var _closure1_slot7 = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var11 = var5.LIST;
    var5 = new Array(4);
    var5[0] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.HEADING;
    var5[1] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.BLOCK_QUOTE;
    var5[2] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.SUBTEXT;
    var5[3] = var11;
    var _closure1_slot8 = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var11 = var5.TEXT;
    var5 = new Array(1);
    var5[0] = var11;
    var _closure1_slot9 = var5;
    var5 = var8[var9];
    var5 = var7.bind(var0)(var5);
    var5 = var5.AST_KEY;
    var11 = var5.UNDERLINE;
    var5 = new Array(14);
    var5[0] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.STRONG;
    var5[1] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.ITALICS;
    var5[2] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.STRIKETHROUGH;
    var5[3] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.INLINE_CODE;
    var5[4] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.SPOILER;
    var5[5] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.LINE_BREAK;
    var5[6] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.TIMESTAMP;
    var5[7] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.EMOJI;
    var5[8] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.CUSTOM_EMOJI;
    var5[9] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.LIST;
    var5[10] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.HEADING;
    var5[11] = var11;
    var11 = var8[var9];
    var11 = var7.bind(var0)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.BLOCK_QUOTE;
    var5[12] = var11;
    var9 = var8[var9];
    var9 = var7.bind(var0)(var9);
    var9 = var9.AST_KEY;
    var9 = var9.SUBTEXT;
    var5[13] = var9;
    var _closure1_slot10 = var5;
    var5 = {};
    var9 = 8;
    var9 = var8[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.defaultRules;
    var15 = var9.link;
    var16 = var5;
    var9 = copyDataProperties(var16, var15);
    var10 = function(arg0, arg1, arg2) { // Original name: match, environment: var6
        _fun43987: for (var _fun43987_ip = 0;;) switch (_fun43987_ip) {
            case 0:
                var5 = arg1;
                var1 = var5.allowLinks;
                var0 = null;
                if (!var1) {
                    _fun43987_ip = 70;
                    continue _fun43987
                }
            case 14:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.defaultRules;
                var4 = var1.link;
                var3 = var4.match;
                var2 = arg0;
                var1 = arg2;
                var0 = var3.bind(var4)(var2, var5, var1);
            case 70:
                return var0;
        }
    };
    var9 = 'match';
    var5[var9] = var10;
    var9 = function(arg0, arg1, arg2) { // Original name: parse, environment: var6
        _fun43988: for (var _fun43988_ip = 0;;) switch (_fun43988_ip) {
            case 0:
                var8 = arg1;
                var12 = arg2;
                var4 = _closure1_slot3;
                var1 = undefined;
                var3 = arg0;
                var2 = 4;
                var2 = var4.bind(var1)(var3, var2);
                var10 = 0;
                var3 = var2[var10];
                var _closure2_slot0 = var3;
                var3 = 1;
                var14 = var2[var3];
                var3 = 2;
                var20 = var2[var3];
                var19 = 3;
                var15 = var2[var19];
                var0 = function() { // Original name: renderIndividualParts, environment: var0
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.AST_KEY;
                    var1 = var1.TEXT;
                    var0.type = var1;
                    var1 = _closure2_slot0;
                    var0.content = var1;
                    return var0;
                };
                var2 = _closure1_slot16;
                var2 = var2.bind(var1)(var20);
                if (var2) {
                    _fun43988_ip = 631;
                    continue _fun43988
                }
            case 80:
                var6 = _closure1_slot13;
                var4 = var6.bind(var1)(var20);
                var3 = var6.bind(var1)(var14);
                var13 = null;
                var7 = var13 != var15;
                var2 = '';
                if (!var7) {
                    _fun43988_ip = 110;
                    continue _fun43988
                }
            case 107:
                var2 = var15;
            case 110:
                var2 = var6.bind(var1)(var2);
                var9 = var4.whitespaceSanitized;
                var11 = var3.fullySanitized;
                var7 = var2.fullySanitized;
                var4 = var11.trim;
                var4 = var4.bind(var11)();
                var6 = var9.trim;
                var6 = var6.bind(var9)();
                var6 = var6.length;
                if (!(var10 !== var6)) {
                    _fun43988_ip = 625;
                    continue _fun43988
                }
            case 165:
                var4 = var4.length;
                if (!(var10 !== var4)) {
                    _fun43988_ip = 625;
                    continue _fun43988
                }
            case 177:
                var17 = _closure1_slot17;
                var16 = _closure1_slot1;
                var6 = _closure1_slot2;
                var9 = 8;
                var4 = var6[var9];
                var18 = var16.bind(var1)(var4);
                var4 = var18.unescapeUrl;
                var4 = var4.bind(var18)(var20);
                var4 = var17.bind(var1)(var4);
                var17 = 5;
                var6 = var6[var17];
                var6 = var16.bind(var1)(var6);
                var6 = var6.bind(var1)(var14);
                var6 = var6.length;
                var6 = var6 > var10;
                if (var6) {
                    _fun43988_ip = 277;
                    continue _fun43988
                }
            case 246:
                var16 = _closure1_slot1;
                var14 = _closure1_slot2;
                var14 = var14[var17];
                var14 = var16.bind(var1)(var14);
                var14 = var14.bind(var1)(var15);
                var14 = var14.length;
                var6 = var14 > var10;
            case 277:
                if (!(var13 != var4)) {
                    _fun43988_ip = 619;
                    continue _fun43988
                }
            case 284:
                if (var6) {
                    _fun43988_ip = 619;
                    continue _fun43988
                }
            case 290:
                var6 = {};
                var23 = var6;
                var22 = var12;
                var14 = copyDataProperties(var23, var22);
                var15 = false;
                var14 = 'allowEscape';
                var6[var14] = var15;
                var15 = true;
                var14 = 'parseInlineCodeChildContent';
                var6[var14] = var15;
                var12 = var12.allowEmojiLinks;
                if (var12) {
                    _fun43988_ip = 341;
                    continue _fun43988
                }
            case 335:
                var12 = _closure1_slot6;
                _fun43988_ip = 345;
                continue _fun43988;
            case 341:
                var12 = _closure1_slot7;
            case 345:
                var17 = new Array(0);
                var23 = var17;
                var22 = var12;
                var21 = 0;
                var21 = arraySpread(var23, var22, var21);
                var22 = _closure1_slot8;
                var23 = var17;
                var14 = arraySpread(var23, var22, var21);
                var22 = _closure1_slot9;
                var15 = new Array(0);
                var23 = var15;
                var21 = 0;
                var21 = arraySpread(var23, var22, var21);
                var22 = _closure1_slot10;
                var23 = var15;
                var14 = arraySpread(var23, var22, var21);
                var14 = _closure1_slot14;
                var16 = var8.bind(var1)(var11, var6);
                var18 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var19];
                var11 = var18.bind(var1)(var11);
                var11 = var11.AST_KEY;
                var18 = var11.EMOJI;
                var11 = new Array(1);
                var11[0] = var18;
                var11 = var14.bind(var1)(var16, var17, var11);
                var7 = var8.bind(var1)(var7, var6);
                var7 = var14.bind(var1)(var7, var15);
                if (!(var13 != var11)) {
                    _fun43988_ip = 613;
                    continue _fun43988
                }
            case 473:
                if (!(var13 != var7)) {
                    _fun43988_ip = 613;
                    continue _fun43988
                }
            case 480:
                var7 = _closure1_slot15;
                var11 = var7.bind(var1)(var11);
                var7 = var11.trim;
                var7 = var7.bind(var11)();
                var7 = var7.length;
                if (!(var10 !== var7)) {
                    _fun43988_ip = 607;
                    continue _fun43988
                }
            case 508:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var10 = 9;
                var10 = var5[var10];
                var11 = var7.bind(var1)(var10);
                var10 = var11.pick;
                var8 = var8.rules;
                var8 = var10.bind(var11)(var8, var12);
                var5 = var5[var9];
                var7 = var7.bind(var1)(var5);
                var5 = var7.parserFor;
                var5 = var5.bind(var7)(var8);
                var3 = var3.whitespaceSanitized;
                var5 = var5.bind(var1)(var3, var6);
                var3 = var2.whitespaceSanitized;
                var2 = {};
                var2.content = var5;
                var4 = var4.target;
                var2.target = var4;
                var2.title = var3;
                return var2;
            case 607:
                var2 = var0.bind(var1)();
                return var2;
            case 613:
                var2 = var0.bind(var1)();
                return var2;
            case 619:
                var2 = var0.bind(var1)();
                return var2;
            case 625:
                var2 = var0.bind(var1)();
                return var2;
            case 631:
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var6 = 'parse';
    var5[var6] = var9;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/markup/MarkupLinkRule.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.ALLOWED_PROTOCOLS = var4;
    var2.isSuspiciousUrl = var3;
    var2.punycodeLink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1386, 4748, 4749, 1304, 3281, 1457, 4750, 3105, 22, 2]);