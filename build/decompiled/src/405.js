// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun5788: for (var _fun5788_ip = 0;;) switch (_fun5788_ip) {
        case 0:
            var5 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = global;
            var7 = var0.Object;
            var3 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var7)(var2, var0, var1);
            var1 = 0;
            var3 = var6[var1];
            var0 = undefined;
            var3 = var5.bind(var0)(var3);
            if (var3) {
                _fun5788_ip = 79;
                continue _fun5788
            }
        case 67:
            var3 = {
                'isRTL': false,
                'doLeftAndRightSwapInRTL': true
            };
            _fun5788_ip = 136;
            continue _fun5788;
        case 79:
            var1 = var6[var1];
            var5 = var5.bind(var0)(var1);
            var1 = var5.getConstants;
            var5 = var1.bind(var5)();
            var1 = {};
            var6 = var5.isRTL;
            var1.isRTL = var6;
            var6 = var5.doLeftAndRightSwapInRTL;
            var1.doLeftAndRightSwapInRTL = var6;
            var5 = var5.localeIdentifier;
            var1.localeIdentifier = var5;
            var3 = var1;
        case 136:
            var _closure1_slot2 = var3;
            var1 = {};
            var5 = function() {
                var0 = _closure1_slot2;
                return var0;
            };
            var1.getConstants = var5;
            var5 = function arg0() {
                _fun5790: for (var _fun5790_ip = 0;;) switch (_fun5790_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var3 = 0;
                        var2 = var0[var3];
                        var0 = undefined;
                        var2 = var4.bind(var0)(var2);
                        if (!var2) {
                            _fun5790_ip = 58;
                            continue _fun5790
                        }
                    case 27:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var3];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.allowRTL;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 58:
                        return var0;
                }
            };
            var1.allowRTL = var5;
            var5 = function arg0() {
                _fun5791: for (var _fun5791_ip = 0;;) switch (_fun5791_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var3 = 0;
                        var2 = var0[var3];
                        var0 = undefined;
                        var2 = var4.bind(var0)(var2);
                        if (!var2) {
                            _fun5791_ip = 58;
                            continue _fun5791
                        }
                    case 27:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var3];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.forceRTL;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 58:
                        return var0;
                }
            };
            var1.forceRTL = var5;
            var4 = function arg0() {
                _fun5792: for (var _fun5792_ip = 0;;) switch (_fun5792_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var3 = 0;
                        var2 = var0[var3];
                        var0 = undefined;
                        var2 = var4.bind(var0)(var2);
                        if (!var2) {
                            _fun5792_ip = 58;
                            continue _fun5792
                        }
                    case 27:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var3];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.swapLeftAndRightInRTL;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 58:
                        return var0;
                }
            };
            var1.swapLeftAndRightInRTL = var4;
            var4 = var3.isRTL;
            var1.isRTL = var4;
            var3 = var3.doLeftAndRightSwapInRTL;
            var1.doLeftAndRightSwapInRTL = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [406]);