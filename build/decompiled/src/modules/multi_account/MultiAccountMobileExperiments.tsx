// modules/multi_account/MultiAccountMobileExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var11 = true;
    var1.value = var11;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = 0;
    var3 = var6[var1];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2022-09_mobile_account_switcher',
        'label': 'Mobile Account Switcher'
    };
    var10 = false;
    var4 = {
        'isMultiAccountMobileEnabled': false,
        'clearCanUseMultiAccountMobile': false
    };
    var3.defaultConfig = var4;
    var12 = {
        'id': 1,
        'label': 'Enable Account Switcher on Mobile'
    };
    var4 = 1;
    var9 = {
        'isMultiAccountMobileEnabled': true,
        'clearCanUseMultiAccountMobile': false
    };
    var12.config = var9;
    var9 = new Array(2);
    var9[0] = var12;
    var12 = {
        'id': 2,
        'label': 'Unenroll Account Switcher on Mobile and Clear Local Flag'
    };
    var13 = {
        'isMultiAccountMobileEnabled': false,
        'clearCanUseMultiAccountMobile': true
    };
    var12.config = var13;
    var9[1] = var12;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2022-11_mobile_account_switcher_notifications',
        'label': 'Mobile Account Switcher: Notifications'
    };
    var9 = {};
    var9.isMultiAccountMobileNotificationsEnabled = var10;
    var1.defaultConfig = var9;
    var10 = {
        'id': 1,
        'label': 'Enable notifications for multiple accounts'
    };
    var9 = {};
    var9.isMultiAccountMobileNotificationsEnabled = var11;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var1.treatments = var9;
    var1 = var7.bind(var8)(var1);
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/MultiAccountMobileExperiments.tsx';
    var4 = var5.bind(var6)(var4);
    var2.MultiAccountMobileExperiment = var3;
    var2.MultiAccountMobileNotificationsExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3106, 2]);