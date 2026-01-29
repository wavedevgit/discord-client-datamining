// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function(arg0) { // Original name: stiffnessFromOrigamiValue, environment: var0
        var1 = arg0;
        var0 = 30;
        var1 = var1 - var0;
        var0 = 3.62;
        var1 = var0 * var1;
        var0 = 194;
        var0 = var1 + var0;
        return var0;
    };
    var _closure1_slot0 = var2;
    var2 = function(arg0) { // Original name: dampingFromOrigamiValue, environment: var0
        var1 = arg0;
        var0 = 8;
        var1 = var1 - var0;
        var0 = 3;
        var1 = var0 * var1;
        var0 = 25;
        var0 = var1 + var0;
        return var0;
    };
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function(arg0, arg1) { // Original name: fromOrigamiTensionAndFriction, environment: var0
        var0 = {};
        var4 = _closure1_slot0;
        var3 = undefined;
        var2 = arg0;
        var2 = var4.bind(var3)(var2);
        var0.stiffness = var2;
        var2 = _closure1_slot1;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var0.damping = var1;
        return var0;
    };
    var1.fromOrigamiTensionAndFriction = var2;
    var0 = function(arg0, arg1) { // Original name: fromBouncinessAndSpeed, environment: var0
        var7 = function(arg0, arg1, arg2) { // Original name: normalize, environment: var0
            var0 = arg0;
            var2 = 0;
            var1 = var0 - var2;
            var0 = 20;
            var0 = var0 - var2;
            var0 = var1 / var0;
            return var0;
        };
        var6 = function(arg0, arg1, arg2) { // Original name: projectNormal, environment: var0
            var1 = arg1;
            var0 = arg2;
            var2 = var0 - var1;
            var0 = arg0;
            var0 = var0 * var2;
            var0 = var1 + var0;
            return var0;
        };
        var1 = arg0;
        var8 = 1.7;
        var1 = var1 / var8;
        var3 = undefined;
        var5 = 0;
        var2 = 20;
        var4 = var7.bind(var3)(var1, var5, var2);
        var1 = 0.8;
        var4 = var6.bind(var3)(var4, var5, var1);
        var1 = arg1;
        var1 = var1 / var8;
        var5 = var7.bind(var3)(var1, var5, var2);
        var2 = 0.5;
        var1 = 200;
        var5 = var6.bind(var3)(var5, var2, var1);
        var1 = function(arg0) { // Original name: b3Nobounce, environment: var0
            _fun5515: for (var _fun5515_ip = 0;;) switch (_fun5515_ip) {
                case 0:
                    var4 = arg0;
                    var0 = 18;
                    if (!(!(var4 <= var0))) {
                        _fun5515_ip = 234;
                        continue _fun5515
                    }
                case 13:
                    if (!(var4 > var0)) {
                        _fun5515_ip = 24;
                        continue _fun5515
                    }
                case 17:
                    var0 = 44;
                    if (!(!(var4 <= var0))) {
                        _fun5515_ip = 134;
                        continue _fun5515
                    }
                case 24:
                    var0 = global;
                    var3 = var0.Math;
                    var2 = var3.pow;
                    var1 = 3;
                    var2 = var2.bind(var3)(var4, var1);
                    var1 = 4.5e-07;
                    var2 = var1 * var2;
                    var3 = var0.Math;
                    var1 = var3.pow;
                    var0 = 2;
                    var1 = var1.bind(var3)(var4, var0);
                    var0 = 0.000332;
                    var0 = var0 * var1;
                    var1 = 0.1078;
                    var1 = var1 * var4;
                    var0 = var2 - var0;
                    var1 = var0 + var1;
                    var0 = 5.84;
                    var0 = var1 + var0;
                    _fun5515_ip = 232;
                    continue _fun5515;
                case 134:
                    var1 = global;
                    var5 = var1.Math;
                    var3 = var5.pow;
                    var2 = 3;
                    var3 = var3.bind(var5)(var4, var2);
                    var2 = 4.4e-05;
                    var5 = var2 * var3;
                    var3 = var1.Math;
                    var1 = var3.pow;
                    var2 = 2;
                    var3 = var1.bind(var3)(var4, var2);
                    var1 = 0.006;
                    var1 = var1 * var3;
                    var3 = 0.36;
                    var3 = var3 * var4;
                    var1 = var5 - var1;
                    var1 = var1 + var3;
                    var0 = var1 + var2;
                case 232:
                    _fun5515_ip = 342;
                    continue _fun5515;
                case 234:
                    var1 = global;
                    var5 = var1.Math;
                    var3 = var5.pow;
                    var2 = 3;
                    var3 = var3.bind(var5)(var4, var2);
                    var2 = 0.0007;
                    var3 = var2 * var3;
                    var5 = var1.Math;
                    var2 = var5.pow;
                    var1 = 2;
                    var2 = var2.bind(var5)(var4, var1);
                    var1 = 0.031;
                    var1 = var1 * var2;
                    var2 = 0.64;
                    var2 = var2 * var4;
                    var1 = var3 - var1;
                    var2 = var1 + var2;
                    var1 = 1.28;
                    var0 = var2 + var1;
                case 342:
                    return var0;
            }
        };
        var2 = var1.bind(var3)(var5);
        var1 = function(arg0, arg1, arg2) { // Original name: quadraticOutInterpolation, environment: var0
            var0 = arg0;
            var1 = 2;
            var1 = var1 * var0;
            var0 = var0 * var0;
            var2 = var1 - var0;
            var0 = 1;
            var1 = var0 - var2;
            var0 = arg1;
            var1 = var1 * var0;
            var0 = 0.01;
            var0 = var2 * var0;
            var0 = var0 + var1;
            return var0;
        };
        var0 = 0.01;
        var2 = var1.bind(var3)(var4, var2, var0);
        var0 = {};
        var4 = _closure1_slot0;
        var4 = var4.bind(var3)(var5);
        var0.stiffness = var4;
        var1 = _closure1_slot1;
        var1 = var1.bind(var3)(var2);
        var0.damping = var1;
        return var0;
    };
    var1.fromBouncinessAndSpeed = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);