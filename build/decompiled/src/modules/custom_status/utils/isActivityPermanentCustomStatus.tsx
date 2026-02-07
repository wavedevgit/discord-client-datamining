// modules/custom_status/utils/isActivityPermanentCustomStatus.tsx
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
    var3 = var3.ActivityTypes;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/utils/isActivityPermanentCustomStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102085: for (var _fun102085_ip = 0;;) switch (_fun102085_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.type;
                var0 = _closure1_slot0;
                var0 = var0.CUSTOM_STATUS;
                var0 = var2 === var0;
                if (!var0) {
                    _fun102085_ip = 54;
                    continue _fun102085
                }
            case 28:
                var3 = var1.timestamps;
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun102085_ip = 50;
                    continue _fun102085
                }
            case 45:
                var1 = var3.end;
            case 50:
                var0 = var2 == var1;
            case 54:
                return var0;
        }
    };
    var2.isActivityPermanentCustomStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);