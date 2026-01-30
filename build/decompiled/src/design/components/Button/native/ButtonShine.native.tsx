// design/components/Button/native/ButtonShine.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function(arg0, arg1) { // Original name: useShineEffectStyles, environment: var1
        var11 = arg0;
        var _closure2_slot0 = var11;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 3;
        var1 = var5[var1];
        var3 = undefined;
        var7 = var4.bind(var3)(var1);
        var2 = var7.useButtonTextColorStyles;
        var1 = arg1;
        var1 = var2.bind(var7)(var1);
        var7 = _closure1_slot1;
        var2 = 4;
        var2 = var5[var2];
        var2 = var7.bind(var3)(var2);
        var1 = var1.color;
        var7 = var2.bind(var3)(var1);
        var2 = var7.alpha;
        var1 = 0.1;
        var2 = var2.bind(var7)(var1);
        var1 = var2.hex;
        var7 = var1.bind(var2)();
        var8 = _closure1_slot4;
        var2 = var8.useContext;
        var1 = 5;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.AccessibilityPreferencesContext;
        var1 = var2.bind(var8)(var1);
        var1 = var1.reducedMotion;
        var10 = var1.enabled;
        var _closure2_slot1 = var10;
        var9 = 6;
        var1 = var5[var9];
        var2 = var4.bind(var3)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() { // Original name: o, environment: var0
            _fun37434: for (var _fun37434_ip = 0;;) switch (_fun37434_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun37434_ip = 271;
                        continue _fun37434
                    }
                case 16:
                    var0 = _closure2_slot1;
                    var1 = {};
                    var3 = {};
                    if (var0) {
                        _fun37434_ip = 231;
                        continue _fun37434
                    }
                case 30:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 6;
                    var0 = var13[var10];
                    var9 = undefined;
                    var6 = var12.bind(var9)(var0);
                    var5 = var6.withRepeat;
                    var0 = var13[var10];
                    var8 = var12.bind(var9)(var0);
                    var7 = var8.withSequence;
                    var0 = 7;
                    var4 = var13[var0];
                    var16 = var12.bind(var9)(var4);
                    var15 = var16.withTiming;
                    var11 = {};
                    var4 = 0;
                    var11.duration = var4;
                    var4 = -120;
                    var14 = 'animate-always';
                    var4 = var15.bind(var16)(var4, var11, var14);
                    var10 = var13[var10];
                    var11 = var12.bind(var9)(var10);
                    var10 = var11.withDelay;
                    var0 = var13[var0];
                    var13 = var12.bind(var9)(var0);
                    var12 = var13.withTiming;
                    var9 = _closure2_slot0;
                    var0 = 120;
                    var9 = var9 + var0;
                    var0 = {};
                    var15 = 2000;
                    var0.duration = var15;
                    var9 = var12.bind(var13)(var9, var0, var14);
                    var0 = 750;
                    var0 = var10.bind(var11)(var0, var9);
                    var4 = var7.bind(var8)(var4, var0);
                    var0 = -1;
                    var0 = var5.bind(var6)(var4, var0);
                    var3.translateX = var0;
                    var0 = new Array(1);
                    var0[0] = var3;
                    var1.transform = var0;
                    var0 = var1;
                    _fun37434_ip = 269;
                    continue _fun37434;
                case 231:
                    var4 = _closure2_slot0;
                    var2 = 56;
                    var4 = var4 - var2;
                    var2 = 2;
                    var2 = var4 / var2;
                    var3.translateX = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1.transform = var2;
                    var0 = var1;
                case 269:
                    _fun37434_ip = 301;
                    continue _fun37434;
                case 271:
                    var1 = {};
                    var3 = {};
                    var2 = -120;
                    var3.translateX = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1.transform = var2;
                    var0 = var1;
                case 301:
                    return var0;
            }
        };
        var8 = {};
        var8.width = var11;
        var11 = 120;
        var8.SHINE_OFFSCREEN_OFFSET = var11;
        var8.useReducedMotion = var10;
        var10 = 56;
        var8.SHINE_WIDTH = var10;
        var10 = var5[var9];
        var10 = var4.bind(var3)(var10);
        var10 = var10.withRepeat;
        var8.withRepeat = var10;
        var10 = var5[var9];
        var10 = var4.bind(var3)(var10);
        var10 = var10.withSequence;
        var8.withSequence = var10;
        var10 = 7;
        var10 = var5[var10];
        var10 = var4.bind(var3)(var10);
        var10 = var10.withTiming;
        var8.withTiming = var10;
        var9 = var5[var9];
        var9 = var4.bind(var3)(var9);
        var9 = var9.withDelay;
        var8.withDelay = var9;
        var9 = 750;
        var8.SHINE_INITIAL_ANIMATION_DELAY = var9;
        var9 = 2000;
        var8.SHINE_ANIMATION_DURATION = var9;
        var0.__closure = var8;
        var8 = 15814138938406.0;
        var0.__workletHash = var8;
        var6 = _closure1_slot6;
        var0.__initData = var6;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var2 = 8;
        var2 = var5[var2];
        var5 = var4.bind(var3)(var2);
        var4 = var5.createStyles;
        var2 = {};
        var6 = {
            'width': '100%',
            'height': '200%',
            'position': 'absolute',
            'overflow': 'hidden'
        };
        var2.shineContainer = var6;
        var6 = {
            'width': 56,
            'height': '500%',
            'transform': null,
            'backgroundColor': null,
            'top': '-100%',
            'alignItems': 'center'
        };
        var9 = {};
        var8 = '30deg';
        var9.rotate = var8;
        var8 = new Array(1);
        var8[0] = var9;
        var6.transform = var8;
        var6.backgroundColor = var7;
        var2.shine = var6;
        var6 = {
            'width': 16,
            'height': '100%'
        };
        var6.backgroundColor = var7;
        var2.shineInner = var6;
        var2 = var4.bind(var5)(var2);
        var2 = var2.bind(var3)();
        var0.shineStyles = var2;
        var0.shineAnimatedStyle = var1;
        return var0;
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = "function ButtonShineNativeTsx1(){const{width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},'animate-always'))),-1)}]};}";
    var4.code = var7;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Button/native/ButtonShine.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useShineEffectStyles = var3;
    var1 = function(arg0) { // Original name: ButtonShine, environment: var1
        var0 = arg0;
        var5 = var0.variant;
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var1 = null;
        var6 = var2.bind(var3)(var1);
        var2 = _closure1_slot3;
        var3 = undefined;
        var1 = 2;
        var6 = var2.bind(var3)(var6, var1);
        var1 = 0;
        var2 = var6[var1];
        var1 = 1;
        var1 = var6[var1];
        var _closure2_slot0 = var1;
        var1 = _closure1_slot7;
        var1 = var1.bind(var3)(var2, var5);
        var8 = var1.shineStyles;
        var5 = var1.shineAnimatedStyle;
        var2 = _closure1_slot5;
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var6 = 6;
        var0 = var9[var6];
        var0 = var7.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var4 = function(arg0) { // Original name: onLayout, environment: var4
            var2 = _closure2_slot0;
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var1 = var0.width;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.onLayout = var4;
        var10 = var8.shineContainer;
        var4 = new Array(2);
        var4[0] = var10;
        var4[1] = var5;
        var0.style = var4;
        var4 = var9[var6];
        var4 = var7.bind(var3)(var4);
        var5 = var4.View;
        var4 = {};
        var10 = var8.shine;
        var4.style = var10;
        var6 = var9[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.View;
        var6 = {};
        var8 = var8.shineInner;
        var6.style = var8;
        var6 = var2.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ButtonShine = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 4048, 669, 3165, 3679, 4056, 1297, 2]);