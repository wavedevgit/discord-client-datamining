// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun23728: for (var _fun23728_ip = 0;;) switch (_fun23728_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun23728_ip = 18;
                    continue _fun23728
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun23728_ip = 27;
                    continue _fun23728
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var1, var0, var2);
    var0 = function arg0, arg1() {
        _fun23729: for (var _fun23729_ip = 0;;) switch (_fun23729_ip) {
            case 0:
                var3 = arg1;
                var6 = undefined;
                var2 = undefined;
                var4 = _closure1_slot5;
                var5 = var4.default;
                var2 = arguments;
                var4 = var2;
                var2 = 2;
                var2 = var5.bind(var6)(var2, var4);
                var2 = _closure1_slot0;
                var4 = var2.default;
                var2 = arg0;
                var5 = var4.bind(var6)(var2);
                var2 = _closure1_slot3;
                var2 = var2.default;
                var2 = var2.bind(var6)(var5);
                if (var2) {
                    _fun23729_ip = 105;
                    continue _fun23729
                }
            case 69:
                var2 = global;
                var7 = var2.RangeError;
                var2 = var7.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = 'Invalid time value';
                var10 = var4;
                var2 = new var10[var7](var9, var8);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
            case 105:
                var2 = _closure1_slot2;
                var2 = var2.default;
                var4 = var2.bind(var6)(var5);
                var2 = _closure1_slot4;
                var2 = var2.default;
                var2 = var2.bind(var6)(var5, var4);
                var _closure2_slot0 = var2;
                var2 = var3.match;
                var0 = _closure1_slot6;
                var4 = var2.bind(var3)(var0);
                var3 = '';
                var0 = var3;
                if (!var4) {
                    _fun23729_ip = 188;
                    continue _fun23729
                }
            case 163:
                var2 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    _fun23730: for (var _fun23730_ip = 0;;) switch (_fun23730_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = "''";
                            if (!(var1 !== var0)) {
                                _fun23730_ip = 179;
                                continue _fun23730
                            }
                        case 16:
                            var1 = 0;
                            var2 = var0[var1];
                            var4 = "'";
                            if (!(var4 !== var2)) {
                                _fun23730_ip = 134;
                                continue _fun23730
                            }
                        case 30:
                            var3 = _closure1_slot1;
                            var3 = var3.default;
                            var3 = var3[var2];
                            if (var3) {
                                _fun23730_ip = 117;
                                continue _fun23730
                            }
                        case 49:
                            var5 = var2.match;
                            var1 = _closure1_slot9;
                            var1 = var5.bind(var2)(var1);
                            if (var1) {
                                _fun23730_ip = 69;
                                continue _fun23730
                            }
                        case 67:
                            return var0;
                        case 69:
                            var1 = global;
                            var5 = var1.RangeError;
                            var1 = 'Format string contains an unescaped latin alphabet character `';
                            var6 = var1 + var2;
                            var1 = var5.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var1 = '`';
                            var8 = var6 + var1;
                            var9 = var2;
                            var1 = new var9[var5](var8, var7);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        case 117:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2, var0);
                            return var1;
                        case 134:
                            var3 = var0.match;
                            var2 = _closure1_slot7;
                            var3 = var3.bind(var0)(var2);
                            if (!var3) {
                                _fun23730_ip = 177;
                                continue _fun23730
                            }
                        case 155:
                            var2 = 1;
                            var3 = var3[var2];
                            var2 = var3.replace;
                            var1 = _closure1_slot8;
                            var0 = var2.bind(var3)(var1, var4);
                        case 177:
                            return var0;
                        case 179:
                            var0 = "'";
                            return var0;
                    }
                };
                var2 = var2.bind(var4)(var1);
                var1 = var2.join;
                var0 = var1.bind(var2)(var3);
            case 188:
                return var0;
        }
    };
    var1.default = var0;
    var0 = 0;
    var2 = var6[var0];
    var0 = undefined;
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot5 = var2;
    var2 = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
    var _closure1_slot6 = var2;
    var2 = /^'([^]*?)'?$/;
    var _closure1_slot7 = var2;
    var2 = /''/g;
    var _closure1_slot8 = var2;
    var2 = /[a-zA-Z]/;
    var _closure1_slot9 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2534, 2778, 2697, 2716, 2767, 2535]);