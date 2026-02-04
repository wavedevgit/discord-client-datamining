// modules/action_sheet/native/PanGestureAnimations.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var5 = {
        'damping': 30,
        'mass': 1,
        'stiffness': 250,
        'overshootClamping': true,
        'restSpeedThreshold': 0.001,
        'restDisplacementThreshold': 0.001
    };
    var _closure1_slot2 = var5;
    var4 = {};
    var0 = 500;
    var4.duration = var0;
    var0 = 0;
    var1 = var9[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var1 = var1.STANDARD_EASING;
    var4.easing = var1;
    var _closure1_slot3 = var4;
    var1 = {};
    var3 = "function getNearestValue_PanGestureAnimationsTsx1(array,measure,velocity=0){const unitVector=velocity<0?-1:velocity>0?1:0;function getSortedByMeasure(array,measure){'worklet';const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}if(array.length===0){return measure;}const sorted=getSortedByMeasure(array,measure);if(unitVector!==0){var _sorted$find;return(_sorted$find=sorted.find(function(value){const result=unitVector<0?measure>value:measure<value;return result;}))!==null&&_sorted$find!==void 0?_sorted$find:sorted[0];}return sorted[0];}";
    var1.code = var3;
    var _closure1_slot4 = var1;
    var1 = {};
    var3 = 'function getSortedByMeasure_PanGestureAnimationsTsx2(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}';
    var1.code = var3;
    var _closure1_slot5 = var1;
    var1 = function() { // Environment: var6
        var0 = function arg0, arg1() {
            _fun91492: for (var _fun91492_ip = 0;;) switch (_fun91492_ip) {
                case 0:
                    var6 = arg0;
                    var0 = arg1;
                    var2 = arguments[2];
                    var _closure3_slot0 = var0;
                    var5 = undefined;
                    if (!(var2 === var5)) {
                        _fun91492_ip = 23;
                        continue _fun91492
                    }
                case 21:
                    var2 = 0;
                case 23:
                    var _closure3_slot1 = var5;
                    var3 = 0;
                    var7 = var2 < var3;
                    var4 = -1;
                    if (var7) {
                        _fun91492_ip = 57;
                        continue _fun91492
                    }
                case 42:
                    var7 = var2 > var3;
                    var2 = 0;
                    if (!var7) {
                        _fun91492_ip = 54;
                        continue _fun91492
                    }
                case 51:
                    var2 = 1;
                case 54:
                    var4 = var2;
                case 57:
                    _closure3_slot1 = var4;
                    var2 = function() { // Environment: var1
                        var0 = function arg0, arg1() {
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var1 = global;
                            var2 = var1.Array;
                            var1 = new Array(0);
                            var6 = arg0;
                            var5 = 0;
                            var7 = var1;
                            var3 = arraySpread(var7, var6, var5);
                            var7 = var2;
                            var6 = var1;
                            var2 = apply(var7, var6);
                            var1 = var2.sort;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun91495: for (var _fun91495_ip = 0;;) switch (_fun91495_ip) {
                                    case 0:
                                        var0 = global;
                                        var3 = var0.Math;
                                        var2 = var3.abs;
                                        var4 = _closure5_slot0;
                                        var1 = arg0;
                                        var1 = var1 - var4;
                                        var2 = var2.bind(var3)(var1);
                                        var3 = var0.Math;
                                        var1 = var3.abs;
                                        var0 = arg1;
                                        var0 = var0 - var4;
                                        var1 = var1.bind(var3)(var0);
                                        var3 = var2 < var1;
                                        var0 = -1;
                                        if (var3) {
                                            _fun91495_ip = 85;
                                            continue _fun91495
                                        }
                                    case 70:
                                        var2 = var2 > var1;
                                        var1 = 0;
                                        if (!var2) {
                                            _fun91495_ip = 82;
                                            continue _fun91495
                                        }
                                    case 79:
                                        var1 = 1;
                                    case 82:
                                        var0 = var1;
                                    case 85:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = {};
                        var0.__closure = var1;
                        var1 = 9192847351523.0;
                        var0.__workletHash = var1;
                        var1 = _closure1_slot5;
                        var0.__initData = var1;
                        return var0;
                    };
                    var2 = var2.bind(var5)();
                    var7 = var6.length;
                    if (!(var3 !== var7)) {
                        _fun91492_ip = 120;
                        continue _fun91492
                    }
                case 81:
                    var2 = var2.bind(var5)(var6, var0);
                    if (!(var3 !== var4)) {
                        _fun91492_ip = 114;
                        continue _fun91492
                    }
                case 91:
                    var4 = var2.find;
                    var1 = function(arg0) { // Environment: var1
                        _fun91496: for (var _fun91496_ip = 0;;) switch (_fun91496_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure3_slot1;
                                var0 = 0;
                                if (!(!(var3 < var0))) {
                                    _fun91496_ip = 26;
                                    continue _fun91496
                                }
                            case 16:
                                var0 = _closure3_slot0;
                                var0 = var0 < var2;
                                _fun91496_ip = 34;
                                continue _fun91496;
                            case 26:
                                var1 = _closure3_slot0;
                                var0 = var1 > var2;
                            case 34:
                                return var0;
                        }
                    };
                    var1 = var4.bind(var2)(var1);
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun91492_ip = 118;
                        continue _fun91492
                    }
                case 114:
                    var1 = var2[var3];
                case 118:
                    return var1;
                case 120:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 4186929947751.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot6 = var1;
    var1 = {};
    var3 = 'function withPanGestureSpring_PanGestureAnimationsTsx3(destination,velocity,config){const{SPRING_CONFIG,withSpring}=this.__closure;const springConfig=config!==null&&config!==void 0?config:SPRING_CONFIG;return withSpring(destination,{...springConfig,velocity:velocity});}';
    var1.code = var3;
    var _closure1_slot7 = var1;
    var1 = function() { // Environment: var6
        var0 = function arg0, arg1, arg2() {
            _fun91498: for (var _fun91498_ip = 0;;) switch (_fun91498_ip) {
                case 0:
                    var0 = arg2;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun91498_ip = 16;
                        continue _fun91498
                    }
                case 9:
                    var0 = _closure1_slot2;
                case 16:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.withSpring;
                    var1 = {};
                    var6 = var1;
                    var5 = var0;
                    var0 = copyDataProperties(var6, var5);
                    var4 = arg1;
                    var0 = 'velocity';
                    var1[var0] = var4;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot2;
        var2.SPRING_CONFIG = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.withSpring;
        var2.withSpring = var3;
        var0.__closure = var2;
        var2 = 12189464558811.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var3 = var1.bind(var0)();
    var _closure1_slot8 = var3;
    var1 = {};
    var7 = 'function withPanGestureTiming_PanGestureAnimationsTsx4(destination,config){const{TIMING_CONFIG,withTiming}=this.__closure;const timingConfig=config!==null&&config!==void 0?config:TIMING_CONFIG;return withTiming(destination,timingConfig);}';
    var1.code = var7;
    var _closure1_slot9 = var1;
    var1 = function() { // Environment: var6
        var0 = function arg0, arg1() {
            _fun91500: for (var _fun91500_ip = 0;;) switch (_fun91500_ip) {
                case 0:
                    var3 = arg1;
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun91500_ip = 16;
                        continue _fun91500
                    }
                case 9:
                    var3 = _closure1_slot3;
                case 16:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.withTiming;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot3;
        var2.TIMING_CONFIG = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.withTiming;
        var2.withTiming = var3;
        var0.__closure = var2;
        var2 = 7636074551896.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot9;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot10 = var1;
    var7 = {};
    var10 = 'function PanGestureAnimationsTsx5(){const{isGestureInProgress}=this.__closure;if(isGestureInProgress!=null){isGestureInProgress.set(false);}}';
    var7.code = var10;
    var _closure1_slot11 = var7;
    var7 = {};
    var10 = 'function PanGestureAnimationsTsx6(event,success){const{start,translate,snapPositions,velocity,swipeVelocityThreshold,getNearestValue,withPanGestureSpring,withPanGestureTiming,onEnd}=this.__closure;start.set(translate.get());if(snapPositions!=null){var _onEnd;const swipeVelocity=Math.abs(velocity.get())>swipeVelocityThreshold?velocity.get():0;const snapPoint=getNearestValue(snapPositions.get(),translate.get(),swipeVelocity);if(swipeVelocity!==0){translate.set(withPanGestureSpring(snapPoint,velocity.get()));}else{translate.set(withPanGestureTiming(snapPoint));}(_onEnd=onEnd)===null||_onEnd===void 0||_onEnd(event,{success:success,destination:snapPoint,startPosition:start.get()});}}';
    var7.code = var10;
    var _closure1_slot12 = var7;
    var7 = {};
    var10 = 'function PanGestureAnimationsTsx7(event){const{start,vertical,lowerBounds,upperBounds,velocity,translate,onChange}=this.__closure;var _onChange;const{velocityY:velocityY,translationY:translationY,velocityX:velocityX,translationX:translationX}=event;let next=start.get()+(vertical?translationY:translationX);if(lowerBounds!=null&&next<lowerBounds){next=lowerBounds;}else if(upperBounds!=null&&next>upperBounds){next=upperBounds;}velocity.set(vertical?velocityY:velocityX);translate.set(next);(_onChange=onChange)===null||_onChange===void 0||_onChange(event,{destination:translate.get(),startPosition:start.get()});}';
    var7.code = var10;
    var _closure1_slot13 = var7;
    var7 = {};
    var10 = 'function PanGestureAnimationsTsx8(event){const{start,translate,velocity,isGestureInProgress,onStart}=this.__closure;var _onStart;start.set(translate.get());velocity.set(0);if(isGestureInProgress!=null){isGestureInProgress.set(true);}(_onStart=onStart)===null||_onStart===void 0||_onStart(event,{destination:start.get(),startPosition:start.get()});}';
    var7.code = var10;
    var _closure1_slot14 = var7;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/action_sheet/native/PanGestureAnimations.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function arg0() {
        _fun91501: for (var _fun91501_ip = 0;;) switch (_fun91501_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.lowerBounds;
                var _closure2_slot0 = var15;
                var14 = var1.upperBounds;
                var _closure2_slot1 = var14;
                var10 = var1.snapPositions;
                var _closure2_slot2 = var10;
                var8 = var1.swipeVelocityThreshold;
                var4 = undefined;
                if (!(var8 === var4)) {
                    _fun91501_ip = 53;
                    continue _fun91501
                }
            case 47:
                var8 = 300;
            case 53:
                var _closure2_slot3 = var8;
                var11 = var1.translate;
                var _closure2_slot4 = var11;
                var17 = var1.onStart;
                var _closure2_slot5 = var17;
                var13 = var1.onChange;
                var _closure2_slot6 = var13;
                var7 = var1.onEnd;
                var _closure2_slot7 = var7;
                var16 = var1.vertical;
                if (!(var16 === var4)) {
                    _fun91501_ip = 109;
                    continue _fun91501
                }
            case 107:
                var16 = true;
            case 109:
                var _closure2_slot8 = var16;
                var5 = var1.isGestureInProgress;
                var _closure2_slot9 = var5;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var9 = var6[var1];
                var12 = var2.bind(var4)(var9);
                var9 = var12.useSharedValue;
                var18 = 0;
                var12 = var9.bind(var12)(var18);
                _closure2_slot10 = var12;
                var1 = var6[var1];
                var9 = var2.bind(var4)(var1);
                var1 = var9.useSharedValue;
                var9 = var1.bind(var9)(var18);
                _closure2_slot11 = var9;
                var1 = 4;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Gesture;
                var1 = var2.Pan;
                var4 = var1.bind(var2)();
                var2 = var4.onStart;
                var1 = function arg0() {
                    _fun91502: for (var _fun91502_ip = 0;;) switch (_fun91502_ip) {
                        case 0:
                            var3 = _closure2_slot10;
                            var2 = var3.set;
                            var4 = _closure2_slot4;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            var1 = var2.bind(var3)(var1);
                            var3 = _closure2_slot11;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                            var1 = _closure2_slot9;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun91502_ip = 72;
                                continue _fun91502
                            }
                        case 56:
                            var4 = _closure2_slot9;
                            var3 = var4.set;
                            var1 = true;
                            var1 = var3.bind(var4)(var1);
                        case 72:
                            var1 = _closure2_slot5;
                            if (!(var2 != var1)) {
                                _fun91502_ip = 133;
                                continue _fun91502
                            }
                        case 80:
                            var3 = _closure2_slot5;
                            var2 = {};
                            var4 = _closure2_slot10;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            var2.destination = var1;
                            var1 = _closure2_slot10;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var2.startPosition = var0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var0, var2);
                        case 133:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = {};
                var6.start = var12;
                var6.translate = var11;
                var6.velocity = var9;
                var6.isGestureInProgress = var5;
                var6.onStart = var17;
                var1.__closure = var6;
                var6 = 7008504704609.0;
                var1.__workletHash = var6;
                var6 = _closure1_slot14;
                var1.__initData = var6;
                var4 = var2.bind(var4)(var1);
                var2 = var4.onChange;
                var1 = function arg0() {
                    _fun91503: for (var _fun91503_ip = 0;;) switch (_fun91503_ip) {
                        case 0:
                            var3 = arg0;
                            var7 = var3.velocityY;
                            var4 = var3.translationY;
                            var6 = var3.velocityX;
                            var2 = var3.translationX;
                            var5 = _closure2_slot10;
                            var1 = var5.get;
                            var1 = var1.bind(var5)();
                            var5 = _closure2_slot8;
                            if (!var5) {
                                _fun91503_ip = 53;
                                continue _fun91503
                            }
                        case 50:
                            var2 = var4;
                        case 53:
                            var5 = var1 + var2;
                            var1 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun91503_ip = 75;
                                continue _fun91503
                            }
                        case 67:
                            var1 = _closure2_slot0;
                            if (!(!(var5 < var1))) {
                                _fun91503_ip = 103;
                                continue _fun91503
                            }
                        case 75:
                            var1 = _closure2_slot1;
                            var1 = var2 != var1;
                            if (!var1) {
                                _fun91503_ip = 94;
                                continue _fun91503
                            }
                        case 86:
                            var4 = _closure2_slot1;
                            var1 = var5 > var4;
                        case 94:
                            if (!var1) {
                                _fun91503_ip = 107;
                                continue _fun91503
                            }
                        case 97:
                            var5 = _closure2_slot1;
                            _fun91503_ip = 107;
                            continue _fun91503;
                        case 103:
                            var5 = _closure2_slot0;
                        case 107:
                            var4 = _closure2_slot11;
                            var1 = var4.set;
                            var8 = _closure2_slot8;
                            if (!var8) {
                                _fun91503_ip = 126;
                                continue _fun91503
                            }
                        case 123:
                            var6 = var7;
                        case 126:
                            var1 = var1.bind(var4)(var6);
                            var4 = _closure2_slot4;
                            var1 = var4.set;
                            var1 = var1.bind(var4)(var5);
                            var1 = _closure2_slot6;
                            if (!(var2 != var1)) {
                                _fun91503_ip = 203;
                                continue _fun91503
                            }
                        case 153:
                            var2 = _closure2_slot6;
                            var1 = {};
                            var5 = _closure2_slot4;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var1.destination = var4;
                            var4 = _closure2_slot10;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var1.startPosition = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var3, var1);
                        case 203:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = {};
                var6.start = var12;
                var6.vertical = var16;
                var6.lowerBounds = var15;
                var6.upperBounds = var14;
                var6.velocity = var9;
                var6.translate = var11;
                var6.onChange = var13;
                var1.__closure = var6;
                var6 = 15962975179371.0;
                var1.__workletHash = var6;
                var6 = _closure1_slot13;
                var1.__initData = var6;
                var4 = var2.bind(var4)(var1);
                var2 = var4.onEnd;
                var1 = function arg0, arg1() {
                    _fun91504: for (var _fun91504_ip = 0;;) switch (_fun91504_ip) {
                        case 0:
                            var3 = _closure2_slot10;
                            var2 = var3.set;
                            var4 = _closure2_slot4;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            var1 = var2.bind(var3)(var1);
                            var1 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun91504_ip = 265;
                                continue _fun91504
                            }
                        case 43:
                            var1 = global;
                            var4 = var1.Math;
                            var3 = var4.abs;
                            var5 = _closure2_slot11;
                            var1 = var5.get;
                            var1 = var1.bind(var5)();
                            var3 = var3.bind(var4)(var1);
                            var1 = _closure2_slot3;
                            var1 = var3 > var1;
                            var6 = 0;
                            var5 = 0;
                            if (!var1) {
                                _fun91504_ip = 103;
                                continue _fun91504
                            }
                        case 90:
                            var3 = _closure2_slot11;
                            var1 = var3.get;
                            var5 = var1.bind(var3)();
                        case 103:
                            var8 = _closure1_slot6;
                            var4 = _closure2_slot2;
                            var3 = var4.get;
                            var7 = var3.bind(var4)();
                            var4 = _closure2_slot4;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var3 = undefined;
                            var4 = var8.bind(var3)(var7, var4, var5);
                            if (!(var6 === var5)) {
                                _fun91504_ip = 174;
                                continue _fun91504
                            }
                        case 149:
                            var7 = _closure2_slot4;
                            var6 = var7.set;
                            var5 = _closure1_slot10;
                            var5 = var5.bind(var3)(var4);
                            var5 = var6.bind(var7)(var5);
                            _fun91504_ip = 211;
                            continue _fun91504;
                        case 174:
                            var6 = _closure2_slot4;
                            var5 = var6.set;
                            var7 = _closure1_slot8;
                            var8 = _closure2_slot11;
                            var1 = var8.get;
                            var1 = var1.bind(var8)();
                            var1 = var7.bind(var3)(var4, var1);
                            var1 = var5.bind(var6)(var1);
                        case 211:
                            var1 = _closure2_slot7;
                            if (!(var2 != var1)) {
                                _fun91504_ip = 265;
                                continue _fun91504
                            }
                        case 219:
                            var2 = _closure2_slot7;
                            var1 = {};
                            var5 = arg1;
                            var1.success = var5;
                            var1.destination = var4;
                            var4 = _closure2_slot10;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var1.startPosition = var0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0, var1);
                        case 265:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = {};
                var6.start = var12;
                var6.translate = var11;
                var6.snapPositions = var10;
                var6.velocity = var9;
                var6.swipeVelocityThreshold = var8;
                var8 = _closure1_slot6;
                var6.getNearestValue = var8;
                var8 = _closure1_slot8;
                var6.withPanGestureSpring = var8;
                var8 = _closure1_slot10;
                var6.withPanGestureTiming = var8;
                var6.onEnd = var7;
                var1.__closure = var6;
                var6 = 15665959414289.0;
                var1.__workletHash = var6;
                var6 = _closure1_slot12;
                var1.__initData = var6;
                var2 = var2.bind(var4)(var1);
                var1 = var2.onFinalize;
                var0 = function() {
                    _fun91505: for (var _fun91505_ip = 0;;) switch (_fun91505_ip) {
                        case 0:
                            var2 = _closure2_slot9;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun91505_ip = 29;
                                continue _fun91505
                            }
                        case 13:
                            var2 = _closure2_slot9;
                            var1 = var2.set;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 29:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = {};
                var4.isGestureInProgress = var5;
                var0.__closure = var4;
                var4 = 11128244755178.0;
                var0.__workletHash = var4;
                var3 = _closure1_slot11;
                var0.__initData = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var6;
    var2.SPRING_CONFIG = var5;
    var2.TIMING_CONFIG = var4;
    var2.withPanGestureSpring = var3;
    var2.withPanGestureTiming = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4884, 4081, 4097, 3720, 4961, 2]);