// modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = {
        'overshootClamping': true,
        'damping': 35,
        'stiffness': 450,
        'mass': 0.5,
        'restDisplacementThreshold': 0.001
    };
    var _closure1_slot4 = var3;
    var4 = {};
    var7 = 'function useIOSPressEffectsTsx1(){const{withSpring,interpolate,sharedPressState,sharedWidthScale,SPRING_CONFIG,withOpacity}=this.__closure;const scale=withSpring(interpolate(sharedPressState.get(),[0,1],[1,sharedWidthScale.get()]),SPRING_CONFIG);if(withOpacity){return{transform:[{scale:scale}],opacity:withSpring(interpolate(sharedPressState.get(),[0,1],[1,0.5]),SPRING_CONFIG)};}else{return{transform:[{scale:scale}]};}}';
    var4.code = var7;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx';
    var4 = var5.bind(var6)(var4);
    var2.SPRING_CONFIG = var3;
    var1 = function(arg0) { // Original name: useIOSPressEffects, environment: var1
        _fun44372: for (var _fun44372_ip = 0;;) switch (_fun44372_ip) {
            case 0:
                var1 = arg0;
                var8 = arguments[1];
                var _closure2_slot0 = var1;
                var12 = undefined;
                if (!(var8 === var12)) {
                    _fun44372_ip = 20;
                    continue _fun44372
                }
            case 18:
                var8 = false;
            case 20:
                var _closure2_slot1 = var8;
                var _closure2_slot2 = var12;
                var _closure2_slot3 = var12;
                var _closure2_slot4 = var12;
                var3 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 1;
                var2 = var13[var7];
                var2 = var3.bind(var12)(var2);
                var2 = var2.bind(var12)();
                var4 = var2.width;
                _closure2_slot2 = var4;
                var11 = _closure1_slot0;
                var10 = 2;
                var2 = var13[var10];
                var5 = var11.bind(var12)(var2);
                var3 = var5.useSharedValue;
                var2 = var1 / var4;
                var2 = var7 - var2;
                var9 = var3.bind(var5)(var2);
                _closure2_slot3 = var9;
                var7 = _closure1_slot3;
                var3 = var7.useEffect;
                var2 = new Array(3);
                var2[0] = var4;
                var2[1] = var1;
                var2[2] = var9;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var1 = var2.set;
                    var3 = _closure2_slot0;
                    var0 = _closure2_slot2;
                    var3 = var3 / var0;
                    var0 = 1;
                    var0 = var0 - var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var7)(var1, var2);
                var1 = var13[var10];
                var3 = var11.bind(var12)(var1);
                var2 = var3.useSharedValue;
                var1 = 0;
                var4 = var2.bind(var3)(var1);
                _closure2_slot4 = var4;
                var3 = var7.useCallback;
                var2 = new Array(1);
                var2[0] = var4;
                var1 = function() { // Environment: var0
                    _fun44374: for (var _fun44374_ip = 0;;) switch (_fun44374_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.isIOS;
                            var0 = var0.bind(var1)();
                            if (!var0) {
                                _fun44374_ip = 58;
                                continue _fun44374
                            }
                        case 38:
                            var3 = _closure2_slot4;
                            var2 = var3.set;
                            var1 = 1;
                            var0 = var2.bind(var3)(var1);
                        case 58:
                            return var0;
                    }
                };
                var2 = var3.bind(var7)(var1, var2);
                var5 = var7.useCallback;
                var3 = new Array(1);
                var3[0] = var4;
                var1 = function() { // Environment: var0
                    _fun44375: for (var _fun44375_ip = 0;;) switch (_fun44375_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.isIOS;
                            var0 = var0.bind(var1)();
                            if (!var0) {
                                _fun44375_ip = 57;
                                continue _fun44375
                            }
                        case 38:
                            var3 = _closure2_slot4;
                            var2 = var3.set;
                            var1 = 0;
                            var0 = var2.bind(var3)(var1);
                        case 57:
                            return var0;
                    }
                };
                var3 = var5.bind(var7)(var1, var3);
                var1 = var13[var10];
                var5 = var11.bind(var12)(var1);
                var1 = var5.useAnimatedStyle;
                var0 = function() { // Original name: S, environment: var0
                    _fun44376: for (var _fun44376_ip = 0;;) switch (_fun44376_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var4 = 4;
                            var3 = var0[var4];
                            var8 = undefined;
                            var6 = var1.bind(var8)(var3);
                            var5 = var6.withSpring;
                            var9 = 2;
                            var0 = var0[var9];
                            var11 = var1.bind(var8)(var0);
                            var10 = var11.interpolate;
                            var1 = _closure2_slot4;
                            var0 = var1.get;
                            var7 = var0.bind(var1)();
                            var1 = _closure2_slot3;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var1 = [1];
                            var1[1] = var0;
                            var0 = [0, 1];
                            var1 = var10.bind(var11)(var7, var0, var1);
                            var0 = _closure1_slot4;
                            var5 = var5.bind(var6)(var1, var0);
                            var0 = _closure2_slot1;
                            var6 = {};
                            if (var0) {
                                _fun44376_ip = 151;
                                continue _fun44376
                            }
                        case 127:
                            var1 = {};
                            var1.scale = var5;
                            var0 = new Array(1);
                            var0[0] = var1;
                            var6.transform = var0;
                            var0 = var6;
                            _fun44376_ip = 264;
                            continue _fun44376;
                        case 151:
                            var1 = {};
                            var6.scale = var5;
                            var5 = new Array(1);
                            var5[0] = var6;
                            var1.transform = var5;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = var6[var4];
                            var5 = var7.bind(var8)(var4);
                            var4 = var5.withSpring;
                            var6 = var6[var9];
                            var9 = var7.bind(var8)(var6);
                            var8 = var9.interpolate;
                            var6 = _closure2_slot4;
                            var3 = var6.get;
                            var7 = var3.bind(var6)();
                            var6 = [0, 1];
                            var3 = [1, 0.5];
                            var3 = var8.bind(var9)(var7, var6, var3);
                            var2 = _closure1_slot4;
                            var2 = var4.bind(var5)(var3, var2);
                            var1.opacity = var2;
                            var0 = var1;
                        case 264:
                            return var0;
                    }
                };
                var7 = {};
                var14 = 4;
                var14 = var13[var14];
                var14 = var11.bind(var12)(var14);
                var14 = var14.withSpring;
                var7.withSpring = var14;
                var10 = var13[var10];
                var10 = var11.bind(var12)(var10);
                var10 = var10.interpolate;
                var7.interpolate = var10;
                var7.sharedPressState = var4;
                var7.sharedWidthScale = var9;
                var9 = _closure1_slot4;
                var7.SPRING_CONFIG = var9;
                var7.withOpacity = var8;
                var0.__closure = var7;
                var7 = 1305898392151.0;
                var0.__workletHash = var7;
                var6 = _closure1_slot5;
                var0.__initData = var6;
                var1 = var1.bind(var5)(var0);
                var0 = {};
                var0.sharedPressState = var4;
                var0.onPressOut = var3;
                var0.onPressIn = var2;
                var0.pressableStyles = var1;
                return var0;
        }
    };
    var2.useIOSPressEffects = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1464, 3677, 478, 4034, 2]);