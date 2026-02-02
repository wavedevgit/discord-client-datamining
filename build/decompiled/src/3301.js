// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun28683: for (var _fun28683_ip = 0;;) switch (_fun28683_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var2 = var1.encode;
                var0 = var4;
                if (!var2) {
                    _fun28683_ip = 76;
                    continue _fun28683
                }
            case 18:
                var1 = var1.strict;
                if (var1) {
                    _fun28683_ip = 44;
                    continue _fun28683
                }
            case 27:
                var1 = global;
                var2 = var1.encodeURIComponent;
                var1 = undefined;
                var1 = var2.bind(var1)(var4);
                _fun28683_ip = 73;
                continue _fun28683;
            case 44:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var1 = var2.bind(var3)(var4);
            case 73:
                var0 = var1;
            case 76:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = function arg0() {
        _fun28684: for (var _fun28684_ip = 0;;) switch (_fun28684_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var3 = global;
                var4 = var3.Array;
                var0 = var4.isArray;
                var0 = var0.bind(var4)(var2);
                if (var0) {
                    _fun28684_ip = 107;
                    continue _fun28684
                }
            case 30:
                var5 = 'object';
                var4 = typeof var2;
                var0 = var2;
                if (!(var5 === var4)) {
                    _fun28684_ip = 105;
                    continue _fun28684
                }
            case 44:
                var5 = _closure1_slot3;
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
                _fun28684_ip = 117;
                continue _fun28684;
            case 107:
                var1 = var2.sort;
                var0 = var1.bind(var2)();
            case 117:
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var2 = function(arg0) { // Environment: var0
        _fun28687: for (var _fun28687_ip = 0;;) switch (_fun28687_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.split;
                var0 = '?';
                var1 = var1.bind(var2)(var0);
                var0 = 1;
                var0 = var1[var0];
                if (var0) {
                    _fun28687_ip = 31;
                    continue _fun28687
                }
            case 27:
                var0 = '';
            case 31:
                return var0;
        }
    };
    var1.extract = var2;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun28688: for (var _fun28688_ip = 0;;) switch (_fun28688_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var1.bind(var3)(var0);
                var1 = {};
                var0 = 'none';
                var1.arrayFormat = var0;
                var0 = arg1;
                var1 = var5.bind(var3)(var1, var0);
                var0 = function arg0() {
                    _fun28689: for (var _fun28689_ip = 0;;) switch (_fun28689_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.arrayFormat;
                            var1 = 'index';
                            if (!(var1 !== var2)) {
                                _fun28689_ip = 43;
                                continue _fun28689
                            }
                        case 19:
                            var1 = 'bracket';
                            if (!(var1 !== var2)) {
                                _fun28689_ip = 36;
                                continue _fun28689
                            }
                        case 29:
                            var1 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun28692: for (var _fun28692_ip = 0;;) switch (_fun28692_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var6 = arg1;
                                        var2 = arg2;
                                        var1 = var2[var3];
                                        var0 = undefined;
                                        if (!(var0 === var1)) {
                                            _fun28692_ip = 25;
                                            continue _fun28692
                                        }
                                    case 19:
                                        var2[var3] = var6;
                                        _fun28692_ip = 48;
                                        continue _fun28692;
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
                        case 36:
                            var1 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun28691: for (var _fun28691_ip = 0;;) switch (_fun28691_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var5 = arg1;
                                        var2 = arg2;
                                        var1 = /(\[\])$/;
                                        var0 = var1.exec;
                                        var1 = var0.bind(var1)(var6);
                                        var _closure3_slot0 = var1;
                                        var4 = var6.replace;
                                        var3 = /\[\]$/;
                                        var1 = '';
                                        var1 = var4.bind(var6)(var3, var1);
                                        var0 = _closure3_slot0;
                                        if (var0) {
                                            _fun28691_ip = 83;
                                            continue _fun28691
                                        }
                                    case 77:
                                        var2[var1] = var5;
                                        _fun28691_ip = 130;
                                        continue _fun28691;
                                    case 83:
                                        var3 = var2[var1];
                                        var0 = undefined;
                                        if (!(var0 === var3)) {
                                            _fun28691_ip = 107;
                                            continue _fun28691
                                        }
                                    case 93:
                                        var0 = new Array(1);
                                        var0[0] = var5;
                                        var2[var1] = var0;
                                        _fun28691_ip = 130;
                                        continue _fun28691;
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
                        case 43:
                            var0 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun28690: for (var _fun28690_ip = 0;;) switch (_fun28690_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var2 = arg1;
                                        var3 = arg2;
                                        var1 = /\[(\d*)\]$/;
                                        var0 = var1.exec;
                                        var1 = var0.bind(var1)(var6);
                                        _closure3_slot0 = var1;
                                        var5 = var6.replace;
                                        var4 = /\[\d*\]$/;
                                        var1 = '';
                                        var1 = var5.bind(var6)(var4, var1);
                                        var4 = _closure3_slot0;
                                        if (var4) {
                                            _fun28690_ip = 83;
                                            continue _fun28690
                                        }
                                    case 77:
                                        var3[var1] = var2;
                                        _fun28690_ip = 118;
                                        continue _fun28690;
                                    case 83:
                                        var5 = var3[var1];
                                        var4 = undefined;
                                        if (!(var4 === var5)) {
                                            _fun28690_ip = 99;
                                            continue _fun28690
                                        }
                                    case 93:
                                        var4 = {};
                                        var3[var1] = var4;
                                    case 99:
                                        var1 = var3[var1];
                                        var3 = _closure3_slot0;
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
                var0 = var0.bind(var3)(var1);
                var _closure2_slot0 = var0;
                var3 = global;
                var1 = var3.Object;
                var0 = var1.create;
                var7 = null;
                var6 = var0.bind(var1)(var7);
                var _closure2_slot1 = var6;
                var5 = 'string';
                var1 = typeof var4;
                var0 = var6;
                if (!(var5 === var1)) {
                    _fun28688_ip = 241;
                    continue _fun28688
                }
            case 105:
                var1 = var4.trim;
                var8 = var1.bind(var4)();
                var5 = var8.replace;
                var4 = /^(\?|#|&)/;
                var1 = '';
                var8 = var5.bind(var8)(var4, var1);
                var1 = var6;
                if (!var8) {
                    _fun28688_ip = 238;
                    continue _fun28688
                }
            case 150:
                var5 = var8.split;
                var4 = '&';
                var8 = var5.bind(var8)(var4);
                var5 = var8.forEach;
                var4 = function(arg0) { // Environment: var2
                    _fun28693: for (var _fun28693_ip = 0;;) switch (_fun28693_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.replace;
                            var1 = /\+/g;
                            var0 = ' ';
                            var1 = var2.bind(var3)(var1, var0);
                            var0 = var1.split;
                            var4 = '=';
                            var3 = var0.bind(var1)(var4);
                            var0 = var3.shift;
                            var5 = var0.bind(var3)();
                            var1 = var3.length;
                            var0 = 0;
                            var1 = var1 > var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (!var1) {
                                _fun28693_ip = 86;
                                continue _fun28693
                            }
                        case 76:
                            var1 = var3.join;
                            var2 = var1.bind(var3)(var4);
                        case 86:
                            var4 = null;
                            if (!(var0 !== var2)) {
                                _fun28693_ip = 120;
                                continue _fun28693
                            }
                        case 92:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 2;
                            var1 = var6[var1];
                            var1 = var3.bind(var0)(var1);
                            var4 = var1.bind(var0)(var2);
                        case 120:
                            var3 = _closure2_slot0;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var2 = 2;
                            var2 = var7[var2];
                            var2 = var6.bind(var0)(var2);
                            var2 = var2.bind(var0)(var5);
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var0)(var2, var4, var1);
                            return var0;
                    }
                };
                var4 = var5.bind(var8)(var4);
                var5 = var3.Object;
                var4 = var5.keys;
                var5 = var4.bind(var5)(var6);
                var4 = var5.sort;
                var5 = var4.bind(var5)();
                var4 = var5.reduce;
                var6 = var3.Object;
                var3 = var6.create;
                var3 = var3.bind(var6)(var7);
                var2 = function(arg0, arg1) { // Environment: var2
                    _fun28694: for (var _fun28694_ip = 0;;) switch (_fun28694_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = arg1;
                            var1 = _closure2_slot1;
                            var1 = var1[var2];
                            var3 = global;
                            var5 = var3.Boolean;
                            var4 = undefined;
                            var5 = var5.bind(var4)(var1);
                            if (!var5) {
                                _fun28694_ip = 83;
                                continue _fun28694
                            }
                        case 35:
                            var6 = 'object';
                            var5 = typeof var1;
                            if (!(var6 === var5)) {
                                _fun28694_ip = 83;
                                continue _fun28694
                            }
                        case 46:
                            var5 = var3.Array;
                            var3 = var5.isArray;
                            var3 = var3.bind(var5)(var1);
                            if (var3) {
                                _fun28694_ip = 83;
                                continue _fun28694
                            }
                        case 65:
                            var3 = _closure1_slot3;
                            var3 = var3.bind(var4)(var1);
                            var0[var2] = var3;
                            _fun28694_ip = 87;
                            continue _fun28694;
                        case 83:
                            var0[var2] = var1;
                        case 87:
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var2, var3);
            case 238:
                var0 = var1;
            case 241:
                return var0;
        }
    };
    var1.parse = var2;
    var0 = function(arg0, arg1) { // Environment: var0
        _fun28695: for (var _fun28695_ip = 0;;) switch (_fun28695_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var2.bind(var3)(var0);
                var2 = {
                    'encode': true,
                    'strict': true,
                    'arrayFormat': 'none'
                };
                var0 = arg1;
                var2 = var5.bind(var3)(var2, var0);
                var _closure2_slot1 = var2;
                var0 = function arg0() {
                    _fun28696: for (var _fun28696_ip = 0;;) switch (_fun28696_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = var1.arrayFormat;
                            var1 = 'index';
                            if (!(var1 !== var2)) {
                                _fun28696_ip = 47;
                                continue _fun28696
                            }
                        case 23:
                            var1 = 'bracket';
                            if (!(var1 !== var2)) {
                                _fun28696_ip = 40;
                                continue _fun28696
                            }
                        case 33:
                            var1 = function(arg0, arg1) { // Environment: var0
                                _fun28699: for (var _fun28699_ip = 0;;) switch (_fun28699_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var5 = arg1;
                                        var0 = null;
                                        if (!(var0 !== var5)) {
                                            _fun28699_ip = 76;
                                            continue _fun28699
                                        }
                                    case 12:
                                        var3 = _closure1_slot2;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var6 = var3.bind(var0)(var4, var1);
                                        var2 = new Array(3);
                                        var2[0] = var6;
                                        var6 = '=';
                                        var2[1] = var6;
                                        var0 = var3.bind(var0)(var5, var1);
                                        var2[2] = var0;
                                        var1 = var2.join;
                                        var0 = '';
                                        var0 = var1.bind(var2)(var0);
                                        _fun28699_ip = 98;
                                        continue _fun28699;
                                    case 76:
                                        var3 = _closure1_slot2;
                                        var2 = _closure3_slot0;
                                        var1 = undefined;
                                        var0 = var3.bind(var1)(var4, var2);
                                    case 98:
                                        return var0;
                                }
                            };
                            return var1;
                        case 40:
                            var1 = function(arg0, arg1) { // Environment: var0
                                _fun28698: for (var _fun28698_ip = 0;;) switch (_fun28698_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var5 = arg1;
                                        var0 = null;
                                        if (!(var0 !== var5)) {
                                            _fun28698_ip = 78;
                                            continue _fun28698
                                        }
                                    case 12:
                                        var3 = _closure1_slot2;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var6 = var3.bind(var0)(var4, var1);
                                        var2 = new Array(3);
                                        var2[0] = var6;
                                        var6 = '[]=';
                                        var2[1] = var6;
                                        var0 = var3.bind(var0)(var5, var1);
                                        var2[2] = var0;
                                        var1 = var2.join;
                                        var0 = '';
                                        var0 = var1.bind(var2)(var0);
                                        _fun28698_ip = 100;
                                        continue _fun28698;
                                    case 78:
                                        var3 = _closure1_slot2;
                                        var2 = _closure3_slot0;
                                        var1 = undefined;
                                        var0 = var3.bind(var1)(var4, var2);
                                    case 100:
                                        return var0;
                                }
                            };
                            return var1;
                        case 47:
                            var0 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun28697: for (var _fun28697_ip = 0;;) switch (_fun28697_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var6 = arg1;
                                        var1 = arg2;
                                        var0 = null;
                                        if (!(var0 !== var6)) {
                                            _fun28697_ip = 99;
                                            continue _fun28697
                                        }
                                    case 15:
                                        var4 = _closure1_slot2;
                                        var2 = _closure3_slot0;
                                        var0 = undefined;
                                        var7 = var4.bind(var0)(var5, var2);
                                        var3 = new Array(5);
                                        var3[0] = var7;
                                        var7 = '[';
                                        var3[1] = var7;
                                        var7 = var4.bind(var0)(var1, var2);
                                        var3[2] = var7;
                                        var7 = ']=';
                                        var3[3] = var7;
                                        var0 = var4.bind(var0)(var6, var2);
                                        var3[4] = var0;
                                        var2 = var3.join;
                                        var0 = '';
                                        var0 = var2.bind(var3)(var0);
                                        _fun28697_ip = 163;
                                        continue _fun28697;
                                    case 99:
                                        var4 = _closure1_slot2;
                                        var3 = _closure3_slot0;
                                        var2 = undefined;
                                        var2 = var4.bind(var2)(var5, var3);
                                        var3 = new Array(4);
                                        var3[0] = var2;
                                        var2 = '[';
                                        var3[1] = var2;
                                        var3[2] = var1;
                                        var1 = ']';
                                        var3[3] = var1;
                                        var2 = var3.join;
                                        var1 = '';
                                        var0 = var2.bind(var3)(var1);
                                    case 163:
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var0 = var0.bind(var3)(var2);
                var _closure2_slot2 = var0;
                var0 = '';
                if (!var4) {
                    _fun28695_ip = 154;
                    continue _fun28695
                }
            case 82:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var3 = var2.bind(var3)(var4);
                var2 = var3.sort;
                var4 = var2.bind(var3)();
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var1
                    _fun28700: for (var _fun28700_ip = 0;;) switch (_fun28700_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var2 = _closure2_slot0;
                            var6 = var2[var3];
                            var2 = undefined;
                            if (!(var2 !== var6)) {
                                _fun28700_ip = 160;
                                continue _fun28700
                            }
                        case 29:
                            var4 = null;
                            if (!(var4 !== var6)) {
                                _fun28700_ip = 141;
                                continue _fun28700
                            }
                        case 35:
                            var4 = global;
                            var5 = var4.Array;
                            var4 = var5.isArray;
                            var4 = var4.bind(var5)(var6);
                            if (var4) {
                                _fun28700_ip = 93;
                                continue _fun28700
                            }
                        case 56:
                            var7 = _closure1_slot2;
                            var4 = _closure2_slot1;
                            var8 = var7.bind(var2)(var3, var4);
                            var5 = '=';
                            var5 = var8 + var5;
                            var4 = var7.bind(var2)(var6, var4);
                            var4 = var5 + var4;
                            return var4;
                        case 93:
                            var5 = new Array(0);
                            var _closure3_slot1 = var5;
                            var4 = var6.slice;
                            var6 = var4.bind(var6)();
                            var4 = var6.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun28701: for (var _fun28701_ip = 0;;) switch (_fun28701_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var0 = undefined;
                                        if (!(var0 !== var6)) {
                                            _fun28701_ip = 53;
                                            continue _fun28701
                                        }
                                    case 9:
                                        var3 = _closure3_slot1;
                                        var2 = var3.push;
                                        var5 = _closure2_slot2;
                                        var4 = _closure3_slot0;
                                        var1 = _closure3_slot1;
                                        var1 = var1.length;
                                        var1 = var5.bind(var0)(var4, var6, var1);
                                        var1 = var2.bind(var3)(var1);
                                    case 53:
                                        return var0;
                                }
                            };
                            var1 = var4.bind(var6)(var1);
                            var4 = var5.join;
                            var1 = '&';
                            var1 = var4.bind(var5)(var1);
                            return var1;
                        case 141:
                            var1 = _closure1_slot2;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                        case 160:
                            var0 = '';
                            return var0;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.join;
                var1 = '&';
                var0 = var2.bind(var3)(var1);
            case 154:
                return var0;
        }
    };
    var1.stringify = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3302, 3303, 1510]);