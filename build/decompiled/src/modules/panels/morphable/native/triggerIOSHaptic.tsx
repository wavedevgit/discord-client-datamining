// modules/panels/morphable/native/triggerIOSHaptic.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.IS_IOS;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/panels/morphable/native/triggerIOSHaptic.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun110953: for (var _fun110953_ip = 0;;) switch (_fun110953_ip) {
            case 0:
                var1 = _closure1_slot2;
                if (!var1) {
                    _fun110953_ip = 64;
                    continue _fun110953
                }
            case 10:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var1);
                var1 = var2.triggerHapticFeedback;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.HapticFeedbackTypes;
                var0 = var0.IMPACT_MEDIUM;
                var0 = var1.bind(var2)(var0);
            case 64:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11887, 3280, 2]);