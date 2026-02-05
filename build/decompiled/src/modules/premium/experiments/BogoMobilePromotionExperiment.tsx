// modules/premium/experiments/BogoMobilePromotionExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2025-06_bogo_mobile_promotion_gate',
        'label': 'BOGO Mobile Promotion Manager'
    };
    var4 = {};
    var9 = false;
    var4.enabled = var9;
    var3.defaultConfig = var4;
    var10 = {
        'id': 1,
        'label': 'Enable BOGO Mobile Promotion Manager'
    };
    var4 = 1;
    var9 = {};
    var9.enabled = var11;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot0 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/experiments/BogoMobilePromotionExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        _fun58234: for (var _fun58234_ip = 0;;) switch (_fun58234_ip) {
            case 0:
                var4 = arguments[0];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun58234_ip = 11;
                    continue _fun58234
                }
            case 9:
                var4 = false;
            case 11:
                var3 = _closure1_slot0;
                var2 = var3.useExperiment;
                var1 = {};
                var0 = '489551_1';
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var4;
    var2.BogoMobilePromotionExperiment = var3;
    var1 = function() { // Environment: var1
        _fun58235: for (var _fun58235_ip = 0;;) switch (_fun58235_ip) {
            case 0:
                var4 = arguments[0];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun58235_ip = 11;
                    continue _fun58235
                }
            case 9:
                var4 = false;
            case 11:
                var3 = _closure1_slot0;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = '489551_2';
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.isBogoMobilePromotionExperimentEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3115, 2]);