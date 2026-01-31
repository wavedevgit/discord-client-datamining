// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun34068: for (var _fun34068_ip = 0;;) switch (_fun34068_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var1 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var1;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var5);
            var0 = 0;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var1);
            var1 = var4.shouldBeUseWeb;
            var1 = var1.bind(var4)();
            if (var1) {
                _fun34068_ip = 97;
                continue _fun34068
            }
        case 77:
            var1 = function() { // Original name: createUpdateManager, environment: var3
                var0 = new Array(0);
                var _closure2_slot0 = var0;
                var0 = new Array(0);
                var _closure2_slot1 = var0;
                var0 = {};
                var2 = function(arg0, arg1) { // Original name: update, environment: var1
                    _fun34071: for (var _fun34071_ip = 0;;) switch (_fun34071_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = this;
                            var2 = arg1;
                            if (var2) {
                                _fun34071_ip = 31;
                                continue _fun34071
                            }
                        case 15:
                            var3 = _closure2_slot0;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
                            _fun34071_ip = 45;
                            continue _fun34071;
                        case 31:
                            var3 = _closure2_slot1;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
                        case 45:
                            var2 = _closure2_slot0;
                            var2 = var2.length;
                            var0 = _closure2_slot1;
                            var0 = var0.length;
                            var2 = var2 + var0;
                            var0 = 1;
                            if (!(var2 === var0)) {
                                _fun34071_ip = 142;
                                continue _fun34071
                            }
                        case 74:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 0;
                            var0 = var3[var0];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var0);
                            var0 = var2.isFabric;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun34071_ip = 132;
                                continue _fun34071
                            }
                        case 111:
                            var0 = global;
                            var2 = var0.setImmediate;
                            var0 = var1.flush;
                            var0 = var2.bind(var3)(var0);
                            _fun34071_ip = 142;
                            continue _fun34071;
                        case 132:
                            var0 = var1.flush;
                            var0 = var0.bind(var1)();
                        case 142:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.update = var2;
                var1 = function() { // Original name: flush, environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.configureLayoutAnimationBatch;
                    var3 = _closure2_slot0;
                    var1 = var3.concat;
                    var2 = _closure2_slot1;
                    var1 = var1.bind(var3)(var2);
                    var1 = var4.bind(var5)(var1);
                    var1 = 0;
                    var3.length = var1;
                    var2.length = var1;
                    return var0;
                };
                var0.flush = var1;
                return var0;
            };
            var1 = var1.bind(var0)();
            var _closure1_slot2 = var1;
            var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: updateLayoutAnimations, environment: var3
                _fun34073: for (var _fun34073_ip = 0;;) switch (_fun34073_ip) {
                    case 0:
                        var6 = arg2;
                        var3 = _closure1_slot2;
                        var2 = var3.update;
                        var1 = {};
                        var0 = arg0;
                        var1.viewTag = var0;
                        var0 = arg1;
                        var1.type = var0;
                        var7 = undefined;
                        var0 = undefined;
                        if (!var6) {
                            _fun34073_ip = 71;
                            continue _fun34073
                        }
                    case 40:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var4 = 1;
                        var4 = var8[var4];
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.makeShareableCloneRecursive;
                        var0 = var4.bind(var5)(var6);
                    case 71:
                        var1.config = var0;
                        var0 = arg3;
                        var1.sharedTransitionTag = var0;
                        var0 = arg4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            _fun34068_ip = 102;
            continue _fun34068;
        case 97:
            var1 = function() { // Original name: updateLayoutAnimations, environment: var3
                var0 = undefined;
                return var0;
            };
        case 102:
            var2.updateLayoutAnimations = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3683, 3724]);