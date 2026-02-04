// modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FeedbackType;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.reportId;
        var _closure2_slot0 = var1;
        var0 = var0.reportType;
        var _closure2_slot1 = var0;
        var1 = _closure1_slot1;
        var11 = _closure1_slot2;
        var2 = 4;
        var2 = var11[var2];
        var3 = undefined;
        var2 = var1.bind(var3)(var2);
        var6 = var2.bind(var3)();
        var10 = _closure1_slot0;
        var2 = 5;
        var2 = var11[var2];
        var7 = var10.bind(var3)(var2);
        var5 = var7.improperGetEnglishIntlMessageText;
        var2 = 'CALL_FEEDBACK_OPTION_OTHER';
        var5 = var5.bind(var7)(var2);
        var2 = _closure1_slot5;
        var0 = 6;
        var0 = var11[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {
            'headerLabel': null,
            'showHeaderCloseButton': true,
            'hideDontShowAgainCheckbox': true
        };
        var7 = 7;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var12 = var8.intl;
        var9 = var12.string;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.MP5lDj;
        var8 = var9.bind(var12)(var8);
        var0.headerLabel = var8;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var12 = var8.intl;
        var9 = var12.string;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["7Ct0Dj"];
        var8 = var9.bind(var12)(var8);
        var0.ratingsBodyLabel = var8;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.FJmoxF;
        var7 = var8.bind(var9)(var7);
        var0.reasonsHeaderLabel = var7;
        var0.reasons = var6;
        var6 = new Array(1);
        var6[0] = var5;
        var0.feedbackReasons = var6;
        var0.otherKey = var5;
        var5 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 8;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.track;
            var1 = _closure1_slot3;
            var2 = var1.IAR_FEEDBACK_MODAL_VIEWED;
            var1 = {};
            var6 = _closure2_slot0;
            var1.report_id = var6;
            var5 = _closure2_slot1;
            var1.report_type = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.trackOpen = var5;
        var4 = function arg0() {
            _fun113079: for (var _fun113079_ip = 0;;) switch (_fun113079_ip) {
                case 0:
                    var1 = arg0;
                    var3 = var1.rating;
                    var0 = var1.reason;
                    var8 = var1.feedback;
                    var4 = var1.dontShowAgain;
                    var2 = null;
                    var1 = var2 != var0;
                    var7 = null;
                    if (!var1) {
                        _fun113079_ip = 43;
                        continue _fun113079
                    }
                case 38:
                    var7 = var0.value;
                case 43:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 9;
                    var5 = var5[var0];
                    var0 = undefined;
                    var6 = var6.bind(var0)(var5);
                    var5 = {};
                    var5.rating = var3;
                    var5.problem = var7;
                    var9 = var2 != var8;
                    var7 = '';
                    if (!var9) {
                        _fun113079_ip = 94;
                        continue _fun113079
                    }
                case 91:
                    var7 = var8;
                case 94:
                    var5.feedback = var7;
                    var8 = _closure2_slot0;
                    var5.reportId = var8;
                    var7 = _closure2_slot1;
                    var5.reportType = var7;
                    var7 = var2 != var4;
                    if (!var7) {
                        _fun113079_ip = 130;
                        continue _fun113079
                    }
                case 127:
                    var7 = var4;
                case 130:
                    var5.dontShowAgain = var7;
                    var5 = var6.bind(var0)(var5);
                    if (!var4) {
                        _fun113079_ip = 201;
                        continue _fun113079
                    }
                case 143:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.processOptOut;
                    var4 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.IN_APP_REPORTS;
                    var4.feedbackType = var7;
                    var7 = 'InAppReportsFeedbackActionSheet';
                    var4.location = var7;
                    var4 = var5.bind(var6)(var4);
                case 201:
                    if (!(var2 != var3)) {
                        _fun113079_ip = 235;
                        continue _fun113079
                    }
                case 205:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentFeedbackSent;
                    var1 = var1.bind(var2)();
                case 235:
                    return var0;
            }
        };
        var0.trackReport = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 9728, 33, 14509, 14510, 9749, 1234, 795, 14511, 9731, 3147, 2]);