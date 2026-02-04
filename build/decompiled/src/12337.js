// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun94196: for (var _fun94196_ip = 0;;) switch (_fun94196_ip) {
            case 0:
                var0 = arg2;
                var2 = arg0;
                var4 = arg1;
                var3 = var0;
                var _closure2_slot0 = var0;
                var0 = null;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var0;
                var _closure2_slot3 = var0;
            case 32: // try_start_0
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 0;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var9 = var4;
                var8 = var3;
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var4;
                var3 = new var10[var6](var9, var8, var7);
                var3 = var3 instanceof Object ? var3 : var4;
                _closure2_slot3 = var3;
            case 86: // try_end0
                var4 = var2;
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var1
                    _fun94197: for (var _fun94197_ip = 0;;) switch (_fun94197_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure2_slot3;
                            var2 = var3.test;
                            var2 = var2.bind(var3)(var0);
                            if (!var2) {
                                _fun94197_ip = 119;
                                continue _fun94197
                            }
                        case 23:
                            var2 = _closure2_slot1;
                            if (!var2) {
                                _fun94197_ip = 55;
                                continue _fun94197
                            }
                        case 30:
                            var4 = _closure2_slot2;
                            var3 = var4.compare;
                            var4 = var3.bind(var4)(var0);
                            var3 = -1;
                            var2 = var3 !== var4;
                        case 55:
                            if (var2) {
                                _fun94197_ip = 119;
                                continue _fun94197
                            }
                        case 58:
                            _closure2_slot1 = var0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 1;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var6 = _closure2_slot1;
                            var5 = _closure2_slot0;
                            var2 = var4.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var7 = var2;
                            var0 = new var7[var4](var6, var5, var4);
                            var0 = var0 instanceof Object ? var0 : var2;
                            _closure2_slot2 = var0;
                        case 119:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1 = _closure2_slot1;
                return var1;
            case 112: // catch_target0
                CatchBlockStart(arg_register = 1);
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12333, 12304]);