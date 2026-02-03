// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun48280: for (var _fun48280_ip = 0;;) switch (_fun48280_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = function arg0() {
                _fun48281: for (var _fun48281_ip = 0;;) switch (_fun48281_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.WeakMap;
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun48281_ip = 105;
                            continue _fun48281
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
                            _fun48282: for (var _fun48282_ip = 0;;) switch (_fun48282_ip) {
                                case 0:
                                    var0 = arg0;
                                    if (var0) {
                                        _fun48282_ip = 15;
                                        continue _fun48282
                                    }
                                case 9:
                                    var0 = _closure2_slot0;
                                    _fun48282_ip = 19;
                                    continue _fun48282;
                                case 15:
                                    var0 = _closure2_slot1;
                                case 19:
                                    return var0;
                            }
                        };
                        _closure1_slot5 = var2;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    case 105:
                        var0 = null;
                        return var0;
                }
            };
            var _closure1_slot5 = var0;
            var18 = global;
            var7 = var18.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = undefined;
            var2.StepsIndicator = var0;
            var3 = 0;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            if (!var7) {
                _fun48280_ip = 97;
                continue _fun48280
            }
        case 82:
            var6 = var7.__esModule;
            var3 = var7;
            if (var6) {
                _fun48280_ip = 367;
                continue _fun48280
            }
        case 97:
            var17 = null;
            if (!(var17 !== var7)) {
                _fun48280_ip = 358;
                continue _fun48280
            }
        case 106:
            var8 = typeof var7;
            var6 = 'object';
            if (!(var6 !== var8)) {
                _fun48280_ip = 128;
                continue _fun48280
            }
        case 117:
            var6 = 'function';
            if (!(var6 === var8)) {
                _fun48280_ip = 358;
                continue _fun48280
            }
        case 128:
            var6 = _closure1_slot5;
            var8 = var6.bind(var0)(var0);
            if (!var8) {
                _fun48280_ip = 156;
                continue _fun48280
            }
        case 140:
            var6 = var8.has;
            var6 = var6.bind(var8)(var7);
            if (var6) {
                _fun48280_ip = 346;
                continue _fun48280
            }
        case 156:
            var6 = Object.create(var17);
            var9 = var18.Object;
            var16 = var9.defineProperty;
            if (!var16) {
                _fun48280_ip = 185;
                continue _fun48280
            }
        case 173:
            var9 = var18.Object;
            var16 = var9.getOwnPropertyDescriptor;
        case 185:
            var14 = var7;
            var10 = 'default';
            var9 = undefined;
            for (var11 in var14)
                case 202: {
                    case 211: var22 = var11;
                    if (var10 === var22) {
                        _fun48280_ip = 202;
                        continue _fun48280
                    }
                    case 218: var19 = {};
                    var20 = var19.hasOwnProperty;
                    var19 = var20.call;
                    var19 = var19.bind(var20)(var7, var22);
                    if (!var19) {
                        _fun48280_ip = 202;
                        continue _fun48280
                    }
                    case 240: var19 = null;
                    if (!var16) {
                        _fun48280_ip = 263;
                        continue _fun48280
                    }
                    case 245: var21 = var18.Object;
                    var20 = var21.getOwnPropertyDescriptor;
                    var19 = var20.bind(var21)(var7, var22);
                    case 263: if (!var19) {
                        _fun48280_ip = 282;
                        continue _fun48280
                    }
                    case 266: var20 = var19.get;
                    if (var20) {
                        _fun48280_ip = 295;
                        continue _fun48280
                    }
                    case 274: var20 = var19.set;
                    if (var20) {
                        _fun48280_ip = 295;
                        continue _fun48280
                    }
                    case 282: var20 = var7[var22];
                    var6[var22] = var20;
                    var9 = var19;
                    _fun48280_ip = 202;
                    continue _fun48280;
                    case 295: var21 = var18.Object;
                    var20 = var21.defineProperty;
                    var20 = var20.bind(var21)(var6, var22, var19);
                    var9 = var19;
                    _fun48280_ip = 202;
                    continue _fun48280;
                }
        case 318:
            var6.default = var7;
            var3 = var6;
            if (!var8) {
                _fun48280_ip = 367;
                continue _fun48280
            }
        case 330:
            var9 = var8.set;
            var9 = var9.bind(var8)(var7, var6);
            var3 = var6;
            _fun48280_ip = 367;
            continue _fun48280;
        case 346:
            var6 = var8.get;
            var3 = var6.bind(var8)(var7);
            _fun48280_ip = 367;
            continue _fun48280;
        case 358:
            var6 = {};
            var6.default = var7;
            var3 = var6;
        case 367:
            var _closure1_slot2 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var1 = function arg0() {
                _fun48283: for (var _fun48283_ip = 0;;) switch (_fun48283_ip) {
                    case 0:
                        var0 = arg0;
                        var10 = var0.options;
                        var _closure2_slot0 = var10;
                        var9 = var0.sliderWidth;
                        var12 = var0.currentValue;
                        var _closure2_slot1 = var12;
                        var11 = var0.StepMarker;
                        var _closure2_slot2 = var11;
                        var7 = var0.renderStepNumber;
                        var _closure2_slot3 = var7;
                        var8 = var0.thumbImage;
                        var _closure2_slot4 = var8;
                        var1 = var0.isLTR;
                        var0 = _closure1_slot2;
                        var6 = var0.useMemo;
                        var0 = var10.length;
                        var2 = new Array(1);
                        var2[0] = var0;
                        var3 = undefined;
                        var0 = function() { // Environment: var4
                            _fun48284: for (var _fun48284_ip = 0;;) switch (_fun48284_ip) {
                                case 0:
                                    var0 = {};
                                    var1 = _closure2_slot0;
                                    var2 = var1.length;
                                    var1 = 9;
                                    if (!(!(var2 > var1))) {
                                        _fun48284_ip = 60;
                                        continue _fun48284
                                    }
                                case 21:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var1 = 3;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    var1 = var1.constants;
                                    var1 = var1.STEP_NUMBER_TEXT_FONT_BIG;
                                    _fun48284_ip = 97;
                                    continue _fun48284;
                                case 60:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var2 = 3;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var2 = var4.bind(var2)(var3);
                                    var2 = var2.constants;
                                    var1 = var2.STEP_NUMBER_TEXT_FONT_SMALL;
                                case 97:
                                    var0.fontSize = var1;
                                    return var0;
                            }
                        };
                        var0 = var6.bind(var3)(var0, var2);
                        var _closure2_slot5 = var0;
                        var6 = var10;
                        if (!var1) {
                            _fun48283_ip = 124;
                            continue _fun48283
                        }
                    case 114:
                        var1 = var10.reverse;
                        var6 = var1.bind(var10)();
                    case 124:
                        var1 = _closure1_slot2;
                        var2 = var1.useCallback;
                        var1 = new Array(6);
                        var1[0] = var12;
                        var1[1] = var11;
                        var1[2] = var10;
                        var1[3] = var8;
                        var1[4] = var7;
                        var1[5] = var0;
                        var0 = function(arg0, arg1) { // Environment: var4
                            _fun48285: for (var _fun48285_ip = 0;;) switch (_fun48285_ip) {
                                case 0:
                                    var16 = arg0;
                                    var4 = arg1;
                                    var5 = _closure1_slot4;
                                    var3 = var5.jsx;
                                    var0 = _closure1_slot2;
                                    var2 = var0.Fragment;
                                    var1 = {};
                                    var8 = var5.jsxs;
                                    var0 = _closure1_slot3;
                                    var7 = var0.View;
                                    var6 = {};
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot1;
                                    var0 = 4;
                                    var11 = var10[var0];
                                    var0 = undefined;
                                    var11 = var9.bind(var0)(var11);
                                    var11 = var11.styles;
                                    var11 = var11.stepIndicatorElement;
                                    var6.style = var11;
                                    var15 = var5.jsx;
                                    var5 = 5;
                                    var5 = var10[var5];
                                    var5 = var9.bind(var0)(var5);
                                    var14 = var5.SliderTrackMark;
                                    var11 = {};
                                    var5 = _closure2_slot1;
                                    var9 = var5 === var16;
                                    var11.isTrue = var9;
                                    var11.index = var16;
                                    var9 = _closure2_slot4;
                                    var11.thumbImage = var9;
                                    var9 = _closure2_slot2;
                                    var11.StepMarker = var9;
                                    var11.currentValue = var5;
                                    var9 = _closure2_slot0;
                                    var5 = 0;
                                    var5 = var9[var5];
                                    var11.min = var5;
                                    var10 = var9.length;
                                    var5 = 1;
                                    var5 = var10 - var5;
                                    var5 = var9[var5];
                                    var11.max = var5;
                                    var5 = global;
                                    var9 = var5.HermesInternal;
                                    var17 = var9.concat;
                                    var10 = '';
                                    var9 = '-SliderTrackMark';
                                    var9 = var17.bind(var10)(var4, var9);
                                    var11 = var15.bind(var0)(var14, var11, var9);
                                    var9 = new Array(2);
                                    var9[0] = var11;
                                    var14 = _closure2_slot3;
                                    var11 = null;
                                    if (!var14) {
                                        _fun48285_ip = 318;
                                        continue _fun48285
                                    }
                                case 239:
                                    var14 = _closure1_slot4;
                                    var15 = var14.jsx;
                                    var14 = _closure1_slot0;
                                    var17 = _closure1_slot1;
                                    var13 = 6;
                                    var13 = var17[var13];
                                    var13 = var14.bind(var0)(var13);
                                    var14 = var13.StepNumber;
                                    var13 = {};
                                    var13.i = var16;
                                    var12 = _closure2_slot5;
                                    var13.style = var12;
                                    var12 = var5.HermesInternal;
                                    var16 = var12.concat;
                                    var12 = 'th-step';
                                    var12 = var16.bind(var10)(var4, var12);
                                    var11 = var15.bind(var0)(var14, var13, var12);
                                case 318:
                                    var9[1] = var11;
                                    var6.children = var9;
                                    var5 = var5.HermesInternal;
                                    var9 = var5.concat;
                                    var5 = '-View';
                                    var5 = var9.bind(var10)(var4, var5);
                                    var5 = var8.bind(var0)(var7, var6, var5);
                                    var1.children = var5;
                                    var0 = var3.bind(var0)(var2, var1, var4);
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var0, var1);
                        var _closure2_slot6 = var0;
                        var0 = _closure1_slot4;
                        var2 = var0.jsx;
                        var0 = _closure1_slot3;
                        var1 = var0.View;
                        var0 = {};
                        var7 = 'none';
                        var0.pointerEvents = var7;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var5 = 4;
                        var5 = var11[var5];
                        var5 = var10.bind(var3)(var5);
                        var5 = var5.styles;
                        var7 = var5.stepsIndicator;
                        var5 = new Array(2);
                        var5[0] = var7;
                        var7 = {};
                        var8 = 3;
                        var8 = var11[var8];
                        var8 = var10.bind(var3)(var8);
                        var8 = var8.constants;
                        var8 = var8.MARGIN_HORIZONTAL_PADDING;
                        var8 = var9 * var8;
                        var7.marginHorizontal = var8;
                        var5[1] = var7;
                        var0.style = var5;
                        var5 = var6.map;
                        var4 = function(arg0, arg1) { // Environment: var4
                            var3 = _closure2_slot6;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var4 = var5.bind(var6)(var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.StepsIndicator = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5431, 5432, 5434, 5435]);