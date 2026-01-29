// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun37739: for (var _fun37739_ip = 0;;) switch (_fun37739_ip) {
        case 0:
            var3 = exports;
            var1 = this;
            var2 = var1;
            if (!var1) {
                _fun37739_ip = 20;
                continue _fun37739
            }
        case 14:
            var2 = var1.__createBinding;
        case 20:
            if (var2) {
                _fun37739_ip = 54;
                continue _fun37739
            }
        case 23:
            var4 = global;
            var4 = var4.Object;
            var4 = var4.create;
            if (var4) {
                _fun37739_ip = 46;
                continue _fun37739
            }
        case 39:
            var4 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                _fun37742: for (var _fun37742_ip = 0;;) switch (_fun37742_ip) {
                    case 0:
                        var2 = arg2;
                        var3 = arg3;
                        var0 = undefined;
                        if (!(var0 === var3)) {
                            _fun37742_ip = 15;
                            continue _fun37742
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
            _fun37739_ip = 51;
            continue _fun37739;
        case 46:
            var4 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                _fun37740: for (var _fun37740_ip = 0;;) switch (_fun37740_ip) {
                    case 0:
                        var7 = arg1;
                        var6 = arg2;
                        var5 = arg3;
                        var _closure2_slot0 = var7;
                        var _closure2_slot1 = var6;
                        var0 = undefined;
                        if (!(var0 === var5)) {
                            _fun37740_ip = 28;
                            continue _fun37740
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
                            _fun37740_ip = 94;
                            continue _fun37740
                        }
                    case 54:
                        var6 = 'get';
                        var6 = var6 in var4;
                        if (var6) {
                            _fun37740_ip = 82;
                            continue _fun37740
                        }
                    case 65:
                        var6 = var4.writable;
                        if (var6) {
                            _fun37740_ip = 80;
                            continue _fun37740
                        }
                    case 74:
                        var6 = var4.configurable;
                    case 80:
                        _fun37740_ip = 91;
                        continue _fun37740;
                    case 82:
                        var7 = var7.__esModule;
                        var6 = !var7;
                    case 91:
                        var2 = !var6;
                    case 94:
                        if (var2) {
                            _fun37740_ip = 117;
                            continue _fun37740
                        }
                    case 97:
                        var2 = {};
                        var6 = true;
                        var2.enumerable = var6;
                        var3 = function() { // Original name: get, environment: var3
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
        case 51:
            var2 = var4;
        case 54:
            var _closure1_slot0 = var2;
            var2 = var1;
            if (!var2) {
                _fun37739_ip = 70;
                continue _fun37739
            }
        case 64:
            var2 = var1.__exportStar;
        case 70:
            if (var2) {
                _fun37739_ip = 78;
                continue _fun37739
            }
        case 73:
            var2 = function(arg0, arg1) { // Environment: var0
                _fun37743: for (var _fun37743_ip = 0;;) switch (_fun37743_ip) {
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
                                    _fun37743_ip = 75;
                                    continue _fun37743
                                }
                                case 47: var13 = var2.Object;
                                var13 = var13.prototype;
                                var14 = var13.hasOwnProperty;
                                var13 = var14.call;
                                var11 = var13.bind(var14)(var9, var12);
                                case 75: if (var11) {
                                    _fun37743_ip = 28;
                                    continue _fun37743
                                }
                                case 78: var11 = _closure1_slot0;
                                var11 = var11.bind(var0)(var9, var10, var12);
                                _fun37743_ip = 28;
                                continue _fun37743;
                            }
                    case 91:
                        return var0;
                }
            };
        case 78:
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var3, var0, var1);
            var1 = arg6;
            var0 = 0;
            var4 = var1[var0];
            var1 = arg1;
            var0 = undefined;
            var1 = var1.bind(var0)(var4);
            var1 = var2.bind(var0)(var1, var3);
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [4111]);