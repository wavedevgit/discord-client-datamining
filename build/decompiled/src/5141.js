// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0, arg1() {
            _fun45872: for (var _fun45872_ip = 0;;) switch (_fun45872_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var2 = this;
                    var6 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var6.bind(var0)(var2, var4);
                    var4 = false;
                    var2.requiresRepaint = var4;
                    var4 = 250;
                    var2.maxItemsToProcess = var4;
                    var4 = {};
                    var2.spanSizeInfo = var4;
                    var4 = new Array(0);
                    var2.spanTracker = var4;
                    var4 = -1;
                    var2.currentMaxIndexWithChangedLayout = var4;
                    var4 = global;
                    var6 = var4.Number;
                    var6 = var6.MAX_VALUE;
                    var2.lastSkippedLayoutIndex = var6;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var1 = 3;
                    var7 = var9[var1];
                    var7 = var6.bind(var0)(var7);
                    var10 = var7.MultiTypeAverageWindow;
                    var7 = var10.prototype;
                    var11 = Object.create(var7, {
                        constructor: {
                            value: var10
                        }
                    });
                    var8 = 5;
                    var7 = 200;
                    var14 = var11;
                    var13 = var8;
                    var12 = var7;
                    var10 = new var14[var10](var13, var12, var11);
                    var10 = var10 instanceof Object ? var10 : var11;
                    var2.heightAverageWindow = var10;
                    var1 = var9[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.MultiTypeAverageWindow;
                    var6 = var1.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var1
                        }
                    });
                    var14 = var6;
                    var13 = var8;
                    var1 = new var14[var1](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var6;
                    var2.widthAverageWindow = var1;
                    var1 = var3.getItemType;
                    var2.getItemType = var1;
                    var1 = var3.overrideItemLayout;
                    var2.overrideItemLayout = var1;
                    var1 = null;
                    var7 = var1 == var5;
                    var6 = undefined;
                    if (var7) {
                        _fun45872_ip = 247;
                        continue _fun45872
                    }
                case 241:
                    var6 = var5.layouts;
                case 247:
                    if (!(var1 == var6)) {
                        _fun45872_ip = 255;
                        continue _fun45872
                    }
                case 251:
                    var6 = new Array(0);
                case 255:
                    var2.layouts = var6;
                    if (var5) {
                        _fun45872_ip = 326;
                        continue _fun45872
                    }
                case 264:
                    var5 = var4.Boolean;
                    var4 = var3.horizontal;
                    var4 = var5.bind(var0)(var4);
                    var2.horizontal = var4;
                    var4 = var3.windowSize;
                    var2.windowSize = var4;
                    var4 = var3.maxColumns;
                    var5 = var1 != var4;
                    var1 = 1;
                    if (!var5) {
                        _fun45872_ip = 318;
                        continue _fun45872
                    }
                case 315:
                    var1 = var4;
                case 318:
                    var2.maxColumns = var1;
                    _fun45872_ip = 337;
                    continue _fun45872;
                case 326:
                    var1 = var2.updateLayoutParams;
                    var1 = var1.bind(var2)(var3);
                case 337:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getEstimatedWidth';
        var0.key = var1;
        var1 = function arg0() {
            var4 = this;
            var2 = var4.widthAverageWindow;
            var1 = var2.getCurrentValue;
            var3 = var4.getItemType;
            var0 = arg0;
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(17);
        var1[0] = var0;
        var0 = {};
        var5 = 'getEstimatedHeight';
        var0.key = var5;
        var5 = function arg0() {
            var4 = this;
            var2 = var4.heightAverageWindow;
            var1 = var2.getCurrentValue;
            var3 = var4.getItemType;
            var0 = arg0;
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isHorizontal';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.horizontal;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getWindowsSize';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.windowSize;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getVisibleLayouts';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun45877: for (var _fun45877_ip = 0;;) switch (_fun45877_ip) {
                case 0:
                    var0 = this;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 4;
                    var4 = var6[var2];
                    var5 = undefined;
                    var10 = var3.bind(var5)(var4);
                    var9 = var10.findFirstVisibleIndex;
                    var8 = var0.layouts;
                    var7 = var0.horizontal;
                    var4 = arg0;
                    var4 = var9.bind(var10)(var8, var4, var7);
                    var2 = var6[var2];
                    var7 = var3.bind(var5)(var2);
                    var6 = var7.findLastVisibleIndex;
                    var3 = var0.layouts;
                    var2 = var0.horizontal;
                    var0 = arg1;
                    var3 = var6.bind(var7)(var3, var0, var2);
                    var0 = -1;
                    if (!(var0 !== var4)) {
                        _fun45877_ip = 107;
                        continue _fun45877
                    }
                case 103:
                    if (!(var0 === var3)) {
                        _fun45877_ip = 141;
                        continue _fun45877
                    }
                case 107:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var0 = 5;
                    var0 = var6[var0];
                    var0 = var2.bind(var5)(var0);
                    var0 = var0.ConsecutiveNumbers;
                    var0 = var0.EMPTY;
                    _fun45877_ip = 193;
                    continue _fun45877;
                case 141:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 5;
                    var1 = var6[var1];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.ConsecutiveNumbers;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var14 = var2;
                    var13 = var4;
                    var12 = var3;
                    var1 = new var14[var1](var13, var12, var11);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 193:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'deleteLayout';
        var0.key = var5;
        var5 = function arg0() {
            _fun45878: for (var _fun45878_ip = 0;;) switch (_fun45878_ip) {
                case 0:
                    var6 = arg0;
                    var4 = this;
                    var1 = var6.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = arg1;
                        var0 = arg0;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var0 = var1.bind(var6)(var0);
                    var3 = var6;
                    var2 = var3[Symbol.iterator];
                    var3 = var2().next;
                    var1 = 1;
                    var0 = undefined;
                case 35:
                    var8 = var3().value;
                    var5 = var2;
                    if (!(var5 !== var0)) {
                        _fun45878_ip = 73;
                        continue _fun45878
                    }
                case 46: // try_start_0
                    var7 = var4.layouts;
                    var5 = var7.splice;
                    var5 = var5.bind(var7)(var8, var1);
                case 64: // try_end0
                    _fun45878_ip = 35;
                    continue _fun45878;
                case 66: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 73:
                    var1 = global;
                    var2 = var1.Math;
                    var5 = var2.min;
                    var3 = var5.apply;
                    var2 = var1.Math;
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var0)(var6);
                    var5 = var3.bind(var5)(var2, var1);
                    var3 = var4._recomputeLayouts;
                    var1 = var4.getMinRecomputeIndex;
                    var2 = var1.bind(var4)(var5);
                    var1 = var4.getMaxRecomputeIndex;
                    var1 = var1.bind(var4)(var5);
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'modifyLayout';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun45880: for (var _fun45880_ip = 0;;) switch (_fun45880_ip) {
                case 0:
                    var9 = arg0;
                    var0 = arg1;
                    var1 = this;
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.max;
                    var4 = var1.maxItemsToProcess;
                    var7 = var9.length;
                    var3 = 10;
                    var3 = var3 * var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1.maxItemsToProcess = var3;
                    var3 = var2.Number;
                    var6 = var3.MAX_VALUE;
                    var3 = var1.layouts;
                    var3 = var3.length;
                    if (!(var3 > var0)) {
                        _fun45880_ip = 110;
                        continue _fun45880
                    }
                case 79:
                    var3 = var1.layouts;
                    var3.length = var0;
                    var3 = var1.spanTracker;
                    var3.length = var0;
                    var3 = 1;
                    var6 = var0 - var3;
                case 110:
                    var5 = var2.Math;
                    var4 = var5.min;
                    var3 = var1.computeEstimatesAndMinMaxChangedLayout;
                    var3 = var3.bind(var1)(var9);
                    var8 = var4.bind(var5)(var6, var3);
                    var3 = var1.layouts;
                    var3 = var3.length;
                    if (!(var3 < var0)) {
                        _fun45880_ip = 249;
                        continue _fun45880
                    }
                case 153:
                    var3 = 0;
                    if (!(var0 > var3)) {
                        _fun45880_ip = 249;
                        continue _fun45880
                    }
                case 159:
                    var3 = var1.layouts;
                    var5 = var3.length;
                    var3 = var1.layouts;
                    var3.length = var0;
                    var3 = var1.spanTracker;
                    var3.length = var0;
                    var3 = var5;
                    if (!(var3 < var0)) {
                        _fun45880_ip = 230;
                        continue _fun45880
                    }
                case 201:
                    var4 = var1.getLayout;
                    var4 = var4.bind(var1)(var3);
                    var4 = var1.getSpan;
                    var4 = var4.bind(var1)(var3);
                    var3 = var3 + 1;
                    if (var3 < var0) {
                        _fun45880_ip = 201;
                        continue _fun45880
                    }
                case 230:
                    var4 = var1.recomputeLayouts;
                    var3 = 1;
                    var3 = var0 - var3;
                    var3 = var4.bind(var1)(var5, var3);
                case 249:
                    var7 = var2.Math;
                    var6 = var7.min;
                    var5 = var1.lastSkippedLayoutIndex;
                    var2 = var1.computeMinIndexWithChangedSpan;
                    var4 = var2.bind(var1)(var9);
                    var2 = var1.processLayoutInfo;
                    var2 = var2.bind(var1)(var9, var0);
                    var10 = null;
                    var3 = var8;
                    if (!(var10 != var2)) {
                        _fun45880_ip = 305;
                        continue _fun45880
                    }
                case 302:
                    var3 = var2;
                case 305:
                    var2 = var1.computeEstimatesAndMinMaxChangedLayout;
                    var11 = var2.bind(var1)(var9);
                    var16 = var7;
                    var15 = var8;
                    var14 = var5;
                    var13 = var4;
                    var12 = var3;
                    var3 = var16[var6](var15, var14, var13, var12, var11, var10);
                    var2 = 0;
                    if (!(var3 >= var2)) {
                        _fun45880_ip = 368;
                        continue _fun45880
                    }
                case 341:
                    if (!(var3 < var0)) {
                        _fun45880_ip = 368;
                        continue _fun45880
                    }
                case 345:
                    var0 = var1.getMaxRecomputeIndex;
                    var2 = var0.bind(var1)(var3);
                    var0 = var1._recomputeLayouts;
                    var0 = var0.bind(var1)(var3, var2);
                case 368:
                    var0 = -1;
                    var1.currentMaxIndexWithChangedLayout = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getLayout';
        var0.key = var5;
        var5 = function arg0() {
            _fun45881: for (var _fun45881_ip = 0;;) switch (_fun45881_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = var2.layouts;
                    var0 = var0.length;
                    if (!(!(var3 >= var0))) {
                        _fun45881_ip = 94;
                        continue _fun45881
                    }
                case 21:
                    var0 = var2.layouts;
                    var0 = var0[var3];
                    if (var0) {
                        _fun45881_ip = 61;
                        continue _fun45881
                    }
                case 34:
                    var1 = {
                        'x': 0,
                        'y': 0,
                        'width': 0,
                        'height': 0
                    };
                    var4 = var2.layouts;
                    var4[var3] = var1;
                    var0 = var1;
                case 61:
                    var1 = var0.isWidthMeasured;
                    if (!var1) {
                        _fun45881_ip = 76;
                        continue _fun45881
                    }
                case 70:
                    var1 = var0.isHeightMeasured;
                case 76:
                    if (var1) {
                        _fun45881_ip = 92;
                        continue _fun45881
                    }
                case 79:
                    var1 = var2.estimateLayout;
                    var1 = var1.bind(var2)(var3);
                case 92:
                    return var0;
                case 94:
                    var0 = global;
                    var2 = var0.Error;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1);
                    var0 = var0.ErrorMessages;
                    var5 = var0.indexOutOfBounds;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'updateLayoutParams';
        var0.key = var5;
        var5 = function arg0() {
            _fun45882: for (var _fun45882_ip = 0;;) switch (_fun45882_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var0.windowSize;
                    var1.windowSize = var2;
                    var3 = var0.horizontal;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun45882_ip = 36;
                        continue _fun45882
                    }
                case 30:
                    var3 = var1.horizontal;
                case 36:
                    var1.horizontal = var3;
                    var3 = var0.maxColumns;
                    if (!(var2 == var3)) {
                        _fun45882_ip = 58;
                        continue _fun45882
                    }
                case 52:
                    var3 = var1.maxColumns;
                case 58:
                    var1.maxColumns = var3;
                    var0 = var0.optimizeItemArrangement;
                    if (!(var2 == var0)) {
                        _fun45882_ip = 80;
                        continue _fun45882
                    }
                case 74:
                    var0 = var1.optimizeItemArrangement;
                case 80:
                    var1.optimizeItemArrangement = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'getLayoutCount';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.layouts;
            var0 = var0.length;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getSpan';
        var0.key = var5;
        var5 = function arg0() {
            _fun45884: for (var _fun45884_ip = 0;;) switch (_fun45884_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var4 = undefined;
                    var0 = undefined;
                    var3 = arguments.length;
                    var6 = 1;
                    var3 = var3 > var6;
                    if (!var3) {
                        _fun45884_ip = 31;
                        continue _fun45884
                    }
                case 23:
                    var5 = arguments[var6];
                    var3 = var4 !== var5;
                case 31:
                    if (!var3) {
                        _fun45884_ip = 38;
                        continue _fun45884
                    }
                case 34:
                    var3 = arguments[var6];
                case 38:
                    var0 = var1.spanSizeInfo;
                    var0.span = var4;
                    var4 = var1.overrideItemLayout;
                    var0 = var1.spanSizeInfo;
                    var0 = var4.bind(var1)(var2, var0);
                    var0 = global;
                    var5 = var0.Math;
                    var4 = var5.min;
                    var0 = var1.spanSizeInfo;
                    var0 = var0.span;
                    var7 = null;
                    var7 = var7 != var0;
                    if (!var7) {
                        _fun45884_ip = 105;
                        continue _fun45884
                    }
                case 102:
                    var6 = var0;
                case 105:
                    var0 = var1.maxColumns;
                    var0 = var4.bind(var5)(var6, var0);
                    if (var3) {
                        _fun45884_ip = 130;
                        continue _fun45884
                    }
                case 120:
                    var1 = var1.spanTracker;
                    var1[var2] = var0;
                case 130:
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'handleSpanChange';
        var0.key = var5;
        var5 = function arg0() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'getMaxRecomputeIndex';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = global;
            var3 = var1.Math;
            var2 = var3.min;
            var6 = var1.Math;
            var5 = var6.max;
            var4 = var0.currentMaxIndexWithChangedLayout;
            var1 = arg0;
            var4 = var5.bind(var6)(var1, var4);
            var1 = var0.maxItemsToProcess;
            var1 = var4 + var1;
            var0 = var0.layouts;
            var4 = var0.length;
            var0 = 1;
            var0 = var4 - var0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'getMinRecomputeIndex';
        var0.key = var5;
        var5 = function arg0() {
            var0 = arg0;
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = '_recomputeLayouts';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun45888: for (var _fun45888_ip = 0;;) switch (_fun45888_ip) {
                case 0:
                    var2 = arg0;
                    var5 = arg1;
                    var1 = this;
                    var0 = var1.recomputeLayouts;
                    var0 = var0.bind(var1)(var2, var5);
                    var0 = var1.lastSkippedLayoutIndex;
                    var0 = var0 >= var2;
                    if (!var0) {
                        _fun45888_ip = 44;
                        continue _fun45888
                    }
                case 34:
                    var2 = var1.lastSkippedLayoutIndex;
                    var0 = var2 <= var5;
                case 44:
                    if (!var0) {
                        _fun45888_ip = 67;
                        continue _fun45888
                    }
                case 47:
                    var0 = global;
                    var0 = var0.Number;
                    var0 = var0.MAX_VALUE;
                    var1.lastSkippedLayoutIndex = var0;
                case 67:
                    var3 = 1;
                    var2 = var5 + var3;
                    var0 = var1.layouts;
                    var0 = var0.length;
                    if (!(var2 < var0)) {
                        _fun45888_ip = 209;
                        continue _fun45888
                    }
                case 89:
                    var0 = global;
                    var7 = var0.Math;
                    var6 = var7.min;
                    var4 = var5 + var3;
                    var2 = var1.lastSkippedLayoutIndex;
                    var2 = var6.bind(var7)(var4, var2);
                    var1.lastSkippedLayoutIndex = var2;
                    var2 = var1.layouts;
                    var2 = var2.length;
                    var4 = var2 - var3;
                    var2 = var1.layouts;
                    var2 = var2[var4];
                    var3 = var2.y;
                    var2 = var1.layouts;
                    var2 = var2[var5];
                    var2 = var2.y;
                    if (!(var3 < var2)) {
                        _fun45888_ip = 209;
                        continue _fun45888
                    }
                case 173:
                    var3 = var1.recomputeLayouts;
                    var2 = var1.lastSkippedLayoutIndex;
                    var2 = var3.bind(var1)(var2, var4);
                    var0 = var0.Number;
                    var0 = var0.MAX_VALUE;
                    var1.lastSkippedLayoutIndex = var0;
                case 209:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'computeEstimatesAndMinMaxChangedLayout';
        var0.key = var5;
        var5 = function arg0() {
            _fun45889: for (var _fun45889_ip = 0;;) switch (_fun45889_ip) {
                case 0:
                    var10 = this;
                    var6 = undefined;
                    var0 = undefined;
                    var7 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var5 = global;
                    var1 = var5.Number;
                    var0 = var1.MAX_VALUE;
                    var4 = arg0;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = 7;
                case 39:
                    var11 = var4().value;
                    var12 = var2;
                    if (!(var12 !== var6)) {
                        _fun45889_ip = 378;
                        continue _fun45889
                    }
                case 53: // try_start_0
                    var17 = var11.index;
                    var7 = var17;
                    var8 = var11.dimensions;
                    var11 = var10.layouts;
                    var9 = var11[var17];
                    var16 = var10.lastSkippedLayoutIndex;
                    var16 = var17 >= var16;
                    var15 = var16;
                    if (var16) {
                        _fun45889_ip = 99;
                        continue _fun45889
                    }
                case 93:
                    var16 = var9;
                    var15 = !var16;
                case 99:
                    var14 = var15;
                    if (var15) {
                        _fun45889_ip = 117;
                        continue _fun45889
                    }
                case 105:
                    var15 = var9;
                    var15 = var15.isHeightMeasured;
                    var14 = !var15;
                case 117:
                    var13 = var14;
                    if (var14) {
                        _fun45889_ip = 135;
                        continue _fun45889
                    }
                case 123:
                    var14 = var9;
                    var14 = var14.isWidthMeasured;
                    var13 = !var14;
                case 135:
                    var12 = var13;
                    if (var13) {
                        _fun45889_ip = 186;
                        continue _fun45889
                    }
                case 141:
                    var14 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var13 = var13[var1];
                    var16 = var14.bind(var6)(var13);
                    var15 = var16.areDimensionsNotEqual;
                    var13 = var9;
                    var14 = var13.height;
                    var13 = var8;
                    var13 = var13.height;
                    var12 = var15.bind(var16)(var14, var13);
                case 186:
                    var11 = var12;
                    if (var12) {
                        _fun45889_ip = 237;
                        continue _fun45889
                    }
                case 192:
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var12 = var12[var1];
                    var15 = var13.bind(var6)(var12);
                    var14 = var15.areDimensionsNotEqual;
                    var12 = var9;
                    var13 = var12.width;
                    var12 = var8;
                    var12 = var12.width;
                    var11 = var14.bind(var15)(var13, var12);
                case 237:
                    if (!var11) {
                        _fun45889_ip = 292;
                        continue _fun45889
                    }
                case 240:
                    var13 = var5.Math;
                    var12 = var13.min;
                    var11 = var0;
                    var14 = var7;
                    var0 = var12.bind(var13)(var11, var14);
                    var13 = var5.Math;
                    var12 = var13.max;
                    var11 = var10.currentMaxIndexWithChangedLayout;
                    var11 = var12.bind(var13)(var11, var14);
                    var10.currentMaxIndexWithChangedLayout = var11;
                case 292:
                    var16 = var10.heightAverageWindow;
                    var14 = var16.addValue;
                    var11 = var8;
                    var13 = var11.height;
                    var12 = var10.getItemType;
                    var15 = var7;
                    var12 = var12.bind(var10)(var15);
                    var12 = var14.bind(var16)(var13, var12);
                    var14 = var10.widthAverageWindow;
                    var13 = var14.addValue;
                    var12 = var11.width;
                    var11 = var10.getItemType;
                    var11 = var11.bind(var10)(var15);
                    var11 = var13.bind(var14)(var12, var11);
                case 366: // try_end0
                    _fun45889_ip = 39;
                    continue _fun45889;
                case 371: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 378:
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'computeMinIndexWithChangedSpan';
        var0.key = var5;
        var4 = function arg0() {
            _fun45890: for (var _fun45890_ip = 0;;) switch (_fun45890_ip) {
                case 0:
                    var8 = this;
                    var5 = undefined;
                    var0 = undefined;
                    var6 = undefined;
                    var7 = undefined;
                    var4 = global;
                    var1 = var4.Number;
                    var0 = var1.MAX_VALUE;
                    var3 = arg0;
                    var2 = var3[Symbol.iterator];
                    var3 = var2().next;
                    var1 = true;
                case 33:
                    var9 = var3().value;
                    var10 = var2;
                    if (!(var10 !== var5)) {
                        _fun45890_ip = 139;
                        continue _fun45890
                    }
                case 44: // try_start_0
                    var11 = var9.index;
                    var6 = var11;
                    var9 = var8.getSpan;
                    var10 = var9.bind(var8)(var11, var1);
                    var7 = var10;
                    var9 = var8.spanTracker;
                    var9 = var9[var11];
                    if (!(var10 !== var9)) {
                        _fun45890_ip = 130;
                        continue _fun45890
                    }
                case 81:
                    var10 = var8.spanTracker;
                    var12 = var6;
                    var9 = var7;
                    var10[var12] = var9;
                    var9 = var8.handleSpanChange;
                    var9 = var9.bind(var8)(var12);
                    var11 = var4.Math;
                    var10 = var11.min;
                    var9 = var0;
                    var0 = var10.bind(var11)(var9, var12);
                case 130: // try_end0
                    _fun45890_ip = 33;
                    continue _fun45890;
                case 132: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 139:
                    return var0;
            }
        };
        var0.value = var4;
        var1[16] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.RVLayoutManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5125, 5113, 5114, 5118, 5142, 5129, 5133, 5143]);