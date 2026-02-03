// modules/growth/PasswordRecoveryExperiment.tsx
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
        'id': '2025-08_mobile_password_recovery',
        'label': 'Mobile Password Recovery Revamp'
    };
    var4 = {
        'showNudgeModal': false,
        'hasNewLandingPage': false,
        'hasNewErrorState': false
    };
    var3.defaultConfig = var4;
    var4 = {
        'id': 1,
        'label': 'Nudge Modal To Reset Password After 2 Attempts'
    };
    var9 = {
        'showNudgeModal': true,
        'hasNewLandingPage': false,
        'hasNewErrorState': false
    };
    var4.config = var9;
    var9 = new Array(5);
    var9[0] = var4;
    var10 = {
        'id': 2,
        'label': 'Redesigned Landing Page'
    };
    var4 = 2;
    var11 = {
        'showNudgeModal': false,
        'hasNewLandingPage': true,
        'hasNewErrorState': false
    };
    var10.config = var11;
    var9[1] = var10;
    var10 = {
        'id': 3,
        'label': 'Redesigned Error States'
    };
    var11 = {
        'showNudgeModal': false,
        'hasNewLandingPage': false,
        'hasNewErrorState': true
    };
    var10.config = var11;
    var9[2] = var10;
    var10 = {
        'id': 4,
        'label': 'Redesigned Landing Page + Error States'
    };
    var11 = {
        'showNudgeModal': false,
        'hasNewLandingPage': true,
        'hasNewErrorState': true
    };
    var10.config = var11;
    var9[3] = var10;
    var10 = {
        'id': 5,
        'label': 'Has Nudge Modal, Redesigned Landing, and New Error States - TESTING ONLY'
    };
    var11 = {
        'showNudgeModal': true,
        'hasNewLandingPage': true,
        'hasNewErrorState': true
    };
    var10.config = var11;
    var9[4] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot2 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/growth/PasswordRecoveryExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.MobilePasswordRecoveryExperiment = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useAccessExperiment;
        var1 = _closure1_slot2;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useMobilePasswordRecoveryExperiment = var3;
    var1 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getAccessExperiment;
        var1 = _closure1_slot2;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getMobilePasswordRecoveryExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3106, 7475, 2]);