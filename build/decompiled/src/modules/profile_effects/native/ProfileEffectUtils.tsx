// modules/profile_effects/native/ProfileEffectUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_effects/native/ProfileEffectUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Environment: var1
        _fun56966: for (var _fun56966_ip = 0;;) switch (_fun56966_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var1 = var0.start;
                if (!(!(var3 >= var1))) {
                    _fun56966_ip = 19;
                    continue _fun56966
                }
            case 15:
                var1 = false;
                return var1;
            case 19:
                var1 = var0.loop;
                if (var1) {
                    _fun56966_ip = 50;
                    continue _fun56966
                }
            case 28:
                var2 = var0.duration;
                var1 = var0.start;
                var1 = var2 + var1;
                if (!(var3 > var1)) {
                    _fun56966_ip = 50;
                    continue _fun56966
                }
            case 46:
                var1 = false;
                return var1;
            case 50:
                var1 = var0.loop;
                if (!var1) {
                    _fun56966_ip = 131;
                    continue _fun56966
                }
            case 59:
                var1 = var0.loopDelay;
                var2 = undefined;
                if (!(var2 !== var1)) {
                    _fun56966_ip = 131;
                    continue _fun56966
                }
            case 71:
                var4 = var0.loopDelay;
                var1 = 0;
                if (!(var4 > var1)) {
                    _fun56966_ip = 131;
                    continue _fun56966
                }
            case 83:
                var1 = var0.duration;
                var4 = null;
                var4 = var4 == var0;
                var2 = undefined;
                if (var4) {
                    _fun56966_ip = 105;
                    continue _fun56966
                }
            case 99:
                var2 = var0.loopDelay;
            case 105:
                var2 = var1 + var2;
                var1 = var0.start;
                var1 = var3 - var1;
                var1 = var1 % var2;
                var0 = var0.duration;
                if (!(!(var1 > var0))) {
                    _fun56966_ip = 135;
                    continue _fun56966
                }
            case 131:
                var0 = true;
                return var0;
            case 135:
                var0 = false;
                return var0;
        }
    };
    var2.shouldAnimate = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getAssetWHRatio;
        var0 = arg0;
        var1 = var1.bind(var2)(var0);
        var0 = arg1;
        var0 = var0 / var1;
        return var0;
    };
    var2.calculateProfileEffectHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6936, 2]);