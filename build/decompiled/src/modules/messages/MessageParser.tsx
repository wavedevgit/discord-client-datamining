// modules/messages/MessageParser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var8
        _fun49128: for (var _fun49128_ip = 0;;) switch (_fun49128_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun49128_ip = 45;
                    continue _fun49128
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun49128_ip = 54;
                    continue _fun49128
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun49128_ip = 342;
                    continue _fun49128
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun49128_ip = 322;
                    continue _fun49128
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun49128_ip = 282;
                    continue _fun49128
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun49128_ip = 269;
                    continue _fun49128
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
                    _fun49128_ip = 162;
                    continue _fun49128
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun49128_ip = 178;
                    continue _fun49128
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun49128_ip = 248;
                    continue _fun49128
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun49128_ip = 248;
                    continue _fun49128
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun49128_ip = 233;
                    continue _fun49128
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun49128_ip = 246;
                    continue _fun49128
                }
            case 233:
                var8 = _closure1_slot24;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun49128_ip = 264;
                continue _fun49128;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun49128_ip = 282;
                continue _fun49128;
            case 269:
                var6 = _closure1_slot24;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun49128_ip = 322;
                    continue _fun49128
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
                    _fun49128_ip = 329;
                    continue _fun49128
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun49129: for (var _fun49129_ip = 0;;) switch (_fun49129_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun49129_ip = 56;
                                continue _fun49129
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
                            _fun49129_ip = 67;
                            continue _fun49129;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var8
        _fun49130: for (var _fun49130_ip = 0;;) switch (_fun49130_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun49130_ip = 23;
                    continue _fun49130
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun49130_ip = 33;
                    continue _fun49130
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
                    _fun49130_ip = 70;
                    continue _fun49130
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun49130_ip = 55;
                    continue _fun49130
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: matchPrefix, environment: var8
        _fun49131: for (var _fun49131_ip = 0;;) switch (_fun49131_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var3 = arg2;
                var5 = arguments[3];
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var4;
                var2 = undefined;
                if (!(var5 === var2)) {
                    _fun49131_ip = 30;
                    continue _fun49131
                }
            case 28:
                var5 = null;
            case 30:
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var2;
                var2 = 0;
                var2 = var4[var2];
                if (!(var2 === var1)) {
                    _fun49131_ip = 142;
                    continue _fun49131
                }
            case 48:
                var2 = var4.substr;
                var1 = var1.length;
                var1 = var2.bind(var4)(var1);
                _closure2_slot3 = var1;
                var2 = var3.sortBy;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.text;
                    var0 = var0.length;
                    var0 = -var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = var0.text;
                    var1 = _closure2_slot1;
                    var0 = var1.toLowerCase;
                    var2 = var0.bind(var1)();
                    var1 = var2.indexOf;
                    var0 = var3.toLowerCase;
                    var0 = var0.bind(var3)();
                    var1 = var1.bind(var2)(var0);
                    var0 = 1;
                    var0 = var0 === var1;
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.sortBy;
                var1 = function(arg0) { // Environment: var0
                    _fun49134: for (var _fun49134_ip = 0;;) switch (_fun49134_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.text;
                            var1 = _closure2_slot3;
                            var0 = 1;
                            if (!(var2 === var1)) {
                                _fun49134_ip = 24;
                                continue _fun49134
                            }
                        case 22:
                            var0 = 0;
                        case 24:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.id;
                    var3 = var0.text;
                    var0 = _closure2_slot0;
                    var3 = var0 + var3;
                    var0 = new Array(3);
                    var0[0] = var3;
                    var0[1] = var2;
                    var1 = _closure2_slot2;
                    var0[2] = var1;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = var1.first;
                var0 = var0.bind(var1)();
                return var0;
            case 142:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var15 = function(arg0) { // Original name: matchAndReturnText, environment: var8
        var2 = arg0;
        var _closure2_slot0 = var2;
        var0 = {};
        var3 = var2.order;
        var0.order = var3;
        var2 = var2.match;
        var0.match = var2;
        var1 = function(arg0) { // Original name: parse, environment: var1
            var0 = {};
            var1 = _closure2_slot0;
            var1 = var1.type;
            var0.type = var1;
            var2 = arg0;
            var1 = 0;
            var1 = var2[var1];
            var0.content = var1;
            return var0;
        };
        var0.parse = var1;
        return var0;
    };
    var11 = function(arg0) { // Original name: matchRegexAndReturnText, environment: var8
        var0 = {};
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.anyScopeRegex;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var0.match = var1;
        var1 = function(arg0) { // Original name: parse, environment: var1
            var0 = {};
            var1 = 'text';
            var0.type = var1;
            var2 = arg0;
            var1 = 0;
            var1 = var2[var1];
            var0.content = var1;
            return var0;
        };
        var0.parse = var1;
        return var0;
    };
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: rebuild, environment: var8
        var4 = arg0;
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = arg2;
        var _closure2_slot1 = var0;
        var0 = arg3;
        var _closure2_slot2 = var0;
        var0 = '';
        var _closure2_slot3 = var0;
        var1 = new Array(0);
        var _closure2_slot4 = var1;
        var3 = var4.forEach;
        var0 = function(arg0) { // Environment: var2
            _fun49141: for (var _fun49141_ip = 0;;) switch (_fun49141_ip) {
                case 0:
                    var0 = arg0;
                    var13 = _closure2_slot0;
                    var12 = _closure2_slot2;
                    var11 = null;
                    if (!(var11 != var12)) {
                        _fun49141_ip = 277;
                        continue _fun49141
                    }
                case 23:
                    var3 = var0.type;
                    var2 = 'customEmoticon';
                    if (!(var2 === var3)) {
                        _fun49141_ip = 54;
                        continue _fun49141
                    }
                case 38:
                    var4 = var0.emoji;
                    var3 = undefined;
                    var2 = false;
                    var2 = var12.bind(var3)(var4, var2);
                case 54:
                    var3 = var0.type;
                    var2 = 'emoticon';
                    if (!(var2 !== var3)) {
                        _fun49141_ip = 83;
                        continue _fun49141
                    }
                case 67:
                    var3 = var0.type;
                    var2 = 'text';
                    if (!(var2 === var3)) {
                        _fun49141_ip = 277;
                        continue _fun49141
                    }
                case 83:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var9 = 19;
                    var2 = var2[var9];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.translateSurrogatesToInlineEmoji;
                    var2 = var0.content;
                    var7 = var3.bind(var4)(var2);
                    var3 = _closure1_slot22;
                    var2 = var3.exec;
                    var2 = var2.bind(var3)(var7);
                    var5 = 1;
                    var4 = 2;
                    var3 = '';
                    if (!(var11 !== var2)) {
                        _fun49141_ip = 277;
                        continue _fun49141
                    }
                case 156:
                    var14 = var2[var5];
                    if (!(var11 != var14)) {
                        _fun49141_ip = 172;
                        continue _fun49141
                    }
                case 164:
                    var14 = var2[var5];
                    if (!(var3 === var14)) {
                        _fun49141_ip = 206;
                        continue _fun49141
                    }
                case 172:
                    var15 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var9];
                    var16 = var15.bind(var8)(var14);
                    var15 = var16.getByName;
                    var14 = var2[var4];
                    var15 = var15.bind(var16)(var14);
                    _fun49141_ip = 238;
                    continue _fun49141;
                case 206:
                    var14 = var13.emojiContext;
                    var15 = undefined;
                    if (!var14) {
                        _fun49141_ip = 238;
                        continue _fun49141
                    }
                case 217:
                    var17 = var13.emojiContext;
                    var16 = var17.getById;
                    var14 = var2[var5];
                    var15 = var16.bind(var17)(var14);
                case 238:
                    if (!var15) {
                        _fun49141_ip = 258;
                        continue _fun49141
                    }
                case 241:
                    var14 = var0.isShortcut;
                    if (var14) {
                        _fun49141_ip = 252;
                        continue _fun49141
                    }
                case 250:
                    var14 = false;
                case 252:
                    var14 = var12.bind(var8)(var15, var14);
                case 258:
                    var15 = _closure1_slot22;
                    var14 = var15.exec;
                    var2 = var14.bind(var15)(var7);
                    if (var11 !== var2) {
                        _fun49141_ip = 156;
                        continue _fun49141
                    }
                case 277:
                    var2 = var0.content;
                    var3 = 'string';
                    var2 = typeof var2;
                    if (!(var3 !== var2)) {
                        _fun49141_ip = 478;
                        continue _fun49141
                    }
                case 296:
                    var2 = var0.content;
                    var3 = var2.constructor;
                    var2 = global;
                    var2 = var2.Array;
                    if (!(var3 === var2)) {
                        _fun49141_ip = 691;
                        continue _fun49141
                    }
                case 321:
                    var8 = _closure1_slot26;
                    var21 = var0.content;
                    var20 = _closure2_slot0;
                    var19 = _closure2_slot1;
                    var18 = _closure2_slot2;
                    var6 = undefined;
                    var22 = undefined;
                    var2 = var22[var8](var21, var20, var19, var18, var17);
                    var3 = var2.content;
                    var4 = _closure1_slot23;
                    var2 = var2.emoji;
                    var5 = var4.bind(var6)(var2);
                    var4 = var5.bind(var6)();
                    var2 = var4.done;
                    if (var2) {
                        _fun49141_ip = 461;
                        continue _fun49141
                    }
                case 385:
                    var9 = var4.value;
                    var8 = _closure2_slot4;
                    var7 = var8.push;
                    var2 = {};
                    var10 = _closure2_slot3;
                    var11 = var10.length;
                    var10 = var9.position;
                    var10 = var11 + var10;
                    var2.position = var10;
                    var10 = var9.length;
                    var2.length = var10;
                    var9 = var9.id;
                    var2.id = var9;
                    var2 = var7.bind(var8)(var2);
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var4 = var7;
                    if (!var2) {
                        _fun49141_ip = 385;
                        continue _fun49141
                    }
                case 461:
                    var2 = _closure2_slot3;
                    var2 = var2 + var3;
                    _closure2_slot3 = var2;
                    _fun49141_ip = 691;
                    continue _fun49141;
                case 478:
                    var3 = var0.type;
                    var2 = 'emoji';
                    if (!(var2 !== var3)) {
                        _fun49141_ip = 622;
                        continue _fun49141
                    }
                case 494:
                    var2 = 'codeBlock';
                    if (!(var2 !== var3)) {
                        _fun49141_ip = 567;
                        continue _fun49141
                    }
                case 502:
                    var2 = 'inlineCode';
                    if (!(var2 !== var3)) {
                        _fun49141_ip = 567;
                        continue _fun49141
                    }
                case 510:
                    var2 = 'mention';
                    if (!(var2 !== var3)) {
                        _fun49141_ip = 567;
                        continue _fun49141
                    }
                case 518:
                    var2 = 'roleMention';
                    if (!(var2 !== var3)) {
                        _fun49141_ip = 567;
                        continue _fun49141
                    }
                case 526:
                    var2 = 'channel';
                    if (!(var2 !== var3)) {
                        _fun49141_ip = 567;
                        continue _fun49141
                    }
                case 534:
                    var3 = _closure2_slot3;
                    var5 = _closure2_slot1;
                    var4 = var0.content;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var3 + var2;
                    _closure2_slot3 = var2;
                    _fun49141_ip = 691;
                    continue _fun49141;
                case 567:
                    var3 = _closure2_slot3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 27;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.isolate;
                    var2 = var0.content;
                    var2 = var4.bind(var5)(var2);
                    var2 = var3 + var2;
                    _closure2_slot3 = var2;
                    _fun49141_ip = 691;
                    continue _fun49141;
                case 622:
                    var4 = _closure2_slot4;
                    var3 = var4.push;
                    var2 = {};
                    var5 = _closure2_slot3;
                    var5 = var5.length;
                    var2.position = var5;
                    var5 = var0.content;
                    var5 = var5.length;
                    var2.length = var5;
                    var5 = var0.id;
                    var2.id = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot3;
                    var0 = var0.content;
                    var0 = var2 + var0;
                    _closure2_slot3 = var0;
                case 691:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0);
        var0 = {};
        var2 = _closure2_slot3;
        var0.content = var2;
        var0.emoji = var1;
        return var0;
    };
    var _closure1_slot26 = var0;
    var3 = function(arg0, arg1, arg2) { // Original name: parseAndRebuild, environment: var8
        var5 = arg1;
        var4 = _closure1_slot26;
        var2 = _closure1_slot21;
        var3 = undefined;
        var1 = arg0;
        var2 = var2.bind(var3)(var1, var5);
        var1 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 19;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var8 = var0.translateInlineEmojiToSurrogates;
        var7 = arg2;
        var11 = undefined;
        var10 = var2;
        var9 = var5;
        var0 = var11[var4](var10, var9, var8, var7, var6);
        var0 = var0.content;
        return var0;
    };
    var _closure1_slot27 = var3;
    var1 = function(arg0) { // Original name: createParserState, environment: var8
        _fun49143: for (var _fun49143_ip = 0;;) switch (_fun49143_ip) {
            case 0:
                var3 = arg0;
                var4 = null;
                var0 = var4 == var3;
                var5 = undefined;
                var2 = undefined;
                if (var0) {
                    _fun49143_ip = 28;
                    continue _fun49143
                }
            case 18:
                var0 = var3.getGuildId;
                var2 = var0.bind(var3)();
            case 28:
                var _closure2_slot0 = var2;
                var0 = var4 != var2;
                var10 = null;
                if (!var0) {
                    _fun49143_ip = 58;
                    continue _fun49143
                }
            case 41:
                var6 = _closure1_slot11;
                var0 = var6.getGuild;
                var10 = var0.bind(var6)(var2);
            case 58:
                var8 = _closure1_slot12;
                var7 = var8.can;
                var6 = _closure1_slot16;
                var6 = var6.MENTION_EVERYONE;
                var6 = var7.bind(var8)(var6, var3);
                var _closure2_slot1 = var6;
                if (!(var4 != var3)) {
                    _fun49143_ip = 108;
                    continue _fun49143
                }
            case 95:
                var6 = var3.isPrivate;
                var6 = var6.bind(var3)();
                if (var6) {
                    _fun49143_ip = 150;
                    continue _fun49143
                }
            case 108:
                if (!(var4 == var2)) {
                    _fun49143_ip = 118;
                    continue _fun49143
                }
            case 112:
                var13 = new Array(0);
                _fun49143_ip = 148;
                continue _fun49143;
            case 118:
                var7 = _closure1_slot9;
                var6 = var7.getMembers;
                var8 = var6.bind(var7)(var2);
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var2 = var0.userId;
                    var1 = var0.nick;
                    var0 = {};
                    var0.userId = var2;
                    var0.nick = var1;
                    return var0;
                };
                var13 = var7.bind(var8)(var6);
            case 148:
                _fun49143_ip = 171;
                continue _fun49143;
            case 150:
                var7 = var3.recipients;
                var6 = var7.map;
                var3 = function(arg0) { // Environment: var1
                    var0 = {};
                    var1 = arg0;
                    var0.userId = var1;
                    var1 = null;
                    var0.nick = var1;
                    return var0;
                };
                var13 = var6.bind(var7)(var3);
            case 171:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 23;
                var6 = var7[var3];
                var9 = var8.bind(var5)(var6);
                var12 = var13.reduce;
                var11 = function(arg0, arg1) { // Environment: var1
                    _fun49146: for (var _fun49146_ip = 0;;) switch (_fun49146_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var4 = var1.userId;
                            var2 = _closure1_slot15;
                            var1 = var2.getUser;
                            var3 = var1.bind(var2)(var4);
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun49146_ip = 60;
                                continue _fun49146
                            }
                        case 35:
                            var2 = var0.push;
                            var1 = {};
                            var1.id = var4;
                            var3 = var3.tag;
                            var1.text = var3;
                            var1 = var2.bind(var0)(var1);
                        case 60:
                            return var0;
                    }
                };
                var6 = new Array(0);
                var6 = var12.bind(var13)(var11, var6);
                var6 = var9.bind(var5)(var6);
                var7 = var7[var3];
                var8 = var8.bind(var5)(var7);
                if (!(var4 == var10)) {
                    _fun49143_ip = 236;
                    continue _fun49143
                }
            case 230:
                var7 = new Array(0);
                _fun49143_ip = 256;
                continue _fun49143;
            case 236:
                var12 = _closure1_slot10;
                var11 = var12.getSortedRoles;
                var9 = var10.id;
                var7 = var11.bind(var12)(var9);
            case 256:
                var9 = var8.bind(var5)(var7);
                var8 = var9.filter;
                var7 = function(arg0) { // Environment: var1
                    _fun49147: for (var _fun49147_ip = 0;;) switch (_fun49147_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.mentionable;
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun49147_ip = 22;
                                continue _fun49147
                            }
                        case 19:
                            var0 = var1;
                        case 22:
                            return var0;
                    }
                };
                var9 = var8.bind(var9)(var7);
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var2 = var0.id;
                    var1 = var0.name;
                    var0 = {};
                    var0.id = var2;
                    var0.text = var1;
                    return var0;
                };
                var11 = var8.bind(var9)(var7);
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var3];
                var8 = var8.bind(var5)(var7);
                var9 = _closure1_slot7;
                var7 = var9.getTextChannelNameDisambiguations;
                var7 = var7.bind(var9)(var2);
                var9 = var8.bind(var5)(var7);
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var2 = var0.id;
                    var1 = var0.name;
                    var0 = {};
                    var0.id = var2;
                    var0.text = var1;
                    return var0;
                };
                var9 = var8.bind(var9)(var7);
                if (!(var4 == var2)) {
                    _fun49143_ip = 353;
                    continue _fun49143
                }
            case 347:
                var7 = new Array(0);
                _fun49143_ip = 437;
                continue _fun49143;
            case 353:
                var4 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = var12[var3];
                var4 = var4.bind(var5)(var3);
                var8 = _closure1_slot0;
                var3 = 28;
                var3 = var12[var3];
                var3 = var8.bind(var5)(var3);
                var3 = var3.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
                var5 = var4.bind(var5)(var3);
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var1
                    var1 = _closure1_slot8;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.flatMap;
                var3 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.getChannels;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg0;
                    var2 = var1[var0];
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.channel;
                        var2 = var2.id;
                        var0.id = var2;
                        var1 = var1.channel;
                        var1 = var1.name;
                        var0.text = var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.value;
                var7 = var3.bind(var4)();
            case 437:
                var4 = _closure1_slot4;
                var3 = var4.computeAllActiveJoinedThreads;
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.id;
                    var0.id = var2;
                    var1 = var1.name;
                    var0.text = var1;
                    return var0;
                };
                var8 = var3.bind(var4)(var1);
                var1 = _closure1_slot3;
                var0 = var1.getDisambiguatedEmojiContext;
                var5 = var0.bind(var1)(var2);
                var0 = var5.getEscapedCustomEmoticonNames;
                var2 = var0.bind(var5)();
                var0 = var5.getCustomEmoji;
                var3 = var0.bind(var5)();
                var0 = var5.getCustomEmoticonRegex;
                var4 = var0.bind(var5)();
                var0 = {};
                var1 = true;
                var0.inline = var1;
                var0.mentionableRoles = var11;
                var0.guild = var10;
                var0.users = var6;
                var6 = var9.concat;
                var7 = var6.bind(var9)(var7);
                var6 = var7.concat;
                var6 = var6.bind(var7)(var8);
                var0.channels = var6;
                var0.emojiContext = var5;
                var0.customEmoticonsRegex = var4;
                var0.customEmoji = var3;
                var0.textExclusions = var2;
                var0.disableErrorGuards = var1;
                return var0;
        }
    };
    var _closure1_slot28 = var1;
    var0 = function(arg0) { // Original name: NOOP, environment: var8
        var0 = arg0;
        return var0;
    };
    var _closure1_slot29 = var0;
    var5 = function(arg0, arg1, arg2) { // Original name: unparseWithMeta, environment: var8
        _fun49155: for (var _fun49155_ip = 0;;) switch (_fun49155_ip) {
            case 0:
                var2 = arg1;
                var1 = arg2;
                var4 = _closure1_slot5;
                var3 = var4.getChannel;
                var4 = var3.bind(var4)(var2);
                var5 = null;
                var3 = var5 != var4;
                var6 = null;
                if (!var3) {
                    _fun49155_ip = 44;
                    continue _fun49155
                }
            case 34:
                var3 = var4.getGuildId;
                var6 = var3.bind(var4)();
            case 44:
                var3 = var5 != var6;
                var5 = null;
                if (!var3) {
                    _fun49155_ip = 67;
                    continue _fun49155
                }
            case 53:
                var4 = _closure1_slot11;
                var3 = var4.getGuild;
                var5 = var3.bind(var4)(var6);
            case 67:
                if (var1) {
                    _fun49155_ip = 120;
                    continue _fun49155
                }
            case 70:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 23;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var6.bind(var3)(var4);
                var6 = var7.omit;
                var4 = _closure1_slot20;
                var3 = ['spoiler', 'timestamp'];
                var6 = var6.bind(var7)(var4, var3);
                _fun49155_ip = 124;
                continue _fun49155;
            case 120:
                var6 = _closure1_slot20;
            case 124:
                if (var1) {
                    _fun49155_ip = 157;
                    continue _fun49155
                }
            case 127:
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 19;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var4 = var3.translateSurrogatesToInlineEmoji;
                _fun49155_ip = 161;
                continue _fun49155;
            case 157:
                var4 = _closure1_slot29;
            case 161:
                var3 = {};
                var7 = true;
                var3.inline = var7;
                var3.guild = var5;
                var3.channelId = var2;
                var3.isNotification = var1;
                var2 = _closure1_slot26;
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 15;
                var0 = var1[var0];
                var1 = undefined;
                var5 = var5.bind(var1)(var0);
                var0 = var5.parserFor;
                var5 = var0.bind(var5)(var6);
                var0 = arg0;
                var0 = var5.bind(var1)(var0, var3);
                var0 = var2.bind(var1)(var0, var3, var4);
                return var0;
        }
    };
    var _closure1_slot30 = var5;
    var0 = global;
    var12 = var0.Object;
    var10 = var12.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var12)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var9.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var10 = var7[var4];
    var10 = var9.bind(var0)(var10);
    var _closure1_slot7 = var10;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var18 = var4.MARKDOWN_SPOILER_REGEXP;
    var17 = var4.MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
    var4 = var4.Permissions;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot17 = var4;
    var22 = /^<@!?(\d+)>/;
    var21 = /^<@&(\d+)>/;
    var20 = /^<#(\d+)>/;
    var19 = /^<a?:(\w+):(\d+)>/;
    var4 = /(@everyone|@here|@Clyde)\b/;
    var _closure1_slot18 = var4;
    var4 = /^[^\s]+@[^\s]+\.[^\s.]+/;
    var _closure1_slot19 = var4;
    var10 = {};
    var4 = 15;
    var12 = var7[var4];
    var12 = var9.bind(var0)(var12);
    var12 = var12.defaultRules;
    var12 = var12.link;
    var12 = var15.bind(var0)(var12);
    var10.link = var12;
    var12 = var7[var4];
    var12 = var9.bind(var0)(var12);
    var12 = var12.defaultRules;
    var12 = var12.autolink;
    var12 = var15.bind(var0)(var12);
    var10.autolink = var12;
    var12 = var7[var4];
    var12 = var9.bind(var0)(var12);
    var12 = var12.defaultRules;
    var12 = var12.url;
    var12 = var15.bind(var0)(var12);
    var10.url = var12;
    var14 = 16;
    var12 = var7[var14];
    var12 = var9.bind(var0)(var12);
    var12 = var12.RULES;
    var12 = var12.inlineCode;
    var12 = var15.bind(var0)(var12);
    var10.inlineCode = var12;
    var12 = var7[var14];
    var12 = var9.bind(var0)(var12);
    var12 = var12.RULES;
    var12 = var12.codeBlock;
    var12 = var15.bind(var0)(var12);
    var10.codeBlock = var12;
    var12 = var11.bind(var0)(var22);
    var10.rawUserMention = var12;
    var12 = var11.bind(var0)(var21);
    var10.rawRoleMention = var12;
    var12 = var11.bind(var0)(var20);
    var10.rawChannelMention = var12;
    var11 = var11.bind(var0)(var19);
    var10.rawEmoji = var11;
    var11 = {};
    var12 = function(arg0, arg1, arg2) { // Original name: match, environment: var8
        _fun49156: for (var _fun49156_ip = 0;;) switch (_fun49156_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var8 = arg2;
                var1 = var8.split;
                var0 = ' ';
                var1 = var1.bind(var8)(var0);
                var0 = var1.pop;
                var0 = var0.bind(var1)();
                var3 = var0 + var6;
                var1 = _closure1_slot19;
                var0 = var1.test;
                var0 = var0.bind(var1)(var3);
                if (var0) {
                    _fun49156_ip = 310;
                    continue _fun49156
                }
            case 62:
                var1 = _closure1_slot25;
                var13 = var2.users;
                var7 = undefined;
                var9 = '@';
                var5 = 'mention';
                var16 = undefined;
                var15 = var9;
                var14 = var6;
                var12 = var5;
                var0 = var16[var1](var15, var14, var13, var12, var11);
                if (var0) {
                    _fun49156_ip = 308;
                    continue _fun49156
                }
            case 103:
                var10 = _closure1_slot25;
                var13 = var2.mentionableRoles;
                var12 = 'roleMention';
                var16 = undefined;
                var15 = var9;
                var14 = var6;
                var1 = var16[var10](var15, var14, var13, var12, var11);
                if (var1) {
                    _fun49156_ip = 306;
                    continue _fun49156
                }
            case 135:
                var3 = _closure1_slot25;
                var11 = var2.users;
                var10 = var11.map;
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var0 = {};
                    var5 = var0;
                    var4 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = var1.text;
                    var2 = var3.split;
                    var1 = '#';
                    var2 = var2.bind(var3)(var1);
                    var1 = 0;
                    var2 = var2[var1];
                    var1 = 'text';
                    var0[var1] = var2;
                    return var0;
                };
                var13 = var10.bind(var11)(var2);
                var16 = undefined;
                var15 = var9;
                var14 = var6;
                var12 = var5;
                var3 = var16[var3](var15, var14, var13, var12, var11);
                var2 = null;
                if (var3) {
                    _fun49156_ip = 184;
                    continue _fun49156
                }
            case 182:
                return var2;
            case 184:
                var9 = _closure1_slot18;
                var5 = var9.exec;
                var10 = var5.bind(var9)(var6);
                if (!(var2 != var10)) {
                    _fun49156_ip = 227;
                    continue _fun49156
                }
            case 203:
                var5 = 0;
                var9 = var3[var5];
                var9 = var9.length;
                var5 = var10[var5];
                var5 = var5.length;
                if (!(!(var9 <= var5))) {
                    _fun49156_ip = 304;
                    continue _fun49156
                }
            case 227:
                var5 = '';
                if (!(var5 === var8)) {
                    _fun49156_ip = 300;
                    continue _fun49156
                }
            case 235:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 17;
                var4 = var8[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.SILENT_RE;
                var4 = var5.exec;
                var6 = var4.bind(var5)(var6);
                if (!(var2 != var6)) {
                    _fun49156_ip = 300;
                    continue _fun49156
                }
            case 276:
                var4 = 0;
                var5 = var3[var4];
                var5 = var5.length;
                var4 = var6[var4];
                var4 = var4.length;
                if (!(!(var5 <= var4))) {
                    _fun49156_ip = 302;
                    continue _fun49156
                }
            case 300:
                return var3;
            case 302:
                return var2;
            case 304:
                return var2;
            case 306:
                return var1;
            case 308:
                return var0;
            case 310:
                var0 = null;
                return var0;
        }
    };
    var11.match = var12;
    var12 = function(arg0) { // Original name: parse, environment: var8
        _fun49158: for (var _fun49158_ip = 0;;) switch (_fun49158_ip) {
            case 0:
                var7 = arg0;
                var1 = var7[Symbol.iterator];
                var7 = var1().next;
                var9 = undefined;
                var2 = undefined;
                var3 = undefined;
                var8 = var7().value;
                var10 = var1;
                var10 = var10 === var9;
                var2 = var10;
                if (var10) {
                    _fun49158_ip = 32;
                    continue _fun49158
                }
            case 29:
                var3 = var8;
            case 32:
                var3 = undefined;
                var8 = var2;
                if (var8) {
                    _fun49158_ip = 60;
                    continue _fun49158
                }
            case 40:
                var8 = var7().value;
                var10 = var1;
                var10 = var10 === var9;
                var2 = var10;
                if (var10) {
                    _fun49158_ip = 60;
                    continue _fun49158
                }
            case 57:
                var3 = var8;
            case 60:
                var4 = var3;
                var3 = undefined;
                var8 = var2;
                if (var8) {
                    _fun49158_ip = 91;
                    continue _fun49158
                }
            case 71:
                var7 = var7().value;
                var8 = var1;
                var8 = var8 === var9;
                var2 = var8;
                if (var8) {
                    _fun49158_ip = 91;
                    continue _fun49158
                }
            case 88:
                var3 = var7;
            case 91:
                var6 = var3;
                var3 = var2;
                if (var3) {
                    _fun49158_ip = 103;
                    continue _fun49158
                }
            case 100:
                var1.return();
            case 103:
                var5 = '@';
                var7 = var6;
                var3 = 'roleMention';
                if (!(var3 === var7)) {
                    _fun49158_ip = 129;
                    continue _fun49158
                }
            case 118:
                var7 = var5;
                var3 = '&';
                var5 = var7 + var3;
            case 129:
                var3 = {};
                var3.type = var6;
                var8 = var5;
                var7 = var4;
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var5 = '<';
                var4 = '>';
                var4 = var6.bind(var5)(var8, var7, var4);
                var3.content = var4;
                return var3;
            case 175:
                CatchBlockStart(arg_register = 0);
                if (var2) {
                    _fun49158_ip = 183;
                    continue _fun49158
                }
            case 180:
                var1.return();
            case 183:
                throw var0;
        }
    };
    var11.parse = var12;
    var10.mention = var11;
    var11 = {};
    var12 = function(arg0, arg1) { // Original name: match, environment: var8
        var0 = arg1;
        var4 = var0.channels;
        var3 = function(arg0, arg1, arg2) { // Original name: matchChannelPrefix, environment: var0
            _fun49160: for (var _fun49160_ip = 0;;) switch (_fun49160_ip) {
                case 0:
                    var5 = arg1;
                    var4 = arg2;
                    var3 = undefined;
                    var2 = undefined;
                    if (!(var2 === var2)) {
                        _fun49160_ip = 18;
                        continue _fun49160
                    }
                case 16:
                    var2 = null;
                case 18:
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var3;
                    var _closure3_slot2 = var3;
                    var8 = 0;
                    var6 = var5[var8];
                    var1 = '#';
                    if (!(var6 === var1)) {
                        _fun49160_ip = 287;
                        continue _fun49160
                    }
                case 47:
                    var6 = 1;
                    var7 = var5[var6];
                    var13 = '"';
                    if (!(var13 === var7)) {
                        _fun49160_ip = 260;
                        continue _fun49160
                    }
                case 65:
                    var7 = var5.length;
                    var10 = 2;
                    var7 = var10 < var7;
                    var12 = '\\';
                    var11 = var10;
                    var9 = var11;
                    if (!var7) {
                        _fun49160_ip = 132;
                        continue _fun49160
                    }
                case 90:
                    var7 = var5[var11];
                    if (!(var12 === var7)) {
                        _fun49160_ip = 103;
                        continue _fun49160
                    }
                case 98:
                    var7 = var11 + 1;
                    _fun49160_ip = 117;
                    continue _fun49160;
                case 103:
                    var14 = var5[var11];
                    var7 = var11;
                    var9 = var7;
                    if (!(var13 !== var14)) {
                        _fun49160_ip = 132;
                        continue _fun49160
                    }
                case 117:
                    var11 = var7 + 1;
                    var7 = var5.length;
                    var9 = var11;
                    if (var9 < var7) {
                        _fun49160_ip = 90;
                        continue _fun49160
                    }
                case 132:
                    var7 = var5.substring;
                    var6 = var9 + var6;
                    var6 = var7.bind(var5)(var8, var6);
                    _closure3_slot1 = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 14;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.unescapeChannelName;
                    var6 = var5.substring;
                    var6 = var6.bind(var5)(var10, var9);
                    var6 = var7.bind(var8)(var6);
                    _closure3_slot2 = var6;
                    var7 = var4.sortBy;
                    var6 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.text;
                        var0 = var0.length;
                        var0 = -var0;
                        return var0;
                    };
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.filter;
                    var6 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.text;
                        var0 = _closure3_slot2;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var2 = var0.id;
                        var3 = _closure3_slot1;
                        var0 = new Array(3);
                        var0[0] = var3;
                        var0[1] = var2;
                        var1 = _closure3_slot0;
                        var0[2] = var1;
                        return var0;
                    };
                    var6 = var6.bind(var7)(var0);
                    var0 = var6.first;
                    var0 = var0.bind(var6)();
                    return var0;
                case 260:
                    var0 = _closure1_slot25;
                    var19 = undefined;
                    var18 = var1;
                    var17 = var5;
                    var16 = var4;
                    var15 = var2;
                    var0 = var19[var0](var18, var17, var16, var15, var14);
                    return var0;
                case 287:
                    var0 = null;
                    return var0;
            }
        };
        var2 = undefined;
        var1 = '#';
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0, var4);
        return var0;
    };
    var11.match = var12;
    var12 = function(arg0) { // Original name: parse, environment: var8
        var0 = {};
        var1 = 'text';
        var0.type = var1;
        var2 = arg0;
        var1 = 1;
        var4 = var2[var1];
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '<#';
        var1 = '>';
        var1 = var3.bind(var2)(var4, var1);
        var0.content = var1;
        return var0;
    };
    var11.parse = var12;
    var10.channel = var11;
    var11 = {};
    var12 = function(arg0, arg1, arg2) { // Original name: match, environment: var8
        _fun49165: for (var _fun49165_ip = 0;;) switch (_fun49165_ip) {
            case 0:
                var3 = arg0;
                var6 = arg2;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 18;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var2 = var1.ConvertEmoticons;
                var1 = var2.getSetting;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun49165_ip = 54;
                    continue _fun49165
                }
            case 50:
                var1 = null;
                return var1;
            case 54:
                var1 = var6.length;
                var2 = 0;
                if (!(var2 !== var1)) {
                    _fun49165_ip = 96;
                    continue _fun49165
                }
            case 65:
                var5 = /\s$/;
                var1 = var5.test;
                var1 = var1.bind(var5)(var6);
                if (var1) {
                    _fun49165_ip = 96;
                    continue _fun49165
                }
            case 92:
                var1 = null;
                return var1;
            case 96:
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 19;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.EMOJI_SHORTCUT_RE;
                var0 = var1.exec;
                var1 = var0.bind(var1)(var3);
                var4 = null;
                var5 = var4 == var1;
                var0 = null;
                if (var5) {
                    _fun49165_ip = 211;
                    continue _fun49165
                }
            case 144:
                var5 = var1[var2];
                var6 = var5.length;
                var5 = var3.length;
                if (!(var6 !== var5)) {
                    _fun49165_ip = 208;
                    continue _fun49165
                }
            case 162:
                var5 = var1[var2];
                var5 = var5.length;
                var6 = var3[var5];
                var5 = ' ';
                if (!(var5 !== var6)) {
                    _fun49165_ip = 208;
                    continue _fun49165
                }
            case 185:
                var2 = var1[var2];
                var2 = var2.length;
                var3 = var3[var2];
                var2 = '\n';
                var0 = null;
                if (!(var2 === var3)) {
                    _fun49165_ip = 211;
                    continue _fun49165
                }
            case 208:
                var0 = var1;
            case 211:
                return var0;
        }
    };
    var11.match = var12;
    var12 = function(arg0) { // Original name: parse, environment: var8
        var0 = {
            'type': 'emoticon',
            'content': null,
            'isShortcut': true
        };
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 19;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.convertShortcutToName;
        var4 = arg0;
        var1 = 1;
        var1 = var4[var1];
        var1 = var2.bind(var3)(var1);
        var0.content = var1;
        return var0;
    };
    var11.parse = var12;
    var10.emoticon = var11;
    var11 = {};
    var12 = var7[var14];
    var12 = var9.bind(var0)(var12);
    var12 = var12.RULES;
    var12 = var12.emoji;
    var12 = var12.order;
    var11.order = var12;
    var12 = function(arg0) { // Original name: match, environment: var8
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 19;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.EMOJI_NAME_RE;
        var1 = var2.exec;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var11.match = var12;
    var12 = function(arg0, arg1, arg2) { // Original name: parse, environment: var8
        _fun49168: for (var _fun49168_ip = 0;;) switch (_fun49168_ip) {
            case 0:
                var3 = arg0;
                var0 = var3[Symbol.iterator];
                var3 = var0().next;
                var4 = var3().value;
                var1 = var0;
                var6 = undefined;
                var2 = var1 === var6;
                var1 = undefined;
                if (var2) {
                    _fun49168_ip = 27;
                    continue _fun49168
                }
            case 24:
                var1 = var4;
            case 27:
                var5 = undefined;
                if (var2) {
                    _fun49168_ip = 57;
                    continue _fun49168
                }
            case 32:
                var4 = var3().value;
                var3 = var0;
                var3 = var3 === var6;
                var5 = undefined;
                var2 = var3;
                if (var3) {
                    _fun49168_ip = 57;
                    continue _fun49168
                }
            case 51:
                var5 = var4;
                var2 = var3;
            case 57:
                if (var2) {
                    _fun49168_ip = 63;
                    continue _fun49168
                }
            case 60:
                var0.return();
            case 63:
                var0 = arg2;
                var0 = var0.customEmoji;
                var3 = global;
                var2 = var3.Object;
                var2 = var2.prototype;
                var4 = var2.hasOwnProperty;
                var2 = var4.call;
                var6 = var2.bind(var4)(var0, var5);
                var4 = null;
                var2 = null;
                if (!var6) {
                    _fun49168_ip = 113;
                    continue _fun49168
                }
            case 109:
                var2 = var0[var5];
            case 113:
                if (!(var4 == var2)) {
                    _fun49168_ip = 133;
                    continue _fun49168
                }
            case 117:
                var0 = {};
                var5 = 'text';
                var0.type = var5;
                var0.content = var1;
                _fun49168_ip = 236;
                continue _fun49168;
            case 133:
                var1 = {};
                var5 = 'customEmoticon';
                var1.type = var5;
                var6 = var2.animated;
                var9 = '';
                var5 = true;
                if (!(var5 === var6)) {
                    _fun49168_ip = 165;
                    continue _fun49168
                }
            case 161:
                var9 = 'a';
            case 165:
                var8 = var2.originalName;
                if (!(var4 == var8)) {
                    _fun49168_ip = 180;
                    continue _fun49168
                }
            case 175:
                var8 = var2.name;
            case 180:
                var11 = var2.id;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var16 = '<';
                var4 = ':';
                var10 = '>';
                var15 = var9;
                var14 = var4;
                var13 = var8;
                var12 = var4;
                var3 = var16[var6](var15, var14, var13, var12, var11, var10, var9);
                var1.content = var3;
                var1.emoji = var2;
                var0 = var1;
            case 236:
                return var0;
        }
    };
    var11.parse = var12;
    var10.emoji = var11;
    var11 = {};
    var12 = function(arg0, arg1) { // Original name: match, environment: var8
        _fun49169: for (var _fun49169_ip = 0;;) switch (_fun49169_ip) {
            case 0:
                var0 = arg1;
                var4 = var0.customEmoticonsRegex;
                var0 = null;
                var2 = var0 == var4;
                var1 = undefined;
                if (var2) {
                    _fun49169_ip = 34;
                    continue _fun49169
                }
            case 20:
                var3 = var4.exec;
                var2 = arg0;
                var1 = var3.bind(var4)(var2);
            case 34:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun49169_ip = 46;
                    continue _fun49169
                }
            case 43:
                var0 = var1;
            case 46:
                return var0;
        }
    };
    var11.match = var12;
    var12 = function(arg0, arg1, arg2) { // Original name: parse, environment: var8
        _fun49170: for (var _fun49170_ip = 0;;) switch (_fun49170_ip) {
            case 0:
                var4 = arg0;
                var0 = var4[Symbol.iterator];
                var4 = var0().next;
                var3 = var4().value;
                var1 = var0;
                var6 = undefined;
                var2 = var1 === var6;
                var1 = undefined;
                if (var2) {
                    _fun49170_ip = 27;
                    continue _fun49170
                }
            case 24:
                var1 = var3;
            case 27:
                var3 = undefined;
                if (var2) {
                    _fun49170_ip = 57;
                    continue _fun49170
                }
            case 32:
                var5 = var4().value;
                var4 = var0;
                var4 = var4 === var6;
                var3 = undefined;
                var2 = var4;
                if (var4) {
                    _fun49170_ip = 57;
                    continue _fun49170
                }
            case 51:
                var3 = var5;
                var2 = var4;
            case 57:
                if (var2) {
                    _fun49170_ip = 63;
                    continue _fun49170
                }
            case 60:
                var0.return();
            case 63:
                var0 = arg2;
                var2 = var0.emojiContext;
                var0 = var2.getEmoticonByName;
                var2 = var0.bind(var2)(var3);
                var0 = null;
                if (!(var0 == var2)) {
                    _fun49170_ip = 107;
                    continue _fun49170
                }
            case 91:
                var0 = {};
                var3 = 'text';
                var0.type = var3;
                var0.content = var1;
                _fun49170_ip = 199;
                continue _fun49170;
            case 107:
                var1 = {};
                var3 = 'customEmoticon';
                var1.type = var3;
                var4 = var2.animated;
                var9 = '';
                var3 = true;
                if (!(var3 === var4)) {
                    _fun49170_ip = 139;
                    continue _fun49170
                }
            case 135:
                var9 = 'a';
            case 139:
                var13 = var2.name;
                var11 = var2.id;
                var3 = global;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var16 = '<';
                var4 = ':';
                var10 = '>';
                var15 = var9;
                var14 = var4;
                var12 = var4;
                var3 = var16[var6](var15, var14, var13, var12, var11, var10, var9);
                var1.content = var3;
                var1.emoji = var2;
                var0 = var1;
            case 199:
                return var0;
        }
    };
    var11.parse = var12;
    var10.customEmoticons = var11;
    var11 = {};
    var13 = 20;
    var12 = var7[var13];
    var24 = var9.bind(var0)(var12);
    var25 = var11;
    var12 = copyDataProperties(var25, var24);
    var16 = function(arg0, arg1) { // Original name: match, environment: var8
        _fun49171: for (var _fun49171_ip = 0;;) switch (_fun49171_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = var1.textExclusions;
                var2 = 'string';
                var0 = typeof var0;
                if (!(var2 === var0)) {
                    _fun49171_ip = 37;
                    continue _fun49171
                }
            case 23:
                var2 = var1.textExclusions;
                var0 = '';
                if (!(var0 === var2)) {
                    _fun49171_ip = 113;
                    continue _fun49171
                }
            case 37:
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 20;
                var0 = var0[var6];
                var5 = undefined;
                var0 = var4.bind(var5)(var0);
                var4 = var0.match;
                var0 = null;
                var4 = var0 != var4;
                if (!var4) {
                    _fun49171_ip = 111;
                    continue _fun49171
                }
            case 77:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var5 = var4.bind(var5)(var2);
                var4 = var5.match;
                var2 = '';
                var0 = var4.bind(var5)(var3, var1, var2);
            case 111:
                _fun49171_ip = 166;
                continue _fun49171;
            case 113:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 20;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.textMarkupPatternWithExclusions;
                var1 = var1.textExclusions;
                var2 = var2.bind(var4)(var1);
                var1 = var2.exec;
                var0 = var1.bind(var2)(var3);
            case 166:
                return var0;
        }
    };
    var12 = 'match';
    var11[var12] = var16;
    var10.text = var11;
    var11 = {};
    var12 = var7[var14];
    var12 = var9.bind(var0)(var12);
    var12 = var12.RULES;
    var12 = var12.inlineCode;
    var12 = var15.bind(var0)(var12);
    var11.inlineCode = var12;
    var12 = var7[var14];
    var12 = var9.bind(var0)(var12);
    var12 = var12.RULES;
    var12 = var12.codeBlock;
    var12 = var15.bind(var0)(var12);
    var11.codeBlock = var12;
    var12 = {};
    var15 = var7[var4];
    var16 = var9.bind(var0)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var22);
    var12.match = var15;
    var15 = function(arg0, arg1, arg2) { // Original name: parse, environment: var8
        _fun49172: for (var _fun49172_ip = 0;;) switch (_fun49172_ip) {
            case 0:
                var2 = arg0;
                var0 = arg2;
                var5 = var0.isNotification;
                var11 = var0.guild;
                var10 = var0.channelId;
                var7 = undefined;
                var _closure2_slot0 = var7;
                var6 = _closure1_slot15;
                var4 = var6.getUser;
                var1 = 1;
                var1 = var2[var1];
                var6 = var4.bind(var6)(var1);
                var1 = null;
                if (!(var1 != var6)) {
                    _fun49172_ip = 526;
                    continue _fun49172
                }
            case 64:
                var9 = _closure1_slot1;
                var4 = _closure1_slot2;
                var8 = 21;
                var4 = var4[var8];
                var12 = var9.bind(var7)(var4);
                var9 = var12.getUserTag;
                var4 = {};
                var15 = 'always';
                var13 = var15;
                if (!var5) {
                    _fun49172_ip = 123;
                    continue _fun49172
                }
            case 102:
                var14 = _closure1_slot14;
                var14 = var14.enabled;
                var13 = var15;
                if (!var14) {
                    _fun49172_ip = 123;
                    continue _fun49172
                }
            case 117:
                var13 = 'never';
            case 123:
                var4.identifiable = var13;
                var4 = var9.bind(var12)(var6, var4);
                if (var5) {
                    _fun49172_ip = 389;
                    continue _fun49172
                }
            case 140:
                var5 = var6.bot;
                if (var5) {
                    _fun49172_ip = 359;
                    continue _fun49172
                }
            case 152:
                var9 = var1 == var11;
                var5 = undefined;
                if (var9) {
                    _fun49172_ip = 166;
                    continue _fun49172
                }
            case 161:
                var5 = var11.id;
            case 166:
                var5 = var1 != var5;
                var14 = '';
                var12 = var14;
                if (!var5) {
                    _fun49172_ip = 328;
                    continue _fun49172
                }
            case 183:
                var5 = var4.toLowerCase;
                var5 = var5.bind(var4)();
                _closure2_slot0 = var5;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 23;
                var5 = var13[var5];
                var13 = var9.bind(var7)(var5);
                var9 = var13.some;
                var16 = _closure1_slot10;
                var15 = var16.getUnsafeMutableRoles;
                var5 = var11.id;
                var5 = var15.bind(var16)(var5);
                var3 = function(arg0) { // Environment: var3
                    var2 = _closure2_slot0;
                    var1 = var2.startsWith;
                    var0 = arg0;
                    var3 = var0.name;
                    var0 = var3.toLowerCase;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var9.bind(var13)(var5, var3);
                var3 = var14;
                if (!var5) {
                    _fun49172_ip = 325;
                    continue _fun49172
                }
            case 260:
                var13 = var6.discriminator;
                var5 = global;
                var9 = var5.HermesInternal;
                var9 = var9.concat;
                var15 = var9.bind(var14)(var13);
                var14 = var15.padStart;
                var13 = 4;
                var9 = '0';
                var13 = var14.bind(var15)(var13, var9);
                var5 = var5.HermesInternal;
                var9 = var5.concat;
                var5 = '#';
                var3 = var9.bind(var5)(var13);
            case 325:
                var12 = var3;
            case 328:
                var3 = {};
                var5 = global;
                var5 = var5.HermesInternal;
                var9 = var5.concat;
                var5 = '@';
                var5 = var9.bind(var5)(var4, var12);
                var3.content = var5;
                return var3;
            case 359:
                var3 = {};
                var5 = global;
                var5 = var5.HermesInternal;
                var9 = var5.concat;
                var5 = '@';
                var5 = var9.bind(var5)(var4);
                var3.content = var5;
                return var3;
            case 389:
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 22;
                var3 = var9[var3];
                var9 = var5.bind(var7)(var3);
                var5 = var9.getNickname;
                var12 = var1 == var11;
                var3 = undefined;
                if (var12) {
                    _fun49172_ip = 429;
                    continue _fun49172
                }
            case 424:
                var3 = var11.id;
            case 429:
                var5 = var5.bind(var9)(var3, var10, var6);
                if (!(var1 == var5)) {
                    _fun49172_ip = 468;
                    continue _fun49172
                }
            case 440:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                var3 = var3.bind(var7)(var0);
                var0 = var3.getGlobalName;
                var5 = var0.bind(var3)(var6);
            case 468:
                var0 = {};
                if (!(var1 == var5)) {
                    _fun49172_ip = 498;
                    continue _fun49172
                }
            case 474:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '@';
                var1 = var3.bind(var1)(var4);
                _fun49172_ip = 520;
                continue _fun49172;
            case 498:
                var3 = global;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = '@';
                var1 = var4.bind(var3)(var5);
            case 520:
                var0.content = var1;
                return var0;
            case 526:
                var0 = {};
                var1 = 0;
                var1 = var2[var1];
                var0.content = var1;
                return var0;
        }
    };
    var12.parse = var15;
    var11.mention = var12;
    var12 = {};
    var15 = var7[var4];
    var16 = var9.bind(var0)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var21);
    var12.match = var15;
    var15 = function(arg0, arg1, arg2) { // Original name: parse, environment: var8
        _fun49174: for (var _fun49174_ip = 0;;) switch (_fun49174_ip) {
            case 0:
                var3 = arg0;
                var0 = arg2;
                var1 = var0.guild;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun49174_ip = 52;
                    continue _fun49174
                }
            case 17:
                var5 = _closure1_slot10;
                var4 = var5.getRole;
                var2 = var1.id;
                var1 = 1;
                var1 = var3[var1];
                var1 = var4.bind(var5)(var2, var1);
                if (!(var0 == var1)) {
                    _fun49174_ip = 66;
                    continue _fun49174
                }
            case 52:
                var0 = {};
                var2 = 0;
                var2 = var3[var2];
                var0.content = var2;
                return var0;
            case 66:
                var0 = {};
                var3 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '@';
                var1 = var2.bind(var1)(var3);
                var0.content = var1;
                return var0;
        }
    };
    var12.parse = var15;
    var11.roleMention = var12;
    var12 = {};
    var15 = var7[var4];
    var21 = var9.bind(var0)(var15);
    var16 = var21.anyScopeRegex;
    var15 = /^<@\$(\d+)>/;
    var15 = var16.bind(var21)(var15);
    var12.match = var15;
    var15 = function(arg0, arg1, arg2) { // Original name: parse, environment: var8
        _fun49175: for (var _fun49175_ip = 0;;) switch (_fun49175_ip) {
            case 0:
                var4 = arg0;
                var0 = arg2;
                var0 = var0.guild;
                if (!var0) {
                    _fun49175_ip = 95;
                    continue _fun49175
                }
            case 14:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 24;
                var2 = var5[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var5 = var2.GameMentionsGuildExperiment;
                var3 = var5.getCurrentConfig;
                var2 = {};
                var0 = var0.id;
                var2.guildId = var0;
                var0 = 'Message Unparser';
                var2.location = var0;
                var0 = {};
                var7 = true;
                var0.autoTrackExposure = var7;
                var0 = var3.bind(var5)(var2, var0);
                var0 = var0.enabled;
                if (var0) {
                    _fun49175_ip = 109;
                    continue _fun49175
                }
            case 95:
                var0 = {};
                var2 = 0;
                var2 = var4[var2];
                var0.content = var2;
                return var0;
            case 109:
                var3 = _closure1_slot6;
                var2 = var3.getDetectableGame;
                var0 = 1;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = null;
                if (!(var0 == var2)) {
                    _fun49175_ip = 222;
                    continue _fun49175
                }
            case 137:
                var0 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 25;
                var3 = var7[var1];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1["11pdXZ"];
                var4 = var3.bind(var4)(var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '@';
                var1 = var3.bind(var1)(var4);
                var0.content = var1;
                _fun49175_ip = 258;
                continue _fun49175;
            case 222:
                var1 = {};
                var4 = var2.name;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '@';
                var2 = var3.bind(var2)(var4);
                var1.content = var2;
                var0 = var1;
            case 258:
                return var0;
        }
    };
    var12.parse = var15;
    var11.gameMention = var12;
    var12 = {};
    var15 = var7[var4];
    var16 = var9.bind(var0)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var20);
    var12.match = var15;
    var15 = function(arg0) { // Original name: parse, environment: var8
        _fun49176: for (var _fun49176_ip = 0;;) switch (_fun49176_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot5;
                var2 = var4.getChannel;
                var0 = 1;
                var0 = var3[var0];
                var7 = var2.bind(var4)(var0);
                var0 = {};
                var2 = null;
                if (!(var2 != var7)) {
                    _fun49176_ip = 87;
                    continue _fun49176
                }
            case 35:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var5 = var6.computeChannelName;
                var11 = _closure1_slot15;
                var10 = _closure1_slot13;
                var13 = var6;
                var12 = var7;
                var9 = true;
                var8 = true;
                var1 = var13[var5](var12, var11, var10, var9, var8, var7);
                _fun49176_ip = 93;
                continue _fun49176;
            case 87:
                var2 = 0;
                var1 = var3[var2];
            case 93:
                var0.content = var1;
                return var0;
        }
    };
    var12.parse = var15;
    var11.channel = var12;
    var12 = {};
    var15 = var7[var4];
    var16 = var9.bind(var0)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var19);
    var12.match = var15;
    var15 = function(arg0, arg1, arg2) { // Original name: parse, environment: var8
        _fun49177: for (var _fun49177_ip = 0;;) switch (_fun49177_ip) {
            case 0:
                var3 = arg0;
                var0 = var3[Symbol.iterator];
                var3 = var0().next;
                var1 = var3().value;
                var1 = var0;
                var6 = undefined;
                var2 = var1 === var6;
                var4 = undefined;
                if (var2) {
                    _fun49177_ip = 49;
                    continue _fun49177
                }
            case 24:
                var5 = var3().value;
                var1 = var0;
                var1 = var1 === var6;
                var4 = undefined;
                var2 = var1;
                if (var1) {
                    _fun49177_ip = 49;
                    continue _fun49177
                }
            case 43:
                var4 = var5;
                var2 = var1;
            case 49:
                var1 = undefined;
                if (var2) {
                    _fun49177_ip = 79;
                    continue _fun49177
                }
            case 54:
                var5 = var3().value;
                var3 = var0;
                var3 = var3 === var6;
                var1 = undefined;
                var2 = var3;
                if (var3) {
                    _fun49177_ip = 79;
                    continue _fun49177
                }
            case 73:
                var1 = var5;
                var2 = var3;
            case 79:
                if (var2) {
                    _fun49177_ip = 85;
                    continue _fun49177
                }
            case 82:
                var0.return();
            case 85:
                var0 = arg2;
                var6 = var0.guild;
                var5 = _closure1_slot3;
                var2 = var5.getDisambiguatedEmojiContext;
                var3 = null;
                var0 = null;
                if (!var6) {
                    _fun49177_ip = 118;
                    continue _fun49177
                }
            case 113:
                var0 = var6.id;
            case 118:
                var2 = var2.bind(var5)(var0);
                var0 = var2.getById;
                var2 = var0.bind(var2)(var1);
                var0 = {};
                if (!(var3 != var2)) {
                    _fun49177_ip = 145;
                    continue _fun49177
                }
            case 140:
                var4 = var2.name;
            case 145:
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = ':';
                var2 = var3.bind(var2)(var4, var2);
                var0.content = var2;
                var0.id = var1;
                return var0;
        }
    };
    var12.parse = var15;
    var11.emoji = var12;
    var12 = {};
    var15 = var7[var4];
    var19 = var9.bind(var0)(var15);
    var16 = var19.anyScopeRegex;
    var15 = 26;
    var15 = var7[var15];
    var15 = var6.bind(var0)(var15);
    var15 = var15.soundmojiRawFormatRegex;
    var15 = var16.bind(var19)(var15);
    var12.match = var15;
    var15 = function(arg0) { // Original name: parse, environment: var8
        _fun49178: for (var _fun49178_ip = 0;;) switch (_fun49178_ip) {
            case 0:
                var2 = arg0;
                var0 = var2[Symbol.iterator];
                var2 = var0().next;
                var1 = var2().value;
                var1 = var0;
                var4 = undefined;
                var1 = var1 === var4;
                var6 = undefined;
                if (var1) {
                    _fun49178_ip = 49;
                    continue _fun49178
                }
            case 24:
                var5 = var2().value;
                var3 = var0;
                var3 = var3 === var4;
                var6 = undefined;
                var1 = var3;
                if (var3) {
                    _fun49178_ip = 49;
                    continue _fun49178
                }
            case 43:
                var6 = var5;
                var1 = var3;
            case 49:
                var5 = undefined;
                if (var1) {
                    _fun49178_ip = 79;
                    continue _fun49178
                }
            case 54:
                var3 = var2().value;
                var2 = var0;
                var2 = var2 === var4;
                var5 = undefined;
                var1 = var2;
                if (var2) {
                    _fun49178_ip = 79;
                    continue _fun49178
                }
            case 73:
                var5 = var3;
                var1 = var2;
            case 79:
                if (var1) {
                    _fun49178_ip = 85;
                    continue _fun49178
                }
            case 82:
                var0.return();
            case 85:
                var0 = {};
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var12 = '<sound:';
                var10 = ':';
                var8 = '>';
                var11 = var6;
                var9 = var5;
                var1 = var12[var4](var11, var10, var9, var8, var7);
                var0.content = var1;
                return var0;
        }
    };
    var12.parse = var15;
    var11.soundboard = var12;
    var12 = {};
    var15 = var7[var4];
    var16 = var9.bind(var0)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var18);
    var12.match = var15;
    var15 = function() { // Original name: parse, environment: var8
        var0 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 25;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["F+x38C"];
        var2 = var2.bind(var3)(var1);
        var1 = var2.toLowerCase;
        var4 = var1.bind(var2)();
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '<';
        var1 = '>';
        var1 = var3.bind(var2)(var4, var1);
        var0.content = var1;
        return var0;
    };
    var12.parse = var15;
    var11.spoiler = var12;
    var12 = {};
    var15 = var7[var4];
    var16 = var9.bind(var0)(var15);
    var15 = var16.anyScopeRegex;
    var15 = var15.bind(var16)(var17);
    var12.match = var15;
    var15 = function(arg0) { // Original name: parse, environment: var8
        var0 = {};
        var2 = arg0;
        var1 = 1;
        var4 = var2[var1];
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '<id:';
        var1 = '>';
        var1 = var3.bind(var2)(var4, var1);
        var0.content = var1;
        return var0;
    };
    var12.parse = var15;
    var11.staticRouteLink = var12;
    var12 = {};
    var14 = var7[var14];
    var14 = var9.bind(var0)(var14);
    var14 = var14.RULES;
    var24 = var14.timestamp;
    var25 = var12;
    var14 = copyDataProperties(var25, var24);
    var15 = function(arg0) { // Original name: parse, environment: var8
        _fun49181: for (var _fun49181_ip = 0;;) switch (_fun49181_ip) {
            case 0:
                var7 = 0;
                var6 = copyRestArgs(var7);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.RULES;
                var2 = var0.timestamp;
                var1 = var2.parse;
                var0 = new Array(0);
                var7 = var0;
                var5 = 0;
                var3 = arraySpread(var7, var6, var5);
                var7 = var1;
                var6 = var0;
                var5 = var2;
                var2 = apply(var7, var6, var5);
                var1 = var2.type;
                var0 = 'text';
                if (!(var0 !== var1)) {
                    _fun49181_ip = 102;
                    continue _fun49181
                }
            case 88:
                var0 = {};
                var1 = var2.formatted;
                var0.content = var1;
                _fun49181_ip = 116;
                continue _fun49181;
            case 102:
                var1 = {};
                var2 = var2.content;
                var1.content = var2;
                var0 = var1;
            case 116:
                return var0;
        }
    };
    var14 = 'parse';
    var12[var14] = var15;
    var11.timestamp = var12;
    var12 = {};
    var13 = var7[var13];
    var24 = var9.bind(var0)(var13);
    var25 = var12;
    var13 = copyDataProperties(var25, var24);
    var11.text = var12;
    var _closure1_slot20 = var11;
    var13 = new Array(2);
    var13[0] = var10;
    var13[1] = var11;
    var12 = var13.forEach;
    var11 = function(arg0) { // Environment: var8
        var3 = arg0;
        var _closure2_slot0 = var3;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.keys;
        var2 = var1.bind(var2)(var3);
        var1 = var2.forEach;
        var0 = function(arg0, arg1) { // Environment: var0
            var1 = _closure2_slot0;
            var0 = arg0;
            var1 = var1[var0];
            var0 = arg1;
            var1.order = var0;
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var11 = var12.bind(var13)(var11);
    var4 = var7[var4];
    var9 = var9.bind(var0)(var4);
    var4 = var9.parserFor;
    var4 = var4.bind(var9)(var10);
    var _closure1_slot21 = var4;
    var4 = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
    var _closure1_slot22 = var4;
    var4 = {};
    var9 = function(arg0, arg1) { // Original name: parse, environment: var8
        _fun49184: for (var _fun49184_ip = 0;;) switch (_fun49184_ip) {
            case 0:
                var2 = arg0;
                var5 = arguments[2];
                var _closure2_slot0 = var2;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun49184_ip = 20;
                    continue _fun49184
                }
            case 18:
                var5 = undefined;
            case 20:
                var _closure2_slot1 = var4;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun49184_ip = 42;
                    continue _fun49184
                }
            case 30:
                var0 = _closure1_slot28;
                var5 = var0.bind(var4)(var2);
            case 42:
                var0 = {};
                var2 = arg1;
                var0.content = var2;
                var2 = false;
                var0.tts = var2;
                var2 = new Array(0);
                var0.invalidEmojis = var2;
                var2 = new Array(0);
                var0.validNonShortcutEmojis = var2;
                _closure2_slot1 = var0;
                var3 = _closure1_slot27;
                var2 = var0.content;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun49185: for (var _fun49185_ip = 0;;) switch (_fun49185_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 29;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.isEmojiPremiumLocked;
                            var2 = {};
                            var2.emoji = var3;
                            var7 = _closure2_slot0;
                            var2.channel = var7;
                            var6 = _closure1_slot17;
                            var6 = var6.CHAT;
                            var2.intention = var6;
                            var2 = var4.bind(var5)(var2);
                            if (var2) {
                                _fun49185_ip = 103;
                                continue _fun49185
                            }
                        case 75:
                            var2 = arg1;
                            if (var2) {
                                _fun49185_ip = 123;
                                continue _fun49185
                            }
                        case 81:
                            var2 = _closure2_slot1;
                            var4 = var2.validNonShortcutEmojis;
                            var2 = var4.push;
                            var2 = var2.bind(var4)(var3);
                            _fun49185_ip = 123;
                            continue _fun49185;
                        case 103:
                            var1 = _closure2_slot1;
                            var2 = var1.invalidEmojis;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                        case 123:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var5, var1);
                var0.content = var1;
                return var0;
        }
    };
    var4.parse = var9;
    var9 = function(arg0, arg1) { // Original name: parsePreprocessor, environment: var8
        var2 = _closure1_slot28;
        var3 = undefined;
        var1 = arg0;
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot21;
        var0 = arg1;
        var0 = var1.bind(var3)(var0, var2);
        return var0;
    };
    var4.parsePreprocessor = var9;
    var8 = function(arg0, arg1, arg2) { // Original name: unparse, environment: var8
        var4 = _closure1_slot30;
        var3 = undefined;
        var2 = arg0;
        var1 = arg1;
        var0 = arg2;
        var0 = var4.bind(var3)(var2, var1, var0);
        var0 = var0.content;
        return var0;
    };
    var4.unparse = var8;
    var4.unparseWithMeta = var5;
    var5 = 30;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/MessageParser.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.parseAndRebuild = var3;
    var2.createParserState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4699, 4513, 1372, 3443, 1662, 1672, 1665, 1410, 3050, 3059, 3196, 1613, 660, 1616, 4754, 3105, 4745, 5550, 1348, 3063, 4750, 3195, 3921, 22, 3951, 1234, 4757, 5551, 5552, 3067, 2]);