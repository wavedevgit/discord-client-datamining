// modules/safe_area/useStableSafeAreaInsets.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function() {
        _fun64852: for (var _fun64852_ip = 0;;) switch (_fun64852_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun64852_ip = 70;
                    continue _fun64852
                }
            case 38:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getSafeAreaInsets;
                var0 = var0.bind(var2)();
                _fun64852_ip = 100;
                continue _fun64852;
            case 70:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getStableSafeAreaInsets;
                var0 = var1.bind(var2)();
            case 100:
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/useStableSafeAreaInsets.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var2 = _closure1_slot5;
        var5 = undefined;
        var2 = var2.bind(var5)();
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot3;
        var0 = 2;
        var3 = var2.bind(var5)(var3, var0);
        var0 = 0;
        var0 = var3[var0];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot0 = var2;
        var3 = var4.useEffect;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 5;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = function() { // Environment: var0
                var2 = _closure2_slot0;
                var1 = _closure1_slot5;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.default = var3;
    var2.getStableSafeAreaInsets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 478, 1580, 1568, 1584, 2]);