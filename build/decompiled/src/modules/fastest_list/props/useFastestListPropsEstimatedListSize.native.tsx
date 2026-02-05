// modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx
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
    var3 = var3.Dimensions;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.estimatedListSize;
        var _closure2_slot0 = var2;
        var0 = var0.horizontal;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot1;
        var2 = var3.useState;
        var1 = function() { // Environment: var1
            _fun61178: for (var _fun61178_ip = 0;;) switch (_fun61178_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = 'windowSize';
                    if (!(var0 !== var2)) {
                        _fun61178_ip = 21;
                        continue _fun61178
                    }
                case 15:
                    var0 = _closure2_slot0;
                    _fun61178_ip = 64;
                    continue _fun61178;
                case 21:
                    var1 = _closure2_slot1;
                    var4 = _closure1_slot2;
                    var3 = var4.get;
                    var2 = 'window';
                    var2 = var3.bind(var4)(var2);
                    if (var1) {
                        _fun61178_ip = 56;
                        continue _fun61178
                    }
                case 49:
                    var1 = var2.height;
                    _fun61178_ip = 61;
                    continue _fun61178;
                case 56:
                    var1 = var2.width;
                case 61:
                    var0 = var1;
                case 64:
                    return var0;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = _closure1_slot0;
        var1 = undefined;
        var0 = 2;
        var2 = var2.bind(var1)(var3, var0);
        var0 = 0;
        var0 = var2[var0];
        var1 = 1;
        var1 = var2[var1];
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 2]);