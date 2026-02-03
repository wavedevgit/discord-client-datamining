// modules/screen/native/useWindowSizeClassifier.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var0 = function arg0() {
        _fun35330: for (var _fun35330_ip = 0;;) switch (_fun35330_ip) {
            case 0:
                var1 = arg0;
                var0 = 360;
                if (!(!(var1 <= var0))) {
                    _fun35330_ip = 78;
                    continue _fun35330
                }
            case 13:
                var0 = 600;
                if (!(!(var1 <= var0))) {
                    _fun35330_ip = 63;
                    continue _fun35330
                }
            case 23:
                var0 = 840;
                if (!(!(var1 <= var0))) {
                    _fun35330_ip = 48;
                    continue _fun35330
                }
            case 33:
                var0 = _closure1_slot3;
                var0 = var0.XLARGE;
                _fun35330_ip = 61;
                continue _fun35330;
            case 48:
                var1 = _closure1_slot3;
                var0 = var1.LARGE;
            case 61:
                _fun35330_ip = 76;
                continue _fun35330;
            case 63:
                var1 = _closure1_slot3;
                var0 = var1.NORMAL;
            case 76:
                _fun35330_ip = 91;
                continue _fun35330;
            case 78:
                var1 = _closure1_slot3;
                var0 = var1.SMALL;
            case 91:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = {};
    var6 = 0;
    var3.SMALL = var6;
    var0 = 'SMALL';
    var3[var6] = var0;
    var0 = 1;
    var3.NORMAL = var0;
    var6 = 'NORMAL';
    var3[var0] = var6;
    var7 = 2;
    var3.LARGE = var7;
    var6 = 'LARGE';
    var3[var7] = var6;
    var7 = 3;
    var3.XLARGE = var7;
    var6 = 'XLARGE';
    var3[var7] = var6;
    var _closure1_slot3 = var3;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen/native/useWindowSizeClassifier.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var2 = _closure1_slot4;
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var0.bind(var1)();
        var0 = var0.width;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.default = var4;
    var2.WindowSizeClassifier = var3;
    var1 = function() {
        var2 = _closure1_slot4;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 0;
        var0 = var1[var0];
        var1 = undefined;
        var3 = var3.bind(var1)(var0);
        var0 = var3.getAppContainerDimensions;
        var0 = var0.bind(var3)();
        var0 = var0.width;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.getWindowSizeClassifier = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3915, 2]);