// modules/self_remediation_feedback/native/BlockUserFeedbackActionSheet.tsx
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
    var6 = var4.bind(var0)(var3);
    var3 = var6.BlockUserFeedbackReasons;
    var _closure1_slot4 = var3;
    var6 = var6.getBlockUserFeedbackOptions;
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.SOMETHING_ELSE;
    var3 = new Array(1);
    var3[0] = var6;
    var _closure1_slot8 = var3;
    var3 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot6;
        var2 = var1.OPEN_POPOUT;
        var1 = {};
        var5 = 'Block User Feedback';
        var1.type = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_remediation_feedback/native/BlockUserFeedbackActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 5;
        var0 = var7[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var0 = _closure1_slot5;
        var6 = var2.bind(var3)(var0);
        var8 = _closure1_slot3;
        var4 = var8.useCallback;
        var2 = function(arg0) { // Environment: var0
            _fun113076: for (var _fun113076_ip = 0;;) switch (_fun113076_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.rating;
                    var1 = null;
                    var0 = var1 != var2;
                    if (!var0) {
                        _fun113076_ip = 22;
                        continue _fun113076
                    }
                case 18:
                    var0 = var1 != var2;
                case 22:
                    if (!var0) {
                        _fun113076_ip = 60;
                        continue _fun113076
                    }
                case 25:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.presentFeedbackSent;
                    var0 = var0.bind(var1)();
                case 60:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = new Array(0);
        var4 = var4.bind(var8)(var2, var0);
        var2 = _closure1_slot7;
        var0 = 7;
        var0 = var7[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {
            'headerLabel': 'header goes here',
            'showHeaderCloseButton': true,
            'hideDontShowAgainCheckbox': true,
            'ratingsBodyLabel': 'body goes here',
            'reasonsHeaderLabel': 'section header goes here'
        };
        var0.reasons = var6;
        var6 = _closure1_slot8;
        var0.feedbackReasons = var6;
        var6 = _closure1_slot4;
        var6 = var6.SOMETHING_ELSE;
        var0.otherKey = var6;
        var5 = _closure1_slot9;
        var0.trackOpen = var5;
        var0.trackReport = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5953, 660, 33, 795, 4928, 3147, 9746, 2]);