// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun48772: for (var _fun48772_ip = 0;;) switch (_fun48772_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = function arg0() {
                _fun48773: for (var _fun48773_ip = 0;;) switch (_fun48773_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.WeakMap;
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun48773_ip = 105;
                            continue _fun48773
                        }
                    case 21:
                        var2 = var1.WeakMap;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = var3;
                        var2 = new var5[var2](var4);
                        var2 = var2 instanceof Object ? var2 : var3;
                        var _closure2_slot0 = var2;
                        var1 = var1.WeakMap;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var5 = var2;
                        var1 = new var5[var1](var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var _closure2_slot1 = var1;
                        var2 = function arg0() {
                            _fun48774: for (var _fun48774_ip = 0;;) switch (_fun48774_ip) {
                                case 0:
                                    var0 = arg0;
                                    if (var0) {
                                        _fun48774_ip = 15;
                                        continue _fun48774
                                    }
                                case 9:
                                    var0 = _closure2_slot0;
                                    _fun48774_ip = 19;
                                    continue _fun48774;
                                case 15:
                                    var0 = _closure2_slot1;
                                case 19:
                                    return var0;
                            }
                        };
                        _closure1_slot9 = var2;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    case 105:
                        var0 = null;
                        return var0;
                }
            };
            var _closure1_slot9 = var0;
            var0 = 0;
            var3 = var6[var0];
            var0 = undefined;
            var7 = var5.bind(var0)(var3);
            var19 = global;
            var9 = var19.Object;
            var8 = var9.defineProperty;
            var4 = {};
            var3 = true;
            var4.value = var3;
            var3 = '__esModule';
            var3 = var8.bind(var9)(var2, var3, var4);
            var2.default = var0;
            var3 = 1;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var7.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var3 = 2;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var7.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 3;
            var3 = var6[var3];
            var8 = var5.bind(var0)(var3);
            if (!var8) {
                _fun48772_ip = 151;
                continue _fun48772
            }
        case 136:
            var4 = var8.__esModule;
            var3 = var8;
            if (var4) {
                _fun48772_ip = 421;
                continue _fun48772
            }
        case 151:
            var18 = null;
            if (!(var18 !== var8)) {
                _fun48772_ip = 412;
                continue _fun48772
            }
        case 160:
            var9 = typeof var8;
            var4 = 'object';
            if (!(var4 !== var9)) {
                _fun48772_ip = 182;
                continue _fun48772
            }
        case 171:
            var4 = 'function';
            if (!(var4 === var9)) {
                _fun48772_ip = 412;
                continue _fun48772
            }
        case 182:
            var4 = _closure1_slot9;
            var9 = var4.bind(var0)(var0);
            if (!var9) {
                _fun48772_ip = 210;
                continue _fun48772
            }
        case 194:
            var4 = var9.has;
            var4 = var4.bind(var9)(var8);
            if (var4) {
                _fun48772_ip = 400;
                continue _fun48772
            }
        case 210:
            var4 = Object.create(var18);
            var10 = var19.Object;
            var17 = var10.defineProperty;
            if (!var17) {
                _fun48772_ip = 239;
                continue _fun48772
            }
        case 227:
            var10 = var19.Object;
            var17 = var10.getOwnPropertyDescriptor;
        case 239:
            var15 = var8;
            var11 = 'default';
            var10 = undefined;
            for (var12 in var15)
                case 256: {
                    case 265: var23 = var12;
                    if (var11 === var23) {
                        _fun48772_ip = 256;
                        continue _fun48772
                    }
                    case 272: var20 = {};
                    var21 = var20.hasOwnProperty;
                    var20 = var21.call;
                    var20 = var20.bind(var21)(var8, var23);
                    if (!var20) {
                        _fun48772_ip = 256;
                        continue _fun48772
                    }
                    case 294: var20 = null;
                    if (!var17) {
                        _fun48772_ip = 317;
                        continue _fun48772
                    }
                    case 299: var22 = var19.Object;
                    var21 = var22.getOwnPropertyDescriptor;
                    var20 = var21.bind(var22)(var8, var23);
                    case 317: if (!var20) {
                        _fun48772_ip = 336;
                        continue _fun48772
                    }
                    case 320: var21 = var20.get;
                    if (var21) {
                        _fun48772_ip = 349;
                        continue _fun48772
                    }
                    case 328: var21 = var20.set;
                    if (var21) {
                        _fun48772_ip = 349;
                        continue _fun48772
                    }
                    case 336: var21 = var8[var23];
                    var4[var23] = var21;
                    var10 = var20;
                    _fun48772_ip = 256;
                    continue _fun48772;
                    case 349: var22 = var19.Object;
                    var21 = var22.defineProperty;
                    var21 = var21.bind(var22)(var4, var23, var20);
                    var10 = var20;
                    _fun48772_ip = 256;
                    continue _fun48772;
                }
        case 372:
            var4.default = var8;
            var3 = var4;
            if (!var9) {
                _fun48772_ip = 421;
                continue _fun48772
            }
        case 384:
            var10 = var9.set;
            var10 = var10.bind(var9)(var8, var4);
            var3 = var4;
            _fun48772_ip = 421;
            continue _fun48772;
        case 400:
            var4 = var9.get;
            var3 = var4.bind(var9)(var8);
            _fun48772_ip = 421;
            continue _fun48772;
        case 412:
            var4 = {};
            var4.default = var8;
            var3 = var4;
        case 421:
            var _closure1_slot4 = var3;
            var4 = 4;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var _closure1_slot5 = var4;
            var4 = 5;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var7.bind(var0)(var4);
            var _closure1_slot6 = var4;
            var4 = 6;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var _closure1_slot7 = var4;
            var4 = ['onValueChange', 'onSlidingStart', 'onSlidingComplete', 'onAccessibilityAction', 'value', 'minimumValue', 'maximumValue', 'step', 'inverted', 'tapToSeek', 'lowerLimit', 'upperLimit'];
            var _closure1_slot8 = var4;
            var4 = var3.default;
            var3 = var4.forwardRef;
            var1 = function arg0, arg1() {
                _fun48775: for (var _fun48775_ip = 0;;) switch (_fun48775_ip) {
                    case 0:
                        var9 = arg0;
                        var0 = var9.onValueChange;
                        var _closure2_slot0 = var0;
                        var4 = var9.onSlidingStart;
                        var _closure2_slot1 = var4;
                        var2 = var9.onSlidingComplete;
                        var _closure2_slot2 = var2;
                        var1 = var9.onAccessibilityAction;
                        var _closure2_slot3 = var1;
                        var0 = var9.value;
                        var3 = undefined;
                        if (!(var3 === var0)) {
                            _fun48775_ip = 91;
                            continue _fun48775
                        }
                    case 56:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var5 = 7;
                        var5 = var7[var5];
                        var5 = var6.bind(var3)(var5);
                        var5 = var5.constants;
                        var0 = var5.SLIDER_DEFAULT_INITIAL_VALUE;
                    case 91:
                        var5 = var9.minimumValue;
                        var8 = 0;
                        var28 = 0;
                        if (!(var3 !== var5)) {
                            _fun48775_ip = 108;
                            continue _fun48775
                        }
                    case 105:
                        var28 = var5;
                    case 108:
                        var _closure2_slot4 = var28;
                        var6 = var9.maximumValue;
                        var5 = 1;
                        var27 = var5;
                        if (!(var3 !== var6)) {
                            _fun48775_ip = 131;
                            continue _fun48775
                        }
                    case 128:
                        var27 = var6;
                    case 131:
                        var6 = var9.step;
                        var26 = 0;
                        if (!(var3 !== var6)) {
                            _fun48775_ip = 146;
                            continue _fun48775
                        }
                    case 143:
                        var26 = var6;
                    case 146:
                        var6 = var9.inverted;
                        var25 = var3 !== var6;
                        if (!var25) {
                            _fun48775_ip = 162;
                            continue _fun48775
                        }
                    case 159:
                        var25 = var6;
                    case 162:
                        var6 = var9.tapToSeek;
                        var24 = var3 !== var6;
                        if (!var24) {
                            _fun48775_ip = 178;
                            continue _fun48775
                        }
                    case 175:
                        var24 = var6;
                    case 178:
                        var22 = var9.lowerLimit;
                        if (!(var3 === var22)) {
                            _fun48775_ip = 255;
                            continue _fun48775
                        }
                    case 188:
                        var6 = _closure1_slot5;
                        var10 = var6.Platform;
                        var7 = var10.select;
                        var6 = {};
                        var6.web = var28;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var11 = 7;
                        var11 = var14[var11];
                        var11 = var13.bind(var3)(var11);
                        var11 = var11.constants;
                        var11 = var11.LIMIT_MIN_VALUE;
                        var6.default = var11;
                        var22 = var7.bind(var10)(var6);
                    case 255:
                        var _closure2_slot5 = var22;
                        var21 = var9.upperLimit;
                        if (!(var3 === var21)) {
                            _fun48775_ip = 336;
                            continue _fun48775
                        }
                    case 269:
                        var6 = _closure1_slot5;
                        var10 = var6.Platform;
                        var7 = var10.select;
                        var6 = {};
                        var6.web = var27;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var11 = 7;
                        var11 = var14[var11];
                        var11 = var13.bind(var3)(var11);
                        var11 = var11.constants;
                        var11 = var11.LIMIT_MAX_VALUE;
                        var6.default = var11;
                        var21 = var7.bind(var10)(var6);
                    case 336:
                        var _closure2_slot6 = var21;
                        var6 = _closure1_slot3;
                        var7 = var6.default;
                        var6 = _closure1_slot8;
                        var11 = var7.bind(var3)(var9, var6);
                        var6 = _closure1_slot4;
                        var9 = var6.useState;
                        var6 = null;
                        var7 = var28;
                        if (!(var6 != var0)) {
                            _fun48775_ip = 383;
                            continue _fun48775
                        }
                    case 380:
                        var7 = var0;
                    case 383:
                        if (!(var6 == var7)) {
                            _fun48775_ip = 419;
                            continue _fun48775
                        }
                    case 387:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var10 = 7;
                        var10 = var14[var10];
                        var10 = var13.bind(var3)(var10);
                        var10 = var10.constants;
                        var7 = var10.SLIDER_DEFAULT_INITIAL_VALUE;
                    case 419:
                        var10 = var9.bind(var3)(var7);
                        var7 = _closure1_slot2;
                        var9 = var7.default;
                        var13 = 2;
                        var9 = var9.bind(var3)(var10, var13);
                        var10 = var9[var8];
                        var9 = var9[var5];
                        var _closure2_slot7 = var9;
                        var9 = _closure1_slot4;
                        var9 = var9.useState;
                        var9 = var9.bind(var3)(var8);
                        var7 = var7.default;
                        var7 = var7.bind(var3)(var9, var13);
                        var29 = var7[var8];
                        var7 = var7[var5];
                        var _closure2_slot8 = var7;
                        var7 = var26;
                        if (var26) {
                            _fun48775_ip = 529;
                            continue _fun48775
                        }
                    case 497:
                        var9 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var8 = 7;
                        var8 = var13[var8];
                        var8 = var9.bind(var3)(var8);
                        var8 = var8.constants;
                        var7 = var8.DEFAULT_STEP_RESOLUTION;
                    case 529:
                        var8 = var27 - var28;
                        var15 = var8 / var7;
                        var8 = var26;
                        if (var8) {
                            _fun48775_ip = 546;
                            continue _fun48775
                        }
                    case 543:
                        var8 = var15;
                    case 546:
                        var _closure2_slot9 = var8;
                        var8 = global;
                        var14 = var8.Array;
                        var13 = var14.from;
                        var9 = {};
                        if (!var26) {
                            _fun48775_ip = 571;
                            continue _fun48775
                        }
                    case 568:
                        var7 = var15;
                    case 571:
                        var7 = var7 + var5;
                        var9.length = var7;
                        var7 = function(arg0, arg1) { // Environment: var12
                            var1 = _closure2_slot4;
                            var2 = _closure2_slot9;
                            var0 = arg1;
                            var0 = var0 * var2;
                            var0 = var1 + var0;
                            return var0;
                        };
                        var30 = var13.bind(var14)(var9, var7);
                        var7 = _closure1_slot5;
                        var7 = var7.Platform;
                        var9 = var7.OS;
                        var7 = 'ios';
                        if (!(var7 !== var9)) {
                            _fun48775_ip = 648;
                            continue _fun48775
                        }
                    case 614:
                        var9 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var7 = 8;
                        var7 = var13[var7];
                        var7 = var9.bind(var3)(var7);
                        var7 = var7.styles;
                        var18 = var7.defaultSlider;
                        _fun48775_ip = 680;
                        continue _fun48775;
                    case 648:
                        var9 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var7 = 8;
                        var7 = var13[var7];
                        var7 = var9.bind(var3)(var7);
                        var7 = var7.styles;
                        var18 = var7.defaultSlideriOS;
                    case 680:
                        var19 = {};
                        var19.zIndex = var5;
                        var19.width = var29;
                        var7 = new Array(2);
                        var7[0] = var18;
                        var5 = var11.style;
                        var7[1] = var5;
                        var14 = function arg0() {
                            _fun48777: for (var _fun48777_ip = 0;;) switch (_fun48777_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = _closure2_slot0;
                                    if (!var2) {
                                        _fun48777_ip = 35;
                                        continue _fun48777
                                    }
                                case 13:
                                    var4 = _closure2_slot0;
                                    var2 = var0.nativeEvent;
                                    var3 = var2.value;
                                    var2 = undefined;
                                    var2 = var4.bind(var2)(var3);
                                case 35:
                                    var2 = _closure2_slot7;
                                    var0 = var0.nativeEvent;
                                    var1 = var0.value;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var11.disabled;
                        var9 = 'boolean';
                        var5 = typeof var5;
                        if (!(var9 !== var5)) {
                            _fun48775_ip = 757;
                            continue _fun48775
                        }
                    case 729:
                        var5 = var11.accessibilityState;
                        var15 = var6 == var5;
                        var13 = undefined;
                        if (var15) {
                            _fun48775_ip = 749;
                            continue _fun48775
                        }
                    case 744:
                        var13 = var5.disabled;
                    case 749:
                        var5 = true;
                        var13 = var5 === var13;
                        _fun48775_ip = 762;
                        continue _fun48775;
                    case 757:
                        var13 = var11.disabled;
                    case 762:
                        var5 = var11.disabled;
                        var5 = typeof var5;
                        if (!(var9 !== var5)) {
                            _fun48775_ip = 782;
                            continue _fun48775
                        }
                    case 774:
                        var17 = var11.accessibilityState;
                        _fun48775_ip = 819;
                        continue _fun48775;
                    case 782:
                        var23 = var8.Object;
                        var16 = var23.assign;
                        var15 = var11.accessibilityState;
                        var9 = {};
                        var5 = var11.disabled;
                        var9.disabled = var5;
                        var5 = {};
                        var17 = var16.bind(var23)(var5, var15, var9);
                    case 819:
                        var16 = null;
                        if (!var4) {
                            _fun48775_ip = 829;
                            continue _fun48775
                        }
                    case 824:
                        var16 = function(arg0) { // Environment: var12
                            var2 = _closure2_slot1;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = var0.value;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                    case 829:
                        var15 = null;
                        if (!var2) {
                            _fun48775_ip = 839;
                            continue _fun48775
                        }
                    case 834:
                        var15 = function(arg0) { // Environment: var12
                            var2 = _closure2_slot2;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = var0.value;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                    case 839:
                        var5 = null;
                        if (!var1) {
                            _fun48775_ip = 849;
                            continue _fun48775
                        }
                    case 844:
                        var5 = function(arg0) { // Environment: var12
                            var2 = _closure2_slot3;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                    case 849:
                        var2 = var8.Number;
                        var1 = var2.isNaN;
                        var1 = var1.bind(var2)(var0);
                        var23 = undefined;
                        if (var1) {
                            _fun48775_ip = 879;
                            continue _fun48775
                        }
                    case 871:
                        var23 = undefined;
                        if (!var0) {
                            _fun48775_ip = 879;
                            continue _fun48775
                        }
                    case 876:
                        var23 = var0;
                    case 879:
                        var0 = _closure1_slot4;
                        var2 = var0.useEffect;
                        var1 = new Array(2);
                        var1[0] = var22;
                        var1[1] = var21;
                        var0 = function() { // Environment: var12
                            _fun48781: for (var _fun48781_ip = 0;;) switch (_fun48781_ip) {
                                case 0:
                                    var1 = _closure2_slot5;
                                    var0 = _closure2_slot6;
                                    if (!(var1 >= var0)) {
                                        _fun48781_ip = 39;
                                        continue _fun48781
                                    }
                                case 15:
                                    var0 = global;
                                    var2 = var0.console;
                                    var1 = var2.warn;
                                    var0 = 'Invalid configuration: lower limit is supposed to be smaller than upper limit';
                                    var0 = var1.bind(var2)(var0);
                                case 39:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = _closure1_slot7;
                        var2 = var0.jsxs;
                        var0 = _closure1_slot5;
                        var1 = var0.View;
                        var0 = {};
                        var4 = function arg0() {
                            var2 = _closure2_slot8;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var1 = var0.width;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0.onLayout = var4;
                        var4 = new Array(2);
                        var4[0] = var7;
                        var7 = {};
                        var9 = 'center';
                        var7.justifyContent = var9;
                        var4[1] = var7;
                        var0.style = var4;
                        var4 = var11.StepMarker;
                        if (var4) {
                            _fun48775_ip = 987;
                            continue _fun48775
                        }
                    case 976:
                        var4 = var11.renderStepNumber;
                        var6 = null;
                        if (!var4) {
                            _fun48775_ip = 1082;
                            continue _fun48775
                        }
                    case 987:
                        var4 = _closure1_slot7;
                        var9 = var4.jsx;
                        var7 = _closure1_slot0;
                        var31 = _closure1_slot1;
                        var4 = 9;
                        var4 = var31[var4];
                        var4 = var7.bind(var3)(var4);
                        var7 = var4.StepsIndicator;
                        var4 = {};
                        var4.options = var30;
                        var4.sliderWidth = var29;
                        var4.currentValue = var10;
                        var10 = var11.renderStepNumber;
                        var4.renderStepNumber = var10;
                        var10 = var11.thumbImage;
                        var4.thumbImage = var10;
                        var10 = var11.StepMarker;
                        var4.StepMarker = var10;
                        var4.isLTR = var25;
                        var6 = var9.bind(var3)(var7, var4);
                    case 1082:
                        var4 = new Array(2);
                        var4[0] = var6;
                        var6 = _closure1_slot7;
                        var7 = var6.jsx;
                        var6 = _closure1_slot6;
                        var6 = var6.default;
                        var10 = var8.Object;
                        var9 = var10.assign;
                        var8 = {};
                        var8.minimumValue = var28;
                        var8.maximumValue = var27;
                        var8.step = var26;
                        var8.inverted = var25;
                        var8.tapToSeek = var24;
                        var8.value = var23;
                        var8.lowerLimit = var22;
                        var8.upperLimit = var21;
                        var8.accessibilityState = var17;
                        var17 = _closure1_slot5;
                        var17 = var17.Platform;
                        var21 = var17.OS;
                        var17 = 'web';
                        if (!(var17 !== var21)) {
                            _fun48775_ip = 1229;
                            continue _fun48775
                        }
                    case 1189:
                        var21 = var11.StepMarker;
                        var17 = undefined;
                        if (var21) {
                            _fun48775_ip = 1227;
                            continue _fun48775
                        }
                    case 1200:
                        var20 = _closure1_slot5;
                        var22 = var20.Image;
                        var21 = var22.resolveAssetSource;
                        var20 = var11.thumbImage;
                        var17 = var21.bind(var22)(var20);
                    case 1227:
                        _fun48775_ip = 1235;
                        continue _fun48775;
                    case 1229:
                        var17 = var11.thumbImage;
                    case 1235:
                        var8.thumbImage = var17;
                        var17 = arg1;
                        var8.ref = var17;
                        var17 = new Array(3);
                        var17[0] = var19;
                        var17[1] = var18;
                        var18 = {
                            'alignContent': 'center',
                            'alignItems': 'center'
                        };
                        var17[2] = var18;
                        var8.style = var17;
                        var8.onChange = var14;
                        var8.onRNCSliderSlidingStart = var16;
                        var8.onRNCSliderSlidingComplete = var15;
                        var8.onRNCSliderValueChange = var14;
                        var8.disabled = var13;
                        var13 = function() {
                            var0 = true;
                            return var0;
                        };
                        var8.onStartShouldSetResponder = var13;
                        var12 = function() {
                            var0 = false;
                            return var0;
                        };
                        var8.onResponderTerminationRequest = var12;
                        var8.onRNCSliderAccessibilityAction = var5;
                        var5 = var11.thumbImage;
                        if (!var5) {
                            _fun48775_ip = 1350;
                            continue _fun48775
                        }
                    case 1337:
                        var12 = var11.StepMarker;
                        var5 = 'transparent';
                        if (var12) {
                            _fun48775_ip = 1356;
                            continue _fun48775
                        }
                    case 1350:
                        var5 = var11.thumbTintColor;
                    case 1356:
                        var8.thumbTintColor = var5;
                        var5 = {};
                        var5 = var9.bind(var10)(var5, var11, var8);
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var3.bind(var4)(var1);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5480, 57, 29, 31, 27, 5481, 33, 5483, 5484, 5485]);