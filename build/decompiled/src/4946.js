// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var2 = {};
    var0 = "function pnpm_normalizeSnapPointTs1(snapPoint,containerHeight){let normalizedSnapPoint=snapPoint;if(typeof normalizedSnapPoint==='string'){normalizedSnapPoint=Number(normalizedSnapPoint.split('%')[0])*containerHeight/100;}return Math.max(0,containerHeight-normalizedSnapPoint);}";
    var2.code = var0;
    var0 = function arg0, arg1() {
        _fun44703: for (var _fun44703_ip = 0;;) switch (_fun44703_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                var3 = 'string';
                var2 = typeof var5;
                var0 = var5;
                if (!(var3 === var2)) {
                    _fun44703_ip = 66;
                    continue _fun44703
                }
            case 20:
                var2 = global;
                var4 = var2.Number;
                var3 = var5.split;
                var2 = '%';
                var3 = var3.bind(var5)(var2);
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2 * var1;
                var2 = 100;
                var0 = var3 / var2;
            case 66:
                var2 = global;
                var3 = var2.Math;
                var2 = var3.max;
                var1 = var1 - var0;
                var0 = 0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var3 = {};
    var0.__closure = var3;
    var3 = 14612470006791.0;
    var0.__workletHash = var3;
    var0.__initData = var2;
    var1.normalizeSnapPoint = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);