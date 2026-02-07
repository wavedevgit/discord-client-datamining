// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun46584: for (var _fun46584_ip = 0;;) switch (_fun46584_ip) {
        case 0:
            var2 = exports;
            var3 = this;
            var1 = require;
            var _closure1_slot0 = var1;
            var1 = dependencyMap;
            var _closure1_slot1 = var1;
            var1 = var3;
            if (!var1) {
                _fun46584_ip = 34;
                continue _fun46584
            }
        case 28:
            var1 = var3.__spreadArray;
        case 34:
            if (var1) {
                _fun46584_ip = 42;
                continue _fun46584
            }
        case 37:
            var1 = function(arg0, arg1, arg2) { // Environment: var0
                _fun46585: for (var _fun46585_ip = 0;;) switch (_fun46585_ip) {
                    case 0:
                        var2 = arg0;
                        var5 = arg1;
                        var0 = undefined;
                        var1 = arg2;
                        if (var1) {
                            _fun46585_ip = 26;
                            continue _fun46585
                        }
                    case 14:
                        var3 = arguments.length;
                        var0 = 2;
                        var1 = undefined;
                        if (!(var0 === var3)) {
                            _fun46585_ip = 122;
                            continue _fun46585
                        }
                    case 26:
                        var7 = var5.length;
                        var6 = 0;
                        var8 = var6 < var7;
                        var4 = global;
                        var3 = undefined;
                        var0 = 0;
                        var1 = undefined;
                        if (!var8) {
                            _fun46585_ip = 122;
                            continue _fun46585
                        }
                    case 48:
                        var9 = !var3;
                        if (!var9) {
                            _fun46585_ip = 58;
                            continue _fun46585
                        }
                    case 54:
                        var9 = var0 in var5;
                    case 58:
                        var8 = var3;
                        if (var9) {
                            _fun46585_ip = 109;
                            continue _fun46585
                        }
                    case 64:
                        var9 = var3;
                        if (var3) {
                            _fun46585_ip = 98;
                            continue _fun46585
                        }
                    case 70:
                        var10 = var4.Array;
                        var10 = var10.prototype;
                        var11 = var10.slice;
                        var10 = var11.call;
                        var9 = var10.bind(var11)(var5, var6, var0);
                    case 98:
                        var10 = var5[var0];
                        var9[var0] = var10;
                        var8 = var9;
                    case 109:
                        var0 = var0 + 1;
                        var3 = var8;
                        var1 = var3;
                        if (var0 < var7) {
                            _fun46585_ip = 48;
                            continue _fun46585
                        }
                    case 122:
                        var0 = var2.concat;
                        if (var1) {
                            _fun46585_ip = 158;
                            continue _fun46585
                        }
                    case 130:
                        var3 = global;
                        var3 = var3.Array;
                        var3 = var3.prototype;
                        var4 = var3.slice;
                        var3 = var4.call;
                        var1 = var3.bind(var4)(var5);
                    case 158:
                        var0 = var0.bind(var2)(var1);
                        return var0;
                }
            };
        case 42:
            var _closure1_slot2 = var1;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var1 = true;
            var3.value = var1;
            var1 = '__esModule';
            var1 = var4.bind(var5)(var2, var1, var3);
            var1 = function() { // Environment: var0
                var0 = function arg0, arg1() {
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = new Array(0);
                    var1._layouts = var2;
                    var0 = function(arg0) { // Environment: var0
                        var0 = _closure3_slot0;
                        var2 = var0._layouts;
                        var1 = arg0;
                        var3 = var2[var1];
                        var2 = var0._setRelevantBounds;
                        var1 = var0._relevantDim;
                        var1 = var2.bind(var0)(var3, var1);
                        var0 = var0._relevantDim;
                        var0 = var0.end;
                        return var0;
                    };
                    var1._valueExtractorForBinarySearch = var0;
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.max;
                    var0 = 0;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var0, var2);
                    var1._currentOffset = var2;
                    var1._maxOffset = var0;
                    var1._actualOffset = var0;
                    var2 = arg0;
                    var1._renderAheadOffset = var2;
                    var2 = {
                        'start': 0,
                        'end': 0
                    };
                    var1._visibleWindow = var2;
                    var2 = {
                        'start': 0,
                        'end': 0
                    };
                    var1._engagedWindow = var2;
                    var2 = false;
                    var1._isHorizontal = var2;
                    var1._windowBound = var0;
                    var0 = new Array(0);
                    var1._visibleIndexes = var0;
                    var0 = new Array(0);
                    var1._engagedIndexes = var0;
                    var0 = null;
                    var1.onVisibleRowsChanged = var0;
                    var1.onEngagedRowsChanged = var0;
                    var0 = {
                        'start': 0,
                        'end': 0
                    };
                    var1._relevantDim = var0;
                    var0 = {
                        'startCorrection': 0,
                        'endCorrection': 0,
                        'windowShift': 0
                    };
                    var1._defaultCorrection = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var3 = this;
                    var2 = var3._doInitialFit;
                    var1 = var3._currentOffset;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var3.init = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    var1 = this;
                    var0 = arg0;
                    var1._layouts = var0;
                    var0 = arg1;
                    var1._maxOffset = var0;
                    var0 = undefined;
                    return var0;
                };
                var3.setLayouts = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun46591: for (var _fun46591_ip = 0;;) switch (_fun46591_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            var1 = this;
                            var1._isHorizontal = var0;
                            if (var0) {
                                _fun46591_ip = 25;
                                continue _fun46591
                            }
                        case 18:
                            var0 = var2.height;
                            _fun46591_ip = 30;
                            continue _fun46591;
                        case 25:
                            var0 = var2.width;
                        case 30:
                            var1._windowBound = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.setDimensions = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    _fun46592: for (var _fun46592_ip = 0;;) switch (_fun46592_ip) {
                        case 0:
                            var3 = this;
                            var1 = var3._actualOffset;
                            var0 = 0;
                            var0 = var1 >= var0;
                            if (!var0) {
                                _fun46592_ip = 44;
                                continue _fun46592
                            }
                        case 18:
                            var2 = var3._currentOffset;
                            var4 = var3._maxOffset;
                            var1 = var3._windowBound;
                            var1 = var4 - var1;
                            var0 = var2 >= var1;
                        case 44:
                            var2 = var3.forceRefreshWithOffset;
                            var1 = var3._currentOffset;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var3.forceRefresh = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var4 = this;
                    var0 = -1;
                    var4._currentOffset = var0;
                    var3 = var4.updateOffset;
                    var2 = var4._defaultCorrection;
                    var1 = arg0;
                    var0 = false;
                    var0 = var3.bind(var4)(var1, var0, var2);
                    var0 = undefined;
                    return var0;
                };
                var3.forceRefreshWithOffset = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun46594: for (var _fun46594_ip = 0;;) switch (_fun46594_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = arg2;
                            var2 = this;
                            var4 = arg1;
                            var0 = var3;
                            if (!var4) {
                                _fun46594_ip = 88;
                                continue _fun46594
                            }
                        case 18:
                            var2._actualOffset = var3;
                            var4 = global;
                            var7 = var4.Math;
                            var6 = var7.min;
                            var5 = var2._maxOffset;
                            var10 = var4.Math;
                            var9 = var10.max;
                            var8 = var1.windowShift;
                            var4 = var1.startCorrection;
                            var4 = var8 + var4;
                            var8 = var3 + var4;
                            var4 = 0;
                            var4 = var9.bind(var10)(var4, var8);
                            var0 = var6.bind(var7)(var5, var4);
                        case 88:
                            var4 = var2._currentOffset;
                            if (!(var4 !== var0)) {
                                _fun46594_ip = 159;
                                continue _fun46594
                            }
                        case 98:
                            var2._currentOffset = var0;
                            var0 = var2._updateTrackingWindows;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = var2._visibleIndexes;
                            var0 = var0.length;
                            var3 = 0;
                            var0 = var0 > var3;
                            var1 = 0;
                            if (!var0) {
                                _fun46594_ip = 148;
                                continue _fun46594
                            }
                        case 138:
                            var0 = var2._visibleIndexes;
                            var1 = var0[var3];
                        case 148:
                            var0 = var2._fitAndUpdate;
                            var0 = var0.bind(var2)(var1);
                        case 159:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.updateOffset = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._currentOffset;
                    return var0;
                };
                var3.getLastOffset = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._actualOffset;
                    return var0;
                };
                var3.getLastActualOffset = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._engagedIndexes;
                    return var0;
                };
                var3.getEngagedIndexes = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    _fun46598: for (var _fun46598_ip = 0;;) switch (_fun46598_ip) {
                        case 0:
                            var5 = this;
                            var1 = var5._findFirstVisibleIndexUsingBS;
                            var0 = 0.001;
                            var4 = var1.bind(var5)(var0);
                            var0 = 1;
                            var3 = var4 - var0;
                            var2 = 0;
                            var1 = var4;
                            var0 = var1;
                            if (!(var3 >= var2)) {
                                _fun46598_ip = 134;
                                continue _fun46598
                            }
                        case 43:
                            var7 = var5._isHorizontal;
                            var6 = var5._layouts;
                            var6 = var6[var4];
                            if (var7) {
                                _fun46598_ip = 91;
                                continue _fun46598
                            }
                        case 62:
                            var8 = var6.y;
                            var7 = var5._layouts;
                            var7 = var7[var3];
                            var7 = var7.y;
                            var0 = var1;
                            if (!(var8 === var7)) {
                                _fun46598_ip = 134;
                                continue _fun46598
                            }
                        case 89:
                            _fun46598_ip = 118;
                            continue _fun46598;
                        case 91:
                            var7 = var6.x;
                            var6 = var5._layouts;
                            var6 = var6[var3];
                            var6 = var6.x;
                            var0 = var1;
                            if (!(var7 === var6)) {
                                _fun46598_ip = 134;
                                continue _fun46598
                            }
                        case 118:
                            var6 = var3 - 1;
                            var1 = var3;
                            var0 = var1;
                            var3 = var6;
                            if (var3 >= var2) {
                                _fun46598_ip = 43;
                                continue _fun46598
                            }
                        case 134:
                            return var0;
                    }
                };
                var3.findFirstLogicallyVisibleIndex = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var2 = this;
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.max;
                    var1 = 0;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var1, var0);
                    var2._renderAheadOffset = var0;
                    var1 = var2.forceRefreshWithOffset;
                    var0 = var2._currentOffset;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3.updateRenderAheadOffset = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._renderAheadOffset;
                    return var0;
                };
                var3.getCurrentRenderAheadOffset = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = this;
                    var0._actualOffset = var1;
                    var0 = undefined;
                    return var0;
                };
                var3.setActualOffset = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    _fun46602: for (var _fun46602_ip = 0;;) switch (_fun46602_ip) {
                        case 0:
                            var2 = this;
                            var1 = var2._currentOffset;
                            var0 = 5000;
                            if (!(!(var1 > var0))) {
                                _fun46602_ip = 46;
                                continue _fun46602
                            }
                        case 19:
                            var1 = var2._currentOffset;
                            var0 = 0;
                            var1 = var1 > var0;
                            if (!var1) {
                                _fun46602_ip = 56;
                                continue _fun46602
                            }
                        case 34:
                            var1 = var2._findFirstVisibleIndexLinearly;
                            var0 = var1.bind(var2)();
                            _fun46602_ip = 56;
                            continue _fun46602;
                        case 46:
                            var1 = var2._findFirstVisibleIndexUsingBS;
                            var0 = var1.bind(var2)();
                        case 56:
                            return var0;
                    }
                };
                var3._findFirstVisibleIndexOptimally = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var4 = arg0;
                    var3 = this;
                    var2 = new Array(0);
                    var1 = new Array(0);
                    var5 = var3._fitIndexes;
                    var6 = true;
                    var10 = var3;
                    var9 = var2;
                    var8 = var1;
                    var7 = var4;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    var5 = var3._fitIndexes;
                    var0 = 1;
                    var7 = var4 + var0;
                    var6 = false;
                    var10 = var3;
                    var9 = var2;
                    var8 = var1;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    var0 = var3._diffUpdateOriginalIndexesAndRaiseEvents;
                    var0 = var0.bind(var3)(var2, var1);
                    var0 = undefined;
                    return var0;
                };
                var3._fitAndUpdate = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    var2 = this;
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.min;
                    var1 = var2._maxOffset;
                    var7 = var0.Math;
                    var6 = var7.max;
                    var5 = 0;
                    var0 = arg0;
                    var0 = var6.bind(var7)(var5, var0);
                    var3 = var3.bind(var4)(var1, var0);
                    var1 = var2._updateTrackingWindows;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var3, var0);
                    var0 = var2._findFirstVisibleIndexOptimally;
                    var1 = var0.bind(var2)();
                    var0 = var2._fitAndUpdate;
                    var0 = var0.bind(var2)(var1);
                    var0 = undefined;
                    return var0;
                };
                var3._doInitialFit = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    _fun46605: for (var _fun46605_ip = 0;;) switch (_fun46605_ip) {
                        case 0:
                            var5 = this;
                            var0 = var5._layouts;
                            var4 = var0.length;
                            var3 = {
                                'start': 0,
                                'end': 0
                            };
                            var1 = 0;
                            var0 = var1 < var4;
                            var2 = 0;
                            if (!var0) {
                                _fun46605_ip = 92;
                                continue _fun46605
                            }
                        case 35:
                            var0 = var5._layouts;
                            var6 = var0[var2];
                            var0 = var5._setRelevantBounds;
                            var0 = var0.bind(var5)(var6, var3);
                            var7 = var5._itemIntersectsVisibleWindow;
                            var6 = var3.start;
                            var0 = var3.end;
                            var6 = var7.bind(var5)(var6, var0);
                            var0 = var2;
                            if (var6) {
                                _fun46605_ip = 94;
                                continue _fun46605
                            }
                        case 85:
                            var2 = var0 + 1;
                            if (var2 < var4) {
                                _fun46605_ip = 35;
                                continue _fun46605
                            }
                        case 92:
                            return var1;
                        case 94:
                            return var0;
                    }
                };
                var3._findFirstVisibleIndexLinearly = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun46606: for (var _fun46606_ip = 0;;) switch (_fun46606_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = this;
                            var3 = undefined;
                            if (!(var3 === var5)) {
                                _fun46606_ip = 14;
                                continue _fun46606
                            }
                        case 12:
                            var5 = 0;
                        case 14:
                            var1 = var0._layouts;
                            var4 = var1.length;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 0;
                            var1 = var6[var1];
                            var1 = var2.bind(var3)(var1);
                            var3 = var1.default;
                            var2 = var3.findClosestHigherValueIndex;
                            var1 = var0._visibleWindow;
                            var1 = var1.start;
                            var1 = var1 + var5;
                            var0 = var0._valueExtractorForBinarySearch;
                            var0 = var2.bind(var3)(var4, var1, var0);
                            return var0;
                    }
                };
                var3._findFirstVisibleIndexUsingBS = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                    _fun46607: for (var _fun46607_ip = 0;;) switch (_fun46607_ip) {
                        case 0:
                            var7 = arg0;
                            var6 = arg1;
                            var5 = arg2;
                            var4 = this;
                            var0 = var4._layouts;
                            var10 = var0.length;
                            var3 = {
                                'start': 0,
                                'end': 0
                            };
                            var2 = 0;
                            if (!(var5 < var10)) {
                                _fun46607_ip = 173;
                                continue _fun46607
                            }
                        case 42:
                            var0 = arg3;
                            if (var0) {
                                _fun46607_ip = 113;
                                continue _fun46607
                            }
                        case 48:
                            var11 = var5 < var10;
                            var1 = var5;
                            var0 = false;
                            if (!var11) {
                                _fun46607_ip = 173;
                                continue _fun46607
                            }
                        case 60:
                            var11 = var4._checkIntersectionAndReport;
                            var19 = var4;
                            var18 = var1;
                            var17 = false;
                            var16 = var3;
                            var15 = var7;
                            var14 = var6;
                            var13 = var19[var11](var18, var17, var16, var15, var14, var13);
                            var12 = var1;
                            var11 = true;
                            if (var13) {
                                _fun46607_ip = 101;
                                continue _fun46607
                            }
                        case 95:
                            var11 = var0;
                            if (var11) {
                                _fun46607_ip = 173;
                                continue _fun46607
                            }
                        case 101:
                            var1 = var12 + 1;
                            var0 = var11;
                            if (var1 < var10) {
                                _fun46607_ip = 60;
                                continue _fun46607
                            }
                        case 111:
                            _fun46607_ip = 173;
                            continue _fun46607;
                        case 113:
                            var8 = var5 >= var2;
                            var1 = false;
                            if (!var8) {
                                _fun46607_ip = 173;
                                continue _fun46607
                            }
                        case 122:
                            var8 = var4._checkIntersectionAndReport;
                            var19 = var4;
                            var18 = var5;
                            var17 = true;
                            var16 = var3;
                            var15 = var7;
                            var14 = var6;
                            var10 = var19[var8](var18, var17, var16, var15, var14, var13);
                            var9 = var5;
                            var8 = true;
                            if (var10) {
                                _fun46607_ip = 163;
                                continue _fun46607
                            }
                        case 157:
                            var8 = var1;
                            if (var8) {
                                _fun46607_ip = 173;
                                continue _fun46607
                            }
                        case 163:
                            var5 = var9 - 1;
                            var1 = var8;
                            if (var5 >= var2) {
                                _fun46607_ip = 122;
                                continue _fun46607
                            }
                        case 173:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3._fitIndexes = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var1
                    _fun46608: for (var _fun46608_ip = 0;;) switch (_fun46608_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = arg1;
                            var0 = arg2;
                            var5 = arg3;
                            var3 = arg4;
                            var7 = this;
                            var2 = var7._layouts;
                            var6 = var2[var4];
                            var2 = var7._setRelevantBounds;
                            var2 = var2.bind(var7)(var6, var0);
                            var8 = var7._itemIntersectsVisibleWindow;
                            var6 = var0.start;
                            var2 = var0.end;
                            var2 = var8.bind(var7)(var6, var2);
                            if (var2) {
                                _fun46608_ip = 128;
                                continue _fun46608
                            }
                        case 65:
                            var6 = var7._itemIntersectsEngagedWindow;
                            var2 = var0.start;
                            var0 = var0.end;
                            var2 = var6.bind(var7)(var2, var0);
                            var0 = false;
                            if (!var2) {
                                _fun46608_ip = 185;
                                continue _fun46608
                            }
                        case 92:
                            if (var1) {
                                _fun46608_ip = 109;
                                continue _fun46608
                            }
                        case 95:
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
                            var0 = true;
                            _fun46608_ip = 185;
                            continue _fun46608;
                        case 109:
                            var6 = var3.splice;
                            var2 = 0;
                            var2 = var6.bind(var3)(var2, var2, var4);
                            var0 = true;
                            _fun46608_ip = 185;
                            continue _fun46608;
                        case 128:
                            if (var1) {
                                _fun46608_ip = 155;
                                continue _fun46608
                            }
                        case 131:
                            var1 = var5.push;
                            var1 = var1.bind(var5)(var4);
                            var1 = var3.push;
                            var1 = var1.bind(var3)(var4);
                            var0 = true;
                            _fun46608_ip = 185;
                            continue _fun46608;
                        case 155:
                            var1 = var5.splice;
                            var2 = 0;
                            var1 = var1.bind(var5)(var2, var2, var4);
                            var1 = var3.splice;
                            var1 = var1.bind(var3)(var2, var2, var4);
                            var0 = true;
                        case 185:
                            return var0;
                    }
                };
                var3._checkIntersectionAndReport = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun46609: for (var _fun46609_ip = 0;;) switch (_fun46609_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var2 = this;
                            var2 = var2._isHorizontal;
                            if (var2) {
                                _fun46609_ip = 51;
                                continue _fun46609
                            }
                        case 18:
                            var3 = var0.y;
                            var2 = var0.height;
                            var2 = var3 + var2;
                            var1.end = var2;
                            var2 = var0.y;
                            var1.start = var2;
                            _fun46609_ip = 82;
                            continue _fun46609;
                        case 51:
                            var3 = var0.x;
                            var2 = var0.width;
                            var2 = var3 + var2;
                            var1.end = var2;
                            var0 = var0.x;
                            var1.start = var0;
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3._setRelevantBounds = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun46610: for (var _fun46610_ip = 0;;) switch (_fun46610_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = arg1;
                            var0 = var1.start;
                            var0 = var0 < var2;
                            if (!var0) {
                                _fun46610_ip = 27;
                                continue _fun46610
                            }
                        case 18:
                            var1 = var1.end;
                            var0 = var1 > var2;
                        case 27:
                            return var0;
                    }
                };
                var3._isItemInBounds = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun46611: for (var _fun46611_ip = 0;;) switch (_fun46611_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.start;
                            var0 = arg1;
                            var0 = var2 >= var0;
                            if (!var0) {
                                _fun46611_ip = 30;
                                continue _fun46611
                            }
                        case 18:
                            var2 = var1.end;
                            var1 = arg2;
                            var0 = var2 <= var1;
                        case 30:
                            return var0;
                    }
                };
                var3._isItemBoundsBeyondWindow = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun46612: for (var _fun46612_ip = 0;;) switch (_fun46612_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = arg1;
                            var3 = arg2;
                            var1 = var4 - var3;
                            var0 = 0;
                            var0 = var1 == var0;
                            if (!var0) {
                                _fun46612_ip = 46;
                                continue _fun46612
                            }
                        case 22:
                            var1 = var2.start;
                            var1 = var1 === var4;
                            if (var1) {
                                _fun46612_ip = 43;
                                continue _fun46612
                            }
                        case 34:
                            var2 = var2.end;
                            var1 = var2 === var3;
                        case 43:
                            var0 = var1;
                        case 46:
                            return var0;
                    }
                };
                var3._isZeroHeightEdgeElement = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun46613: for (var _fun46613_ip = 0;;) switch (_fun46613_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var3 = arg2;
                            var2 = this;
                            var0 = var2._isItemInBounds;
                            var0 = var0.bind(var2)(var5, var4);
                            if (var0) {
                                _fun46613_ip = 39;
                                continue _fun46613
                            }
                        case 27:
                            var1 = var2._isItemInBounds;
                            var0 = var1.bind(var2)(var5, var3);
                        case 39:
                            if (var0) {
                                _fun46613_ip = 55;
                                continue _fun46613
                            }
                        case 42:
                            var1 = var2._isItemBoundsBeyondWindow;
                            var0 = var1.bind(var2)(var5, var4, var3);
                        case 55:
                            if (var0) {
                                _fun46613_ip = 71;
                                continue _fun46613
                            }
                        case 58:
                            var1 = var2._isZeroHeightEdgeElement;
                            var0 = var1.bind(var2)(var5, var4, var3);
                        case 71:
                            return var0;
                    }
                };
                var3._itemIntersectsWindow = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    var4 = this;
                    var3 = var4._itemIntersectsWindow;
                    var2 = var4._engagedWindow;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var3._itemIntersectsEngagedWindow = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    var4 = this;
                    var3 = var4._itemIntersectsWindow;
                    var2 = var4._visibleWindow;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var3._itemIntersectsVisibleWindow = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    var4 = arg0;
                    var2 = arg1;
                    var0 = this;
                    var3 = var2.windowShift;
                    var1 = var2.startCorrection;
                    var1 = var3 + var1;
                    var3 = var2.windowShift;
                    var2 = var2.endCorrection;
                    var2 = var3 + var2;
                    var3 = var4 + var1;
                    var1 = var0._windowBound;
                    var1 = var4 + var1;
                    var1 = var1 + var2;
                    var4 = var0._engagedWindow;
                    var2 = global;
                    var7 = var2.Math;
                    var6 = var7.max;
                    var2 = var0._renderAheadOffset;
                    var5 = var3 - var2;
                    var2 = 0;
                    var2 = var6.bind(var7)(var2, var5);
                    var4.start = var2;
                    var4 = var0._engagedWindow;
                    var2 = var0._renderAheadOffset;
                    var2 = var1 + var2;
                    var4.end = var2;
                    var2 = var0._visibleWindow;
                    var2.start = var3;
                    var0 = var0._visibleWindow;
                    var0.end = var1;
                    var0 = undefined;
                    return var0;
                };
                var3._updateTrackingWindows = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    var2 = arg0;
                    var1 = arg1;
                    var0 = this;
                    var5 = var0._diffArraysAndCallFunc;
                    var4 = var0._visibleIndexes;
                    var3 = var0.onVisibleRowsChanged;
                    var3 = var5.bind(var0)(var2, var4, var3);
                    var5 = var0._diffArraysAndCallFunc;
                    var4 = var0._engagedIndexes;
                    var3 = var0.onEngagedRowsChanged;
                    var3 = var5.bind(var0)(var1, var4, var3);
                    var0._visibleIndexes = var2;
                    var0._engagedIndexes = var1;
                    var0 = undefined;
                    return var0;
                };
                var3._diffUpdateOriginalIndexesAndRaiseEvents = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun46618: for (var _fun46618_ip = 0;;) switch (_fun46618_ip) {
                        case 0:
                            var7 = arg0;
                            var2 = arg1;
                            var4 = arg2;
                            var1 = this;
                            if (!var4) {
                                _fun46618_ip = 94;
                                continue _fun46618
                            }
                        case 15:
                            var0 = var1._calculateArrayDiff;
                            var3 = var0.bind(var1)(var7, var2);
                            var0 = var1._calculateArrayDiff;
                            var2 = var0.bind(var1)(var2, var7);
                            var0 = var3.length;
                            var5 = 0;
                            var0 = var0 > var5;
                            if (var0) {
                                _fun46618_ip = 62;
                                continue _fun46618
                            }
                        case 53:
                            var1 = var2.length;
                            var0 = var1 > var5;
                        case 62:
                            if (!var0) {
                                _fun46618_ip = 94;
                                continue _fun46618
                            }
                        case 65:
                            var6 = _closure1_slot2;
                            var1 = undefined;
                            var5 = new Array(0);
                            var0 = true;
                            var0 = var6.bind(var1)(var5, var7, var0);
                            var0 = var4.bind(var1)(var0, var3, var2);
                        case 94:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3._diffArraysAndCallFunc = var2;
                var2 = var0.prototype;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun46619: for (var _fun46619_ip = 0;;) switch (_fun46619_ip) {
                        case 0:
                            var8 = arg0;
                            var7 = arg1;
                            var6 = var8.length;
                            var0 = new Array(0);
                            var5 = 0;
                            var9 = var5 < var6;
                            var3 = undefined;
                            var2 = -1;
                            var1 = 0;
                            if (!var9) {
                                _fun46619_ip = 100;
                                continue _fun46619
                            }
                        case 37:
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var9 = var9[var5];
                            var9 = var10.bind(var3)(var9);
                            var11 = var9.default;
                            var10 = var11.findIndexOf;
                            var9 = var8[var1];
                            var9 = var10.bind(var11)(var7, var9);
                            if (!(var2 === var9)) {
                                _fun46619_ip = 93;
                                continue _fun46619
                            }
                        case 79:
                            var10 = var0.push;
                            var9 = var8[var1];
                            var9 = var10.bind(var0)(var9);
                        case 93:
                            var1 = var1 + 1;
                            if (var1 < var6) {
                                _fun46619_ip = 37;
                                continue _fun46619
                            }
                        case 100:
                            return var0;
                    }
                };
                var2._calculateArrayDiff = var1;
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5187]);