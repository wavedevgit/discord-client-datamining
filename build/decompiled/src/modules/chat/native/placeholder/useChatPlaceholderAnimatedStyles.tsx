// modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = {};
    var6 = 1300;
    var3.duration = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.STANDARD_EASING;
    var3.easing = var6;
    var _closure1_slot3 = var3;
    var3 = {};
    var6 = 'function useChatPlaceholderAnimatedStylesTsx1(){const{visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG}=this.__closure;if(!visible){return{opacity:0};}else if(!animated||useReducedMotion){return{opacity:0.7};}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};}';
    var3.code = var6;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var11 = var1.visible;
        var _closure2_slot0 = var11;
        var10 = var1.animated;
        var _closure2_slot1 = var10;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var1 = 2;
        var1 = var8[var1];
        var6 = undefined;
        var5 = var7.bind(var6)(var1);
        var4 = var5.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot2;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var9 = var4.bind(var5)(var2, var1);
        var _closure2_slot2 = var9;
        var5 = 3;
        var1 = var8[var5];
        var2 = var7.bind(var6)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun91026: for (var _fun91026_ip = 0;;) switch (_fun91026_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun91026_ip = 23;
                        continue _fun91026
                    }
                case 10:
                    var0 = {};
                    var2 = 0;
                    var0.opacity = var2;
                    _fun91026_ip = 243;
                    continue _fun91026;
                case 23:
                    var2 = _closure2_slot1;
                    if (!var2) {
                        _fun91026_ip = 221;
                        continue _fun91026
                    }
                case 33:
                    var1 = _closure2_slot2;
                    if (var1) {
                        _fun91026_ip = 221;
                        continue _fun91026
                    }
                case 43:
                    var1 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 3;
                    var4 = var13[var2];
                    var9 = undefined;
                    var5 = var12.bind(var9)(var4);
                    var4 = var5.withRepeat;
                    var2 = var13[var2];
                    var8 = var12.bind(var9)(var2);
                    var7 = var8.withSequence;
                    var2 = 4;
                    var6 = var13[var2];
                    var14 = var12.bind(var9)(var6);
                    var10 = var14.withTiming;
                    var6 = 5;
                    var6 = var13[var6];
                    var6 = var12.bind(var9)(var6);
                    var6 = var6.timingNone;
                    var11 = 0.3;
                    var6 = var10.bind(var14)(var11, var6);
                    var10 = var13[var2];
                    var15 = var12.bind(var9)(var10);
                    var14 = var15.withTiming;
                    var10 = _closure1_slot3;
                    var3 = 0.7;
                    var3 = var14.bind(var15)(var3, var10);
                    var2 = var13[var2];
                    var9 = var12.bind(var9)(var2);
                    var2 = var9.withTiming;
                    var2 = var2.bind(var9)(var11, var10);
                    var3 = var7.bind(var8)(var6, var3, var2);
                    var2 = -1;
                    var2 = var4.bind(var5)(var3, var2);
                    var1.opacity = var2;
                    _fun91026_ip = 240;
                    continue _fun91026;
                case 221:
                    var2 = {};
                    var3 = 0.7;
                    var2.opacity = var3;
                    var1 = var2;
                case 240:
                    var0 = var1;
                case 243:
                    return var0;
            }
        };
        var4 = {};
        var4.visible = var11;
        var4.animated = var10;
        var4.useReducedMotion = var9;
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.withRepeat;
        var4.withRepeat = var9;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.withSequence;
        var4.withSequence = var5;
        var5 = 4;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.withTiming;
        var4.withTiming = var5;
        var5 = 5;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.timingNone;
        var4.timingNone = var5;
        var5 = _closure1_slot3;
        var4.TIMING_CONFIG = var5;
        var0.__closure = var4;
        var4 = 3375288363194.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot4;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 4884, 566, 3720, 4097, 4881, 2]);