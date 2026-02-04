// utils/native/AppInfoUtils.tsx
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
    var6 = var4.bind(var0)(var3);
    var3 = var6.getConstants;
    var3 = var3.bind(var6)();
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/AppInfoUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun112807: for (var _fun112807_ip = 0;;) switch (_fun112807_ip) {
            case 0:
                var1 = _closure1_slot0;
                var3 = undefined;
                if (!(var3 !== var1)) {
                    _fun112807_ip = 76;
                    continue _fun112807
                }
            case 13:
                var0 = _closure1_slot0;
                var2 = var0.Version;
                var1 = var2.split;
                var0 = '.';
                var4 = var1.bind(var2)(var0);
                var2 = var4.length;
                var0 = -1;
                var1 = 2;
                if (!(var1 === var2)) {
                    _fun112807_ip = 74;
                    continue _fun112807
                }
            case 55:
                var1 = global;
                var2 = var1.Number;
                var1 = 0;
                var1 = var4[var1];
                var0 = var2.bind(var3)(var1);
            case 74:
                return var0;
            case 76:
                var0 = -1;
                return var0;
        }
    };
    var2.getAppMajorVersion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1594, 2]);