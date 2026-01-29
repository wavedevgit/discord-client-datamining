// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22736: for (var _fun22736_ip = 0;;) switch (_fun22736_ip) {
        case 0:
            var1 = exports;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var2 = {};
            var0 = true;
            var2.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var1, var0, var2);
            var0 = undefined;
            var1.default = var0;
            var4 = dependencyMap;
            var2 = 0;
            var4 = var4[var2];
            var2 = require;
            var5 = var2.bind(var0)(var4);
            if (!var5) {
                _fun22736_ip = 77;
                continue _fun22736
            }
        case 65:
            var4 = var5.__esModule;
            var2 = var5;
            if (var4) {
                _fun22736_ip = 86;
                continue _fun22736
            }
        case 77:
            var4 = {};
            var4.default = var5;
            var2 = var4;
        case 86:
            var _closure1_slot0 = var2;
            var2 = {};
            var4 = function(arg0, arg1) { // Original name: y, environment: var3
                _fun22737: for (var _fun22737_ip = 0;;) switch (_fun22737_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = arg1;
                        var1 = var2.getUTCFullYear;
                        var2 = var1.bind(var2)();
                        var1 = 0;
                        var4 = var2;
                        if (!(!(var4 > var1))) {
                            _fun22737_ip = 32;
                            continue _fun22737
                        }
                    case 25:
                        var1 = 1;
                        var4 = var1 - var2;
                    case 32:
                        var1 = _closure1_slot0;
                        var3 = var1.default;
                        var1 = 'yy';
                        var2 = var4;
                        if (!(var1 === var0)) {
                            _fun22737_ip = 62;
                            continue _fun22737
                        }
                    case 55:
                        var1 = 100;
                        var2 = var4 % var1;
                    case 62:
                        var1 = var0.length;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                }
            };
            var2.y = var4;
            var4 = function(arg0, arg1) { // Original name: M, environment: var3
                _fun22738: for (var _fun22738_ip = 0;;) switch (_fun22738_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.getUTCMonth;
                        var2 = var0.bind(var1)();
                        var1 = 'M';
                        var0 = arg1;
                        if (!(var1 !== var0)) {
                            _fun22738_ip = 56;
                            continue _fun22738
                        }
                    case 24:
                        var0 = _closure1_slot0;
                        var4 = var0.default;
                        var0 = 1;
                        var3 = var2 + var0;
                        var1 = undefined;
                        var0 = 2;
                        var0 = var4.bind(var1)(var3, var0);
                        _fun22738_ip = 78;
                        continue _fun22738;
                    case 56:
                        var1 = global;
                        var3 = var1.String;
                        var1 = 1;
                        var2 = var2 + var1;
                        var1 = undefined;
                        var0 = var3.bind(var1)(var2);
                    case 78:
                        return var0;
                }
            };
            var2.M = var4;
            var4 = function(arg0, arg1) { // Original name: d, environment: var3
                var1 = arg0;
                var0 = _closure1_slot0;
                var3 = var0.default;
                var0 = var1.getUTCDate;
                var2 = var0.bind(var1)();
                var0 = arg1;
                var1 = var0.length;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.d = var4;
            var4 = function(arg0, arg1) { // Original name: a, environment: var3
                _fun22740: for (var _fun22740_ip = 0;;) switch (_fun22740_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = arg1;
                        var0 = var1.getUTCHours;
                        var1 = var0.bind(var1)();
                        var0 = 12;
                        var4 = var1 / var0;
                        var2 = 'am';
                        var0 = 1;
                        var1 = var2;
                        if (!(var4 >= var0)) {
                            _fun22740_ip = 41;
                            continue _fun22740
                        }
                    case 37:
                        var1 = 'pm';
                    case 41:
                        var0 = 'a';
                        if (!(var0 !== var3)) {
                            _fun22740_ip = 107;
                            continue _fun22740
                        }
                    case 49:
                        var0 = 'aa';
                        if (!(var0 !== var3)) {
                            _fun22740_ip = 107;
                            continue _fun22740
                        }
                    case 59:
                        var0 = 'aaa';
                        if (!(var0 !== var3)) {
                            _fun22740_ip = 105;
                            continue _fun22740
                        }
                    case 69:
                        var0 = 'aaaaa';
                        if (!(var0 !== var3)) {
                            _fun22740_ip = 97;
                            continue _fun22740
                        }
                    case 79:
                        var0 = 'p.m.';
                        if (!(var2 === var1)) {
                            _fun22740_ip = 95;
                            continue _fun22740
                        }
                    case 89:
                        var0 = 'a.m.';
                    case 95:
                        return var0;
                    case 97:
                        var0 = 0;
                        var0 = var1[var0];
                        return var0;
                    case 105:
                        return var1;
                    case 107:
                        var0 = var1.toUpperCase;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var2.a = var4;
            var4 = function(arg0, arg1) { // Original name: h, environment: var3
                _fun22741: for (var _fun22741_ip = 0;;) switch (_fun22741_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = _closure1_slot0;
                        var3 = var0.default;
                        var0 = var1.getUTCHours;
                        var1 = var0.bind(var1)();
                        var0 = 12;
                        var2 = var1 % var0;
                        if (var2) {
                            _fun22741_ip = 38;
                            continue _fun22741
                        }
                    case 35:
                        var2 = var0;
                    case 38:
                        var0 = arg1;
                        var1 = var0.length;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                }
            };
            var2.h = var4;
            var4 = function(arg0, arg1) { // Original name: H, environment: var3
                var1 = arg0;
                var0 = _closure1_slot0;
                var3 = var0.default;
                var0 = var1.getUTCHours;
                var2 = var0.bind(var1)();
                var0 = arg1;
                var1 = var0.length;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.H = var4;
            var4 = function(arg0, arg1) { // Original name: m, environment: var3
                var1 = arg0;
                var0 = _closure1_slot0;
                var3 = var0.default;
                var0 = var1.getUTCMinutes;
                var2 = var0.bind(var1)();
                var0 = arg1;
                var1 = var0.length;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.m = var4;
            var4 = function(arg0, arg1) { // Original name: s, environment: var3
                var1 = arg0;
                var0 = _closure1_slot0;
                var3 = var0.default;
                var0 = var1.getUTCSeconds;
                var2 = var0.bind(var1)();
                var0 = arg1;
                var1 = var0.length;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.s = var4;
            var3 = function(arg0, arg1) { // Original name: S, environment: var3
                var2 = arg0;
                var0 = arg1;
                var5 = var0.length;
                var1 = var2.getUTCMilliseconds;
                var4 = var1.bind(var2)();
                var1 = global;
                var3 = var1.Math;
                var2 = var3.floor;
                var7 = var1.Math;
                var6 = var7.pow;
                var1 = 3;
                var5 = var5 - var1;
                var1 = 10;
                var1 = var6.bind(var7)(var1, var5);
                var1 = var4 * var1;
                var3 = var2.bind(var3)(var1);
                var1 = _closure1_slot0;
                var2 = var1.default;
                var1 = var0.length;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
            };
            var2.S = var3;
            var1.default = var2;
            var2 = var1.default;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [2775]);