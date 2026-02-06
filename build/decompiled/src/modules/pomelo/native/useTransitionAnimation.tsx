// modules/pomelo/native/useTransitionAnimation.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var7 = 0;
    var4 = var6[var7];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot2 = var1;
    var1 = {};
    var1.UP = var7;
    var4 = 'UP';
    var1[var7] = var4;
    var7 = 1;
    var1.DOWN = var7;
    var4 = 'DOWN';
    var1[var7] = var4;
    var _closure1_slot3 = var1;
    var4 = {};
    var7 = 'function useTransitionAnimationTsx1(){const{offset}=this.__closure;return{transform:[{translateY:offset.get()*2}],opacity:1-Math.abs(offset.get())};}';
    var4.code = var7;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/native/useTransitionAnimation.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 1;
        var0 = var7[var3];
        var4 = undefined;
        var8 = var6.bind(var4)(var0);
        var5 = var8.useSharedValue;
        var0 = 0;
        var5 = var5.bind(var8)(var0);
        var _closure2_slot0 = var5;
        var0 = {};
        var3 = var7[var3];
        var6 = var6.bind(var4)(var3);
        var4 = var6.useAnimatedStyle;
        var3 = function() {
            var0 = {};
            var2 = {};
            var4 = _closure2_slot0;
            var1 = var4.get;
            var3 = var1.bind(var4)();
            var1 = 2;
            var1 = var1 * var3;
            var2.translateY = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var0.transform = var1;
            var1 = global;
            var3 = var1.Math;
            var2 = var3.abs;
            var1 = var4.get;
            var1 = var1.bind(var4)();
            var2 = var2.bind(var3)(var1);
            var1 = 1;
            var1 = var1 - var2;
            var0.opacity = var1;
            return var0;
        };
        var7 = {};
        var7.offset = var5;
        var3.__closure = var7;
        var7 = 13853245220103.0;
        var3.__workletHash = var7;
        var7 = _closure1_slot4;
        var3.__initData = var7;
        var3 = var4.bind(var6)(var3);
        var0.animatedStyles = var3;
        var4 = _closure1_slot2;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0) { // Environment: var1
            _fun81447: for (var _fun81447_ip = 0;;) switch (_fun81447_ip) {
                case 0:
                    var4 = _closure2_slot0;
                    var3 = var4.set;
                    var2 = _closure1_slot3;
                    var6 = var2.UP;
                    var2 = -1;
                    var5 = arg0;
                    if (!(var5 === var6)) {
                        _fun81447_ip = 41;
                        continue _fun81447
                    }
                case 38:
                    var2 = 1;
                case 41:
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot0;
                    var2 = var3.set;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var1);
                    var5 = var6.withTiming;
                    var4 = {};
                    var1 = 300;
                    var4.duration = var1;
                    var1 = 0;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.transition = var1;
        return var0;
    };
    var2.default = var3;
    var2.Direction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3722, 4098, 2]);