// design/components/Sheet/native/BottomSheetBackdrop.native.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var7 = var8.create;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot4 = var3;
    var3 = {};
    var7 = 'function BottomSheetBackdropNativeTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}';
    var3.code = var7;
    var _closure1_slot5 = var3;
    var3 = {};
    var7 = 'function BottomSheetBackdropNativeTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity}=this.__closure;return{opacity:interpolate(animatedIndex.get(),[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity])};}';
    var3.code = var7;
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun46430: for (var _fun46430_ip = 0;;) switch (_fun46430_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.animatedIndex;
                var _closure2_slot0 = var18;
                var15 = var1.opacity;
                var4 = undefined;
                if (!(var15 === var4)) {
                    _fun46430_ip = 29;
                    continue _fun46430
                }
            case 26:
                var15 = 1;
            case 29:
                var _closure2_slot1 = var15;
                var16 = var1.appearsOnIndex;
                if (!(var16 === var4)) {
                    _fun46430_ip = 45;
                    continue _fun46430
                }
            case 43:
                var16 = 0;
            case 45:
                var _closure2_slot2 = var16;
                var17 = var1.disappearsOnIndex;
                if (!(var17 === var4)) {
                    _fun46430_ip = 65;
                    continue _fun46430
                }
            case 59:
                var17 = -1;
            case 65:
                var _closure2_slot3 = var17;
                var3 = var1.pressBehavior;
                if (!(var3 === var4)) {
                    _fun46430_ip = 83;
                    continue _fun46430
                }
            case 79:
                var3 = 'close';
            case 83:
                var _closure2_slot4 = var3;
                var6 = var1.onPress;
                var _closure2_slot5 = var6;
                var13 = var1.style;
                var _closure2_slot6 = var13;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var7 = 3;
                var7 = var5[var7];
                var8 = var2.bind(var4)(var7);
                var7 = var8.useBottomSheet;
                var7 = var7.bind(var8)();
                var10 = var7.snapToIndex;
                _closure2_slot7 = var10;
                var9 = var7.close;
                _closure2_slot8 = var9;
                var11 = _closure1_slot2;
                var8 = var11.useCallback;
                var7 = new Array(5);
                var7[0] = var10;
                var7[1] = var9;
                var7[2] = var17;
                var7[3] = var3;
                var7[4] = var6;
                var6 = function() { // Environment: var0
                    _fun46431: for (var _fun46431_ip = 0;;) switch (_fun46431_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun46431_ip = 23;
                                continue _fun46431
                            }
                        case 13:
                            var2 = _closure2_slot5;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 23:
                            var2 = _closure2_slot4;
                            var1 = 'close';
                            if (!(var1 !== var2)) {
                                _fun46431_ip = 96;
                                continue _fun46431
                            }
                        case 35:
                            var2 = _closure2_slot4;
                            var1 = 'collapse';
                            if (!(var1 !== var2)) {
                                _fun46431_ip = 79;
                                continue _fun46431
                            }
                        case 47:
                            var1 = _closure2_slot4;
                            var2 = 'number';
                            var1 = typeof var1;
                            if (!(var2 === var1)) {
                                _fun46431_ip = 106;
                                continue _fun46431
                            }
                        case 62:
                            var3 = _closure2_slot7;
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun46431_ip = 106;
                            continue _fun46431;
                        case 79:
                            var3 = _closure2_slot7;
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun46431_ip = 106;
                            continue _fun46431;
                        case 96:
                            var1 = _closure2_slot8;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 106:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var8.bind(var11)(var6, var7);
                _closure2_slot9 = var9;
                var7 = 4;
                var6 = var5[var7];
                var6 = var2.bind(var4)(var6);
                var8 = var6.Gesture;
                var6 = var8.Tap;
                var10 = var6.bind(var8)();
                var8 = var10.onEnd;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.runOnJS;
                    var1 = _closure2_slot9;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var12 = {};
                var19 = 5;
                var14 = var5[var19];
                var14 = var2.bind(var4)(var14);
                var14 = var14.runOnJS;
                var12.runOnJS = var14;
                var12.handleOnPress = var9;
                var6.__closure = var12;
                var12 = 3995467602852.0;
                var6.__workletHash = var12;
                var12 = _closure1_slot5;
                var6.__initData = var12;
                var6 = var8.bind(var10)(var6);
                var8 = var5[var19];
                var12 = var2.bind(var4)(var8);
                var10 = var12.useAnimatedStyle;
                var8 = function() {
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.interpolate;
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = new Array(3);
                    var6 = -1;
                    var2[0] = var6;
                    var6 = _closure2_slot3;
                    var2[1] = var6;
                    var6 = _closure2_slot2;
                    var2[2] = var6;
                    var6 = _closure2_slot1;
                    var1 = [0, 0];
                    var1[2] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var0.opacity = var1;
                    return var0;
                };
                var14 = {};
                var19 = var5[var19];
                var19 = var2.bind(var4)(var19);
                var19 = var19.interpolate;
                var14.interpolate = var19;
                var14.animatedIndex = var18;
                var14.disappearsOnIndex = var17;
                var14.appearsOnIndex = var16;
                var14.opacity = var15;
                var8.__closure = var14;
                var14 = 1140766381376.0;
                var8.__workletHash = var14;
                var14 = _closure1_slot6;
                var8.__initData = var14;
                var12 = var10.bind(var12)(var8);
                _closure2_slot10 = var12;
                var10 = var11.useMemo;
                var8 = new Array(2);
                var8[0] = var13;
                var8[1] = var12;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var1 = var0.container;
                    var0 = new Array(3);
                    var0[0] = var1;
                    var2 = _closure2_slot6;
                    var0[1] = var2;
                    var1 = _closure2_slot10;
                    var0[2] = var1;
                    return var0;
                };
                var10 = var10.bind(var11)(var0, var8);
                var8 = _closure1_slot3;
                var0 = 6;
                var0 = var5[var0];
                var0 = var2.bind(var4)(var0);
                var5 = var0.Backdrop;
                var0 = {};
                var2 = 'none';
                var0.blur = var2;
                var0.style = var10;
                var0.onDismiss = var9;
                var9 = true;
                var0['aria-hidden'] = var9;
                var5 = var8.bind(var4)(var5, var0);
                var0 = var5;
                if (!(var2 !== var3)) {
                    _fun46430_ip = 562;
                    continue _fun46430
                }
            case 518:
                var3 = _closure1_slot3;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var2.bind(var4)(var1);
                var2 = var1.GestureDetector;
                var1 = {};
                var1.gesture = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 562:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Sheet/native/BottomSheetBackdrop.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.BottomSheetBackdrop = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4935, 4963, 3720, 4071, 2]);