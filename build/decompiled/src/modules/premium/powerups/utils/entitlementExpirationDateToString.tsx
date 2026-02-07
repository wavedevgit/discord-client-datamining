// modules/premium/powerups/utils/entitlementExpirationDateToString.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/utils/entitlementExpirationDateToString.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = global;
        var2 = var0.Date;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var5 = arg0;
        var6 = var1;
        var0 = new var6[var2](var5, var4);
        var3 = var0 instanceof Object ? var0 : var1;
        var2 = var3.toLocaleDateString;
        var0 = _closure1_slot0;
        var1 = var0.locale;
        var0 = {
            'month': '2-digit',
            'day': '2-digit'
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1687, 2]);