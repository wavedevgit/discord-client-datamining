// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0, arg1) { // Original name: tryGetAnimationConfig, environment: var0
        _fun33610: for (var _fun33610_ip = 0;;) switch (_fun33610_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var3 = var3[var1];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var3 = var3.LayoutAnimationType;
                var3 = var3.ENTERING;
                if (!(var4 !== var3)) {
                    _fun33610_ip = 130;
                    continue _fun33610
                }
            case 46:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var1];
                var3 = var6.bind(var5)(var3);
                var3 = var3.LayoutAnimationType;
                var3 = var3.EXITING;
                if (!(var4 !== var3)) {
                    _fun33610_ip = 122;
                    continue _fun33610
                }
            case 79:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var1];
                var3 = var6.bind(var5)(var3);
                var3 = var3.LayoutAnimationType;
                var6 = var3.LAYOUT;
                var3 = null;
                if (!(var4 === var6)) {
                    _fun33610_ip = 120;
                    continue _fun33610
                }
            case 114:
                var3 = var2.layout;
            case 120:
                _fun33610_ip = 128;
                continue _fun33610;
            case 122:
                var3 = var2.exiting;
            case 128:
                _fun33610_ip = 136;
                continue _fun33610;
            case 130:
                var3 = var2.entering;
            case 136:
                if (var3) {
                    _fun33610_ip = 143;
                    continue _fun33610
                }
            case 139:
                var2 = null;
                return var2;
            case 143:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = var6[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.LayoutAnimationType;
                var1 = var1.LAYOUT;
                var7 = var4 === var1;
                var1 = 4;
                var1 = var6[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.Keyframe;
                var1 = var3 instanceof var1;
                var2 = var3.initialValues;
                var6 = var5 !== var2;
                if (var1) {
                    _fun33610_ip = 243;
                    continue _fun33610
                }
            case 211:
                var8 = 'function';
                var2 = typeof var3;
                if (!(var8 !== var2)) {
                    _fun33610_ip = 235;
                    continue _fun33610
                }
            case 222:
                var2 = var3.constructor;
                var11 = var2.presetName;
                _fun33610_ip = 241;
                continue _fun33610;
            case 235:
                var11 = var3.presetName;
            case 241:
                _fun33610_ip = 280;
                continue _fun33610;
            case 243:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 5;
                var2 = var9[var2];
                var9 = var8.bind(var5)(var2);
                var8 = var9.createCustomKeyFrameAnimation;
                var2 = var3.definitions;
                var11 = var8.bind(var9)(var2);
            case 280:
                var2 = var11;
                if (!var6) {
                    _fun33610_ip = 324;
                    continue _fun33610
                }
            case 286:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 5;
                var8 = var10[var8];
                var10 = var9.bind(var5)(var8);
                var9 = var10.createAnimationWithInitialValues;
                var8 = var3.initialValues;
                var2 = var9.bind(var10)(var11, var8);
            case 324:
                if (var7) {
                    _fun33610_ip = 330;
                    continue _fun33610
                }
            case 327:
                var7 = var1;
            case 330:
                if (var7) {
                    _fun33610_ip = 336;
                    continue _fun33610
                }
            case 333:
                var7 = var6;
            case 336:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 1;
                var6 = var9[var6];
                var6 = var8.bind(var5)(var6);
                var6 = var6.Animations;
                var8 = var2 in var6;
                var6 = !var8;
                if (var8) {
                    _fun33610_ip = 375;
                    continue _fun33610
                }
            case 372:
                var6 = !var7;
            case 375:
                if (!var6) {
                    _fun33610_ip = 422;
                    continue _fun33610
                }
            case 378:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 2;
                var7 = var9[var7];
                var7 = var8.bind(var5)(var7);
                var9 = var7.logger;
                var8 = var9.warn;
                var7 = "Couldn't load entering/exiting animation. Current version supports only predefined animations with modifiers: duration, delay, easing, randomizeDelay, withCallback, reducedMotion.";
                var7 = var8.bind(var9)(var7);
                var6 = true;
            case 422:
                if (var6) {
                    _fun33610_ip = 568;
                    continue _fun33610
                }
            case 428:
                if (!var1) {
                    _fun33610_ip = 533;
                    continue _fun33610
                }
            case 431:
                var1 = global;
                var7 = var1.Object;
                var6 = var7.keys;
                var1 = var3.definitions;
                var8 = var6.bind(var7)(var1);
                var6 = var8.includes;
                var1 = '100';
                var1 = var6.bind(var8)(var1);
                if (var1) {
                    _fun33610_ip = 488;
                    continue _fun33610
                }
            case 474:
                var7 = var8.includes;
                var6 = 'to';
                var1 = var7.bind(var8)(var6);
            case 488:
                if (var1) {
                    _fun33610_ip = 533;
                    continue _fun33610
                }
            case 491:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 2;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var7 = var1.logger;
                var6 = var7.warn;
                var1 = "Neither '100' nor 'to' was specified in Keyframe definition. This may result in wrong final position of your component. One possible solution is to duplicate last timestamp in definition as '100' (or 'to')";
                var1 = var6.bind(var7)(var1);
            case 533:
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 3;
                var0 = var6[var0];
                var1 = var1.bind(var5)(var0);
                var0 = var1.getProcessedConfig;
                var0 = var0.bind(var1)(var2, var4, var3);
                return var0;
            case 568:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = function(arg0, arg1, arg2, arg3) { // Original name: startWebLayoutAnimation, environment: var0
        _fun33611: for (var _fun33611_ip = 0;;) switch (_fun33611_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var6 = arg2;
                var7 = arg3;
                var3 = _closure1_slot2;
                var0 = undefined;
                var4 = var3.bind(var0)(var2, var6);
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 3;
                var8 = var8[var3];
                var9 = var9.bind(var0)(var8);
                var8 = var9.maybeModifyStyleForKeyframe;
                var2 = var2.entering;
                var2 = var8.bind(var9)(var5, var2);
                var2 = null;
                var8 = var2 == var4;
                var9 = undefined;
                if (var8) {
                    _fun33611_ip = 82;
                    continue _fun33611
                }
            case 76:
                var9 = var4.animationName;
            case 82:
                var11 = _closure1_slot0;
                var8 = _closure1_slot1;
                var10 = 1;
                var8 = var8[var10];
                var8 = var11.bind(var0)(var8);
                var8 = var8.Animations;
                var8 = var9 in var8;
                if (!var8) {
                    _fun33611_ip = 180;
                    continue _fun33611
                }
            case 115:
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var10];
                var8 = var9.bind(var0)(var8);
                var8 = var8.Animations;
                var9 = var2 == var4;
                var2 = undefined;
                if (var9) {
                    _fun33611_ip = 153;
                    continue _fun33611
                }
            case 147:
                var2 = var4.animationName;
            case 153:
                var2 = var8[var2];
                var9 = var2.style;
                var8 = var5.style;
                var2 = function(arg0, arg1) { // Original name: maybeReportOverwrittenProperties, environment: var2
                    _fun33612: for (var _fun33612_ip = 0;;) switch (_fun33612_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = undefined;
                            var6 = undefined;
                            var1 = global;
                            var3 = var1.Set;
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var14 = var4;
                            var3 = new var14[var3](var13);
                            var3 = var3 instanceof Object ? var3 : var4;
                            var6 = var3;
                            var _closure3_slot0 = var3;
                            var4 = var5.matchAll;
                            var3 = /([a-zA-Z-]+)(?=:)/g;
                            var5 = var4.bind(var5)(var3);
                            var3 = var5;
                            var4 = var3[Symbol.iterator];
                            var3 = var4().next;
                            var5 = 1;
                        case 80:
                            var7 = var3().value;
                            var8 = var4;
                            if (!(var8 !== var0)) {
                                _fun33612_ip = 117;
                                continue _fun33612
                            }
                        case 91: // try_start_0
                            var9 = var6;
                            var8 = var9.add;
                            var7 = var7[var5];
                            var7 = var8.bind(var9)(var7);
                        case 108: // try_end0
                            _fun33612_ip = 80;
                            continue _fun33612;
                        case 110: // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var4.return();
                            throw var3;
                        case 117:
                            var6 = var1.Array;
                            var4 = var6.from;
                            var3 = arg1;
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.filter;
                            var2 = function(arg0) { // Environment: var2
                                var2 = _closure3_slot0;
                                var1 = var2.has;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var6 = var3.bind(var4)(var2);
                            var3 = var6.length;
                            var2 = 0;
                            if (!(var2 !== var3)) {
                                _fun33612_ip = 270;
                                continue _fun33612
                            }
                        case 162:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 2;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var3 = var2.logger;
                            var2 = var3.warn;
                            var4 = var6.length;
                            var8 = 'Properties';
                            if (!(var5 === var4)) {
                                _fun33612_ip = 215;
                                continue _fun33612
                            }
                        case 209:
                            var8 = 'Property';
                        case 215:
                            var5 = var6.join;
                            var4 = ', ';
                            var11 = var5.bind(var6)(var4);
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var14 = '';
                            var12 = ' [';
                            var10 = '] may be overwritten by a layout animation. Please wrap your component with an animated view and apply the layout animation on the wrapper.';
                            var13 = var8;
                            var1 = var14[var6](var13, var12, var11, var10, var9);
                            var1 = var2.bind(var3)(var1);
                        case 270:
                            return var0;
                    }
                };
                var2 = var2.bind(var0)(var9, var8);
            case 180:
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                if (var4) {
                    _fun33611_ip = 222;
                    continue _fun33611
                }
            case 191:
                var9 = 6;
                var9 = var2[var9];
                var11 = var8.bind(var0)(var9);
                var10 = var11.makeElementVisible;
                var9 = 0;
                var9 = var10.bind(var11)(var5, var9);
                _fun33611_ip = 425;
                continue _fun33611;
            case 222:
                var9 = 0;
                var2 = var2[var9];
                var2 = var8.bind(var0)(var2);
                var2 = var2.LayoutAnimationType;
                var2 = var2.ENTERING;
                if (!(var2 !== var6)) {
                    _fun33611_ip = 393;
                    continue _fun33611
                }
            case 252:
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var9];
                var2 = var8.bind(var0)(var2);
                var2 = var2.LayoutAnimationType;
                var2 = var2.LAYOUT;
                if (!(var2 !== var6)) {
                    _fun33611_ip = 349;
                    continue _fun33611
                }
            case 285:
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var9];
                var2 = var8.bind(var0)(var2);
                var2 = var2.LayoutAnimationType;
                var2 = var2.EXITING;
                if (!(var2 === var6)) {
                    _fun33611_ip = 425;
                    continue _fun33611
                }
            case 318:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var3];
                var6 = var6.bind(var0)(var2);
                var2 = var6.handleExitingAnimation;
                var2 = var2.bind(var6)(var5, var4);
                _fun33611_ip = 425;
                continue _fun33611;
            case 349:
                var2 = var4.reversed;
                var7.reversed = var2;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var3];
                var6 = var6.bind(var0)(var2);
                var2 = var6.handleLayoutTransition;
                var2 = var2.bind(var6)(var5, var4, var7);
                _fun33611_ip = 425;
                continue _fun33611;
            case 393:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.setElementAnimation;
                var1 = true;
                var1 = var2.bind(var3)(var5, var4, var1);
            case 425:
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var1.startWebLayoutAnimation = var2;
    var0 = function(arg0, arg1, arg2) { // Original name: tryActivateLayoutTransition, environment: var0
        _fun33614: for (var _fun33614_ip = 0;;) switch (_fun33614_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var8 = arg2;
                var0 = var5.layout;
                if (!var0) {
                    _fun33614_ip = 461;
                    continue _fun33614
                }
            case 21:
                var0 = var4.getBoundingClientRect;
                var7 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.areDOMRectsEqual;
                var1 = var1.bind(var2)(var7, var8);
                if (var1) {
                    _fun33614_ip = 461;
                    continue _fun33614
                }
            case 74:
                var1 = var5.layout;
                var1 = var1.enteringV;
                var9 = null;
                var2 = var9 == var1;
                var6 = undefined;
                if (var2) {
                    _fun33614_ip = 103;
                    continue _fun33614
                }
            case 97:
                var6 = var1.presetName;
            case 103:
                var1 = var5.layout;
                var2 = var1.exitingV;
                var10 = var9 == var2;
                var1 = undefined;
                if (var10) {
                    _fun33614_ip = 130;
                    continue _fun33614
                }
            case 124:
                var1 = var2.presetName;
            case 130:
                var10 = var8.width;
                var2 = var7.width;
                var2 = var10 - var2;
                var10 = 2;
                var12 = var2 / var10;
                var11 = var8.height;
                var2 = var7.height;
                var2 = var11 - var2;
                var11 = var2 / var10;
                var2 = {};
                var13 = var8.x;
                var10 = var7.x;
                var10 = var13 - var10;
                var10 = var10 + var12;
                var2.translateX = var10;
                var12 = var8.y;
                var10 = var7.y;
                var10 = var12 - var10;
                var10 = var10 + var11;
                var2.translateY = var10;
                var11 = var8.width;
                var10 = var7.width;
                var10 = var11 / var10;
                var2.scaleX = var10;
                var8 = var8.height;
                var7 = var7.height;
                var7 = var8 / var7;
                var2.scaleY = var7;
                var7 = false;
                var2.reversed = var7;
                var7 = var5.layout;
                var8 = var7.easingXV;
                var7 = var9 == var8;
                var10 = undefined;
                if (var7) {
                    _fun33614_ip = 313;
                    continue _fun33614
                }
            case 283:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var7 = 8;
                var7 = var12[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.EasingNameSymbol;
                var10 = var8[var7];
            case 313:
                var11 = var9 != var10;
                var7 = 'ease';
                var8 = var7;
                if (!var11) {
                    _fun33614_ip = 330;
                    continue _fun33614
                }
            case 327:
                var8 = var10;
            case 330:
                var2.easingX = var8;
                var8 = var5.layout;
                var11 = var8.easingYV;
                var10 = var9 == var11;
                var8 = undefined;
                if (var10) {
                    _fun33614_ip = 386;
                    continue _fun33614
                }
            case 356:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var10 = 8;
                var10 = var13[var10];
                var10 = var12.bind(var3)(var10);
                var10 = var10.EasingNameSymbol;
                var8 = var11[var10];
            case 386:
                var9 = var9 != var8;
                if (!var9) {
                    _fun33614_ip = 396;
                    continue _fun33614
                }
            case 393:
                var7 = var8;
            case 396:
                var2.easingY = var7;
                var2.entering = var6;
                var2.exiting = var1;
                var1 = _closure1_slot3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 0;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.LayoutAnimationType;
                var15 = var0.LAYOUT;
                var18 = undefined;
                var17 = var5;
                var16 = var4;
                var14 = var2;
                var0 = var18[var1](var17, var16, var15, var14, var13);
            case 461:
                var0 = undefined;
                return var0;
        }
    };
    var1.tryActivateLayoutTransition = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3703, 3734, 3682, 3747, 3748, 3766, 3764, 3765, 3730]);