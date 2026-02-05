// modules/activities/utils/getStreamURL.tsx
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
    var3 = var3.validStreamURL;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getStreamURL.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91760: for (var _fun91760_ip = 0;;) switch (_fun91760_ip) {
            case 0:
                var0 = arg0;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun91760_ip = 43;
                    continue _fun91760
                }
            case 9:
                var1 = var0.url;
                if (!(var2 != var1)) {
                    _fun91760_ip = 43;
                    continue _fun91760
                }
            case 18:
                var3 = _closure1_slot0;
                var2 = var3.test;
                var1 = var0.url;
                var1 = var2.bind(var3)(var1);
                if (var1) {
                    _fun91760_ip = 47;
                    continue _fun91760
                }
            case 43:
                var1 = undefined;
                return var1;
            case 47:
                var0 = var0.url;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3457, 2]);