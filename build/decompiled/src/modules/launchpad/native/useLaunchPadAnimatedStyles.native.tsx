// modules/launchpad/native/useLaunchPadAnimatedStyles.native.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.LAUNCH_PAD_SPRING_CONFIG;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.isAndroid;
    var3 = var3.bind(var6)();
    var _closure1_slot4 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'width': '100%',
        'zIndex': 1
    };
    var3.launchPad = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
        'backgroundColor': '#000'
    };
    var3.launchPadCover = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = "function useLaunchPadAnimatedStylesNativeTsx1(){const{withSpring,interpolate,launchPadSharedState,windowDimensions,LAUNCH_PAD_SPRING_CONFIG,gestureState,launchPadShown,IS_ANDROID,height}=this.__closure;return{transform:[{translateX:withSpring(interpolate(launchPadSharedState.get(),[0,1],[windowDimensions.get().width-16,0]),LAUNCH_PAD_SPRING_CONFIG,'animate-always',function(finished){'worklet';if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}})}],bottom:IS_ANDROID?0:height.get()};}";
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function useLaunchPadAnimatedStylesNativeTsx2(finished){const{gestureState,launchPadSharedState,launchPadShown}=this.__closure;if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = "function useLaunchPadAnimatedStylesNativeTsx3(){const{withSpring,interpolate,launchPadSharedState,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,0.6]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')};}";
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/useLaunchPadAnimatedStyles.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var8 = var1.launchPadSharedState;
        var _closure2_slot0 = var8;
        var16 = var1.gestureState;
        var _closure2_slot1 = var16;
        var15 = var1.launchPadShown;
        var _closure2_slot2 = var15;
        var3 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 3;
        var2 = var12[var2];
        var11 = undefined;
        var2 = var3.bind(var11)(var2);
        var14 = var2.bind(var11)();
        var _closure2_slot3 = var14;
        var2 = 4;
        var2 = var12[var2];
        var2 = var3.bind(var11)(var2);
        var7 = var2.bind(var11)();
        var _closure2_slot4 = var7;
        var2 = 5;
        var2 = var12[var2];
        var2 = var3.bind(var11)(var2);
        var2 = var2.bind(var11)();
        var3 = var2.top;
        var10 = _closure1_slot0;
        var9 = 6;
        var2 = var12[var9];
        var5 = var10.bind(var11)(var2);
        var4 = var5.useAnimatedStyle;
        var2 = function() {
            _fun110003: for (var _fun110003_ip = 0;;) switch (_fun110003_ip) {
                case 0:
                    var0 = {};
                    var5 = {};
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 7;
                    var1 = var6[var1];
                    var2 = undefined;
                    var10 = var4.bind(var2)(var1);
                    var9 = var10.withSpring;
                    var1 = 6;
                    var1 = var6[var1];
                    var12 = var4.bind(var2)(var1);
                    var8 = var12.interpolate;
                    var11 = _closure2_slot0;
                    var1 = var11.get;
                    var7 = var1.bind(var11)();
                    var4 = _closure2_slot4;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var4 = var1.width;
                    var1 = 16;
                    var1 = var4 - var1;
                    var6 = new Array(2);
                    var6[0] = var1;
                    var1 = 0;
                    var6[1] = var1;
                    var4 = [0, 1];
                    var16 = var8.bind(var12)(var7, var4, var6);
                    var15 = _closure1_slot3;
                    var6 = function arg0() {
                        _fun110004: for (var _fun110004_ip = 0;;) switch (_fun110004_ip) {
                            case 0:
                                var0 = arg0;
                                if (!var0) {
                                    _fun110004_ip = 31;
                                    continue _fun110004
                                }
                            case 6:
                                var2 = _closure2_slot1;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.active;
                                var0 = !var1;
                            case 31:
                                if (!var0) {
                                    _fun110004_ip = 113;
                                    continue _fun110004
                                }
                            case 34:
                                var2 = _closure2_slot0;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var3 = 1;
                                var1 = var3 !== var1;
                                if (!var1) {
                                    _fun110004_ip = 79;
                                    continue _fun110004
                                }
                            case 60:
                                var4 = _closure2_slot0;
                                var2 = var4.get;
                                var4 = var2.bind(var4)();
                                var2 = 0;
                                var1 = var2 !== var4;
                            case 79:
                                if (var1) {
                                    _fun110004_ip = 113;
                                    continue _fun110004
                                }
                            case 82:
                                var2 = _closure2_slot2;
                                var1 = var2.set;
                                var4 = _closure2_slot0;
                                var0 = var4.get;
                                var0 = var0.bind(var4)();
                                var0 = var3 === var0;
                                var0 = var1.bind(var2)(var0);
                            case 113:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = {};
                    var12 = _closure2_slot1;
                    var4.gestureState = var12;
                    var4.launchPadSharedState = var11;
                    var11 = _closure2_slot2;
                    var4.launchPadShown = var11;
                    var6.__closure = var4;
                    var4 = 7028378249389.0;
                    var6.__workletHash = var4;
                    var4 = _closure1_slot7;
                    var6.__initData = var4;
                    var14 = 'animate-always';
                    var17 = var10;
                    var13 = var6;
                    var4 = var17[var9](var16, var15, var14, var13, var12);
                    var5.translateX = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var0.transform = var4;
                    var3 = _closure1_slot4;
                    if (var3) {
                        _fun110003_ip = 247;
                        continue _fun110003
                    }
                case 234:
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var1 = var2.bind(var3)();
                case 247:
                    var0.bottom = var1;
                    return var0;
            }
        };
        var6 = {};
        var13 = 7;
        var17 = var12[var13];
        var17 = var10.bind(var11)(var17);
        var17 = var17.withSpring;
        var6.withSpring = var17;
        var17 = var12[var9];
        var17 = var10.bind(var11)(var17);
        var17 = var17.interpolate;
        var6.interpolate = var17;
        var6.launchPadSharedState = var8;
        var6.windowDimensions = var7;
        var7 = _closure1_slot3;
        var6.LAUNCH_PAD_SPRING_CONFIG = var7;
        var6.gestureState = var16;
        var6.launchPadShown = var15;
        var15 = _closure1_slot4;
        var6.IS_ANDROID = var15;
        var6.height = var14;
        var2.__closure = var6;
        var6 = 1628632614770.0;
        var2.__workletHash = var6;
        var6 = _closure1_slot6;
        var2.__initData = var6;
        var2 = var4.bind(var5)(var2);
        var4 = var12[var9];
        var5 = var10.bind(var11)(var4);
        var4 = var5.useAnimatedStyle;
        var0 = function() {
            var0 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var3 = undefined;
            var5 = var6.bind(var3)(var2);
            var4 = var5.withSpring;
            var2 = 6;
            var2 = var7[var2];
            var8 = var6.bind(var3)(var2);
            var7 = var8.interpolate;
            var3 = _closure2_slot0;
            var2 = var3.get;
            var6 = var2.bind(var3)();
            var3 = [0, 1];
            var2 = [0, 0.6];
            var3 = var7.bind(var8)(var6, var3, var2);
            var2 = _closure1_slot3;
            var1 = 'animate-always';
            var1 = var4.bind(var5)(var3, var2, var1);
            var0.opacity = var1;
            return var0;
        };
        var6 = {};
        var13 = var12[var13];
        var13 = var10.bind(var11)(var13);
        var13 = var13.withSpring;
        var6.withSpring = var13;
        var9 = var12[var9];
        var9 = var10.bind(var11)(var9);
        var9 = var9.interpolate;
        var6.interpolate = var9;
        var6.launchPadSharedState = var8;
        var6.LAUNCH_PAD_SPRING_CONFIG = var7;
        var0.__closure = var6;
        var6 = 6964438968188.0;
        var0.__workletHash = var6;
        var6 = _closure1_slot8;
        var0.__initData = var6;
        var5 = var4.bind(var5)(var0);
        var0 = {};
        var1 = _closure1_slot5;
        var6 = var1.launchPadCover;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.launchPadCoverStyles = var4;
        var4 = var1.launchPad;
        var1 = new Array(3);
        var1[0] = var4;
        var1[1] = var2;
        var2 = {};
        var2.paddingTop = var3;
        var1[2] = var2;
        var0.launchPadStyles = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 9865, 478, 14175, 13046, 1568, 3720, 4081, 2]);