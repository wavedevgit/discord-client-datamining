// uikit-native/ShinyButton.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppState;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'hidden';
    var8.overflow = var9;
    var3.shinyButton = var8;
    var8 = {
        'width': '100%',
        'height': '100%',
        'position': 'absolute',
        'overflow': 'hidden'
    };
    var3.shineContainer = var8;
    var8 = {
        'width': 56,
        'height': '500%',
        'transform': null,
        'backgroundColor': 'rgba(255,255,255,0.1)',
        'top': '-100%',
        'alignItems': 'center'
    };
    var10 = {};
    var9 = '30deg';
    var10.rotate = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var8.transform = var9;
    var3.shine = var8;
    var8 = {
        'width': 16,
        'height': '100%',
        'backgroundColor': 'rgba(255,255,255,0.1)'
    };
    var3.shineInner = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = "function ShinyButtonTsx1(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};}";
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/ShinyButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61666: for (var _fun61666_ip = 0;;) switch (_fun61666_ip) {
            case 0:
                var5 = arg0;
                var8 = var5.style;
                var6 = var5.disabled;
                var _closure2_slot0 = var6;
                var0 = var5.submitting;
                var _closure2_slot1 = var0;
                var0 = var5.shineDisabled;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun61666_ip = 43;
                    continue _fun61666
                }
            case 41:
                var0 = false;
            case 43:
                var _closure2_slot2 = var0;
                var0 = var5.shineStyle;
                var _closure2_slot3 = var0;
                var0 = var5.shineInnerStyle;
                var _closure2_slot4 = var0;
                var1 = {
                    'style': 0,
                    'disabled': 0,
                    'submitting': 0,
                    'shineDisabled': 0,
                    'shineStyle': 0,
                    'shineInnerStyle': 0
                };
                var2 = null;
                var22 = var1;
                var21 = null;
                var0 = silentSetPrototypeOf(var22, var21);
                var10 = 0;
                var22 = {};
                var21 = var5;
                var20 = var1;
                var7 = copyDataProperties(var22, var21, var20);
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var0 = function arg0() {
                    var2 = _closure2_slot7;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.width;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var _closure2_slot12 = var0;
                var1 = _closure1_slot8;
                var5 = var1.bind(var3)();
                _closure2_slot5 = var5;
                var11 = _closure1_slot4;
                var1 = var11.useState;
                var1 = var1.bind(var11)(var2);
                var15 = _closure1_slot3;
                var12 = 2;
                var1 = var15.bind(var3)(var1, var12);
                var14 = var1[var10];
                _closure2_slot6 = var14;
                var2 = 1;
                var1 = var1[var2];
                _closure2_slot7 = var1;
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 6;
                var1 = var9[var1];
                var19 = var13.bind(var3)(var1);
                var18 = var19.useStateFromStores;
                var1 = _closure1_slot6;
                var17 = new Array(1);
                var17[0] = var1;
                var16 = function() { // Environment: var4
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var18.bind(var19)(var17, var16, var1);
                _closure2_slot8 = var1;
                var16 = var11.useState;
                var1 = _closure1_slot5;
                var17 = var1.currentState;
                var1 = 'active';
                var1 = var1 === var17;
                var1 = var16.bind(var11)(var1);
                var1 = var15.bind(var3)(var1, var12);
                var10 = var1[var10];
                _closure2_slot9 = var10;
                var1 = var1[var2];
                _closure2_slot10 = var1;
                var10 = var11.useEffect;
                var2 = function() { // Environment: var4
                    var4 = _closure1_slot5;
                    var3 = var4.addEventListener;
                    var2 = 'change';
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot10;
                        var0 = undefined;
                        var3 = 'active';
                        var1 = arg0;
                        var1 = var3 === var1;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.remove;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var10.bind(var11)(var2, var1);
                var12 = 7;
                var1 = var9[var12];
                var10 = var13.bind(var3)(var1);
                var2 = var10.useAnimatedStyle;
                var1 = function() {
                    _fun61672: for (var _fun61672_ip = 0;;) switch (_fun61672_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun61672_ip = 218;
                                continue _fun61672
                            }
                        case 16:
                            var0 = {};
                            var2 = {};
                            var12 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var9 = 7;
                            var3 = var14[var9];
                            var11 = undefined;
                            var5 = var12.bind(var11)(var3);
                            var4 = var5.withRepeat;
                            var3 = var14[var9];
                            var7 = var12.bind(var11)(var3);
                            var6 = var7.withSequence;
                            var8 = 8;
                            var3 = var14[var8];
                            var16 = var12.bind(var11)(var3);
                            var15 = var16.withTiming;
                            var10 = {};
                            var3 = 0;
                            var10.duration = var3;
                            var3 = -100;
                            var13 = 'animate-always';
                            var3 = var15.bind(var16)(var3, var10, var13);
                            var9 = var14[var9];
                            var10 = var12.bind(var11)(var9);
                            var9 = var10.withDelay;
                            var8 = var14[var8];
                            var12 = var12.bind(var11)(var8);
                            var11 = var12.withTiming;
                            var8 = _closure2_slot6;
                            var1 = 100;
                            var8 = var8 + var1;
                            var1 = {};
                            var14 = 2000;
                            var1.duration = var14;
                            var8 = var11.bind(var12)(var8, var1, var13);
                            var1 = 750;
                            var1 = var9.bind(var10)(var1, var8);
                            var3 = var6.bind(var7)(var3, var1);
                            var1 = -1;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.translateX = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            _fun61672_ip = 248;
                            continue _fun61672;
                        case 218:
                            var1 = {};
                            var3 = {};
                            var2 = -100;
                            var3.translateX = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1.transform = var2;
                            var0 = var1;
                        case 248:
                            return var0;
                    }
                };
                var11 = {};
                var11.width = var14;
                var14 = 100;
                var11.OFFSCREEN_OFFSET = var14;
                var14 = var9[var12];
                var14 = var13.bind(var3)(var14);
                var14 = var14.withRepeat;
                var11.withRepeat = var14;
                var14 = var9[var12];
                var14 = var13.bind(var3)(var14);
                var14 = var14.withSequence;
                var11.withSequence = var14;
                var14 = 8;
                var14 = var9[var14];
                var14 = var13.bind(var3)(var14);
                var14 = var14.withTiming;
                var11.withTiming = var14;
                var12 = var9[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.withDelay;
                var11.withDelay = var12;
                var12 = 750;
                var11.INITIAL_ANIMATION_DELAY = var12;
                var12 = 2000;
                var11.ANIMATION_DURATION = var12;
                var1.__closure = var11;
                var11 = 5550564727650.0;
                var1.__workletHash = var11;
                var11 = _closure1_slot9;
                var1.__initData = var11;
                var1 = var2.bind(var10)(var1);
                _closure2_slot11 = var1;
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var0 = 9;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var22 = var0;
                var21 = var7;
                var7 = copyDataProperties(var22, var21);
                var7 = new Array(2);
                var7[0] = var8;
                var5 = var5.shinyButton;
                var7[1] = var5;
                var5 = 'style';
                var0[var5] = var7;
                var5 = 'disabled';
                var0[var5] = var6;
                var5 = function() {
                    _fun61673: for (var _fun61673_ip = 0;;) switch (_fun61673_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (var1) {
                                _fun61673_ip = 256;
                                continue _fun61673
                            }
                        case 15:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (var1) {
                                _fun61673_ip = 256;
                                continue _fun61673
                            }
                        case 27:
                            var1 = _closure2_slot8;
                            var0 = null;
                            if (var1) {
                                _fun61673_ip = 256;
                                continue _fun61673
                            }
                        case 39:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (var1) {
                                _fun61673_ip = 256;
                                continue _fun61673
                            }
                        case 51:
                            var1 = _closure2_slot9;
                            var0 = null;
                            if (!var1) {
                                _fun61673_ip = 256;
                                continue _fun61673
                            }
                        case 63:
                            var4 = _closure1_slot7;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 7;
                            var1 = var9[var7];
                            var3 = undefined;
                            var1 = var8.bind(var3)(var1);
                            var2 = var1.View;
                            var1 = {};
                            var5 = _closure2_slot12;
                            var1.onLayout = var5;
                            var5 = _closure2_slot5;
                            var6 = var5.shineContainer;
                            var5 = new Array(2);
                            var5[0] = var6;
                            var6 = _closure2_slot11;
                            var5[1] = var6;
                            var1.style = var5;
                            var5 = var9[var7];
                            var5 = var8.bind(var3)(var5);
                            var6 = var5.View;
                            var5 = {};
                            var11 = _closure2_slot5;
                            var12 = var11.shine;
                            var11 = new Array(2);
                            var11[0] = var12;
                            var12 = _closure2_slot3;
                            var11[1] = var12;
                            var5.style = var11;
                            var7 = var9[var7];
                            var7 = var8.bind(var3)(var7);
                            var8 = var7.View;
                            var7 = {};
                            var9 = _closure2_slot5;
                            var11 = var9.shineInner;
                            var9 = new Array(2);
                            var9[0] = var11;
                            var10 = _closure2_slot4;
                            var9[1] = var10;
                            var7.style = var9;
                            var7 = var4.bind(var3)(var8, var7);
                            var5.children = var7;
                            var5 = var4.bind(var3)(var6, var5);
                            var1.children = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 256:
                            return var0;
                    }
                };
                var4 = 'renderShine';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 33, 1297, 566, 3722, 4098, 4876, 2]);