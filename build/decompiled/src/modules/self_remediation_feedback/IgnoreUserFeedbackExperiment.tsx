// modules/self_remediation_feedback/IgnoreUserFeedbackExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
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
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2025-04_ignore_user_feedback',
        'label': 'Ignore User Feedback Experiment'
    };
    var4 = {
        'enabled': false,
        'shouldGetShorterIgnoreDuration': false
    };
    var3.defaultConfig = var4;
    var10 = {
        'id': 1,
        'label': 'Enable Ignore User Feedback Survey'
    };
    var4 = 1;
    var9 = {
        'enabled': true,
        'shouldGetShorterIgnoreDuration': false
    };
    var10.config = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': 'Enable Ignore User Feedback Survey w/ shorter duration for testing'
    };
    var11 = {
        'enabled': true,
        'shouldGetShorterIgnoreDuration': true
    };
    var10.config = var11;
    var9[1] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot0 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_remediation_feedback/IgnoreUserFeedbackExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.IgnoreUserFeedbackExperiment = var3;
    var3 = function arg0() {
        var3 = _closure1_slot0;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = arg0;
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.isEligibleForIgnoreUserFeedbackExperiment = var3;
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = arg0;
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsEligibleForIgnoreUserFeedbackExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3117, 2]);