// design/components/Tooltip/native/TooltipConstants.native.tsx
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
    var0 = {
        'overshootClamping': true,
        'damping': 35,
        'stiffness': 450,
        'mass': 0.5,
        'restDisplacementThreshold': 0.001
    };
    var _closure1_slot2 = var0;
    var0 = {};
    var5 = "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translateY,TOOLTIP_SPRING}=this.__closure;return{transform:[{translateY:withSpring(visible===1?0:translateY,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}";
    var0.code = var5;
    var _closure1_slot3 = var0;
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Tooltip/native/TooltipConstants.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57464: for (var _fun57464_ip = 0;;) switch (_fun57464_ip) {
            case 0:
                var3 = -8;
                var2 = 'top';
                var1 = arg0;
                if (!(var2 === var1)) {
                    _fun57464_ip = 22;
                    continue _fun57464
                }
            case 19:
                var3 = 8;
            case 22:
                var _closure2_slot0 = var3;
                var0 = function arg0, arg1() {
                    _fun57465: for (var _fun57465_ip = 0;;) switch (_fun57465_ip) {
                        case 0:
                            var6 = arg0;
                            var5 = arg1;
                            var0 = {};
                            var9 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var8 = 0;
                            var2 = var2[var8];
                            var7 = undefined;
                            var11 = var3.bind(var7)(var2);
                            var10 = var11.withSpring;
                            var3 = 1;
                            var2 = 0;
                            if (!(var3 !== var6)) {
                                _fun57465_ip = 55;
                                continue _fun57465
                            }
                        case 48:
                            var2 = _closure2_slot0;
                        case 55:
                            var4 = _closure1_slot2;
                            var3 = 'respect-motion-settings';
                            var16 = var11;
                            var15 = var2;
                            var14 = var4;
                            var13 = var3;
                            var12 = var5;
                            var2 = var16[var10](var15, var14, var13, var12, var11);
                            var9.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var9;
                            var0.transform = var2;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var8];
                            var2 = var2.bind(var7)(var1);
                            var1 = var2.withSpring;
                            var16 = var2;
                            var15 = var6;
                            var14 = var4;
                            var12 = var5;
                            var1 = var16[var1](var15, var14, var13, var12, var11);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var2 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 0;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var4 = var4.withSpring;
                var2.withSpring = var4;
                var2.translateY = var3;
                var3 = _closure1_slot2;
                var2.TOOLTIP_SPRING = var3;
                var0.__closure = var2;
                var2 = 7727487832145.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot3;
                var0.__initData = var1;
                return var0;
        }
    };
    var2.tooltipEnterExitAnimation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4072, 2]);