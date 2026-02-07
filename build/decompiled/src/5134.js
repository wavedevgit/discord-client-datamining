// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun45837: for (var _fun45837_ip = 0;;) switch (_fun45837_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun45837_ip = 74;
                continue _fun45837;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var3 = var3.bind(var0)(var4);
    var3 = var3.RVLayoutManager;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0, arg1() {
            _fun45841: for (var _fun45841_ip = 0;;) switch (_fun45841_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = _closure1_slot1;
                    var2 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var3, var2);
                    var9 = new Array(2);
                    var9[0] = var1;
                    var0 = arg1;
                    var9[1] = var0;
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var5)(var2);
                    var2 = _closure1_slot3;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun45841_ip = 80;
                        continue _fun45841
                    }
                case 67:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var9);
                    _fun45841_ip = 114;
                    continue _fun45841;
                case 80:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var4 = _closure1_slot4;
                    var4 = var4.bind(var5)(var3);
                    var4 = var4.constructor;
                    var0 = var6.bind(var7)(var8, var9, var4);
                case 114:
                    var0 = var2.bind(var5)(var3, var0);
                    var4 = 0;
                    var0.currentColumn = var4;
                    var2 = false;
                    var0.fullRelayoutRequired = var2;
                    var2 = var1.windowSize;
                    var2 = var2.width;
                    var0.boundedSize = var2;
                    var1 = var1.optimizeItemArrangement;
                    var0.optimizeItemArrangement = var1;
                    var1 = var0.columnHeights;
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun45841_ip = 207;
                        continue _fun45841
                    }
                case 177:
                    var2 = global;
                    var3 = var2.Array;
                    var2 = var0.maxColumns;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.fill;
                    var1 = var2.bind(var3)(var4);
                case 207:
                    var0.columnHeights = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot2;
        var4 = {};
        var0 = 'updateLayoutParams';
        var4.key = var0;
        var0 = function arg0() {
            _fun45842: for (var _fun45842_ip = 0;;) switch (_fun45842_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var6 = var2.maxColumns;
                    var5 = var2.optimizeItemArrangement;
                    var12 = _closure2_slot0;
                    var7 = function arg0, arg1, arg2, arg3() {
                        _fun45843: for (var _fun45843_ip = 0;;) switch (_fun45843_ip) {
                            case 0:
                                var4 = arg0;
                                var6 = arg2;
                                var _closure4_slot0 = var6;
                                var5 = _closure1_slot5;
                                var3 = _closure1_slot4;
                                var0 = 1;
                                var2 = 3;
                                var7 = var0 & var2;
                                var0 = var4;
                                if (!var7) {
                                    _fun45843_ip = 44;
                                    continue _fun45843
                                }
                            case 39:
                                var0 = var4.prototype;
                            case 44:
                                var4 = undefined;
                                var3 = var3.bind(var4)(var0);
                                var0 = 'updateLayoutParams';
                                var4 = var5.bind(var4)(var3, var0, var6);
                                var _closure4_slot1 = var4;
                                var0 = 2;
                                var2 = var0 & var2;
                                var0 = var4;
                                if (!var2) {
                                    _fun45843_ip = 98;
                                    continue _fun45843
                                }
                            case 79:
                                var3 = 'function';
                                var2 = typeof var4;
                                var0 = var4;
                                if (!(var3 === var2)) {
                                    _fun45843_ip = 98;
                                    continue _fun45843
                                }
                            case 93:
                                var0 = function(arg0) { // Environment: var1
                                    var3 = _closure4_slot1;
                                    var2 = var3.apply;
                                    var1 = _closure4_slot0;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                            case 98:
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var11 = 'updateLayoutParams';
                    var9 = 3;
                    var13 = undefined;
                    var10 = var2;
                    var4 = var13[var7](var12, var11, var10, var9, var8);
                    var3 = new Array(1);
                    var3[0] = var1;
                    var3 = var4.bind(var0)(var3);
                    var3 = !var3;
                    var4 = var2.boundedSize;
                    var3 = var1.windowSize;
                    var3 = var3.width;
                    var3 = var4 === var3;
                    if (!var3) {
                        _fun45842_ip = 100;
                        continue _fun45842
                    }
                case 90:
                    var4 = var1.maxColumns;
                    var3 = var6 === var4;
                case 100:
                    if (!var3) {
                        _fun45842_ip = 113;
                        continue _fun45842
                    }
                case 103:
                    var4 = var1.optimizeItemArrangement;
                    var3 = var5 === var4;
                case 113:
                    if (var3) {
                        _fun45842_ip = 198;
                        continue _fun45842
                    }
                case 116:
                    var1 = var1.windowSize;
                    var1 = var1.width;
                    var2.boundedSize = var1;
                    var1 = var2.layouts;
                    var1 = var1.length;
                    var4 = 0;
                    if (!(var1 > var4)) {
                        _fun45842_ip = 198;
                        continue _fun45842
                    }
                case 150:
                    var1 = var2.updateAllWidths;
                    var1 = var1.bind(var2)();
                    var3 = var2.recomputeLayouts;
                    var1 = var2.layouts;
                    var5 = var1.length;
                    var1 = 1;
                    var1 = var5 - var1;
                    var1 = var3.bind(var2)(var4, var1);
                    var1 = true;
                    var2.requiresRepaint = var1;
                case 198:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var6 = 'processLayoutInfo';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun45845: for (var _fun45845_ip = 0;;) switch (_fun45845_ip) {
                case 0:
                    var1 = this;
                    var4 = arg0;
                    var3 = var4[Symbol.iterator];
                    var4 = var3().next;
                    var2 = true;
                    var0 = undefined;
                case 13:
                    var5 = var4().value;
                    var6 = var3;
                    if (!(var6 !== var0)) {
                        _fun45845_ip = 87;
                        continue _fun45845
                    }
                case 24: // try_start_0
                    var7 = var5.index;
                    var5 = var5.dimensions;
                    var6 = var1.layouts;
                    var6 = var6[var7];
                    var5 = var5.height;
                    var6.height = var5;
                    var6.isHeightMeasured = var2;
                    var6.isWidthMeasured = var2;
                    var5 = var1.layouts;
                    var5[var7] = var6;
                case 78: // try_end0
                    _fun45845_ip = 13;
                    continue _fun45845;
                case 80: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var3.return();
                    throw var2;
                case 87:
                    var2 = var1.fullRelayoutRequired;
                    if (var2) {
                        _fun45845_ip = 98;
                        continue _fun45845
                    }
                case 96:
                    return var0;
                case 98:
                    var0 = var1.updateAllWidths;
                    var0 = var0.bind(var1)();
                    var0 = false;
                    var1.fullRelayoutRequired = var0;
                    var0 = 0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'estimateLayout';
        var4.key = var6;
        var6 = function arg0() {
            var3 = arg0;
            var2 = this;
            var0 = var2.layouts;
            var1 = var0[var3];
            var0 = var2.getWidth;
            var0 = var0.bind(var2)(var3);
            var1.width = var0;
            var0 = var2.getEstimatedHeight;
            var0 = var0.bind(var2)(var3);
            var1.height = var0;
            var0 = true;
            var1.isWidthMeasured = var0;
            var1.enforcedWidth = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleSpanChange';
        var4.key = var6;
        var6 = function arg0() {
            var1 = true;
            var0 = this;
            var0.fullRelayoutRequired = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getLayoutSize';
        var4.key = var6;
        var6 = function() {
            _fun45848: for (var _fun45848_ip = 0;;) switch (_fun45848_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.layouts;
                    var1 = var0.length;
                    var0 = 0;
                    if (!(var0 !== var1)) {
                        _fun45848_ip = 88;
                        continue _fun45848
                    }
                case 20:
                    var0 = global;
                    var1 = var0.Math;
                    var4 = var1.max;
                    var3 = var4.apply;
                    var1 = var0.Math;
                    var6 = _closure1_slot0;
                    var5 = var2.columnHeights;
                    var0 = undefined;
                    var0 = var6.bind(var0)(var5);
                    var1 = var3.bind(var4)(var1, var0);
                    var0 = {};
                    var2 = var2.boundedSize;
                    var0.width = var2;
                    var0.height = var1;
                    return var0;
                case 88:
                    var0 = {
                        'width': 0,
                        'height': 0
                    };
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'recomputeLayouts';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun45849: for (var _fun45849_ip = 0;;) switch (_fun45849_ip) {
                case 0:
                    var0 = arg0;
                    var4 = this;
                    var1 = 0;
                    if (!(var1 !== var0)) {
                        _fun45849_ip = 27;
                        continue _fun45849
                    }
                case 12:
                    var2 = var4.updateColumnHeightsToIndex;
                    var2 = var2.bind(var4)(var0);
                    _fun45849_ip = 71;
                    continue _fun45849;
                case 27:
                    var2 = global;
                    var5 = var2.Array;
                    var3 = var4.maxColumns;
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.fill;
                    var2 = var2.bind(var3)(var1);
                    var4.columnHeights = var2;
                    var4.currentColumn = var1;
                case 71:
                    var1 = var4.layouts;
                    var3 = var1.length;
                    var2 = 1;
                    var1 = true;
                    if (!(var0 < var3)) {
                        _fun45849_ip = 182;
                        continue _fun45849
                    }
                case 91:
                    var5 = var4.getLayout;
                    var7 = var5.bind(var4)(var0);
                    var5 = var4.getSpan;
                    var8 = var5.bind(var4)(var0, var1);
                    var6 = var4.optimizeItemArrangement;
                    var5 = var0;
                    if (var6) {
                        _fun45849_ip = 142;
                        continue _fun45849
                    }
                case 126:
                    var6 = var4.placeItemSequentially;
                    var6 = var6.bind(var4)(var7, var8);
                    _fun45849_ip = 175;
                    continue _fun45849;
                case 142:
                    if (!(var2 !== var8)) {
                        _fun45849_ip = 162;
                        continue _fun45849
                    }
                case 146:
                    var6 = var4.placeOptimizedMultiColumnItem;
                    var6 = var6.bind(var4)(var7, var8);
                    _fun45849_ip = 175;
                    continue _fun45849;
                case 162:
                    var6 = var4.placeSingleColumnItem;
                    var6 = var6.bind(var4)(var7);
                case 175:
                    var0 = var5 + 1;
                    if (var0 < var3) {
                        _fun45849_ip = 91;
                        continue _fun45849
                    }
                case 182:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getWidth';
        var4.key = var6;
        var6 = function arg0() {
            var3 = this;
            var1 = var3.boundedSize;
            var0 = var3.maxColumns;
            var1 = var1 / var0;
            var2 = var3.getSpan;
            var0 = arg0;
            var0 = var2.bind(var3)(var0);
            var0 = var1 * var0;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'updateAllWidths';
        var4.key = var6;
        var6 = function() {
            _fun45851: for (var _fun45851_ip = 0;;) switch (_fun45851_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.layouts;
                    var0 = var0.length;
                    var2 = 0;
                    var1 = var2 < var0;
                    var0 = undefined;
                    if (!var1) {
                        _fun45851_ip = 86;
                        continue _fun45851
                    }
                case 25:
                    var1 = var3.layouts;
                    var4 = var1[var2];
                    var1 = var3.getWidth;
                    var1 = var1.bind(var3)(var2);
                    var4.width = var1;
                    var1 = var3.layouts;
                    var1 = var1[var2];
                    var1.minHeight = var0;
                    var2 = var2 + 1;
                    var1 = var3.layouts;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun45851_ip = 25;
                        continue _fun45851
                    }
                case 86:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'placeItemSequentially';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun45852: for (var _fun45852_ip = 0;;) switch (_fun45852_ip) {
                case 0:
                    var5 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var0 = var1.currentColumn;
                    var3 = var0 + var2;
                    var0 = var1.maxColumns;
                    if (!(var3 > var0)) {
                        _fun45852_ip = 37;
                        continue _fun45852
                    }
                case 29:
                    var0 = 0;
                    var1.currentColumn = var0;
                case 37:
                    var3 = var1.columnHeights;
                    var0 = var1.currentColumn;
                    var4 = var3[var0];
                    var3 = var1.currentColumn;
                    var0 = 1;
                    var7 = var3 + var0;
                    var0 = var1.currentColumn;
                    var0 = var0 + var2;
                    var6 = global;
                    var3 = var4;
                    var4 = var3;
                    if (!(var7 < var0)) {
                        _fun45852_ip = 151;
                        continue _fun45852
                    }
                case 88:
                    var0 = var1.maxColumns;
                    var8 = var3;
                    if (!(var7 < var0)) {
                        _fun45852_ip = 128;
                        continue _fun45852
                    }
                case 101:
                    var10 = var6.Math;
                    var9 = var10.max;
                    var0 = var1.columnHeights;
                    var0 = var0[var7];
                    var8 = var9.bind(var10)(var3, var0);
                case 128:
                    var7 = var7 + 1;
                    var0 = var1.currentColumn;
                    var0 = var0 + var2;
                    var3 = var8;
                    var4 = var3;
                    if (var7 < var0) {
                        _fun45852_ip = 88;
                        continue _fun45852
                    }
                case 151:
                    var3 = var1.boundedSize;
                    var0 = var1.maxColumns;
                    var3 = var3 / var0;
                    var0 = var1.currentColumn;
                    var0 = var3 * var0;
                    var5.x = var0;
                    var5.y = var4;
                    var3 = var1.currentColumn;
                    var0 = var1.currentColumn;
                    var0 = var0 + var2;
                    if (!(var3 < var0)) {
                        _fun45852_ip = 255;
                        continue _fun45852
                    }
                case 209:
                    var0 = var1.maxColumns;
                    if (!(var3 < var0)) {
                        _fun45852_ip = 238;
                        continue _fun45852
                    }
                case 219:
                    var6 = var1.columnHeights;
                    var0 = var5.height;
                    var0 = var4 + var0;
                    var6[var3] = var0;
                case 238:
                    var3 = var3 + 1;
                    var0 = var1.currentColumn;
                    var0 = var0 + var2;
                    if (var3 < var0) {
                        _fun45852_ip = 209;
                        continue _fun45852
                    }
                case 255:
                    var0 = var1.currentColumn;
                    var0 = var0 + var2;
                    var1.currentColumn = var0;
                    var2 = var1.currentColumn;
                    var0 = var1.maxColumns;
                    if (!(var2 >= var0)) {
                        _fun45852_ip = 295;
                        continue _fun45852
                    }
                case 287:
                    var0 = 0;
                    var1.currentColumn = var0;
                case 295:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'placeSingleColumnItem';
        var4.key = var6;
        var6 = function arg0() {
            _fun45853: for (var _fun45853_ip = 0;;) switch (_fun45853_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var3 = var1.columnHeights;
                    var2 = 0;
                    var6 = var3[var2];
                    var3 = var1.maxColumns;
                    var5 = 1;
                    var3 = var5 < var3;
                    var4 = 0;
                    if (!var3) {
                        _fun45853_ip = 79;
                        continue _fun45853
                    }
                case 36:
                    var3 = var1.columnHeights;
                    var3 = var3[var5];
                    if (!(var3 < var6)) {
                        _fun45853_ip = 63;
                        continue _fun45853
                    }
                case 50:
                    var3 = var1.columnHeights;
                    var6 = var3[var5];
                    var4 = var5;
                case 63:
                    var5 = var5 + 1;
                    var3 = var1.maxColumns;
                    var2 = var4;
                    if (var5 < var3) {
                        _fun45853_ip = 36;
                        continue _fun45853
                    }
                case 79:
                    var4 = var1.boundedSize;
                    var3 = var1.maxColumns;
                    var3 = var4 / var3;
                    var3 = var3 * var2;
                    var0.x = var3;
                    var3 = var1.columnHeights;
                    var3 = var3[var2];
                    var0.y = var3;
                    var1 = var1.columnHeights;
                    var3 = var1[var2];
                    var0 = var0.height;
                    var0 = var3 + var0;
                    var1[var2] = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'placeOptimizedMultiColumnItem';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun45854: for (var _fun45854_ip = 0;;) switch (_fun45854_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var5 = this;
                    var0 = global;
                    var1 = var0.Number;
                    var10 = var1.MAX_VALUE;
                    var1 = var5.maxColumns;
                    var1 = var1 - var6;
                    var9 = 0;
                    var8 = 1;
                    var4 = 0;
                    var3 = 0;
                    var2 = 0;
                    if (!(var2 <= var1)) {
                        _fun45854_ip = 222;
                        continue _fun45854
                    }
                case 51:
                    var1 = var5.columnHeights;
                    var11 = var1[var3];
                    var12 = var3 + var8;
                    var1 = var3 + var6;
                    var14 = var11;
                    if (!(var12 < var1)) {
                        _fun45854_ip = 117;
                        continue _fun45854
                    }
                case 76:
                    var15 = var0.Math;
                    var13 = var15.max;
                    var1 = var5.columnHeights;
                    var1 = var1[var12];
                    var11 = var13.bind(var15)(var11, var1);
                    var12 = var12 + 1;
                    var1 = var3 + var6;
                    var14 = var11;
                    if (var12 < var1) {
                        _fun45854_ip = 76;
                        continue _fun45854
                    }
                case 117:
                    var1 = var5.maxColumns;
                    var11 = var9 < var1;
                    var13 = 0;
                    var12 = 0;
                    var1 = 0;
                    if (!var11) {
                        _fun45854_ip = 189;
                        continue _fun45854
                    }
                case 136:
                    if (!(var12 >= var3)) {
                        _fun45854_ip = 148;
                        continue _fun45854
                    }
                case 140:
                    var11 = var3 + var6;
                    if (!(!(var12 < var11))) {
                        _fun45854_ip = 160;
                        continue _fun45854
                    }
                case 148:
                    var11 = var5.columnHeights;
                    var11 = var11[var12];
                    _fun45854_ip = 169;
                    continue _fun45854;
                case 160:
                    var15 = var7.height;
                    var11 = var14 + var15;
                case 169:
                    var13 = var13 + var11;
                    var12 = var12 + 1;
                    var11 = var5.maxColumns;
                    var1 = var13;
                    if (var12 < var11) {
                        _fun45854_ip = 136;
                        continue _fun45854
                    }
                case 189:
                    if (!(var1 < var10)) {
                        _fun45854_ip = 199;
                        continue _fun45854
                    }
                case 193:
                    var4 = var3;
                    var10 = var1;
                case 199:
                    var3 = var3 + 1;
                    var1 = var5.maxColumns;
                    var1 = var1 - var6;
                    var2 = var4;
                    if (var3 <= var1) {
                        _fun45854_ip = 51;
                        continue _fun45854
                    }
                case 222:
                    var1 = var0.Math;
                    var8 = var1.max;
                    var4 = var8.apply;
                    var3 = var0.Math;
                    var9 = _closure1_slot0;
                    var10 = var5.columnHeights;
                    var1 = var10.slice;
                    var0 = var2 + var6;
                    var1 = var1.bind(var10)(var2, var0);
                    var0 = undefined;
                    var1 = var9.bind(var0)(var1);
                    var4 = var4.bind(var8)(var3, var1);
                    var3 = var5.boundedSize;
                    var1 = var5.maxColumns;
                    var1 = var3 / var1;
                    var1 = var1 * var2;
                    var7.x = var1;
                    var7.y = var4;
                    var1 = var2 + var6;
                    var3 = var2;
                    var2 = var3;
                    if (!(var2 < var1)) {
                        _fun45854_ip = 361;
                        continue _fun45854
                    }
                case 331:
                    var8 = var5.columnHeights;
                    var1 = var7.height;
                    var1 = var4 + var1;
                    var8[var2] = var1;
                    var2 = var2 + 1;
                    var1 = var3 + var6;
                    if (var2 < var1) {
                        _fun45854_ip = 331;
                        continue _fun45854
                    }
                case 361:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'updateColumnHeightsToIndex';
        var4.key = var6;
        var5 = function arg0() {
            _fun45855: for (var _fun45855_ip = 0;;) switch (_fun45855_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var2 = global;
                    var5 = var2.Array;
                    var1 = var3.maxColumns;
                    var0 = undefined;
                    var6 = var5.bind(var0)(var1);
                    var5 = var6.fill;
                    var1 = 0;
                    var5 = var5.bind(var6)(var1);
                    var3.columnHeights = var5;
                    var3.currentColumn = var1;
                    var5 = var1 < var4;
                    if (!var5) {
                        _fun45855_ip = 269;
                        continue _fun45855
                    }
                case 62:
                    var5 = var3.layouts;
                    var9 = var5[var1];
                    var5 = var9.width;
                    var7 = var3.boundedSize;
                    var6 = var3.maxColumns;
                    var10 = var7 / var6;
                    var7 = var2.Math;
                    var6 = var7.round;
                    var5 = var5 / var10;
                    var6 = var6.bind(var7)(var5);
                    var8 = var2.Math;
                    var7 = var8.round;
                    var5 = var9.x;
                    var5 = var5 / var10;
                    var5 = var7.bind(var8)(var5);
                    var11 = var2.Math;
                    var10 = var11.min;
                    var8 = var5 + var6;
                    var7 = var3.maxColumns;
                    var8 = var10.bind(var11)(var8, var7);
                    var7 = var5;
                    if (!(var7 < var8)) {
                        _fun45855_ip = 230;
                        continue _fun45855
                    }
                case 172:
                    var11 = var3.columnHeights;
                    var14 = var2.Math;
                    var13 = var14.max;
                    var10 = var3.columnHeights;
                    var12 = var10[var7];
                    var15 = var9.y;
                    var10 = var9.height;
                    var10 = var15 + var10;
                    var10 = var13.bind(var14)(var12, var10);
                    var11[var7] = var10;
                    var7 = var7 + 1;
                    if (var7 < var8) {
                        _fun45855_ip = 172;
                        continue _fun45855
                    }
                case 230:
                    var7 = var3.optimizeItemArrangement;
                    if (var7) {
                        _fun45855_ip = 259;
                        continue _fun45855
                    }
                case 239:
                    var6 = var5 + var6;
                    var5 = var3.maxColumns;
                    var5 = var6 % var5;
                    var3.currentColumn = var5;
                case 259:
                    var1 = var1 + 1;
                    if (var1 < var4) {
                        _fun45855_ip = 62;
                        continue _fun45855
                    }
                case 269:
                    return var0;
            }
        };
        var4.value = var5;
        var0[11] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.RVMasonryLayoutManagerImpl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5125, 5113, 5114, 5135, 5137, 5138, 5140, 5141]);