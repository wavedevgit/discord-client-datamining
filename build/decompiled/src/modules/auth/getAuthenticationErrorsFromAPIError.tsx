// modules/auth/getAuthenticationErrorsFromAPIError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/getAuthenticationErrorsFromAPIError.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun60713: for (var _fun60713_ip = 0;;) switch (_fun60713_ip) {
            case 0:
                var4 = arg0;
                var0 = {};
                var1 = var4.code;
                var0.error_code = var1;
                var1 = var4.errors;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun60713_ip = 63;
                    continue _fun60713
                }
            case 28:
                var1 = var4.message;
                var0.message = var1;
                var1 = var4.retryAfter;
                if (!(var2 != var1)) {
                    _fun60713_ip = 61;
                    continue _fun60713
                }
            case 49:
                var1 = var4.retryAfter;
                var0.retry_after = var1;
            case 61:
                return var0;
            case 63:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = var4.errors;
                var3 = var2.bind(var3)(var1);
                var1 = var3.length;
                var2 = 0;
                var1 = var2 < var1;
                if (!var1) {
                    _fun60713_ip = 140;
                    continue _fun60713
                }
            case 101:
                var5 = var3[var2];
                var1 = var4.getFirstFieldErrorMessage;
                var6 = var1.bind(var4)(var5);
                var1 = new Array(1);
                var1[0] = var6;
                var0[var5] = var1;
                var2 = var2 + 1;
                var1 = var3.length;
                if (var2 < var1) {
                    _fun60713_ip = 101;
                    continue _fun60713
                }
            case 140:
                return var0;
        }
    };
    var2.getAuthenticationErrorsFromAPIError = var3;
    var1 = function arg0() {
        _fun60714: for (var _fun60714_ip = 0;;) switch (_fun60714_ip) {
            case 0:
                var0 = arg0;
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = var0.fields;
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun60714_ip = 75;
                    continue _fun60714
                }
            case 38:
                var1 = {};
                var2 = var0.message;
                var1.message = var2;
                var3 = var0.retryAfter;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun60714_ip = 73;
                    continue _fun60714
                }
            case 61:
                var2 = var0.retryAfter;
                var1.retry_after = var2;
            case 73:
                return var1;
            case 75:
                var0 = var0.fields;
                return var0;
        }
    };
    var2.getAuthenticationErrorsFromV6OrEarlierAPIError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);