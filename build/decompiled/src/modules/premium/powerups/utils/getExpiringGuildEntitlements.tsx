// modules/premium/powerups/utils/getExpiringGuildEntitlements.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/premium/powerups/utils/getExpiringGuildEntitlements.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        var3 = arg0;
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.ends_at;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.sort;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun102280: for (var _fun102280_ip = 0;;) switch (_fun102280_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.ends_at;
                    var0 = arg1;
                    var0 = var0.ends_at;
                    var1 = var1 < var0;
                    var0 = 1;
                    if (!var1) {
                        _fun102280_ip = 34;
                        continue _fun102280
                    }
                case 28:
                    var0 = -1;
                case 34:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getExpiringGuildEntitlements = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);