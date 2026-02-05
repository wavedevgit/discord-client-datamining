// ../discord_common/js/shared/utils/MathUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = {};
    var3 = 'function roundIfClose_MathUtilsTsx1(num,precision){const decimalPart=num-Math.floor(num);if(decimalPart>=1-precision){return Math.ceil(num);}if(decimalPart<=precision){return Math.floor(num);}return num;}';
    var1.code = var3;
    var _closure1_slot0 = var1;
    var1 = function() { // Environment: var0
        var0 = function arg0, arg1() {
            _fun62267: for (var _fun62267_ip = 0;;) switch (_fun62267_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var1 = global;
                    var2 = var1.Math;
                    var0 = var2.floor;
                    var0 = var0.bind(var2)(var3);
                    var2 = var3 - var0;
                    var0 = 1;
                    var0 = var0 - var4;
                    if (!(!(var2 >= var0))) {
                        _fun62267_ip = 66;
                        continue _fun62267
                    }
                case 40:
                    var0 = var3;
                    if (!(var2 <= var4)) {
                        _fun62267_ip = 64;
                        continue _fun62267
                    }
                case 47:
                    var4 = var1.Math;
                    var2 = var4.floor;
                    var0 = var2.bind(var4)(var3);
                case 64:
                    _fun62267_ip = 83;
                    continue _fun62267;
                case 66:
                    var2 = var1.Math;
                    var1 = var2.ceil;
                    var0 = var1.bind(var2)(var3);
                case 83:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 15933993422996.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot0;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var4 = arg6;
    var3 = 0;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/shared/utils/MathUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.roundIfClose = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);