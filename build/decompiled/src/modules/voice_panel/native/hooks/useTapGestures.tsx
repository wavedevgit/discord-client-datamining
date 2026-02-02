// modules/voice_panel/native/hooks/useTapGestures.tsx
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
    var3 = {};
    var6 = "function useTapGesturesTsx1(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('double');}";
    var3.code = var6;
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 'function useTapGesturesTsx2(event,manager){const{isFocusedVideoZoomed}=this.__closure;if(isFocusedVideoZoomed.get()){manager.fail();}}';
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = "function useTapGesturesTsx3(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('single');}";
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = "function useTapGesturesTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,handleEvent}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);runOnJS(handleEvent)('long');}";
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/hooks/useTapGestures.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot3;
        var4 = var3.useContext;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 1;
        var5 = var5[var2];
        var2 = undefined;
        var2 = var6.bind(var2)(var5);
        var2 = var4.bind(var3)(var2);
        var4 = var2.isFocusedVideoZoomed;
        var _closure2_slot1 = var4;
        var2 = var3.useRef;
        var2 = var2.bind(var3)(var1);
        var _closure2_slot2 = var2;
        var2 = var1.onSingleTap;
        var5 = null;
        var8 = var5 != var2;
        var _closure2_slot3 = var8;
        var2 = var1.onDoubleTap;
        var7 = var5 != var2;
        var _closure2_slot4 = var7;
        var2 = var1.onLongPress;
        var6 = var5 != var2;
        var _closure2_slot5 = var6;
        var5 = var1.gesturesEnabled;
        var _closure2_slot6 = var5;
        var2 = var3.useLayoutEffect;
        var1 = function() { // Environment: var0
            var1 = _closure2_slot2;
            var0 = _closure2_slot0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var2 = var3.useMemo;
        var1 = new Array(5);
        var1[0] = var8;
        var1[1] = var7;
        var1[2] = var6;
        var1[3] = var5;
        var1[4] = var4;
        var0 = function() { // Environment: var0
            _fun111274: for (var _fun111274_ip = 0;;) switch (_fun111274_ip) {
                case 0:
                    var9 = function arg0() {
                        _fun111275: for (var _fun111275_ip = 0;;) switch (_fun111275_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = 'single';
                                if (!(var0 !== var1)) {
                                    _fun111275_ip = 120;
                                    continue _fun111275
                                }
                            case 11:
                                var0 = 'double';
                                if (!(var0 !== var1)) {
                                    _fun111275_ip = 75;
                                    continue _fun111275
                                }
                            case 19:
                                var0 = 'long';
                                if (!(var0 === var1)) {
                                    _fun111275_ip = 163;
                                    continue _fun111275
                                }
                            case 30:
                                var1 = _closure2_slot2;
                                var1 = var1.current;
                                var2 = var1.onLongPress;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun111275_ip = 163;
                                    continue _fun111275
                                }
                            case 54:
                                var0 = _closure2_slot2;
                                var1 = var0.current;
                                var0 = var1.onLongPress;
                                var0 = var0.bind(var1)();
                                _fun111275_ip = 163;
                                continue _fun111275;
                            case 75:
                                var1 = _closure2_slot2;
                                var1 = var1.current;
                                var2 = var1.onDoubleTap;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun111275_ip = 163;
                                    continue _fun111275
                                }
                            case 99:
                                var0 = _closure2_slot2;
                                var1 = var0.current;
                                var0 = var1.onDoubleTap;
                                var0 = var0.bind(var1)();
                                _fun111275_ip = 163;
                                continue _fun111275;
                            case 120:
                                var1 = _closure2_slot2;
                                var1 = var1.current;
                                var2 = var1.onSingleTap;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun111275_ip = 163;
                                    continue _fun111275
                                }
                            case 144:
                                var0 = _closure2_slot2;
                                var1 = var0.current;
                                var0 = var1.onSingleTap;
                                var0 = var0.bind(var1)();
                            case 163:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var9;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 2;
                    var3 = var1[var8];
                    var12 = undefined;
                    var3 = var2.bind(var12)(var3);
                    var4 = var3.Gesture;
                    var3 = var4.Exclusive;
                    var1 = var1[var8];
                    var1 = var2.bind(var12)(var1);
                    var2 = var1.Gesture;
                    var1 = var2.Tap;
                    var5 = var1.bind(var2)();
                    var2 = var5.enabled;
                    var1 = _closure2_slot6;
                    if (!var1) {
                        _fun111274_ip = 94;
                        continue _fun111274
                    }
                case 90:
                    var1 = _closure2_slot4;
                case 94:
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.maxDistance;
                    var6 = 30;
                    var2 = var1.bind(var2)(var6);
                    var1 = var2.numberOfTaps;
                    var5 = var1.bind(var2)(var8);
                    var2 = var5.onTouchesDown;
                    var1 = function arg0, arg1() {
                        _fun111276: for (var _fun111276_ip = 0;;) switch (_fun111276_ip) {
                            case 0:
                                var1 = arg1;
                                var2 = _closure2_slot1;
                                var0 = var2.get;
                                var0 = var0.bind(var2)();
                                if (!var0) {
                                    _fun111276_ip = 32;
                                    continue _fun111276
                                }
                            case 22:
                                var0 = var1.fail;
                                var0 = var0.bind(var1)();
                            case 32:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var10 = {};
                    var13 = _closure2_slot1;
                    var10.isFocusedVideoZoomed = var13;
                    var1.__closure = var10;
                    var10 = 3236469126950.0;
                    var1.__workletHash = var10;
                    var10 = _closure1_slot5;
                    var1.__initData = var10;
                    var14 = var2.bind(var5)(var1);
                    var13 = var14.onStart;
                    var2 = function() {
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 3;
                        var0 = var2[var0];
                        var2 = undefined;
                        var3 = var1.bind(var2)(var0);
                        var1 = var3.runOnJS;
                        var0 = _closure3_slot0;
                        var1 = var1.bind(var3)(var0);
                        var0 = 'double';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var15 = {};
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var10 = 3;
                    var16 = var1[var10];
                    var16 = var5.bind(var12)(var16);
                    var16 = var16.runOnJS;
                    var15.runOnJS = var16;
                    var15.handleEvent = var9;
                    var2.__closure = var15;
                    var15 = 13571114432746.0;
                    var2.__workletHash = var15;
                    var15 = _closure1_slot4;
                    var2.__initData = var15;
                    var2 = var13.bind(var14)(var2);
                    var1 = var1[var8];
                    var1 = var5.bind(var12)(var1);
                    var5 = var1.Gesture;
                    var1 = var5.Tap;
                    var13 = var1.bind(var5)();
                    var5 = var13.enabled;
                    var1 = _closure2_slot6;
                    if (!var1) {
                        _fun111274_ip = 312;
                        continue _fun111274
                    }
                case 308:
                    var1 = _closure2_slot3;
                case 312:
                    var5 = var5.bind(var13)(var1);
                    var1 = var5.maxDistance;
                    var14 = var1.bind(var5)(var6);
                    var13 = var14.onStart;
                    var1 = function() {
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 3;
                        var0 = var2[var0];
                        var2 = undefined;
                        var3 = var1.bind(var2)(var0);
                        var1 = var3.runOnJS;
                        var0 = _closure3_slot0;
                        var1 = var1.bind(var3)(var0);
                        var0 = 'single';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var15 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var16 = var5[var10];
                    var16 = var6.bind(var12)(var16);
                    var16 = var16.runOnJS;
                    var15.runOnJS = var16;
                    var15.handleEvent = var9;
                    var1.__closure = var15;
                    var15 = 14109132753191.0;
                    var1.__workletHash = var15;
                    var15 = _closure1_slot6;
                    var1.__initData = var15;
                    var1 = var13.bind(var14)(var1);
                    var5 = var5[var8];
                    var5 = var6.bind(var12)(var5);
                    var6 = var5.Gesture;
                    var5 = var6.LongPress;
                    var8 = var5.bind(var6)();
                    var6 = var8.enabled;
                    var5 = _closure2_slot6;
                    if (!var5) {
                        _fun111274_ip = 452;
                        continue _fun111274
                    }
                case 448:
                    var5 = _closure2_slot5;
                case 452:
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.onStart;
                    var0 = function() {
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var4 = var3[var1];
                        var0 = undefined;
                        var7 = var2.bind(var0)(var4);
                        var6 = var7.runOnJS;
                        var4 = 4;
                        var5 = var3[var4];
                        var5 = var2.bind(var0)(var5);
                        var5 = var5.triggerHapticFeedback;
                        var5 = var6.bind(var7)(var5);
                        var4 = var3[var4];
                        var4 = var2.bind(var0)(var4);
                        var4 = var4.HapticFeedbackTypes;
                        var4 = var4.IMPACT_MEDIUM;
                        var4 = var5.bind(var0)(var4);
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.runOnJS;
                        var1 = _closure3_slot0;
                        var2 = var2.bind(var3)(var1);
                        var1 = 'long';
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var8 = {};
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.runOnJS;
                    var8.runOnJS = var10;
                    var10 = 4;
                    var14 = var13[var10];
                    var14 = var11.bind(var12)(var14);
                    var14 = var14.triggerHapticFeedback;
                    var8.triggerHapticFeedback = var14;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.HapticFeedbackTypes;
                    var8.HapticFeedbackTypes = var10;
                    var8.handleEvent = var9;
                    var0.__closure = var8;
                    var8 = 1947700378974.0;
                    var0.__workletHash = var8;
                    var7 = _closure1_slot7;
                    var0.__initData = var7;
                    var0 = var5.bind(var6)(var0);
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11772, 4926, 3681, 3240, 2]);