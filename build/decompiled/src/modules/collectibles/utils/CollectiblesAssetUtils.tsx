// modules/collectibles/utils/CollectiblesAssetUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = {};
    var0 = 'animated';
    var3.ANIMATED = var0;
    var0 = 'static';
    var3.STATIC = var0;
    var0 = 'video';
    var3.VIDEO = var0;
    var0 = 2;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/utils/CollectiblesAssetUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.CollectiblesItemAssetFormat = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun57591: for (var _fun57591_ip = 0;;) switch (_fun57591_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var2.bind(var3)(var0);
                var2 = var4.getIsCollectiblesNewAssetUrlEnabled;
                var0 = 'getCollectiblesItemAssetUrl';
                var2 = var2.bind(var4)(var0);
                var4 = null;
                var0 = null;
                if (!var2) {
                    _fun57591_ip = 179;
                    continue _fun57591
                }
            case 55:
                var2 = var4 != var7;
                var0 = null;
                if (!var2) {
                    _fun57591_ip = 179;
                    continue _fun57591
                }
            case 64:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isDiscordBackendDevelopment;
                var1 = var1.bind(var2)();
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                if (var1) {
                    _fun57591_ip = 144;
                    continue _fun57591
                }
            case 110:
                var13 = 'https://cdn.discordapp.com/';
                var12 = 'media/v1/collectibles-shop';
                var1 = '/';
                var11 = var1;
                var10 = var7;
                var9 = var1;
                var8 = var6;
                var1 = var13[var5](var12, var11, var10, var9, var8, var7);
                _fun57591_ip = 176;
                continue _fun57591;
            case 144:
                var13 = 'http://localhost:3000/_storage/';
                var12 = 'media/v1/collectibles-shop';
                var2 = '/';
                var11 = var2;
                var10 = var7;
                var9 = var2;
                var8 = var6;
                var1 = var13[var5](var12, var11, var10, var9, var8, var7);
            case 176:
                var0 = var1;
            case 179:
                return var0;
        }
    };
    var2.getCollectiblesItemAssetUrl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7002, 1304, 2]);