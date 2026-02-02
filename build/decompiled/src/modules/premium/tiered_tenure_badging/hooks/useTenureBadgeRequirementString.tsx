// modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var1 = var1.TieredTenureBadge;
    var _closure1_slot2 = var1;
    var1 = function arg0, arg1() {
        _fun59463: for (var _fun59463_ip = 0;;) switch (_fun59463_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var1 = _closure1_slot2;
                var1 = var1.PREMIUM_TENURE_1_MONTH;
                if (!(var1 !== var2)) {
                    _fun59463_ip = 210;
                    continue _fun59463
                }
            case 26:
                var1 = _closure1_slot2;
                var1 = var1.PREMIUM_TENURE_3_MONTH;
                if (!(var1 !== var2)) {
                    _fun59463_ip = 210;
                    continue _fun59463
                }
            case 43:
                var1 = _closure1_slot2;
                var1 = var1.PREMIUM_TENURE_6_MONTH;
                if (!(var1 !== var2)) {
                    _fun59463_ip = 210;
                    continue _fun59463
                }
            case 60:
                var1 = _closure1_slot2;
                var1 = var1.PREMIUM_TENURE_12_MONTH;
                if (!(var1 !== var2)) {
                    _fun59463_ip = 134;
                    continue _fun59463
                }
            case 74:
                var1 = _closure1_slot2;
                var1 = var1.PREMIUM_TENURE_24_MONTH;
                if (!(var1 !== var2)) {
                    _fun59463_ip = 134;
                    continue _fun59463
                }
            case 88:
                var1 = _closure1_slot2;
                var1 = var1.PREMIUM_TENURE_36_MONTH;
                if (!(var1 !== var2)) {
                    _fun59463_ip = 134;
                    continue _fun59463
                }
            case 102:
                var1 = _closure1_slot2;
                var1 = var1.PREMIUM_TENURE_60_MONTH;
                if (!(var1 !== var2)) {
                    _fun59463_ip = 134;
                    continue _fun59463
                }
            case 116:
                var1 = _closure1_slot2;
                var1 = var1.PREMIUM_TENURE_72_MONTH;
                if (!(var1 !== var2)) {
                    _fun59463_ip = 134;
                    continue _fun59463
                }
            case 130:
                var1 = null;
                return var1;
            case 134:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 3;
                var3 = var7[var1];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var5 = var3.intl;
                var3 = var5.formatToPlainString;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.qOdyDe;
                var1 = {};
                var6 = 12;
                var6 = var4 / var6;
                var1.years = var6;
                var1 = var3.bind(var5)(var2, var1);
                return var1;
            case 210:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 3;
                var2 = var6[var0];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var5.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.erUSmA;
                var0 = {};
                var0.months = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() { // Environment: var3
        _fun59464: for (var _fun59464_ip = 0;;) switch (_fun59464_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.useTieredTenureBadge;
                var5 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var5)) {
                    _fun59464_ip = 95;
                    continue _fun59464
                }
            case 41:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getTieredTenureBadgeData;
                var2 = var2.bind(var3)(var5);
                var3 = var2.id;
                var2 = var2.tenureReqNumMonths;
                var1 = _closure1_slot3;
                var1 = var1.bind(var4)(var3, var2);
                return var1;
            case 95:
                return var0;
        }
    };
    var2.useTenureBadgeRequirementString = var3;
    var2.getTenureBadgeRequirementString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1615, 7284, 7286, 1234, 2]);