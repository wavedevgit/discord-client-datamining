// modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var7 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 1;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.useAwaitAnimationCompletion;
        var5 = var3.bind(var4)();
        var _closure2_slot2 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useRef;
        var2 = false;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot3 = var2;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun108066: for (var _fun108066_ip = 0;;) switch (_fun108066_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    if (!var1) {
                        _fun108066_ip = 22;
                        continue _fun108066
                    }
                case 10:
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    var1 = !var2;
                case 22:
                    if (!var1) {
                        _fun108066_ip = 45;
                        continue _fun108066
                    }
                case 25:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = function() { // Environment: var1
                        var1 = _closure2_slot1;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                case 45:
                    var1 = _closure2_slot3;
                    var0 = true;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useAnimationDelayedAutoFocus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 13943, 2]);