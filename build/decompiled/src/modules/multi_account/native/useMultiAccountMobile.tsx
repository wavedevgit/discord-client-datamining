// modules/multi_account/native/useMultiAccountMobile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportAll;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/multi_account/native/useMultiAccountMobile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useMultiAccountMobile, environment: var1
        _fun80245: for (var _fun80245_ip = 0;;) switch (_fun80245_ip) {
            case 0:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var0 = var2[var0];
                var3 = undefined;
                var7 = var5.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getCanUseMultiAccountMobile;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var6.bind(var7)(var4, var0);
                var4 = 2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var8 = var2.MultiAccountMobileExperiment;
                var7 = var8.useExperiment;
                var5 = {};
                var2 = '9fc8b9_1';
                var5.location = var2;
                var2 = {};
                var6 = false;
                var2.autoTrackExposure = var6;
                var2 = var7.bind(var8)(var5, var2);
                var5 = var2.isMultiAccountMobileEnabled;
                var2 = var2.clearCanUseMultiAccountMobile;
                if (var0) {
                    _fun80245_ip = 161;
                    continue _fun80245
                }
            case 123:
                if (!var5) {
                    _fun80245_ip = 161;
                    continue _fun80245
                }
            case 126:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 3;
                var5 = var8[var5];
                var8 = var7.bind(var3)(var5);
                var7 = var8.multiAccountMobileExperimentUpdate;
                var5 = true;
                var5 = var7.bind(var8)(var5);
                _fun80245_ip = 195;
                continue _fun80245;
            case 161:
                if (!var2) {
                    _fun80245_ip = 195;
                    continue _fun80245
                }
            case 164:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.multiAccountMobileExperimentUpdate;
                var2 = var2.bind(var5)(var6);
            case 195:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var3 = var1.MultiAccountMobileExperiment;
                var2 = var3.trackExposure;
                var1 = {};
                var4 = '9fc8b9_2';
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.useMultiAccountMobile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [10179, 566, 10182, 10183, 2]);