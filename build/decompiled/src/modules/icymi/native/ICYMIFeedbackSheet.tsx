// modules/icymi/native/ICYMIFeedbackSheet.tsx
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
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/ICYMIFeedbackSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: ICYMIFeedbackSheet, environment: var1
        var3 = _closure1_slot3;
        var1 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 2;
        var0 = var6[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {
            'headerLabel': null,
            'showHeaderCloseButton': true,
            'hideDontShowAgainCheckbox': true
        };
        var5 = _closure1_slot0;
        var8 = 3;
        var4 = var6[var8];
        var4 = var5.bind(var2)(var4);
        var9 = var4.intl;
        var7 = var9.string;
        var4 = var6[var8];
        var4 = var5.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["ppfH9+"];
        var4 = var7.bind(var9)(var4);
        var0.headerLabel = var4;
        var4 = var6[var8];
        var4 = var5.bind(var2)(var4);
        var9 = var4.intl;
        var7 = var9.string;
        var4 = var6[var8];
        var4 = var5.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["ePk/Cf"];
        var4 = var7.bind(var9)(var4);
        var0.ratingsBodyLabel = var4;
        var4 = var6[var8];
        var4 = var5.bind(var2)(var4);
        var9 = var4.intl;
        var7 = var9.string;
        var4 = var6[var8];
        var4 = var5.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.sBOuOf;
        var4 = var7.bind(var9)(var4);
        var0.reasonsHeaderLabel = var4;
        var4 = {};
        var7 = var6[var8];
        var7 = var5.bind(var2)(var7);
        var10 = var7.intl;
        var9 = var10.string;
        var7 = var6[var8];
        var7 = var5.bind(var2)(var7);
        var7 = var7.t;
        var7 = var7.F6TmZA;
        var7 = var9.bind(var10)(var7);
        var4.label = var7;
        var7 = 'irrelevant_content';
        var4.value = var7;
        var7 = new Array(5);
        var7[0] = var4;
        var4 = {};
        var9 = var6[var8];
        var9 = var5.bind(var2)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var6[var8];
        var9 = var5.bind(var2)(var9);
        var9 = var9.t;
        var9 = var9.voWAzi;
        var9 = var10.bind(var11)(var9);
        var4.label = var9;
        var9 = 'not_enough_content';
        var4.value = var9;
        var7[1] = var4;
        var4 = {};
        var9 = var6[var8];
        var9 = var5.bind(var2)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var6[var8];
        var9 = var5.bind(var2)(var9);
        var9 = var9.t;
        var9 = var9.Ay8iwx;
        var9 = var10.bind(var11)(var9);
        var4.label = var9;
        var9 = 'too_much_content';
        var4.value = var9;
        var7[2] = var4;
        var4 = {};
        var9 = var6[var8];
        var9 = var5.bind(var2)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var6[var8];
        var8 = var5.bind(var2)(var8);
        var8 = var8.t;
        var8 = var8["Yu+52W"];
        var8 = var9.bind(var10)(var8);
        var4.label = var8;
        var8 = 'laggy';
        var4.value = var8;
        var7[3] = var4;
        var4 = 'other';
        var8 = {
            'label': 'Other',
            'value': 'other'
        };
        var7[4] = var8;
        var0.reasons = var7;
        var0.otherKey = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var2)(var4);
        var4 = var4.ICYMIAnalytics;
        var4 = var4.trackFeedFeedbackPromptViewed;
        var0.trackOpen = var4;
        var4 = ['other'];
        var0.feedbackReasons = var4;
        var4 = function(arg0) { // Original name: trackReport, environment: var4
            _fun104067: for (var _fun104067_ip = 0;;) switch (_fun104067_ip) {
                case 0:
                    var4 = arg0;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 5;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var2);
                    var2 = var5.giveFeedback;
                    var2 = var2.bind(var5)();
                    var2 = _closure1_slot0;
                    var1 = 4;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.ICYMIAnalytics;
                    var2 = var3.trackFeedFeedbackSubmitted;
                    var1 = {};
                    var6 = var4.reason;
                    var5 = null;
                    var7 = var5 != var6;
                    var6 = undefined;
                    if (!var7) {
                        _fun104067_ip = 107;
                        continue _fun104067
                    }
                case 85:
                    var7 = var4.reason;
                    var8 = var7.value;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var6 = var7;
                case 107:
                    var1.reason_descriptions = var6;
                    var6 = var4.rating;
                    var7 = var5 != var6;
                    var5 = undefined;
                    if (!var7) {
                        _fun104067_ip = 132;
                        continue _fun104067
                    }
                case 129:
                    var5 = var6;
                case 132:
                    var1.rating = var5;
                    var4 = var4.feedback;
                    var1.user_feedback = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.trackReport = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 9686, 1234, 8832, 8828, 2]);