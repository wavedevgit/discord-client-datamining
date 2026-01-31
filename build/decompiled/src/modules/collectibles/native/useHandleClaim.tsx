// modules/collectibles/native/useHandleClaim.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/useHandleClaim.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var6 = var0.product;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 2;
        var0 = var4[var0];
        var7 = undefined;
        var4 = var3.bind(var7)(var0);
        var3 = var4.useEnableMobileVariants;
        var0 = 'useHandleClaim';
        var5 = var3.bind(var4)(var0);
        var _closure2_slot1 = var5;
        var0 = {};
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = _closure1_slot3;
        var1 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun87404: for (var _fun87404_ip = 0;;) switch (_fun87404_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87404_ip = 336;
                            continue _fun87404
                        }
                    case 10: // try_start_0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var4 = 3;
                        var1 = var1[var4];
                        var8 = undefined;
                        var3 = var2.bind(var8)(var1);
                        var2 = var3.claimPremiumCollectiblesProduct;
                        var1 = _closure2_slot0;
                        var1 = var1.skuId;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 63);
                    case 61:
                        return var1;
                    case 63:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun87404_ip = 223;
                            continue _fun87404
                        }
                    case 72:
                        var7 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var3 = 4;
                        var3 = var2[var3];
                        var9 = var7.bind(var8)(var3);
                        var3 = var9.hideActionSheet;
                        var3 = var3.bind(var9)();
                        var3 = 5;
                        var3 = var2[var3];
                        var9 = var7.bind(var8)(var3);
                        var7 = var9.open;
                        var3 = {};
                        var10 = _closure2_slot0;
                        var3.product = var10;
                        var10 = true;
                        var3.useCategoryImage = var10;
                        var3 = var7.bind(var9)(var3);
                        var3 = _closure1_slot0;
                        var2 = var2[var4];
                        var4 = var3.bind(var8)(var2);
                        var3 = var4.fetchCollectiblesPurchases;
                        var2 = {};
                        var5 = _closure2_slot1;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 6;
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var6 = var6.ShopVariantsReturnStyle;
                        if (var5) {
                            _fun87404_ip = 205;
                            continue _fun87404
                        }
                    case 197:
                        var5 = var6.INDIVIDUAL_PRODUCTS;
                        _fun87404_ip = 211;
                        continue _fun87404;
                    case 205:
                        var5 = var6.VARIANTS_GROUP;
                    case 211:
                        var2.variantsReturnStyle = var5;
                        var2 = var3.bind(var4)(var2);
                    case 221: // try_end0
                        _fun87404_ip = 331;
                        continue _fun87404;
                    case 223:
                        return var1;
                    case 226: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var2 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 7;
                        var1 = var9[var1];
                        var8 = undefined;
                        var3 = var2.bind(var8)(var1);
                        var2 = var3.open;
                        var1 = {};
                        var5 = 'collectible shop claim error';
                        var1.key = var5;
                        var7 = _closure1_slot0;
                        var4 = 8;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.t;
                        var4 = var4.CKsXk3;
                        var4 = var5.bind(var6)(var4);
                        var1.content = var4;
                        var1 = var2.bind(var3)(var1);
                    case 331:
                        var1 = undefined;
                        return var1;
                    case 336:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var2.bind(var7)(var1);
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var0.handleClaim = var1;
        return var0;
    };
    var2.useHandleClaim = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 5691, 4561, 3237, 9488, 4613, 3107, 1234, 2]);