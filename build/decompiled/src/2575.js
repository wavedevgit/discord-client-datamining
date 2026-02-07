// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun21973: for (var _fun21973_ip = 0;;) switch (_fun21973_ip) {
        case 0:
            var1 = exports;
            var0 = function arg0() {
                _fun21974: for (var _fun21974_ip = 0;;) switch (_fun21974_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Symbol;
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun21974_ip = 43;
                            continue _fun21974
                        }
                    case 20:
                        var1 = var1.Symbol;
                        var1 = var1.iterator;
                        var2 = 'symbol';
                        var1 = typeof var1;
                        if (!(var2 !== var1)) {
                            _fun21974_ip = 50;
                            continue _fun21974
                        }
                    case 43:
                        var2 = function arg0() {
                            _fun21976: for (var _fun21976_ip = 0;;) switch (_fun21976_ip) {
                                case 0:
                                    var1 = arg0;
                                    if (!var1) {
                                        _fun21976_ip = 58;
                                        continue _fun21976
                                    }
                                case 6:
                                    var0 = global;
                                    var2 = var0.Symbol;
                                    var3 = 'function';
                                    var2 = typeof var2;
                                    if (!(var3 === var2)) {
                                        _fun21976_ip = 58;
                                        continue _fun21976
                                    }
                                case 24:
                                    var3 = var1.constructor;
                                    var2 = var0.Symbol;
                                    if (!(var3 === var2)) {
                                        _fun21976_ip = 58;
                                        continue _fun21976
                                    }
                                case 39:
                                    var0 = var0.Symbol;
                                    var2 = var0.prototype;
                                    var0 = 'symbol';
                                    if (!(var1 === var2)) {
                                        _fun21976_ip = 61;
                                        continue _fun21976
                                    }
                                case 58:
                                    var0 = typeof var1;
                                case 61:
                                    return var0;
                            }
                        };
                        _fun21974_ip = 55;
                        continue _fun21974;
                    case 50:
                        var2 = function arg0() {
                            var0 = arg0;
                            var0 = typeof var0;
                            return var0;
                        };
                    case 55:
                        _closure1_slot1 = var2;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                }
            };
            var _closure1_slot1 = var0;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var2 = {};
            var0 = true;
            var2.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var1, var0, var2);
            var0 = function arg0() {
                _fun21977: for (var _fun21977_ip = 0;;) switch (_fun21977_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = undefined;
                        var1 = undefined;
                        var4 = _closure1_slot0;
                        var5 = var4.default;
                        var1 = arguments;
                        var4 = var1;
                        var1 = 1;
                        var1 = var5.bind(var3)(var1, var4);
                        var1 = global;
                        var4 = var1.Object;
                        var4 = var4.prototype;
                        var5 = var4.toString;
                        var4 = var5.call;
                        var4 = var4.bind(var5)(var2);
                        var5 = var1.Date;
                        var5 = var2 instanceof var5;
                        if (var5) {
                            _fun21977_ip = 307;
                            continue _fun21977
                        }
                    case 77:
                        var0 = _closure1_slot1;
                        var3 = var0.bind(var3)(var2);
                        var0 = 'object';
                        if (!(var0 === var3)) {
                            _fun21977_ip = 105;
                            continue _fun21977
                        }
                    case 94:
                        var0 = '[object Date]';
                        if (!(var0 !== var4)) {
                            _fun21977_ip = 307;
                            continue _fun21977
                        }
                    case 105:
                        var3 = typeof var2;
                        var0 = 'number';
                        if (!(var0 !== var3)) {
                            _fun21977_ip = 276;
                            continue _fun21977
                        }
                    case 119:
                        var0 = '[object Number]';
                        if (!(var0 !== var4)) {
                            _fun21977_ip = 276;
                            continue _fun21977
                        }
                    case 130:
                        var0 = 'string';
                        var0 = var0 !== var3;
                        if (!var0) {
                            _fun21977_ip = 149;
                            continue _fun21977
                        }
                    case 141:
                        var3 = '[object String]';
                        var0 = var3 !== var4;
                    case 149:
                        if (var0) {
                            _fun21977_ip = 169;
                            continue _fun21977
                        }
                    case 152:
                        var3 = var1.console;
                        var4 = 'undefined';
                        var3 = typeof var3;
                        var0 = var4 === var3;
                    case 169:
                        if (var0) {
                            _fun21977_ip = 242;
                            continue _fun21977
                        }
                    case 172:
                        var4 = var1.console;
                        var3 = var4.warn;
                        var0 = "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments";
                        var0 = var3.bind(var4)(var0);
                        var4 = var1.console;
                        var3 = var4.warn;
                        var0 = var1.Error;
                        var5 = var0.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var0
                            }
                        });
                        var8 = var5;
                        var0 = new var8[var0](var7);
                        var0 = var0 instanceof Object ? var0 : var5;
                        var0 = var0.stack;
                        var0 = var3.bind(var4)(var0);
                    case 242:
                        var4 = var1.Date;
                        var7 = var1.NaN;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var8 = var3;
                        var0 = new var8[var4](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var3;
                        _fun21977_ip = 305;
                        continue _fun21977;
                    case 276:
                        var3 = var1.Date;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var3
                            }
                        });
                        var8 = var4;
                        var7 = var2;
                        var3 = new var8[var3](var7, var6);
                        var0 = var3 instanceof Object ? var3 : var4;
                    case 305:
                        _fun21977_ip = 343;
                        continue _fun21977;
                    case 307:
                        var3 = var1.Date;
                        var1 = var2.getTime;
                        var7 = var1.bind(var2)();
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var8 = var2;
                        var1 = new var8[var3](var7, var6);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 343:
                        return var0;
                }
            };
            var1.default = var0;
            var2 = arg6;
            var0 = 0;
            var4 = var2[var0];
            var2 = arg1;
            var0 = undefined;
            var5 = var2.bind(var0)(var4);
            if (!var5) {
                _fun21973_ip = 91;
                continue _fun21973
            }
        case 79:
            var4 = var5.__esModule;
            var2 = var5;
            if (var4) {
                _fun21973_ip = 100;
                continue _fun21973
            }
        case 91:
            var4 = {};
            var4.default = var5;
            var2 = var4;
        case 100:
            var _closure1_slot0 = var2;
            var2 = var1.default;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [2576]);