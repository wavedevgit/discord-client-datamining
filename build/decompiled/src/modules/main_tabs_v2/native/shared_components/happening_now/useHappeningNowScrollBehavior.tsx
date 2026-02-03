// modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var5 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot1 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
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
        _fun101578: for (var _fun101578_ip = 0;;) switch (_fun101578_ip) {
            case 0:
                var8 = arg0;
                var1 = var8.current;
                var7 = null;
                var2 = var7 == var1;
                var0 = undefined;
                if (var2) {
                    _fun101578_ip = 52;
                    continue _fun101578
                }
            case 19:
                var1 = var1.state;
                var2 = var7 == var1;
                var0 = undefined;
                if (var2) {
                    _fun101578_ip = 52;
                    continue _fun101578
                }
            case 33:
                var1 = var1.data;
                var2 = var7 == var1;
                var0 = undefined;
                if (var2) {
                    _fun101578_ip = 52;
                    continue _fun101578
                }
            case 47:
                var0 = var1.length;
            case 52:
                var1 = var7 != var0;
                var5 = 0;
                var4 = 0;
                if (!var1) {
                    _fun101578_ip = 66;
                    continue _fun101578
                }
            case 63:
                var4 = var0;
            case 66:
                var0 = new Array(0);
                var9 = var5 < var4;
                var3 = 0;
                var2 = 0;
                var1 = undefined;
                if (!var9) {
                    _fun101578_ip = 191;
                    continue _fun101578
                }
            case 83:
                var9 = var7 == var8;
                var10 = undefined;
                if (var9) {
                    _fun101578_ip = 158;
                    continue _fun101578
                }
            case 92:
                var9 = var8.current;
                var11 = var7 == var9;
                var1 = var9;
                var10 = undefined;
                if (var11) {
                    _fun101578_ip = 158;
                    continue _fun101578
                }
            case 109:
                var11 = var9.recyclerlistview_unsafe;
                var9 = var7 == var11;
                var1 = var11;
                var10 = undefined;
                if (var9) {
                    _fun101578_ip = 158;
                    continue _fun101578
                }
            case 127:
                var9 = var11.getLayout;
                var11 = var9.bind(var11)(var2);
                var9 = var7 == var11;
                var1 = var11;
                var10 = undefined;
                if (var9) {
                    _fun101578_ip = 158;
                    continue _fun101578
                }
            case 150:
                var10 = var11.width;
                var1 = var11;
            case 158:
                var11 = var7 != var10;
                var9 = 0;
                if (!var11) {
                    _fun101578_ip = 170;
                    continue _fun101578
                }
            case 167:
                var9 = var10;
            case 170:
                var10 = var0.push;
                var10 = var10.bind(var0)(var3);
                var3 = var3 + var9;
                var2 = var2 + 1;
                if (var2 < var4) {
                    _fun101578_ip = 83;
                    continue _fun101578
                }
            case 191:
                return var0;
        }
    };
    var2.useHappeningNowScrollSnapping = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 2]);