// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var4 = var3.useEffect;
    var _closure1_slot2 = var4;
    var3 = var3.useRef;
    var _closure1_slot3 = var3;
    var1 = function(arg0, arg1) { // Original name: useHandler, environment: var1
        _fun34686: for (var _fun34686_ip = 0;;) switch (_fun34686_ip) {
            case 0:
                var11 = arg0;
                var0 = _closure1_slot3;
                var4 = undefined;
                var5 = null;
                var0 = var0.bind(var4)(var5);
                var _closure2_slot0 = var0;
                var3 = var0.current;
                if (!(var5 === var3)) {
                    _fun34686_ip = 88;
                    continue _fun34686
                }
            case 34:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.makeShareable;
                var3 = {};
                var5 = var5.bind(var6)(var3);
                var3 = {};
                var3.context = var5;
                var5 = new Array(0);
                var3.savedDependencies = var5;
                var0.current = var3;
            case 88:
                var5 = _closure1_slot2;
                var3 = function() { // Environment: var1
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot0;
                        var0 = null;
                        var1.current = var0;
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var5.bind(var4)(var3, var1);
                var1 = var0.current;
                var6 = var1.context;
                var9 = var1.savedDependencies;
                var10 = var11;
                var3 = 2;
                for (var5 in var10)
                    case 137: {
                        case 146: var1 = var5;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var3];
                        var14 = var14.bind(var4)(var13);
                        var13 = var14.isWorkletFunction;
                        var1 = var11[var1];
                        var1 = var13.bind(var14)(var1);
                        if (var1) {
                            _fun34686_ip = 137;
                            continue _fun34686
                        }
                        case 184: var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 3;
                        var1 = var5[var1];
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.ReanimatedError;
                        var1 = var5.prototype;
                        var3 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var16 = 'Passed a function that is not a worklet. Please provide a worklet function.';
                        var17 = var3;
                        var1 = new var17[var5](var16, var15);
                        var1 = var1 instanceof Object ? var1 : var3;
                        throw var1;
                    }
            case 238:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 4;
                var7 = var1[var5];
                var10 = var3.bind(var4)(var7);
                var8 = var10.buildDependencies;
                var7 = arg1;
                var7 = var8.bind(var10)(var7, var11);
                var5 = var1[var5];
                var8 = var3.bind(var4)(var5);
                var5 = var8.areDependenciesEqual;
                var5 = var5.bind(var8)(var7, var9);
                var5 = !var5;
                var0 = var0.current;
                var0.savedDependencies = var7;
                var0 = {};
                var0.context = var6;
                var0.doDependenciesDiffer = var5;
                var5 = 5;
                var1 = var1[var5];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isWeb;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun34686_ip = 371;
                    continue _fun34686
                }
            case 344:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isJest;
                var1 = var2.bind(var3)();
            case 371:
                var0.useWeb = var1;
                return var0;
        }
    };
    var2.useHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3710, 3705, 3691, 3826, 3683]);