// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun37950: for (var _fun37950_ip = 0;;) switch (_fun37950_ip) {
        case 0:
            var4 = require;
            var3 = exports;
            var5 = dependencyMap;
            var1 = this;
            var2 = var1;
            if (!var1) {
                _fun37950_ip = 26;
                continue _fun37950
            }
        case 20:
            var2 = var1.__createBinding;
        case 26:
            if (var2) {
                _fun37950_ip = 60;
                continue _fun37950
            }
        case 29:
            var6 = global;
            var6 = var6.Object;
            var6 = var6.create;
            if (var6) {
                _fun37950_ip = 52;
                continue _fun37950
            }
        case 45:
            var6 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                _fun37953: for (var _fun37953_ip = 0;;) switch (_fun37953_ip) {
                    case 0:
                        var2 = arg2;
                        var3 = arg3;
                        var0 = undefined;
                        if (!(var0 === var3)) {
                            _fun37953_ip = 15;
                            continue _fun37953
                        }
                    case 12:
                        var3 = var2;
                    case 15:
                        var1 = arg1;
                        var2 = var1[var2];
                        var1 = arg0;
                        var1[var3] = var2;
                        return var0;
                }
            };
            _fun37950_ip = 57;
            continue _fun37950;
        case 52:
            var6 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                _fun37951: for (var _fun37951_ip = 0;;) switch (_fun37951_ip) {
                    case 0:
                        var7 = arg1;
                        var6 = arg2;
                        var5 = arg3;
                        var _closure2_slot0 = var7;
                        var _closure2_slot1 = var6;
                        var0 = undefined;
                        if (!(var0 === var5)) {
                            _fun37951_ip = 28;
                            continue _fun37951
                        }
                    case 25:
                        var5 = var6;
                    case 28:
                        var1 = global;
                        var4 = var1.Object;
                        var2 = var4.getOwnPropertyDescriptor;
                        var4 = var2.bind(var4)(var7, var6);
                        var2 = var4;
                        if (!var4) {
                            _fun37951_ip = 94;
                            continue _fun37951
                        }
                    case 54:
                        var6 = 'get';
                        var6 = var6 in var4;
                        if (var6) {
                            _fun37951_ip = 82;
                            continue _fun37951
                        }
                    case 65:
                        var6 = var4.writable;
                        if (var6) {
                            _fun37951_ip = 80;
                            continue _fun37951
                        }
                    case 74:
                        var6 = var4.configurable;
                    case 80:
                        _fun37951_ip = 91;
                        continue _fun37951;
                    case 82:
                        var7 = var7.__esModule;
                        var6 = !var7;
                    case 91:
                        var2 = !var6;
                    case 94:
                        if (var2) {
                            _fun37951_ip = 117;
                            continue _fun37951
                        }
                    case 97:
                        var2 = {};
                        var6 = true;
                        var2.enumerable = var6;
                        var3 = function() {
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var1[var0];
                            return var0;
                        };
                        var2.get = var3;
                        var4 = var2;
                    case 117:
                        var3 = var1.Object;
                        var2 = var3.defineProperty;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1, var5, var4);
                        return var0;
                }
            };
        case 57:
            var2 = var6;
        case 60:
            var _closure1_slot0 = var2;
            var2 = var1;
            if (!var2) {
                _fun37950_ip = 76;
                continue _fun37950
            }
        case 70:
            var2 = var1.__exportStar;
        case 76:
            if (var2) {
                _fun37950_ip = 84;
                continue _fun37950
            }
        case 79:
            var2 = function(arg0, arg1) { // Environment: var0
                _fun37954: for (var _fun37954_ip = 0;;) switch (_fun37954_ip) {
                    case 0:
                        var10 = arg0;
                        var9 = arg1;
                        var7 = var10;
                        var0 = undefined;
                        var2 = global;
                        var1 = 'default';
                        for (var4 in var7)
                            case 28: {
                                case 37: var12 = var4;
                                var11 = var1 === var12;
                                if (var11) {
                                    _fun37954_ip = 75;
                                    continue _fun37954
                                }
                                case 47: var13 = var2.Object;
                                var13 = var13.prototype;
                                var14 = var13.hasOwnProperty;
                                var13 = var14.call;
                                var11 = var13.bind(var14)(var9, var12);
                                case 75: if (var11) {
                                    _fun37954_ip = 28;
                                    continue _fun37954
                                }
                                case 78: var11 = _closure1_slot0;
                                var11 = var11.bind(var0)(var9, var10, var12);
                                _fun37954_ip = 28;
                                continue _fun37954;
                            }
                    case 91:
                        return var0;
                }
            };
        case 84:
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var3, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var4.bind(var0)(var1);
            var1 = var2.bind(var0)(var1, var3);
            var1 = 1;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = var2.bind(var0)(var1, var3);
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [4152, 4154]);