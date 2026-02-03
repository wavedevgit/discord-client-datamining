// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0() {
        _fun33839: for (var _fun33839_ip = 0;;) switch (_fun33839_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.easingV;
                if (var1) {
                    _fun33839_ip = 53;
                    continue _fun33839
                }
            case 15:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.getEasingByName;
                var1 = 'linear';
                var1 = var2.bind(var4)(var1);
                return var1;
            case 53:
                var6 = var0.easingV;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = 1;
                var2 = var1[var2];
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var2 = var2.EasingNameSymbol;
                var2 = var6[var2];
                var6 = 0;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.WebEasings;
                var4 = var2 in var1;
                var7 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var7.bind(var5)(var1);
                if (var4) {
                    _fun33839_ip = 220;
                    continue _fun33839
                }
            case 132:
                var4 = var1.maybeGetBezierEasing;
                var0 = var0.easingV;
                var0 = var4.bind(var1)(var0);
                if (var0) {
                    _fun33839_ip = 218;
                    continue _fun33839
                }
            case 152:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 2;
                var7 = var3[var7];
                var7 = var4.bind(var5)(var7);
                var9 = var7.logger;
                var8 = var9.warn;
                var7 = 'Selected easing is not currently supported on web. Using linear easing instead.';
                var7 = var8.bind(var9)(var7);
                var3 = var3[var6];
                var5 = var4.bind(var5)(var3);
                var4 = var5.getEasingByName;
                var3 = 'linear';
                var0 = var4.bind(var5)(var3);
            case 218:
                return var0;
            case 220:
                var0 = var1.getEasingByName;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = function() {
        _fun33840: for (var _fun33840_ip = 0;;) switch (_fun33840_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var1 = arguments.length;
                var0 = 0;
                var3 = var1 > var0;
                var1 = 1000;
                var5 = var1;
                if (!var3) {
                    _fun33840_ip = 40;
                    continue _fun33840
                }
            case 25:
                var3 = arguments[var0];
                var5 = var1;
                if (!(var4 !== var3)) {
                    _fun33840_ip = 40;
                    continue _fun33840
                }
            case 36:
                var5 = arguments[var0];
            case 40:
                var0 = global;
                var3 = var0.Math;
                var2 = var3.floor;
                var4 = var0.Math;
                var0 = var4.random;
                var4 = var0.bind(var4)();
                var0 = 1;
                var0 = var5 + var0;
                var0 = var4 * var0;
                var0 = var2.bind(var3)(var0);
                var0 = var0 / var1;
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var2 = function arg0() {
        _fun33841: for (var _fun33841_ip = 0;;) switch (_fun33841_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.randomizeDelay;
                var0 = 0;
                if (!var1) {
                    _fun33841_ip = 27;
                    continue _fun33841
                }
            case 14:
                var4 = _closure1_slot3;
                var3 = undefined;
                var0 = var4.bind(var3)();
            case 27:
                var3 = var2.delayV;
                if (!var3) {
                    _fun33841_ip = 80;
                    continue _fun33841
                }
            case 36:
                if (var1) {
                    _fun33841_ip = 57;
                    continue _fun33841
                }
            case 39:
                var3 = var2.delayV;
                var1 = 1000;
                var1 = var3 / var1;
                _fun33841_ip = 77;
                continue _fun33841;
            case 57:
                var4 = _closure1_slot3;
                var3 = var2.delayV;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
            case 77:
                var0 = var1;
            case 80:
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var2 = function arg0, arg1() {
        _fun33842: for (var _fun33842_ip = 0;;) switch (_fun33842_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 5;
                var0 = var0[var6];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var0 = var0.Animations;
                var5 = var4 in var0;
                var0 = 0.3;
                if (!var5) {
                    _fun33842_ip = 86;
                    continue _fun33842
                }
            case 54:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var5.bind(var3)(var2);
                var2 = var2.Animations;
                var2 = var2[var4];
                var0 = var2.duration;
            case 86:
                var2 = var1.durationV;
                if (!(var3 !== var2)) {
                    _fun33842_ip = 112;
                    continue _fun33842
                }
            case 96:
                var2 = var1.durationV;
                var1 = 1000;
                var0 = var2 / var1;
            case 112:
                return var0;
        }
    };
    var _closure1_slot5 = var2;
    var2 = function arg0() {
        _fun33843: for (var _fun33843_ip = 0;;) switch (_fun33843_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.callbackV;
                var2 = undefined;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun33843_ip = 23;
                    continue _fun33843
                }
            case 17:
                var0 = var1.callbackV;
            case 23:
                return var0;
        }
    };
    var _closure1_slot6 = var2;
    var2 = function arg0() {
        var0 = arg0;
        var0 = var0.reversed;
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var _closure1_slot7 = var2;
    var3 = function arg0() {
        var4 = arg0;
        var0 = var4.getBoundingClientRect;
        var0 = var0.bind(var4)();
        var3 = {};
        var1 = var0.top;
        var3.top = var1;
        var1 = var0.left;
        var3.left = var1;
        var1 = var0.width;
        var3.width = var1;
        var0 = var0.height;
        var3.height = var0;
        var2 = _closure1_slot10;
        var0 = undefined;
        var2 = var2.bind(var0)(var4);
        var3.scrollOffsets = var2;
        var2 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 7;
        var1 = var5[var1];
        var1 = var2.bind(var0)(var1);
        var2 = var1.snapshots;
        var1 = var2.set;
        var1 = var1.bind(var2)(var4, var3);
        return var0;
    };
    var _closure1_slot8 = var3;
    var2 = function arg0, arg1() {
        _fun33846: for (var _fun33846_ip = 0;;) switch (_fun33846_ip) {
            case 0:
                var7 = arg0;
                var3 = arg1;
                var0 = undefined;
                var5 = undefined;
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var3;
                var2 = arguments.length;
                var4 = 2;
                var2 = var2 > var4;
                if (!var2) {
                    _fun33846_ip = 41;
                    continue _fun33846
                }
            case 33:
                var6 = arguments[var4];
                var2 = var0 !== var6;
            case 41:
                if (!var2) {
                    _fun33846_ip = 48;
                    continue _fun33846
                }
            case 44:
                var2 = arguments[var4];
            case 48:
                var _closure2_slot2 = var2;
                var2 = arguments.length;
                var4 = 3;
                var6 = var2 > var4;
                var2 = null;
                if (!var6) {
                    _fun33846_ip = 81;
                    continue _fun33846
                }
            case 67:
                var6 = arguments[var4];
                var2 = null;
                if (!(var0 !== var6)) {
                    _fun33846_ip = 81;
                    continue _fun33846
                }
            case 77:
                var2 = arguments[var4];
            case 81:
                var _closure2_slot3 = var2;
                var5 = var3.animationName;
                var _closure2_slot4 = var5;
                var6 = var3.duration;
                var _closure2_slot5 = var6;
                var2 = var3.delay;
                var _closure2_slot6 = var2;
                var4 = var3.easing;
                var _closure2_slot7 = var4;
                var8 = function() {
                    var1 = _closure2_slot0;
                    var3 = var1.style;
                    var2 = _closure2_slot4;
                    var3.animationName = var2;
                    var4 = var1.style;
                    var7 = _closure2_slot5;
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var3 = var3.concat;
                    var6 = '';
                    var5 = 's';
                    var3 = var3.bind(var6)(var7, var5);
                    var4.animationDuration = var3;
                    var3 = var1.style;
                    var4 = _closure2_slot6;
                    var2 = var2.HermesInternal;
                    var2 = var2.concat;
                    var2 = var2.bind(var6)(var4, var5);
                    var3.animationDelay = var2;
                    var1 = var1.style;
                    var0 = _closure2_slot7;
                    var1.animationTimingFunction = var0;
                    var0 = undefined;
                    return var0;
                };
                var9 = var3.animationType;
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var4 = 4;
                var4 = var11[var4];
                var4 = var10.bind(var0)(var4);
                var4 = var4.LayoutAnimationType;
                var4 = var4.ENTERING;
                if (!(var9 !== var4)) {
                    _fun33846_ip = 180;
                    continue _fun33846
                }
            case 174:
                var4 = var8.bind(var0)();
                _fun33846_ip = 193;
                continue _fun33846;
            case 180:
                var4 = global;
                var4 = var4.requestAnimationFrame;
                var4 = var4.bind(var0)(var8);
            case 193:
                var4 = function() {
                    _fun33848: for (var _fun33848_ip = 0;;) switch (_fun33848_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var1 = var1.isDummy;
                            if (!var1) {
                                _fun33848_ip = 26;
                                continue _fun33848
                            }
                        case 16:
                            var3 = _closure2_slot3;
                            var2 = null;
                            var1 = var2 != var3;
                        case 26:
                            if (!var1) {
                                _fun33848_ip = 48;
                                continue _fun33848
                            }
                        case 29:
                            var4 = _closure2_slot3;
                            var3 = var4.contains;
                            var2 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2);
                        case 48:
                            if (!var1) {
                                _fun33848_ip = 78;
                                continue _fun33848
                            }
                        case 51:
                            var2 = _closure2_slot0;
                            var1 = true;
                            var2.removedAfterAnimation = var1;
                            var1 = _closure2_slot3;
                            var0 = var1.removeChild;
                            var0 = var0.bind(var1)(var2);
                        case 78:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot8 = var4;
                var4 = false;
                var _closure2_slot9 = var4;
                var4 = function arg0() {
                    _fun33849: for (var _fun33849_ip = 0;;) switch (_fun33849_ip) {
                        case 0:
                            var2 = _closure2_slot9;
                            var0 = !var2;
                            if (var2) {
                                _fun33849_ip = 23;
                                continue _fun33849
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var0 = var2.callback;
                        case 23:
                            if (!var0) {
                                _fun33849_ip = 50;
                                continue _fun33849
                            }
                        case 26:
                            var3 = _closure2_slot1;
                            var2 = var3.callback;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0);
                            var0 = true;
                            _closure2_slot9 = var0;
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot10 = var4;
                var4 = function() { // Environment: var1
                    _fun33850: for (var _fun33850_ip = 0;;) switch (_fun33850_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun33850_ip = 28;
                                continue _fun33850
                            }
                        case 10:
                            var3 = _closure1_slot8;
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                        case 28:
                            var2 = _closure2_slot8;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var3 = _closure2_slot10;
                            var2 = true;
                            var2 = var3.bind(var0)(var2);
                            var4 = _closure2_slot0;
                            var3 = var4.removeEventListener;
                            var2 = _closure2_slot11;
                            var1 = 'animationcancel';
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var7.onanimationend = var4;
                var4 = function() {
                    var2 = _closure2_slot8;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var3 = _closure2_slot10;
                    var2 = false;
                    var2 = var3.bind(var0)(var2);
                    var4 = _closure2_slot0;
                    var3 = var4.removeEventListener;
                    var2 = _closure2_slot11;
                    var1 = 'animationcancel';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var _closure2_slot11 = var4;
                var4 = function() { // Environment: var1
                    _fun33852: for (var _fun33852_ip = 0;;) switch (_fun33852_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var4 = var0.animationType;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 4;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.LayoutAnimationType;
                            var3 = var3.ENTERING;
                            if (!(var4 === var3)) {
                                _fun33852_ip = 101;
                                continue _fun33852
                            }
                        case 54:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 8;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5._updatePropsJS;
                            var3 = {};
                            var2 = 'initial';
                            var3.visibility = var2;
                            var2 = _closure2_slot0;
                            var2 = var4.bind(var5)(var3, var2);
                        case 101:
                            var4 = _closure2_slot0;
                            var3 = var4.addEventListener;
                            var2 = _closure2_slot11;
                            var1 = 'animationcancel';
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var7.onanimationstart = var4;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 5;
                var4 = var8[var4];
                var4 = var7.bind(var0)(var4);
                var4 = var4.Animations;
                var4 = var5 in var4;
                if (var4) {
                    _fun33846_ip = 325;
                    continue _fun33846
                }
            case 283:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 9;
                var3 = var7[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.scheduleAnimationCleanup;
                var2 = var6 + var2;
                var1 = function() { // Environment: var1
                    _fun33853: for (var _fun33853_ip = 0;;) switch (_fun33853_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun33853_ip = 76;
                                continue _fun33853
                            }
                        case 10:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var0 = 7;
                            var2 = var7[var0];
                            var5 = undefined;
                            var4 = var6.bind(var5)(var2);
                            var3 = var4.setElementPosition;
                            var2 = _closure2_slot0;
                            var0 = var7[var0];
                            var0 = var6.bind(var5)(var0);
                            var5 = var0.snapshots;
                            var0 = var5.get;
                            var0 = var0.bind(var5)(var2);
                            var0 = var3.bind(var4)(var2, var0);
                        case 76:
                            var2 = _closure2_slot8;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var2 = _closure2_slot10;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var5, var2, var1);
            case 325:
                return var0;
        }
    };
    var _closure1_slot9 = var2;
    var4 = function arg0() {
        _fun33854: for (var _fun33854_ip = 0;;) switch (_fun33854_ip) {
            case 0:
                var2 = arg0;
                var0 = {
                    'scrollTopOffset': 0,
                    'scrollLeftOffset': 0
                };
                var1 = 0;
                if (!var2) {
                    _fun33854_ip = 107;
                    continue _fun33854
                }
            case 22:
                var3 = var2.scrollTop;
                var3 = var1 !== var3;
                if (!var3) {
                    _fun33854_ip = 45;
                    continue _fun33854
                }
            case 35:
                var4 = var0.scrollTopOffset;
                var3 = var1 === var4;
            case 45:
                if (!var3) {
                    _fun33854_ip = 60;
                    continue _fun33854
                }
            case 48:
                var3 = var2.scrollTop;
                var0.scrollTopOffset = var3;
            case 60:
                var3 = var2.scrollLeft;
                var3 = var1 !== var3;
                if (!var3) {
                    _fun33854_ip = 83;
                    continue _fun33854
                }
            case 73:
                var4 = var0.scrollLeftOffset;
                var3 = var1 === var4;
            case 83:
                if (!var3) {
                    _fun33854_ip = 98;
                    continue _fun33854
                }
            case 86:
                var3 = var2.scrollLeft;
                var0.scrollLeftOffset = var3;
            case 98:
                var2 = var2.parentElement;
                if (var2) {
                    _fun33854_ip = 22;
                    continue _fun33854
                }
            case 107:
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var1, var4, var5);
    var4 = function arg0() {
        _fun33855: for (var _fun33855_ip = 0;;) switch (_fun33855_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.reduceMotionV;
                if (var2) {
                    _fun33855_ip = 51;
                    continue _fun33855
                }
            case 15:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.ReducedMotionManager;
                var2 = var2.jsValue;
                return var2;
            case 51:
                var3 = var1.reduceMotionV;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 4;
                var1 = var1[var5];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var1 = var1.ReduceMotion;
                var1 = var1.Never;
                if (!(var1 !== var3)) {
                    _fun33855_ip = 166;
                    continue _fun33855
                }
            case 95:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ReduceMotion;
                var1 = var1.Always;
                if (!(var1 !== var3)) {
                    _fun33855_ip = 162;
                    continue _fun33855
                }
            case 128:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.ReducedMotionManager;
                var0 = var0.jsValue;
                return var0;
            case 162:
                var0 = true;
                return var0;
            case 166:
                var0 = false;
                return var0;
        }
    };
    var1.getReducedMotionFromConfig = var4;
    var4 = function arg0, arg1, arg2() {
        var5 = arg0;
        var3 = arg2;
        var0 = {};
        var0.animationName = var5;
        var1 = arg1;
        var0.animationType = var1;
        var4 = _closure1_slot5;
        var2 = undefined;
        var4 = var4.bind(var2)(var3, var5);
        var0.duration = var4;
        var4 = _closure1_slot4;
        var4 = var4.bind(var2)(var3);
        var0.delay = var4;
        var4 = _closure1_slot2;
        var4 = var4.bind(var2)(var3);
        var0.easing = var4;
        var4 = _closure1_slot6;
        var4 = var4.bind(var2)(var3);
        var0.callback = var4;
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        var0.reversed = var1;
        return var0;
    };
    var1.getProcessedConfig = var4;
    var4 = function arg0, arg1() {
        _fun33857: for (var _fun33857_ip = 0;;) switch (_fun33857_ip) {
            case 0:
                var2 = arg1;
                var1 = arg0;
                var0 = undefined;
                var6 = undefined;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 6;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var3 = var3.Keyframe;
                var3 = var2 instanceof var3;
                if (!var3) {
                    _fun33857_ip = 166;
                    continue _fun33857
                }
            case 46:
                var3 = var1;
                var4 = var3.style;
                var3 = 'forwards';
                var4.animationFillMode = var3;
                var3 = global;
                var4 = var3.Object;
                var3 = var4.values;
                var2 = var2.definitions;
                var3 = var3.bind(var4)(var2);
                var5 = var3;
                var2 = var5[Symbol.iterator];
                var5 = var2().next;
                var4 = 'originY';
                var3 = 'originX';
            case 106:
                var7 = var5().value;
                var8 = var2;
                if (!(var8 !== var0)) {
                    _fun33857_ip = 166;
                    continue _fun33857
                }
            case 117: // try_start_0
                var6 = var7;
                var7 = var3 in var7;
                if (var7) {
                    _fun33857_ip = 139;
                    continue _fun33857
                }
            case 127:
                var7 = var6;
                var7 = var4 in var7;
                if (var7) {
                    _fun33857_ip = 139;
                    continue _fun33857
                }
            case 137: // try_end0
                _fun33857_ip = 106;
                continue _fun33857;
            case 139: // try_start_1
                var3 = var1.style;
                var1 = 'absolute';
                var3.position = var1;
            case 154: // try_end1
                var2.return();
                return var0;
            case 159: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 166:
                return var0;
        }
    };
    var1.maybeModifyStyleForKeyframe = var4;
    var1.saveSnapshot = var3;
    var1.setElementAnimation = var2;
    var2 = function arg0, arg1, arg2() {
        _fun33858: for (var _fun33858_ip = 0;;) switch (_fun33858_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var7 = arg2;
                var1 = var2.animationName;
                var0 = 'LinearTransition';
                if (!(var0 !== var1)) {
                    _fun33858_ip = 276;
                    continue _fun33858
                }
            case 26:
                var0 = 'SequencedTransition';
                if (!(var0 !== var1)) {
                    _fun33858_ip = 237;
                    continue _fun33858
                }
            case 37:
                var0 = 'FadingTransition';
                if (!(var0 !== var1)) {
                    _fun33858_ip = 198;
                    continue _fun33858
                }
            case 48:
                var0 = 'JumpingTransition';
                if (!(var0 !== var1)) {
                    _fun33858_ip = 159;
                    continue _fun33858
                }
            case 56:
                var0 = 'CurvedTransition';
                if (!(var0 !== var1)) {
                    _fun33858_ip = 117;
                    continue _fun33858
                }
            case 64:
                var0 = 'EntryExitTransition';
                if (!(var0 === var1)) {
                    _fun33858_ip = 276;
                    continue _fun33858
                }
            case 75:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var1);
                var0 = var0.TransitionType;
                var4 = var0.ENTRY_EXIT;
                _fun33858_ip = 313;
                continue _fun33858;
            case 117:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var5.bind(var0)(var1);
                var0 = var0.TransitionType;
                var4 = var0.CURVED;
                _fun33858_ip = 313;
                continue _fun33858;
            case 159:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var5.bind(var0)(var1);
                var0 = var0.TransitionType;
                var4 = var0.JUMPING;
                _fun33858_ip = 313;
                continue _fun33858;
            case 198:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var5.bind(var0)(var1);
                var0 = var0.TransitionType;
                var4 = var0.FADING;
                _fun33858_ip = 313;
                continue _fun33858;
            case 237:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var5.bind(var0)(var1);
                var0 = var0.TransitionType;
                var4 = var0.SEQUENCED;
                _fun33858_ip = 313;
                continue _fun33858;
            case 276:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var5.bind(var0)(var1);
                var0 = var0.TransitionType;
                var4 = var0.LINEAR;
            case 313:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 10;
                var5 = var9[var0];
                var0 = undefined;
                var6 = var8.bind(var0)(var5);
                var5 = var6.TransitionGenerator;
                var6 = var5.bind(var6)(var4, var7);
                var5 = var6.transitionKeyframeName;
                var6 = var6.dummyTransitionKeyframeName;
                var2.animationName = var5;
                var5 = 5;
                var5 = var9[var5];
                var5 = var8.bind(var0)(var5);
                var5 = var5.TransitionType;
                var5 = var5.CURVED;
                if (!(var4 === var5)) {
                    _fun33858_ip = 463;
                    continue _fun33858
                }
            case 396:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 11;
                var4 = var8[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.prepareCurvedTransition;
                var14 = var5;
                var13 = var3;
                var12 = var2;
                var11 = var7;
                var10 = var6;
                var4 = var14[var4](var13, var12, var11, var10, var9);
                var6 = _closure1_slot9;
                var5 = var4.dummy;
                var4 = var4.dummyAnimationConfig;
                var4 = var6.bind(var0)(var5, var4);
            case 463:
                var1 = _closure1_slot9;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
        }
    };
    var1.handleLayoutTransition = var2;
    var0 = function arg0, arg1() {
        _fun33859: for (var _fun33859_ip = 0;;) switch (_fun33859_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var5 = var3.offsetParent;
                var0 = var3.cloneNode;
                var4 = var0.bind(var3)();
                var _closure2_slot1 = var4;
                var0 = true;
                var4.isDummy = var0;
                var0 = var4.style;
                var1 = '';
                var0.animationName = var1;
                var3.dummyClone = var4;
                var0 = var3.style;
                var0.animationName = var1;
                var0 = global;
                var0 = var0.Map;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var14 = var1;
                var0 = new var14[var0](var13);
                var0 = var0 instanceof Object ? var0 : var1;
                var _closure2_slot2 = var0;
                var1 = function arg0() {
                    _fun33860: for (var _fun33860_ip = 0;;) switch (_fun33860_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure2_slot2;
                            var2 = var4.set;
                            var1 = {};
                            var5 = var0.scrollTop;
                            var1.top = var5;
                            var5 = var0.scrollLeft;
                            var1.left = var5;
                            var1 = var2.bind(var4)(var0, var1);
                            var1 = global;
                            var2 = var1.Array;
                            var1 = var2.from;
                            var0 = var0.children;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0;
                            var2 = var1[Symbol.iterator];
                            var1 = var2().next;
                            var0 = undefined;
                        case 74:
                            var5 = var1().value;
                            var4 = var2;
                            if (!(var4 !== var0)) {
                                _fun33860_ip = 103;
                                continue _fun33860
                            }
                        case 85: // try_start_0
                            var4 = _closure2_slot3;
                            var4 = var4.bind(var0)(var5);
                        case 94: // try_end0
                            _fun33860_ip = 74;
                            continue _fun33860;
                        case 96: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 103:
                            return var0;
                    }
                };
                var _closure2_slot3 = var1;
                var0 = undefined;
                var1 = var1.bind(var0)(var3);
                var1 = var3.firstChild;
                if (!var1) {
                    _fun33859_ip = 152;
                    continue _fun33859
                }
            case 126:
                var6 = var4.appendChild;
                var1 = var3.firstChild;
                var1 = var6.bind(var4)(var1);
                var1 = var3.firstChild;
                if (var1) {
                    _fun33859_ip = 126;
                    continue _fun33859
                }
            case 152:
                var1 = null;
                if (!(var1 != var5)) {
                    _fun33859_ip = 169;
                    continue _fun33859
                }
            case 158:
                var1 = var5.appendChild;
                var1 = var1.bind(var5)(var4);
            case 169:
                var1 = function arg0() {
                    _fun33861: for (var _fun33861_ip = 0;;) switch (_fun33861_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure2_slot2;
                            var2 = var4.get;
                            var5 = _closure2_slot1;
                            var1 = var0;
                            if (!(var1 === var5)) {
                                _fun33861_ip = 30;
                                continue _fun33861
                            }
                        case 26:
                            var1 = _closure2_slot0;
                        case 30:
                            var1 = var2.bind(var4)(var1);
                            if (!var1) {
                                _fun33861_ip = 60;
                                continue _fun33861
                            }
                        case 38:
                            var2 = var1.top;
                            var0.scrollTop = var2;
                            var1 = var1.left;
                            var0.scrollLeft = var1;
                        case 60:
                            var1 = global;
                            var2 = var1.Array;
                            var1 = var2.from;
                            var0 = var0.children;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0;
                            var2 = var1[Symbol.iterator];
                            var1 = var2().next;
                            var0 = undefined;
                        case 91:
                            var5 = var1().value;
                            var4 = var2;
                            if (!(var4 !== var0)) {
                                _fun33861_ip = 120;
                                continue _fun33861
                            }
                        case 102: // try_start_0
                            var4 = _closure2_slot4;
                            var4 = var4.bind(var0)(var5);
                        case 111: // try_end0
                            _fun33861_ip = 91;
                            continue _fun33861;
                        case 113: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 120:
                            return var0;
                    }
                };
                var _closure2_slot4 = var1;
                var1 = var1.bind(var0)(var4);
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 7;
                var2 = var2[var7];
                var2 = var6.bind(var0)(var2);
                var6 = var2.snapshots;
                var2 = var6.get;
                var6 = var2.bind(var6)(var3);
                var2 = _closure1_slot10;
                var2 = var2.bind(var0)(var3);
                var9 = var2.scrollTopOffset;
                var3 = var6.scrollOffsets;
                var3 = var3.scrollTopOffset;
                if (!(var9 !== var3)) {
                    _fun33859_ip = 272;
                    continue _fun33859
                }
            case 253:
                var8 = var6.top;
                var3 = var3 - var9;
                var3 = var8 + var3;
                var6.top = var3;
            case 272:
                var8 = var2.scrollLeftOffset;
                var2 = var6.scrollOffsets;
                var2 = var2.scrollLeftOffset;
                if (!(var8 !== var2)) {
                    _fun33859_ip = 313;
                    continue _fun33859
                }
            case 294:
                var3 = var6.left;
                var2 = var2 - var8;
                var2 = var3 + var2;
                var6.left = var2;
            case 313:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = var2[var7];
                var8 = var3.bind(var0)(var8);
                var9 = var8.snapshots;
                var8 = var9.set;
                var8 = var8.bind(var9)(var4, var6);
                var2 = var2[var7];
                var3 = var3.bind(var0)(var2);
                var2 = var3.setElementPosition;
                var2 = var2.bind(var3)(var4, var6);
                var3 = _closure1_slot9;
                var12 = arg1;
                var11 = false;
                var14 = undefined;
                var13 = var4;
                var10 = var5;
                var1 = var14[var3](var13, var12, var11, var10, var9);
                return var0;
        }
    };
    var1.handleExitingAnimation = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3780, 3773, 3725, 3762, 3746, 3777, 3791, 3807, 3731, 3808, 3809, 3814]);