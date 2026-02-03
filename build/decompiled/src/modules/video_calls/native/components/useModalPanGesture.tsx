// modules/video_calls/native/components/useModalPanGesture.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = {};
    var5 = "function useModalPanGestureTsx1({velocityY:velocityY}){const{translateY,thresholdTranslate,thresholdVelocity,withSpring,height,runOnJS,ModalActionCreators,onClose,onEnd}=this.__closure;const config={damping:15,mass:1,stiffness:250,overshootClamping:true,restSpeedThreshold:0.001,restDisplacementThreshold:0.001,velocity:velocityY};if(translateY.get()>=thresholdTranslate||velocityY>=thresholdVelocity){translateY.set(withSpring(height,config,'respect-motion-settings',function(){runOnJS(ModalActionCreators.pop)();}));if(onClose!=null){runOnJS(onClose)();}}else{translateY.set(withSpring(0,config));}if(onEnd!=null){runOnJS(onEnd)();}}";
    var0.code = var5;
    var _closure1_slot3 = var0;
    var0 = {};
    var5 = 'function useModalPanGestureTsx2({translationY:translationY}){const{translateY,interpolate,start,maxTranslate,Extrapolate}=this.__closure;translateY.set(interpolate(start.get().y+translationY,[0,maxTranslate],[0,maxTranslate],Extrapolate.CLAMP));}';
    var0.code = var5;
    var _closure1_slot4 = var0;
    var0 = {};
    var5 = 'function useModalPanGestureTsx3(){const{onStart,runOnJS,start,translateY}=this.__closure;if(onStart!=null){runOnJS(onStart)();}start.set({y:translateY.get()});}';
    var0.code = var5;
    var _closure1_slot5 = var0;
    var0 = {};
    var5 = 'function useModalPanGestureTsx4(){const{runOnJS,ModalActionCreators}=this.__closure;runOnJS(ModalActionCreators.pop)();}';
    var0.code = var5;
    var _closure1_slot6 = var0;
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/useModalPanGesture.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91455: for (var _fun91455_ip = 0;;) switch (_fun91455_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.thresholdVelocity;
                var9 = undefined;
                if (!(var12 === var9)) {
                    _fun91455_ip = 23;
                    continue _fun91455
                }
            case 17:
                var12 = 500;
            case 23:
                var _closure2_slot0 = var12;
                var4 = var1.gestureEnabled;
                var16 = var1.maxTranslate;
                var _closure2_slot1 = var16;
                var13 = var1.thresholdTranslate;
                var _closure2_slot2 = var13;
                var11 = var1.height;
                var _closure2_slot3 = var11;
                var14 = var1.translateY;
                var _closure2_slot4 = var14;
                var18 = var1.onStart;
                var _closure2_slot5 = var18;
                var5 = var1.onEnd;
                var _closure2_slot6 = var5;
                var6 = var1.onClose;
                var _closure2_slot7 = var6;
                var _closure2_slot8 = var9;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 0;
                var1 = var10[var7];
                var15 = var8.bind(var9)(var1);
                var2 = var15.useSharedValue;
                var1 = {};
                var1.y = var7;
                var17 = var2.bind(var15)(var1);
                _closure2_slot8 = var17;
                var1 = 1;
                var1 = var10[var1];
                var1 = var8.bind(var9)(var1);
                var2 = var1.Gesture;
                var1 = var2.Pan;
                var2 = var1.bind(var2)();
                var1 = var2.enabled;
                var4 = var1.bind(var2)(var4);
                var2 = var4.onStart;
                var1 = function() {
                    _fun91456: for (var _fun91456_ip = 0;;) switch (_fun91456_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun91456_ip = 55;
                                continue _fun91456
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 0;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var2.bind(var1)(var0);
                            var2 = var4.runOnJS;
                            var0 = _closure2_slot5;
                            var0 = var2.bind(var4)(var0);
                            var0 = var0.bind(var1)();
                        case 55:
                            var2 = _closure2_slot8;
                            var1 = var2.set;
                            var0 = {};
                            var4 = _closure2_slot4;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var0.y = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var15 = {};
                var15.onStart = var18;
                var18 = var10[var7];
                var18 = var8.bind(var9)(var18);
                var18 = var18.runOnJS;
                var15.runOnJS = var18;
                var15.start = var17;
                var15.translateY = var14;
                var1.__closure = var15;
                var15 = 15847989720945.0;
                var1.__workletHash = var15;
                var15 = _closure1_slot5;
                var1.__initData = var15;
                var4 = var2.bind(var4)(var1);
                var2 = var4.onUpdate;
                var1 = function arg0() {
                    var0 = arg0;
                    var6 = var0.translationY;
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 0;
                    var5 = var10[var1];
                    var0 = undefined;
                    var8 = var9.bind(var0)(var5);
                    var7 = var8.interpolate;
                    var11 = _closure2_slot8;
                    var5 = var11.get;
                    var5 = var5.bind(var11)();
                    var5 = var5.y;
                    var6 = var5 + var6;
                    var11 = _closure2_slot1;
                    var5 = [0];
                    var5[1] = var11;
                    var4 = [0];
                    var4[1] = var11;
                    var1 = var10[var1];
                    var1 = var9.bind(var0)(var1);
                    var1 = var1.Extrapolate;
                    var12 = var1.CLAMP;
                    var16 = var8;
                    var15 = var6;
                    var14 = var5;
                    var13 = var4;
                    var1 = var16[var7](var15, var14, var13, var12, var11);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var15 = {};
                var15.translateY = var14;
                var18 = var10[var7];
                var18 = var8.bind(var9)(var18);
                var18 = var18.interpolate;
                var15.interpolate = var18;
                var15.start = var17;
                var15.maxTranslate = var16;
                var16 = var10[var7];
                var16 = var8.bind(var9)(var16);
                var16 = var16.Extrapolate;
                var15.Extrapolate = var16;
                var1.__closure = var15;
                var15 = 6809176231356.0;
                var1.__workletHash = var15;
                var15 = _closure1_slot4;
                var1.__initData = var15;
                var2 = var2.bind(var4)(var1);
                var1 = var2.onEnd;
                var0 = function arg0() {
                    _fun91458: for (var _fun91458_ip = 0;;) switch (_fun91458_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.velocityY;
                            var11 = {
                                'damping': 15,
                                'mass': 1,
                                'stiffness': 250,
                                'overshootClamping': true,
                                'restSpeedThreshold': 0.001,
                                'restDisplacementThreshold': 0.001
                            };
                            var11.velocity = var2;
                            var3 = _closure2_slot4;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = _closure2_slot2;
                            if (!(!(var3 >= var1))) {
                                _fun91458_ip = 117;
                                continue _fun91458
                            }
                        case 52:
                            var1 = _closure2_slot0;
                            if (!(!(var2 >= var1))) {
                                _fun91458_ip = 117;
                                continue _fun91458
                            }
                        case 60:
                            var3 = _closure2_slot4;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 2;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.withSpring;
                            var1 = 0;
                            var1 = var4.bind(var5)(var1, var11);
                            var1 = var2.bind(var3)(var1);
                            _fun91458_ip = 316;
                            continue _fun91458;
                        case 117:
                            var6 = _closure2_slot4;
                            var5 = var6.set;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var2 = 2;
                            var3 = var14[var2];
                            var2 = undefined;
                            var10 = var13.bind(var2)(var3);
                            var9 = var10.withSpring;
                            var8 = _closure2_slot3;
                            var7 = function() {
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 0;
                                var2 = var5[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.runOnJS;
                                var4 = _closure1_slot1;
                                var1 = 3;
                                var1 = var5[var1];
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.pop;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var3 = {};
                            var4 = 0;
                            var12 = var14[var4];
                            var12 = var13.bind(var2)(var12);
                            var12 = var12.runOnJS;
                            var3.runOnJS = var12;
                            var13 = _closure1_slot1;
                            var12 = 3;
                            var12 = var14[var12];
                            var12 = var13.bind(var2)(var12);
                            var3.ModalActionCreators = var12;
                            var7.__closure = var3;
                            var3 = 14223008059411.0;
                            var7.__workletHash = var3;
                            var3 = _closure1_slot6;
                            var7.__initData = var3;
                            var16 = 'respect-motion-settings';
                            var19 = var10;
                            var18 = var8;
                            var17 = var11;
                            var15 = var7;
                            var3 = var19[var9](var18, var17, var16, var15, var14);
                            var3 = var5.bind(var6)(var3);
                            var5 = _closure2_slot7;
                            var3 = null;
                            if (!(var3 != var5)) {
                                _fun91458_ip = 316;
                                continue _fun91458
                            }
                        case 281:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var4];
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot7;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
                        case 316:
                            var2 = _closure2_slot6;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun91458_ip = 368;
                                continue _fun91458
                            }
                        case 326:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 0;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot6;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 368:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = {};
                var4.translateY = var14;
                var4.thresholdTranslate = var13;
                var4.thresholdVelocity = var12;
                var12 = 2;
                var12 = var10[var12];
                var12 = var8.bind(var9)(var12);
                var12 = var12.withSpring;
                var4.withSpring = var12;
                var4.height = var11;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var7 = var7.runOnJS;
                var4.runOnJS = var7;
                var8 = _closure1_slot1;
                var7 = 3;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var4.ModalActionCreators = var7;
                var4.onClose = var6;
                var4.onEnd = var5;
                var0.__closure = var4;
                var4 = 16881029664873.0;
                var0.__workletHash = var4;
                var3 = _closure1_slot3;
                var0.__initData = var3;
                var2 = var1.bind(var2)(var0);
                var1 = var2.failOffsetY;
                var0 = -0.01;
                var2 = var1.bind(var2)(var0);
                var1 = var2.activeOffsetY;
                var0 = new Array(2);
                var3 = -5;
                var0[0] = var3;
                var3 = 15;
                var0[1] = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3711, 4956, 4072, 4557, 2]);