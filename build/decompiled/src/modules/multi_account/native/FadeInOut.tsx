// modules/multi_account/native/FadeInOut.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = {};
    var7 = 'function FadeInOutTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}';
    var3.code = var7;
    var _closure1_slot5 = var3;
    var3 = {};
    var7 = 'function FadeInOutTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}';
    var3.code = var7;
    var _closure1_slot6 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var4 = var0.children;
        var1 = var0.duration;
        var _closure2_slot0 = var1;
        var7 = var0.style;
        var8 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var6 = var5[var0];
        var3 = undefined;
        var10 = var8.bind(var3)(var6);
        var9 = var10.useSharedValue;
        var6 = 0;
        var11 = var9.bind(var10)(var6);
        var _closure2_slot1 = var11;
        var6 = var5[var0];
        var9 = var8.bind(var3)(var6);
        var8 = var9.useAnimatedStyle;
        var6 = function() { // Original name: h, environment: var2
            var0 = {};
            var2 = _closure2_slot1;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0.opacity = var1;
            return var0;
        };
        var10 = {};
        var10.opacity = var11;
        var6.__closure = var10;
        var10 = 8749472415282.0;
        var6.__workletHash = var10;
        var10 = _closure1_slot5;
        var6.__initData = var10;
        var6 = var8.bind(var9)(var6);
        var10 = _closure1_slot3;
        var9 = var10.useRef;
        var8 = null;
        var8 = var9.bind(var10)(var8);
        var _closure2_slot2 = var8;
        var11 = var10.useCallback;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = function() { // Environment: var2
            _fun80863: for (var _fun80863_ip = 0;;) switch (_fun80863_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun80863_ip = 31;
                        continue _fun80863
                    }
                case 18:
                    var1 = _closure2_slot2;
                    var0 = var1.current;
                    var0 = var0.bind(var1)();
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = var11.bind(var10)(var8, var9);
        var _closure2_slot3 = var8;
        var9 = var10.useImperativeHandle;
        var8 = arg1;
        var2 = function() { // Environment: var2
            var0 = {};
            var2 = function() { // Original name: componentDidAppear, environment: var1
                var3 = _closure2_slot1;
                var2 = var3.set;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var4 = var4[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var4);
                var5 = var6.withTiming;
                var4 = {};
                var1 = _closure2_slot0;
                var4.duration = var1;
                var1 = 1;
                var1 = var5.bind(var6)(var1, var4);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0.componentDidAppear = var2;
            var2 = function() { // Original name: componentDidEnter, environment: var1
                var3 = _closure2_slot1;
                var2 = var3.set;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var4 = var4[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var4);
                var5 = var6.withTiming;
                var4 = {};
                var1 = _closure2_slot0;
                var4.duration = var1;
                var1 = 1;
                var1 = var5.bind(var6)(var1, var4);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0.componentDidEnter = var2;
            var1 = function(arg0) { // Original name: componentWillLeave, environment: var1
                var1 = _closure2_slot2;
                var0 = arg0;
                var1.current = var0;
                var3 = _closure2_slot1;
                var2 = var3.set;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 3;
                var4 = var12[var0];
                var0 = undefined;
                var8 = var11.bind(var0)(var4);
                var7 = var8.withTiming;
                var6 = {};
                var4 = _closure2_slot0;
                var6.duration = var4;
                var5 = function(arg0) { // Original name: t, environment: var4
                    _fun80868: for (var _fun80868_ip = 0;;) switch (_fun80868_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun80868_ip = 52;
                                continue _fun80868
                            }
                        case 6:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 2;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot3;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = {};
                var10 = 2;
                var10 = var12[var10];
                var10 = var11.bind(var0)(var10);
                var10 = var10.runOnJS;
                var4.runOnJS = var10;
                var9 = _closure2_slot3;
                var4.handleTransitionFinished = var9;
                var5.__closure = var4;
                var4 = 7644958904451.0;
                var5.__workletHash = var4;
                var1 = _closure1_slot6;
                var5.__initData = var1;
                var16 = 0;
                var14 = 'respect-motion-settings';
                var17 = var8;
                var15 = var6;
                var13 = var5;
                var1 = var17[var7](var16, var15, var14, var13, var12);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0.componentWillLeave = var1;
            return var0;
        };
        var2 = var9.bind(var10)(var8, var2);
        var2 = _closure1_slot4;
        var1 = _closure1_slot1;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/multi_account/native/FadeInOut.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3677, 4050, 2]);