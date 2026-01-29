// modules/messages/native/renderer/EmbedUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.Image;
    var _closure1_slot0 = var4;
    var7 = var3.Object;
    var4 = var7.freeze;
    var9 = var3.Set;
    var3 = var9.prototype;
    var8 = Object.create(var3, {
        constructor: {
            value: var9
        }
    });
    var12 = ['YouTube', 'TikTok'];
    var13 = var8;
    var3 = new var13[var9](var12, var11);
    var3 = var3 instanceof Object ? var3 : var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot1 = var3;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/EmbedUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Original name: getAssetUriForEmbed, environment: var1
        var2 = _closure1_slot0;
        var1 = var2.resolveAssetSource;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = var0.uri;
        return var0;
    };
    var2.getAssetUriForEmbed = var4;
    var2.SUPPORTED_VIDEO_PARTNERS = var3;
    var1 = function(arg0) { // Original name: shouldPlayVideoInline, environment: var1
        _fun55146: for (var _fun55146_ip = 0;;) switch (_fun55146_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot1;
                var1 = var2.has;
                var0 = null;
                var4 = var0 != var3;
                var0 = '';
                if (!var4) {
                    _fun55146_ip = 31;
                    continue _fun55146
                }
            case 28:
                var0 = var3;
            case 31:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.shouldPlayVideoInline = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 2]);