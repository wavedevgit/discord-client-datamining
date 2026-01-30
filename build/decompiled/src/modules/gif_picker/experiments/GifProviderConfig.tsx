// modules/gif_picker/experiments/GifProviderConfig.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function() { // Original name: getGifProviderConfig, environment: var1
        _fun73055: for (var _fun73055_ip = 0;;) switch (_fun73055_ip) {
            case 0: // try_start_0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.GifProvidersExperiment;
                var1 = var2.getConfig;
                var0 = {};
                var3 = 'gif_picker';
                var0.location = var3;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var2 = var1.enableMetrics;
                var0.enabled = var2;
                var2 = var1.provider;
                var0.userProvider = var2;
                var2 = true;
                var0.sendProviderToAPI = var2;
                var1 = var1.fallbackProvider;
                var0.fallbackProvider = var1;
            case 95: // try_end0
                return var0;
            case 97: // catch_target0
                CatchBlockStart(arg_register = 4);
                var3 = _closure1_slot2;
                var2 = var3.warn;
                var0 = 'Error getting GIF provider experiment config:';
                var0 = var2.bind(var3)(var0, var4);
                var0 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var5 = var2.DEFAULT_GIF_PROVIDER_CONFIG;
                var6 = var0;
                var2 = copyDataProperties(var6, var5);
                var2 = _closure1_slot3;
                var1 = 'userProvider';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var8 = var4.bind(var0)(var7);
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var11 = 'GifProviderConfig';
    var12 = var7;
    var4 = new var12[var8](var11, var10);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot2 = var4;
    var4 = 'tenor';
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gif_picker/experiments/GifProviderConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getGifProviderConfig = var3;
    var3 = function() { // Original name: getProviderForAPIRequest, environment: var1
        _fun73056: for (var _fun73056_ip = 0;;) switch (_fun73056_ip) {
            case 0: // try_start_0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.GifProvidersExperiment;
                var1 = var2.getConfig;
                var0 = {};
                var3 = 'gif_picker';
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
                var0 = var0.provider;
            case 60: // try_end0
                return var0;
            case 62: // catch_target0
                CatchBlockStart(arg_register = 4);
                var3 = _closure1_slot2;
                var2 = var3.warn;
                var1 = 'Error getting provider for API request:';
                var1 = var2.bind(var3)(var1, var4);
                var0 = _closure1_slot3;
                return var0;
        }
    };
    var2.getProviderForAPIRequest = var3;
    var1 = function() { // Original name: getExperimentContext, environment: var1
        _fun73057: for (var _fun73057_ip = 0;;) switch (_fun73057_ip) {
            case 0:
                var3 = undefined;
                var1 = undefined;
            case 4: // try_start_0
                var0 = _closure1_slot4;
                var3 = var0.bind(var3)();
                var1 = var3;
                var0 = {};
                var4 = null;
                var0.bucket = var4;
                var3 = var3.userProvider;
                if (!(var4 == var3)) {
                    _fun73057_ip = 43;
                    continue _fun73057
                }
            case 37:
                var2 = _closure1_slot3;
                _fun73057_ip = 52;
                continue _fun73057;
            case 43:
                var3 = var1;
                var2 = var3.userProvider;
            case 52:
                var0.provider = var2;
                var1 = var1.enabled;
                var0.enabled = var1;
            case 66: // try_end0
                return var0;
            case 68: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = {
                    'bucket': null,
                    'provider': null,
                    'enabled': false
                };
                var1 = _closure1_slot3;
                var0.provider = var1;
                return var0;
        }
    };
    var2.getExperimentContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3, 9155, 9156, 2]);