// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = {};
    var3 = [0, 0, 1, 1];
    var2.linear = var3;
    var3 = [0.42, 0, 1, 1];
    var2.ease = var3;
    var3 = [0.11, 0, 0.5, 0];
    var2.quad = var3;
    var3 = [0.32, 0, 0.67, 0];
    var2.cubic = var3;
    var3 = [0.12, 0, 0.39, 0];
    var2.sin = var3;
    var3 = [0.55, 0, 1, 0.45];
    var2.circle = var3;
    var3 = [0.7, 0, 0.84, 0];
    var2.exp = var3;
    var _closure1_slot0 = var2;
    var1.WebEasings = var2;
    var2 = function arg0() {
        var1 = _closure1_slot0;
        var0 = arg0;
        var1 = var1[var0];
        var0 = var1.toString;
        var3 = var0.bind(var1)();
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'cubic-bezier(';
        var0 = ')';
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var1.getEasingByName = var2;
    var0 = function arg0() {
        _fun33840: for (var _fun33840_ip = 0;;) switch (_fun33840_ip) {
            case 0:
                var1 = arg0;
                var0 = 'factory';
                var2 = var0 in var1;
                var0 = null;
                if (var2) {
                    _fun33840_ip = 18;
                    continue _fun33840
                }
            case 16:
                return var0;
            case 18:
                var1 = var1.factory;
                var2 = '__closure';
                var2 = var2 in var1;
                if (var2) {
                    _fun33840_ip = 37;
                    continue _fun33840
                }
            case 35:
                return var0;
            case 37:
                var1 = var1.__closure;
                var2 = 'Bezier';
                var2 = var2 in var1;
                var0 = null;
                if (!var2) {
                    _fun33840_ip = 121;
                    continue _fun33840
                }
            case 55:
                var16 = var1.x1;
                var14 = var1.y1;
                var12 = var1.x2;
                var10 = var1.y2;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var17 = 'cubic-bezier(';
                var2 = ', ';
                var9 = ')';
                var15 = var2;
                var13 = var2;
                var11 = var2;
                var0 = var17[var4](var16, var15, var14, var13, var12, var11, var10, var9, var8);
            case 121:
                return var0;
        }
    };
    var1.maybeGetBezierEasing = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);