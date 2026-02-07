// lib/intlFormatDate.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun27159: for (var _fun27159_ip = 0;;) switch (_fun27159_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
            case 6: // try_start_0
                var2 = global;
                var4 = var2.Intl;
                var3 = var4.DateTimeFormat;
                var2 = var1;
                var1 = var0;
                var1 = var3.bind(var4)(var2, var1);
                var1 = var1.format;
            case 37: // try_end0
                return var1;
            case 39: // catch_target0
                CatchBlockStart(arg_register = 1);
                var1 = global;
                var3 = var1.Intl;
                var2 = var3.DateTimeFormat;
                var1 = var0;
                var0 = undefined;
                var0 = var2.bind(var3)(var0, var1);
                var0 = var0.format;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/intlFormatDate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun27160: for (var _fun27160_ip = 0;;) switch (_fun27160_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot2;
                var3 = var0.locale;
                var0 = function arg0, arg1() {
                    _fun27161: for (var _fun27161_ip = 0;;) switch (_fun27161_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = arg1;
                            var6 = var3;
                            var _closure3_slot0 = var3;
                            var2 = var0;
                            var _closure3_slot1 = var0;
                            var3 = undefined;
                            var7 = undefined;
                            var8 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var4 = 1;
                            var0 = var0[var4];
                            var0 = var8.bind(var3)(var0);
                            var8 = var0.makeFormatter;
                            var0 = null;
                            if (!(var0 != var8)) {
                                _fun27161_ip = 266;
                                continue _fun27161
                            }
                        case 64: // try_start_0
                            var9 = var6;
                            var9 = var0 != var9;
                            var8 = var9;
                            if (!var9) {
                                _fun27161_ip = 176;
                                continue _fun27161
                            }
                        case 77:
                            var10 = var6;
                            var9 = var10.split;
                            var14 = '-';
                            var9 = var9.bind(var10)(var14);
                            var12 = 0;
                            var10 = var9[var12];
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var15 = 2;
                            var9 = var9[var15];
                            var9 = var11.bind(var3)(var9);
                            var9 = var9.systemLocale;
                            var11 = var0 == var9;
                            var9 = undefined;
                            if (var11) {
                                _fun27161_ip = 172;
                                continue _fun27161
                            }
                        case 135:
                            var13 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var11 = var11[var15];
                            var11 = var13.bind(var3)(var11);
                            var13 = var11.systemLocale;
                            var11 = var13.split;
                            var11 = var11.bind(var13)(var14);
                            var9 = var11[var12];
                        case 172:
                            var8 = var10 === var9;
                        case 176:
                            var7 = var8;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var4 = var11[var4];
                            var5 = var10.bind(var3)(var4);
                            var4 = var5.makeFormatter;
                            var9 = var6;
                            var8 = 2;
                            var8 = var11[var8];
                            var8 = var10.bind(var3)(var8);
                            var8 = var8.initialLocale;
                            if (!(var9 === var8)) {
                                _fun27161_ip = 232;
                                continue _fun27161
                            }
                        case 227:
                            var3 = undefined;
                            if (var7) {
                                _fun27161_ip = 235;
                                continue _fun27161
                            }
                        case 232:
                            var3 = var6;
                        case 235:
                            var2 = var4.bind(var5)(var3, var2);
                            var _closure3_slot2 = var2;
                            if (!(var0 != var2)) {
                                _fun27161_ip = 260;
                                continue _fun27161
                            }
                        case 249:
                            var _closure3_slot3 = var0;
                        case 253: // try_end0
                            var1 = function(arg0) { // Environment: var1
                                _fun27162: for (var _fun27162_ip = 0;;) switch (_fun27162_ip) {
                                    case 0:
                                        var0 = arg0;
                                    case 3: // try_start_0
                                        var3 = _closure3_slot2;
                                        var2 = var0;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2);
                                    case 20: // try_end0
                                        return var1;
                                    case 22: // catch_target0
                                        CatchBlockStart(arg_register = 1);
                                        var3 = _closure3_slot3;
                                        var2 = null;
                                        if (!(var2 == var3)) {
                                            _fun27162_ip = 64;
                                            continue _fun27162
                                        }
                                    case 37:
                                        var5 = _closure1_slot3;
                                        var4 = _closure3_slot0;
                                        var3 = _closure3_slot1;
                                        var2 = undefined;
                                        var2 = var5.bind(var2)(var4, var3);
                                        _closure3_slot3 = var2;
                                    case 64:
                                        var2 = _closure3_slot3;
                                        var1 = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            return var1;
                        case 260:
                            return var0;
                        case 262: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            return var0;
                        case 266:
                            return var0;
                    }
                };
                var2 = undefined;
                var0 = var0.bind(var2)(var3, var4);
                var5 = null;
                if (!(var5 == var0)) {
                    _fun27160_ip = 47;
                    continue _fun27160
                }
            case 37:
                var1 = _closure1_slot3;
                var0 = var1.bind(var2)(var3, var4);
            case 47:
                return var0;
        }
    };
    var2.makeFormatter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1687, 3138, 1234, 2]);