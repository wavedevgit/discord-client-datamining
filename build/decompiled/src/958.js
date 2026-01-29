// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = function(arg0, arg1) { // Original name: truncateTextByBytes, environment: var2
        _fun9856: for (var _fun9856_ip = 0;;) switch (_fun9856_ip) {
            case 0:
                var0 = arg0;
                var11 = arg1;
                var1 = _closure1_slot0;
                var9 = undefined;
                var1 = var1.bind(var9)(var0);
                if (!(!(var1 <= var11))) {
                    _fun9856_ip = 132;
                    continue _fun9856
                }
            case 24:
                var8 = var0.length;
                var7 = 0;
                var12 = var7 <= var8;
                var2 = '';
                var6 = 1;
                var5 = global;
                var4 = 2;
                var3 = 0;
                var1 = var2;
                if (!var12) {
                    _fun9856_ip = 130;
                    continue _fun9856
                }
            case 55:
                var14 = var5.Math;
                var13 = var14.floor;
                var12 = var3 + var8;
                var12 = var12 / var4;
                var14 = var13.bind(var14)(var12);
                var12 = var0.slice;
                var13 = var12.bind(var0)(var7, var14);
                var12 = _closure1_slot0;
                var12 = var12.bind(var9)(var13);
                if (!(!(var12 <= var11))) {
                    _fun9856_ip = 110;
                    continue _fun9856
                }
            case 104:
                var12 = var14 - var6;
                _fun9856_ip = 120;
                continue _fun9856;
            case 110:
                var3 = var14 + var6;
                var12 = var8;
                var2 = var13;
            case 120:
                var8 = var12;
                var1 = var2;
                if (var3 <= var8) {
                    _fun9856_ip = 55;
                    continue _fun9856
                }
            case 130:
                return var1;
            case 132:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = function(arg0) { // Original name: getPartText, environment: var2
        _fun9857: for (var _fun9857_ip = 0;;) switch (_fun9857_ip) {
            case 0:
                var1 = arg0;
                var3 = 'string';
                var2 = typeof var1;
                var0 = var1;
                if (!(var3 !== var2)) {
                    _fun9857_ip = 22;
                    continue _fun9857
                }
            case 17:
                var0 = var1.text;
            case 22:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0, arg1) { // Original name: withPartText, environment: var2
        _fun9858: for (var _fun9858_ip = 0;;) switch (_fun9858_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                var3 = 'string';
                var2 = typeof var5;
                var0 = var1;
                if (!(var3 !== var2)) {
                    _fun9858_ip = 48;
                    continue _fun9858
                }
            case 20:
                var2 = global;
                var4 = var2.Object;
                var3 = var4.assign;
                var2 = {};
                var2.text = var1;
                var1 = {};
                var0 = var3.bind(var4)(var1, var5, var2);
            case 48:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0, arg1) { // Original name: truncateSingleMessage, environment: var2
        _fun9859: for (var _fun9859_ip = 0;;) switch (_fun9859_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                if (!var6) {
                    _fun9859_ip = 23;
                    continue _fun9859
                }
            case 9:
                var1 = 'object';
                var0 = typeof var6;
                var2 = var1 === var0;
                if (var2) {
                    _fun9859_ip = 32;
                    continue _fun9859
                }
            case 23:
                var0 = new Array(0);
                _fun9859_ip = 287;
                continue _fun9859;
            case 32:
                var1 = null;
                var1 = var1 !== var6;
                var3 = var1;
                if (!var1) {
                    _fun9859_ip = 47;
                    continue _fun9859
                }
            case 44:
                var3 = var2;
            case 47:
                if (!var3) {
                    _fun9859_ip = 58;
                    continue _fun9859
                }
            case 50:
                var4 = 'content';
                var3 = var4 in var6;
            case 58:
                if (!var3) {
                    _fun9859_ip = 77;
                    continue _fun9859
                }
            case 61:
                var4 = var6.content;
                var7 = 'string';
                var4 = typeof var4;
                var3 = var7 === var4;
            case 77:
                if (var3) {
                    _fun9859_ip = 170;
                    continue _fun9859
                }
            case 80:
                if (!var1) {
                    _fun9859_ip = 86;
                    continue _fun9859
                }
            case 83:
                var1 = var2;
            case 86:
                if (!var1) {
                    _fun9859_ip = 97;
                    continue _fun9859
                }
            case 89:
                var2 = 'parts';
                var1 = var2 in var6;
            case 97:
                if (!var1) {
                    _fun9859_ip = 124;
                    continue _fun9859
                }
            case 100:
                var2 = global;
                var4 = var2.Array;
                var3 = var4.isArray;
                var2 = var6.parts;
                var1 = var3.bind(var4)(var2);
            case 124:
                if (!var1) {
                    _fun9859_ip = 144;
                    continue _fun9859
                }
            case 127:
                var2 = var6.parts;
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
            case 144:
                if (var1) {
                    _fun9859_ip = 153;
                    continue _fun9859
                }
            case 147:
                var1 = new Array(0);
                _fun9859_ip = 168;
                continue _fun9859;
            case 153:
                var3 = function(arg0, arg1) { // Original name: truncatePartsMessage, environment: var2
                    _fun9860: for (var _fun9860_ip = 0;;) switch (_fun9860_ip) {
                        case 0:
                            var5 = arg0;
                            var7 = undefined;
                            var8 = undefined;
                            var1 = undefined;
                            var9 = undefined;
                            var10 = undefined;
                            var11 = undefined;
                            var12 = undefined;
                            var13 = var5.parts;
                            var2 = var13.map;
                            var0 = function(arg0) { // Environment: var0
                                var3 = _closure1_slot4;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = '';
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var0 = var2.bind(var13)(var0);
                            var3 = _closure1_slot1;
                            var2 = global;
                            var15 = var2.Object;
                            var14 = var15.assign;
                            var4 = {};
                            var4.parts = var0;
                            var0 = {};
                            var0 = var14.bind(var15)(var0, var5, var4);
                            var3 = var3.bind(var7)(var0);
                            var0 = arg1;
                            var0 = var0 - var3;
                            var8 = var0;
                            var3 = 0;
                            if (!(!(var0 <= var3))) {
                                _fun9860_ip = 327;
                                continue _fun9860
                            }
                        case 100:
                            var1 = new Array(0);
                            var0 = var13;
                            var4 = var0[Symbol.iterator];
                            var0 = var4().next;
                        case 110:
                            var14 = var0().value;
                            var13 = var4;
                            if (!(var13 !== var7)) {
                                _fun9860_ip = 269;
                                continue _fun9860
                            }
                        case 124: // try_start_0
                            var9 = var14;
                            var13 = _closure1_slot3;
                            var14 = var13.bind(var7)(var14);
                            var10 = var14;
                            var13 = _closure1_slot0;
                            var14 = var13.bind(var7)(var14);
                            var11 = var14;
                            var13 = var8;
                            if (!(!(var14 <= var13))) {
                                _fun9860_ip = 231;
                                continue _fun9860
                            }
                        case 158:
                            var13 = var1;
                            var13 = var13.length;
                            if (!(var3 !== var13)) {
                                _fun9860_ip = 175;
                                continue _fun9860
                            }
                        case 170: // try_end0
                            var4.return();
                            _fun9860_ip = 269;
                            continue _fun9860;
                        case 175: // try_start_1
                            var15 = _closure1_slot2;
                            var14 = var10;
                            var13 = var8;
                            var13 = var15.bind(var7)(var14, var13);
                            var12 = var13;
                            if (!var13) {
                                _fun9860_ip = 226;
                                continue _fun9860
                            }
                        case 197:
                            var15 = var1;
                            var14 = var15.push;
                            var17 = _closure1_slot4;
                            var16 = var9;
                            var13 = var12;
                            var13 = var17.bind(var7)(var16, var13);
                            var13 = var14.bind(var15)(var13);
                        case 226: // try_end1
                            var4.return();
                            _fun9860_ip = 269;
                            continue _fun9860;
                        case 231: // try_start_2
                            var15 = var1;
                            var14 = var15.push;
                            var13 = var9;
                            var13 = var14.bind(var15)(var13);
                            var14 = var8;
                            var13 = var11;
                            var8 = var14 - var13;
                        case 257: // try_end2
                            _fun9860_ip = 110;
                            continue _fun9860;
                        case 262: // catch_target0 // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 0);
                            var4.return();
                            throw var0;
                        case 269:
                            var0 = var1;
                            var0 = var0.length;
                            if (!(!(var0 > var3))) {
                                _fun9860_ip = 287;
                                continue _fun9860
                            }
                        case 281:
                            var0 = new Array(0);
                            _fun9860_ip = 325;
                            continue _fun9860;
                        case 287:
                            var4 = var2.Object;
                            var3 = var4.assign;
                            var2 = {};
                            var2.parts = var1;
                            var1 = {};
                            var2 = var3.bind(var4)(var1, var5, var2);
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 325:
                            return var0;
                        case 327:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var2 = undefined;
                var1 = var3.bind(var2)(var6, var5);
            case 168:
                _fun9859_ip = 284;
                continue _fun9859;
            case 170:
                var3 = global;
                var8 = var3.Object;
                var7 = var8.assign;
                var4 = {};
                var2 = '';
                var4.content = var2;
                var2 = {};
                var8 = var7.bind(var8)(var2, var6, var4);
                var4 = _closure1_slot1;
                var7 = undefined;
                var4 = var4.bind(var7)(var8);
                var5 = var5 - var4;
                var4 = 0;
                if (!(!(var5 <= var4))) {
                    _fun9859_ip = 277;
                    continue _fun9859
                }
            case 226:
                var4 = _closure1_slot2;
                var2 = var6.content;
                var2 = var4.bind(var7)(var2, var5);
                var5 = var3.Object;
                var4 = var5.assign;
                var3 = {};
                var3.content = var2;
                var2 = {};
                var3 = var4.bind(var5)(var2, var6, var3);
                var2 = new Array(1);
                var2[0] = var3;
                _fun9859_ip = 281;
                continue _fun9859;
            case 277:
                var2 = new Array(0);
            case 281:
                var1 = var2;
            case 284:
                var0 = var1;
            case 287:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: truncateMessagesByBytes, environment: var2
        _fun9862: for (var _fun9862_ip = 0;;) switch (_fun9862_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var0);
                if (!var1) {
                    _fun9862_ip = 200;
                    continue _fun9862
                }
            case 30:
                var1 = var0.length;
                var10 = 0;
                if (!(var10 !== var1)) {
                    _fun9862_ip = 200;
                    continue _fun9862
                }
            case 44:
                var1 = _closure1_slot1;
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                if (!(!(var1 <= var5))) {
                    _fun9862_ip = 198;
                    continue _fun9862
                }
            case 65:
                var3 = var0.map;
                var1 = _closure1_slot1;
                var9 = var3.bind(var0)(var1);
                var7 = var0.length;
                var3 = var0.length;
                var6 = 1;
                var8 = var3 - var6;
                var3 = var7;
                var1 = 0;
                if (!(var8 >= var1)) {
                    _fun9862_ip = 152;
                    continue _fun9862
                }
            case 105:
                var11 = var9[var8];
                if (!var11) {
                    _fun9862_ip = 123;
                    continue _fun9862
                }
            case 112:
                var12 = var1 + var11;
                var3 = var7;
                if (!(!(var12 > var5))) {
                    _fun9862_ip = 152;
                    continue _fun9862
                }
            case 123:
                var12 = var1;
                if (!var11) {
                    _fun9862_ip = 133;
                    continue _fun9862
                }
            case 129:
                var12 = var1 + var11;
            case 133:
                var11 = var8 - 1;
                var1 = var12;
                var7 = var8;
                var3 = var7;
                var8 = var11;
                if (var8 >= var10) {
                    _fun9862_ip = 105;
                    continue _fun9862
                }
            case 152:
                var1 = var0.length;
                if (!(var3 !== var1)) {
                    _fun9862_ip = 173;
                    continue _fun9862
                }
            case 161:
                var1 = var0.slice;
                var1 = var1.bind(var0)(var3);
                _fun9862_ip = 196;
                continue _fun9862;
            case 173:
                var3 = _closure1_slot5;
                var2 = var0.length;
                var2 = var2 - var6;
                var2 = var0[var2];
                var1 = var3.bind(var4)(var2, var5);
            case 196:
                return var1;
            case 198:
                return var0;
            case 200:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var3 = function(arg0) { // Original name: utf8Bytes, environment: var2
        var0 = global;
        var0 = var0.TextEncoder;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var4 = var1;
        var0 = new var4[var0](var3);
        var2 = var0 instanceof Object ? var0 : var1;
        var1 = var2.encode;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = var0.length;
        return var0;
    };
    var _closure1_slot0 = var3;
    var3 = function(arg0) { // Original name: jsonBytes, environment: var2
        var2 = _closure1_slot0;
        var0 = global;
        var3 = var0.JSON;
        var1 = var3.stringify;
        var0 = arg0;
        var1 = var1.bind(var3)(var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot1 = var3;
    var3 = 20000;
    var1.DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT = var3;
    var3 = function(arg0) { // Original name: truncateGenAiMessages, environment: var2
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var0 = 20000;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1.truncateGenAiMessages = var3;
    var2 = function(arg0) { // Original name: truncateGenAiStringInput, environment: var2
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = arg0;
        var0 = 20000;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1.truncateGenAiStringInput = var2;
    var1.truncateMessagesByBytes = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);