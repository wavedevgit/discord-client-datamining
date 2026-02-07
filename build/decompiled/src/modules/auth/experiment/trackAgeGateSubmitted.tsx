// modules/auth/experiment/trackAgeGateSubmitted.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var3 = var3.AnalyticEvents;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/experiment/trackAgeGateSubmitted.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun100882: for (var _fun100882_ip = 0;;) switch (_fun100882_ip) {
            case 0:
                var6 = arg0;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 1;
                var2 = var9[var7];
                var0 = undefined;
                var4 = var8.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot2;
                var2 = var1.AGE_GATE_SUBMITTED;
                var1 = {};
                var5 = 2;
                var5 = var9[var5];
                var5 = var8.bind(var0)(var5);
                var9 = var5.bind(var0)();
                var8 = var9.diff;
                var5 = 'years';
                var8 = var8.bind(var9)(var6, var5);
                var5 = 18;
                var8 = var8 < var5;
                var5 = null;
                if (!var8) {
                    _fun100882_ip = 105;
                    continue _fun100882
                }
            case 89:
                var9 = var6.format;
                var8 = 'YYYY-MM-DD';
                var5 = var9.bind(var6)(var8);
            case 105:
                var1.dob = var5;
                var5 = var6.date;
                var5 = var5.bind(var6)();
                var1.dob_day = var5;
                var5 = var6.month;
                var5 = var5.bind(var6)();
                var5 = var5 + var7;
                var1.dob_month = var5;
                var5 = var6.year;
                var5 = var5.bind(var6)();
                var1.dob_year = var5;
                var5 = {};
                var6 = arg1;
                var5.section = var6;
                var1.source = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 3047, 2]);