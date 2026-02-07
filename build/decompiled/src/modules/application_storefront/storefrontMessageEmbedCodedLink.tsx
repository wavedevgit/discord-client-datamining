// modules/application_storefront/storefrontMessageEmbedCodedLink.tsx
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
    var3 = 'modules/application_storefront/storefrontMessageEmbedCodedLink.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = ':';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var2.makeStorefrontSKUCodedLink = var3;
    var1 = function arg0() {
        _fun28905: for (var _fun28905_ip = 0;;) switch (_fun28905_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.split;
                var0 = ':';
                var3 = var1.bind(var2)(var0);
                var0 = var3.length;
                var2 = 2;
                if (!(var2 === var0)) {
                    _fun28905_ip = 70;
                    continue _fun28905
                }
            case 29:
                var1 = _closure1_slot0;
                var0 = undefined;
                var2 = var1.bind(var0)(var3, var2);
                var0 = {};
                var1 = 0;
                var1 = var2[var1];
                var0.applicationId = var1;
                var1 = 1;
                var1 = var2[var1];
                var0.skuId = var1;
                return var0;
            case 70:
                var0 = null;
                return var0;
        }
    };
    var2.parseStorefrontSkuCodedLink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 2]);