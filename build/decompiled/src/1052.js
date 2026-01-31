// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = [800, 1800];
    var _closure1_slot2 = var2;
    var3 = function arg0() {
        _fun10809: for (var _fun10809_ip = 0;;) switch (_fun10809_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 0;
                var3 = var0[var7];
                var0 = undefined;
                var3 = var5.bind(var0)(var3);
                var3 = var3.WINDOW;
                var3 = var3.document;
                var5 = null;
                if (!(var5 != var3)) {
                    _fun10809_ip = 60;
                    continue _fun10809
                }
            case 51:
                var3 = var3.prerendering;
                if (var3) {
                    _fun10809_ip = 155;
                    continue _fun10809
                }
            case 60:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var6.bind(var0)(var3);
                var3 = var3.WINDOW;
                var3 = var3.document;
                var6 = var5 == var3;
                var5 = undefined;
                if (var6) {
                    _fun10809_ip = 104;
                    continue _fun10809
                }
            case 98:
                var5 = var3.readyState;
            case 104:
                var3 = 'complete';
                if (!(var3 === var5)) {
                    _fun10809_ip = 127;
                    continue _fun10809
                }
            case 112:
                var3 = global;
                var3 = var3.setTimeout;
                var3 = var3.bind(var0)(var4);
                _fun10809_ip = 191;
                continue _fun10809;
            case 127:
                var3 = global;
                var6 = var3.addEventListener;
                var5 = 'load';
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var3 = true;
                var3 = var6.bind(var0)(var5, var4, var3);
                _fun10809_ip = 191;
                continue _fun10809;
            case 155:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.whenActivated;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 191:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var1.TTFBThresholds = var2;
    var0 = function arg0() {
        _fun10812: for (var _fun10812_ip = 0;;) switch (_fun10812_ip) {
            case 0:
                var0 = undefined;
                var4 = undefined;
                var3 = arguments.length;
                var2 = 1;
                if (!(var3 > var2)) {
                    _fun10812_ip = 24;
                    continue _fun10812
                }
            case 16:
                var3 = arguments[var2];
                if (!(var0 === var3)) {
                    _fun10812_ip = 28;
                    continue _fun10812
                }
            case 24:
                var3 = {};
                _fun10812_ip = 32;
                continue _fun10812;
            case 28:
                var3 = arguments[var2];
            case 32:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 2;
                var4 = var6[var4];
                var8 = var5.bind(var0)(var4);
                var7 = var8.initMetric;
                var4 = 'TTFB';
                var8 = var7.bind(var8)(var4);
                var _closure2_slot0 = var8;
                var4 = 3;
                var4 = var6[var4];
                var7 = var5.bind(var0)(var4);
                var6 = var7.bindReporter;
                var10 = _closure1_slot2;
                var9 = var3.reportAllChanges;
                var12 = arg0;
                var13 = var7;
                var11 = var8;
                var3 = var13[var6](var12, var11, var10, var9, var8);
                var _closure2_slot1 = var3;
                var2 = _closure1_slot3;
                var1 = function() { // Environment: var1
                    _fun10813: for (var _fun10813_ip = 0;;) switch (_fun10813_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.getNavigationEntry;
                            var4 = var1.bind(var3)();
                            if (!var4) {
                                _fun10813_ip = 141;
                                continue _fun10813
                            }
                        case 38:
                            var3 = _closure2_slot0;
                            var5 = global;
                            var7 = var5.Math;
                            var6 = var7.max;
                            var5 = var4.responseStart;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var2 = 5;
                            var2 = var9[var2];
                            var8 = var8.bind(var0)(var2);
                            var2 = var8.getActivationStart;
                            var2 = var2.bind(var8)();
                            var5 = var5 - var2;
                            var2 = 0;
                            var2 = var6.bind(var7)(var5, var2);
                            var3.value = var2;
                            var3 = _closure2_slot0;
                            var2 = new Array(1);
                            var2[0] = var4;
                            var3.entries = var2;
                            var2 = _closure2_slot1;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                        case 141:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var1.onTTFB = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1036, 1035, 1041, 1044, 1040, 1039]);