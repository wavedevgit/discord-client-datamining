// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var7 = dependencyMap;
    var4 = function(arg0) { // Original name: _interopDefaultLegacy, environment: var6
        _fun49482: for (var _fun49482_ip = 0;;) switch (_fun49482_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun49482_ip = 31;
                    continue _fun49482
                }
            case 6:
                var1 = 'object';
                var0 = typeof var2;
                if (!(var1 === var0)) {
                    _fun49482_ip = 31;
                    continue _fun49482
                }
            case 17:
                var0 = 'default';
                var1 = var0 in var2;
                var0 = var2;
                if (var1) {
                    _fun49482_ip = 40;
                    continue _fun49482
                }
            case 31:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 40:
                return var0;
        }
    };
    var3 = function(arg0, arg1, arg2) { // Original name: matchSorter, environment: var6
        _fun49483: for (var _fun49483_ip = 0;;) switch (_fun49483_ip) {
            case 0:
                var6 = arg0;
                var1 = arg2;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var1;
                var3 = undefined;
                if (!(var3 === var1)) {
                    _fun49483_ip = 34;
                    continue _fun49483
                }
            case 25:
                var2 = {};
                _closure2_slot1 = var2;
                var1 = var2;
            case 34:
                var2 = var1.keys;
                var _closure2_slot2 = var2;
                var2 = var1.threshold;
                if (!(var3 === var2)) {
                    _fun49483_ip = 66;
                    continue _fun49483
                }
            case 53:
                var4 = _closure1_slot2;
                var2 = var4.MATCHES;
            case 66:
                var _closure2_slot3 = var2;
                var2 = var1.baseSort;
                if (!(var3 === var2)) {
                    _fun49483_ip = 89;
                    continue _fun49483
                }
            case 82:
                var2 = _closure1_slot3;
            case 89:
                var _closure2_slot4 = var2;
                var2 = var1.sorter;
                if (!(var3 === var2)) {
                    _fun49483_ip = 110;
                    continue _fun49483
                }
            case 105:
                var2 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun49485: for (var _fun49485_ip = 0;;) switch (_fun49485_ip) {
                            case 0:
                                var5 = arg0;
                                var4 = arg1;
                                var3 = _closure2_slot4;
                                var6 = var5.rank;
                                var2 = var5.keyIndex;
                                var0 = var4.rank;
                                var1 = var4.keyIndex;
                                if (!(var6 !== var0)) {
                                    _fun49485_ip = 59;
                                    continue _fun49485
                                }
                            case 41:
                                var6 = var6 > var0;
                                var0 = 1;
                                if (!var6) {
                                    _fun49485_ip = 57;
                                    continue _fun49485
                                }
                            case 51:
                                var0 = -1;
                            case 57:
                                _fun49485_ip = 92;
                                continue _fun49485;
                            case 59:
                                if (!(var2 !== var1)) {
                                    _fun49485_ip = 81;
                                    continue _fun49485
                                }
                            case 63:
                                var2 = var2 < var1;
                                var1 = 1;
                                if (!var2) {
                                    _fun49485_ip = 79;
                                    continue _fun49485
                                }
                            case 73:
                                var1 = -1;
                            case 79:
                                _fun49485_ip = 89;
                                continue _fun49485;
                            case 81:
                                var2 = undefined;
                                var1 = var3.bind(var2)(var5, var4);
                            case 89:
                                var0 = var1;
                            case 92:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
            case 110:
                var5 = var6.reduce;
                var4 = function(arg0, arg1, arg2) { // Original name: reduceItemsToRanked, environment: var0
                    _fun49486: for (var _fun49486_ip = 0;;) switch (_fun49486_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var10 = _closure2_slot2;
                            var9 = _closure2_slot0;
                            var8 = _closure2_slot1;
                            var2 = function(arg0, arg1, arg2, arg3) { // Original name: getHighestRanking, environment: var2
                                _fun49487: for (var _fun49487_ip = 0;;) switch (_fun49487_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var9 = arg1;
                                        var5 = arg2;
                                        var4 = arg3;
                                        var _closure4_slot0 = var5;
                                        var _closure4_slot1 = var4;
                                        if (var9) {
                                            _fun49487_ip = 77;
                                            continue _fun49487
                                        }
                                    case 25:
                                        var1 = {};
                                        var1.rankedValue = var6;
                                        var3 = _closure1_slot5;
                                        var2 = undefined;
                                        var2 = var3.bind(var2)(var6, var5, var4);
                                        var1.rank = var2;
                                        var2 = -1;
                                        var1.keyIndex = var2;
                                        var2 = var4.threshold;
                                        var1.keyThreshold = var2;
                                        return var1;
                                    case 77:
                                        var3 = new Array(0);
                                        var8 = var9.length;
                                        var7 = 0;
                                        var10 = var7 < var8;
                                        var2 = undefined;
                                        var1 = 0;
                                        if (!var10) {
                                            _fun49487_ip = 179;
                                            continue _fun49487
                                        }
                                    case 102:
                                        var11 = var9[var1];
                                        var10 = _closure1_slot8;
                                        var13 = var10.bind(var2)(var11);
                                        var10 = _closure1_slot7;
                                        var12 = var10.bind(var2)(var6, var11);
                                        var11 = var12.length;
                                        var14 = var7 < var11;
                                        var10 = 0;
                                        if (!var14) {
                                            _fun49487_ip = 172;
                                            continue _fun49487
                                        }
                                    case 139:
                                        var15 = var3.push;
                                        var14 = {};
                                        var16 = var12[var10];
                                        var14.itemValue = var16;
                                        var14.attributes = var13;
                                        var14 = var15.bind(var3)(var14);
                                        var10 = var10 + 1;
                                        if (var10 < var11) {
                                            _fun49487_ip = 139;
                                            continue _fun49487
                                        }
                                    case 172:
                                        var1 = var1 + 1;
                                        if (var1 < var8) {
                                            _fun49487_ip = 102;
                                            continue _fun49487
                                        }
                                    case 179:
                                        var2 = var3.reduce;
                                        var1 = {};
                                        var1.rankedValue = var6;
                                        var5 = _closure1_slot2;
                                        var5 = var5.NO_MATCH;
                                        var1.rank = var5;
                                        var5 = -1;
                                        var1.keyIndex = var5;
                                        var4 = var4.threshold;
                                        var1.keyThreshold = var4;
                                        var0 = function(arg0, arg1, arg2) { // Environment: var0
                                            _fun49488: for (var _fun49488_ip = 0;;) switch (_fun49488_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var5 = arg1;
                                                    var6 = arg2;
                                                    var3 = var0.rank;
                                                    var4 = var0.rankedValue;
                                                    var2 = var0.keyIndex;
                                                    var1 = var0.keyThreshold;
                                                    var0 = var5.itemValue;
                                                    var5 = var5.attributes;
                                                    var11 = _closure1_slot5;
                                                    var9 = _closure4_slot0;
                                                    var8 = _closure4_slot1;
                                                    var7 = undefined;
                                                    var9 = var11.bind(var7)(var0, var9, var8);
                                                    var7 = var5.minRanking;
                                                    var8 = var5.maxRanking;
                                                    var5 = var5.threshold;
                                                    if (!(var9 < var7)) {
                                                        _fun49488_ip = 108;
                                                        continue _fun49488
                                                    }
                                                case 94:
                                                    var10 = _closure1_slot2;
                                                    var10 = var10.MATCHES;
                                                    if (!(!(var9 >= var10))) {
                                                        _fun49488_ip = 118;
                                                        continue _fun49488
                                                    }
                                                case 108:
                                                    var7 = var9;
                                                    if (!(var7 > var8)) {
                                                        _fun49488_ip = 118;
                                                        continue _fun49488
                                                    }
                                                case 115:
                                                    var7 = var8;
                                                case 118:
                                                    if (!(var7 > var3)) {
                                                        _fun49488_ip = 134;
                                                        continue _fun49488
                                                    }
                                                case 122:
                                                    var3 = var7;
                                                    var2 = var6;
                                                    var1 = var5;
                                                    var4 = var0;
                                                case 134:
                                                    var0 = {};
                                                    var0.rankedValue = var4;
                                                    var0.rank = var3;
                                                    var0.keyIndex = var2;
                                                    var0.keyThreshold = var1;
                                                    return var0;
                                            }
                                        };
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                }
                            };
                            var5 = undefined;
                            var12 = undefined;
                            var11 = var1;
                            var6 = var12[var2](var11, var10, var9, var8, var7);
                            var3 = var6.rank;
                            var2 = var6.keyThreshold;
                            if (!(var5 === var2)) {
                                _fun49486_ip = 59;
                                continue _fun49486
                            }
                        case 55:
                            var2 = _closure2_slot3;
                        case 59:
                            if (!(var3 >= var2)) {
                                _fun49486_ip = 107;
                                continue _fun49486
                            }
                        case 63:
                            var2 = var0.push;
                            var5 = _closure1_slot0;
                            var4 = var5.default;
                            var3 = {};
                            var3.item = var1;
                            var1 = arg2;
                            var3.index = var1;
                            var1 = {};
                            var1 = var4.bind(var5)(var1, var6, var3);
                            var1 = var2.bind(var0)(var1);
                        case 107:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var1 = var5.bind(var6)(var4, var1);
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.item;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var0 = function(arg0, arg1, arg2) { // Original name: getMatchRanking, environment: var6
        _fun49490: for (var _fun49490_ip = 0;;) switch (_fun49490_ip) {
            case 0:
                var6 = arg2;
                var5 = _closure1_slot6;
                var4 = undefined;
                var2 = arg0;
                var3 = var5.bind(var4)(var2, var6);
                var2 = arg1;
                var5 = var5.bind(var4)(var2, var6);
                var6 = var5.length;
                var2 = var3.length;
                if (!(!(var6 > var2))) {
                    _fun49490_ip = 268;
                    continue _fun49490
                }
            case 49:
                if (!(var3 !== var5)) {
                    _fun49490_ip = 256;
                    continue _fun49490
                }
            case 56:
                var2 = var3.toLowerCase;
                var3 = var2.bind(var3)();
                var2 = var5.toLowerCase;
                var2 = var2.bind(var5)();
                if (!(var3 !== var2)) {
                    _fun49490_ip = 244;
                    continue _fun49490
                }
            case 83:
                var5 = var3.startsWith;
                var5 = var5.bind(var3)(var2);
                if (var5) {
                    _fun49490_ip = 232;
                    continue _fun49490
                }
            case 100:
                var6 = var3.includes;
                var5 = ' ';
                var5 = var5 + var2;
                var5 = var6.bind(var3)(var5);
                if (var5) {
                    _fun49490_ip = 220;
                    continue _fun49490
                }
            case 123:
                var5 = var3.includes;
                var5 = var5.bind(var3)(var2);
                if (var5) {
                    _fun49490_ip = 208;
                    continue _fun49490
                }
            case 136:
                var6 = var2.length;
                var5 = 1;
                if (!(var5 !== var6)) {
                    _fun49490_ip = 196;
                    continue _fun49490
                }
            case 148:
                var5 = function(arg0) { // Original name: getAcronym, environment: var0
                    var3 = arg0;
                    var1 = '';
                    var _closure3_slot0 = var1;
                    var2 = var3.split;
                    var1 = ' ';
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = var2.split;
                        var0 = '-';
                        var2 = var1.bind(var2)(var0);
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var5 = arg0;
                            var2 = _closure3_slot0;
                            var4 = var5.substr;
                            var3 = 0;
                            var0 = 1;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var2 + var0;
                            _closure3_slot0 = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0 = _closure3_slot0;
                    return var0;
                };
                var6 = var5.bind(var4)(var3);
                var5 = var6.includes;
                var5 = var5.bind(var6)(var2);
                if (var5) {
                    _fun49490_ip = 184;
                    continue _fun49490
                }
            case 171:
                var0 = function(arg0, arg1) { // Original name: getClosenessRanking, environment: var0
                    _fun49494: for (var _fun49494_ip = 0;;) switch (_fun49494_ip) {
                        case 0:
                            var11 = arg0;
                            var1 = arg1;
                            var10 = function(arg0, arg1, arg2) { // Original name: findMatchingCharacter, environment: var2
                                _fun49495: for (var _fun49495_ip = 0;;) switch (_fun49495_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var3 = arg1;
                                        var2 = arg2;
                                        var0 = var3.length;
                                        if (!(var2 < var0)) {
                                            _fun49495_ip = 36;
                                            continue _fun49495
                                        }
                                    case 18:
                                        var5 = var3[var2];
                                        var1 = var2;
                                        if (!(var5 !== var4)) {
                                            _fun49495_ip = 44;
                                            continue _fun49495
                                        }
                                    case 29:
                                        var2 = var1 + 1;
                                        if (var2 < var0) {
                                            _fun49495_ip = 18;
                                            continue _fun49495
                                        }
                                    case 36:
                                        var0 = -1;
                                        return var0;
                                    case 44:
                                        var2 = _closure3_slot0;
                                        var0 = 1;
                                        var2 = var2 + var0;
                                        _closure3_slot0 = var2;
                                        var0 = var1 + var0;
                                        return var0;
                                }
                            };
                            var0 = 0;
                            var _closure3_slot0 = var0;
                            var3 = var1[var0];
                            var9 = undefined;
                            var4 = var10.bind(var9)(var3, var11, var0);
                            if (!(!(var4 < var0))) {
                                _fun49494_ip = 153;
                                continue _fun49494
                            }
                        case 36:
                            var8 = var1.length;
                            var3 = 1;
                            var12 = var3 < var8;
                            var7 = -1;
                            var6 = var4;
                            var5 = var3;
                            var0 = var6;
                            if (!var12) {
                                _fun49494_ip = 109;
                                continue _fun49494
                            }
                        case 66:
                            var12 = var1[var5];
                            var12 = var10.bind(var9)(var12, var11, var6);
                            if (!(!(var12 > var7))) {
                                _fun49494_ip = 96;
                                continue _fun49494
                            }
                        case 81:
                            var13 = _closure1_slot2;
                            var13 = var13.NO_MATCH;
                            return var13;
                        case 96:
                            var5 = var5 + 1;
                            var6 = var12;
                            var0 = var6;
                            if (var5 < var8) {
                                _fun49494_ip = 66;
                                continue _fun49494
                            }
                        case 109:
                            var0 = var0 - var4;
                            var2 = _closure3_slot0;
                            var1 = var1.length;
                            var2 = var2 / var1;
                            var1 = _closure1_slot2;
                            var1 = var1.MATCHES;
                            var0 = var3 / var0;
                            var0 = var2 * var0;
                            var0 = var1 + var0;
                            return var0;
                        case 153:
                            var0 = _closure1_slot2;
                            var0 = var0.NO_MATCH;
                            return var0;
                    }
                };
                var0 = var0.bind(var4)(var3, var2);
                _fun49490_ip = 194;
                continue _fun49490;
            case 184:
                var2 = _closure1_slot2;
                var0 = var2.ACRONYM;
            case 194:
                _fun49490_ip = 206;
                continue _fun49490;
            case 196:
                var2 = _closure1_slot2;
                var0 = var2.NO_MATCH;
            case 206:
                _fun49490_ip = 218;
                continue _fun49490;
            case 208:
                var2 = _closure1_slot2;
                var0 = var2.CONTAINS;
            case 218:
                _fun49490_ip = 230;
                continue _fun49490;
            case 220:
                var2 = _closure1_slot2;
                var0 = var2.WORD_STARTS_WITH;
            case 230:
                _fun49490_ip = 242;
                continue _fun49490;
            case 232:
                var2 = _closure1_slot2;
                var0 = var2.STARTS_WITH;
            case 242:
                _fun49490_ip = 254;
                continue _fun49490;
            case 244:
                var2 = _closure1_slot2;
                var0 = var2.EQUAL;
            case 254:
                _fun49490_ip = 266;
                continue _fun49490;
            case 256:
                var2 = _closure1_slot2;
                var0 = var2.CASE_SENSITIVE_EQUAL;
            case 266:
                _fun49490_ip = 278;
                continue _fun49490;
            case 268:
                var1 = _closure1_slot2;
                var0 = var1.NO_MATCH;
            case 278:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: prepareValueForComparison, environment: var6
        _fun49496: for (var _fun49496_ip = 0;;) switch (_fun49496_ip) {
            case 0:
                var0 = arg0;
                var3 = '' + var0;
                var0 = arg1;
                var1 = var0.keepDiacritics;
                var0 = var3;
                if (var1) {
                    _fun49496_ip = 40;
                    continue _fun49496
                }
            case 23:
                var2 = _closure1_slot1;
                var1 = var2.default;
                var0 = var1.bind(var2)(var3);
            case 40:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1) { // Original name: getItemValues, environment: var6
        _fun49497: for (var _fun49497_ip = 0;;) switch (_fun49497_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var4 = 'object';
                var3 = typeof var0;
                var1 = var0;
                if (!(var4 === var3)) {
                    _fun49497_ip = 25;
                    continue _fun49497
                }
            case 20:
                var1 = var0.key;
            case 25:
                var3 = 'function';
                var0 = typeof var1;
                if (!(var3 !== var0)) {
                    _fun49497_ip = 375;
                    continue _fun49497
                }
            case 39:
                var13 = null;
                var0 = var13 == var2;
                var3 = null;
                if (var0) {
                    _fun49497_ip = 382;
                    continue _fun49497
                }
            case 53:
                var4 = global;
                var0 = var4.Object;
                var5 = var0.hasOwnProperty;
                var0 = var5.call;
                var0 = var0.bind(var5)(var2, var1);
                if (var0) {
                    _fun49497_ip = 369;
                    continue _fun49497
                }
            case 84:
                var0 = var1.includes;
                var5 = '.';
                var0 = var0.bind(var1)(var5);
                var3 = null;
                if (!var0) {
                    _fun49497_ip = 382;
                    continue _fun49497
                }
            case 106:
                var0 = var1.split;
                var12 = var0.bind(var1)(var5);
                var7 = new Array(1);
                var7[0] = var2;
                var11 = var12.length;
                var0 = 0;
                var14 = var0 < var11;
                var6 = undefined;
                var10 = '*';
                var9 = var7;
                var8 = 0;
                var5 = undefined;
                var7 = var9;
                if (!var14) {
                    _fun49497_ip = 321;
                    continue _fun49497
                }
            case 157:
                var19 = var12[var8];
                var17 = new Array(0);
                var18 = var9.length;
                var20 = var0 < var18;
                var15 = var5;
                var16 = 0;
                var14 = var17;
                var5 = var15;
                if (!var20) {
                    _fun49497_ip = 305;
                    continue _fun49497
                }
            case 188:
                var21 = var9[var16];
                var22 = var17;
                var20 = var15;
                if (!(var13 != var21)) {
                    _fun49497_ip = 283;
                    continue _fun49497
                }
            case 202:
                var23 = var4.Object;
                var24 = var23.hasOwnProperty;
                var23 = var24.call;
                var23 = var23.bind(var24)(var21, var19);
                if (var23) {
                    _fun49497_ip = 253;
                    continue _fun49497
                }
            case 228:
                var22 = var17;
                var20 = var15;
                if (!(var10 === var19)) {
                    _fun49497_ip = 283;
                    continue _fun49497
                }
            case 238:
                var23 = var17.concat;
                var22 = var23.bind(var17)(var21);
                var20 = var15;
                _fun49497_ip = 283;
                continue _fun49497;
            case 253:
                var23 = var21[var19];
                var22 = var17;
                var20 = var23;
                if (!(var13 != var23)) {
                    _fun49497_ip = 283;
                    continue _fun49497
                }
            case 267:
                var24 = var17.push;
                var24 = var24.bind(var17)(var23);
                var22 = var17;
                var20 = var23;
            case 283:
                var16 = var16 + 1;
                var17 = var22;
                var15 = var20;
                var14 = var17;
                var6 = var21;
                var5 = var15;
                if (var16 < var18) {
                    _fun49497_ip = 188;
                    continue _fun49497
                }
            case 305:
                var8 = var8 + 1;
                var9 = var14;
                var7 = var9;
                if (var8 < var11) {
                    _fun49497_ip = 157;
                    continue _fun49497
                }
            case 321:
                var5 = var4.Array;
                var4 = var5.isArray;
                var0 = var7[var0];
                var4 = var4.bind(var5)(var0);
                var0 = var7;
                if (!var4) {
                    _fun49497_ip = 367;
                    continue _fun49497
                }
            case 347:
                var6 = new Array(0);
                var5 = var6.concat;
                var4 = var5.apply;
                var0 = var4.bind(var5)(var6, var7);
            case 367:
                return var0;
            case 369:
                var3 = var2[var1];
                _fun49497_ip = 382;
                continue _fun49497;
            case 375:
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
            case 382:
                var0 = null;
                if (!(var0 != var3)) {
                    _fun49497_ip = 438;
                    continue _fun49497
                }
            case 388:
                var1 = global;
                var2 = var1.Array;
                var0 = var2.isArray;
                var2 = var0.bind(var2)(var3);
                var0 = var3;
                if (var2) {
                    _fun49497_ip = 436;
                    continue _fun49497
                }
            case 412:
                var2 = var1.String;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                var1 = new Array(1);
                var1[0] = var2;
                var0 = var1;
            case 436:
                _fun49497_ip = 442;
                continue _fun49497;
            case 438:
                var0 = new Array(0);
            case 442:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: getKeyAttributes, environment: var6
        _fun49498: for (var _fun49498_ip = 0;;) switch (_fun49498_ip) {
            case 0:
                var4 = arg0;
                var1 = 'string';
                var0 = typeof var4;
                if (!(var1 !== var0)) {
                    _fun49498_ip = 41;
                    continue _fun49498
                }
            case 14:
                var3 = _closure1_slot0;
                var2 = var3.default;
                var1 = _closure1_slot4;
                var0 = {};
                var0 = var2.bind(var3)(var0, var1, var4);
                _fun49498_ip = 48;
                continue _fun49498;
            case 41:
                var0 = _closure1_slot4;
            case 48:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var1 = var4.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var4.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = {
        'CASE_SENSITIVE_EQUAL': 7,
        'EQUAL': 6,
        'STARTS_WITH': 5,
        'WORD_STARTS_WITH': 4,
        'CONTAINS': 3,
        'ACRONYM': 2,
        'MATCHES': 1,
        'NO_MATCH': 0
    };
    var _closure1_slot2 = var1;
    var3.rankings = var1;
    var4 = function(arg0, arg1) { // Original name: defaultBaseSortFn, environment: var6
        var0 = global;
        var2 = var0.String;
        var1 = arg0;
        var1 = var1.rankedValue;
        var4 = undefined;
        var2 = var2.bind(var4)(var1);
        var1 = var2.localeCompare;
        var3 = var0.String;
        var0 = arg1;
        var0 = var0.rankedValue;
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot3 = var4;
    var5 = {
        'maxRanking': inf,
        'minRanking': -inf
    };
    var _closure1_slot4 = var5;
    var2.defaultBaseSortFn = var4;
    var2.matchSorter = var3;
    var2.rankings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5567, 5568]);