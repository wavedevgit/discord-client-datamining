// modules/custom_status/utils/isActivityTemporaryCustomStatus.tsx
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
    var3 = 'modules/custom_status/utils/isActivityTemporaryCustomStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: isActivityTemporaryCustomStatus, environment: var1
        _fun101562: for (var _fun101562_ip = 0;;) switch (_fun101562_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.type;
                var0 = _closure1_slot0;
                var0 = var0.CUSTOM_STATUS;
                var0 = var2 === var0;
                if (!var0) {
                    _fun101562_ip = 54;
                    continue _fun101562
                }
            case 28:
                var4 = var1.timestamps;
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun101562_ip = 50;
                    continue _fun101562
                }
            case 45:
                var2 = var4.end;
            case 50:
                var0 = var3 != var2;
            case 54:
                if (!var0) {
                    _fun101562_ip = 85;
                    continue _fun101562
                }
            case 57:
                var1 = var1.timestamps;
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if (var3) {
                    _fun101562_ip = 79;
                    continue _fun101562
                }
            case 74:
                var2 = var1.end;
            case 79:
                var1 = 0;
                var0 = var2 > var1;
            case 85:
                return var0;
        }
    };
    var2.isActivityTemporaryCustomStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);