// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = function arg0, arg1() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.startIndex = var1;
            var1 = arg1;
            var2.endIndex = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot1;
        var0 = {};
        var1 = 'length';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var1 = global;
            var3 = var1.Math;
            var2 = var3.max;
            var1 = var0.endIndex;
            var0 = var0.startIndex;
            var1 = var1 - var0;
            var0 = 1;
            var1 = var1 + var0;
            var0 = 0;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.get = var1;
        var1 = new Array(10);
        var1[0] = var0;
        var0 = {};
        var5 = 'at';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0.startIndex;
            var0 = arg0;
            var0 = var1 + var0;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'equals';
        var0.key = var5;
        var5 = function arg0() {
            _fun45775: for (var _fun45775_ip = 0;;) switch (_fun45775_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var3 = var2.startIndex;
                    var0 = var1.startIndex;
                    var0 = var3 === var0;
                    if (!var0) {
                        _fun45775_ip = 41;
                        continue _fun45775
                    }
                case 25:
                    var2 = var2.endIndex;
                    var1 = var1.endIndex;
                    var0 = var2 === var1;
                case 41:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'toArray';
        var0.key = var5;
        var5 = function() {
            _fun45776: for (var _fun45776_ip = 0;;) switch (_fun45776_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.length;
                    var2 = 0;
                    if (!(var2 !== var0)) {
                        _fun45776_ip = 89;
                        continue _fun45776
                    }
                case 14:
                    var0 = global;
                    var4 = var0.Array;
                    var5 = var3.length;
                    var1 = var4.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var6 = var1;
                    var0 = new var6[var4](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var1 = var3.length;
                    var1 = var2 < var1;
                    var2 = 0;
                    if (!var1) {
                        _fun45776_ip = 87;
                        continue _fun45776
                    }
                case 61:
                    var1 = var3.startIndex;
                    var1 = var1 + var2;
                    var0[var2] = var1;
                    var2 = var2 + 1;
                    var1 = var3.length;
                    if (var2 < var1) {
                        _fun45776_ip = 61;
                        continue _fun45776
                    }
                case 87:
                    return var0;
                case 89:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'includes';
        var0.key = var5;
        var5 = function arg0() {
            _fun45777: for (var _fun45777_ip = 0;;) switch (_fun45777_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1.startIndex;
                    var0 = var2 >= var0;
                    if (!var0) {
                        _fun45777_ip = 29;
                        continue _fun45777
                    }
                case 19:
                    var1 = var1.endIndex;
                    var0 = var2 <= var1;
                case 29:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'indexOf';
        var0.key = var5;
        var5 = function arg0() {
            _fun45778: for (var _fun45778_ip = 0;;) switch (_fun45778_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1.includes;
                    var3 = var0.bind(var1)(var2);
                    var0 = -1;
                    if (!var3) {
                        _fun45778_ip = 35;
                        continue _fun45778
                    }
                case 25:
                    var1 = var1.startIndex;
                    var0 = var2 - var1;
                case 35:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'findValue';
        var0.key = var5;
        var5 = function arg0() {
            _fun45779: for (var _fun45779_ip = 0;;) switch (_fun45779_ip) {
                case 0:
                    var5 = arg0;
                    var4 = this;
                    var0 = var4.length;
                    var3 = 0;
                    var0 = var3 < var0;
                    var1 = undefined;
                    if (!var0) {
                        _fun45779_ip = 57;
                        continue _fun45779
                    }
                case 22:
                    var0 = var4.startIndex;
                    var0 = var0 + var3;
                    var6 = var5.bind(var1)(var0, var3, var4);
                    var2 = var3;
                    if (var6) {
                        _fun45779_ip = 59;
                        continue _fun45779
                    }
                case 45:
                    var3 = var2 + 1;
                    var2 = var4.length;
                    if (var3 < var2) {
                        _fun45779_ip = 22;
                        continue _fun45779
                    }
                case 57:
                    return var1;
                case 59:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'every';
        var0.key = var5;
        var5 = function arg0() {
            _fun45780: for (var _fun45780_ip = 0;;) switch (_fun45780_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = var3.length;
                    var2 = 0;
                    var0 = var2 < var0;
                    var1 = undefined;
                    if (!var0) {
                        _fun45780_ip = 61;
                        continue _fun45780
                    }
                case 22:
                    var0 = var3.startIndex;
                    var0 = var0 + var2;
                    var5 = var4.bind(var1)(var0, var2, var3);
                    var0 = var2;
                    if (var5) {
                        _fun45780_ip = 49;
                        continue _fun45780
                    }
                case 45:
                    var5 = false;
                    return var5;
                case 49:
                    var2 = var0 + 1;
                    var0 = var3.length;
                    if (var2 < var0) {
                        _fun45780_ip = 22;
                        continue _fun45780
                    }
                case 61:
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'slice';
        var0.key = var5;
        var5 = function() {
            _fun45781: for (var _fun45781_ip = 0;;) switch (_fun45781_ip) {
                case 0:
                    var2 = this;
                    var5 = undefined;
                    var1 = undefined;
                    var3 = arguments.length;
                    var0 = 0;
                    var4 = var3 > var0;
                    var3 = 0;
                    if (!var4) {
                        _fun45781_ip = 35;
                        continue _fun45781
                    }
                case 21:
                    var4 = arguments[var0];
                    var3 = 0;
                    if (!(var5 !== var4)) {
                        _fun45781_ip = 35;
                        continue _fun45781
                    }
                case 31:
                    var3 = arguments[var0];
                case 35:
                    var4 = arguments.length;
                    var0 = 1;
                    if (!(var4 > var0)) {
                        _fun45781_ip = 53;
                        continue _fun45781
                    }
                case 45:
                    var4 = arguments[var0];
                    if (!(var5 === var4)) {
                        _fun45781_ip = 60;
                        continue _fun45781
                    }
                case 53:
                    var7 = var2.length;
                    _fun45781_ip = 64;
                    continue _fun45781;
                case 60:
                    var7 = arguments[var0];
                case 64:
                    var1 = var2.startIndex;
                    var3 = var1 + var3;
                    var4 = var2.startIndex;
                    var1 = global;
                    var6 = var1.Math;
                    var5 = var6.min;
                    var2 = var2.length;
                    var2 = var5.bind(var6)(var7, var2);
                    var2 = var4 + var2;
                    var5 = var2 - var0;
                    var2 = _closure2_slot0;
                    var4 = var1.Math;
                    var1 = var4.max;
                    var0 = var3 - var0;
                    var8 = var1.bind(var4)(var0, var5);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = var1;
                    var9 = var3;
                    var0 = new var10[var2](var9, var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = global;
        var5 = var5.Symbol;
        var5 = var5.iterator;
        var0.key = var5;
        var4 = function*() { // Original name: value, environment: var4
            var0 = function*() { // Original name: ?anon_0_value, environment: var0
                _fun45783: for (var _fun45783_ip = 0;;) switch (_fun45783_ip) {
                    case 0:
                        StartGenerator();
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun45783_ip = 57;
                            continue _fun45783
                        }
                    case 10:
                        var3 = var4.startIndex;
                        var1 = var4.endIndex;
                        if (!(var3 <= var1)) {
                            _fun45783_ip = 49;
                            continue _fun45783
                        }
                    case 26:
                        SaveGenerator(address = 30);
                    case 28:
                        return var3;
                    case 30:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun45783_ip = 54;
                            continue _fun45783
                        }
                    case 36:
                        var3 = var3 + 1;
                        var2 = var4.endIndex;
                        if (var3 <= var2) {
                            _fun45783_ip = 26;
                            continue _fun45783
                        }
                    case 49:
                        var2 = undefined;
                        return var2;
                    case 54:
                        return var1;
                    case 57:
                        return var0;
                }
            };
            return var0;
        };
        var0.value = var4;
        var1[9] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var10 = -1;
    var9 = -2;
    var11 = var4;
    var3 = new var11[var1](var10, var9, var8);
    var3 = var3 instanceof Object ? var3 : var4;
    var1.EMPTY = var3;
    var2.ConsecutiveNumbers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5113, 5114]);