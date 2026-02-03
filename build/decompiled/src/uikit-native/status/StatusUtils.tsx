// uikit-native/status/StatusUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.STATUS_PADDING;
    var _closure1_slot0 = var6;
    var3 = var3.StatusSizes;
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/status/StatusUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var0 = 2;
        var1 = var1 / var0;
        var0 = 6;
        var0 = var1 - var0;
        return var0;
    };
    var2.getAnimatedTypingTranslateX = var3;
    var3 = function arg0() {
        var0 = {};
        var2 = _closure1_slot0;
        var1 = 2;
        var2 = var1 * var2;
        var1 = arg0;
        var2 = var1 + var2;
        var0.width = var2;
        var1 = 1.4;
        var1 = var1 * var2;
        var0.height = var1;
        var1 = 4;
        var1 = var2 / var1;
        var0.cornerRadius = var1;
        return var0;
    };
    var2.getMobileStatusContainerRect = var3;
    var1 = function arg0() {
        _fun49114: for (var _fun49114_ip = 0;;) switch (_fun49114_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot1;
                var1 = var1.SMALL;
                if (!(var1 !== var2)) {
                    _fun49114_ip = 54;
                    continue _fun49114
                }
            case 20:
                var1 = _closure1_slot1;
                var1 = var1.XSMALL;
                if (!(var1 !== var2)) {
                    _fun49114_ip = 54;
                    continue _fun49114
                }
            case 34:
                var0 = _closure1_slot1;
                var0 = var0.REFRESH_MEDIUM_10;
                var5 = 28;
                var1 = 6;
                if (!(var0 === var2)) {
                    _fun49114_ip = 60;
                    continue _fun49114
                }
            case 54:
                var5 = 22;
                var1 = 4;
            case 60:
                var0 = {};
                var0.width = var5;
                var2 = global;
                var4 = var2.Math;
                var3 = var4.floor;
                var2 = 2.33;
                var2 = var5 / var2;
                var2 = var3.bind(var4)(var2);
                var0.height = var2;
                var0.dotSize = var1;
                return var0;
        }
    };
    var2.getStatusTypingDimensions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5453, 2]);