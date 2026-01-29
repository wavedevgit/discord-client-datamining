// modules/media_viewer/native/useMediaViewerPanGesture.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = {
        'damping': 15,
        'mass': 1,
        'stiffness': 250,
        'overshootClamping': true,
        'restSpeedThreshold': 0.001,
        'restDisplacementThreshold': 0.001
    };
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 'function useMediaViewerPanGestureTsx1(){const{runOnJS,handleClose}=this.__closure;runOnJS(handleClose)();}';
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function useMediaViewerPanGestureTsx2(){const{isInteracting,velocity,swipeVelocityThreshold,runOnJS,dismiss,translatePos,withSpring,SPRING_CONFIG}=this.__closure;isInteracting.set(false);const willClose=Math.abs(velocity.get())>swipeVelocityThreshold;if(willClose){runOnJS(dismiss)();}else if(translatePos.get()!==0){translatePos.set(withSpring(0,{velocity:velocity.get(),...SPRING_CONFIG}));}}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function useMediaViewerPanGestureTsx3(_,manager){const{enabled}=this.__closure;if(!enabled.get()){manager.fail();}}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function useMediaViewerPanGestureTsx4({velocityY:velocityY,translationY:translationY}){const{translatePos,start,velocity}=this.__closure;translatePos.set(translationY+start.get().y);velocity.set(velocityY);}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function useMediaViewerPanGestureTsx5(){const{start,translatePos,isInteracting}=this.__closure;start.set({x:0,y:translatePos.get()});isInteracting.set(true);}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/useMediaViewerPanGesture.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1, arg2) { // Original name: useMediaViewerPanGestureConfig, environment: var1
        var12 = arg0;
        var7 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var12;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var1;
        var6 = _closure1_slot0;
        var13 = _closure1_slot2;
        var3 = 1;
        var5 = var13[var3];
        var4 = undefined;
        var8 = var6.bind(var4)(var5);
        var5 = var8.useSharedValue;
        var9 = false;
        var10 = var5.bind(var8)(var9);
        var _closure2_slot3 = var10;
        var5 = var13[var3];
        var8 = var6.bind(var4)(var5);
        var5 = var8.useSharedValue;
        var9 = var5.bind(var8)(var9);
        var _closure2_slot4 = var9;
        var5 = var13[var3];
        var8 = var6.bind(var4)(var5);
        var5 = var8.useSharedValue;
        var14 = 0;
        var8 = var5.bind(var8)(var14);
        var _closure2_slot5 = var8;
        var5 = var13[var3];
        var11 = var6.bind(var4)(var5);
        var5 = var11.useSharedValue;
        var11 = var5.bind(var11)(var14);
        var _closure2_slot6 = var11;
        var5 = var13[var3];
        var15 = var6.bind(var4)(var5);
        var14 = var15.useSharedValue;
        var5 = {
            'y': 0,
            'x': 0
        };
        var5 = var14.bind(var15)(var5);
        var _closure2_slot7 = var5;
        var3 = var13[var3];
        var6 = var6.bind(var4)(var3);
        var4 = var6.useSharedValue;
        var3 = true;
        var4 = var4.bind(var6)(var3);
        var _closure2_slot8 = var4;
        var3 = _closure1_slot3;
        var6 = var3.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            _fun76329: for (var _fun76329_ip = 0;;) switch (_fun76329_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 2;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.tryPauseCurrentVideo;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot2;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun76329_ip = 56;
                        continue _fun76329
                    }
                case 48:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var0)();
                case 56:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var2 = var1.MediaViewerAnalytics;
                    var1 = var2.markSessionCompleted;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var1 = var6.bind(var3)(var1, var2);
        var _closure2_slot9 = var1;
        var6 = var3.useCallback;
        var2 = new Array(5);
        var2[0] = var12;
        var2[1] = var1;
        var2[2] = var10;
        var2[3] = var8;
        var2[4] = var11;
        var1 = function() { // Environment: var0
            _fun76330: for (var _fun76330_ip = 0;;) switch (_fun76330_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var1 = var2.set;
                    var0 = true;
                    var0 = var1.bind(var2)(var0);
                    var1 = _closure2_slot6;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = 0;
                    if (!(!(var1 < var0))) {
                        _fun76330_ip = 44;
                        continue _fun76330
                    }
                case 38:
                    var8 = _closure2_slot0;
                    _fun76330_ip = 51;
                    continue _fun76330;
                case 44:
                    var0 = _closure2_slot0;
                    var8 = -var0;
                case 51:
                    var3 = _closure2_slot5;
                    var2 = var3.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var0 = 4;
                    var4 = var13[var0];
                    var0 = undefined;
                    var7 = var12.bind(var0)(var4);
                    var6 = var7.withSpring;
                    var5 = {};
                    var9 = _closure2_slot6;
                    var4 = var9.get;
                    var4 = var4.bind(var9)();
                    var5.velocity = var4;
                    var16 = _closure1_slot4;
                    var17 = var5;
                    var4 = copyDataProperties(var17, var16);
                    var4 = function() { // Original name: t, environment: var4
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.runOnJS;
                        var1 = _closure2_slot9;
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var9 = {};
                    var11 = 1;
                    var11 = var13[var11];
                    var11 = var12.bind(var0)(var11);
                    var11 = var11.runOnJS;
                    var9.runOnJS = var11;
                    var10 = _closure2_slot9;
                    var9.handleClose = var10;
                    var4.__closure = var9;
                    var9 = 7033730772994.0;
                    var4.__workletHash = var9;
                    var1 = _closure1_slot5;
                    var4.__initData = var1;
                    var15 = 'respect-motion-settings';
                    var18 = var7;
                    var17 = var8;
                    var16 = var5;
                    var14 = var4;
                    var1 = var18[var6](var17, var16, var15, var14, var13);
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var6 = var6.bind(var3)(var1, var2);
        var _closure2_slot10 = var6;
        var2 = var3.useMemo;
        var1 = new Array(8);
        var1[0] = var11;
        var1[1] = var10;
        var1[2] = var9;
        var1[3] = var8;
        var1[4] = var7;
        var1[5] = var6;
        var1[6] = var5;
        var1[7] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = _closure2_slot6;
            var0.velocity = var2;
            var2 = _closure2_slot3;
            var0.isClosing = var2;
            var2 = _closure2_slot4;
            var0.isInteracting = var2;
            var2 = _closure2_slot8;
            var0.overlayEnabled = var2;
            var2 = _closure2_slot5;
            var0.translatePos = var2;
            var2 = _closure2_slot1;
            var0.swipeVelocityThreshold = var2;
            var2 = _closure2_slot10;
            var0.dismiss = var2;
            var1 = _closure2_slot7;
            var0.start = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useMediaViewerPanGestureConfig = var3;
    var1 = function(arg0, arg1) { // Original name: useMediaViewerPanGesture, environment: var1
        var2 = arg0;
        var9 = arg1;
        var6 = var2.swipeVelocityThreshold;
        var _closure2_slot0 = var6;
        var1 = var2.velocity;
        var _closure2_slot1 = var1;
        var8 = var2.isInteracting;
        var _closure2_slot2 = var8;
        var5 = var2.translatePos;
        var _closure2_slot3 = var5;
        var7 = var2.start;
        var _closure2_slot4 = var7;
        var10 = var2.dismiss;
        var _closure2_slot5 = var9;
        var11 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 5;
        var3 = var4[var3];
        var4 = undefined;
        var3 = var11.bind(var4)(var3);
        var10 = var3.bind(var4)(var10);
        var _closure2_slot6 = var10;
        var3 = _closure1_slot3;
        var4 = var3.useCallback;
        var2 = new Array(7);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var2[5] = var5;
        var2[6] = var1;
        var1 = function() { // Environment: var0
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var6 = undefined;
            var1 = var7.bind(var6)(var1);
            var2 = var1.Gesture;
            var1 = var2.Pan;
            var2 = var1.bind(var2)();
            var1 = var2.maxPointers;
            var10 = 1;
            var4 = var1.bind(var2)(var10);
            var2 = var4.activeOffsetY;
            var1 = new Array(2);
            var9 = -10;
            var1[0] = var9;
            var5 = 10;
            var1[1] = var5;
            var4 = var2.bind(var4)(var1);
            var2 = var4.failOffsetX;
            var1 = new Array(2);
            var1[0] = var9;
            var1[1] = var5;
            var4 = var2.bind(var4)(var1);
            var2 = var4.onStart;
            var1 = function() { // Original name: V, environment: var0
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = {};
                var4 = 0;
                var1.x = var4;
                var5 = _closure2_slot3;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var1.y = var4;
                var1 = var2.bind(var3)(var1);
                var2 = _closure2_slot2;
                var1 = var2.set;
                var0 = true;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var13 = {};
            var11 = _closure2_slot4;
            var13.start = var11;
            var5 = _closure2_slot3;
            var13.translatePos = var5;
            var12 = _closure2_slot2;
            var13.isInteracting = var12;
            var1.__closure = var13;
            var13 = 12024094550213.0;
            var1.__workletHash = var13;
            var13 = _closure1_slot9;
            var1.__initData = var13;
            var4 = var2.bind(var4)(var1);
            var2 = var4.onUpdate;
            var1 = function(arg0) { // Original name: S, environment: var0
                var0 = arg0;
                var2 = var0.velocityY;
                var5 = var0.translationY;
                var4 = _closure2_slot3;
                var3 = var4.set;
                var6 = _closure2_slot4;
                var1 = var6.get;
                var1 = var1.bind(var6)();
                var1 = var1.y;
                var1 = var5 + var1;
                var1 = var3.bind(var4)(var1);
                var1 = _closure2_slot1;
                var0 = var1.set;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
            };
            var13 = {};
            var13.translatePos = var5;
            var13.start = var11;
            var11 = _closure2_slot1;
            var13.velocity = var11;
            var1.__closure = var13;
            var13 = 9790035695747.0;
            var1.__workletHash = var13;
            var13 = _closure1_slot8;
            var1.__initData = var13;
            var4 = var2.bind(var4)(var1);
            var2 = var4.onTouchesDown;
            var1 = function(arg0, arg1) { // Original name: w, environment: var0
                _fun76337: for (var _fun76337_ip = 0;;) switch (_fun76337_ip) {
                    case 0:
                        var1 = arg1;
                        var2 = _closure2_slot5;
                        var0 = var2.get;
                        var0 = var0.bind(var2)();
                        if (var0) {
                            _fun76337_ip = 32;
                            continue _fun76337
                        }
                    case 22:
                        var0 = var1.fail;
                        var0 = var0.bind(var1)();
                    case 32:
                        var0 = undefined;
                        return var0;
                }
            };
            var13 = {};
            var14 = _closure2_slot5;
            var13.enabled = var14;
            var1.__closure = var13;
            var13 = 10675684732258.0;
            var1.__workletHash = var13;
            var13 = _closure1_slot7;
            var1.__initData = var13;
            var2 = var2.bind(var4)(var1);
            var1 = var2.onEnd;
            var0 = function() { // Original name: t, environment: var0
                _fun76338: for (var _fun76338_ip = 0;;) switch (_fun76338_ip) {
                    case 0:
                        var3 = _closure2_slot2;
                        var2 = var3.set;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        var1 = global;
                        var3 = var1.Math;
                        var2 = var3.abs;
                        var4 = _closure2_slot1;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var2 = var2.bind(var3)(var1);
                        var1 = _closure2_slot0;
                        if (!(!(var2 > var1))) {
                            _fun76338_ip = 164;
                            continue _fun76338
                        }
                    case 59:
                        var2 = _closure2_slot3;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var6 = 0;
                        if (!(var6 !== var1)) {
                            _fun76338_ip = 207;
                            continue _fun76338
                        }
                    case 81:
                        var3 = _closure2_slot3;
                        var2 = var3.set;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var4 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.withSpring;
                        var1 = {};
                        var9 = _closure2_slot1;
                        var8 = var9.get;
                        var8 = var8.bind(var9)();
                        var1.velocity = var8;
                        var10 = _closure1_slot4;
                        var11 = var1;
                        var7 = copyDataProperties(var11, var10);
                        var1 = var4.bind(var5)(var6, var1);
                        var1 = var2.bind(var3)(var1);
                        _fun76338_ip = 207;
                        continue _fun76338;
                    case 164:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 1;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.runOnJS;
                        var0 = _closure2_slot6;
                        var0 = var2.bind(var3)(var0);
                        var0 = var0.bind(var1)();
                    case 207:
                        var0 = undefined;
                        return var0;
                }
            };
            var4 = {};
            var4.isInteracting = var12;
            var4.velocity = var11;
            var11 = _closure2_slot0;
            var4.swipeVelocityThreshold = var11;
            var10 = var8[var10];
            var10 = var7.bind(var6)(var10);
            var10 = var10.runOnJS;
            var4.runOnJS = var10;
            var9 = _closure2_slot6;
            var4.dismiss = var9;
            var4.translatePos = var5;
            var5 = 4;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.withSpring;
            var4.withSpring = var5;
            var5 = _closure1_slot4;
            var4.SPRING_CONFIG = var5;
            var0.__closure = var4;
            var4 = 3185523772752.0;
            var0.__workletHash = var4;
            var3 = _closure1_slot6;
            var0.__initData = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var4.bind(var3)(var1, var2);
        var _closure2_slot7 = var4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var1);
            var1 = var0.Gesture;
            var0 = var1.Native;
            var1 = var0.bind(var1)();
            var _closure3_slot0 = var1;
            var0 = new Array(0);
            var _closure3_slot1 = var0;
            var0 = {};
            var2 = function(arg0) { // Original name: panGestureGenerator, environment: var2
                _fun76340: for (var _fun76340_ip = 0;;) switch (_fun76340_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = _closure3_slot1;
                        var3 = var2[var1];
                        var2 = null;
                        if (!(var2 == var3)) {
                            _fun76340_ip = 62;
                            continue _fun76340
                        }
                    case 20:
                        var3 = _closure2_slot7;
                        var2 = undefined;
                        var5 = var3.bind(var2)();
                        var2 = _closure3_slot1;
                        var4 = var5.blocksExternalGesture;
                        var3 = _closure3_slot0;
                        var3 = var4.bind(var5)(var3);
                        var2[var1] = var3;
                        var2 = var2[var1];
                        return var2;
                    case 62:
                        var0 = _closure3_slot1;
                        var0 = var0[var1];
                        return var0;
                }
            };
            var0.panGestureGenerator = var2;
            var0.nativeGesture = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useMediaViewerPanGesture = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3677, 8804, 8800, 4034, 7495, 4917, 2]);