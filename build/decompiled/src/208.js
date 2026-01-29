// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var1 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var1;
    var0 = function(arg0) { // Original name: convertHeadersMapToArray, environment: var3
        _fun2927: for (var _fun2927_ip = 0;;) switch (_fun2927_ip) {
            case 0:
                var6 = arg0;
                var0 = new Array(0);
                var4 = var6;
                for (var1 in var4)
                    case 18: {
                        case 27: var9 = var1;
                        var8 = var0.push;
                        var7 = new Array(2);
                        var7[0] = var9;
                        var9 = var6[var9];
                        var7[1] = var9;
                        var7 = var8.bind(var0)(var7);
                        _fun2927_ip = 18;
                        continue _fun2927;
                    }
            case 58:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var _closure1_slot2 = var0;
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var1);
    var1 = var5.prototype;
    var4 = Object.create(var1, {
        constructor: {
            value: var5
        }
    });
    var10 = null;
    var11 = var4;
    var1 = new var11[var5](var10, var9);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot3 = var1;
    var1 = {};
    var4 = function(arg0, arg1, arg2) { // Original name: addListener, environment: var3
        var4 = _closure1_slot3;
        var3 = var4.addListener;
        var2 = arg0;
        var1 = arg1;
        var0 = arg2;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var1.addListener = var4;
    var4 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) { // Original name: sendRequest, environment: var3
        _fun2929: for (var _fun2929_ip = 0;;) switch (_fun2929_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = arg4;
                var6 = var3.bind(var0)(var2);
                var2 = var6;
                if (!var2) {
                    _fun2929_ip = 45;
                    continue _fun2929
                }
            case 39:
                var2 = var6.formData;
            case 45:
                if (!var2) {
                    _fun2929_ip = 77;
                    continue _fun2929
                }
            case 48:
                var4 = var6.formData;
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    var4 = arg0;
                    var0 = global;
                    var3 = var0.Object;
                    var2 = var3.assign;
                    var1 = {};
                    var6 = _closure1_slot4;
                    var5 = var4.headers;
                    var0 = undefined;
                    var0 = var6.bind(var0)(var5);
                    var1.headers = var0;
                    var0 = {};
                    var0 = var2.bind(var3)(var0, var4, var1);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var6.formData = var2;
            case 77:
                var2 = _closure1_slot2;
                var2 = parseFloat(var2);
                var3 = var2 + 1;
                _closure1_slot2 = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var11 = var4.bind(var0)(var3);
                var10 = var11.sendRequest;
                var3 = _closure1_slot4;
                var1 = arg3;
                var17 = var3.bind(var0)(var1);
                var1 = global;
                var5 = var1.Object;
                var4 = var5.assign;
                var3 = {};
                var1 = arg1;
                var3.trackingName = var1;
                var1 = {};
                var16 = var4.bind(var5)(var1, var6, var3);
                var20 = arg0;
                var19 = arg2;
                var15 = arg5;
                var14 = arg6;
                var13 = arg7;
                var12 = arg9;
                var21 = var11;
                var18 = var2;
                var1 = var21[var10](var20, var19, var18, var17, var16, var15, var14, var13, var12, var11);
                var1 = arg8;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var1.sendRequest = var4;
    var4 = function(arg0) { // Original name: abortRequest, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.abortRequest;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.abortRequest = var4;
    var3 = function(arg0) { // Original name: clearCookies, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.clearCookies;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearCookies = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [209, 210, 213]);