// errors/StripeError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function arg0, arg1, arg2() {
        _fun28992: for (var _fun28992_ip = 0;;) switch (_fun28992_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot4;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = _closure1_slot7;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun28992_ip = 51;
                    continue _fun28992
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun28992_ip = 92;
                continue _fun28992;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun28992_ip = 71;
                    continue _fun28992
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot4;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        _fun28993: for (var _fun28993_ip = 0;;) switch (_fun28993_ip) {
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
                _fun28993_ip = 74;
                continue _fun28993;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun28997: for (var _fun28997_ip = 0;;) switch (_fun28997_ip) {
                case 0:
                    var6 = this;
                    var0 = arg0;
                    var8 = var0.error;
                    var4 = _closure1_slot1;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var6, var1);
                    var4 = var8.param;
                    var1 = null;
                    if (!(var1 == var4)) {
                        _fun28997_ip = 75;
                        continue _fun28997
                    }
                case 45:
                    var5 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var7 = var8.message;
                    var1 = new Array(1);
                    var1[0] = var7;
                    var1 = var5.bind(var2)(var6, var4, var1);
                    _fun28997_ip = 130;
                    continue _fun28997;
                case 75:
                    var5 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var7 = {};
                    var3 = {};
                    var9 = var8.param;
                    var10 = var8.message;
                    var8 = new Array(1);
                    var8[0] = var10;
                    var3[var9] = var8;
                    var7.body = var3;
                    var3 = new Array(1);
                    var3[0] = var7;
                    var1 = var5.bind(var2)(var6, var4, var3);
                case 130:
                    var0 = _closure1_slot2;
                    var0 = var0.bind(var2)(var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot5;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot0;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'errors/StripeError.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 16, 15, 17, 18, 3355, 2]);