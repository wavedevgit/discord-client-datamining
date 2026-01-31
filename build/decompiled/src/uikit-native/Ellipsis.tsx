// uikit-native/Ellipsis.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: EllipsisDot, environment: var1
        var0 = arg0;
        var6 = var0.dotStyle;
        var11 = var0.disableScale;
        var _closure2_slot0 = var11;
        var16 = var0.delay;
        var _closure2_slot1 = var16;
        var15 = var0.sequenceStartDelay;
        var _closure2_slot2 = var15;
        var5 = var0.sequenceEndDelay;
        var _closure2_slot3 = var5;
        var0 = _closure1_slot6;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var8 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 5;
        var9 = var7[var0];
        var12 = var8.bind(var3)(var9);
        var10 = var12.useSharedValue;
        var9 = 0.4;
        var12 = var10.bind(var12)(var9);
        var _closure2_slot4 = var12;
        var9 = var7[var0];
        var13 = var8.bind(var3)(var9);
        var10 = var13.useSharedValue;
        var9 = 0.75;
        var10 = var10.bind(var13)(var9);
        var _closure2_slot5 = var10;
        var14 = _closure1_slot3;
        var13 = var14.useEffect;
        var9 = new Array(6);
        var9[0] = var16;
        var9[1] = var15;
        var9[2] = var5;
        var9[3] = var11;
        var9[4] = var12;
        var9[5] = var10;
        var5 = function() { // Environment: var2
            _fun50924: for (var _fun50924_ip = 0;;) switch (_fun50924_ip) {
                case 0:
                    var5 = function(arg0, arg1, arg2) { // Original name: i, environment: var0
                        var3 = arg0;
                        var15 = arg1;
                        var2 = var3.set;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var11 = 5;
                        var1 = var14[var11];
                        var0 = undefined;
                        var6 = var13.bind(var0)(var1);
                        var5 = var6.withRepeat;
                        var1 = var14[var11];
                        var9 = var13.bind(var0)(var1);
                        var8 = var9.withSequence;
                        var1 = var14[var11];
                        var17 = var13.bind(var0)(var1);
                        var12 = var17.withDelay;
                        var7 = _closure2_slot2;
                        var1 = 6;
                        var4 = var14[var1];
                        var19 = var13.bind(var0)(var4);
                        var18 = var19.withTiming;
                        var4 = {};
                        var16 = 0;
                        var4.duration = var16;
                        var4 = var18.bind(var19)(var15, var4);
                        var7 = var12.bind(var17)(var7, var4);
                        var4 = var14[var11];
                        var18 = var13.bind(var0)(var4);
                        var17 = var18.withDelay;
                        var12 = _closure2_slot1;
                        var4 = var14[var11];
                        var21 = var13.bind(var0)(var4);
                        var20 = var21.withSequence;
                        var4 = var14[var1];
                        var23 = var13.bind(var0)(var4);
                        var22 = var23.withTiming;
                        var19 = {};
                        var24 = 350;
                        var19.duration = var24;
                        var4 = arg2;
                        var19 = var22.bind(var23)(var4, var19);
                        var4 = var14[var1];
                        var23 = var13.bind(var0)(var4);
                        var22 = var23.withTiming;
                        var4 = {};
                        var4.duration = var24;
                        var4 = var22.bind(var23)(var15, var4);
                        var4 = var20.bind(var21)(var19, var4);
                        var4 = var17.bind(var18)(var12, var4);
                        var11 = var14[var11];
                        var12 = var13.bind(var0)(var11);
                        var11 = var12.withDelay;
                        var10 = _closure2_slot3;
                        var1 = var14[var1];
                        var14 = var13.bind(var0)(var1);
                        var13 = var14.withTiming;
                        var1 = {};
                        var1.duration = var16;
                        var1 = var13.bind(var14)(var15, var1);
                        var1 = var11.bind(var12)(var10, var1);
                        var4 = var8.bind(var9)(var7, var4, var1);
                        var1 = -1;
                        var1 = var5.bind(var6)(var4, var1);
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var3 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 5;
                    var6 = var8[var1];
                    var4 = undefined;
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.withRepeat;
                    var3.withRepeat = var6;
                    var6 = var8[var1];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.withSequence;
                    var3.withSequence = var6;
                    var1 = var8[var1];
                    var1 = var7.bind(var4)(var1);
                    var1 = var1.withDelay;
                    var3.withDelay = var1;
                    var6 = _closure2_slot2;
                    var3.sequenceStartDelay = var6;
                    var6 = 6;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.withTiming;
                    var3.withTiming = var6;
                    var6 = _closure2_slot1;
                    var3.delay = var6;
                    var6 = 350;
                    var3.animationTimeMs = var6;
                    var6 = _closure2_slot3;
                    var3.sequenceEndDelay = var6;
                    var5.__closure = var3;
                    var3 = 377125103421.0;
                    var5.__workletHash = var3;
                    var2 = _closure1_slot7;
                    var5.__initData = var2;
                    var6 = _closure2_slot4;
                    var2 = 0.4;
                    var3 = 1;
                    var2 = var5.bind(var4)(var6, var2, var3);
                    var2 = _closure2_slot0;
                    if (var2) {
                        _fun50924_ip = 233;
                        continue _fun50924
                    }
                case 212:
                    var2 = _closure2_slot5;
                    var1 = 0.75;
                    var1 = var5.bind(var4)(var2, var1, var3);
                case 233:
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var1 = var4[var2];
                        var0 = undefined;
                        var7 = var3.bind(var0)(var1);
                        var6 = var7.cancelAnimation;
                        var5 = _closure2_slot4;
                        var5 = var6.bind(var7)(var5);
                        var2 = var4[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.cancelAnimation;
                        var1 = _closure2_slot5;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var5 = var13.bind(var14)(var5, var9);
        var5 = var7[var0];
        var8 = var8.bind(var3)(var5);
        var5 = var8.useAnimatedStyle;
        var2 = function() { // Original name: p, environment: var2
            _fun50927: for (var _fun50927_ip = 0;;) switch (_fun50927_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure2_slot4;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var0.opacity = var1;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    if (var3) {
                        _fun50927_ip = 62;
                        continue _fun50927
                    }
                case 31:
                    var3 = {};
                    var4 = _closure2_slot5;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var3.scale = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
                case 62:
                    var0.transform = var1;
                    return var0;
            }
        };
        var9 = {};
        var9.opacityValue = var12;
        var9.disableScale = var11;
        var9.scaleValue = var10;
        var2.__closure = var9;
        var9 = 5071157079925.0;
        var2.__workletHash = var9;
        var9 = _closure1_slot8;
        var2.__initData = var9;
        var5 = var5.bind(var8)(var2);
        var2 = _closure1_slot5;
        var1 = _closure1_slot1;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var7 = var4.typingIndicatorDot;
        var4 = new Array(3);
        var4[0] = var7;
        var4[1] = var6;
        var4[2] = var5;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var10 = 4;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'flexDirection': 'row',
        'marginRight': 4
    };
    var3.typingIndicator = var9;
    var9 = {
        'backgroundColor': null,
        'borderRadius': null,
        'marginRight': 2,
        'height': 6,
        'width': 6
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var3.typingIndicatorDot = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var7 = 'function EllipsisTsx1(value,fromValue,toValue){const{withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay}=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));}';
    var3.code = var7;
    var _closure1_slot7 = var3;
    var3 = {};
    var7 = 'function EllipsisTsx2(){const{opacityValue,disableScale,scaleValue}=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};}';
    var3.code = var7;
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: Ellipsis, environment: var1
        var0 = arg0;
        var1 = var0.dotStyle;
        var _closure2_slot0 = var1;
        var6 = var0.style;
        var0 = var0.disableScale;
        var _closure2_slot1 = var0;
        var1 = _closure1_slot6;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var7 = var5.typingIndicator;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var0.style = var5;
        var5 = false;
        var0.collapsable = var5;
        var6 = [0, 1, 2];
        var5 = var6.map;
        var4 = function(arg0, arg1, arg2) { // Environment: var4
            var4 = arg0;
            var3 = _closure1_slot5;
            var2 = _closure1_slot9;
            var1 = {};
            var6 = 233.33333333333334;
            var0 = var4 * var6;
            var1.delay = var0;
            var5 = 116.66666666666667;
            var1.sequenceStartDelay = var5;
            var0 = arg2;
            var7 = var0.length;
            var0 = 1;
            var0 = var7 - var0;
            var0 = var0 - var4;
            var0 = var6 * var0;
            var0 = var5 + var0;
            var1.sequenceEndDelay = var0;
            var5 = _closure2_slot0;
            var1.dotStyle = var5;
            var0 = _closure2_slot1;
            var1.disableScale = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/Ellipsis.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3679, 4056, 2]);