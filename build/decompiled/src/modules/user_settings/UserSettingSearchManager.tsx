// modules/user_settings/UserSettingSearchManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun89007: for (var _fun89007_ip = 0;;) switch (_fun89007_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun89007_ip = 45;
                    continue _fun89007
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun89007_ip = 54;
                    continue _fun89007
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun89007_ip = 344;
                    continue _fun89007
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun89007_ip = 322;
                    continue _fun89007
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun89007_ip = 282;
                    continue _fun89007
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun89007_ip = 269;
                    continue _fun89007
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
                    _fun89007_ip = 162;
                    continue _fun89007
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun89007_ip = 178;
                    continue _fun89007
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun89007_ip = 248;
                    continue _fun89007
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun89007_ip = 248;
                    continue _fun89007
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun89007_ip = 233;
                    continue _fun89007
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun89007_ip = 246;
                    continue _fun89007
                }
            case 233:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun89007_ip = 264;
                continue _fun89007;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun89007_ip = 282;
                continue _fun89007;
            case 269:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun89007_ip = 322;
                    continue _fun89007
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
                    _fun89007_ip = 329;
                    continue _fun89007
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun89008: for (var _fun89008_ip = 0;;) switch (_fun89008_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun89008_ip = 56;
                                continue _fun89008
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
                            _fun89008_ip = 67;
                            continue _fun89008;
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
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun89009: for (var _fun89009_ip = 0;;) switch (_fun89009_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun89009_ip = 23;
                    continue _fun89009
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun89009_ip = 33;
                    continue _fun89009
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
                    _fun89009_ip = 70;
                    continue _fun89009
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun89009_ip = 55;
                    continue _fun89009
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function(arg0) { // Original name: SettingSearchManager, environment: var4
            var3 = arg0;
            var4 = this;
            var _closure3_slot0 = var4;
            var5 = _closure1_slot3;
            var2 = _closure2_slot0;
            var0 = undefined;
            var2 = var5.bind(var0)(var4, var2);
            var4.terms = var3;
            var2 = global;
            var5 = var2.Map;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var4.cache = var5;
            var2 = var2.Map;
            var5 = var2.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var2
                }
            });
            var9 = var5;
            var2 = new var9[var2](var8);
            var2 = var2 instanceof Object ? var2 : var5;
            var4.cacheScored = var2;
            var2 = new Array(0);
            var4.preprocessed = var2;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun89012: for (var _fun89012_ip = 0;;) switch (_fun89012_ip) {
                    case 0:
                        var6 = arg0;
                        var2 = var6[Symbol.iterator];
                        var6 = var2().next;
                        var3 = var6().value;
                        var4 = var2;
                        var0 = undefined;
                        var5 = var4 === var0;
                        var4 = undefined;
                        if (var5) {
                            _fun89012_ip = 29;
                            continue _fun89012
                        }
                    case 26:
                        var4 = var3;
                    case 29:
                        var3 = undefined;
                        if (var5) {
                            _fun89012_ip = 59;
                            continue _fun89012
                        }
                    case 34:
                        var7 = var6().value;
                        var6 = var2;
                        var6 = var6 === var0;
                        var3 = undefined;
                        var5 = var6;
                        if (var6) {
                            _fun89012_ip = 59;
                            continue _fun89012
                        }
                    case 53:
                        var3 = var7;
                        var5 = var6;
                    case 59:
                        if (var5) {
                            _fun89012_ip = 65;
                            continue _fun89012
                        }
                    case 62:
                        var2.return();
                    case 65:
                        var _closure4_slot2 = var0;
                        var6 = new Array(0);
                        var _closure4_slot0 = var6;
                        var5 = new Array(0);
                        var _closure4_slot1 = var5;
                        var2 = global;
                        var2 = var2.Set;
                        var7 = var2.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var2
                            }
                        });
                        var10 = var7;
                        var2 = new var10[var2](var9);
                        var2 = var2 instanceof Object ? var2 : var7;
                        _closure4_slot2 = var2;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun89013: for (var _fun89013_ip = 0;;) switch (_fun89013_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = _closure4_slot0;
                                    var1 = var3.push;
                                    var0 = var2.toLocaleLowerCase;
                                    var0 = var0.bind(var2)();
                                    var0 = var1.bind(var3)(var0);
                                    var1 = var2.includes;
                                    var0 = ' ';
                                    var0 = var1.bind(var2)(var0);
                                    if (!var0) {
                                        _fun89013_ip = 92;
                                        continue _fun89013
                                    }
                                case 49:
                                    var1 = var2.split;
                                    var0 = /\s+/;
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun89014: for (var _fun89014_ip = 0;;) switch (_fun89014_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = var1.toLocaleLowerCase;
                                                var2 = var0.bind(var1)();
                                                var3 = _closure4_slot2;
                                                var1 = var3.has;
                                                var1 = var1.bind(var3)(var2);
                                                if (var1) {
                                                    _fun89014_ip = 61;
                                                    continue _fun89014
                                                }
                                            case 33:
                                                var3 = _closure4_slot1;
                                                var1 = var3.push;
                                                var1 = var1.bind(var3)(var2);
                                                var1 = _closure4_slot2;
                                                var0 = var1.add;
                                                var0 = var0.bind(var1)(var2);
                                            case 61:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 92:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = _closure3_slot0;
                        var3 = var1.preprocessed;
                        var2 = var3.push;
                        var1 = new Array(2);
                        var1[0] = var4;
                        var4 = {};
                        var4.normalizedSearchTerms = var6;
                        var4.normalizedTokens = var5;
                        var1[1] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'search';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.getMatchingSettings;
                var0 = _closure3_slot1;
                var2 = var1.bind(var2)(var0);
                var1 = arg0;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'getMatchingSettings';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun89017: for (var _fun89017_ip = 0;;) switch (_fun89017_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var4;
                    var1 = var2.cache;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var4);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun89017_ip = 84;
                        continue _fun89017
                    }
                case 34:
                    var1 = new Array(0);
                    var _closure3_slot1 = var1;
                    var6 = var2.terms;
                    var5 = var6.forEach;
                    var3 = function(arg0) { // Environment: var3
                        _fun89018: for (var _fun89018_ip = 0;;) switch (_fun89018_ip) {
                            case 0:
                                var5 = arg0;
                                var1 = var5[Symbol.iterator];
                                var5 = var1().next;
                                var2 = var5().value;
                                var3 = var1;
                                var0 = undefined;
                                var4 = var3 === var0;
                                var3 = undefined;
                                if (var4) {
                                    _fun89018_ip = 27;
                                    continue _fun89018
                                }
                            case 24:
                                var3 = var2;
                            case 27:
                                var2 = undefined;
                                if (var4) {
                                    _fun89018_ip = 57;
                                    continue _fun89018
                                }
                            case 32:
                                var6 = var5().value;
                                var5 = var1;
                                var5 = var5 === var0;
                                var2 = undefined;
                                var4 = var5;
                                if (var5) {
                                    _fun89018_ip = 57;
                                    continue _fun89018
                                }
                            case 51:
                                var2 = var6;
                                var4 = var5;
                            case 57:
                                if (var4) {
                                    _fun89018_ip = 63;
                                    continue _fun89018
                                }
                            case 60:
                                var1.return();
                            case 63:
                                var1 = _closure1_slot5;
                                var6 = var1.bind(var0)(var2);
                                var4 = var6.bind(var0)();
                                var2 = var4.done;
                                var5 = 2;
                                if (var2) {
                                    _fun89018_ip = 179;
                                    continue _fun89018
                                }
                            case 93:
                                var10 = var4.value;
                                var8 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var2 = var2[var5];
                                var9 = var8.bind(var0)(var2);
                                var8 = _closure3_slot0;
                                var2 = var8.toLowerCase;
                                var8 = var2.bind(var8)();
                                var2 = var10.toLowerCase;
                                var2 = var2.bind(var10)();
                                var2 = var9.bind(var0)(var8, var2);
                                if (var2) {
                                    _fun89018_ip = 165;
                                    continue _fun89018
                                }
                            case 148:
                                var8 = var6.bind(var0)();
                                var2 = var8.done;
                                var4 = var8;
                                if (var2) {
                                    _fun89018_ip = 179;
                                    continue _fun89018
                                }
                            case 163:
                                _fun89018_ip = 93;
                                continue _fun89018;
                            case 165:
                                var2 = _closure3_slot1;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                            case 179:
                                return var0;
                        }
                    };
                    var3 = var5.bind(var6)(var3);
                    var3 = var2.cache;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    return var1;
                case 84:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getScoredSearchResults';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            _fun89019: for (var _fun89019_ip = 0;;) switch (_fun89019_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var0 = var1.trim;
                    var1 = var0.bind(var1)();
                    var0 = var1.toLocaleLowerCase;
                    var4 = var0.bind(var1)();
                    var _closure3_slot0 = var4;
                    var1 = var4.length;
                    var0 = 0;
                    if (!(var0 !== var1)) {
                        _fun89019_ip = 117;
                        continue _fun89019
                    }
                case 43:
                    var1 = var2.cacheScored;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var4);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun89019_ip = 115;
                        continue _fun89019
                    }
                case 65:
                    var1 = new Array(0);
                    var _closure3_slot1 = var1;
                    var6 = var2.preprocessed;
                    var5 = var6.forEach;
                    var3 = function(arg0) { // Environment: var3
                        _fun89020: for (var _fun89020_ip = 0;;) switch (_fun89020_ip) {
                            case 0:
                                var9 = arg0;
                                var1 = var9[Symbol.iterator];
                                var9 = var1().next;
                                var3 = undefined;
                                var2 = undefined;
                                var5 = undefined;
                                var10 = var9().value;
                                var11 = var1;
                                var11 = var11 === var3;
                                var2 = var11;
                                if (var11) {
                                    _fun89020_ip = 34;
                                    continue _fun89020
                                }
                            case 31:
                                var5 = var10;
                            case 34:
                                var8 = var5;
                                var5 = undefined;
                                var10 = var2;
                                if (var10) {
                                    _fun89020_ip = 65;
                                    continue _fun89020
                                }
                            case 45:
                                var9 = var9().value;
                                var10 = var1;
                                var10 = var10 === var3;
                                var2 = var10;
                                if (var10) {
                                    _fun89020_ip = 65;
                                    continue _fun89020
                                }
                            case 62:
                                var5 = var9;
                            case 65: // try_start_0
                                var6 = var5.normalizedTokens;
                                var4 = var5.normalizedSearchTerms;
                            case 77: // try_end0
                                var5 = var2;
                                if (var5) {
                                    _fun89020_ip = 86;
                                    continue _fun89020
                                }
                            case 83:
                                var1.return();
                            case 86:
                                var5 = 0;
                                var _closure4_slot0 = var5;
                                var11 = var4;
                                var10 = var11.some;
                                var9 = function(arg0) { // Environment: var7
                                    var1 = _closure3_slot0;
                                    var0 = arg0;
                                    var0 = var0 === var1;
                                    return var0;
                                };
                                var9 = var10.bind(var11)(var9);
                                if (var9) {
                                    _fun89020_ip = 178;
                                    continue _fun89020
                                }
                            case 116:
                                var10 = var6;
                                var9 = var10.some;
                                var6 = function(arg0) { // Environment: var7
                                    var2 = arg0;
                                    var1 = var2.startsWith;
                                    var0 = _closure3_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var6 = var9.bind(var10)(var6);
                                if (var6) {
                                    _fun89020_ip = 162;
                                    continue _fun89020
                                }
                            case 140:
                                var9 = var4;
                                var6 = var9.forEach;
                                var4 = function(arg0) { // Environment: var7
                                    _fun89023: for (var _fun89023_ip = 0;;) switch (_fun89023_ip) {
                                        case 0:
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot2;
                                            var0 = 3;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var4 = var2.bind(var0)(var1);
                                            var3 = var4.calculateJaroWinklerSimilarity;
                                            var2 = _closure3_slot0;
                                            var1 = arg0;
                                            var1 = var3.bind(var4)(var2, var1);
                                            var2 = 0.8;
                                            var2 = var1 >= var2;
                                            var5 = 0;
                                            if (!var2) {
                                                _fun89023_ip = 69;
                                                continue _fun89023
                                            }
                                        case 66:
                                            var5 = var1;
                                        case 69:
                                            var1 = global;
                                            var4 = var1.Math;
                                            var3 = var4.max;
                                            var1 = _closure4_slot0;
                                            var1 = var3.bind(var4)(var1, var5);
                                            _closure4_slot0 = var1;
                                            return var0;
                                    }
                                };
                                var4 = var6.bind(var9)(var4);
                                _fun89020_ip = 185;
                                continue _fun89020;
                            case 162:
                                var4 = 0.95;
                                _closure4_slot0 = var4;
                                _fun89020_ip = 185;
                                continue _fun89020;
                            case 178:
                                var4 = 1;
                                _closure4_slot0 = var4;
                            case 185:
                                var4 = _closure4_slot0;
                                if (!(var4 > var5)) {
                                    _fun89020_ip = 226;
                                    continue _fun89020
                                }
                            case 193:
                                var6 = _closure3_slot1;
                                var5 = var6.push;
                                var4 = {};
                                var4.setting = var8;
                                var7 = _closure4_slot0;
                                var4.score = var7;
                                var4 = var5.bind(var6)(var4);
                            case 226:
                                return var3;
                            case 228: // catch_target0
                                CatchBlockStart(arg_register = 0);
                                _fun89020_ip = 234;
                                continue _fun89020;
                            case 232:
                                CatchBlockStart(arg_register = 0);
                            case 234:
                                if (var2) {
                                    _fun89020_ip = 240;
                                    continue _fun89020
                                }
                            case 237:
                                var1.return();
                            case 240:
                                throw var0;
                        }
                    };
                    var3 = var5.bind(var6)(var3);
                    var3 = var2.cacheScored;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    return var1;
                case 115:
                    return var0;
                case 117:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/UserSettingSearchManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 5560, 11517, 2]);