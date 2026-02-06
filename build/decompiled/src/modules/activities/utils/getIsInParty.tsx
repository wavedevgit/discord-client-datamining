// modules/activities/utils/getIsInParty.tsx
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
    var1 = 'modules/activities/utils/getIsInParty.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0, arg1() {
        _fun92575: for (var _fun92575_ip = 0;;) switch (_fun92575_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = null;
                var1 = var4 == var2;
                var0 = undefined;
                if (var1) {
                    _fun92575_ip = 37;
                    continue _fun92575
                }
            case 17:
                var1 = var2.party;
                var5 = var4 == var1;
                var0 = undefined;
                if (var5) {
                    _fun92575_ip = 37;
                    continue _fun92575
                }
            case 32:
                var0 = var1.id;
            case 37:
                var0 = var4 != var0;
                if (!var0) {
                    _fun92575_ip = 109;
                    continue _fun92575
                }
            case 44:
                var5 = var4 == var3;
                var1 = undefined;
                if (var5) {
                    _fun92575_ip = 73;
                    continue _fun92575
                }
            case 53:
                var5 = var3.party;
                var6 = var4 == var5;
                var1 = undefined;
                if (var6) {
                    _fun92575_ip = 73;
                    continue _fun92575
                }
            case 68:
                var1 = var5.id;
            case 73:
                var1 = var4 != var1;
                if (!var1) {
                    _fun92575_ip = 106;
                    continue _fun92575
                }
            case 80:
                var3 = var3.party;
                var3 = var3.id;
                var2 = var2.party;
                var2 = var2.id;
                var1 = var3 === var2;
            case 106:
                var0 = var1;
            case 109:
                return var0;
        }
    };
    var2.getIsInParty = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);