// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22878: for (var _fun22878_ip = 0;;) switch (_fun22878_ip) {
        case 0:
            var1 = exports;
            var0 = function arg0() {
                _fun22879: for (var _fun22879_ip = 0;;) switch (_fun22879_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Symbol;
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun22879_ip = 43;
                            continue _fun22879
                        }
                    case 20:
                        var1 = var1.Symbol;
                        var1 = var1.iterator;
                        var2 = 'symbol';
                        var1 = typeof var1;
                        if (!(var2 !== var1)) {
                            _fun22879_ip = 50;
                            continue _fun22879
                        }
                    case 43:
                        var2 = function arg0() {
                            _fun22881: for (var _fun22881_ip = 0;;) switch (_fun22881_ip) {
                                case 0:
                                    var1 = arg0;
                                    if (!var1) {
                                        _fun22881_ip = 58;
                                        continue _fun22881
                                    }
                                case 6:
                                    var0 = global;
                                    var2 = var0.Symbol;
                                    var3 = 'function';
                                    var2 = typeof var2;
                                    if (!(var3 === var2)) {
                                        _fun22881_ip = 58;
                                        continue _fun22881
                                    }
                                case 24:
                                    var3 = var1.constructor;
                                    var2 = var0.Symbol;
                                    if (!(var3 === var2)) {
                                        _fun22881_ip = 58;
                                        continue _fun22881
                                    }
                                case 39:
                                    var0 = var0.Symbol;
                                    var2 = var0.prototype;
                                    var0 = 'symbol';
                                    if (!(var1 === var2)) {
                                        _fun22881_ip = 61;
                                        continue _fun22881
                                    }
                                case 58:
                                    var0 = typeof var1;
                                case 61:
                                    return var0;
                            }
                        };
                        _fun22879_ip = 55;
                        continue _fun22879;
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
                _fun22882: for (var _fun22882_ip = 0;;) switch (_fun22882_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = undefined;
                        var3 = undefined;
                        var4 = _closure1_slot0;
                        var5 = var4.default;
                        var3 = arguments;
                        var4 = var3;
                        var3 = 1;
                        var3 = var5.bind(var1)(var3, var4);
                        var2 = _closure1_slot1;
                        var3 = var2.bind(var1)(var0);
                        var2 = 'object';
                        if (!(var2 === var3)) {
                            _fun22882_ip = 237;
                            continue _fun22882
                        }
                    case 53:
                        var2 = var0.years;
                        var8 = 0;
                        if (!(var1 !== var2)) {
                            _fun22882_ip = 68;
                            continue _fun22882
                        }
                    case 65:
                        var8 = var2;
                    case 68:
                        var2 = var0.months;
                        var5 = 0;
                        if (!(var1 !== var2)) {
                            _fun22882_ip = 83;
                            continue _fun22882
                        }
                    case 80:
                        var5 = var2;
                    case 83:
                        var2 = var0.days;
                        var7 = 0;
                        if (!(var1 !== var2)) {
                            _fun22882_ip = 98;
                            continue _fun22882
                        }
                    case 95:
                        var7 = var2;
                    case 98:
                        var2 = var0.hours;
                        var6 = 0;
                        if (!(var1 !== var2)) {
                            _fun22882_ip = 113;
                            continue _fun22882
                        }
                    case 110:
                        var6 = var2;
                    case 113:
                        var2 = var0.minutes;
                        var4 = 0;
                        if (!(var1 !== var2)) {
                            _fun22882_ip = 128;
                            continue _fun22882
                        }
                    case 125:
                        var4 = var2;
                    case 128:
                        var0 = var0.seconds;
                        var3 = 0;
                        if (!(var1 !== var0)) {
                            _fun22882_ip = 143;
                            continue _fun22882
                        }
                    case 140:
                        var3 = var0;
                    case 143:
                        var2 = 'P';
                        var1 = var2.concat;
                        var0 = 'Y';
                        var1 = var1.bind(var2)(var8, var0);
                        var0 = var1.concat;
                        var2 = 'M';
                        var5 = var0.bind(var1)(var5, var2);
                        var1 = var5.concat;
                        var0 = 'DT';
                        var5 = var1.bind(var5)(var7, var0);
                        var1 = var5.concat;
                        var0 = 'H';
                        var1 = var1.bind(var5)(var6, var0);
                        var0 = var1.concat;
                        var2 = var0.bind(var1)(var4, var2);
                        var1 = var2.concat;
                        var0 = 'S';
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    case 237:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var11 = 'Duration must be an object';
                        var12 = var1;
                        var0 = new var12[var2](var11, var10);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
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
                _fun22878_ip = 91;
                continue _fun22878
            }
        case 79:
            var4 = var5.__esModule;
            var2 = var5;
            if (var4) {
                _fun22878_ip = 100;
                continue _fun22878
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2565]);