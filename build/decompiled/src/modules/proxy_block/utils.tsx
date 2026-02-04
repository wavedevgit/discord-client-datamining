// modules/proxy_block/utils.tsx
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
    var3 = var3.AbortCodes;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/proxy_block/utils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun112375: for (var _fun112375_ip = 0;;) switch (_fun112375_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.ok;
                var0 = !var0;
                if (!var0) {
                    _fun112375_ip = 53;
                    continue _fun112375
                }
            case 15:
                var1 = var1.body;
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if (var3) {
                    _fun112375_ip = 36;
                    continue _fun112375
                }
            case 31:
                var2 = var1.code;
            case 36:
                var1 = _closure1_slot0;
                var1 = var1.BLOCKED_BY_PROXY;
                var0 = var2 === var1;
            case 53:
                return var0;
        }
    };
    var2.isBlockedByProxyErrorCode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);