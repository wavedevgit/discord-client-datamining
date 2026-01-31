// modules/payments/shared/premium/UserOfferUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/payments/shared/premium/UserOfferUtils.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun55286: for (var _fun55286_ip = 0;;) switch (_fun55286_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var0 = var3 != var1;
                if (!var0) {
                    _fun55286_ip = 22;
                    continue _fun55286
                }
            case 12:
                var2 = var1.expires_at;
                var0 = var3 != var2;
            case 22:
                if (!var0) {
                    _fun55286_ip = 69;
                    continue _fun55286
                }
            case 25:
                var3 = global;
                var4 = var3.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var4 = var3.Date;
                var3 = var4.parse;
                var1 = var1.expires_at;
                var1 = var3.bind(var4)(var1);
                var0 = var2 > var1;
            case 69:
                return var0;
        }
    };
    var2.hasUserDiscountExpired = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);