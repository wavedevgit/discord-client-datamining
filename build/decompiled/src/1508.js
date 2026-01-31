// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var2;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        _fun17199: for (var _fun17199_ip = 0;;) switch (_fun17199_ip) {
            case 0:
                var0 = arg0;
                var2 = 'string';
                var1 = typeof var0;
                if (!(var2 === var1)) {
                    _fun17199_ip = 30;
                    continue _fun17199
                }
            case 14:
                var1 = var0.length;
                var0 = 1;
                if (!(var0 === var1)) {
                    _fun17199_ip = 30;
                    continue _fun17199
                }
            case 26:
                var0 = undefined;
                return var0;
            case 30:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'arrayFormatSeparator must be single character string';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun17200: for (var _fun17200_ip = 0;;) switch (_fun17200_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var2 = var1.encode;
                var0 = var4;
                if (!var2) {
                    _fun17200_ip = 77;
                    continue _fun17200
                }
            case 18:
                var1 = var1.strict;
                if (var1) {
                    _fun17200_ip = 44;
                    continue _fun17200
                }
            case 27:
                var1 = global;
                var2 = var1.encodeURIComponent;
                var1 = undefined;
                var1 = var2.bind(var1)(var4);
                _fun17200_ip = 74;
                continue _fun17200;
            case 44:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var1 = var2.bind(var3)(var4);
            case 74:
                var0 = var1;
            case 77:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1() {
        _fun17201: for (var _fun17201_ip = 0;;) switch (_fun17201_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var1 = var0.decode;
                var0 = var3;
                if (!var1) {
                    _fun17201_ip = 48;
                    continue _fun17201
                }
            case 18:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var0 = var1.bind(var2)(var3);
            case 48:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun17202: for (var _fun17202_ip = 0;;) switch (_fun17202_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var3 = global;
                var4 = var3.Array;
                var0 = var4.isArray;
                var0 = var0.bind(var4)(var2);
                if (var0) {
                    _fun17202_ip = 107;
                    continue _fun17202
                }
            case 30:
                var5 = 'object';
                var4 = typeof var2;
                var0 = var2;
                if (!(var5 === var4)) {
                    _fun17202_ip = 105;
                    continue _fun17202
                }
            case 44:
                var5 = _closure1_slot10;
                var4 = var3.Object;
                var3 = var4.keys;
                var4 = var3.bind(var4)(var2);
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.sort;
                var3 = function(arg0, arg1) { // Environment: var1
                    var0 = global;
                    var2 = var0.Number;
                    var3 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    var2 = var0.Number;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var0);
                    var0 = var1 - var0;
                    return var0;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var0 = var3.bind(var4)(var1);
            case 105:
                _fun17202_ip = 117;
                continue _fun17202;
            case 107:
                var1 = var2.sort;
                var0 = var1.bind(var2)();
            case 117:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun17205: for (var _fun17205_ip = 0;;) switch (_fun17205_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.indexOf;
                var0 = '#';
                var3 = var1.bind(var4)(var0);
                var1 = -1;
                var0 = var4;
                if (!(var1 !== var3)) {
                    _fun17205_ip = 44;
                    continue _fun17205
                }
            case 31:
                var2 = var4.slice;
                var1 = 0;
                var0 = var2.bind(var4)(var1, var3);
            case 44:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var4 = function arg0() {
        _fun17206: for (var _fun17206_ip = 0;;) switch (_fun17206_ip) {
            case 0:
                var2 = _closure1_slot11;
                var1 = undefined;
                var0 = arg0;
                var3 = var2.bind(var1)(var0);
                var1 = var3.indexOf;
                var0 = '?';
                var4 = var1.bind(var3)(var0);
                var0 = '';
                var1 = -1;
                if (!(var1 !== var4)) {
                    _fun17206_ip = 63;
                    continue _fun17206
                }
            case 46:
                var2 = var3.slice;
                var1 = 1;
                var1 = var4 + var1;
                var0 = var2.bind(var3)(var1);
            case 63:
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var0 = function arg0, arg1() {
        _fun17207: for (var _fun17207_ip = 0;;) switch (_fun17207_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = var1.parseNumbers;
                if (!var0) {
                    _fun17207_ip = 92;
                    continue _fun17207
                }
            case 15:
                var0 = global;
                var6 = var0.Number;
                var5 = var6.isNaN;
                var4 = var0.Number;
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var4 = var5.bind(var6)(var4);
                if (var4) {
                    _fun17207_ip = 92;
                    continue _fun17207
                }
            case 50:
                var5 = 'string';
                var4 = typeof var2;
                if (!(var5 === var4)) {
                    _fun17207_ip = 92;
                    continue _fun17207
                }
            case 61:
                var4 = var2.trim;
                var5 = var4.bind(var2)();
                var4 = '';
                if (!(var4 !== var5)) {
                    _fun17207_ip = 92;
                    continue _fun17207
                }
            case 79:
                var0 = var0.Number;
                var0 = var0.bind(var3)(var2);
                _fun17207_ip = 179;
                continue _fun17207;
            case 92:
                var1 = var1.parseBooleans;
                var1 = !var1;
                if (var1) {
                    _fun17207_ip = 110;
                    continue _fun17207
                }
            case 104:
                var3 = null;
                var1 = var3 === var2;
            case 110:
                if (var1) {
                    _fun17207_ip = 155;
                    continue _fun17207
                }
            case 113:
                var3 = var2.toLowerCase;
                var4 = var3.bind(var2)();
                var3 = 'true';
                var3 = var3 !== var4;
                if (!var3) {
                    _fun17207_ip = 152;
                    continue _fun17207
                }
            case 134:
                var4 = var2.toLowerCase;
                var5 = var4.bind(var2)();
                var4 = 'false';
                var3 = var4 !== var5;
            case 152:
                var1 = var3;
            case 155:
                var0 = var2;
                if (var1) {
                    _fun17207_ip = 179;
                    continue _fun17207
                }
            case 161:
                var1 = var2.toLowerCase;
                var2 = var1.bind(var2)();
                var1 = 'true';
                var0 = var1 === var2;
            case 179:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var3 = function arg0, arg1() {
        _fun17208: for (var _fun17208_ip = 0;;) switch (_fun17208_ip) {
            case 0:
                var8 = arg0;
                var15 = arg1;
                var3 = var15;
                var11 = undefined;
                var20 = undefined;
                var0 = undefined;
                var21 = undefined;
                var22 = undefined;
                var23 = undefined;
                var12 = undefined;
                var13 = undefined;
                var9 = _closure1_slot7;
                var2 = global;
                var14 = var2.Object;
                var6 = var14.assign;
                var5 = true;
                var7 = false;
                var4 = {
                    'decode': true,
                    'sort': true,
                    'arrayFormat': 'none',
                    'arrayFormatSeparator': ',',
                    'parseNumbers': false,
                    'parseBooleans': false
                };
                var6 = var6.bind(var14)(var4, var15);
                var3 = var6;
                var4 = var6.arrayFormatSeparator;
                var4 = var9.bind(var11)(var4);
                var4 = function arg0() {
                    _fun17209: for (var _fun17209_ip = 0;;) switch (_fun17209_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = var1.arrayFormat;
                            var1 = 'index';
                            if (!(var1 !== var2)) {
                                _fun17209_ip = 104;
                                continue _fun17209
                            }
                        case 23:
                            var1 = 'bracket';
                            if (!(var1 !== var2)) {
                                _fun17209_ip = 97;
                                continue _fun17209
                            }
                        case 33:
                            var1 = 'colon-list-separator';
                            if (!(var1 !== var2)) {
                                _fun17209_ip = 90;
                                continue _fun17209
                            }
                        case 43:
                            var1 = 'comma';
                            if (!(var1 !== var2)) {
                                _fun17209_ip = 83;
                                continue _fun17209
                            }
                        case 51:
                            var1 = 'separator';
                            if (!(var1 !== var2)) {
                                _fun17209_ip = 83;
                                continue _fun17209
                            }
                        case 59:
                            var1 = 'bracket-separator';
                            if (!(var1 !== var2)) {
                                _fun17209_ip = 76;
                                continue _fun17209
                            }
                        case 69:
                            var1 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun17217: for (var _fun17217_ip = 0;;) switch (_fun17217_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var6 = arg1;
                                        var2 = arg2;
                                        var1 = var2[var3];
                                        var0 = undefined;
                                        if (!(var0 === var1)) {
                                            _fun17217_ip = 25;
                                            continue _fun17217
                                        }
                                    case 19:
                                        var2[var3] = var6;
                                        _fun17217_ip = 48;
                                        continue _fun17217;
                                    case 25:
                                        var5 = new Array(0);
                                        var4 = var5.concat;
                                        var1 = var2[var3];
                                        var1 = var4.bind(var5)(var1, var6);
                                        var2[var3] = var1;
                                    case 48:
                                        return var0;
                                }
                            };
                            return var1;
                        case 76:
                            var1 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun17215: for (var _fun17215_ip = 0;;) switch (_fun17215_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var4 = arg1;
                                        var2 = arg2;
                                        var1 = /(\[\])$/;
                                        var0 = var1.test;
                                        var0 = var0.bind(var1)(var6);
                                        var5 = var6.replace;
                                        var3 = /\[\]$/;
                                        var1 = '';
                                        var1 = var5.bind(var6)(var3, var1);
                                        if (var0) {
                                            _fun17215_ip = 99;
                                            continue _fun17215
                                        }
                                    case 65:
                                        var0 = var4;
                                        if (!var0) {
                                            _fun17215_ip = 93;
                                            continue _fun17215
                                        }
                                    case 71:
                                        var6 = _closure1_slot9;
                                        var5 = _closure3_slot0;
                                        var3 = undefined;
                                        var0 = var6.bind(var3)(var4, var5);
                                    case 93:
                                        var2[var1] = var0;
                                        _fun17215_ip = 190;
                                        continue _fun17215;
                                    case 99:
                                        var0 = null;
                                        if (!(var0 !== var4)) {
                                            _fun17215_ip = 147;
                                            continue _fun17215
                                        }
                                    case 105:
                                        var3 = var4.split;
                                        var0 = _closure3_slot0;
                                        var0 = var0.arrayFormatSeparator;
                                        var4 = var3.bind(var4)(var0);
                                        var3 = var4.map;
                                        var0 = function(arg0) { // Environment: var0
                                            var3 = _closure1_slot9;
                                            var2 = _closure3_slot0;
                                            var1 = undefined;
                                            var0 = arg0;
                                            var0 = var3.bind(var1)(var0, var2);
                                            return var0;
                                        };
                                        var5 = var3.bind(var4)(var0);
                                        _fun17215_ip = 151;
                                        continue _fun17215;
                                    case 147:
                                        var5 = new Array(0);
                                    case 151:
                                        var3 = var2[var1];
                                        var0 = undefined;
                                        if (!(var0 === var3)) {
                                            _fun17215_ip = 167;
                                            continue _fun17215
                                        }
                                    case 161:
                                        var2[var1] = var5;
                                        _fun17215_ip = 190;
                                        continue _fun17215;
                                    case 167:
                                        var4 = new Array(0);
                                        var3 = var4.concat;
                                        var0 = var2[var1];
                                        var0 = var3.bind(var4)(var0, var5);
                                        var2[var1] = var0;
                                    case 190:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var1;
                        case 83:
                            var1 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun17213: for (var _fun17213_ip = 0;;) switch (_fun17213_ip) {
                                    case 0:
                                        var6 = arg1;
                                        var1 = 'string';
                                        var0 = typeof var6;
                                        var0 = var1 === var0;
                                        var1 = var0;
                                        if (!var0) {
                                            _fun17213_ip = 43;
                                            continue _fun17213
                                        }
                                    case 20:
                                        var3 = var6.includes;
                                        var2 = _closure3_slot0;
                                        var2 = var2.arrayFormatSeparator;
                                        var1 = var3.bind(var6)(var2);
                                    case 43:
                                        if (!var0) {
                                            _fun17213_ip = 49;
                                            continue _fun17213
                                        }
                                    case 46:
                                        var0 = !var1;
                                    case 49:
                                        if (!var0) {
                                            _fun17213_ip = 90;
                                            continue _fun17213
                                        }
                                    case 52:
                                        var4 = _closure1_slot9;
                                        var2 = _closure3_slot0;
                                        var3 = undefined;
                                        var4 = var4.bind(var3)(var6, var2);
                                        var3 = var4.includes;
                                        var2 = var2.arrayFormatSeparator;
                                        var0 = var3.bind(var4)(var2);
                                    case 90:
                                        var3 = var6;
                                        if (!var0) {
                                            _fun17213_ip = 118;
                                            continue _fun17213
                                        }
                                    case 96:
                                        var5 = _closure1_slot9;
                                        var4 = _closure3_slot0;
                                        var2 = undefined;
                                        var3 = var5.bind(var2)(var6, var4);
                                    case 118:
                                        if (var1) {
                                            _fun17213_ip = 157;
                                            continue _fun17213
                                        }
                                    case 121:
                                        if (var0) {
                                            _fun17213_ip = 157;
                                            continue _fun17213
                                        }
                                    case 124:
                                        var0 = null;
                                        var2 = var3;
                                        if (!(var0 !== var2)) {
                                            _fun17213_ip = 155;
                                            continue _fun17213
                                        }
                                    case 133:
                                        var4 = _closure1_slot9;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var2 = var4.bind(var0)(var3, var1);
                                    case 155:
                                        _fun17213_ip = 197;
                                        continue _fun17213;
                                    case 157:
                                        var1 = var3.split;
                                        var0 = _closure3_slot0;
                                        var0 = var0.arrayFormatSeparator;
                                        var3 = var1.bind(var3)(var0);
                                        var1 = var3.map;
                                        var0 = function(arg0) { // Environment: var0
                                            var3 = _closure1_slot9;
                                            var2 = _closure3_slot0;
                                            var1 = undefined;
                                            var0 = arg0;
                                            var0 = var3.bind(var1)(var0, var2);
                                            return var0;
                                        };
                                        var2 = var1.bind(var3)(var0);
                                    case 197:
                                        var1 = arg2;
                                        var0 = arg0;
                                        var1[var0] = var2;
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var1;
                        case 90:
                            var1 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun17212: for (var _fun17212_ip = 0;;) switch (_fun17212_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var5 = arg1;
                                        var2 = arg2;
                                        var1 = /(:list)$/;
                                        var0 = var1.exec;
                                        var1 = var0.bind(var1)(var6);
                                        var _closure3_slot1 = var1;
                                        var4 = var6.replace;
                                        var3 = /:list$/;
                                        var1 = '';
                                        var1 = var4.bind(var6)(var3, var1);
                                        var0 = _closure3_slot1;
                                        if (var0) {
                                            _fun17212_ip = 83;
                                            continue _fun17212
                                        }
                                    case 77:
                                        var2[var1] = var5;
                                        _fun17212_ip = 130;
                                        continue _fun17212;
                                    case 83:
                                        var3 = var2[var1];
                                        var0 = undefined;
                                        if (!(var0 === var3)) {
                                            _fun17212_ip = 107;
                                            continue _fun17212
                                        }
                                    case 93:
                                        var0 = new Array(1);
                                        var0[0] = var5;
                                        var2[var1] = var0;
                                        _fun17212_ip = 130;
                                        continue _fun17212;
                                    case 107:
                                        var4 = new Array(0);
                                        var3 = var4.concat;
                                        var0 = var2[var1];
                                        var0 = var3.bind(var4)(var0, var5);
                                        var2[var1] = var0;
                                    case 130:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var1;
                        case 97:
                            var1 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun17211: for (var _fun17211_ip = 0;;) switch (_fun17211_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var5 = arg1;
                                        var2 = arg2;
                                        var1 = /(\[\])$/;
                                        var0 = var1.exec;
                                        var1 = var0.bind(var1)(var6);
                                        _closure3_slot1 = var1;
                                        var4 = var6.replace;
                                        var3 = /\[\]$/;
                                        var1 = '';
                                        var1 = var4.bind(var6)(var3, var1);
                                        var0 = _closure3_slot1;
                                        if (var0) {
                                            _fun17211_ip = 83;
                                            continue _fun17211
                                        }
                                    case 77:
                                        var2[var1] = var5;
                                        _fun17211_ip = 130;
                                        continue _fun17211;
                                    case 83:
                                        var3 = var2[var1];
                                        var0 = undefined;
                                        if (!(var0 === var3)) {
                                            _fun17211_ip = 107;
                                            continue _fun17211
                                        }
                                    case 93:
                                        var0 = new Array(1);
                                        var0[0] = var5;
                                        var2[var1] = var0;
                                        _fun17211_ip = 130;
                                        continue _fun17211;
                                    case 107:
                                        var4 = new Array(0);
                                        var3 = var4.concat;
                                        var0 = var2[var1];
                                        var0 = var3.bind(var4)(var0, var5);
                                        var2[var1] = var0;
                                    case 130:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var1;
                        case 104:
                            var0 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun17210: for (var _fun17210_ip = 0;;) switch (_fun17210_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var2 = arg1;
                                        var3 = arg2;
                                        var1 = /\[(\d*)\]$/;
                                        var0 = var1.exec;
                                        var1 = var0.bind(var1)(var6);
                                        _closure3_slot1 = var1;
                                        var5 = var6.replace;
                                        var4 = /\[\d*\]$/;
                                        var1 = '';
                                        var1 = var5.bind(var6)(var4, var1);
                                        var4 = _closure3_slot1;
                                        if (var4) {
                                            _fun17210_ip = 83;
                                            continue _fun17210
                                        }
                                    case 77:
                                        var3[var1] = var2;
                                        _fun17210_ip = 118;
                                        continue _fun17210;
                                    case 83:
                                        var5 = var3[var1];
                                        var4 = undefined;
                                        if (!(var4 === var5)) {
                                            _fun17210_ip = 99;
                                            continue _fun17210
                                        }
                                    case 93:
                                        var4 = {};
                                        var3[var1] = var4;
                                    case 99:
                                        var1 = var3[var1];
                                        var3 = _closure3_slot1;
                                        var0 = 1;
                                        var0 = var3[var0];
                                        var1[var0] = var2;
                                    case 118:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var20 = var4.bind(var11)(var6);
                var9 = var2.Object;
                var4 = var9.create;
                var6 = null;
                var4 = var4.bind(var9)(var6);
                var0 = var4;
                var _closure2_slot0 = var4;
                var9 = 'string';
                var4 = typeof var8;
                if (!(var9 === var4)) {
                    _fun17208_ip = 753;
                    continue _fun17208
                }
            case 134:
                var4 = var8.trim;
                var9 = var4.bind(var8)();
                var8 = var9.replace;
                var4 = /^[?#&]/;
                var19 = '';
                var9 = var8.bind(var9)(var4, var19);
                if (var9) {
                    _fun17208_ip = 181;
                    continue _fun17208
                }
            case 176:
                var4 = var0;
                return var4;
            case 181:
                var8 = var9.split;
                var4 = '&';
                var4 = var8.bind(var9)(var4);
                var18 = var4;
                var8 = var18[Symbol.iterator];
                var18 = var8().next;
                var17 = '=';
                var16 = 2;
                var15 = 0;
                var14 = 1;
                var9 = ' ';
                var4 = 5;
            case 222:
                var24 = var18().value;
                var25 = var8;
                if (!(var25 !== var11)) {
                    _fun17208_ip = 441;
                    continue _fun17208
                }
            case 236: // try_start_1
                var21 = var24;
                if (!(var19 !== var24)) {
                    _fun17208_ip = 429;
                    continue _fun17208
                }
            case 246:
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var24 = var24[var4];
                var25 = var25.bind(var11)(var24);
                var24 = var3;
                var24 = var24.decode;
                var28 = var21;
                if (var24) {
                    _fun17208_ip = 283;
                    continue _fun17208
                }
            case 278:
                var24 = var28;
                _fun17208_ip = 308;
                continue _fun17208;
            case 283:
                var27 = var28.replace;
                var26 = /\+/g;
                var24 = var27.bind(var28)(var26, var9);
            case 308:
                var25 = var25.bind(var11)(var24, var17);
                var24 = _closure1_slot4;
                var24 = var24.bind(var11)(var25, var16);
                var22 = var24[var15];
                var24 = var24[var14];
                var23 = var24;
                var27 = null;
                if (!(var11 !== var24)) {
                    _fun17208_ip = 397;
                    continue _fun17208
                }
            case 341:
                var26 = ['comma', 'separator', 'bracket-separator'];
                var25 = var26.includes;
                var24 = var3;
                var24 = var24.arrayFormat;
                var24 = var25.bind(var26)(var24);
                if (var24) {
                    _fun17208_ip = 391;
                    continue _fun17208
                }
            case 373:
                var26 = _closure1_slot9;
                var25 = var23;
                var24 = var3;
                var24 = var26.bind(var11)(var25, var24);
                _fun17208_ip = 394;
                continue _fun17208;
            case 391:
                var24 = var23;
            case 394:
                var27 = var24;
            case 397:
                var23 = var27;
                var26 = var20;
                var28 = _closure1_slot9;
                var25 = var22;
                var24 = var3;
                var25 = var28.bind(var11)(var25, var24);
                var24 = var0;
                var24 = var26.bind(var11)(var25, var27, var24);
            case 429: // try_end1
                _fun17208_ip = 222;
                continue _fun17208;
            case 434: // catch_target1
                CatchBlockStart(arg_register = 4);
                var8.return();
                throw var4;
            case 441:
                var9 = var2.Object;
                var8 = var9.keys;
                var4 = var0;
                var4 = var8.bind(var9)(var4);
                var9 = var4;
                var8 = var9[Symbol.iterator];
                var9 = var8().next;
                var4 = 'object';
            case 470:
                var15 = var9().value;
                var14 = var8;
                if (!(var14 !== var11)) {
                    _fun17208_ip = 620;
                    continue _fun17208
                }
            case 484: // try_start_2
                var12 = var15;
                var14 = var0;
                var14 = var14[var15];
                var13 = var14;
                var14 = typeof var14;
                if (!(var4 === var14)) {
                    _fun17208_ip = 511;
                    continue _fun17208
                }
            case 504:
                var14 = var13;
                if (!(var6 === var14)) {
                    _fun17208_ip = 539;
                    continue _fun17208
                }
            case 511:
                var16 = var0;
                var15 = var12;
                var18 = _closure1_slot13;
                var17 = var13;
                var14 = var3;
                var14 = var18.bind(var11)(var17, var14);
                var16[var15] = var14;
                _fun17208_ip = 608;
                continue _fun17208;
            case 539:
                var16 = var2.Object;
                var15 = var16.keys;
                var14 = var13;
                var16 = var15.bind(var16)(var14);
                var14 = var16;
                var15 = var14[Symbol.iterator];
                var14 = var15().next;
            case 564:
                var18 = var14().value;
                var16 = var15;
                if (!(var16 !== var11)) {
                    _fun17208_ip = 608;
                    continue _fun17208
                }
            case 575: // try_start_0
                var17 = var13;
                var20 = _closure1_slot13;
                var19 = var17[var18];
                var16 = var3;
                var16 = var20.bind(var11)(var19, var16);
                var17[var18] = var16;
            case 599: // try_end0
                _fun17208_ip = 564;
                continue _fun17208;
            case 601: // catch_target0
                CatchBlockStart(arg_register = 14);
                var15.return();
                throw var14;
            case 608: // try_end2
                _fun17208_ip = 470;
                continue _fun17208;
            case 613: // catch_target2
                CatchBlockStart(arg_register = 4);
                var8.return();
                throw var4;
            case 620:
                var4 = var3;
                var4 = var4.sort;
                if (!(var7 !== var4)) {
                    _fun17208_ip = 748;
                    continue _fun17208
                }
            case 633:
                var4 = var3;
                var4 = var4.sort;
                if (!(var5 !== var4)) {
                    _fun17208_ip = 684;
                    continue _fun17208
                }
            case 646:
                var7 = var2.Object;
                var5 = var7.keys;
                var4 = var0;
                var5 = var5.bind(var7)(var4);
                var4 = var5.sort;
                var3 = var3.sort;
                var4 = var4.bind(var5)(var3);
                _fun17208_ip = 713;
                continue _fun17208;
            case 684:
                var7 = var2.Object;
                var5 = var7.keys;
                var3 = var0;
                var5 = var5.bind(var7)(var3);
                var3 = var5.sort;
                var4 = var3.bind(var5)();
            case 713:
                var3 = var4.reduce;
                var5 = var2.Object;
                var2 = var5.create;
                var2 = var2.bind(var5)(var6);
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun17218: for (var _fun17218_ip = 0;;) switch (_fun17218_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = arg1;
                            var1 = _closure2_slot0;
                            var1 = var1[var2];
                            var3 = global;
                            var5 = var3.Boolean;
                            var4 = undefined;
                            var5 = var5.bind(var4)(var1);
                            if (!var5) {
                                _fun17218_ip = 83;
                                continue _fun17218
                            }
                        case 35:
                            var6 = 'object';
                            var5 = typeof var1;
                            if (!(var6 === var5)) {
                                _fun17218_ip = 83;
                                continue _fun17218
                            }
                        case 46:
                            var5 = var3.Array;
                            var3 = var5.isArray;
                            var3 = var3.bind(var5)(var1);
                            if (var3) {
                                _fun17218_ip = 83;
                                continue _fun17218
                            }
                        case 65:
                            var3 = _closure1_slot10;
                            var3 = var3.bind(var4)(var1);
                            var0[var2] = var3;
                            _fun17218_ip = 87;
                            continue _fun17218;
                        case 83:
                            var0[var2] = var1;
                        case 87:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                _fun17208_ip = 751;
                continue _fun17208;
            case 748:
                var1 = var0;
            case 751:
                return var1;
            case 753:
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = global;
    var6 = var5.Symbol;
    var5 = 'encodeFragmentIdentifier';
    var5 = var6.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var2.extract = var4;
    var2.parse = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun17219: for (var _fun17219_ip = 0;;) switch (_fun17219_ip) {
            case 0:
                var1 = arg0;
                var11 = arg1;
                var7 = var1;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var11;
                var6 = undefined;
                var8 = undefined;
                var2 = undefined;
                var9 = undefined;
                if (var1) {
                    _fun17219_ip = 36;
                    continue _fun17219
                }
            case 30:
                var1 = '';
                return var1;
            case 36:
                var5 = _closure1_slot7;
                var3 = global;
                var10 = var3.Object;
                var4 = var10.assign;
                var1 = {
                    'encode': true,
                    'strict': true,
                    'arrayFormat': 'none',
                    'arrayFormatSeparator': ','
                };
                var1 = var4.bind(var10)(var1, var11);
                _closure2_slot1 = var1;
                var4 = var1.arrayFormatSeparator;
                var4 = var5.bind(var6)(var4);
                var8 = function arg0() {
                    _fun17220: for (var _fun17220_ip = 0;;) switch (_fun17220_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot1;
                            var0 = var0.skipNull;
                            if (!var0) {
                                _fun17220_ip = 33;
                                continue _fun17220
                            }
                        case 19:
                            var1 = _closure2_slot0;
                            var4 = var1[var3];
                            var1 = null;
                            var0 = var1 == var4;
                        case 33:
                            if (var0) {
                                _fun17220_ip = 68;
                                continue _fun17220
                            }
                        case 36:
                            var1 = _closure2_slot1;
                            var1 = var1.skipEmptyString;
                            if (!var1) {
                                _fun17220_ip = 65;
                                continue _fun17220
                            }
                        case 49:
                            var2 = _closure2_slot0;
                            var3 = var2[var3];
                            var2 = '';
                            var1 = var2 === var3;
                        case 65:
                            var0 = var1;
                        case 68:
                            return var0;
                    }
                };
                var4 = function arg0() {
                    _fun17221: for (var _fun17221_ip = 0;;) switch (_fun17221_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = var1.arrayFormat;
                            var2 = 'index';
                            if (!(var2 !== var3)) {
                                _fun17221_ip = 127;
                                continue _fun17221
                            }
                        case 23:
                            var2 = 'bracket';
                            if (!(var2 !== var3)) {
                                _fun17221_ip = 120;
                                continue _fun17221
                            }
                        case 33:
                            var2 = 'colon-list-separator';
                            if (!(var2 !== var3)) {
                                _fun17221_ip = 113;
                                continue _fun17221
                            }
                        case 43:
                            var2 = 'comma';
                            if (!(var2 !== var3)) {
                                _fun17221_ip = 76;
                                continue _fun17221
                            }
                        case 51:
                            var2 = 'separator';
                            if (!(var2 !== var3)) {
                                _fun17221_ip = 76;
                                continue _fun17221
                            }
                        case 59:
                            var2 = 'bracket-separator';
                            if (!(var2 !== var3)) {
                                _fun17221_ip = 76;
                                continue _fun17221
                            }
                        case 69:
                            var2 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun17231: for (var _fun17231_ip = 0;;) switch (_fun17231_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var10 = arg1;
                                            var8 = undefined;
                                            var0 = var2;
                                            if (!(var8 !== var10)) {
                                                _fun17231_ip = 209;
                                                continue _fun17231
                                            }
                                        case 18:
                                            var1 = _closure3_slot0;
                                            var1 = var1.skipNull;
                                            if (!var1) {
                                                _fun17231_ip = 46;
                                                continue _fun17231
                                            }
                                        case 34:
                                            var1 = null;
                                            var0 = var2;
                                            if (!(var1 !== var10)) {
                                                _fun17231_ip = 209;
                                                continue _fun17231
                                            }
                                        case 46:
                                            var1 = _closure3_slot0;
                                            var1 = var1.skipEmptyString;
                                            if (!var1) {
                                                _fun17231_ip = 73;
                                                continue _fun17231
                                            }
                                        case 59:
                                            var1 = '';
                                            var0 = var2;
                                            if (!(var1 !== var10)) {
                                                _fun17231_ip = 209;
                                                continue _fun17231
                                            }
                                        case 73:
                                            var4 = new Array(0);
                                            var3 = var4.concat;
                                            var1 = _closure1_slot5;
                                            var2 = var1.bind(var8)(var2);
                                            var1 = null;
                                            if (!(var1 !== var10)) {
                                                _fun17231_ip = 171;
                                                continue _fun17231
                                            }
                                        case 100:
                                            var7 = _closure1_slot8;
                                            var9 = _closure4_slot0;
                                            var1 = _closure3_slot0;
                                            var11 = var7.bind(var8)(var9, var1);
                                            var9 = new Array(3);
                                            var9[0] = var11;
                                            var11 = '=';
                                            var9[1] = var11;
                                            var1 = var7.bind(var8)(var10, var1);
                                            var9[2] = var1;
                                            var7 = var9.join;
                                            var1 = '';
                                            var7 = var7.bind(var9)(var1);
                                            var1 = new Array(1);
                                            var1[0] = var7;
                                            _fun17231_ip = 203;
                                            continue _fun17231;
                                        case 171:
                                            var7 = _closure1_slot8;
                                            var6 = _closure4_slot0;
                                            var5 = _closure3_slot0;
                                            var6 = var7.bind(var8)(var6, var5);
                                            var5 = new Array(1);
                                            var5[0] = var6;
                                            var1 = var5;
                                        case 203:
                                            var0 = var3.bind(var4)(var2, var1);
                                        case 209:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            return var2;
                        case 76:
                            var3 = var1.arrayFormat;
                            var1 = '=';
                            var2 = 'bracket-separator';
                            if (!(var2 === var3)) {
                                _fun17221_ip = 102;
                                continue _fun17221
                            }
                        case 96:
                            var1 = '[]=';
                        case 102:
                            var _closure3_slot1 = var1;
                            var1 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun17229: for (var _fun17229_ip = 0;;) switch (_fun17229_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var2 = arg1;
                                            var7 = undefined;
                                            var0 = var1;
                                            if (!(var7 !== var2)) {
                                                _fun17229_ip = 229;
                                                continue _fun17229
                                            }
                                        case 18:
                                            var3 = _closure3_slot0;
                                            var3 = var3.skipNull;
                                            if (!var3) {
                                                _fun17229_ip = 46;
                                                continue _fun17229
                                            }
                                        case 34:
                                            var3 = null;
                                            var0 = var1;
                                            if (!(var3 !== var2)) {
                                                _fun17229_ip = 229;
                                                continue _fun17229
                                            }
                                        case 46:
                                            var3 = _closure3_slot0;
                                            var3 = var3.skipEmptyString;
                                            if (!var3) {
                                                _fun17229_ip = 73;
                                                continue _fun17229
                                            }
                                        case 59:
                                            var3 = '';
                                            var0 = var1;
                                            if (!(var3 !== var2)) {
                                                _fun17229_ip = 229;
                                                continue _fun17229
                                            }
                                        case 73:
                                            var4 = '';
                                            var3 = null;
                                            var6 = var4;
                                            if (!(var3 !== var2)) {
                                                _fun17229_ip = 89;
                                                continue _fun17229
                                            }
                                        case 86:
                                            var6 = var2;
                                        case 89:
                                            var3 = var1.length;
                                            var2 = 0;
                                            if (!(var2 !== var3)) {
                                                _fun17229_ip = 155;
                                                continue _fun17229
                                            }
                                        case 100:
                                            var3 = new Array(2);
                                            var3[0] = var1;
                                            var2 = _closure1_slot8;
                                            var1 = _closure3_slot0;
                                            var2 = var2.bind(var7)(var6, var1);
                                            var3[1] = var2;
                                            var2 = var3.join;
                                            var1 = var1.arrayFormatSeparator;
                                            var2 = var2.bind(var3)(var1);
                                            var1 = new Array(1);
                                            var1[0] = var2;
                                            _fun17229_ip = 226;
                                            continue _fun17229;
                                        case 155:
                                            var5 = _closure1_slot8;
                                            var3 = _closure4_slot0;
                                            var2 = _closure3_slot0;
                                            var9 = var5.bind(var7)(var3, var2);
                                            var3 = new Array(3);
                                            var3[0] = var9;
                                            var8 = _closure3_slot1;
                                            var3[1] = var8;
                                            var2 = var5.bind(var7)(var6, var2);
                                            var3[2] = var2;
                                            var2 = var3.join;
                                            var3 = var2.bind(var3)(var4);
                                            var2 = new Array(1);
                                            var2[0] = var3;
                                            var1 = var2;
                                        case 226:
                                            var0 = var1;
                                        case 229:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            return var1;
                        case 113:
                            var1 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun17227: for (var _fun17227_ip = 0;;) switch (_fun17227_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var10 = arg1;
                                            var8 = undefined;
                                            var0 = var2;
                                            if (!(var8 !== var10)) {
                                                _fun17227_ip = 243;
                                                continue _fun17227
                                            }
                                        case 18:
                                            var1 = _closure3_slot0;
                                            var1 = var1.skipNull;
                                            if (!var1) {
                                                _fun17227_ip = 46;
                                                continue _fun17227
                                            }
                                        case 34:
                                            var1 = null;
                                            var0 = var2;
                                            if (!(var1 !== var10)) {
                                                _fun17227_ip = 243;
                                                continue _fun17227
                                            }
                                        case 46:
                                            var1 = _closure3_slot0;
                                            var1 = var1.skipEmptyString;
                                            if (!var1) {
                                                _fun17227_ip = 73;
                                                continue _fun17227
                                            }
                                        case 59:
                                            var1 = '';
                                            var0 = var2;
                                            if (!(var1 !== var10)) {
                                                _fun17227_ip = 243;
                                                continue _fun17227
                                            }
                                        case 73:
                                            var4 = new Array(0);
                                            var3 = var4.concat;
                                            var1 = _closure1_slot5;
                                            var2 = var1.bind(var8)(var2);
                                            var1 = null;
                                            if (!(var1 !== var10)) {
                                                _fun17227_ip = 173;
                                                continue _fun17227
                                            }
                                        case 100:
                                            var7 = _closure1_slot8;
                                            var9 = _closure4_slot0;
                                            var1 = _closure3_slot0;
                                            var11 = var7.bind(var8)(var9, var1);
                                            var9 = new Array(3);
                                            var9[0] = var11;
                                            var11 = ':list=';
                                            var9[1] = var11;
                                            var1 = var7.bind(var8)(var10, var1);
                                            var9[2] = var1;
                                            var7 = var9.join;
                                            var1 = '';
                                            var7 = var7.bind(var9)(var1);
                                            var1 = new Array(1);
                                            var1[0] = var7;
                                            _fun17227_ip = 237;
                                            continue _fun17227;
                                        case 173:
                                            var7 = _closure1_slot8;
                                            var6 = _closure4_slot0;
                                            var5 = _closure3_slot0;
                                            var5 = var7.bind(var8)(var6, var5);
                                            var7 = new Array(2);
                                            var7[0] = var5;
                                            var5 = ':list=';
                                            var7[1] = var5;
                                            var6 = var7.join;
                                            var5 = '';
                                            var6 = var6.bind(var7)(var5);
                                            var5 = new Array(1);
                                            var5[0] = var6;
                                            var1 = var5;
                                        case 237:
                                            var0 = var3.bind(var4)(var2, var1);
                                        case 243:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            return var1;
                        case 120:
                            var1 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun17225: for (var _fun17225_ip = 0;;) switch (_fun17225_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var10 = arg1;
                                            var8 = undefined;
                                            var0 = var2;
                                            if (!(var8 !== var10)) {
                                                _fun17225_ip = 243;
                                                continue _fun17225
                                            }
                                        case 18:
                                            var1 = _closure3_slot0;
                                            var1 = var1.skipNull;
                                            if (!var1) {
                                                _fun17225_ip = 46;
                                                continue _fun17225
                                            }
                                        case 34:
                                            var1 = null;
                                            var0 = var2;
                                            if (!(var1 !== var10)) {
                                                _fun17225_ip = 243;
                                                continue _fun17225
                                            }
                                        case 46:
                                            var1 = _closure3_slot0;
                                            var1 = var1.skipEmptyString;
                                            if (!var1) {
                                                _fun17225_ip = 73;
                                                continue _fun17225
                                            }
                                        case 59:
                                            var1 = '';
                                            var0 = var2;
                                            if (!(var1 !== var10)) {
                                                _fun17225_ip = 243;
                                                continue _fun17225
                                            }
                                        case 73:
                                            var4 = new Array(0);
                                            var3 = var4.concat;
                                            var1 = _closure1_slot5;
                                            var2 = var1.bind(var8)(var2);
                                            var1 = null;
                                            if (!(var1 !== var10)) {
                                                _fun17225_ip = 173;
                                                continue _fun17225
                                            }
                                        case 100:
                                            var7 = _closure1_slot8;
                                            var9 = _closure4_slot0;
                                            var1 = _closure3_slot0;
                                            var11 = var7.bind(var8)(var9, var1);
                                            var9 = new Array(3);
                                            var9[0] = var11;
                                            var11 = '[]=';
                                            var9[1] = var11;
                                            var1 = var7.bind(var8)(var10, var1);
                                            var9[2] = var1;
                                            var7 = var9.join;
                                            var1 = '';
                                            var7 = var7.bind(var9)(var1);
                                            var1 = new Array(1);
                                            var1[0] = var7;
                                            _fun17225_ip = 237;
                                            continue _fun17225;
                                        case 173:
                                            var7 = _closure1_slot8;
                                            var6 = _closure4_slot0;
                                            var5 = _closure3_slot0;
                                            var5 = var7.bind(var8)(var6, var5);
                                            var7 = new Array(2);
                                            var7[0] = var5;
                                            var5 = '[]';
                                            var7[1] = var5;
                                            var6 = var7.join;
                                            var5 = '';
                                            var6 = var6.bind(var7)(var5);
                                            var5 = new Array(1);
                                            var5[0] = var6;
                                            var1 = var5;
                                        case 237:
                                            var0 = var3.bind(var4)(var2, var1);
                                        case 243:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            return var1;
                        case 127:
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun17223: for (var _fun17223_ip = 0;;) switch (_fun17223_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var11 = arg1;
                                            var5 = var2.length;
                                            var9 = undefined;
                                            var0 = var2;
                                            if (!(var9 !== var11)) {
                                                _fun17223_ip = 276;
                                                continue _fun17223
                                            }
                                        case 23:
                                            var1 = _closure3_slot0;
                                            var1 = var1.skipNull;
                                            if (!var1) {
                                                _fun17223_ip = 51;
                                                continue _fun17223
                                            }
                                        case 39:
                                            var1 = null;
                                            var0 = var2;
                                            if (!(var1 !== var11)) {
                                                _fun17223_ip = 276;
                                                continue _fun17223
                                            }
                                        case 51:
                                            var1 = _closure3_slot0;
                                            var1 = var1.skipEmptyString;
                                            if (!var1) {
                                                _fun17223_ip = 78;
                                                continue _fun17223
                                            }
                                        case 64:
                                            var1 = '';
                                            var0 = var2;
                                            if (!(var1 !== var11)) {
                                                _fun17223_ip = 276;
                                                continue _fun17223
                                            }
                                        case 78:
                                            var4 = new Array(0);
                                            var3 = var4.concat;
                                            var1 = _closure1_slot5;
                                            var2 = var1.bind(var9)(var2);
                                            var1 = null;
                                            if (!(var1 !== var11)) {
                                                _fun17223_ip = 196;
                                                continue _fun17223
                                            }
                                        case 105:
                                            var8 = _closure1_slot8;
                                            var10 = _closure4_slot0;
                                            var1 = _closure3_slot0;
                                            var12 = var8.bind(var9)(var10, var1);
                                            var10 = new Array(5);
                                            var10[0] = var12;
                                            var12 = '[';
                                            var10[1] = var12;
                                            var12 = var8.bind(var9)(var5, var1);
                                            var10[2] = var12;
                                            var12 = ']=';
                                            var10[3] = var12;
                                            var1 = var8.bind(var9)(var11, var1);
                                            var10[4] = var1;
                                            var8 = var10.join;
                                            var1 = '';
                                            var8 = var8.bind(var10)(var1);
                                            var1 = new Array(1);
                                            var1[0] = var8;
                                            _fun17223_ip = 270;
                                            continue _fun17223;
                                        case 196:
                                            var8 = _closure1_slot8;
                                            var7 = _closure4_slot0;
                                            var6 = _closure3_slot0;
                                            var6 = var8.bind(var9)(var7, var6);
                                            var7 = new Array(4);
                                            var7[0] = var6;
                                            var6 = '[';
                                            var7[1] = var6;
                                            var7[2] = var5;
                                            var5 = ']';
                                            var7[3] = var5;
                                            var6 = var7.join;
                                            var5 = '';
                                            var6 = var6.bind(var7)(var5);
                                            var5 = new Array(1);
                                            var5[0] = var6;
                                            var1 = var5;
                                        case 270:
                                            var0 = var3.bind(var4)(var2, var1);
                                        case 276:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            return var0;
                    }
                };
                var4 = var4.bind(var6)(var1);
                var _closure2_slot2 = var4;
                var2 = {};
                var10 = var3.Object;
                var5 = var10.keys;
                var4 = var7;
                var10 = var5.bind(var10)(var4);
                var4 = var10;
                var5 = var4[Symbol.iterator];
                var4 = var5().next;
            case 137:
                var11 = var4().value;
                var10 = var5;
                if (!(var10 !== var6)) {
                    _fun17219_ip = 188;
                    continue _fun17219
                }
            case 148: // try_start_0
                var9 = var11;
                var10 = var8;
                var10 = var10.bind(var6)(var11);
                if (var10) {
                    _fun17219_ip = 179;
                    continue _fun17219
                }
            case 162:
                var12 = var2;
                var11 = var9;
                var10 = var7;
                var10 = var10[var11];
                var12[var11] = var10;
            case 179: // try_end0
                _fun17219_ip = 137;
                continue _fun17219;
            case 181: // catch_target0
                CatchBlockStart(arg_register = 4);
                var5.return();
                throw var4;
            case 188:
                var4 = var3.Object;
                var3 = var4.keys;
                var3 = var3.bind(var4)(var2);
                var4 = var1.sort;
                var2 = false;
                if (!(var2 !== var4)) {
                    _fun17219_ip = 233;
                    continue _fun17219
                }
            case 216:
                var2 = var3.sort;
                var1 = var1.sort;
                var1 = var2.bind(var3)(var1);
            case 233:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var0
                    _fun17232: for (var _fun17232_ip = 0;;) switch (_fun17232_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = _closure2_slot0;
                            var8 = var0[var5];
                            var0 = '';
                            var4 = undefined;
                            if (!(var4 !== var8)) {
                                _fun17232_ip = 222;
                                continue _fun17232
                            }
                        case 27:
                            var1 = null;
                            if (!(var1 !== var8)) {
                                _fun17232_ip = 202;
                                continue _fun17232
                            }
                        case 36:
                            var1 = global;
                            var3 = var1.Array;
                            var1 = var3.isArray;
                            var1 = var1.bind(var3)(var8);
                            if (var1) {
                                _fun17232_ip = 98;
                                continue _fun17232
                            }
                        case 57:
                            var6 = _closure1_slot8;
                            var1 = _closure2_slot1;
                            var3 = var6.bind(var4)(var5, var1);
                            var1 = '=';
                            var3 = var3 + var1;
                            var1 = _closure2_slot1;
                            var1 = var6.bind(var4)(var8, var1);
                            var1 = var3 + var1;
                            _fun17232_ip = 200;
                            continue _fun17232;
                        case 98:
                            var6 = var8.length;
                            var3 = 0;
                            if (!(var3 === var6)) {
                                _fun17232_ip = 129;
                                continue _fun17232
                            }
                        case 109:
                            var3 = _closure2_slot1;
                            var6 = var3.arrayFormat;
                            var3 = 'bracket-separator';
                            if (!(var3 !== var6)) {
                                _fun17232_ip = 170;
                                continue _fun17232
                            }
                        case 129:
                            var7 = var8.reduce;
                            var3 = _closure2_slot2;
                            var6 = var3.bind(var4)(var5);
                            var3 = new Array(0);
                            var7 = var7.bind(var8)(var6, var3);
                            var6 = var7.join;
                            var3 = '&';
                            var3 = var6.bind(var7)(var3);
                            _fun17232_ip = 197;
                            continue _fun17232;
                        case 170:
                            var7 = _closure1_slot8;
                            var6 = _closure2_slot1;
                            var7 = var7.bind(var4)(var5, var6);
                            var6 = '[]';
                            var3 = var7 + var6;
                        case 197:
                            var1 = var3;
                        case 200:
                            _fun17232_ip = 219;
                            continue _fun17232;
                        case 202:
                            var3 = _closure1_slot8;
                            var2 = _closure2_slot1;
                            var1 = var3.bind(var4)(var5, var2);
                        case 219:
                            var0 = var1;
                        case 222:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.join;
                var0 = '&';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.stringify = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun17234: for (var _fun17234_ip = 0;;) switch (_fun17234_ip) {
            case 0:
                var9 = arg0;
                var0 = global;
                var4 = var0.Object;
                var3 = var4.assign;
                var2 = {};
                var1 = true;
                var2.decode = var1;
                var1 = arg1;
                var8 = var3.bind(var4)(var2, var1);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var7 = undefined;
                var2 = var2.bind(var7)(var1);
                var1 = '#';
                var3 = var2.bind(var7)(var9, var1);
                var2 = _closure1_slot4;
                var1 = 2;
                var2 = var2.bind(var7)(var3, var1);
                var4 = 0;
                var11 = var2[var4];
                var1 = 1;
                var6 = var2[var1];
                var3 = var0.Object;
                var2 = var3.assign;
                var1 = {};
                var10 = var11.split;
                var0 = '?';
                var0 = var10.bind(var11)(var0);
                var0 = var0[var4];
                if (var0) {
                    _fun17234_ip = 133;
                    continue _fun17234
                }
            case 129:
                var0 = '';
            case 133:
                var1.url = var0;
                var4 = _closure1_slot14;
                var0 = _closure1_slot12;
                var0 = var0.bind(var7)(var9);
                var0 = var4.bind(var7)(var0, var8);
                var1.query = var0;
                if (!var8) {
                    _fun17234_ip = 176;
                    continue _fun17234
                }
            case 164:
                var0 = var8.parseFragmentIdentifier;
                if (!var0) {
                    _fun17234_ip = 176;
                    continue _fun17234
                }
            case 173:
                if (var6) {
                    _fun17234_ip = 180;
                    continue _fun17234
                }
            case 176:
                var0 = {};
                _fun17234_ip = 200;
                continue _fun17234;
            case 180:
                var4 = {};
                var5 = _closure1_slot9;
                var5 = var5.bind(var7)(var6, var8);
                var4.fragmentIdentifier = var5;
                var0 = var4;
            case 200:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.parseUrl = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun17235: for (var _fun17235_ip = 0;;) switch (_fun17235_ip) {
            case 0:
                var5 = arg0;
                var0 = global;
                var4 = var0.Object;
                var3 = var4.assign;
                var7 = _closure1_slot3;
                var6 = true;
                var2 = _closure1_slot6;
                var10 = undefined;
                var1 = {
                    'encode': true,
                    'strict': true
                };
                var2 = var7.bind(var10)(var1, var2, var6);
                var1 = arg1;
                var9 = var3.bind(var4)(var2, var1);
                var2 = _closure1_slot11;
                var1 = var5.url;
                var2 = var2.bind(var10)(var1);
                var1 = var2.split;
                var6 = '?';
                var2 = var1.bind(var2)(var6);
                var1 = 0;
                var4 = var2[var1];
                if (var4) {
                    _fun17235_ip = 98;
                    continue _fun17235
                }
            case 94:
                var4 = '';
            case 98:
                var3 = _closure1_slot1;
                var2 = var3.extract;
                var1 = var5.url;
                var7 = var2.bind(var3)(var1);
                var2 = var3.parse;
                var1 = {};
                var11 = false;
                var1.sort = var11;
                var11 = var2.bind(var3)(var7, var1);
                var7 = var0.Object;
                var2 = var7.assign;
                var1 = var5.query;
                var2 = var2.bind(var7)(var11, var1);
                var1 = var3.stringify;
                var2 = var1.bind(var3)(var2, var9);
                var3 = var2;
                if (!var3) {
                    _fun17235_ip = 196;
                    continue _fun17235
                }
            case 180:
                var1 = var0.HermesInternal;
                var1 = var1.concat;
                var3 = var1.bind(var6)(var2);
            case 196:
                var12 = var5.url;
                var1 = var12.indexOf;
                var7 = '#';
                var11 = var1.bind(var12)(var7);
                var2 = '';
                var6 = -1;
                var1 = var2;
                if (!(var6 !== var11)) {
                    _fun17235_ip = 243;
                    continue _fun17235
                }
            case 233:
                var6 = var12.slice;
                var1 = var6.bind(var12)(var11);
            case 243:
                var6 = var5.fragmentIdentifier;
                if (!var6) {
                    _fun17235_ip = 303;
                    continue _fun17235
                }
            case 252:
                var6 = _closure1_slot6;
                var6 = var9[var6];
                if (var6) {
                    _fun17235_ip = 271;
                    continue _fun17235
                }
            case 263:
                var6 = var5.fragmentIdentifier;
                _fun17235_ip = 287;
                continue _fun17235;
            case 271:
                var8 = _closure1_slot8;
                var5 = var5.fragmentIdentifier;
                var6 = var8.bind(var10)(var5, var9);
            case 287:
                var5 = var0.HermesInternal;
                var5 = var5.concat;
                var1 = var5.bind(var7)(var6);
            case 303:
                var0 = var0.HermesInternal;
                var0 = var0.concat;
                var0 = var0.bind(var2)(var4, var3, var1);
                return var0;
        }
    };
    var2.stringifyUrl = var3;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        var0 = global;
        var3 = var0.Object;
        var2 = var3.assign;
        var6 = _closure1_slot3;
        var4 = {};
        var0 = true;
        var4.parseFragmentIdentifier = var0;
        var1 = _closure1_slot6;
        var8 = undefined;
        var0 = false;
        var1 = var6.bind(var8)(var4, var1, var0);
        var0 = arg2;
        var3 = var2.bind(var3)(var1, var0);
        var2 = _closure1_slot1;
        var1 = var2.parseUrl;
        var0 = arg0;
        var0 = var1.bind(var2)(var0, var3);
        var6 = var0.url;
        var7 = var0.query;
        var4 = var0.fragmentIdentifier;
        var1 = var2.stringifyUrl;
        var0 = {};
        var0.url = var6;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 6;
        var5 = var9[var5];
        var6 = var6.bind(var8)(var5);
        var5 = arg1;
        var5 = var6.bind(var8)(var7, var5);
        var0.query = var5;
        var0.fragmentIdentifier = var4;
        var0 = var1.bind(var2)(var0, var3);
        return var0;
    };
    var2.pick = var3;
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        _fun17237: for (var _fun17237_ip = 0;;) switch (_fun17237_ip) {
            case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun17237_ip = 37;
                    continue _fun17237
                }
            case 30:
                var4 = function(arg0, arg1) { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var1, var0);
                    var0 = !var0;
                    return var0;
                };
                _fun17237_ip = 42;
                continue _fun17237;
            case 37:
                var4 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
            case 42:
                var3 = _closure1_slot1;
                var2 = var3.pick;
                var1 = arg0;
                var0 = arg2;
                var0 = var2.bind(var3)(var1, var4, var0);
                return var0;
        }
    };
    var2.exclude = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 57, 65, 1509, 1510, 1511, 1512]);