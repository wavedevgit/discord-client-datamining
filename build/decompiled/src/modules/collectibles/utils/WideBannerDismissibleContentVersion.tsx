// modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectibleShopTab;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun96699: for (var _fun96699_ip = 0;;) switch (_fun96699_ip) {
            case 0:
                var0 = _closure1_slot3;
                var1 = var0.HOME;
                var6 = new Array(3);
                var6[0] = var1;
                var1 = var0.ORBS;
                var6[1] = var1;
                var0 = var0.CATALOG;
                var6[2] = var0;
                var0 = var6.length;
                var1 = 0;
                var0 = var1 < var0;
                var5 = null;
                var3 = 0;
                if (!var0) {
                    _fun96699_ip = 128;
                    continue _fun96699
                }
            case 61:
                var9 = var6[var3];
                var2 = _closure1_slot2;
                var0 = var2.getShopBlocks;
                var9 = var0.bind(var2)(var9);
                var2 = var9.find;
                var0 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ShopBlockType;
                    var0 = var0.WIDE_BANNER;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var9)(var0);
                var9 = var5 == var0;
                var2 = undefined;
                if (var9) {
                    _fun96699_ip = 112;
                    continue _fun96699
                }
            case 106:
                var2 = var0.dismissibleContentVersion;
            case 112:
                if (!(var5 == var2)) {
                    _fun96699_ip = 130;
                    continue _fun96699
                }
            case 116:
                var3 = var3 + 1;
                var2 = var6.length;
                if (var3 < var2) {
                    _fun96699_ip = 61;
                    continue _fun96699
                }
            case 128:
                return var1;
            case 130:
                var0 = var0.dismissibleContentVersion;
                return var0;
        }
    };
    var2.getWideBannerDismissibleContentVersion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4646, 3283, 3316, 2]);