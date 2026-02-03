// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22575: for (var _fun22575_ip = 0;;) switch (_fun22575_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22575_ip = 18;
                    continue _fun22575
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22575_ip = 27;
                    continue _fun22575
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = function arg0() {
        _fun22576: for (var _fun22576_ip = 0;;) switch (_fun22576_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun22576_ip = 43;
                    continue _fun22576
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun22576_ip = 50;
                    continue _fun22576
                }
            case 43:
                var2 = function arg0() {
                    _fun22578: for (var _fun22578_ip = 0;;) switch (_fun22578_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun22578_ip = 58;
                                continue _fun22578
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun22578_ip = 58;
                                continue _fun22578
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun22578_ip = 58;
                                continue _fun22578
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun22578_ip = 61;
                                continue _fun22578
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun22576_ip = 55;
                continue _fun22576;
            case 50:
                var2 = function arg0() {
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 55:
                _closure1_slot2 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var1, var0, var2);
    var0 = function arg0() {
        _fun22579: for (var _fun22579_ip = 0;;) switch (_fun22579_ip) {
            case 0:
                var4 = arg0;
                var2 = undefined;
                var3 = undefined;
                var5 = _closure1_slot1;
                var6 = var5.default;
                var3 = arguments;
                var5 = var3;
                var3 = 1;
                var3 = var6.bind(var2)(var3, var5);
                if (!var4) {
                    _fun22579_ip = 57;
                    continue _fun22579
                }
            case 38:
                var3 = var4.forEach;
                var6 = 'function';
                var5 = typeof var3;
                var3 = var4;
                if (!(var6 !== var5)) {
                    _fun22579_ip = 146;
                    continue _fun22579
                }
            case 57:
                var1 = _closure1_slot2;
                var2 = var1.bind(var2)(var4);
                var1 = 'object';
                if (!(var1 === var2)) {
                    _fun22579_ip = 110;
                    continue _fun22579
                }
            case 74:
                var1 = null;
                if (!(var1 !== var4)) {
                    _fun22579_ip = 110;
                    continue _fun22579
                }
            case 80:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.prototype;
                var2 = var1.slice;
                var1 = var2.call;
                var3 = var1.bind(var2)(var4);
                _fun22579_ip = 146;
                continue _fun22579;
            case 110:
                var1 = global;
                var4 = var1.Date;
                var8 = var1.NaN;
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = var2;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            case 146:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun22580: for (var _fun22580_ip = 0;;) switch (_fun22580_ip) {
                        case 0:
                            var0 = _closure1_slot0;
                            var2 = var0.default;
                            var0 = undefined;
                            var1 = arg0;
                            var2 = var2.bind(var0)(var1);
                            var3 = _closure2_slot0;
                            var3 = var0 === var3;
                            if (var3) {
                                _fun22580_ip = 44;
                                continue _fun22580
                            }
                        case 36:
                            var4 = _closure2_slot0;
                            var3 = var4 < var2;
                        case 44:
                            if (var3) {
                                _fun22580_ip = 71;
                                continue _fun22580
                            }
                        case 47:
                            var4 = global;
                            var5 = var4.isNaN;
                            var4 = var4.Number;
                            var4 = var4.bind(var0)(var2);
                            var3 = var5.bind(var0)(var4);
                        case 71:
                            if (!var3) {
                                _fun22580_ip = 78;
                                continue _fun22580
                            }
                        case 74:
                            var _closure2_slot0 = var2;
                        case 78:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var0 = _closure2_slot0;
                if (var0) {
                    _fun22579_ip = 202;
                    continue _fun22579
                }
            case 168:
                var1 = global;
                var3 = var1.Date;
                var8 = var1.NaN;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var0 = var1 instanceof Object ? var1 : var2;
            case 202:
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
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2564, 2565]);