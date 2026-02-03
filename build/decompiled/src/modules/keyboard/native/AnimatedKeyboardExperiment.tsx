// modules/keyboard/native/AnimatedKeyboardExperiment.tsx
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
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.createApexExperiment;
    var3 = {
        'name': '2025-08-animated-keyboard-android',
        'kind': 'user'
    };
    var8 = {};
    var9 = false;
    var8.enabled = var9;
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {};
    var9.enabled = var10;
    var8[1] = var9;
    var3.variations = var8;
    var3 = var4.bind(var7)(var3);
    var7 = var3.getConfig;
    var4 = {};
    var8 = 'isAnimatedKeyboardEnabled';
    var4.location = var8;
    var4 = var7.bind(var3)(var4);
    var4 = var4.enabled;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/AnimatedKeyboardExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.AnimatedKeyboardExperiment = var3;
    var1 = function() {
        _fun76936: for (var _fun76936_ip = 0;;) switch (_fun76936_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun76936_ip = 48;
                    continue _fun76936
                }
            case 44:
                var0 = _closure1_slot2;
            case 48:
                return var0;
        }
    };
    var2.isAnimatedAndroidKeyboard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 478, 2]);