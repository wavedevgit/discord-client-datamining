// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun28017: for (var _fun28017_ip = 0;;) switch (_fun28017_ip) {
        case 0:
            var6 = global;
            var11 = require;
            var2 = exports;
            var12 = dependencyMap;
            var _closure1_slot0 = var11;
            var _closure1_slot1 = var12;
            var10 = function arg0() {
                _fun28018: for (var _fun28018_ip = 0;;) switch (_fun28018_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1;
                        if (!var1) {
                            _fun28018_ip = 42;
                            continue _fun28018
                        }
                    case 9:
                        var3 = 'object';
                        var2 = typeof var1;
                        var0 = var1;
                        if (!(var3 === var2)) {
                            _fun28018_ip = 42;
                            continue _fun28018
                        }
                    case 23:
                        var2 = 'default';
                        var2 = var2 in var1;
                        var0 = var1;
                        if (!var2) {
                            _fun28018_ip = 42;
                            continue _fun28018
                        }
                    case 37:
                        var0 = var1.default;
                    case 42:
                        return var0;
                }
            };
            var0 = function() {
                _fun28019: for (var _fun28019_ip = 0;;) switch (_fun28019_ip) {
                    case 0:
                        var0 = undefined;
                        var1 = global;
                        var1 = var1.Object;
                        var3 = var1.assign;
                        if (var3) {
                            _fun28019_ip = 25;
                            continue _fun28019
                        }
                    case 18:
                        var3 = function(arg0) { // Environment: var1
                            _fun28020: for (var _fun28020_ip = 0;;) switch (_fun28020_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = undefined;
                                    var1 = arguments.length;
                                    var3 = 1;
                                    var1 = var3 < var1;
                                    var2 = global;
                                    var4 = undefined;
                                    if (!var1) {
                                        _fun28020_ip = 115;
                                        continue _fun28020
                                    }
                                case 22:
                                    var11 = arguments[var3];
                                    var9 = var11;
                                    var1 = var4;
                                    var4 = var1;
                                    for (var6 in var9)
                                        case 43: {
                                            var4 = var1;
                                            case 55: var12 = var6;
                                            var13 = var2.Object;
                                            var13 = var13.prototype;
                                            var14 = var13.hasOwnProperty;
                                            var13 = var14.call;
                                            var13 = var13.bind(var14)(var11, var12);
                                            var1 = var12;
                                            if (!var13) {
                                                _fun28020_ip = 43;
                                                continue _fun28020
                                            }
                                            case 92: var13 = var11[var12];
                                            var0[var12] = var13;
                                            var1 = var12;
                                            _fun28020_ip = 43;
                                            continue _fun28020;
                                        }
                                case 105:
                                    var3 = var3 + 1;
                                    var1 = arguments.length;
                                    if (var3 < var1) {
                                        _fun28020_ip = 22;
                                        continue _fun28020
                                    }
                                case 115:
                                    return var0;
                            }
                        };
                    case 25:
                        _closure1_slot18 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var _closure1_slot18 = var0;
            var0 = function arg0, arg1() {
                var3 = arg0;
                var2 = arg1;
                var0 = global;
                var4 = var0.Object;
                var1 = var4.create;
                var0 = var2.prototype;
                var0 = var1.bind(var4)(var0);
                var3.prototype = var0;
                var1 = _closure1_slot20;
                var0 = var3.prototype;
                var0.constructor = var3;
                var0 = undefined;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
            };
            var _closure1_slot19 = var0;
            var0 = function arg0, arg1() {
                _fun28022: for (var _fun28022_ip = 0;;) switch (_fun28022_ip) {
                    case 0:
                        var0 = global;
                        var0 = var0.Object;
                        var3 = var0.setPrototypeOf;
                        if (var3) {
                            _fun28022_ip = 24;
                            continue _fun28022
                        }
                    case 17:
                        var3 = function(arg0, arg1) { // Environment: var0
                            var0 = arg0;
                            var1 = arg1;
                            var0.__proto__ = var1;
                            return var0;
                        };
                    case 24:
                        _closure1_slot20 = var3;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot20 = var0;
            var0 = function arg0, arg1() {
                _fun28024: for (var _fun28024_ip = 0;;) switch (_fun28024_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var0 = null;
                        if (!(var0 != var6)) {
                            _fun28024_ip = 89;
                            continue _fun28024
                        }
                    case 12:
                        var0 = {};
                        var1 = global;
                        var2 = var1.Object;
                        var1 = var2.keys;
                        var4 = var1.bind(var2)(var6);
                        var1 = var4.length;
                        var3 = 0;
                        var1 = var3 < var1;
                        var2 = 0;
                        if (!var1) {
                            _fun28024_ip = 87;
                            continue _fun28024
                        }
                    case 48:
                        var7 = var4[var2];
                        var1 = var5.indexOf;
                        var1 = var1.bind(var5)(var7);
                        if (!(!(var3 <= var1))) {
                            _fun28024_ip = 75;
                            continue _fun28024
                        }
                    case 67:
                        var1 = var6[var7];
                        var0[var7] = var1;
                    case 75:
                        var2 = var2 + 1;
                        var1 = var4.length;
                        if (var2 < var1) {
                            _fun28024_ip = 48;
                            continue _fun28024
                        }
                    case 87:
                        return var0;
                    case 89:
                        var0 = {};
                        return var0;
                }
            };
            var _closure1_slot21 = var0;
            var5 = function arg0, arg1() {
                _fun28025: for (var _fun28025_ip = 0;;) switch (_fun28025_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var3 = undefined;
                        if (!(var3 === var5)) {
                            _fun28025_ip = 16;
                            continue _fun28025
                        }
                    case 12:
                        var5 = '/';
                    case 16:
                        if (!(var3 === var4)) {
                            _fun28025_ip = 22;
                            continue _fun28025
                        }
                    case 20:
                        var4 = {};
                    case 22:
                        var1 = '/';
                        var0 = var5;
                        if (!(var1 !== var0)) {
                            _fun28025_ip = 126;
                            continue _fun28025
                        }
                    case 33:
                        var2 = _closure1_slot13;
                        var2 = var2[var5];
                        if (var2) {
                            _fun28025_ip = 103;
                            continue _fun28025
                        }
                    case 47:
                        var6 = _closure1_slot5;
                        var2 = var6.compile;
                        var6 = var2.bind(var6)(var5);
                        var8 = _closure1_slot14;
                        var7 = 10000;
                        var2 = var6;
                        if (!(var8 < var7)) {
                            _fun28025_ip = 111;
                            continue _fun28025
                        }
                    case 79:
                        var7 = _closure1_slot13;
                        var7[var5] = var6;
                        var7 = _closure1_slot14;
                        var7 = var7 + 1;
                        _closure1_slot14 = var7;
                        var2 = var6;
                        _fun28025_ip = 111;
                        continue _fun28025;
                    case 103:
                        var1 = _closure1_slot13;
                        var2 = var1[var5];
                    case 111:
                        var1 = {};
                        var5 = true;
                        var1.pretty = var5;
                        var0 = var2.bind(var3)(var4, var1);
                    case 126:
                        return var0;
                }
            };
            var _closure1_slot22 = var5;
            var4 = function arg0, arg1() {
                _fun28026: for (var _fun28026_ip = 0;;) switch (_fun28026_ip) {
                    case 0:
                        var4 = arg1;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = undefined;
                        if (!(var1 === var4)) {
                            _fun28026_ip = 20;
                            continue _fun28026
                        }
                    case 18:
                        var4 = {};
                    case 20:
                        var3 = 'string';
                        var2 = typeof var4;
                        var3 = var3 !== var2;
                        if (!var3) {
                            _fun28026_ip = 55;
                            continue _fun28026
                        }
                    case 34:
                        var2 = global;
                        var5 = var2.Array;
                        var2 = var5.isArray;
                        var2 = var2.bind(var5)(var4);
                        var3 = !var2;
                    case 55:
                        var2 = var4;
                        if (var3) {
                            _fun28026_ip = 71;
                            continue _fun28026
                        }
                    case 61:
                        var3 = {};
                        var3.path = var4;
                        var2 = var3;
                    case 71:
                        var3 = var2.path;
                        var5 = var2.exact;
                        var4 = var1 !== var5;
                        if (!var4) {
                            _fun28026_ip = 93;
                            continue _fun28026
                        }
                    case 90:
                        var4 = var5;
                    case 93:
                        var _closure2_slot1 = var4;
                        var5 = var2.strict;
                        var4 = var1 !== var5;
                        if (!var4) {
                            _fun28026_ip = 113;
                            continue _fun28026
                        }
                    case 110:
                        var4 = var5;
                    case 113:
                        var _closure2_slot2 = var4;
                        var2 = var2.sensitive;
                        var1 = var1 !== var2;
                        if (!var1) {
                            _fun28026_ip = 133;
                            continue _fun28026
                        }
                    case 130:
                        var1 = var2;
                    case 133:
                        var _closure2_slot3 = var1;
                        var2 = new Array(0);
                        var1 = var2.concat;
                        var3 = var1.bind(var2)(var3);
                        var2 = var3.reduce;
                        var1 = function(arg0, arg1) { // Environment: var0
                            _fun28027: for (var _fun28027_ip = 0;;) switch (_fun28027_ip) {
                                case 0:
                                    var0 = arg0;
                                    var8 = arg1;
                                    if (var8) {
                                        _fun28027_ip = 23;
                                        continue _fun28027
                                    }
                                case 11:
                                    var1 = '';
                                    if (!(var1 !== var8)) {
                                        _fun28027_ip = 23;
                                        continue _fun28027
                                    }
                                case 19:
                                    var1 = null;
                                    return var1;
                                case 23:
                                    if (var0) {
                                        _fun28027_ip = 331;
                                        continue _fun28027
                                    }
                                case 29:
                                    var10 = {};
                                    var2 = _closure2_slot1;
                                    var10.end = var2;
                                    var2 = _closure2_slot2;
                                    var10.strict = var2;
                                    var2 = _closure2_slot3;
                                    var10.sensitive = var2;
                                    var2 = var10.end;
                                    var4 = '' + var2;
                                    var2 = var10.strict;
                                    var4 = var4 + var2;
                                    var2 = var10.sensitive;
                                    var6 = var4 + var2;
                                    var2 = _closure1_slot15;
                                    var4 = var2[var6];
                                    if (var4) {
                                        _fun28027_ip = 115;
                                        continue _fun28027
                                    }
                                case 102:
                                    var5 = _closure1_slot15;
                                    var2 = {};
                                    var5[var6] = var2;
                                    var4 = var2;
                                case 115:
                                    var2 = var4[var8];
                                    if (var2) {
                                        _fun28027_ip = 187;
                                        continue _fun28027
                                    }
                                case 122:
                                    var2 = new Array(0);
                                    var5 = {};
                                    var9 = _closure1_slot5;
                                    var6 = undefined;
                                    var6 = var9.bind(var6)(var8, var2, var10);
                                    var5.regexp = var6;
                                    var5.keys = var2;
                                    var9 = _closure1_slot16;
                                    var6 = 10000;
                                    var2 = var5;
                                    if (!(var9 < var6)) {
                                        _fun28027_ip = 191;
                                        continue _fun28027
                                    }
                                case 167:
                                    var4[var8] = var5;
                                    var6 = _closure1_slot16;
                                    var6 = var6 + 1;
                                    _closure1_slot16 = var6;
                                    var2 = var5;
                                    _fun28027_ip = 191;
                                    continue _fun28027;
                                case 187:
                                    var2 = var4[var8];
                                case 191:
                                    var5 = var2.regexp;
                                    var6 = var2.keys;
                                    var4 = var5.exec;
                                    var2 = _closure2_slot0;
                                    var5 = var4.bind(var5)(var2);
                                    if (var5) {
                                        _fun28027_ip = 224;
                                        continue _fun28027
                                    }
                                case 220:
                                    var2 = null;
                                    return var2;
                                case 224:
                                    var2 = 0;
                                    var7 = var5[var2];
                                    var4 = var5.slice;
                                    var2 = 1;
                                    var2 = var4.bind(var5)(var2);
                                    var _closure3_slot0 = var2;
                                    var2 = _closure2_slot0;
                                    var4 = var2 === var7;
                                    var1 = _closure2_slot1;
                                    if (!var1) {
                                        _fun28027_ip = 267;
                                        continue _fun28027
                                    }
                                case 262:
                                    var1 = null;
                                    if (!var4) {
                                        _fun28027_ip = 329;
                                        continue _fun28027
                                    }
                                case 267:
                                    var2 = {};
                                    var2.path = var8;
                                    var5 = '/';
                                    if (!(var5 === var8)) {
                                        _fun28027_ip = 290;
                                        continue _fun28027
                                    }
                                case 282:
                                    var8 = '';
                                    if (!(var8 !== var7)) {
                                        _fun28027_ip = 293;
                                        continue _fun28027
                                    }
                                case 290:
                                    var5 = var7;
                                case 293:
                                    var2.url = var5;
                                    var2.isExact = var4;
                                    var5 = var6.reduce;
                                    var4 = function(arg0, arg1, arg2) { // Environment: var3
                                        var0 = arg0;
                                        var1 = arg1;
                                        var2 = var1.name;
                                        var3 = _closure3_slot0;
                                        var1 = arg2;
                                        var1 = var3[var1];
                                        var0[var2] = var1;
                                        return var0;
                                    };
                                    var3 = {};
                                    var3 = var5.bind(var6)(var4, var3);
                                    var2.params = var3;
                                    var1 = var2;
                                case 329:
                                    return var1;
                                case 331:
                                    return var0;
                            }
                        };
                        var0 = null;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot23 = var4;
            var0 = function arg0() {
                _fun28029: for (var _fun28029_ip = 0;;) switch (_fun28029_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.charAt;
                        var0 = 0;
                        var3 = var1.bind(var2)(var0);
                        var1 = '/';
                        var0 = var2;
                        if (!(var1 !== var3)) {
                            _fun28029_ip = 31;
                            continue _fun28029
                        }
                    case 27:
                        var0 = var1 + var2;
                    case 31:
                        return var0;
                }
            };
            var _closure1_slot24 = var0;
            var0 = function arg0, arg1() {
                _fun28030: for (var _fun28030_ip = 0;;) switch (_fun28030_ip) {
                    case 0:
                        var1 = arg0;
                        var5 = arg1;
                        if (var1) {
                            _fun28030_ip = 11;
                            continue _fun28030
                        }
                    case 9:
                        return var5;
                    case 11:
                        var0 = _closure1_slot24;
                        var4 = undefined;
                        var1 = var0.bind(var4)(var1);
                        var3 = var5.pathname;
                        var0 = var3.indexOf;
                        var6 = var0.bind(var3)(var1);
                        var3 = 0;
                        var0 = var5;
                        if (!(var3 === var6)) {
                            _fun28030_ip = 93;
                            continue _fun28030
                        }
                    case 51:
                        var3 = _closure1_slot18;
                        var2 = {};
                        var7 = var5.pathname;
                        var6 = var7.substr;
                        var1 = var1.length;
                        var1 = var6.bind(var7)(var1);
                        var2.pathname = var1;
                        var1 = {};
                        var0 = var3.bind(var4)(var1, var5, var2);
                    case 93:
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
            var0 = function arg0() {
                _fun28031: for (var _fun28031_ip = 0;;) switch (_fun28031_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = 'string';
                        var1 = typeof var3;
                        var0 = var3;
                        if (!(var2 !== var1)) {
                            _fun28031_ip = 53;
                            continue _fun28031
                        }
                    case 17:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.createPath;
                        var0 = var1.bind(var2)(var3);
                    case 53:
                        return var0;
                }
            };
            var _closure1_slot26 = var0;
            var0 = function arg0() {
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                return var0;
            };
            var _closure1_slot27 = var0;
            var0 = function() {
                var0 = undefined;
                return var0;
            };
            var _closure1_slot28 = var0;
            var3 = function() {
                var2 = _closure1_slot17;
                var1 = _closure1_slot10;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.location;
                return var0;
            };
            var _closure1_slot29 = var3;
            var7 = global;
            var13 = var7.Object;
            var9 = var13.defineProperty;
            var8 = {};
            var0 = true;
            var8.value = var0;
            var0 = '__esModule';
            var0 = var9.bind(var13)(var2, var0, var8);
            var8 = 0;
            var9 = var12[var8];
            var0 = undefined;
            var9 = var11.bind(var0)(var9);
            var13 = var10.bind(var0)(var9);
            var _closure1_slot2 = var13;
            var9 = 1;
            var9 = var12[var9];
            var9 = var11.bind(var0)(var9);
            var9 = var10.bind(var0)(var9);
            var _closure1_slot3 = var9;
            var9 = 2;
            var9 = var12[var9];
            var9 = var11.bind(var0)(var9);
            var9 = 3;
            var9 = var12[var9];
            var9 = var11.bind(var0)(var9);
            var9 = var10.bind(var0)(var9);
            var _closure1_slot4 = var9;
            var9 = 4;
            var9 = var12[var9];
            var9 = var11.bind(var0)(var9);
            var9 = var10.bind(var0)(var9);
            var _closure1_slot5 = var9;
            var9 = 5;
            var9 = var12[var9];
            var9 = var11.bind(var0)(var9);
            var9 = 6;
            var9 = var12[var9];
            var9 = var11.bind(var0)(var9);
            var9 = var10.bind(var0)(var9);
            var _closure1_slot6 = var9;
            var9 = var7.globalThis;
            var10 = 'undefined';
            var9 = typeof var9;
            if (!(var10 === var9)) {
                _fun28017_ip = 342;
                continue _fun28017
            }
        case 314:
            var9 = var7.window;
            var9 = typeof var9;
            if (!(var10 === var9)) {
                _fun28017_ip = 334;
                continue _fun28017
            }
        case 326:
            if (!(var0 === var6)) {
                _fun28017_ip = 332;
                continue _fun28017
            }
        case 330:
            var6 = {};
        case 332:
            _fun28017_ip = 340;
            continue _fun28017;
        case 334:
            var6 = var7.window;
        case 340:
            _fun28017_ip = 348;
            continue _fun28017;
        case 342:
            var6 = var7.globalThis;
        case 348:
            var _closure1_slot7 = var6;
            var6 = var13.createContext;
            if (var6) {
                _fun28017_ip = 366;
                continue _fun28017
            }
        case 361:
            var6 = function arg0, arg1() {
                _fun28036: for (var _fun28036_ip = 0;;) switch (_fun28036_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var1 = _closure1_slot7;
                        var4 = var1.__global_unique_id__;
                        if (var4) {
                            _fun28036_ip = 34;
                            continue _fun28036
                        }
                    case 32:
                        var4 = 0;
                    case 34:
                        var2 = 1;
                        var2 = var4 + var2;
                        var1.__global_unique_id__ = var2;
                        var1 = '__create-react-context-';
                        var2 = var1 + var2;
                        var1 = '__';
                        var4 = var2 + var1;
                        var _closure2_slot2 = var4;
                        var1 = _closure1_slot2;
                        var6 = var1.Component;
                        var2 = function(arg0) { // Environment: var0
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var0 = function() {
                                _fun28038: for (var _fun28038_ip = 0;;) switch (_fun28038_ip) {
                                    case 0:
                                        var1 = this;
                                        var3 = undefined;
                                        var4 = undefined;
                                        var2 = arguments.length;
                                        var0 = global;
                                        var0 = var0.Array;
                                        var5 = var0.prototype;
                                        var5 = Object.create(var5, {
                                            constructor: {
                                                value: var0
                                            }
                                        });
                                        var10 = var5;
                                        var9 = var2;
                                        var0 = new var10[var0](var9, var8);
                                        var7 = var0 instanceof Object ? var0 : var5;
                                        var0 = 0;
                                        var5 = var0 < var2;
                                        if (!var5) {
                                            _fun28038_ip = 65;
                                            continue _fun28038
                                        }
                                    case 50:
                                        var5 = arguments[var0];
                                        var7[var0] = var5;
                                        var0 = var0 + 1;
                                        if (var0 < var2) {
                                            _fun28038_ip = 50;
                                            continue _fun28038
                                        }
                                    case 65:
                                        var5 = _closure3_slot0;
                                        var4 = var5.call;
                                        var2 = var4.apply;
                                        var6 = new Array(1);
                                        var6[0] = var1;
                                        var0 = var6.concat;
                                        var0 = var0.bind(var6)(var7);
                                        var0 = var2.bind(var4)(var5, var0);
                                        if (var0) {
                                            _fun28038_ip = 112;
                                            continue _fun28038
                                        }
                                    case 109:
                                        var0 = var1;
                                    case 112:
                                        var1 = var0.props;
                                        var2 = var1.value;
                                        var1 = function arg0() {
                                            var0 = arg0;
                                            var _closure5_slot0 = var0;
                                            var0 = new Array(0);
                                            var _closure5_slot1 = var0;
                                            var0 = {};
                                            var2 = function arg0() {
                                                var2 = _closure5_slot1;
                                                var1 = var2.push;
                                                var0 = arg0;
                                                var0 = var1.bind(var2)(var0);
                                                var0 = undefined;
                                                return var0;
                                            };
                                            var0.on = var2;
                                            var2 = function arg0() {
                                                var1 = arg0;
                                                var _closure6_slot0 = var1;
                                                var3 = _closure5_slot1;
                                                var2 = var3.filter;
                                                var0 = function(arg0) { // Environment: var0
                                                    var1 = _closure6_slot0;
                                                    var0 = arg0;
                                                    var0 = var0 !== var1;
                                                    return var0;
                                                };
                                                var0 = var2.bind(var3)(var0);
                                                _closure5_slot1 = var0;
                                                var0 = undefined;
                                                return var0;
                                            };
                                            var0.off = var2;
                                            var2 = function() {
                                                var0 = _closure5_slot0;
                                                return var0;
                                            };
                                            var0.get = var2;
                                            var1 = function arg0, arg1() {
                                                var1 = arg1;
                                                var _closure6_slot0 = var1;
                                                var2 = arg0;
                                                _closure5_slot0 = var2;
                                                var2 = _closure5_slot1;
                                                var1 = var2.forEach;
                                                var0 = function(arg0) { // Environment: var0
                                                    var3 = _closure5_slot0;
                                                    var2 = _closure6_slot0;
                                                    var1 = arg0;
                                                    var0 = undefined;
                                                    var0 = var1.bind(var0)(var3, var2);
                                                    return var0;
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                var0 = undefined;
                                                return var0;
                                            };
                                            var0.set = var1;
                                            return var0;
                                        };
                                        var1 = var1.bind(var3)(var2);
                                        var0.emitter = var1;
                                        return var0;
                                }
                            };
                            var3 = _closure1_slot19;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var0, var4);
                            var2 = var0.prototype;
                            var3 = function() { // Environment: var1
                                var0 = {};
                                var2 = _closure2_slot2;
                                var1 = this;
                                var1 = var1.emitter;
                                var0[var2] = var1;
                                return var0;
                            };
                            var2.getChildContext = var3;
                            var3 = function(arg0) { // Environment: var1
                                _fun28047: for (var _fun28047_ip = 0;;) switch (_fun28047_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = this;
                                        var2 = var1.props;
                                        var3 = var2.value;
                                        var2 = var0.value;
                                        if (!(var3 !== var2)) {
                                            _fun28047_ip = 157;
                                            continue _fun28047
                                        }
                                    case 28:
                                        var2 = var1.props;
                                        var6 = var2.value;
                                        var5 = var0.value;
                                        if (!(var6 !== var5)) {
                                            _fun28047_ip = 60;
                                            continue _fun28047
                                        }
                                    case 47:
                                        var2 = var6 != var6;
                                        if (!var2) {
                                            _fun28047_ip = 58;
                                            continue _fun28047
                                        }
                                    case 54:
                                        var2 = var5 != var5;
                                    case 58:
                                        _fun28047_ip = 87;
                                        continue _fun28047;
                                    case 60:
                                        var3 = 0;
                                        var3 = var3 !== var6;
                                        if (var3) {
                                            _fun28047_ip = 84;
                                            continue _fun28047
                                        }
                                    case 69:
                                        var4 = 1;
                                        var7 = var4 / var6;
                                        var4 = var4 / var5;
                                        var3 = var7 === var4;
                                    case 84:
                                        var2 = var3;
                                    case 87:
                                        if (var2) {
                                            _fun28047_ip = 157;
                                            continue _fun28047
                                        }
                                    case 90:
                                        var4 = _closure2_slot1;
                                        var2 = 1073741823;
                                        var7 = 'function';
                                        var4 = typeof var4;
                                        if (!(var7 === var4)) {
                                            _fun28047_ip = 126;
                                            continue _fun28047
                                        }
                                    case 114:
                                        var4 = _closure2_slot1;
                                        var3 = undefined;
                                        var2 = var4.bind(var3)(var6, var5);
                                    case 126:
                                        var3 = var2 | 0;
                                        var2 = 0;
                                        if (!(var2 !== var3)) {
                                            _fun28047_ip = 157;
                                            continue _fun28047
                                        }
                                    case 135:
                                        var2 = var1.emitter;
                                        var1 = var2.set;
                                        var0 = var0.value;
                                        var0 = var1.bind(var2)(var0, var3);
                                    case 157:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2.componentWillReceiveProps = var3;
                            var1 = function() { // Environment: var1
                                var0 = this;
                                var0 = var0.props;
                                var0 = var0.children;
                                return var0;
                            };
                            var2.render = var1;
                            return var0;
                        };
                        var5 = undefined;
                        var2 = var2.bind(var5)(var6);
                        var6 = {};
                        var3 = _closure1_slot3;
                        var7 = var3.object;
                        var7 = var7.isRequired;
                        var6[var4] = var7;
                        var2.childContextTypes = var6;
                        var1 = var1.Component;
                        var0 = function(arg0) { // Environment: var0
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var0 = function() {
                                _fun28050: for (var _fun28050_ip = 0;;) switch (_fun28050_ip) {
                                    case 0:
                                        var3 = this;
                                        var2 = undefined;
                                        var5 = undefined;
                                        var4 = arguments.length;
                                        var0 = global;
                                        var0 = var0.Array;
                                        var6 = var0.prototype;
                                        var6 = Object.create(var6, {
                                            constructor: {
                                                value: var0
                                            }
                                        });
                                        var11 = var6;
                                        var10 = var4;
                                        var0 = new var11[var0](var10, var9);
                                        var8 = var0 instanceof Object ? var0 : var6;
                                        var0 = 0;
                                        var6 = var0 < var4;
                                        if (!var6) {
                                            _fun28050_ip = 67;
                                            continue _fun28050
                                        }
                                    case 52:
                                        var6 = arguments[var0];
                                        var8[var0] = var6;
                                        var0 = var0 + 1;
                                        if (var0 < var4) {
                                            _fun28050_ip = 52;
                                            continue _fun28050
                                        }
                                    case 67:
                                        var6 = _closure3_slot0;
                                        var5 = var6.call;
                                        var4 = var5.apply;
                                        var7 = new Array(1);
                                        var7[0] = var3;
                                        var0 = var7.concat;
                                        var0 = var0.bind(var7)(var8);
                                        var0 = var4.bind(var5)(var6, var0);
                                        if (var0) {
                                            _fun28050_ip = 114;
                                            continue _fun28050
                                        }
                                    case 111:
                                        var0 = var3;
                                    case 114:
                                        var _closure4_slot0 = var0;
                                        var0.observedBits = var2;
                                        var2 = {};
                                        var3 = var0.getValue;
                                        var3 = var3.bind(var0)();
                                        var2.value = var3;
                                        var0.state = var2;
                                        var1 = function(arg0, arg1) { // Environment: var1
                                            _fun28051: for (var _fun28051_ip = 0;;) switch (_fun28051_ip) {
                                                case 0:
                                                    var0 = _closure4_slot0;
                                                    var1 = var0.observedBits;
                                                    var0 = arg1;
                                                    var0 = var1 & var0;
                                                    if (!var0) {
                                                        _fun28051_ip = 58;
                                                        continue _fun28051
                                                    }
                                                case 23:
                                                    var2 = _closure4_slot0;
                                                    var1 = var2.setState;
                                                    var0 = {};
                                                    var4 = _closure4_slot0;
                                                    var3 = var4.getValue;
                                                    var3 = var3.bind(var4)();
                                                    var0.value = var3;
                                                    var0 = var1.bind(var2)(var0);
                                                case 58:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0.onUpdate = var1;
                                        return var0;
                                }
                            };
                            var3 = _closure1_slot19;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var0, var4);
                            var2 = var0.prototype;
                            var3 = function(arg0) { // Environment: var1
                                _fun28052: for (var _fun28052_ip = 0;;) switch (_fun28052_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.observedBits;
                                        var0 = null;
                                        if (!(var0 == var1)) {
                                            _fun28052_ip = 21;
                                            continue _fun28052
                                        }
                                    case 15:
                                        var1 = 1073741823;
                                    case 21:
                                        var0 = this;
                                        var0.observedBits = var1;
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2.componentWillReceiveProps = var3;
                            var3 = function() { // Environment: var1
                                _fun28053: for (var _fun28053_ip = 0;;) switch (_fun28053_ip) {
                                    case 0:
                                        var1 = this;
                                        var3 = var1.context;
                                        var2 = _closure2_slot2;
                                        var2 = var3[var2];
                                        if (!var2) {
                                            _fun28053_ip = 52;
                                            continue _fun28053
                                        }
                                    case 22:
                                        var2 = var1.context;
                                        var0 = _closure2_slot2;
                                        var3 = var2[var0];
                                        var2 = var3.on;
                                        var0 = var1.onUpdate;
                                        var0 = var2.bind(var3)(var0);
                                    case 52:
                                        var0 = var1.props;
                                        var0 = var0.observedBits;
                                        var2 = null;
                                        if (!(var2 == var0)) {
                                            _fun28053_ip = 75;
                                            continue _fun28053
                                        }
                                    case 69:
                                        var0 = 1073741823;
                                    case 75:
                                        var1.observedBits = var0;
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2.componentDidMount = var3;
                            var3 = function() { // Environment: var1
                                _fun28054: for (var _fun28054_ip = 0;;) switch (_fun28054_ip) {
                                    case 0:
                                        var0 = this;
                                        var3 = var0.context;
                                        var2 = _closure2_slot2;
                                        var2 = var3[var2];
                                        if (!var2) {
                                            _fun28054_ip = 52;
                                            continue _fun28054
                                        }
                                    case 22:
                                        var2 = var0.context;
                                        var1 = _closure2_slot2;
                                        var2 = var2[var1];
                                        var1 = var2.off;
                                        var0 = var0.onUpdate;
                                        var0 = var1.bind(var2)(var0);
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2.componentWillUnmount = var3;
                            var3 = function() { // Environment: var1
                                _fun28055: for (var _fun28055_ip = 0;;) switch (_fun28055_ip) {
                                    case 0:
                                        var2 = this;
                                        var3 = var2.context;
                                        var0 = _closure2_slot2;
                                        var0 = var3[var0];
                                        if (var0) {
                                            _fun28055_ip = 28;
                                            continue _fun28055
                                        }
                                    case 22:
                                        var0 = _closure2_slot0;
                                        _fun28055_ip = 50;
                                        continue _fun28055;
                                    case 28:
                                        var2 = var2.context;
                                        var1 = _closure2_slot2;
                                        var2 = var2[var1];
                                        var1 = var2.get;
                                        var0 = var1.bind(var2)();
                                    case 50:
                                        return var0;
                                }
                            };
                            var2.getValue = var3;
                            var1 = function() { // Environment: var1
                                _fun28056: for (var _fun28056_ip = 0;;) switch (_fun28056_ip) {
                                    case 0:
                                        var0 = this;
                                        var1 = var0.props;
                                        var3 = var1.children;
                                        var1 = global;
                                        var2 = var1.Array;
                                        var1 = var2.isArray;
                                        var1 = var1.bind(var2)(var3);
                                        var2 = var3;
                                        if (!var1) {
                                            _fun28056_ip = 43;
                                            continue _fun28056
                                        }
                                    case 37:
                                        var1 = 0;
                                        var2 = var3[var1];
                                    case 43:
                                        var0 = var0.state;
                                        var1 = var0.value;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var2.render = var1;
                            return var0;
                        };
                        var1 = var0.bind(var5)(var1);
                        var0 = {};
                        var3 = var3.object;
                        var0[var4] = var3;
                        var1.contextTypes = var0;
                        var0 = {};
                        var0.Provider = var2;
                        var0.Consumer = var1;
                        return var0;
                }
            };
        case 366:
            var _closure1_slot8 = var6;
            var9 = function arg0() {
                var1 = _closure1_slot8;
                var0 = undefined;
                var0 = var1.bind(var0)();
                var1 = arg0;
                var0.displayName = var1;
                return var0;
            };
            var6 = 'Router-History';
            var7 = var9.bind(var0)(var6);
            var _closure1_slot9 = var7;
            var6 = 'Router';
            var6 = var9.bind(var0)(var6);
            var _closure1_slot10 = var6;
            var10 = var13.Component;
            var9 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function arg0() {
                    _fun28059: for (var _fun28059_ip = 0;;) switch (_fun28059_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = this;
                            var4 = _closure2_slot0;
                            var0 = var4.call;
                            var0 = var0.bind(var4)(var3, var2);
                            if (var0) {
                                _fun28059_ip = 32;
                                continue _fun28059
                            }
                        case 29:
                            var0 = var3;
                        case 32:
                            var _closure3_slot0 = var0;
                            var3 = {};
                            var4 = var2.history;
                            var4 = var4.location;
                            var3.location = var4;
                            var0.state = var3;
                            var3 = false;
                            var0._isMounted = var3;
                            var3 = null;
                            var0._pendingLocation = var3;
                            var3 = var2.staticContext;
                            if (var3) {
                                _fun28059_ip = 112;
                                continue _fun28059
                            }
                        case 84:
                            var3 = var2.history;
                            var2 = var3.listen;
                            var1 = function(arg0) { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var1._pendingLocation = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var0.unlisten = var1;
                        case 112:
                            return var0;
                    }
                };
                var _closure2_slot1 = var0;
                var3 = _closure1_slot19;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var2 = function(arg0) { // Environment: var1
                    var0 = {
                        'path': '/',
                        'url': '/'
                    };
                    var2 = '/';
                    var1 = {};
                    var0.params = var1;
                    var1 = arg0;
                    var1 = var2 === var1;
                    var0.isExact = var1;
                    return var0;
                };
                var0.computeRootMatch = var2;
                var2 = var0.prototype;
                var3 = function() { // Environment: var1
                    _fun28062: for (var _fun28062_ip = 0;;) switch (_fun28062_ip) {
                        case 0:
                            var2 = this;
                            var _closure3_slot0 = var2;
                            var1 = true;
                            var2._isMounted = var1;
                            var1 = var2.unlisten;
                            if (!var1) {
                                _fun28062_ip = 36;
                                continue _fun28062
                            }
                        case 26:
                            var1 = var2.unlisten;
                            var1 = var1.bind(var2)();
                        case 36:
                            var1 = var2.props;
                            var1 = var1.staticContext;
                            if (var1) {
                                _fun28062_ip = 83;
                                continue _fun28062
                            }
                        case 50:
                            var1 = var2.props;
                            var3 = var1.history;
                            var1 = var3.listen;
                            var0 = function(arg0) { // Environment: var0
                                _fun28063: for (var _fun28063_ip = 0;;) switch (_fun28063_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var1 = var1._isMounted;
                                        if (!var1) {
                                            _fun28063_ip = 40;
                                            continue _fun28063
                                        }
                                    case 16:
                                        var2 = _closure3_slot0;
                                        var1 = var2.setState;
                                        var0 = {};
                                        var3 = arg0;
                                        var0.location = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 40:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var3)(var0);
                            var2.unlisten = var0;
                        case 83:
                            var0 = var2._pendingLocation;
                            if (!var0) {
                                _fun28062_ip = 115;
                                continue _fun28062
                            }
                        case 92:
                            var1 = var2.setState;
                            var0 = {};
                            var3 = var2._pendingLocation;
                            var0.location = var3;
                            var0 = var1.bind(var2)(var0);
                        case 115:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.componentDidMount = var3;
                var3 = function() { // Environment: var1
                    _fun28064: for (var _fun28064_ip = 0;;) switch (_fun28064_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.unlisten;
                            if (!var0) {
                                _fun28064_ip = 38;
                                continue _fun28064
                            }
                        case 12:
                            var0 = var1.unlisten;
                            var0 = var0.bind(var1)();
                            var0 = false;
                            var1._isMounted = var0;
                            var0 = null;
                            var1._pendingLocation = var0;
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.componentWillUnmount = var3;
                var1 = function() { // Environment: var1
                    _fun28065: for (var _fun28065_ip = 0;;) switch (_fun28065_ip) {
                        case 0:
                            var7 = this;
                            var4 = _closure1_slot2;
                            var3 = var4.createElement;
                            var1 = _closure1_slot10;
                            var2 = var1.Provider;
                            var1 = {};
                            var5 = {};
                            var6 = var7.props;
                            var6 = var6.history;
                            var5.history = var6;
                            var6 = var7.state;
                            var6 = var6.location;
                            var5.location = var6;
                            var9 = _closure2_slot1;
                            var8 = var9.computeRootMatch;
                            var6 = var7.state;
                            var6 = var6.location;
                            var6 = var6.pathname;
                            var6 = var8.bind(var9)(var6);
                            var5.match = var6;
                            var6 = var7.props;
                            var6 = var6.staticContext;
                            var5.staticContext = var6;
                            var1.value = var5;
                            var6 = var4.createElement;
                            var0 = _closure1_slot9;
                            var5 = var0.Provider;
                            var0 = {};
                            var8 = var7.props;
                            var8 = var8.children;
                            if (var8) {
                                _fun28065_ip = 152;
                                continue _fun28065
                            }
                        case 150:
                            var8 = null;
                        case 152:
                            var0.children = var8;
                            var7 = var7.props;
                            var7 = var7.history;
                            var0.value = var7;
                            var0 = var6.bind(var4)(var5, var0);
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var2.render = var1;
                return var0;
            };
            var10 = var9.bind(var0)(var10);
            var _closure1_slot11 = var10;
            var11 = var13.Component;
            var9 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function() {
                    _fun28067: for (var _fun28067_ip = 0;;) switch (_fun28067_ip) {
                        case 0:
                            var1 = this;
                            var3 = undefined;
                            var4 = undefined;
                            var2 = arguments.length;
                            var0 = global;
                            var0 = var0.Array;
                            var5 = var0.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var10 = var5;
                            var9 = var2;
                            var0 = new var10[var0](var9, var8);
                            var7 = var0 instanceof Object ? var0 : var5;
                            var0 = 0;
                            var5 = var0 < var2;
                            if (!var5) {
                                _fun28067_ip = 65;
                                continue _fun28067
                            }
                        case 50:
                            var5 = arguments[var0];
                            var7[var0] = var5;
                            var0 = var0 + 1;
                            if (var0 < var2) {
                                _fun28067_ip = 50;
                                continue _fun28067
                            }
                        case 65:
                            var5 = _closure2_slot0;
                            var4 = var5.call;
                            var2 = var4.apply;
                            var6 = new Array(1);
                            var6[0] = var1;
                            var0 = var6.concat;
                            var0 = var0.bind(var6)(var7);
                            var0 = var2.bind(var4)(var5, var0);
                            if (var0) {
                                _fun28067_ip = 112;
                                continue _fun28067
                            }
                        case 109:
                            var0 = var1;
                        case 112:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 7;
                            var1 = var4[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.createMemoryHistory;
                            var1 = var0.props;
                            var1 = var2.bind(var3)(var1);
                            var0.history = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot19;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var2 = var0.prototype;
                var1 = function() { // Environment: var1
                    var4 = this;
                    var3 = _closure1_slot2;
                    var2 = var3.createElement;
                    var1 = _closure1_slot11;
                    var0 = {};
                    var5 = var4.history;
                    var0.history = var5;
                    var4 = var4.props;
                    var4 = var4.children;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2.render = var1;
                return var0;
            };
            var12 = var9.bind(var0)(var11);
            var11 = var13.Component;
            var9 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function() {
                    _fun28070: for (var _fun28070_ip = 0;;) switch (_fun28070_ip) {
                        case 0:
                            var1 = this;
                            var0 = undefined;
                            var3 = _closure2_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var0 = var2.bind(var3)(var1, var0);
                            if (var0) {
                                _fun28070_ip = 31;
                                continue _fun28070
                            }
                        case 28:
                            var0 = var1;
                        case 31:
                            return var0;
                    }
                };
                var3 = _closure1_slot19;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var2 = var0.prototype;
                var3 = function() { // Environment: var1
                    _fun28071: for (var _fun28071_ip = 0;;) switch (_fun28071_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.props;
                            var0 = var0.onMount;
                            if (!var0) {
                                _fun28071_ip = 39;
                                continue _fun28071
                            }
                        case 17:
                            var0 = var2.props;
                            var1 = var0.onMount;
                            var0 = var1.call;
                            var0 = var0.bind(var1)(var2, var2);
                        case 39:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.componentDidMount = var3;
                var3 = function(arg0) { // Environment: var1
                    _fun28072: for (var _fun28072_ip = 0;;) switch (_fun28072_ip) {
                        case 0:
                            var3 = this;
                            var0 = var3.props;
                            var0 = var0.onUpdate;
                            if (!var0) {
                                _fun28072_ip = 43;
                                continue _fun28072
                            }
                        case 17:
                            var0 = var3.props;
                            var2 = var0.onUpdate;
                            var1 = var2.call;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var3, var3, var0);
                        case 43:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.componentDidUpdate = var3;
                var3 = function() { // Environment: var1
                    _fun28073: for (var _fun28073_ip = 0;;) switch (_fun28073_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.props;
                            var0 = var0.onUnmount;
                            if (!var0) {
                                _fun28073_ip = 39;
                                continue _fun28073
                            }
                        case 17:
                            var0 = var2.props;
                            var1 = var0.onUnmount;
                            var0 = var1.call;
                            var0 = var0.bind(var1)(var2, var2);
                        case 39:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.componentWillUnmount = var3;
                var1 = function() { // Environment: var1
                    var0 = null;
                    return var0;
                };
                var2.render = var1;
                return var0;
            };
            var9 = var9.bind(var0)(var11);
            var _closure1_slot12 = var9;
            var9 = {};
            var _closure1_slot13 = var9;
            var _closure1_slot14 = var8;
            var9 = {};
            var _closure1_slot15 = var9;
            var _closure1_slot16 = var8;
            var9 = var13.Component;
            var8 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function() {
                    _fun28076: for (var _fun28076_ip = 0;;) switch (_fun28076_ip) {
                        case 0:
                            var1 = this;
                            var0 = undefined;
                            var3 = _closure2_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var0 = var2.bind(var3)(var1, var0);
                            if (var0) {
                                _fun28076_ip = 31;
                                continue _fun28076
                            }
                        case 28:
                            var0 = var1;
                        case 31:
                            return var0;
                    }
                };
                var3 = _closure1_slot19;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var2 = var0.prototype;
                var1 = function() { // Environment: var1
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var4 = _closure1_slot2;
                    var3 = var4.createElement;
                    var1 = _closure1_slot10;
                    var2 = var1.Consumer;
                    var1 = null;
                    var0 = function(arg0) { // Environment: var0
                        _fun28078: for (var _fun28078_ip = 0;;) switch (_fun28078_ip) {
                            case 0:
                                var4 = arg0;
                                if (var4) {
                                    _fun28078_ip = 22;
                                    continue _fun28078
                                }
                            case 6:
                                var2 = _closure1_slot4;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                            case 22:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var7 = var1.location;
                                if (var7) {
                                    _fun28078_ip = 47;
                                    continue _fun28078
                                }
                            case 42:
                                var7 = var4.location;
                            case 47:
                                var3 = _closure1_slot18;
                                var2 = {};
                                var2.location = var7;
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var1 = var1.computedMatch;
                                var5 = _closure3_slot0;
                                var5 = var5.props;
                                if (var1) {
                                    _fun28078_ip = 133;
                                    continue _fun28078
                                }
                            case 87:
                                var1 = var5.path;
                                if (var1) {
                                    _fun28078_ip = 104;
                                    continue _fun28078
                                }
                            case 96:
                                var1 = var4.match;
                                _fun28078_ip = 131;
                                continue _fun28078;
                            case 104:
                                var10 = _closure1_slot23;
                                var9 = var7.pathname;
                                var7 = _closure3_slot0;
                                var8 = var7.props;
                                var7 = undefined;
                                var1 = var10.bind(var7)(var9, var8);
                            case 131:
                                _fun28078_ip = 139;
                                continue _fun28078;
                            case 133:
                                var1 = var5.computedMatch;
                            case 139:
                                var2.match = var1;
                                var9 = undefined;
                                var1 = {};
                                var8 = var3.bind(var9)(var1, var4, var2);
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var1 = var0.children;
                                var11 = var0.component;
                                var10 = var0.render;
                                var0 = global;
                                var2 = var0.Array;
                                var0 = var2.isArray;
                                var0 = var0.bind(var2)(var1);
                                if (!var0) {
                                    _fun28078_ip = 229;
                                    continue _fun28078
                                }
                            case 202:
                                var2 = _closure1_slot2;
                                var3 = var2.Children;
                                var2 = var3.count;
                                var3 = var2.bind(var3)(var1);
                                var2 = 0;
                                var0 = var2 === var3;
                            case 229:
                                var7 = var1;
                                if (!var0) {
                                    _fun28078_ip = 237;
                                    continue _fun28078
                                }
                            case 235:
                                var7 = null;
                            case 237:
                                var4 = _closure1_slot2;
                                var3 = var4.createElement;
                                var0 = _closure1_slot10;
                                var2 = var0.Provider;
                                var1 = {};
                                var1.value = var8;
                                var0 = var8.match;
                                if (var0) {
                                    _fun28078_ip = 292;
                                    continue _fun28078
                                }
                            case 272:
                                var12 = 'function';
                                var5 = typeof var7;
                                var0 = null;
                                if (!(var12 === var5)) {
                                    _fun28078_ip = 290;
                                    continue _fun28078
                                }
                            case 285:
                                var0 = var7.bind(var9)(var8);
                            case 290:
                                _fun28078_ip = 353;
                                continue _fun28078;
                            case 292:
                                if (var7) {
                                    _fun28078_ip = 328;
                                    continue _fun28078
                                }
                            case 295:
                                if (var11) {
                                    _fun28078_ip = 310;
                                    continue _fun28078
                                }
                            case 298:
                                var5 = null;
                                if (!var10) {
                                    _fun28078_ip = 308;
                                    continue _fun28078
                                }
                            case 303:
                                var5 = var10.bind(var9)(var8);
                            case 308:
                                _fun28078_ip = 326;
                                continue _fun28078;
                            case 310:
                                var10 = _closure1_slot2;
                                var6 = var10.createElement;
                                var5 = var6.bind(var10)(var11, var8);
                            case 326:
                                _fun28078_ip = 350;
                                continue _fun28078;
                            case 328:
                                var11 = 'function';
                                var10 = typeof var7;
                                var6 = var7;
                                if (!(var11 === var10)) {
                                    _fun28078_ip = 347;
                                    continue _fun28078
                                }
                            case 342:
                                var6 = var7.bind(var9)(var8);
                            case 347:
                                var5 = var6;
                            case 350:
                                var0 = var5;
                            case 353:
                                var0 = var3.bind(var4)(var2, var1, var0);
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var2.render = var1;
                return var0;
            };
            var11 = var8.bind(var0)(var9);
            var9 = var13.Component;
            var8 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function() {
                    _fun28080: for (var _fun28080_ip = 0;;) switch (_fun28080_ip) {
                        case 0:
                            var2 = this;
                            var4 = undefined;
                            var3 = arguments.length;
                            var0 = global;
                            var0 = var0.Array;
                            var5 = var0.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var10 = var5;
                            var9 = var3;
                            var0 = new var10[var0](var9, var8);
                            var7 = var0 instanceof Object ? var0 : var5;
                            var0 = 0;
                            var5 = var0 < var3;
                            if (!var5) {
                                _fun28080_ip = 65;
                                continue _fun28080
                            }
                        case 50:
                            var5 = arguments[var0];
                            var7[var0] = var5;
                            var0 = var0 + 1;
                            if (var0 < var3) {
                                _fun28080_ip = 50;
                                continue _fun28080
                            }
                        case 65:
                            var5 = _closure2_slot0;
                            var4 = var5.call;
                            var3 = var4.apply;
                            var6 = new Array(1);
                            var6[0] = var2;
                            var0 = var6.concat;
                            var0 = var0.bind(var6)(var7);
                            var0 = var3.bind(var4)(var5, var0);
                            if (var0) {
                                _fun28080_ip = 112;
                                continue _fun28080
                            }
                        case 109:
                            var0 = var2;
                        case 112:
                            var _closure3_slot0 = var0;
                            var2 = function(arg0) { // Environment: var1
                                var3 = _closure3_slot0;
                                var2 = var3.navigateTo;
                                var1 = arg0;
                                var0 = 'PUSH';
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.handlePush = var2;
                            var2 = function(arg0) { // Environment: var1
                                var3 = _closure3_slot0;
                                var2 = var3.navigateTo;
                                var1 = arg0;
                                var0 = 'REPLACE';
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.handleReplace = var2;
                            var2 = function() { // Environment: var1
                                var0 = _closure1_slot28;
                                return var0;
                            };
                            var0.handleListen = var2;
                            var1 = function() { // Environment: var1
                                var0 = _closure1_slot28;
                                return var0;
                            };
                            var0.handleBlock = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot19;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var2 = var0.prototype;
                var3 = function(arg0, arg1) { // Environment: var1
                    _fun28085: for (var _fun28085_ip = 0;;) switch (_fun28085_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0.props;
                            var2 = var1.basename;
                            var8 = '';
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun28085_ip = 27;
                                continue _fun28085
                            }
                        case 24:
                            var8 = var2;
                        case 27:
                            var2 = var1.context;
                            if (!(var0 === var2)) {
                                _fun28085_ip = 38;
                                continue _fun28085
                            }
                        case 36:
                            var2 = {};
                        case 38:
                            var1 = arg1;
                            var2.action = var1;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var3 = 7;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.createLocation;
                            var3 = arg0;
                            var7 = var4.bind(var5)(var3);
                            var3 = var7;
                            if (!var8) {
                                _fun28085_ip = 129;
                                continue _fun28085
                            }
                        case 90:
                            var6 = _closure1_slot18;
                            var5 = {};
                            var4 = _closure1_slot24;
                            var8 = var4.bind(var0)(var8);
                            var4 = var7.pathname;
                            var4 = var8 + var4;
                            var5.pathname = var4;
                            var4 = {};
                            var3 = var6.bind(var0)(var4, var7, var5);
                        case 129:
                            var2.location = var3;
                            var3 = _closure1_slot26;
                            var1 = var2.location;
                            var1 = var3.bind(var0)(var1);
                            var2.url = var1;
                            return var0;
                    }
                };
                var2.navigateTo = var3;
                var1 = function() { // Environment: var1
                    _fun28086: for (var _fun28086_ip = 0;;) switch (_fun28086_ip) {
                        case 0:
                            var1 = this;
                            var8 = var1.props;
                            var0 = var8.basename;
                            var5 = '';
                            var7 = undefined;
                            if (!(var7 !== var0)) {
                                _fun28086_ip = 29;
                                continue _fun28086
                            }
                        case 26:
                            var5 = var0;
                        case 29:
                            var _closure3_slot0 = var5;
                            var0 = var8.context;
                            if (!(var7 === var0)) {
                                _fun28086_ip = 44;
                                continue _fun28086
                            }
                        case 42:
                            var0 = {};
                        case 44:
                            var3 = var8.location;
                            var10 = '/';
                            if (!(var7 !== var3)) {
                                _fun28086_ip = 60;
                                continue _fun28086
                            }
                        case 57:
                            var10 = var3;
                        case 60:
                            var6 = _closure1_slot21;
                            var3 = ['basename', 'context', 'location'];
                            var6 = var6.bind(var7)(var8, var3);
                            var8 = {};
                            var2 = function arg0() {
                                var2 = _closure1_slot24;
                                var3 = _closure3_slot0;
                                var4 = _closure1_slot26;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var4.bind(var1)(var0);
                                var0 = var3 + var0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var8.createHref = var2;
                            var2 = 'POP';
                            var8.action = var2;
                            var3 = _closure1_slot25;
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var2 = 7;
                            var2 = var11[var2];
                            var9 = var9.bind(var7)(var2);
                            var2 = var9.createLocation;
                            var2 = var2.bind(var9)(var10);
                            var2 = var3.bind(var7)(var5, var2);
                            var8.location = var2;
                            var2 = var1.handlePush;
                            var8.push = var2;
                            var2 = var1.handleReplace;
                            var8.replace = var2;
                            var2 = _closure1_slot27;
                            var3 = var2.bind(var7)();
                            var8.go = var3;
                            var3 = var2.bind(var7)();
                            var8.goBack = var3;
                            var2 = var2.bind(var7)();
                            var8.goForward = var2;
                            var2 = var1.handleListen;
                            var8.listen = var2;
                            var1 = var1.handleBlock;
                            var8.block = var1;
                            var3 = _closure1_slot2;
                            var2 = var3.createElement;
                            var1 = _closure1_slot11;
                            var5 = _closure1_slot18;
                            var4 = {};
                            var4.history = var8;
                            var4.staticContext = var0;
                            var0 = {};
                            var0 = var5.bind(var7)(var0, var6, var4);
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var2.render = var1;
                return var0;
            };
            var9 = var8.bind(var0)(var9);
            var14 = var13.Component;
            var8 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function() {
                    _fun28089: for (var _fun28089_ip = 0;;) switch (_fun28089_ip) {
                        case 0:
                            var1 = this;
                            var0 = undefined;
                            var3 = _closure2_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var0 = var2.bind(var3)(var1, var0);
                            if (var0) {
                                _fun28089_ip = 31;
                                continue _fun28089
                            }
                        case 28:
                            var0 = var1;
                        case 31:
                            return var0;
                    }
                };
                var3 = _closure1_slot19;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var2 = var0.prototype;
                var1 = function() { // Environment: var1
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var4 = _closure1_slot2;
                    var3 = var4.createElement;
                    var1 = _closure1_slot10;
                    var2 = var1.Consumer;
                    var1 = null;
                    var0 = function(arg0) { // Environment: var0
                        _fun28091: for (var _fun28091_ip = 0;;) switch (_fun28091_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                if (var1) {
                                    _fun28091_ip = 28;
                                    continue _fun28091
                                }
                            case 12:
                                var3 = _closure1_slot4;
                                var2 = undefined;
                                var0 = false;
                                var0 = var3.bind(var2)(var0);
                            case 28:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var6 = var2.location;
                                if (var6) {
                                    _fun28091_ip = 53;
                                    continue _fun28091
                                }
                            case 48:
                                var6 = var1.location;
                            case 53:
                                var _closure4_slot3 = var6;
                                var2 = _closure1_slot2;
                                var4 = var2.Children;
                                var3 = var4.forEach;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.children;
                                var0 = function(arg0) { // Environment: var5
                                    _fun28092: for (var _fun28092_ip = 0;;) switch (_fun28092_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = _closure4_slot2;
                                            var0 = null;
                                            if (!(var0 == var2)) {
                                                _fun28092_ip = 131;
                                                continue _fun28092
                                            }
                                        case 16:
                                            var2 = _closure1_slot2;
                                            var0 = var2.isValidElement;
                                            var0 = var0.bind(var2)(var3);
                                            if (!var0) {
                                                _fun28092_ip = 131;
                                                continue _fun28092
                                            }
                                        case 37:
                                            var _closure4_slot1 = var3;
                                            var0 = var3.props;
                                            var2 = var0.path;
                                            if (var2) {
                                                _fun28092_ip = 65;
                                                continue _fun28092
                                            }
                                        case 55:
                                            var0 = var3.props;
                                            var2 = var0.from;
                                        case 65:
                                            if (var2) {
                                                _fun28092_ip = 80;
                                                continue _fun28092
                                            }
                                        case 68:
                                            var0 = _closure4_slot0;
                                            var0 = var0.match;
                                            _fun28092_ip = 127;
                                            continue _fun28092;
                                        case 80:
                                            var5 = _closure1_slot23;
                                            var4 = _closure4_slot3;
                                            var4 = var4.pathname;
                                            var8 = _closure1_slot18;
                                            var7 = var3.props;
                                            var6 = {};
                                            var6.path = var2;
                                            var3 = undefined;
                                            var2 = {};
                                            var2 = var8.bind(var3)(var2, var7, var6);
                                            var0 = var5.bind(var3)(var4, var2);
                                        case 127:
                                            var _closure4_slot2 = var0;
                                        case 131:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var3.bind(var4)(var2, var0);
                                var2 = _closure4_slot2;
                                var0 = null;
                                if (!var2) {
                                    _fun28091_ip = 144;
                                    continue _fun28091
                                }
                            case 109:
                                var4 = _closure1_slot2;
                                var3 = var4.cloneElement;
                                var2 = _closure4_slot1;
                                var1 = {};
                                var1.location = var6;
                                var5 = _closure4_slot2;
                                var1.computedMatch = var5;
                                var0 = var3.bind(var4)(var2, var1);
                            case 144:
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var2.render = var1;
                return var0;
            };
            var8 = var8.bind(var0)(var14);
            var13 = var13.useContext;
            var _closure1_slot17 = var13;
            var2.MemoryRouter = var12;
            var12 = function arg0() {
                _fun28093: for (var _fun28093_ip = 0;;) switch (_fun28093_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.message;
                        var _closure2_slot0 = var2;
                        var2 = var1.when;
                        var1 = undefined;
                        var1 = var1 === var2;
                        if (var1) {
                            _fun28093_ip = 32;
                            continue _fun28093
                        }
                    case 29:
                        var1 = var2;
                    case 32:
                        var _closure2_slot1 = var1;
                        var4 = _closure1_slot2;
                        var3 = var4.createElement;
                        var1 = _closure1_slot10;
                        var2 = var1.Consumer;
                        var1 = null;
                        var0 = function(arg0) { // Environment: var0
                            _fun28094: for (var _fun28094_ip = 0;;) switch (_fun28094_ip) {
                                case 0:
                                    var0 = arg0;
                                    if (var0) {
                                        _fun28094_ip = 24;
                                        continue _fun28094
                                    }
                                case 8:
                                    var3 = _closure1_slot4;
                                    var2 = undefined;
                                    var1 = false;
                                    var1 = var3.bind(var2)(var1);
                                case 24:
                                    var1 = _closure2_slot1;
                                    if (!var1) {
                                        _fun28094_ip = 124;
                                        continue _fun28094
                                    }
                                case 34:
                                    var1 = var0.staticContext;
                                    if (var1) {
                                        _fun28094_ip = 124;
                                        continue _fun28094
                                    }
                                case 43:
                                    var0 = var0.history;
                                    var0 = var0.block;
                                    var _closure3_slot0 = var0;
                                    var3 = _closure1_slot2;
                                    var2 = var3.createElement;
                                    var1 = _closure1_slot12;
                                    var0 = {};
                                    var6 = function arg0() {
                                        var2 = _closure3_slot0;
                                        var1 = _closure2_slot0;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = arg0;
                                        var1.release = var2;
                                        return var0;
                                    };
                                    var0.onMount = var6;
                                    var6 = function arg0, arg1() {
                                        _fun28096: for (var _fun28096_ip = 0;;) switch (_fun28096_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = arg1;
                                                var3 = var0.message;
                                                var2 = _closure2_slot0;
                                                if (!(var3 !== var2)) {
                                                    _fun28096_ip = 56;
                                                    continue _fun28096
                                                }
                                            case 22:
                                                var2 = var1.release;
                                                var2 = var2.bind(var1)();
                                                var3 = _closure3_slot0;
                                                var2 = _closure2_slot0;
                                                var0 = undefined;
                                                var0 = var3.bind(var0)(var2);
                                                var1.release = var0;
                                            case 56:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0.onUpdate = var6;
                                    var5 = function arg0() {
                                        var1 = arg0;
                                        var0 = var1.release;
                                        var0 = var0.bind(var1)();
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var0.onUnmount = var5;
                                    var4 = _closure2_slot0;
                                    var0.message = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                case 124:
                                    var0 = null;
                                    return var0;
                            }
                        };
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                }
            };
            var2.Prompt = var12;
            var12 = function arg0() {
                _fun28098: for (var _fun28098_ip = 0;;) switch (_fun28098_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.computedMatch;
                        var _closure2_slot0 = var2;
                        var2 = var1.to;
                        var _closure2_slot1 = var2;
                        var2 = var1.push;
                        var1 = undefined;
                        var1 = var1 !== var2;
                        if (!var1) {
                            _fun28098_ip = 41;
                            continue _fun28098
                        }
                    case 38:
                        var1 = var2;
                    case 41:
                        var _closure2_slot2 = var1;
                        var4 = _closure1_slot2;
                        var3 = var4.createElement;
                        var1 = _closure1_slot10;
                        var2 = var1.Consumer;
                        var1 = null;
                        var0 = function(arg0) { // Environment: var0
                            _fun28099: for (var _fun28099_ip = 0;;) switch (_fun28099_ip) {
                                case 0:
                                    var1 = arg0;
                                    if (var1) {
                                        _fun28099_ip = 24;
                                        continue _fun28099
                                    }
                                case 8:
                                    var3 = _closure1_slot4;
                                    var2 = undefined;
                                    var0 = false;
                                    var0 = var3.bind(var2)(var0);
                                case 24:
                                    var0 = var1.history;
                                    var4 = var1.staticContext;
                                    var1 = _closure2_slot2;
                                    if (var1) {
                                        _fun28099_ip = 53;
                                        continue _fun28099
                                    }
                                case 46:
                                    var3 = var0.replace;
                                    _fun28099_ip = 58;
                                    continue _fun28099;
                                case 53:
                                    var3 = var0.push;
                                case 58:
                                    var _closure3_slot0 = var3;
                                    var5 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var1 = 7;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var6 = var5.bind(var2)(var1);
                                    var5 = var6.createLocation;
                                    var1 = _closure2_slot0;
                                    var9 = _closure2_slot1;
                                    if (var1) {
                                        _fun28099_ip = 109;
                                        continue _fun28099
                                    }
                                case 104:
                                    var1 = var9;
                                    _fun28099_ip = 199;
                                    continue _fun28099;
                                case 109:
                                    var10 = 'string';
                                    var9 = typeof var9;
                                    if (!(var10 !== var9)) {
                                        _fun28099_ip = 172;
                                        continue _fun28099
                                    }
                                case 120:
                                    var12 = _closure1_slot18;
                                    var11 = _closure2_slot1;
                                    var10 = {};
                                    var14 = _closure1_slot22;
                                    var13 = var11.pathname;
                                    var9 = _closure2_slot0;
                                    var9 = var9.params;
                                    var9 = var14.bind(var2)(var13, var9);
                                    var10.pathname = var9;
                                    var9 = {};
                                    var9 = var12.bind(var2)(var9, var11, var10);
                                    _fun28099_ip = 196;
                                    continue _fun28099;
                                case 172:
                                    var12 = _closure1_slot22;
                                    var11 = _closure2_slot1;
                                    var10 = _closure2_slot0;
                                    var10 = var10.params;
                                    var9 = var12.bind(var2)(var11, var10);
                                case 196:
                                    var1 = var9;
                                case 199:
                                    var1 = var5.bind(var6)(var1);
                                    var _closure3_slot1 = var1;
                                    if (var4) {
                                        _fun28099_ip = 263;
                                        continue _fun28099
                                    }
                                case 211:
                                    var6 = _closure1_slot2;
                                    var5 = var6.createElement;
                                    var4 = _closure1_slot12;
                                    var0 = {};
                                    var9 = function() {
                                        var2 = _closure3_slot0;
                                        var1 = _closure3_slot1;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var0.onMount = var9;
                                    var8 = function arg0, arg1() {
                                        _fun28101: for (var _fun28101_ip = 0;;) switch (_fun28101_ip) {
                                            case 0:
                                                var3 = _closure1_slot0;
                                                var4 = _closure1_slot1;
                                                var2 = 7;
                                                var5 = var4[var2];
                                                var0 = undefined;
                                                var7 = var3.bind(var0)(var5);
                                                var6 = var7.createLocation;
                                                var5 = arg1;
                                                var5 = var5.to;
                                                var5 = var6.bind(var7)(var5);
                                                var2 = var4[var2];
                                                var4 = var3.bind(var0)(var2);
                                                var3 = var4.locationsAreEqual;
                                                var8 = _closure1_slot18;
                                                var7 = _closure3_slot1;
                                                var6 = {};
                                                var2 = var5.key;
                                                var6.key = var2;
                                                var2 = {};
                                                var2 = var8.bind(var0)(var2, var7, var6);
                                                var2 = var3.bind(var4)(var5, var2);
                                                if (var2) {
                                                    _fun28101_ip = 112;
                                                    continue _fun28101
                                                }
                                            case 99:
                                                var2 = _closure3_slot0;
                                                var1 = _closure3_slot1;
                                                var1 = var2.bind(var0)(var1);
                                            case 112:
                                                return var0;
                                        }
                                    };
                                    var0.onUpdate = var8;
                                    var7 = _closure2_slot1;
                                    var0.to = var7;
                                    var0 = var5.bind(var6)(var4, var0);
                                    _fun28099_ip = 270;
                                    continue _fun28099;
                                case 263:
                                    var1 = var3.bind(var2)(var1);
                                    var0 = null;
                                case 270:
                                    return var0;
                            }
                        };
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                }
            };
            var2.Redirect = var12;
            var2.Route = var11;
            var2.Router = var10;
            var2.StaticRouter = var9;
            var2.Switch = var8;
            var2.__HistoryContext = var7;
            var2.__RouterContext = var6;
            var2.generatePath = var5;
            var2.matchPath = var4;
            var4 = function() {
                var2 = _closure1_slot17;
                var1 = _closure1_slot9;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var2.useHistory = var4;
            var2.useLocation = var3;
            var3 = function() {
                _fun28103: for (var _fun28103_ip = 0;;) switch (_fun28103_ip) {
                    case 0:
                        var2 = _closure1_slot17;
                        var1 = _closure1_slot10;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var1 = var0.match;
                        if (var1) {
                            _fun28103_ip = 31;
                            continue _fun28103
                        }
                    case 27:
                        var0 = {};
                        _fun28103_ip = 37;
                        continue _fun28103;
                    case 31:
                        var0 = var1.params;
                    case 37:
                        return var0;
                }
            };
            var2.useParams = var3;
            var3 = function arg0() {
                _fun28104: for (var _fun28104_ip = 0;;) switch (_fun28104_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = _closure1_slot29;
                        var3 = undefined;
                        var1 = var0.bind(var3)();
                        var5 = _closure1_slot17;
                        var0 = _closure1_slot10;
                        var0 = var5.bind(var3)(var0);
                        var0 = var0.match;
                        if (!var4) {
                            _fun28104_ip = 54;
                            continue _fun28104
                        }
                    case 38:
                        var2 = _closure1_slot23;
                        var1 = var1.pathname;
                        var0 = var2.bind(var3)(var1, var4);
                    case 54:
                        return var0;
                }
            };
            var2.useRouteMatch = var3;
            var1 = function arg0() {
                _fun28105: for (var _fun28105_ip = 0;;) switch (_fun28105_ip) {
                    case 0:
                        var3 = arg0;
                        var _closure2_slot0 = var3;
                        var2 = function arg0() {
                            var5 = arg0;
                            var1 = var5.wrappedComponentRef;
                            var _closure3_slot0 = var1;
                            var4 = _closure1_slot21;
                            var3 = undefined;
                            var2 = ['wrappedComponentRef'];
                            var2 = var4.bind(var3)(var5, var2);
                            var _closure3_slot1 = var2;
                            var4 = _closure1_slot2;
                            var3 = var4.createElement;
                            var1 = _closure1_slot10;
                            var2 = var1.Consumer;
                            var1 = null;
                            var0 = function(arg0) { // Environment: var0
                                _fun28107: for (var _fun28107_ip = 0;;) switch (_fun28107_ip) {
                                    case 0:
                                        var8 = arg0;
                                        if (var8) {
                                            _fun28107_ip = 22;
                                            continue _fun28107
                                        }
                                    case 6:
                                        var2 = _closure1_slot4;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var2.bind(var1)(var0);
                                    case 22:
                                        var3 = _closure1_slot2;
                                        var2 = var3.createElement;
                                        var1 = _closure2_slot0;
                                        var7 = _closure1_slot18;
                                        var11 = _closure3_slot1;
                                        var5 = {};
                                        var0 = _closure3_slot0;
                                        var5.ref = var0;
                                        var13 = undefined;
                                        var12 = {};
                                        var10 = var8;
                                        var9 = var5;
                                        var0 = var13[var7](var12, var11, var10, var9, var8);
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                }
                            };
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                        };
                        var1 = var3.displayName;
                        if (var1) {
                            _fun28105_ip = 27;
                            continue _fun28105
                        }
                    case 22:
                        var1 = var3.name;
                    case 27:
                        var0 = 'withRouter(';
                        var1 = var0 + var1;
                        var0 = ')';
                        var0 = var1 + var0;
                        var2.displayName = var0;
                        var2.WrappedComponent = var3;
                        var1 = _closure1_slot6;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2, var3);
                        return var0;
                }
            };
            var2.withRouter = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3227, 1228, 1229, 3232, 1139, 1138, 1222]);