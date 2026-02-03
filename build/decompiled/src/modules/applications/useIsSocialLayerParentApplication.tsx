// modules/applications/useIsSocialLayerParentApplication.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function arg0() {
        _fun47937: for (var _fun47937_ip = 0;;) switch (_fun47937_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var6 = undefined;
                var0 = undefined;
                if (var3) {
                    _fun47937_ip = 21;
                    continue _fun47937
                }
            case 16:
                var0 = var2.flags;
            case 21:
                var0 = var1 != var0;
                if (!var0) {
                    _fun47937_ip = 110;
                    continue _fun47937
                }
            case 28:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 1;
                var3 = var7[var1];
                var4 = var5.bind(var6)(var3);
                var3 = var4.has;
                var8 = var7[var1];
                var9 = var5.bind(var6)(var8);
                var8 = var9.deserialize;
                var2 = var2.flags;
                var2 = var8.bind(var9)(var2);
                var1 = var7[var1];
                var6 = var5.bind(var6)(var1);
                var5 = var6.getFlag;
                var1 = 33;
                var1 = var5.bind(var6)(var1);
                var0 = var3.bind(var4)(var2, var1);
            case 110:
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var5[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/useIsSocialLayerParentApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.getIsSocialLayerParentApplication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 484, 2]);