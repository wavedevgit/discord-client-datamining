// modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot2 = var6;
    var3 = var3.window;
    var3 = var3.GLOBAL_ENV;
    var6 = var3.API_ENDPOINT;
    var _closure1_slot3 = var6;
    var3 = var3.CDN_HOST;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107805: for (var _fun107805_ip = 0;;) switch (_fun107805_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.itemId;
                var10 = var0.hash;
                var7 = var0.containerWidth;
                var4 = undefined;
                if (!(var7 === var4)) {
                    _fun107805_ip = 32;
                    continue _fun107805
                }
            case 26:
                var7 = 1024;
            case 32:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var6 = var3.bind(var4)(var1);
                var1 = var6.getBestMediaProxySize;
                var0 = var5[var0];
                var8 = var3.bind(var4)(var0);
                var0 = var8.getDevicePixelRatio;
                var0 = var0.bind(var8)();
                var0 = var7 * var0;
                var1 = var1.bind(var6)(var0);
                var0 = var1.toString;
                var6 = var0.bind(var1)();
                var1 = global;
                var7 = var1.URLSearchParams;
                var0 = {};
                var0.size = var6;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var21 = var6;
                var20 = var0;
                var0 = new var21[var7](var20, var19);
                var6 = var0 instanceof Object ? var0 : var6;
                var0 = var6.toString;
                var9 = var0.bind(var6)();
                var0 = 2;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.SUPPORTS_WEBP;
                var8 = 'png';
                if (!var0) {
                    _fun107805_ip = 175;
                    continue _fun107805
                }
            case 169:
                var8 = 'webp';
            case 175:
                var3 = _closure1_slot4;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun107805_ip = 252;
                    continue _fun107805
                }
            case 185:
                var0 = var1.location;
                var7 = var0.protocol;
                var6 = _closure1_slot3;
                var3 = _closure1_slot2;
                var0 = var3.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE;
                var18 = var0.bind(var3)(var11, var10, var8);
                var0 = var1.HermesInternal;
                var4 = var0.concat;
                var21 = '';
                var17 = '?';
                var20 = var7;
                var19 = var6;
                var16 = var9;
                var0 = var21[var4](var20, var19, var18, var17, var16, var15);
                _fun107805_ip = 307;
                continue _fun107805;
            case 252:
                var20 = _closure1_slot4;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var21 = 'https://';
                var19 = '/app-assets/application-directory/collection-items/';
                var17 = '/';
                var15 = '.';
                var13 = '?';
                var18 = var11;
                var16 = var10;
                var14 = var8;
                var12 = var9;
                var0 = var21[var6](var20, var19, var18, var17, var16, var15, var14, var13, var12, var11);
            case 307:
                return var0;
        }
    };
    var2.getCollectionItemAssetUrl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1443, 1417, 2]);