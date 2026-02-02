// modules/app_dms/ActivityDMNoPushExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var3 = var1.CommonTriggerPoints;
    var1 = 1;
    var1 = var5[var1];
    var7 = var4.bind(var0)(var1);
    var6 = var7.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2025-03_app_dm_no_push',
        'label': 'Activity DM No Push'
    };
    var8 = {};
    var9 = false;
    var8.enabled = var9;
    var1.defaultConfig = var8;
    var3 = var3.CONNECTION_OPEN;
    var1.commonTriggerPoint = var3;
    var3 = {
        'id': 1,
        'label': 'Disables push notifications for activities, enables opt-in switch'
    };
    var8 = {
        'enabled': true,
        'defaultOnMobile': false
    };
    var3.config = var8;
    var8 = new Array(2);
    var8[0] = var3;
    var9 = {
        'id': 2,
        'label': 'Same as treatment 1, but defaults to on on mobile'
    };
    var3 = 2;
    var10 = {
        'enabled': true,
        'defaultOnMobile': true
    };
    var9.config = var10;
    var8[1] = var9;
    var1.treatments = var8;
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_dms/ActivityDMNoPushExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ActivityDMNoPushExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3076, 2]);