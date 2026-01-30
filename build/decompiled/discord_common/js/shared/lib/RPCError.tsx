// ../discord_common/js/shared/lib/RPCError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun63051: for (var _fun63051_ip = 0;;) switch (_fun63051_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun63051_ip = 74;
                continue _fun63051;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot5 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var5);
    var0 = 0;
    var5 = var4[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var3 = var3.Error;
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0, arg1) { // Original name: RPCError, environment: var0
            _fun63055: for (var _fun63055_ip = 0;;) switch (_fun63055_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var5 = this;
                    var0 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var10 = new Array(1);
                    var10[0] = var1;
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun63055_ip = 76;
                        continue _fun63055
                    }
                case 63:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun63055_ip = 110;
                    continue _fun63055;
                case 76:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot3;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 110:
                    var0 = var3.bind(var4)(var5, var0);
                    var3 = 'closeCode';
                    var3 = var3 in var2;
                    if (var3) {
                        _fun63055_ip = 153;
                        continue _fun63055
                    }
                case 127:
                    var3 = var2.errorCode;
                    var0.code = var3;
                    var3 = var2.errorCode;
                    var0.errorCode = var3;
                    _fun63055_ip = 177;
                    continue _fun63055;
                case 153:
                    var3 = var2.closeCode;
                    var0.code = var3;
                    var2 = var2.closeCode;
                    var0.closeCode = var2;
                case 177:
                    var0.message = var1;
                    var1 = 'RPCError';
                    var0.name = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot0;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 6;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/shared/lib/RPCError.tsx';
    var3 = var4.bind(var5)(var3);
    var2.RPCError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 162, 2]);