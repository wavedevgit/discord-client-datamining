// modules/search/native/hooks/usePlaceholderStyles.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FADE_LAYOUT_ANIMATION_DURATION;
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 'function usePlaceholderStylesTsx1(){const{useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION}=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};}';
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/hooks/usePlaceholderStyles.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.placeholderHeight;
        var1 = var0.numColumns;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 2;
        var0 = var3[var0];
        var3 = undefined;
        var2 = var2.bind(var3)(var0);
        var0 = {};
        var5 = true;
        var0.ignoreKeyboard = var5;
        var0 = var2.bind(var3)(var0);
        var0 = var0.height;
        var2 = global;
        var3 = var2.Math;
        var2 = var3.ceil;
        var0 = var0 / var4;
        var0 = var2.bind(var3)(var0);
        var0 = var0 * var1;
        return var0;
    };
    var2.useFullscreenPlaceholderCount = var3;
    var1 = function arg0() {
        var9 = arg0;
        var _closure2_slot0 = var9;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 3;
        var1 = var8[var1];
        var6 = undefined;
        var5 = var7.bind(var6)(var1);
        var4 = var5.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot3;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var10 = var4.bind(var5)(var2, var1);
        var _closure2_slot1 = var10;
        var5 = 4;
        var1 = var8[var5];
        var2 = var7.bind(var6)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun105371: for (var _fun105371_ip = 0;;) switch (_fun105371_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var1 = {};
                    var3 = _closure2_slot0;
                    if (var0) {
                        _fun105371_ip = 290;
                        continue _fun105371
                    }
                case 19:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    if (var3) {
                        _fun105371_ip = 82;
                        continue _fun105371
                    }
                case 33:
                    var2 = 5;
                    var4 = var16[var2];
                    var2 = undefined;
                    var5 = var15.bind(var2)(var4);
                    var4 = var5.withTiming;
                    var2 = {};
                    var0 = _closure1_slot4;
                    var2.duration = var0;
                    var0 = 0;
                    var0 = var4.bind(var5)(var0, var2);
                    var1.opacity = var0;
                    var0 = var1;
                    _fun105371_ip = 288;
                    continue _fun105371;
                case 82:
                    var2 = 4;
                    var4 = var16[var2];
                    var14 = undefined;
                    var6 = var15.bind(var14)(var4);
                    var5 = var6.withRepeat;
                    var2 = var16[var2];
                    var9 = var15.bind(var14)(var2);
                    var8 = var9.withSequence;
                    var2 = 5;
                    var4 = var16[var2];
                    var10 = var15.bind(var14)(var4);
                    var7 = var10.withTiming;
                    var4 = {};
                    var11 = 0;
                    var4.duration = var11;
                    var12 = 0.5;
                    var7 = var7.bind(var10)(var12, var4);
                    var4 = var16[var2];
                    var18 = var15.bind(var14)(var4);
                    var11 = var18.withTiming;
                    var10 = {};
                    var17 = 1300;
                    var10.duration = var17;
                    var13 = 6;
                    var4 = var16[var13];
                    var4 = var15.bind(var14)(var4);
                    var4 = var4.STANDARD_EASING;
                    var10.easing = var4;
                    var4 = 1;
                    var4 = var11.bind(var18)(var4, var10);
                    var2 = var16[var2];
                    var11 = var15.bind(var14)(var2);
                    var10 = var11.withTiming;
                    var2 = {};
                    var2.duration = var17;
                    var13 = var16[var13];
                    var13 = var15.bind(var14)(var13);
                    var13 = var13.STANDARD_EASING;
                    var2.easing = var13;
                    var2 = var10.bind(var11)(var12, var2);
                    var4 = var8.bind(var9)(var7, var4, var2);
                    var2 = -1;
                    var2 = var5.bind(var6)(var4, var2);
                    var1.opacity = var2;
                    var0 = var1;
                case 288:
                    _fun105371_ip = 305;
                    continue _fun105371;
                case 290:
                    var2 = 0;
                    if (!var3) {
                        _fun105371_ip = 298;
                        continue _fun105371
                    }
                case 295:
                    var2 = 1;
                case 298:
                    var1.opacity = var2;
                    var0 = var1;
                case 305:
                    return var0;
            }
        };
        var4 = {};
        var4.useReducedMotion = var10;
        var4.visible = var9;
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.withRepeat;
        var4.withRepeat = var9;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.withSequence;
        var4.withSequence = var5;
        var5 = 5;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.withTiming;
        var4.withTiming = var5;
        var5 = 6;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.STANDARD_EASING;
        var4.STANDARD_EASING = var5;
        var5 = _closure1_slot4;
        var4.FADE_LAYOUT_ANIMATION_DURATION = var5;
        var0.__closure = var4;
        var4 = 9750536800906.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot5;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.usePlaceholderAnimatedStyle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 8861, 1464, 566, 3679, 4056, 4847, 2]);