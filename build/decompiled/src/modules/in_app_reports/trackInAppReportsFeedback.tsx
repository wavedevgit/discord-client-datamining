// modules/in_app_reports/trackInAppReportsFeedback.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/trackInAppReportsFeedback.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun113072: for (var _fun113072_ip = 0;;) switch (_fun113072_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.problem;
                var6 = var1.feedback;
                var9 = var1.reportType;
                var8 = var1.reportId;
                var0 = undefined;
                if (!(var8 === var0)) {
                    _fun113072_ip = 35;
                    continue _fun113072
                }
            case 33:
                var8 = null;
            case 35:
                var7 = var1.rating;
                if (!(var7 === var0)) {
                    _fun113072_ip = 47;
                    continue _fun113072
                }
            case 45:
                var7 = null;
            case 47:
                var5 = var1.dontShowAgain;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot2;
                var2 = var1.IAR_FEEDBACK_SUBMITTED;
                var1 = {};
                var1.reason = var10;
                var1.report_type = var9;
                var1.report_id = var8;
                var1.rating = var7;
                var1.feedback = var6;
                var1.dont_show_again = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 2]);