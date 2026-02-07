// modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var3 = 3;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.isFabric;
    var3 = var3.bind(var6)();
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot1;
        var3 = var4.useState;
        var2 = false;
        var7 = var3.bind(var4)(var2);
        var3 = _closure1_slot0;
        var2 = undefined;
        var1 = 2;
        var3 = var3.bind(var2)(var7, var1);
        var1 = 0;
        var1 = var3[var1];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot2 = var2;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var4 = _closure2_slot2;
            var0 = var1.nativeEvent;
            var0 = var0.contentOffset;
            var3 = var0.x;
            var0 = _closure2_slot0;
            var3 = var3 < var0;
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var3 = _closure2_slot1;
            var2 = var1.nativeEvent;
            var2 = var2.contentOffset;
            var2 = var2.x;
            var1 = var1.nativeEvent;
            var1 = var1.layoutMeasurement;
            var1 = var1.width;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var2 = var3.bind(var4)(var0, var2);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun102109: for (var _fun102109_ip = 0;;) switch (_fun102109_ip) {
            case 0:
                var7 = arg0;
                var1 = var7.current;
                var6 = null;
                var2 = var6 == var1;
                var0 = undefined;
                if (var2) {
                    _fun102109_ip = 52;
                    continue _fun102109
                }
            case 19:
                var1 = var1.state;
                var2 = var6 == var1;
                var0 = undefined;
                if (var2) {
                    _fun102109_ip = 52;
                    continue _fun102109
                }
            case 33:
                var1 = var1.data;
                var2 = var6 == var1;
                var0 = undefined;
                if (var2) {
                    _fun102109_ip = 52;
                    continue _fun102109
                }
            case 47:
                var0 = var1.length;
            case 52:
                var1 = var6 != var0;
                var4 = 0;
                var3 = 0;
                if (!var1) {
                    _fun102109_ip = 66;
                    continue _fun102109
                }
            case 63:
                var3 = var0;
            case 66:
                var0 = new Array(0);
                var8 = var4 < var3;
                var2 = 0;
                var1 = 0;
                if (!var8) {
                    _fun102109_ip = 168;
                    continue _fun102109
                }
            case 81:
                var8 = var7.current;
                var10 = var6 == var8;
                var9 = undefined;
                if (var10) {
                    _fun102109_ip = 135;
                    continue _fun102109
                }
            case 95:
                var10 = var8.recyclerlistview_unsafe;
                var8 = var6 == var10;
                var9 = undefined;
                if (var8) {
                    _fun102109_ip = 135;
                    continue _fun102109
                }
            case 110:
                var8 = var10.getLayout;
                var8 = var8.bind(var10)(var1);
                var10 = var6 == var8;
                var9 = undefined;
                if (var10) {
                    _fun102109_ip = 135;
                    continue _fun102109
                }
            case 130:
                var9 = var8.width;
            case 135:
                var10 = var6 != var9;
                var8 = 0;
                if (!var10) {
                    _fun102109_ip = 147;
                    continue _fun102109
                }
            case 144:
                var8 = var9;
            case 147:
                var9 = var0.push;
                var9 = var9.bind(var0)(var2);
                var2 = var2 + var8;
                var1 = var1 + 1;
                if (var1 < var3) {
                    _fun102109_ip = 81;
                    continue _fun102109
                }
            case 168:
                return var0;
        }
    };
    var2.useHappeningNowScrollSnapping = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3912, 2]);