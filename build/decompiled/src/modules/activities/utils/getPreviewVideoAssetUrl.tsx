// modules/activities/utils/getPreviewVideoAssetUrl.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getPreviewVideoAssetUrl.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: getPreviewVideoAssetUrl, environment: var1
        _fun107966: for (var _fun107966_ip = 0;;) switch (_fun107966_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var1 = global;
                var0 = var1.window;
                var0 = var0.GLOBAL_ENV;
                var6 = var0.CDN_HOST;
                var0 = var1.window;
                var0 = var0.GLOBAL_ENV;
                var5 = var0.API_ENDPOINT;
                var0 = null;
                if (!(var0 == var6)) {
                    _fun107966_ip = 112;
                    continue _fun107966
                }
            case 50:
                var0 = var1.location;
                var4 = var0.protocol;
                var3 = _closure1_slot0;
                var2 = var3.STORE_ASSET;
                var0 = 'mp4';
                var3 = var2.bind(var3)(var8, var7, var0);
                var0 = var1.HermesInternal;
                var2 = var0.concat;
                var0 = '';
                var0 = var2.bind(var0)(var4, var5, var3);
                _fun107966_ip = 160;
                continue _fun107966;
            case 112:
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var15 = 'https://';
                var13 = '/app-assets/';
                var11 = '/store/';
                var9 = '.mp4';
                var14 = var6;
                var12 = var8;
                var10 = var7;
                var0 = var15[var5](var14, var13, var12, var11, var10, var9, var8);
            case 160:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);