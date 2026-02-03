// modules/messages/native/getEmbeddedActivityKey.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/getEmbeddedActivityKey.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.location;
        var10 = var1.id;
        var8 = var0.applicationId;
        var6 = var0.launchId;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var11 = '';
        var0 = ':';
        var9 = var0;
        var7 = var0;
        var0 = var11[var2](var10, var9, var8, var7, var6, var5);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun77623: for (var _fun77623_ip = 0;;) switch (_fun77623_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.split;
                var0 = ':';
                var3 = var1.bind(var2)(var0);
                var1 = var3.length;
                var0 = 3;
                var1 = var1 < var0;
                var0 = null;
                if (var1) {
                    _fun77623_ip = 72;
                    continue _fun77623
                }
            case 34:
                var1 = {};
                var2 = 0;
                var2 = var3[var2];
                var1.channelId = var2;
                var2 = 1;
                var2 = var3[var2];
                var1.applicationId = var2;
                var2 = 2;
                var2 = var3[var2];
                var1.instanceId = var2;
                var0 = var1;
            case 72:
                return var0;
        }
    };
    var2.parseEmbeddedActivityKey = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);