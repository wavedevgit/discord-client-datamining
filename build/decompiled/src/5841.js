// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = dependencyMap;
    var14 = 0;
    var3 = var0[var14];
    var1 = require;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var13 = var1.Easing;
    var7 = {};
    var8 = 'timing';
    var7.animation = var8;
    var1 = {};
    var3 = 350;
    var1.duration = var3;
    var4 = var13.out;
    var5 = var13.poly;
    var3 = 5;
    var3 = var5.bind(var13)(var3);
    var3 = var4.bind(var13)(var3);
    var1.easing = var3;
    var7.config = var1;
    var6 = {};
    var6.animation = var8;
    var1 = {};
    var3 = 150;
    var1.duration = var3;
    var4 = var13.in;
    var3 = var13.linear;
    var3 = var4.bind(var13)(var3);
    var1.easing = var3;
    var6.config = var1;
    var5 = {};
    var5.animation = var8;
    var1 = {};
    var3 = 425;
    var1.duration = var3;
    var3 = var13.bezier;
    var12 = 0.35;
    var11 = 0.45;
    var10 = 1;
    var19 = var13;
    var18 = var12;
    var17 = var11;
    var16 = 0;
    var15 = var10;
    var3 = var19[var3](var18, var17, var16, var15, var14);
    var1.easing = var3;
    var5.config = var1;
    var4 = {};
    var4.animation = var8;
    var1 = {};
    var3 = 400;
    var1.duration = var3;
    var3 = var13.bezier;
    var19 = var13;
    var3 = var19[var3](var18, var17, var16, var15, var14);
    var1.easing = var3;
    var4.config = var1;
    var3 = {};
    var3.animation = var8;
    var1 = {};
    var10 = 250;
    var1.duration = var10;
    var10 = function arg0() {
        var0 = global;
        var2 = var0.Math;
        var1 = var2.cos;
        var4 = arg0;
        var3 = 1;
        var3 = var4 + var3;
        var0 = var0.Math;
        var0 = var0.PI;
        var0 = var3 * var0;
        var1 = var1.bind(var2)(var0);
        var0 = 2;
        var1 = var1 / var0;
        var0 = 0.5;
        var0 = var1 + var0;
        return var0;
    };
    var1.easing = var10;
    var3.config = var1;
    var1 = {};
    var1.animation = var8;
    var8 = {};
    var10 = 200;
    var8.duration = var10;
    var9 = function arg0() {
        _fun51514: for (var _fun51514_ip = 0;;) switch (_fun51514_ip) {
            case 0:
                var4 = arg0;
                var0 = 1;
                if (!(var0 !== var4)) {
                    _fun51514_ip = 33;
                    continue _fun51514
                }
            case 10:
                var1 = global;
                var3 = var1.Math;
                var2 = var3.pow;
                var1 = 2;
                var0 = var2.bind(var3)(var4, var1);
            case 33:
                return var0;
        }
    };
    var8.easing = var9;
    var1.config = var8;
    var8 = {};
    var9 = 'spring';
    var8.animation = var9;
    var9 = {
        'stiffness': 1000,
        'damping': 500,
        'mass': 3,
        'overshootClamping': true,
        'restDisplacementThreshold': 10,
        'restSpeedThreshold': 10
    };
    var8.config = var9;
    var2.TransitionIOSSpec = var8;
    var2.FadeInFromBottomAndroidSpec = var7;
    var2.FadeOutToBottomAndroidSpec = var6;
    var2.RevealFromBottomAndroidSpec = var5;
    var2.ScaleFromCenterAndroidSpec = var4;
    var2.BottomSheetSlideInSpec = var3;
    var2.BottomSheetSlideOutSpec = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);