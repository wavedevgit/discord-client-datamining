// modules/user/isStaffFromRawUser.tsx
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
    var3 = var3.UserFlags;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user/isStaffFromRawUser.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96739: for (var _fun96739_ip = 0;;) switch (_fun96739_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.flags;
                var2 = null;
                var1 = var2 != var0;
                var4 = 0;
                if (!var1) {
                    _fun96739_ip = 22;
                    continue _fun96739
                }
            case 19:
                var4 = var0;
            case 22:
                var0 = _closure1_slot0;
                var1 = var0.STAFF;
                var1 = var4 & var1;
                var0 = var0.STAFF;
                var0 = var1 === var0;
                if (var0) {
                    _fun96739_ip = 71;
                    continue _fun96739
                }
            case 52:
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun96739_ip = 67;
                    continue _fun96739
                }
            case 61:
                var1 = var3.personal_connection_id;
            case 67:
                var0 = var2 != var1;
            case 71:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);