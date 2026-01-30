// errors/V6OrEarlierAPIError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun28782: for (var _fun28782_ip = 0;;) switch (_fun28782_ip) {
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
                _fun28782_ip = 74;
                continue _fun28782;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Links;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.V6OrEarlierAPIError;
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0, arg1) { // Original name: APIErrorWithDefaultMessage, environment: var0
            _fun28786: for (var _fun28786_ip = 0;;) switch (_fun28786_ip) {
                case 0:
                    var12 = arg1;
                    var3 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var8 = new Array(3);
                    var0 = arg0;
                    var8[0] = var0;
                    var8[1] = var12;
                    var0 = null;
                    if (!(var0 == var12)) {
                        _fun28786_ip = 124;
                        continue _fun28786
                    }
                case 49:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var0 = 6;
                    var6 = var9[var0];
                    var6 = var5.bind(var2)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var0 = var9[var0];
                    var0 = var5.bind(var2)(var0);
                    var0 = var0.t;
                    var5 = var0.aTVNes;
                    var0 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.STATUS;
                    var0.statusPageURL = var9;
                    var0 = var6.bind(var7)(var5, var0);
                    _fun28786_ip = 224;
                    continue _fun28786;
                case 124:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var5 = 6;
                    var7 = var10[var5];
                    var7 = var6.bind(var2)(var7);
                    var9 = var7.intl;
                    var7 = var9.formatToPlainString;
                    var5 = var10[var5];
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.t;
                    var6 = var5.aKRa0Q;
                    var5 = {};
                    var10 = _closure1_slot7;
                    var10 = var10.STATUS;
                    var5.statusPageURL = var10;
                    var10 = global;
                    var10 = var10.HermesInternal;
                    var11 = var10.concat;
                    var10 = '';
                    var10 = var11.bind(var10)(var12);
                    var5.details = var10;
                    var0 = var7.bind(var9)(var6, var5);
                case 224:
                    var8[2] = var0;
                    var0 = _closure1_slot5;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun28786_ip = 265;
                        continue _fun28786
                    }
                case 252:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun28786_ip = 299;
                    continue _fun28786;
                case 265:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 299:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'errors/V6OrEarlierAPIError.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 660, 1234, 507, 2]);