// modules/virtual_currency/native/BalanceCounter.tsx
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
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var7 = var6.useState;
    var _closure1_slot4 = var7;
    var7 = var6.useEffect;
    var _closure1_slot5 = var7;
    var7 = var6.useRef;
    var _closure1_slot6 = var7;
    var6 = var6.useCallback;
    var _closure1_slot7 = var6;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot8 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var1 = function arg0() {
        _fun75651: for (var _fun75651_ip = 0;;) switch (_fun75651_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.value;
                var _closure2_slot0 = var2;
                var22 = var0.onValueChange;
                var _closure2_slot1 = var22;
                var21 = var0.onValueReached;
                var6 = var0.valueChangeAnimationEnabled;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun75651_ip = 44;
                    continue _fun75651
                }
            case 42:
                var6 = true;
            case 44:
                var _closure2_slot2 = var6;
                var10 = var0.style;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var7 = _closure1_slot6;
                var0 = null;
                var1 = var7.bind(var4)(var0);
                _closure2_slot3 = var1;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 3;
                var8 = var15[var1];
                var11 = var16.bind(var4)(var8);
                var8 = var11.useSharedValue;
                var9 = 0;
                var17 = var8.bind(var11)(var9);
                _closure2_slot4 = var17;
                var7 = var7.bind(var4)(var0);
                _closure2_slot5 = var7;
                var11 = _closure1_slot8;
                var8 = var11.useContext;
                var7 = 4;
                var7 = var15[var7];
                var7 = var16.bind(var4)(var7);
                var7 = var7.AccessibilityPreferencesContext;
                var7 = var8.bind(var11)(var7);
                var7 = var7.reducedMotion;
                var19 = var7.enabled;
                _closure2_slot6 = var19;
                var23 = _closure1_slot4;
                var7 = var23.bind(var4)(var9);
                var20 = _closure1_slot3;
                var18 = 2;
                var7 = var20.bind(var4)(var7, var18);
                var8 = var7[var9];
                var11 = 1;
                var14 = var7[var11];
                _closure2_slot7 = var14;
                var7 = var23.bind(var4)(var11);
                var7 = var20.bind(var4)(var7, var18);
                var13 = var7[var9];
                var12 = var7[var11];
                _closure2_slot8 = var12;
                var7 = false;
                var7 = var23.bind(var4)(var7);
                var7 = var20.bind(var4)(var7, var18);
                var18 = var7[var9];
                _closure2_slot9 = var18;
                var7 = var7[var11];
                _closure2_slot10 = var7;
                var20 = _closure1_slot7;
                var11 = function(arg0, arg1, arg2) { // Environment: var3
                    var3 = arg0;
                    var2 = _closure2_slot10;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var2 = var3.set;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var4 = 5;
                    var4 = var12[var4];
                    var8 = var11.bind(var0)(var4);
                    var7 = var8.withSpring;
                    var6 = {
                        'duration': null,
                        'damping': 15,
                        'stiffness': 150,
                        'mass': 1
                    };
                    var4 = arg2;
                    var6.duration = var4;
                    var5 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 3;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.runOnJS;
                        var1 = _closure2_slot10;
                        var2 = var2.bind(var3)(var1);
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var4 = {};
                    var10 = 3;
                    var10 = var12[var10];
                    var10 = var11.bind(var0)(var10);
                    var10 = var10.runOnJS;
                    var4.runOnJS = var10;
                    var9 = _closure2_slot10;
                    var4.setIsAnimating = var9;
                    var5.__closure = var4;
                    var4 = 16153226572520.0;
                    var5.__workletHash = var4;
                    var1 = _closure1_slot10;
                    var5.__initData = var1;
                    var16 = arg1;
                    var14 = 'respect-motion-settings';
                    var17 = var8;
                    var15 = var6;
                    var13 = var5;
                    var1 = var17[var7](var16, var15, var14, var13, var12);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = new Array(0);
                var20 = var20.bind(var4)(var11, var7);
                _closure2_slot11 = var20;
                var7 = function() {
                    _fun75654: for (var _fun75654_ip = 0;;) switch (_fun75654_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun75654_ip = 52;
                                continue _fun75654
                            }
                        case 18:
                            var1 = global;
                            var4 = var1.clearTimeout;
                            var1 = _closure2_slot5;
                            var3 = var1.current;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = _closure2_slot5;
                            var1.current = var2;
                        case 52:
                            var2 = _closure2_slot10;
                            var0 = undefined;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                _closure2_slot12 = var7;
                var11 = _closure1_slot5;
                var7 = new Array(7);
                var7[0] = var2;
                var7[1] = var22;
                var7[2] = var21;
                var7[3] = var17;
                var7[4] = var20;
                var7[5] = var19;
                var7[6] = var6;
                var6 = function() { // Environment: var3
                    _fun75655: for (var _fun75655_ip = 0;;) switch (_fun75655_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 !== var2)) {
                                _fun75655_ip = 83;
                                continue _fun75655
                            }
                        case 15:
                            var2 = _closure2_slot3;
                            var2 = var2.current;
                            if (!(var3 !== var2)) {
                                _fun75655_ip = 235;
                                continue _fun75655
                            }
                        case 31:
                            var2 = _closure2_slot2;
                            if (!var2) {
                                _fun75655_ip = 235;
                                continue _fun75655
                            }
                        case 41:
                            var2 = _closure2_slot6;
                            if (var2) {
                                _fun75655_ip = 235;
                                continue _fun75655
                            }
                        case 51:
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot3;
                            var2 = var2.current;
                            if (!(var3 === var2)) {
                                _fun75655_ip = 87;
                                continue _fun75655
                            }
                        case 68:
                            var4 = _closure2_slot7;
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                        case 83:
                            var2 = undefined;
                            return var2;
                        case 87:
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot3;
                            var2 = var2.current;
                            var6 = var3 - var2;
                            var2 = _closure2_slot1;
                            var5 = undefined;
                            var2 = var2.bind(var5)(var6);
                            var2 = _closure2_slot3;
                            var2.current = var3;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 6;
                            var3 = var8[var2];
                            var4 = var7.bind(var5)(var3);
                            var3 = var4.getDesiredAnimationConfigs;
                            var2 = var8[var2];
                            var2 = var7.bind(var5)(var2);
                            var2 = var2.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
                            var2 = var3.bind(var4)(var6, var2);
                            var3 = var2.duration;
                            var _closure3_slot0 = var3;
                            var4 = var2.delay;
                            var2 = _closure2_slot12;
                            var2 = var2.bind(var5)();
                            var2 = _closure2_slot5;
                            var3 = global;
                            var3 = var3.setTimeout;
                            var0 = function() { // Environment: var0
                                var5 = _closure2_slot11;
                                var4 = _closure2_slot4;
                                var3 = _closure2_slot0;
                                var2 = _closure3_slot0;
                                var0 = undefined;
                                var2 = var5.bind(var0)(var4, var3, var2);
                                var2 = _closure2_slot5;
                                var1 = null;
                                var2.current = var1;
                                return var0;
                            };
                            var0 = var3.bind(var5)(var0, var4);
                            var2.current = var0;
                            var0 = _closure2_slot12;
                            return var0;
                        case 235:
                            var3 = _closure2_slot7;
                            var0 = _closure2_slot0;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var0);
                            var3 = _closure2_slot4;
                            var2 = var3.set;
                            var2 = var2.bind(var3)(var0);
                            var1 = _closure2_slot3;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var11.bind(var4)(var6, var7);
                var6 = var15[var1];
                var7 = var16.bind(var4)(var6);
                var6 = var7.useAnimatedStyle;
                var3 = function() {
                    _fun75657: for (var _fun75657_ip = 0;;) switch (_fun75657_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun75657_ip = 127;
                                continue _fun75657
                            }
                        case 10:
                            var1 = global;
                            var3 = var1.Math;
                            var2 = var3.round;
                            var4 = _closure2_slot4;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            var3 = var2.bind(var3)(var1);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 3;
                            var6 = var5[var1];
                            var2 = undefined;
                            var8 = var4.bind(var2)(var6);
                            var7 = var8.runOnJS;
                            var6 = _closure2_slot7;
                            var6 = var7.bind(var8)(var6);
                            var6 = var6.bind(var2)(var3);
                            var1 = var5[var1];
                            var4 = var4.bind(var2)(var1);
                            var1 = var4.runOnJS;
                            var0 = _closure2_slot8;
                            var1 = var1.bind(var4)(var0);
                            var0 = var3.toString;
                            var0 = var0.bind(var3)();
                            var0 = var0.length;
                            var0 = var1.bind(var2)(var0);
                        case 127:
                            var0 = {};
                            return var0;
                    }
                };
                var11 = {};
                var11.isAnimating = var18;
                var11.animatedValue = var17;
                var15 = var15[var1];
                var15 = var16.bind(var4)(var15);
                var15 = var15.runOnJS;
                var11.runOnJS = var15;
                var11.setDisplayValue = var14;
                var11.setMaxDigits = var12;
                var3.__closure = var11;
                var11 = 4408542396979.0;
                var3.__workletHash = var11;
                var11 = _closure1_slot11;
                var3.__initData = var11;
                var11 = var6.bind(var7)(var3);
                if (!(var0 !== var2)) {
                    _fun75651_ip = 625;
                    continue _fun75651
                }
            case 493:
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var6 = new Array(2);
                var6[0] = var11;
                var11 = {};
                var12 = 9;
                var12 = var12 * var13;
                var11.minWidth = var12;
                var6[1] = var11;
                var1.style = var6;
                var6 = _closure1_slot0;
                var5 = 7;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {};
                var7 = 'text-md/semibold';
                var5.variant = var7;
                var7 = new Array(1);
                var7[0] = var10;
                var5.style = var7;
                var7 = var8.toFixed;
                var7 = var7.bind(var8)(var9);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 625:
                return var0;
        }
    };
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/native/BalanceCounter.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.BalanceCounter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 3720, 3165, 4081, 9562, 3941, 2]);