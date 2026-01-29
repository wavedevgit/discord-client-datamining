// modules/virtual_currency/shared/AnimationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = {
        'EARN': 0.25,
        'SPEND': 0.3
    };
    var _closure1_slot0 = var3;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/shared/AnimationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 3000;
    var2.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS = var4;
    var2.ORB_LOTTIE_COUNTER_ANIMATION_FACTORS = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun75343: for (var _fun75343_ip = 0;;) switch (_fun75343_ip) {
            case 0:
                var3 = arg1;
                var0 = arg0;
                var1 = 0;
                var4 = var0 > var1;
                var2 = _closure1_slot0;
                var0 = 'SPEND';
                if (!var4) {
                    _fun75343_ip = 34;
                    continue _fun75343
                }
            case 28:
                var0 = 'EARN';
            case 34:
                var0 = var2[var0];
                var2 = var3 * var0;
                var0 = {};
                var0.duration = var2;
                var1 = 0;
                if (!var4) {
                    _fun75343_ip = 57;
                    continue _fun75343
                }
            case 53:
                var1 = var3 - var2;
            case 57:
                var0.delay = var1;
                return var0;
        }
    };
    var2.getDesiredAnimationConfigs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);