// modules/user_profile/TieredTenureBadgeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.TENURE_BADGES;
    var _closure1_slot2 = var3;
    var3 = function arg0() {
        var1 = _closure1_slot2;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot3 = var3;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/TieredTenureBadgeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getTieredTenureBadgeData = var3;
    var3 = function(arg0) { // Environment: var1
        _fun59420: for (var _fun59420_ip = 0;;) switch (_fun59420_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot3;
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var0 = null;
                var2 = var0 == var2;
                if (var2) {
                    _fun59420_ip = 29;
                    continue _fun59420
                }
            case 26:
                var0 = var1;
            case 29:
                return var0;
        }
    };
    var2.getTieredTenureBadge = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun59421: for (var _fun59421_ip = 0;;) switch (_fun59421_ip) {
            case 0:
                var5 = arg1;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun59421_ip = 105;
                    continue _fun59421
                }
            case 9:
                var4 = _closure1_slot3;
                var3 = undefined;
                var1 = arg0;
                var1 = var4.bind(var3)(var1);
                if (!(var0 != var1)) {
                    _fun59421_ip = 103;
                    continue _fun59421
                }
            case 30:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 1;
                var2 = var2[var4];
                var2 = var6.bind(var3)(var2);
                var2 = var2.bind(var3)(var5);
                var5 = var2.add;
                var3 = var1.tenureReqNumMonths;
                var1 = 'months';
                var1 = var5.bind(var2)(var3, var1);
                var3 = var2.add;
                var1 = 'days';
                var1 = var3.bind(var2)(var4, var1);
                var1 = var2.toDate;
                var1 = var1.bind(var2)();
                return var1;
            case 103:
                return var0;
            case 105:
                return var0;
        }
    };
    var2.getEarnedOnDate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1615, 3004, 2]);