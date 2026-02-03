// design/components/Button/native/ButtonEllipsis.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.variant;
        var8 = var0.size;
        var5 = var0.offset;
        var _closure2_slot0 = var5;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 6;
        var0 = var6[var0];
        var3 = undefined;
        var4 = var7.bind(var3)(var0);
        var0 = var4.useForegroundColor;
        var4 = var0.bind(var4)(var9);
        var0 = _closure1_slot6;
        var4 = var0.bind(var3)(var8, var5, var4);
        var0 = 2;
        var5 = var6[var0];
        var9 = var7.bind(var3)(var5);
        var8 = var9.useSharedValue;
        var5 = 0.4;
        var10 = var8.bind(var9)(var5);
        var _closure2_slot1 = var10;
        var5 = var6[var0];
        var9 = var7.bind(var3)(var5);
        var8 = var9.useSharedValue;
        var5 = 0.75;
        var9 = var8.bind(var9)(var5);
        var _closure2_slot2 = var9;
        var5 = 7;
        var5 = var6[var5];
        var11 = var7.bind(var3)(var5);
        var8 = var11.useMountLayoutEffect;
        var5 = function() { // Environment: var2
            var7 = _closure2_slot1;
            var6 = var7.set;
            var2 = _closure1_slot8;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = 1;
            var2 = var2.bind(var4)(var5, var3);
            var2 = var6.bind(var7)(var2);
            var2 = _closure2_slot2;
            var1 = var2.set;
            var0 = _closure1_slot8;
            var0 = var0.bind(var4)(var5, var3);
            var0 = var1.bind(var2)(var0);
            var0 = function() { // Environment: var0
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 2;
                var1 = var4[var2];
                var0 = undefined;
                var7 = var3.bind(var0)(var1);
                var6 = var7.cancelAnimation;
                var5 = _closure2_slot1;
                var5 = var6.bind(var7)(var5);
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.cancelAnimation;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            return var0;
        };
        var5 = var8.bind(var11)(var5);
        var5 = var6[var0];
        var7 = var7.bind(var3)(var5);
        var5 = var7.useAnimatedStyle;
        var2 = function() {
            var0 = {};
            var3 = _closure2_slot1;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var0.opacity = var2;
            var2 = {};
            var3 = _closure2_slot2;
            var1 = var3.get;
            var1 = var1.bind(var3)();
            var2.scale = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var0.transform = var1;
            return var0;
        };
        var8 = {};
        var8.opacity = var10;
        var8.scale = var9;
        var2.__closure = var8;
        var8 = 13371762734705.0;
        var2.__workletHash = var8;
        var8 = _closure1_slot9;
        var2.__initData = var8;
        var5 = var5.bind(var7)(var2);
        var2 = _closure1_slot3;
        var1 = _closure1_slot1;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var6 = var4.circle;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 500;
    var3.duration = var6;
    var6 = 2;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var8 = var7.Easing;
    var7 = var8.inOut;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.Easing;
    var6 = var6.quad;
    var6 = var7.bind(var8)(var6);
    var3.easing = var6;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun37658: for (var _fun37658_ip = 0;;) switch (_fun37658_ip) {
            case 0:
                var1 = arg0;
                var0 = 'lg';
                if (!(var0 !== var1)) {
                    _fun37658_ip = 56;
                    continue _fun37658
                }
            case 11:
                var0 = 'md';
                if (!(var0 !== var1)) {
                    _fun37658_ip = 48;
                    continue _fun37658
                }
            case 19:
                var0 = 'sm';
                if (!(var0 !== var1)) {
                    _fun37658_ip = 48;
                    continue _fun37658
                }
            case 27:
                var3 = 4;
                var0 = 'xs';
                var2 = undefined;
                if (!(var0 === var1)) {
                    _fun37658_ip = 62;
                    continue _fun37658
                }
            case 40:
                var2 = 5;
                var3 = 3;
                _fun37658_ip = 62;
                continue _fun37658;
            case 48:
                var2 = 6;
                var3 = 4;
                _fun37658_ip = 62;
                continue _fun37658;
            case 56:
                var2 = 8;
                var3 = 4;
            case 62:
                var0 = {};
                var1 = {};
                var1.width = var2;
                var1.height = var2;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.radii;
                var2 = var2.round;
                var1.borderRadius = var2;
                var5 = 2;
                var4 = arg1;
                var2 = 0;
                if (!(var5 !== var4)) {
                    _fun37658_ip = 128;
                    continue _fun37658
                }
            case 125:
                var2 = var3;
            case 128:
                var1.marginEnd = var2;
                var2 = arg2;
                var1.backgroundColor = var2;
                var0.circle = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = "function withEllipsisAnimation_ButtonEllipsisNativeTsx1(offset,value){const{ELLIPSIS_APPEAR_DURATION,withDelay,withRepeat,withTiming,ELLIPSIS_APPEAR_TIMING}=this.__closure;const animationTimeMs=ELLIPSIS_APPEAR_DURATION;const animationStaggerTimeMs=animationTimeMs/3;return withDelay(offset*animationStaggerTimeMs,withRepeat(withTiming(value,ELLIPSIS_APPEAR_TIMING,'animate-always'),-1,true));}";
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 2;
            var1 = var9[var4];
            var5 = undefined;
            var3 = var8.bind(var5)(var1);
            var2 = var3.withDelay;
            var6 = 166.66666666666666;
            var1 = arg0;
            var1 = var6 * var1;
            var4 = var9[var4];
            var7 = var8.bind(var5)(var4);
            var6 = var7.withRepeat;
            var4 = 5;
            var4 = var9[var4];
            var9 = var8.bind(var5)(var4);
            var8 = var9.withTiming;
            var5 = _closure1_slot5;
            var4 = arg1;
            var0 = 'animate-always';
            var5 = var8.bind(var9)(var4, var5, var0);
            var4 = -1;
            var0 = true;
            var0 = var6.bind(var7)(var5, var4, var0);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2 = {};
        var1 = 500;
        var2.ELLIPSIS_APPEAR_DURATION = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 2;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.withDelay;
        var2.withDelay = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.withRepeat;
        var2.withRepeat = var3;
        var3 = 5;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.withTiming;
        var2.withTiming = var3;
        var3 = _closure1_slot5;
        var2.ELLIPSIS_APPEAR_TIMING = var3;
        var0.__closure = var2;
        var2 = 2181731162311.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function ButtonEllipsisNativeTsx2(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Button/native/ButtonEllipsis.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var8 = arg0;
        var3 = _closure1_slot4;
        var1 = _closure1_slot1;
        var0 = _closure1_slot2;
        var9 = 2;
        var0 = var0[var9];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.View;
        var0 = {};
        var4 = {};
        var6 = 'row';
        var4.flexDirection = var6;
        var0.style = var4;
        var6 = _closure1_slot3;
        var7 = _closure1_slot10;
        var4 = {};
        var10 = 0;
        var4.offset = var10;
        var13 = var4;
        var12 = var8;
        var10 = copyDataProperties(var13, var12);
        var6 = var6.bind(var2)(var7, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var10 = _closure1_slot3;
        var6 = {};
        var11 = 1;
        var6.offset = var11;
        var13 = var6;
        var12 = var8;
        var11 = copyDataProperties(var13, var12);
        var6 = var10.bind(var2)(var7, var6);
        var4[1] = var6;
        var6 = _closure1_slot3;
        var5 = {};
        var5.offset = var9;
        var13 = var5;
        var12 = var8;
        var8 = copyDataProperties(var13, var12);
        var5 = var6.bind(var2)(var7, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.Ellipsis = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3720, 1297, 671, 4097, 4089, 4103, 2]);