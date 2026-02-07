// modules/activities/utils/hasFlag.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.ActivityFlags;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/hasFlag.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun51070: for (var _fun51070_ip = 0;;) switch (_fun51070_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = _closure1_slot2;
                var0 = var0.INSTANCE;
                var0 = var5 !== var0;
                if (!var0) {
                    _fun51070_ip = 101;
                    continue _fun51070
                }
            case 26:
                var2 = null;
                var1 = var2 != var6;
                if (!var1) {
                    _fun51070_ip = 44;
                    continue _fun51070
                }
            case 35:
                var4 = var6.flags;
                var1 = var2 != var4;
            case 44:
                if (!var1) {
                    _fun51070_ip = 98;
                    continue _fun51070
                }
            case 47:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var3 = var4.hasFlag;
                var6 = var6.flags;
                var7 = var2 != var6;
                var2 = 0;
                if (!var7) {
                    _fun51070_ip = 92;
                    continue _fun51070
                }
            case 89:
                var2 = var6;
            case 92:
                var1 = var3.bind(var4)(var2, var5);
            case 98:
                var0 = var1;
            case 101:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1384, 2]);