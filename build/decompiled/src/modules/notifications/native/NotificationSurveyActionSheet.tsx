// modules/notifications/native/NotificationSurveyActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot4;
        var2 = var1.OPEN_POPOUT;
        var1 = {
            'type': 'Notification Feedback Sheet',
            'source': 'Notification End'
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NotificationUserFeedbackReasons;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/native/NotificationSurveyActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.notificationType;
        var _closure2_slot0 = var1;
        var1 = var0.location;
        var _closure2_slot1 = var1;
        var0 = var0.messageId;
        var _closure2_slot2 = var0;
        var0 = {};
        var1 = _closure1_slot3;
        var2 = var1.TOO_MANY;
        var0.value = var2;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var7 = 4;
        var2 = var11[var7];
        var3 = undefined;
        var2 = var10.bind(var3)(var2);
        var8 = var2.intl;
        var6 = var8.string;
        var2 = var11[var7];
        var2 = var10.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2.pLeQp0;
        var2 = var6.bind(var8)(var2);
        var0.label = var2;
        var6 = new Array(3);
        var6[0] = var0;
        var0 = {};
        var2 = var1.IRRELEVANT;
        var0.value = var2;
        var2 = var11[var7];
        var2 = var10.bind(var3)(var2);
        var9 = var2.intl;
        var8 = var9.string;
        var2 = var11[var7];
        var2 = var10.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2.tuwPcC;
        var2 = var8.bind(var9)(var2);
        var0.label = var2;
        var6[1] = var0;
        var0 = {};
        var1 = var1.DISLIKE_CONTENT;
        var0.value = var1;
        var1 = var11[var7];
        var1 = var10.bind(var3)(var1);
        var8 = var1.intl;
        var2 = var8.string;
        var1 = var11[var7];
        var1 = var10.bind(var3)(var1);
        var1 = var1.t;
        var1 = var1.glUMhg;
        var1 = var2.bind(var8)(var1);
        var0.label = var1;
        var6[2] = var0;
        var2 = _closure1_slot5;
        var1 = _closure1_slot1;
        var0 = 6;
        var0 = var11[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {
            'headerLabel': null,
            'showHeaderCloseButton': true,
            'hideDontShowAgainCheckbox': true
        };
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var12 = var8.intl;
        var9 = var12.string;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.wGioO1;
        var8 = var9.bind(var12)(var8);
        var0.headerLabel = var8;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var12 = var8.intl;
        var9 = var12.string;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.Yzl7Or;
        var8 = var9.bind(var12)(var8);
        var0.ratingsBodyLabel = var8;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.g1q5fr;
        var7 = var8.bind(var9)(var7);
        var0.reasonsHeaderLabel = var7;
        var0.reasons = var6;
        var5 = _closure1_slot6;
        var0.trackOpen = var5;
        var4 = function arg0() {
            _fun77036: for (var _fun77036_ip = 0;;) switch (_fun77036_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.rating;
                    var6 = var0.reason;
                    var5 = null;
                    if (!(var5 != var4)) {
                        _fun77036_ip = 122;
                        continue _fun77036
                    }
                case 21:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.track;
                    var0 = _closure1_slot4;
                    var1 = var0.NOTIFICATION_REPORT_SUBMITTED;
                    var0 = {};
                    var7 = var5 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun77036_ip = 77;
                        continue _fun77036
                    }
                case 72:
                    var5 = var6.value;
                case 77:
                    var0.reason = var5;
                    var0.rating = var4;
                    var5 = _closure2_slot0;
                    var0.notification_type = var5;
                    var5 = _closure2_slot1;
                    var0.location = var5;
                    var4 = _closure2_slot2;
                    var0.message_id = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 122:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 7;
                    var2 = var9[var0];
                    var0 = undefined;
                    var3 = var8.bind(var0)(var2);
                    var2 = var3.handleSurveyCleanup;
                    var2 = var2.bind(var3)();
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var1 = var9[var1];
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.openLazy;
                    var1 = 10;
                    var1 = var9[var1];
                    var3 = var8.bind(var0)(var1);
                    var1 = 9;
                    var2 = var9[var1];
                    var1 = var9.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var1 = 4;
                    var6 = var9[var1];
                    var6 = var8.bind(var0)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var1 = var9[var1];
                    var1 = var8.bind(var0)(var1);
                    var1 = var1.t;
                    var1 = var1.wGioO1;
                    var1 = var6.bind(var7)(var1);
                    var2.header = var1;
                    var1 = 'UserFeedbackSurvey';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
            }
        };
        var0.trackReport = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9796, 660, 33, 1234, 795, 9819, 9799, 3279, 9821, 1307, 2]);