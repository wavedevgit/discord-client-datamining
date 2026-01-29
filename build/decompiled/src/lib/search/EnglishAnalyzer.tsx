// lib/search/EnglishAnalyzer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun106370: for (var _fun106370_ip = 0;;) switch (_fun106370_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun106370_ip = 45;
                    continue _fun106370
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun106370_ip = 54;
                    continue _fun106370
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun106370_ip = 344;
                    continue _fun106370
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun106370_ip = 322;
                    continue _fun106370
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun106370_ip = 282;
                    continue _fun106370
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun106370_ip = 269;
                    continue _fun106370
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
                    _fun106370_ip = 162;
                    continue _fun106370
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun106370_ip = 178;
                    continue _fun106370
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun106370_ip = 248;
                    continue _fun106370
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun106370_ip = 248;
                    continue _fun106370
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun106370_ip = 233;
                    continue _fun106370
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun106370_ip = 246;
                    continue _fun106370
                }
            case 233:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun106370_ip = 264;
                continue _fun106370;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun106370_ip = 282;
                continue _fun106370;
            case 269:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun106370_ip = 322;
                    continue _fun106370
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
                    _fun106370_ip = 329;
                    continue _fun106370
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun106371: for (var _fun106371_ip = 0;;) switch (_fun106371_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun106371_ip = 56;
                                continue _fun106371
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
                            _fun106371_ip = 67;
                            continue _fun106371;
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
    var _closure1_slot4 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun106372: for (var _fun106372_ip = 0;;) switch (_fun106372_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun106372_ip = 23;
                    continue _fun106372
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun106372_ip = 33;
                    continue _fun106372
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
                    _fun106372_ip = 70;
                    continue _fun106372
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun106372_ip = 55;
                    continue _fun106372
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0) { // Original name: stripPossessive, environment: var1
        var3 = arg0;
        var2 = var3.replace;
        var1 = /('|\u2019|\uFF07)(s|S)$/;
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: lowercase, environment: var1
        var1 = arg0;
        var0 = var1.toLowerCase;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: isStopWord, environment: var1
        var2 = _closure1_slot3;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0) { // Original name: isBlank, environment: var1
        var0 = arg0;
        var1 = var0.length;
        var0 = 0;
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot9 = var0;
    var5 = function(arg0) { // Original name: analyze, environment: var1
        var6 = arg0;
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 0;
        var1 = var5[var1];
        var4 = undefined;
        var2 = var2.bind(var4)(var1);
        var3 = var6.split;
        var1 = /\W+/;
        var1 = var3.bind(var6)(var1);
        var3 = var2.bind(var4)(var1);
        var2 = var3.map;
        var1 = _closure1_slot6;
        var3 = var2.bind(var3)(var1);
        var2 = var3.reject;
        var1 = _closure1_slot9;
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = _closure1_slot7;
        var3 = var2.bind(var3)(var1);
        var2 = var3.reject;
        var1 = _closure1_slot8;
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var3 = _closure1_slot0;
        var0 = 1;
        var0 = var5[var0];
        var0 = var3.bind(var4)(var0);
        var0 = var0.snowballStem;
        var1 = var1.bind(var2)(var0);
        var0 = var1.value;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot10 = var5;
    var4 = function(arg0, arg1) { // Original name: shouldHighlight, environment: var1
        _fun106378: for (var _fun106378_ip = 0;;) switch (_fun106378_ip) {
            case 0:
                var2 = arg1;
                var1 = arguments[2];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun106378_ip = 14;
                    continue _fun106378
                }
            case 12:
                var1 = false;
            case 14:
                var3 = _closure1_slot9;
                var6 = _closure1_slot7;
                var7 = _closure1_slot6;
                var5 = arg0;
                var5 = var7.bind(var4)(var5);
                var6 = var6.bind(var4)(var5);
                var3 = var3.bind(var4)(var6);
                if (var3) {
                    _fun106378_ip = 188;
                    continue _fun106378
                }
            case 53:
                var3 = _closure1_slot8;
                var3 = var3.bind(var4)(var6);
                if (var3) {
                    _fun106378_ip = 184;
                    continue _fun106378
                }
            case 65:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 1;
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.snowballStem;
                var3 = var3.bind(var5)(var6);
                if (var1) {
                    _fun106378_ip = 111;
                    continue _fun106378
                }
            case 99:
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                return var1;
            case 111:
                var1 = _closure1_slot4;
                var0 = var2.values;
                var0 = var0.bind(var2)();
                var2 = var1.bind(var4)(var0);
                var1 = var2.bind(var4)();
                var0 = var1.done;
                if (var0) {
                    _fun106378_ip = 180;
                    continue _fun106378
                }
            case 141:
                var5 = var1.value;
                var0 = var3.includes;
                var0 = var0.bind(var3)(var5);
                if (var0) {
                    _fun106378_ip = 176;
                    continue _fun106378
                }
            case 159:
                var5 = var2.bind(var4)();
                var0 = var5.done;
                var1 = var5;
                if (var0) {
                    _fun106378_ip = 180;
                    continue _fun106378
                }
            case 174:
                _fun106378_ip = 141;
                continue _fun106378;
            case 176:
                var0 = true;
                return var0;
            case 180:
                var0 = false;
                return var0;
            case 184:
                var0 = false;
                return var0;
            case 188:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var3 = function(arg0, arg1, arg2) { // Original name: highlightAST, environment: var1
        _fun106379: for (var _fun106379_ip = 0;;) switch (_fun106379_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var5 = arg2;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var5;
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun106379_ip = 317;
                    continue _fun106379
                }
            case 43:
                var3 = var0.type;
                var2 = 'list';
                if (!(var2 !== var3)) {
                    _fun106379_ip = 292;
                    continue _fun106379
                }
            case 59:
                var2 = var0.content;
                var3 = 'string';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun106379_ip = 88;
                    continue _fun106379
                }
            case 75:
                var3 = var0.type;
                var2 = 'codeBlock';
                if (!(var2 === var3)) {
                    _fun106379_ip = 128;
                    continue _fun106379
                }
            case 88:
                var3 = var0.content;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun106379_ip = 334;
                    continue _fun106379
                }
            case 102:
                var4 = _closure1_slot12;
                var3 = var0.content;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var6, var5);
                _fun106379_ip = 334;
                continue _fun106379;
            case 128:
                var2 = new Array(0);
                var _closure2_slot2 = var2;
                var3 = '';
                var _closure2_slot3 = var3;
                var5 = var0.content;
                var4 = var5.split;
                var3 = /(\W+)/g;
                var5 = var4.bind(var5)(var3);
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var1
                    _fun106382: for (var _fun106382_ip = 0;;) switch (_fun106382_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = _closure1_slot11;
                            var3 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var3 = var4.bind(var0)(var5, var3, var1);
                            var1 = _closure2_slot3;
                            if (var3) {
                                _fun106382_ip = 47;
                                continue _fun106382
                            }
                        case 37:
                            var3 = var1 + var5;
                            _closure2_slot3 = var3;
                            _fun106382_ip = 126;
                            continue _fun106382;
                        case 47:
                            var3 = var1.length;
                            var1 = 0;
                            if (!(var3 > var1)) {
                                _fun106382_ip = 90;
                                continue _fun106382
                            }
                        case 58:
                            var4 = _closure2_slot2;
                            var3 = var4.push;
                            var1 = {};
                            var6 = 'text';
                            var1.type = var6;
                            var6 = _closure2_slot3;
                            var1.content = var6;
                            var1 = var3.bind(var4)(var1);
                        case 90:
                            var4 = _closure2_slot2;
                            var3 = var4.push;
                            var1 = {};
                            var6 = 'highlight';
                            var1.type = var6;
                            var1.content = var5;
                            var1 = var3.bind(var4)(var1);
                            var1 = '';
                            _closure2_slot3 = var1;
                        case 126:
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var3 = var2.length;
                var4 = 0;
                if (!(var3 > var4)) {
                    _fun106379_ip = 334;
                    continue _fun106379
                }
            case 204:
                var3 = _closure2_slot3;
                var3 = var3.length;
                if (!(var3 > var4)) {
                    _fun106379_ip = 245;
                    continue _fun106379
                }
            case 217:
                var4 = var2.push;
                var3 = {};
                var5 = 'text';
                var3.type = var5;
                var5 = _closure2_slot3;
                var3.content = var5;
                var3 = var4.bind(var2)(var3);
            case 245:
                var4 = var0.type;
                var3 = 'text';
                if (!(var3 !== var4)) {
                    _fun106379_ip = 284;
                    continue _fun106379
                }
            case 258:
                var4 = {};
                var4.type = var3;
                var4.content = var2;
                var3 = new Array(1);
                var3[0] = var4;
                var0.content = var3;
                _fun106379_ip = 334;
                continue _fun106379;
            case 284:
                var0.content = var2;
                _fun106379_ip = 334;
                continue _fun106379;
            case 292:
                var4 = var0.items;
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var4 = _closure1_slot12;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var0, var3, var2);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                _fun106379_ip = 334;
                continue _fun106379;
            case 317:
                var2 = var0.forEach;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var4 = _closure1_slot12;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var0, var3, var2);
                    return var0;
                };
                var1 = var2.bind(var0)(var1);
            case 334:
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var8 = true;
    var9.value = var8;
    var8 = '__esModule';
    var8 = var10.bind(var11)(var2, var8, var9);
    var9 = var0.Set;
    var0 = var9.prototype;
    var8 = Object.create(var0, {
        constructor: {
            value: var9
        }
    });
    var14 = ['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with'];
    var15 = var8;
    var0 = new var15[var9](var14, var13);
    var0 = var0 instanceof Object ? var0 : var8;
    var _closure1_slot3 = var0;
    var0 = 3;
    var6 = var6[var0];
    var0 = undefined;
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/search/EnglishAnalyzer.tsx';
    var6 = var7.bind(var8)(var6);
    var2.analyze = var5;
    var2.shouldHighlight = var4;
    var2.highlightAST = var3;
    var1 = function(arg0) { // Original name: createASTHighlighter, environment: var1
        _fun106383: for (var _fun106383_ip = 0;;) switch (_fun106383_ip) {
            case 0:
                var4 = arg0;
                var1 = arguments[1];
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun106383_ip = 16;
                    continue _fun106383
                }
            case 14:
                var1 = false;
            case 16:
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var2;
                var _closure2_slot2 = var2;
                var5 = var4.length;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var8 = 2;
                var3 = var3[var8];
                var3 = var6.bind(var2)(var3);
                var3 = var3.SEARCH_PARTIAL_NAME_MATCH_MIN_QUERY_LENGTH;
                var3 = var5 >= var3;
                if (!var3) {
                    _fun106383_ip = 101;
                    continue _fun106383
                }
            case 69:
                var6 = var4.length;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var2)(var5);
                var5 = var5.SEARCH_PARTIAL_NAME_MATCH_MAX_QUERY_LENGTH;
                var3 = var6 <= var5;
            case 101:
                _closure2_slot1 = var3;
                var3 = global;
                var3 = var3.Set;
                var1 = _closure1_slot10;
                var9 = var1.bind(var2)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var2;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                _closure2_slot2 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun106384: for (var _fun106384_ip = 0;;) switch (_fun106384_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot12;
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot1;
                            if (!var2) {
                                _fun106384_ip = 28;
                                continue _fun106384
                            }
                        case 24:
                            var2 = _closure2_slot0;
                        case 28:
                            var1 = undefined;
                            var1 = var4.bind(var1)(var0, var3, var2);
                            return var0;
                    }
                };
                return var0;
        }
    };
    var2.createASTHighlighter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [22, 13813, 13815, 2]);