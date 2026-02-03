// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45831: for (var _fun45831_ip = 0;;) switch (_fun45831_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var3 = this;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = var3;
            if (!var0) {
                _fun45831_ip = 34;
                continue _fun45831
            }
        case 28:
            var0 = var3.__extends;
        case 34:
            if (var0) {
                _fun45831_ip = 51;
                continue _fun45831
            }
        case 37:
            var3 = function arg0, arg1() {
                _fun45832: for (var _fun45832_ip = 0;;) switch (_fun45832_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun45832_ip = 47;
                            continue _fun45832
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun45832_ip = 44;
                            continue _fun45832
                        }
                    case 39:
                        var1 = function(arg0, arg1) { // Environment: var0
                            var1 = arg1;
                            var0 = arg0;
                            var0.__proto__ = var1;
                            var0 = undefined;
                            return var0;
                        };
                    case 44:
                        var3 = var1;
                    case 47:
                        if (var3) {
                            _fun45832_ip = 55;
                            continue _fun45832
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun45834: for (var _fun45834_ip = 0;;) switch (_fun45834_ip) {
                                case 0:
                                    var7 = arg0;
                                    var6 = arg1;
                                    var4 = var6;
                                    var0 = global;
                                    for (var1 in var4)
                                        case 19: {
                                            case 28: var9 = var1;
                                            var8 = var0.Object;
                                            var8 = var8.prototype;
                                            var10 = var8.hasOwnProperty;
                                            var8 = var10.call;
                                            var8 = var8.bind(var10)(var6, var9);
                                            if (!var8) {
                                                _fun45834_ip = 19;
                                                continue _fun45834
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun45834_ip = 19;
                                            continue _fun45834;
                                        }
                                case 72:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                    case 55:
                        _closure1_slot2 = var3;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot2 = var3;
            var0 = function(arg0, arg1) { // Environment: var1
                _fun45835: for (var _fun45835_ip = 0;;) switch (_fun45835_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var _closure2_slot0 = var2;
                        var1 = function() {
                            var1 = _closure2_slot0;
                            var0 = this;
                            var0.constructor = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var4 = 'function';
                        var0 = typeof var3;
                        if (!(var4 !== var0)) {
                            _fun45835_ip = 34;
                            continue _fun45835
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun45835_ip = 114;
                            continue _fun45835
                        }
                    case 34:
                        var4 = _closure1_slot2;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun45835_ip = 88;
                            continue _fun45835
                        }
                    case 55:
                        var4 = var3.prototype;
                        var1.prototype = var4;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var4;
                        var1 = new var8[var1](var7);
                        var1 = var1 instanceof Object ? var1 : var4;
                        _fun45835_ip = 106;
                        continue _fun45835;
                    case 88:
                        var4 = global;
                        var5 = var4.Object;
                        var4 = var5.create;
                        var1 = var4.bind(var5)(var3);
                    case 106:
                        var2.prototype = var1;
                        return var0;
                    case 114:
                        var0 = global;
                        var2 = var0.TypeError;
                        var1 = var0.String;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var3);
                        var0 = 'Class extends value ';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = ' is not a constructor or null';
                        var7 = var3 + var0;
                        var8 = var1;
                        var0 = new var8[var2](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 51:
            var _closure1_slot3 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = undefined;
            var2.StickyType = var0;
            var8 = 0;
            var3 = var5[var8];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var7 = 1;
            var3 = var5[var7];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var6 = var2.StickyType;
            if (var6) {
                _fun45831_ip = 146;
                continue _fun45831
            }
        case 135:
            var3 = {};
            var2.StickyType = var3;
            var6 = var3;
        case 146:
            var _closure1_slot4 = var6;
            var6.HEADER = var8;
            var3 = 'HEADER';
            var6[var8] = var3;
            var6.FOOTER = var7;
            var3 = 'FOOTER';
            var6[var7] = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.ComponentCompat;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function arg0, arg1() {
                    _fun45838: for (var _fun45838_ip = 0;;) switch (_fun45838_ip) {
                        case 0:
                            var1 = this;
                            var4 = _closure2_slot0;
                            var3 = var4.call;
                            var2 = arg0;
                            var0 = arg1;
                            var0 = var3.bind(var4)(var1, var2, var0);
                            if (var0) {
                                _fun45838_ip = 34;
                                continue _fun45838
                            }
                        case 31:
                            var0 = var1;
                        case 34:
                            var1 = _closure1_slot4;
                            var1 = var1.HEADER;
                            var0.stickyType = var1;
                            var1 = 1;
                            var0.stickyTypeMultiplier = var1;
                            var3 = false;
                            var0.stickyVisiblity = var3;
                            var1 = 0;
                            var0.currentIndex = var1;
                            var0.currentStickyIndex = var1;
                            var4 = new Array(0);
                            var0.visibleIndices = var4;
                            var0.bounceScrolling = var3;
                            var2 = _closure1_slot6;
                            var2 = var2.Animated;
                            var2 = var2.Value;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var3;
                            var7 = 0;
                            var2 = new var8[var2](var7, var6);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var0._stickyViewOffset = var2;
                            var0._previousStickyIndex = var1;
                            var0._nextStickyIndex = var1;
                            var2 = true;
                            var0._firstCompute = var2;
                            var0._smallestVisibleIndex = var1;
                            var0._largestVisibleIndex = var1;
                            var0._offsetY = var1;
                            var1 = {
                                'startCorrection': 0,
                                'endCorrection': 0,
                                'windowShift': 0
                            };
                            var0._windowCorrection = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot3;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var3 = this;
                    var1 = var3._updateDimensionParams;
                    var1 = var1.bind(var3)();
                    var7 = var3.calculateVisibleStickyIndex;
                    var12 = var0.stickyIndices;
                    var11 = var3._smallestVisibleIndex;
                    var10 = var3._largestVisibleIndex;
                    var9 = var3._offsetY;
                    var8 = var3._windowBound;
                    var13 = var3;
                    var1 = var13[var7](var12, var11, var10, var9, var8, var7);
                    var1 = var3._computeLayouts;
                    var0 = var0.stickyIndices;
                    var0 = var1.bind(var3)(var0);
                    var2 = var3.stickyViewVisible;
                    var1 = var3.stickyVisiblity;
                    var0 = false;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var3.componentWillReceivePropsCompat = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    _fun45840: for (var _fun45840_ip = 0;;) switch (_fun45840_ip) {
                        case 0:
                            var0 = this;
                            var2 = {};
                            var3 = {};
                            var1 = var0._stickyViewOffset;
                            var3.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var3;
                            var2.transform = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = var0.props;
                            var2 = var2.renderContainer;
                            var2 = !var2;
                            if (!var2) {
                                _fun45840_ip = 96;
                                continue _fun45840
                            }
                        case 55:
                            var4 = {};
                            var3 = 'absolute';
                            var4.position = var3;
                            var3 = var0._scrollableWidth;
                            var4.width = var3;
                            var3 = new Array(2);
                            var3[0] = var4;
                            var4 = var0.containerPosition;
                            var3[1] = var4;
                            var2 = var3;
                        case 96:
                            var1[1] = var2;
                            var5 = _closure1_slot5;
                            var4 = var5.createElement;
                            var2 = _closure1_slot6;
                            var2 = var2.Animated;
                            var3 = var2.View;
                            var2 = {};
                            var2.style = var1;
                            var6 = var0.stickyVisiblity;
                            var1 = null;
                            if (!var6) {
                                _fun45840_ip = 155;
                                continue _fun45840
                            }
                        case 145:
                            var6 = var0._renderSticky;
                            var1 = var6.bind(var0)();
                        case 155:
                            var4 = var4.bind(var5)(var3, var2, var1);
                            var1 = var0.props;
                            var1 = var1.renderContainer;
                            if (var1) {
                                _fun45840_ip = 178;
                                continue _fun45840
                            }
                        case 176:
                            return var4;
                        case 178:
                            var2 = var0.props;
                            var1 = var2.getExtendedState;
                            var3 = var1.bind(var2)();
                            var2 = var0.props;
                            var1 = var2.renderContainer;
                            var0 = var0.currentStickyIndex;
                            var0 = var1.bind(var2)(var4, var0, var3);
                            return var0;
                    }
                };
                var3.renderCompat = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun45841: for (var _fun45841_ip = 0;;) switch (_fun45841_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2._firstCompute;
                            if (!var0) {
                                _fun45841_ip = 53;
                                continue _fun45841
                            }
                        case 12:
                            var0 = var2.initStickyParams;
                            var0 = var0.bind(var2)();
                            var1 = var2._getAdjustedOffsetY;
                            var0 = var2._offsetY;
                            var0 = var1.bind(var2)(var0);
                            var2._offsetY = var0;
                            var0 = false;
                            var2._firstCompute = var0;
                        case 53:
                            var0 = var2._updateDimensionParams;
                            var0 = var0.bind(var2)();
                            var1 = var2._setSmallestAndLargestVisibleIndices;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var6 = var2.calculateVisibleStickyIndex;
                            var0 = var2.props;
                            var11 = var0.stickyIndices;
                            var10 = var2._smallestVisibleIndex;
                            var9 = var2._largestVisibleIndex;
                            var8 = var2._offsetY;
                            var7 = var2._windowBound;
                            var12 = var2;
                            var0 = var12[var6](var11, var10, var9, var8, var7, var6);
                            var0 = var2._computeLayouts;
                            var0 = var0.bind(var2)();
                            var1 = var2.stickyViewVisible;
                            var0 = var2.stickyVisiblity;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.onVisibleIndicesChanged = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun45842: for (var _fun45842_ip = 0;;) switch (_fun45842_ip) {
                        case 0:
                            var0 = this;
                            var2 = var0._getAdjustedOffsetY;
                            var1 = arg0;
                            var4 = var2.bind(var0)(var1);
                            var0._offsetY = var4;
                            var1 = var0._updateDimensionParams;
                            var1 = var1.bind(var0)();
                            var2 = var0.boundaryProcessing;
                            var1 = var0._windowBound;
                            var1 = var2.bind(var0)(var4, var1);
                            var1 = var0._previousStickyIndex;
                            var3 = undefined;
                            if (!(var3 !== var1)) {
                                _fun45842_ip = 297;
                                continue _fun45842
                            }
                        case 66:
                            var2 = var0._previousStickyIndex;
                            var1 = var0.stickyTypeMultiplier;
                            var2 = var2 * var1;
                            var5 = var0.currentStickyIndex;
                            var1 = var0.stickyTypeMultiplier;
                            var1 = var5 * var1;
                            if (!(!(var2 >= var1))) {
                                _fun45842_ip = 653;
                                continue _fun45842
                            }
                        case 105:
                            var2 = var0.getScrollY;
                            var1 = var0._scrollableHeight;
                            var2 = var2.bind(var0)(var4, var1);
                            var1 = var0._previousHeight;
                            if (!var1) {
                                _fun45842_ip = 154;
                                continue _fun45842
                            }
                        case 132:
                            var1 = var0._currentYd;
                            if (!var1) {
                                _fun45842_ip = 154;
                                continue _fun45842
                            }
                        case 141:
                            if (!var2) {
                                _fun45842_ip = 154;
                                continue _fun45842
                            }
                        case 144:
                            var1 = var0._currentYd;
                            if (!(!(var2 < var1))) {
                                _fun45842_ip = 175;
                                continue _fun45842
                            }
                        case 154:
                            var6 = var0._stickyViewOffset;
                            var5 = var6.setValue;
                            var1 = 0;
                            var1 = var5.bind(var6)(var1);
                            _fun45842_ip = 297;
                            continue _fun45842;
                        case 175:
                            var5 = var0._currentYd;
                            var1 = var0._previousHeight;
                            var1 = var5 - var1;
                            if (!(var2 > var1)) {
                                _fun45842_ip = 297;
                                continue _fun45842
                            }
                        case 195:
                            var5 = var0.currentIndex;
                            var1 = var0.stickyTypeMultiplier;
                            var1 = var5 - var1;
                            var0.currentIndex = var1;
                            var1 = var0._currentYd;
                            var2 = var2 - var1;
                            var1 = var0._previousHeight;
                            var2 = var2 + var1;
                            var5 = var0.stickyTypeMultiplier;
                            var1 = -1;
                            var1 = var1 * var5;
                            var5 = var2 * var1;
                            var2 = var0._stickyViewOffset;
                            var1 = var2.setValue;
                            var1 = var1.bind(var2)(var5);
                            var1 = var0._computeLayouts;
                            var1 = var1.bind(var0)();
                            var2 = var0.stickyViewVisible;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                        case 297:
                            var1 = var0._nextStickyIndex;
                            if (!(var3 !== var1)) {
                                _fun45842_ip = 578;
                                continue _fun45842
                            }
                        case 310:
                            var2 = var0._nextStickyIndex;
                            var1 = var0.stickyTypeMultiplier;
                            var2 = var2 * var1;
                            var5 = var0.currentStickyIndex;
                            var1 = var0.stickyTypeMultiplier;
                            var1 = var5 * var1;
                            if (!(!(var2 <= var1))) {
                                _fun45842_ip = 580;
                                continue _fun45842
                            }
                        case 349:
                            var2 = var0.getScrollY;
                            var1 = var0._scrollableHeight;
                            var2 = var2.bind(var0)(var4, var1);
                            var1 = var0._currentHeight;
                            if (!var1) {
                                _fun45842_ip = 408;
                                continue _fun45842
                            }
                        case 376:
                            var1 = var0._nextYd;
                            if (!var1) {
                                _fun45842_ip = 408;
                                continue _fun45842
                            }
                        case 385:
                            if (!var2) {
                                _fun45842_ip = 408;
                                continue _fun45842
                            }
                        case 388:
                            var1 = var0._currentHeight;
                            var4 = var2 + var1;
                            var1 = var0._nextYd;
                            if (!(!(var4 > var1))) {
                                _fun45842_ip = 432;
                                continue _fun45842
                            }
                        case 408:
                            var5 = var0._stickyViewOffset;
                            var4 = var5.setValue;
                            var1 = 0;
                            var1 = var4.bind(var5)(var1);
                            _fun45842_ip = 578;
                            continue _fun45842;
                        case 432:
                            var1 = var0._nextYd;
                            if (!(!(var2 <= var1))) {
                                _fun45842_ip = 521;
                                continue _fun45842
                            }
                        case 442:
                            var1 = var0._nextYd;
                            if (!(var2 > var1)) {
                                _fun45842_ip = 578;
                                continue _fun45842
                            }
                        case 455:
                            var4 = var0.currentIndex;
                            var1 = var0.stickyTypeMultiplier;
                            var1 = var4 + var1;
                            var0.currentIndex = var1;
                            var5 = var0._stickyViewOffset;
                            var4 = var5.setValue;
                            var1 = 0;
                            var1 = var4.bind(var5)(var1);
                            var1 = var0._computeLayouts;
                            var1 = var1.bind(var0)();
                            var4 = var0.stickyViewVisible;
                            var1 = true;
                            var1 = var4.bind(var0)(var1);
                            _fun45842_ip = 578;
                            continue _fun45842;
                        case 521:
                            var1 = var0._nextYd;
                            var2 = var2 - var1;
                            var1 = var0._currentHeight;
                            var2 = var2 + var1;
                            var4 = var0.stickyTypeMultiplier;
                            var1 = -1;
                            var1 = var1 * var4;
                            var2 = var2 * var1;
                            var1 = var0._stickyViewOffset;
                            var0 = var1.setValue;
                            var0 = var0.bind(var1)(var2);
                        case 578:
                            return var3;
                        case 580:
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 2;
                            var0 = var4[var0];
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.default;
                            var0 = 3;
                            var0 = var4[var0];
                            var0 = var1.bind(var3)(var0);
                            var0 = var0.default;
                            var8 = var0.stickyIndicesArraySortError;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var9 = var1;
                            var0 = new var9[var2](var8, var7);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 653:
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 2;
                            var0 = var4[var0];
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.default;
                            var0 = 3;
                            var0 = var4[var0];
                            var0 = var1.bind(var3)(var0);
                            var0 = var0.default;
                            var8 = var0.stickyIndicesArraySortError;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var9 = var1;
                            var0 = new var9[var2](var8, var7);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var3.onScroll = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun45843: for (var _fun45843_ip = 0;;) switch (_fun45843_ip) {
                        case 0:
                            var1 = arg1;
                            var3 = this;
                            var0 = undefined;
                            if (!(var0 === var1)) {
                                _fun45843_ip = 14;
                                continue _fun45843
                            }
                        case 12:
                            var1 = true;
                        case 14:
                            var2 = arg0;
                            var3.stickyVisiblity = var2;
                            if (!var1) {
                                _fun45843_ip = 39;
                                continue _fun45843
                            }
                        case 26:
                            var2 = var3.setState;
                            var1 = {};
                            var1 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var3.stickyViewVisible = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun45844: for (var _fun45844_ip = 0;;) switch (_fun45844_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.getWindowCorrection;
                            if (!var0) {
                                _fun45844_ip = 22;
                                continue _fun45844
                            }
                        case 12:
                            var1 = var2.getWindowCorrection;
                            var0 = var1.bind(var2)();
                        case 22:
                            if (var0) {
                                _fun45844_ip = 34;
                                continue _fun45844
                            }
                        case 25:
                            var1 = this;
                            var0 = var1._windowCorrection;
                        case 34:
                            return var0;
                    }
                };
                var3.getWindowCorrection = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun45845: for (var _fun45845_ip = 0;;) switch (_fun45845_ip) {
                        case 0:
                            var2 = this;
                            var3 = var2.hasReachedBoundary;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var3.bind(var2)(var1, var0);
                            var1 = var2.bounceScrolling;
                            if (!(var1 !== var0)) {
                                _fun45845_ip = 78;
                                continue _fun45845
                            }
                        case 31:
                            var2.bounceScrolling = var0;
                            var0 = var2.bounceScrolling;
                            if (var0) {
                                _fun45845_ip = 65;
                                continue _fun45845
                            }
                        case 46:
                            var1 = var2.onVisibleIndicesChanged;
                            var0 = var2.visibleIndices;
                            var0 = var1.bind(var2)(var0);
                            _fun45845_ip = 78;
                            continue _fun45845;
                        case 65:
                            var1 = var2.stickyViewVisible;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 78:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.boundaryProcessing = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    _fun45846: for (var _fun45846_ip = 0;;) switch (_fun45846_ip) {
                        case 0:
                            var1 = this;
                            var2 = var1.props;
                            var0 = var2.getRLVRenderedSize;
                            var0 = var0.bind(var2)();
                            if (!var0) {
                                _fun45846_ip = 43;
                                continue _fun45846
                            }
                        case 21:
                            var2 = var0.height;
                            var1._scrollableHeight = var2;
                            var0 = var0.width;
                            var1._scrollableWidth = var0;
                        case 43:
                            var2 = var1.props;
                            var0 = var2.getContentDimension;
                            var0 = var0.bind(var2)();
                            var2 = var0;
                            if (!var2) {
                                _fun45846_ip = 70;
                                continue _fun45846
                            }
                        case 64:
                            var2 = var1._scrollableHeight;
                        case 70:
                            if (!var2) {
                                _fun45846_ip = 94;
                                continue _fun45846
                            }
                        case 73:
                            var2 = var0.height;
                            var0 = var1._scrollableHeight;
                            var0 = var2 - var0;
                            var1._windowBound = var0;
                        case 94:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3._updateDimensionParams = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun45847: for (var _fun45847_ip = 0;;) switch (_fun45847_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            if (var2) {
                                _fun45847_ip = 20;
                                continue _fun45847
                            }
                        case 9:
                            var0 = var1.props;
                            var2 = var0.stickyIndices;
                        case 20:
                            if (!var2) {
                                _fun45847_ip = 460;
                                continue _fun45847
                            }
                        case 26:
                            var0 = var1.currentIndex;
                            var0 = var2[var0];
                            var1.currentStickyIndex = var0;
                            var3 = var1.currentIndex;
                            var0 = var1.stickyTypeMultiplier;
                            var0 = var3 - var0;
                            var0 = var2[var0];
                            var1._previousStickyIndex = var0;
                            var3 = var1.currentIndex;
                            var0 = var1.stickyTypeMultiplier;
                            var0 = var3 + var0;
                            var0 = var2[var0];
                            var1._nextStickyIndex = var0;
                            var0 = var1.currentStickyIndex;
                            var3 = undefined;
                            if (!(var3 !== var0)) {
                                _fun45847_ip = 245;
                                continue _fun45847
                            }
                        case 109:
                            var4 = var1.props;
                            var2 = var4.getLayoutForIndex;
                            var0 = var1.currentStickyIndex;
                            var0 = var2.bind(var4)(var0);
                            var1._currentLayout = var0;
                            var2 = var1._currentLayout;
                            var0 = undefined;
                            if (!var2) {
                                _fun45847_ip = 159;
                                continue _fun45847
                            }
                        case 148:
                            var2 = var1._currentLayout;
                            var0 = var2.y;
                        case 159:
                            var1._currentY = var0;
                            var2 = var1._currentLayout;
                            var0 = undefined;
                            if (!var2) {
                                _fun45847_ip = 187;
                                continue _fun45847
                            }
                        case 176:
                            var2 = var1._currentLayout;
                            var0 = var2.height;
                        case 187:
                            var1._currentHeight = var0;
                            var2 = var1._currentY;
                            var0 = undefined;
                            if (!var2) {
                                _fun45847_ip = 239;
                                continue _fun45847
                            }
                        case 204:
                            var2 = var1._currentHeight;
                            var0 = undefined;
                            if (!var2) {
                                _fun45847_ip = 239;
                                continue _fun45847
                            }
                        case 215:
                            var5 = var1.getCurrentYd;
                            var4 = var1._currentY;
                            var2 = var1._currentHeight;
                            var0 = var5.bind(var1)(var4, var2);
                        case 239:
                            var1._currentYd = var0;
                        case 245:
                            var0 = var1._previousStickyIndex;
                            if (!(var3 !== var0)) {
                                _fun45847_ip = 311;
                                continue _fun45847
                            }
                        case 255:
                            var4 = var1.props;
                            var2 = var4.getLayoutForIndex;
                            var0 = var1._previousStickyIndex;
                            var0 = var2.bind(var4)(var0);
                            var1._previousLayout = var0;
                            var2 = var1._previousLayout;
                            var0 = undefined;
                            if (!var2) {
                                _fun45847_ip = 305;
                                continue _fun45847
                            }
                        case 294:
                            var2 = var1._previousLayout;
                            var0 = var2.height;
                        case 305:
                            var1._previousHeight = var0;
                        case 311:
                            var0 = var1._nextStickyIndex;
                            if (!(var3 !== var0)) {
                                _fun45847_ip = 460;
                                continue _fun45847
                            }
                        case 324:
                            var4 = var1.props;
                            var2 = var4.getLayoutForIndex;
                            var0 = var1._nextStickyIndex;
                            var0 = var2.bind(var4)(var0);
                            var1._nextLayout = var0;
                            var2 = var1._nextLayout;
                            var0 = undefined;
                            if (!var2) {
                                _fun45847_ip = 374;
                                continue _fun45847
                            }
                        case 363:
                            var2 = var1._nextLayout;
                            var0 = var2.y;
                        case 374:
                            var1._nextY = var0;
                            var2 = var1._nextLayout;
                            var0 = undefined;
                            if (!var2) {
                                _fun45847_ip = 402;
                                continue _fun45847
                            }
                        case 391:
                            var2 = var1._nextLayout;
                            var0 = var2.height;
                        case 402:
                            var1._nextHeight = var0;
                            var2 = var1._nextY;
                            var0 = undefined;
                            if (!var2) {
                                _fun45847_ip = 454;
                                continue _fun45847
                            }
                        case 419:
                            var2 = var1._nextHeight;
                            var0 = undefined;
                            if (!var2) {
                                _fun45847_ip = 454;
                                continue _fun45847
                            }
                        case 430:
                            var4 = var1.getNextYd;
                            var3 = var1._nextY;
                            var2 = var1._nextHeight;
                            var0 = var4.bind(var1)(var3, var2);
                        case 454:
                            var1._nextYd = var0;
                        case 460:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3._computeLayouts = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = this;
                    var1.visibleIndices = var2;
                    var0 = 0;
                    var0 = var2[var0];
                    var1._smallestVisibleIndex = var0;
                    var3 = var2.length;
                    var0 = 1;
                    var0 = var3 - var0;
                    var0 = var2[var0];
                    var1._largestVisibleIndex = var0;
                    var0 = undefined;
                    return var0;
                };
                var3._setSmallestAndLargestVisibleIndices = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    _fun45849: for (var _fun45849_ip = 0;;) switch (_fun45849_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.currentStickyIndex;
                            var3 = undefined;
                            if (!(var3 === var0)) {
                                _fun45849_ip = 19;
                                continue _fun45849
                            }
                        case 15:
                            var0 = null;
                            return var0;
                        case 19:
                            var4 = var1.props;
                            var2 = var4.getDataForIndex;
                            var0 = var1.currentStickyIndex;
                            var6 = var2.bind(var4)(var0);
                            var4 = var1.props;
                            var2 = var4.getLayoutTypeForIndex;
                            var0 = var1.currentStickyIndex;
                            var5 = var2.bind(var4)(var0);
                            var2 = var1.props;
                            var0 = var2.getExtendedState;
                            var4 = var0.bind(var2)();
                            var2 = var1.props;
                            var0 = var2.getRowRenderer;
                            var2 = var0.bind(var2)();
                            var0 = var1.props;
                            var0 = var0.overrideRowRenderer;
                            if (var0) {
                                _fun45849_ip = 130;
                                continue _fun45849
                            }
                        case 107:
                            var8 = var1.currentStickyIndex;
                            var11 = undefined;
                            var10 = var5;
                            var9 = var6;
                            var7 = var4;
                            var0 = var11[var2](var10, var9, var8, var7, var6);
                            _fun45849_ip = 163;
                            continue _fun45849;
                        case 130:
                            var3 = var1.props;
                            var2 = var3.overrideRowRenderer;
                            var8 = var1.currentStickyIndex;
                            var11 = var3;
                            var10 = var5;
                            var9 = var6;
                            var7 = var4;
                            var0 = var11[var2](var10, var9, var8, var7, var6);
                        case 163:
                            return var0;
                    }
                };
                var3._renderSticky = var2;
                var2 = var0.prototype;
                var1 = function(arg0) { // Environment: var1
                    var2 = this;
                    var1 = var2.getWindowCorrection;
                    var0 = var2.props;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.windowShift;
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
                };
                var2._getAdjustedOffsetY = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5135, 5136, 5139]);