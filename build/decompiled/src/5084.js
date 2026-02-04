// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot2;
        var4 = var1.duration;
        var2 = new Array(3);
        var2[0] = var4;
        var4 = var1.easing;
        var2[1] = var4;
        var1 = var1.reduceMotion;
        var2[2] = var1;
        var1 = undefined;
        var0 = function() { // Environment: var0
            _fun45554: for (var _fun45554_ip = 0;;) switch (_fun45554_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure2_slot0;
                    var2 = var2.easing;
                    if (var2) {
                        _fun45554_ip = 49;
                        continue _fun45554
                    }
                case 18:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 1;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var2 = var3.ANIMATION_EASING;
                case 49:
                    var0.easing = var2;
                    var2 = _closure2_slot0;
                    var2 = var2.duration;
                    if (var2) {
                        _fun45554_ip = 97;
                        continue _fun45554
                    }
                case 66:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 1;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var2 = var3.ANIMATION_DURATION;
                case 97:
                    var0.duration = var2;
                    var1 = _closure2_slot0;
                    var1 = var1.reduceMotion;
                    var0.reduceMotion = var1;
                    return var0;
            }
        };
        var0 = var3.bind(var1)(var0, var2);
        return var0;
    };
    var2.useBottomSheetTimingConfigs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4934]);