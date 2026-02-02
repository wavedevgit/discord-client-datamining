// modules/webauthn/experiments/PasskeyUpsellOnLoginP2Experiment.tsx
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
    var6 = var4.bind(var0)(var1);
    var3 = var6.createExperiment;
    var1 = {
        'id': '2024-07_passkey_upsell_on_login_p2',
        'label': 'Passkey Upsell on Login Phase 2',
        'kind': 'user'
    };
    var9 = 1;
    var7 = var5[var9];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PasskeyUpsellOnLoginExperimentState;
    var7 = var7.None;
    var1.defaultConfig = var7;
    var8 = {
        'id': 0,
        'label': 'Control'
    };
    var7 = var5[var9];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PasskeyUpsellOnLoginExperimentState;
    var7 = var7.Control;
    var8.config = var7;
    var7 = new Array(2);
    var7[0] = var8;
    var8 = {
        'id': 1,
        'label': 'Enabled with Sheet'
    };
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.PasskeyUpsellOnLoginExperimentState;
    var9 = var9.Sheet;
    var8.config = var9;
    var7[1] = var8;
    var1.treatments = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/webauthn/experiments/PasskeyUpsellOnLoginP2Experiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3076, 7463, 2]);