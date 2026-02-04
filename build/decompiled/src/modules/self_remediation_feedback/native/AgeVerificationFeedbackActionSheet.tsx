// modules/self_remediation_feedback/native/AgeVerificationFeedbackActionSheet.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AgeVerificationFeedbackReasons;
    var _closure1_slot4 = var6;
    var3 = var3.getAgeVerificationFeedbackOptions;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_remediation_feedback/native/AgeVerificationFeedbackActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.dismissibleContent;
        var _closure2_slot0 = var0;
        var12 = _closure1_slot0;
        var14 = _closure1_slot2;
        var1 = 4;
        var1 = var14[var1];
        var3 = undefined;
        var5 = var12.bind(var3)(var1);
        var2 = var5.useSelectedDismissibleContent;
        var1 = new Array(1);
        var1[0] = var0;
        var1 = var2.bind(var5)(var1);
        var13 = _closure1_slot1;
        var1 = 5;
        var1 = var14[var1];
        var2 = var13.bind(var3)(var1);
        var1 = _closure1_slot5;
        var1 = var1.bind(var3)(var0);
        var9 = var2.bind(var3)(var1);
        var _closure2_slot1 = var9;
        var5 = _closure1_slot3;
        var6 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var9;
        var1 = function() { // Environment: var4
            var2 = _closure2_slot1;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.value;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var6.bind(var5)(var1, var2);
        var6 = var5.useCallback;
        var2 = function() { // Environment: var4
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 6;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.track;
            var1 = _closure1_slot6;
            var2 = var1.OPEN_MODAL;
            var1 = {};
            var5 = 'Age Verification User Feedback';
            var1.type = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var1 = new Array(0);
        var6 = var6.bind(var5)(var2, var1);
        var2 = var5.useCallback;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function(arg0) { // Environment: var4
            _fun113081: for (var _fun113081_ip = 0;;) switch (_fun113081_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.rating;
                    var9 = var0.feedback;
                    var10 = var0.reason;
                    var8 = null;
                    var2 = var8 == var3;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var7 = var6[var4];
                    var0 = undefined;
                    var12 = var5.bind(var0)(var7);
                    var11 = var12.getAgeVerificationSurveyEntrypoint;
                    var7 = _closure2_slot0;
                    var7 = var11.bind(var12)(var7);
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.trackAgeVerificationFeedback;
                    var11 = var8 != var3;
                    var4 = null;
                    if (!var11) {
                        _fun113081_ip = 97;
                        continue _fun113081
                    }
                case 94:
                    var4 = var3;
                case 97:
                    var11 = var8 != var9;
                    var3 = null;
                    if (!var11) {
                        _fun113081_ip = 109;
                        continue _fun113081
                    }
                case 106:
                    var3 = var9;
                case 109:
                    var11 = var8 == var10;
                    var9 = undefined;
                    if (var11) {
                        _fun113081_ip = 123;
                        continue _fun113081
                    }
                case 118:
                    var9 = var10.value;
                case 123:
                    var10 = var8 != var9;
                    var8 = null;
                    if (!var10) {
                        _fun113081_ip = 135;
                        continue _fun113081
                    }
                case 132:
                    var8 = var9;
                case 135:
                    var18 = var6;
                    var17 = var4;
                    var16 = var3;
                    var15 = var8;
                    var14 = var2;
                    var13 = var7;
                    var3 = var18[var5](var17, var16, var15, var14, var13, var12);
                    if (var2) {
                        _fun113081_ip = 190;
                        continue _fun113081
                    }
                case 160:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentFeedbackSent;
                    var1 = var1.bind(var2)();
                case 190:
                    return var0;
            }
        };
        var5 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot7;
        var0 = 9;
        var0 = var14[var0];
        var1 = var13.bind(var3)(var0);
        var0 = {
            'headerLabel': null,
            'showHeaderCloseButton': true,
            'hideDontShowAgainCheckbox': true
        };
        var11 = 10;
        var10 = var14[var11];
        var10 = var12.bind(var3)(var10);
        var17 = var10.intl;
        var16 = var17.string;
        var10 = 11;
        var15 = var14[var10];
        var15 = var13.bind(var3)(var15);
        var15 = var15.RqoA4v;
        var15 = var16.bind(var17)(var15);
        var0.headerLabel = var15;
        var15 = var14[var11];
        var15 = var12.bind(var3)(var15);
        var17 = var15.intl;
        var16 = var17.string;
        var15 = var14[var10];
        var15 = var13.bind(var3)(var15);
        var15 = var15.RPb8Zk;
        var15 = var16.bind(var17)(var15);
        var0.ratingsBodyLabel = var15;
        var11 = var14[var11];
        var11 = var12.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.KZw6kn;
        var10 = var11.bind(var12)(var10);
        var0.reasonsHeaderLabel = var10;
        var0.reasons = var9;
        var0.feedbackReasons = var8;
        var7 = _closure1_slot4;
        var7 = var7.SOMETHING_ELSE;
        var0.otherKey = var7;
        var0.trackOpen = var6;
        var0.trackReport = var5;
        var4 = function arg0() {
            _fun113082: for (var _fun113082_ip = 0;;) switch (_fun113082_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    var2 = var0 == var1;
                    if (var2) {
                        _fun113082_ip = 164;
                        continue _fun113082
                    }
                case 15:
                    var3 = var1.value;
                    var1 = _closure1_slot4;
                    var1 = var1.SOMETHING_ELSE;
                    if (!(var3 !== var1)) {
                        _fun113082_ip = 100;
                        continue _fun113082
                    }
                case 37:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 10;
                    var1 = var7[var1];
                    var6 = undefined;
                    var1 = var3.bind(var6)(var1);
                    var4 = var1.intl;
                    var3 = var4.string;
                    var5 = _closure1_slot1;
                    var1 = 11;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.zApKaR;
                    var1 = var3.bind(var4)(var1);
                    _fun113082_ip = 161;
                    continue _fun113082;
                case 100:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 10;
                    var3 = var7[var3];
                    var6 = undefined;
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var5 = _closure1_slot1;
                    var2 = 11;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.Q5cQ46;
                    var1 = var3.bind(var4)(var2);
                case 161:
                    var0 = var1;
                case 164:
                    return var0;
            }
        };
        var0.getFreeformDescription = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5953, 660, 33, 5957, 4928, 795, 14511, 3147, 9749, 1234, 2212, 2]);