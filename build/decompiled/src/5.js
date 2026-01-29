// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: asyncGeneratorStep, environment: var1
        _fun133: for (var _fun133_ip = 0;;) switch (_fun133_ip) {
            case 0:
                var9 = arg0;
                var3 = arg1;
                var0 = arg2;
                var5 = arg3;
                var4 = arg4;
                var8 = arg5;
                var7 = arg6;
                var2 = undefined;
                var6 = undefined;
                var1 = undefined;
            case 27: // try_start_0
                var8 = var9[var8];
                var7 = var8.bind(var9)(var7);
                var6 = var7;
                var1 = var7.value;
            case 44: // try_end0
                var6 = var6.done;
                if (var6) {
                    _fun133_ip = 87;
                    continue _fun133
                }
            case 52:
                var6 = global;
                var8 = var6.Promise;
                var7 = var8.resolve;
                var6 = var1;
                var7 = var7.bind(var8)(var6);
                var6 = var7.then;
                var4 = var6.bind(var7)(var5, var4);
                _fun133_ip = 92;
                continue _fun133;
            case 87:
                var1 = var3.bind(var2)(var1);
            case 92:
                return var2;
            case 94: // catch_target0
                CatchBlockStart(arg_register = 1);
                var0 = var0.bind(var2)(var1);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot0 = var2;
    var1 = function(arg0) { // Original name: _asyncToGenerator, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var1 = undefined;
            var2 = this;
            var _closure3_slot0 = var2;
            var1 = arguments;
            var _closure3_slot1 = var1;
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0, arg1) { // Environment: var0
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = arg1;
                var _closure4_slot1 = var0;
                var1 = function(arg0) { // Original name: _next, environment: var2
                    var8 = _closure1_slot0;
                    var15 = _closure4_slot2;
                    var14 = _closure4_slot0;
                    var13 = _closure4_slot1;
                    var12 = _closure4_slot3;
                    var11 = _closure4_slot4;
                    var0 = undefined;
                    var10 = 'next';
                    var9 = arg0;
                    var16 = undefined;
                    var1 = var16[var8](var15, var14, var13, var12, var11, var10, var9, var8);
                    return var0;
                };
                var _closure4_slot3 = var1;
                var0 = function(arg0) { // Original name: _throw, environment: var2
                    var8 = _closure1_slot0;
                    var15 = _closure4_slot2;
                    var14 = _closure4_slot0;
                    var13 = _closure4_slot1;
                    var12 = _closure4_slot3;
                    var11 = _closure4_slot4;
                    var0 = undefined;
                    var10 = 'throw';
                    var9 = arg0;
                    var16 = undefined;
                    var1 = var16[var8](var15, var14, var13, var12, var11, var10, var9, var8);
                    return var0;
                };
                var _closure4_slot4 = var0;
                var5 = _closure2_slot0;
                var4 = var5.apply;
                var3 = _closure3_slot0;
                var0 = _closure3_slot1;
                var0 = var4.bind(var5)(var3, var0);
                var _closure4_slot2 = var0;
                var0 = undefined;
                var1 = var1.bind(var0)(var0);
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        return var0;
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);