// modules/media_channel/useCanSetThumbnail.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_channel/useCanSetThumbnail.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun75725: for (var _fun75725_ip = 0;;) switch (_fun75725_ip) {
            case 0:
                var1 = arg1;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var4.bind(var5)(var3, var0);
                var3 = null;
                var4 = var3 == var5;
                var0 = undefined;
                if (var4) {
                    _fun75725_ip = 88;
                    continue _fun75725
                }
            case 78:
                var4 = var5.isMediaChannel;
                var0 = var4.bind(var5)();
            case 88:
                if (!var0) {
                    _fun75725_ip = 112;
                    continue _fun75725
                }
            case 91:
                var3 = var3 == var1;
                var2 = undefined;
                if (var3) {
                    _fun75725_ip = 106;
                    continue _fun75725
                }
            case 100:
                var2 = var1.isImage;
            case 106:
                var1 = true;
                var0 = var1 === var2;
            case 112:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 632, 2]);