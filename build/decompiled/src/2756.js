// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22701: for (var _fun22701_ip = 0;;) switch (_fun22701_ip) {
        case 0:
            var1 = exports;
            var0 = function arg0() {
                _fun22702: for (var _fun22702_ip = 0;;) switch (_fun22702_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Symbol;
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun22702_ip = 43;
                            continue _fun22702
                        }
                    case 20:
                        var1 = var1.Symbol;
                        var1 = var1.iterator;
                        var2 = 'symbol';
                        var1 = typeof var1;
                        if (!(var2 !== var1)) {
                            _fun22702_ip = 50;
                            continue _fun22702
                        }
                    case 43:
                        var2 = function arg0() {
                            _fun22704: for (var _fun22704_ip = 0;;) switch (_fun22704_ip) {
                                case 0:
                                    var1 = arg0;
                                    if (!var1) {
                                        _fun22704_ip = 58;
                                        continue _fun22704
                                    }
                                case 6:
                                    var0 = global;
                                    var2 = var0.Symbol;
                                    var3 = 'function';
                                    var2 = typeof var2;
                                    if (!(var3 === var2)) {
                                        _fun22704_ip = 58;
                                        continue _fun22704
                                    }
                                case 24:
                                    var3 = var1.constructor;
                                    var2 = var0.Symbol;
                                    if (!(var3 === var2)) {
                                        _fun22704_ip = 58;
                                        continue _fun22704
                                    }
                                case 39:
                                    var0 = var0.Symbol;
                                    var2 = var0.prototype;
                                    var0 = 'symbol';
                                    if (!(var1 === var2)) {
                                        _fun22704_ip = 61;
                                        continue _fun22704
                                    }
                                case 58:
                                    var0 = typeof var1;
                                case 61:
                                    return var0;
                            }
                        };
                        _fun22702_ip = 55;
                        continue _fun22702;
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
                _fun22705: for (var _fun22705_ip = 0;;) switch (_fun22705_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot0;
                        var5 = var2.default;
                        var0 = arguments;
                        var2 = var0;
                        var0 = 1;
                        var0 = var5.bind(var3)(var0, var2);
                        var2 = global;
                        var0 = var2.Date;
                        var0 = var4 instanceof var0;
                        if (var0) {
                            _fun22705_ip = 105;
                            continue _fun22705
                        }
                    case 48:
                        var1 = _closure1_slot1;
                        var3 = var1.bind(var3)(var4);
                        var1 = 'object';
                        var1 = var1 === var3;
                        if (!var1) {
                            _fun22705_ip = 102;
                            continue _fun22705
                        }
                    case 68:
                        var2 = var2.Object;
                        var2 = var2.prototype;
                        var3 = var2.toString;
                        var2 = var3.call;
                        var3 = var2.bind(var3)(var4);
                        var2 = '[object Date]';
                        var1 = var2 === var3;
                    case 102:
                        var0 = var1;
                    case 105:
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
                _fun22701_ip = 91;
                continue _fun22701
            }
        case 79:
            var4 = var5.__esModule;
            var2 = var5;
            if (var4) {
                _fun22701_ip = 100;
                continue _fun22701
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2574]);