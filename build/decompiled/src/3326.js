// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var2 = var5[var0];
    var0 = undefined;
    var2 = var4.bind(var0)(var2);
    var2 = var2.bind(var0)();
    var3 = 1;
    var2 = var5[var3];
    var7 = var4.bind(var0)(var2);
    var2 = 2;
    var6 = var5[var2];
    var8 = var4.bind(var0)(var6);
    var6 = '%Promise.all%';
    var6 = var8.bind(var0)(var6);
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var2 = var5[var2];
    var4 = var4.bind(var0)(var2);
    var2 = '%Promise.reject%';
    var2 = var4.bind(var0)(var2);
    var2 = var3.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = function arg0() {
        _fun28871: for (var _fun28871_ip = 0;;) switch (_fun28871_ip) {
            case 0:
                var3 = this;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var5 = var4.bind(var2)(var3);
                var4 = 'Object';
                if (!(var4 === var5)) {
                    _fun28871_ip = 110;
                    continue _fun28871
                }
            case 47:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 4;
                var4 = var7[var4];
                var5 = var6.bind(var2)(var4);
                var4 = arg0;
                var5 = var5.bind(var2)(var4);
                var1 = _closure1_slot2;
                var4 = 5;
                var4 = var7[var4];
                var4 = var6.bind(var2)(var4);
                var0 = function(arg0) { // Environment: var0
                    _fun28872: for (var _fun28872_ip = 0;;) switch (_fun28872_ip) {
                        case 0:
                            var3 = undefined;
                            var4 = undefined;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var0 = 6;
                            var0 = var6[var0];
                            var7 = var5.bind(var3)(var0);
                            var6 = _closure2_slot0;
                            var5 = arg0;
                            var4 = var7.bind(var3)(var6, var5);
                        case 45: // try_start_0
                            var6 = var4;
                            var5 = var6.then;
                            var4 = function arg0() {
                                var0 = {};
                                var1 = 'fulfilled';
                                var0.status = var1;
                                var1 = arg0;
                                var0.value = var1;
                                return var0;
                            };
                            var2 = function arg0() {
                                var0 = {};
                                var1 = 'rejected';
                                var0.status = var1;
                                var1 = arg0;
                                var0.reason = var1;
                                return var0;
                            };
                            var2 = var5.bind(var6)(var4, var2);
                        case 69: // try_end0
                            return var2;
                        case 71: // catch_target0
                            CatchBlockStart(arg_register = 2);
                            var1 = _closure1_slot3;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var3)(var0, var2);
                            return var0;
                    }
                };
                var0 = var4.bind(var2)(var5, var0);
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            case 110:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = '`this` value must be an object';
                var10 = var1;
                var0 = new var10[var2](var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3324, 1403, 517, 3327, 3330, 3333, 3400]);