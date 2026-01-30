// modules/activities/native/ActivityFeedbackActionSheet.tsx
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
    var6 = var3.ActivityFeedbackReasons;
    var _closure1_slot3 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FeedbackType;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var7 = var6.OTHER;
    var3 = new Array(3);
    var3[0] = var7;
    var7 = var6.ADS;
    var3[1] = var7;
    var6 = var6.NOT_FUN;
    var3[2] = var6;
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/native/ActivityFeedbackActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ActivityFeedbackActionSheet, environment: var1
        _fun113688: for (var _fun113688_ip = 0;;) switch (_fun113688_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.activityApplication;
                var _closure2_slot0 = var15;
                var1 = var0.channel;
                var _closure2_slot1 = var1;
                var1 = var0.embeddedActivityLocation;
                var _closure2_slot2 = var1;
                var0 = var0.analyticsData;
                var _closure2_slot3 = var0;
                var1 = var15.embeddedActivityConfig;
                var0 = null;
                var2 = var0 == var1;
                var3 = undefined;
                var0 = undefined;
                if (var2) {
                    _fun113688_ip = 69;
                    continue _fun113688
                }
            case 63:
                var0 = var1.displays_advertisements;
            case 69:
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 6;
                var2 = var11[var2];
                var2 = var1.bind(var3)(var2);
                var8 = true;
                var0 = var8 === var0;
                var6 = var2.bind(var3)(var8, var0);
                var2 = _closure1_slot6;
                var0 = 7;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var10 = _closure1_slot0;
                var7 = 8;
                var9 = var11[var7];
                var9 = var10.bind(var3)(var9);
                var14 = var9.intl;
                var13 = var14.formatToPlainString;
                var9 = var11[var7];
                var9 = var10.bind(var3)(var9);
                var9 = var9.t;
                var12 = var9.QXYwoD;
                var9 = {};
                var15 = var15.name;
                var9.applicationName = var15;
                var9 = var13.bind(var14)(var12, var9);
                var0.headerLabel = var9;
                var0.showHeaderCloseButton = var8;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var12 = var8.intl;
                var9 = var12.string;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["9hk2KF"];
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
                var6 = _closure1_slot7;
                var0.feedbackReasons = var6;
                var5 = _closure1_slot3;
                var5 = var5.OTHER;
                var0.otherKey = var5;
                var5 = function() { // Original name: trackOpen, environment: var4
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.track;
                    var0 = _closure1_slot4;
                    var1 = var0.OPEN_POPOUT;
                    var0 = {};
                    var5 = 'Activity Feedback Sheet';
                    var0.type = var5;
                    var5 = var4.id;
                    var0.application_id = var5;
                    var5 = var4.name;
                    var0.application_name = var5;
                    var4 = var4.id;
                    var0.game_id = var4;
                    var4 = 'Activity End';
                    var0.source = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var0.trackOpen = var5;
                var4 = function(arg0) { // Original name: trackReport, environment: var4
                    _fun113690: for (var _fun113690_ip = 0;;) switch (_fun113690_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.rating;
                            var1 = var0.reason;
                            var6 = var0.feedback;
                            var0 = var0.dontShowAgain;
                            var5 = null;
                            var2 = var5 != var1;
                            var4 = null;
                            if (!var2) {
                                _fun113690_ip = 43;
                                continue _fun113690
                            }
                        case 38:
                            var4 = var1.value;
                        case 43:
                            if (!var0) {
                                _fun113690_ip = 173;
                                continue _fun113690
                            }
                        case 49:
                            var1 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 5;
                            var0 = var8[var0];
                            var2 = undefined;
                            var10 = var1.bind(var2)(var0);
                            var9 = var10.track;
                            var0 = _closure1_slot4;
                            var1 = var0.ACTIVITY_REPORT_DONT_SHOW;
                            var0 = {};
                            var11 = _closure2_slot0;
                            var11 = var11.id;
                            var0.application_id = var11;
                            var0.rating = var3;
                            var0 = var9.bind(var10)(var1, var0);
                            var1 = _closure1_slot0;
                            var0 = 9;
                            var0 = var8[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.processOptOut;
                            var0 = {};
                            var7 = _closure1_slot5;
                            var7 = var7.ACTIVITY;
                            var0.feedbackType = var7;
                            var7 = 'ActivityFeedbackActionSheet';
                            var0.location = var7;
                            var0 = var1.bind(var2)(var0);
                        case 173:
                            if (!(var5 != var3)) {
                                _fun113690_ip = 315;
                                continue _fun113690
                            }
                        case 180:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 10;
                            var1 = var7[var1];
                            var2 = undefined;
                            var8 = var8.bind(var2)(var1);
                            var1 = var8.presentFeedbackSent;
                            var1 = var1.bind(var8)();
                            var1 = _closure1_slot1;
                            var0 = 11;
                            var0 = var7[var0];
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0.problem = var4;
                            var7 = _closure2_slot1;
                            var0.channel = var7;
                            var7 = _closure2_slot2;
                            var0.embeddedActivityLocation = var7;
                            var7 = var5 != var6;
                            var5 = '';
                            if (!var7) {
                                _fun113690_ip = 272;
                                continue _fun113690
                            }
                        case 269:
                            var5 = var6;
                        case 272:
                            var0.feedback = var5;
                            var5 = _closure2_slot0;
                            var0.activityApplication = var5;
                            var4 = _closure2_slot3;
                            var0.analyticsData = var4;
                            var4 = 'Activity End';
                            var0.location = var4;
                            var0.rating = var3;
                            var0 = var1.bind(var2)(var0);
                        case 315:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.trackReport = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3416, 660, 9670, 33, 795, 14530, 9691, 1234, 9673, 3106, 14531, 2]);