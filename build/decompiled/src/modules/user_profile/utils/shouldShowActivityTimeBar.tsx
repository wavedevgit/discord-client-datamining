// modules/user_profile/utils/shouldShowActivityTimeBar.tsx
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
    var3 = 'modules/user_profile/utils/shouldShowActivityTimeBar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62410: for (var _fun62410_ip = 0;;) switch (_fun62410_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.type;
                var0 = _closure1_slot0;
                var0 = var0.LISTENING;
                var0 = var3 === var0;
                if (var0) {
                    _fun62410_ip = 47;
                    continue _fun62410
                }
            case 28:
                var3 = var1.type;
                var2 = _closure1_slot0;
                var2 = var2.WATCHING;
                var0 = var3 === var2;
            case 47:
                if (!var0) {
                    _fun62410_ip = 76;
                    continue _fun62410
                }
            case 50:
                var4 = var1.timestamps;
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun62410_ip = 72;
                    continue _fun62410
                }
            case 67:
                var2 = var4.start;
            case 72:
                var0 = var3 != var2;
            case 76:
                if (!var0) {
                    _fun62410_ip = 96;
                    continue _fun62410
                }
            case 79:
                var1 = var1.timestamps;
                var2 = var1.end;
                var1 = null;
                var0 = var1 != var2;
            case 96:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);