// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var1 = var1.Math;
    var1 = var1.max;
    var _closure1_slot2 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun32734: for (var _fun32734_ip = 0;;) switch (_fun32734_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var4;
                var2 = arg2;
                var _closure2_slot2 = var2;
                var3 = _closure1_slot2;
                var2 = undefined;
                if (!(var2 === var4)) {
                    _fun32734_ip = 48;
                    continue _fun32734
                }
            case 36:
                var5 = var1.length;
                var1 = 1;
                var4 = var5 - var1;
            case 48:
                var1 = 0;
                var1 = var3.bind(var2)(var4, var1);
                _closure2_slot1 = var1;
                var0 = function() { // Environment: var0
                    _fun32735: for (var _fun32735_ip = 0;;) switch (_fun32735_ip) {
                        case 0:
                            var4 = undefined;
                            var8 = undefined;
                            var3 = _closure1_slot2;
                            var5 = arguments.length;
                            var2 = _closure2_slot1;
                            var2 = var5 - var2;
                            var5 = 0;
                            var6 = var3.bind(var4)(var2, var5);
                            var2 = global;
                            var3 = var2.Array;
                            var7 = var3.bind(var4)(var6);
                            var9 = var5 < var6;
                            var3 = 0;
                            if (!var9) {
                                _fun32735_ip = 78;
                                continue _fun32735
                            }
                        case 55:
                            var9 = _closure2_slot1;
                            var9 = var9 + var3;
                            var9 = arguments[var9];
                            var7[var3] = var9;
                            var3 = var3 + 1;
                            if (var3 < var6) {
                                _fun32735_ip = 55;
                                continue _fun32735
                            }
                        case 78:
                            var3 = var2.Array;
                            var6 = _closure2_slot1;
                            var2 = 1;
                            var2 = var6 + var2;
                            var3 = var3.bind(var4)(var2);
                            var2 = _closure2_slot1;
                            var2 = var5 < var2;
                            var6 = 0;
                            if (!var2) {
                                _fun32735_ip = 132;
                                continue _fun32735
                            }
                        case 113:
                            var2 = arguments[var6];
                            var3[var6] = var2;
                            var6 = var6 + 1;
                            var2 = _closure2_slot1;
                            if (var6 < var2) {
                                _fun32735_ip = 113;
                                continue _fun32735
                            }
                        case 132:
                            var6 = _closure2_slot1;
                            var2 = _closure2_slot2;
                            var2 = var2.bind(var4)(var7);
                            var3[var6] = var2;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var5];
                            var2 = var2.bind(var4)(var1);
                            var1 = _closure2_slot0;
                            var0 = this;
                            var0 = var2.bind(var4)(var1, var0, var3);
                            return var0;
                    }
                };
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3659]);