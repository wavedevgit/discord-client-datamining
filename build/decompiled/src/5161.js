// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = function() { // Environment: var0
        var0 = function arg0, arg1, arg2, arg3() {
            var2 = this;
            var _closure3_slot0 = var2;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 0;
            var1 = var4[var3];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var8 = var1.default;
            var7 = var8.cast;
            var1 = null;
            var7 = var7.bind(var8)(var1);
            var2._layoutProvider = var7;
            var4 = var4[var3];
            var4 = var6.bind(var0)(var4);
            var6 = var4.default;
            var4 = var6.cast;
            var4 = var4.bind(var6)(var1);
            var2._recyclePool = var4;
            var2._layoutManager = var1;
            var2._viewabilityTracker = var1;
            var4 = false;
            var2._optimizeForAnimations = var4;
            var6 = function(arg0, arg1, arg2) { // Environment: var5
                _fun46096: for (var _fun46096_ip = 0;;) switch (_fun46096_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.onVisibleItemsChanged;
                        if (!var1) {
                            _fun46096_ip = 42;
                            continue _fun46096
                        }
                    case 16:
                        var4 = _closure3_slot0;
                        var3 = var4.onVisibleItemsChanged;
                        var2 = arg0;
                        var1 = arg1;
                        var0 = arg2;
                        var0 = var3.bind(var4)(var2, var1, var0);
                    case 42:
                        var0 = undefined;
                        return var0;
                }
            };
            var2._onVisibleItemsChanged = var6;
            var5 = function(arg0, arg1, arg2) { // Environment: var5
                _fun46097: for (var _fun46097_ip = 0;;) switch (_fun46097_ip) {
                    case 0:
                        var7 = arg2;
                        var6 = var7.length;
                        var1 = _closure3_slot0;
                        var1 = var1._isRecyclingEnabled;
                        if (!var1) {
                            _fun46097_ip = 221;
                            continue _fun46097
                        }
                    case 27:
                        var5 = 0;
                        var8 = var5 < var6;
                        var4 = undefined;
                        var2 = 1;
                        var1 = undefined;
                        if (!var8) {
                            _fun46097_ip = 221;
                            continue _fun46097
                        }
                    case 49:
                        var13 = var7[var5];
                        var8 = _closure3_slot0;
                        var9 = var8._engagedIndexes;
                        var9 = delete var9[var13];
                        var8 = var8._params;
                        if (!var8) {
                            _fun46097_ip = 96;
                            continue _fun46097
                        }
                    case 76:
                        var9 = _closure3_slot0;
                        var9 = var9._params;
                        var9 = var9.itemCount;
                        var8 = var13 < var9;
                    case 96:
                        if (!var8) {
                            _fun46097_ip = 211;
                            continue _fun46097
                        }
                    case 99:
                        var10 = _closure3_slot0;
                        var9 = var10._stableIdToRenderKeyMap;
                        var8 = var10._fetchStableId;
                        var8 = var8.bind(var10)(var13);
                        var8 = var9[var8];
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var9 = var9[var2];
                        var9 = var10.bind(var4)(var9);
                        var10 = var9.ObjectUtil;
                        var9 = var10.isNullOrUndefined;
                        var9 = var9.bind(var10)(var8);
                        var1 = var8;
                        if (var9) {
                            _fun46097_ip = 211;
                            continue _fun46097
                        }
                    case 164:
                        var9 = _closure3_slot0;
                        var12 = var9._recyclePool;
                        var11 = var12.putRecycledObject;
                        var10 = var9._layoutProvider;
                        var9 = var10.getLayoutTypeForIndex;
                        var10 = var9.bind(var10)(var13);
                        var9 = var8.key;
                        var9 = var11.bind(var12)(var10, var9);
                        var1 = var8;
                    case 211:
                        var5 = var5 + 1;
                        if (var5 < var6) {
                            _fun46097_ip = 49;
                            continue _fun46097
                        }
                    case 221:
                        var3 = _closure3_slot0;
                        var2 = var3._updateRenderStack;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        if (!var1) {
                            _fun46097_ip = 263;
                            continue _fun46097
                        }
                    case 242:
                        var2 = _closure3_slot0;
                        var1 = var2._renderStackChanged;
                        var0 = var2._renderStack;
                        var0 = var1.bind(var2)(var0);
                    case 263:
                        var0 = undefined;
                        return var0;
                }
            };
            var2._onEngagedItemsChanged = var5;
            var5 = {};
            var2._renderStack = var5;
            var5 = arg2;
            var2._fetchStableId = var5;
            var5 = {};
            var2._stableIdToRenderKeyMap = var5;
            var5 = {};
            var2._engagedIndexes = var5;
            var5 = arg0;
            var2._renderStackChanged = var5;
            var5 = arg1;
            var2._scrollOnNextUpdate = var5;
            var2._dimensions = var1;
            var2._params = var1;
            var5 = arg3;
            var2._isRecyclingEnabled = var5;
            var2._isViewTrackerRunning = var4;
            var2._markDirty = var4;
            var2._startKey = var3;
            var2.onVisibleItemsChanged = var1;
            return var0;
        };
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            _fun46098: for (var _fun46098_ip = 0;;) switch (_fun46098_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._layoutManager;
                    if (var0) {
                        _fun46098_ip = 24;
                        continue _fun46098
                    }
                case 12:
                    var0 = {
                        'height': 0,
                        'width': 0
                    };
                    _fun46098_ip = 40;
                    continue _fun46098;
                case 24:
                    var2 = var1._layoutManager;
                    var1 = var2.getContentDimension;
                    var0 = var1.bind(var2)();
                case 40:
                    return var0;
            }
        };
        var3.getLayoutDimension = var2;
        var3 = var0.prototype;
        var2 = function(arg0) { // Environment: var1
            var1 = arg0;
            var0 = this;
            var0._optimizeForAnimations = var1;
            var0 = undefined;
            return var0;
        };
        var3.setOptimizeForAnimations = var2;
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            var0 = this;
            var0 = var0._optimizeForAnimations;
            return var0;
        };
        var3.hasPendingAnimationOptimization = var2;
        var3 = var0.prototype;
        var2 = function(arg0, arg1, arg2, arg3) { // Environment: var1
            _fun46101: for (var _fun46101_ip = 0;;) switch (_fun46101_ip) {
                case 0:
                    var1 = arg0;
                    var6 = arg1;
                    var4 = arg2;
                    var3 = arg3;
                    var0 = this;
                    var2 = var0._viewabilityTracker;
                    if (!var2) {
                        _fun46101_ip = 116;
                        continue _fun46101
                    }
                case 24:
                    var5 = var0._params;
                    var2 = var6;
                    if (!var5) {
                        _fun46101_ip = 57;
                        continue _fun46101
                    }
                case 36:
                    var5 = var0._params;
                    var5 = var5.isHorizontal;
                    var2 = var6;
                    if (!var5) {
                        _fun46101_ip = 57;
                        continue _fun46101
                    }
                case 54:
                    var2 = var1;
                case 57:
                    var1 = var0._isViewTrackerRunning;
                    if (var1) {
                        _fun46101_ip = 97;
                        continue _fun46101
                    }
                case 66:
                    if (!var4) {
                        _fun46101_ip = 86;
                        continue _fun46101
                    }
                case 69:
                    var5 = var0._viewabilityTracker;
                    var1 = var5.setActualOffset;
                    var1 = var1.bind(var5)(var2);
                case 86:
                    var1 = var0.startViewabilityTracker;
                    var1 = var1.bind(var0)(var3);
                case 97:
                    var1 = var0._viewabilityTracker;
                    var0 = var1.updateOffset;
                    var0 = var0.bind(var1)(var2, var4, var3);
                case 116:
                    var0 = undefined;
                    return var0;
            }
        };
        var3.updateOffset = var2;
        var3 = var0.prototype;
        var2 = function(arg0) { // Environment: var1
            var1 = arg0;
            var0 = this;
            var0.onVisibleItemsChanged = var1;
            var0 = undefined;
            return var0;
        };
        var3.attachVisibleItemsListener = var2;
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            _fun46103: for (var _fun46103_ip = 0;;) switch (_fun46103_ip) {
                case 0:
                    var0 = this;
                    var1 = null;
                    var0.onVisibleItemsChanged = var1;
                    var2 = var0._viewabilityTracker;
                    if (!var2) {
                        _fun46103_ip = 32;
                        continue _fun46103
                    }
                case 20:
                    var0 = var0._viewabilityTracker;
                    var0.onVisibleRowsChanged = var1;
                case 32:
                    var0 = undefined;
                    return var0;
            }
        };
        var3.removeVisibleItemsListener = var2;
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            var0 = this;
            var0 = var0._layoutManager;
            return var0;
        };
        var3.getLayoutManager = var2;
        var3 = var0.prototype;
        var2 = function(arg0, arg1) { // Environment: var1
            var1 = this;
            var0 = arg0;
            var1._params = var0;
            var0 = arg1;
            var1._dimensions = var0;
            var0 = undefined;
            return var0;
        };
        var3.setParamsAndDimensions = var2;
        var3 = var0.prototype;
        var2 = function(arg0) { // Environment: var1
            _fun46106: for (var _fun46106_ip = 0;;) switch (_fun46106_ip) {
                case 0:
                    var0 = this;
                    var1 = arg0;
                    var0._layoutManager = var1;
                    var1 = var0._params;
                    if (!var1) {
                        _fun46106_ip = 53;
                        continue _fun46106
                    }
                case 21:
                    var3 = var0._layoutManager;
                    var2 = var3.relayoutFromIndex;
                    var0 = var0._params;
                    var1 = var0.itemCount;
                    var0 = 0;
                    var0 = var2.bind(var3)(var0, var1);
                case 53:
                    var0 = undefined;
                    return var0;
            }
        };
        var3.setLayoutManager = var2;
        var3 = var0.prototype;
        var2 = function(arg0) { // Environment: var1
            var1 = arg0;
            var0 = this;
            var0._layoutProvider = var1;
            var0 = undefined;
            return var0;
        };
        var3.setLayoutProvider = var2;
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            var0 = this;
            var0 = var0._viewabilityTracker;
            return var0;
        };
        var3.getViewabilityTracker = var2;
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            _fun46109: for (var _fun46109_ip = 0;;) switch (_fun46109_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._viewabilityTracker;
                    if (!var1) {
                        _fun46109_ip = 176;
                        continue _fun46109
                    }
                case 15:
                    var2 = var0._viewabilityTracker;
                    var1 = var2.findFirstLogicallyVisibleIndex;
                    var5 = var1.bind(var2)();
                    var1 = var0._prepareViewabilityTracker;
                    var1 = var1.bind(var0)();
                    var1 = var0._layoutManager;
                    var2 = 0;
                    if (!var1) {
                        _fun46109_ip = 159;
                        continue _fun46109
                    }
                case 52:
                    var1 = var0._params;
                    var2 = 0;
                    if (!var1) {
                        _fun46109_ip = 159;
                        continue _fun46109
                    }
                case 63:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.min;
                    var1 = var0._params;
                    var6 = var1.itemCount;
                    var1 = 1;
                    var1 = var6 - var1;
                    var4 = var3.bind(var4)(var1, var5);
                    var3 = var0._layoutManager;
                    var1 = var3.getOffsetForIndex;
                    var3 = var1.bind(var3)(var4);
                    var1 = var0._scrollOnNextUpdate;
                    var1 = var1.bind(var0)(var3);
                    var1 = var0._params;
                    var1 = var1.isHorizontal;
                    if (var1) {
                        _fun46109_ip = 151;
                        continue _fun46109
                    }
                case 144:
                    var1 = var3.y;
                    _fun46109_ip = 156;
                    continue _fun46109;
                case 151:
                    var1 = var3.x;
                case 156:
                    var2 = var1;
                case 159:
                    var1 = var0._viewabilityTracker;
                    var0 = var1.forceRefreshWithOffset;
                    var0 = var0.bind(var1)(var2);
                case 176:
                    var0 = undefined;
                    return var0;
            }
        };
        var3.refreshWithAnchor = var2;
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            _fun46110: for (var _fun46110_ip = 0;;) switch (_fun46110_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._viewabilityTracker;
                    if (!var1) {
                        _fun46110_ip = 38;
                        continue _fun46110
                    }
                case 12:
                    var1 = var0._prepareViewabilityTracker;
                    var1 = var1.bind(var0)();
                    var1 = var0._viewabilityTracker;
                    var0 = var1.forceRefresh;
                    var0 = var0.bind(var1)();
                case 38:
                    var0 = undefined;
                    return var0;
            }
        };
        var3.refresh = var2;
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            _fun46111: for (var _fun46111_ip = 0;;) switch (_fun46111_ip) {
                case 0:
                    var2 = this;
                    var1 = {
                        'x': 0,
                        'y': 0
                    };
                    var3 = 0;
                    var4 = var2._params;
                    var0 = var1;
                    if (!var4) {
                        _fun46111_ip = 251;
                        continue _fun46111
                    }
                case 30:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var9 = 1;
                    var4 = var4[var9];
                    var8 = undefined;
                    var4 = var6.bind(var8)(var4);
                    var7 = var4.Default;
                    var6 = var7.value;
                    var4 = var2._params;
                    var4 = var4.initialRenderIndex;
                    var4 = var6.bind(var7)(var4, var3);
                    if (!(var4 > var3)) {
                        _fun46111_ip = 97;
                        continue _fun46111
                    }
                case 88:
                    var6 = var2._layoutManager;
                    if (var6) {
                        _fun46111_ip = 192;
                        continue _fun46111
                    }
                case 97:
                    var6 = var2._params;
                    var6 = var6.isHorizontal;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var5 = var7.bind(var8)(var5);
                    var8 = var5.Default;
                    var7 = var8.value;
                    var5 = var2._params;
                    var5 = var5.initialOffset;
                    var5 = var7.bind(var8)(var5, var3);
                    if (var6) {
                        _fun46111_ip = 175;
                        continue _fun46111
                    }
                case 158:
                    var1.y = var5;
                    var1.x = var3;
                    var0 = var1;
                    _fun46111_ip = 251;
                    continue _fun46111;
                case 175:
                    var1.x = var5;
                    var1.y = var3;
                    var0 = var1;
                    _fun46111_ip = 251;
                    continue _fun46111;
                case 192:
                    var3 = var2._layoutManager;
                    var1 = var3.getOffsetForIndex;
                    var1 = var1.bind(var3)(var4);
                    var3 = var2._params;
                    var2 = var2._params;
                    var2 = var2.isHorizontal;
                    if (var2) {
                        _fun46111_ip = 237;
                        continue _fun46111
                    }
                case 230:
                    var2 = var1.y;
                    _fun46111_ip = 242;
                    continue _fun46111;
                case 237:
                    var2 = var1.x;
                case 242:
                    var3.initialOffset = var2;
                    var0 = var1;
                case 251:
                    return var0;
            }
        };
        var3.getInitialOffset = var2;
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            _fun46112: for (var _fun46112_ip = 0;;) switch (_fun46112_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.getInitialOffset;
                    var0 = var0.bind(var2)();
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.default;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var12 = var3;
                    var1 = new var12[var1](var11);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2._recyclePool = var1;
                    var1 = var2._params;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 3;
                    var4 = var6[var4];
                    var4 = var3.bind(var0)(var4);
                    var5 = var4.default;
                    if (var1) {
                        _fun46112_ip = 135;
                        continue _fun46112
                    }
                case 103:
                    var1 = var5.prototype;
                    var4 = Object.create(var1, {
                        constructor: {
                            value: var5
                        }
                    });
                    var12 = var4;
                    var11 = 0;
                    var10 = 0;
                    var1 = new var12[var5](var11, var10, var9);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var2._viewabilityTracker = var1;
                    _fun46112_ip = 245;
                    continue _fun46112;
                case 135:
                    var1 = 1;
                    var4 = var6[var1];
                    var4 = var3.bind(var0)(var4);
                    var9 = var4.Default;
                    var8 = var9.value;
                    var4 = var2._params;
                    var4 = var4.renderAheadOffset;
                    var7 = 0;
                    var4 = var8.bind(var9)(var4, var7);
                    var1 = var6[var1];
                    var1 = var3.bind(var0)(var1);
                    var6 = var1.Default;
                    var3 = var6.value;
                    var1 = var2._params;
                    var1 = var1.initialOffset;
                    var10 = var3.bind(var6)(var1, var7);
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var12 = var3;
                    var11 = var4;
                    var1 = new var12[var5](var11, var10, var9);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2._viewabilityTracker = var1;
                case 245:
                    var1 = var2._prepareViewabilityTracker;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var3.init = var2;
        var3 = var0.prototype;
        var2 = function(arg0) { // Environment: var1
            _fun46113: for (var _fun46113_ip = 0;;) switch (_fun46113_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._viewabilityTracker;
                    if (!var1) {
                        _fun46113_ip = 40;
                        continue _fun46113
                    }
                case 12:
                    var1 = true;
                    var0._isViewTrackerRunning = var1;
                    var2 = var0._viewabilityTracker;
                    var1 = var2.init;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var3.startViewabilityTracker = var2;
        var3 = var0.prototype;
        var2 = function(arg0, arg1, arg2, arg3) { // Environment: var1
            _fun46114: for (var _fun46114_ip = 0;;) switch (_fun46114_ip) {
                case 0:
                    var4 = arg0;
                    var8 = arg1;
                    var1 = arg2;
                    var10 = arg3;
                    var2 = this;
                    if (var8) {
                        _fun46114_ip = 24;
                        continue _fun46114
                    }
                case 18:
                    var8 = var2._fetchStableId;
                case 24:
                    if (var1) {
                        _fun46114_ip = 33;
                        continue _fun46114
                    }
                case 27:
                    var1 = var2._renderStack;
                case 33:
                    var3 = var2._stableIdToRenderKeyMap;
                    var6 = undefined;
                    var0 = var8.bind(var6)(var4);
                    var3 = var3[var0];
                    var0 = undefined;
                    if (!var3) {
                        _fun46114_ip = 60;
                        continue _fun46114
                    }
                case 55:
                    var0 = var3.key;
                case 60:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var7 = 1;
                    var5 = var5[var7];
                    var5 = var9.bind(var6)(var5);
                    var9 = var5.ObjectUtil;
                    var5 = var9.isNullOrUndefined;
                    var5 = var5.bind(var9)(var0);
                    if (!var5) {
                        _fun46114_ip = 387;
                        continue _fun46114
                    }
                case 106:
                    var9 = var2._layoutProvider;
                    var5 = var9.getLayoutTypeForIndex;
                    var11 = var5.bind(var9)(var4);
                    var9 = var2._recyclePool;
                    var5 = var9.getRecycledObject;
                    var9 = var5.bind(var9)(var11);
                    var12 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var7];
                    var5 = var12.bind(var6)(var5);
                    var12 = var5.ObjectUtil;
                    var5 = var12.isNullOrUndefined;
                    var5 = var5.bind(var12)(var9);
                    if (var5) {
                        _fun46114_ip = 315;
                        continue _fun46114
                    }
                case 180:
                    var12 = var1[var9];
                    if (var12) {
                        _fun46114_ip = 236;
                        continue _fun46114
                    }
                case 187:
                    var5 = {};
                    var5.dataIndex = var4;
                    var1[var9] = var5;
                    var13 = var10;
                    if (!var13) {
                        _fun46114_ip = 208;
                        continue _fun46114
                    }
                case 204:
                    var13 = var10[var9];
                case 208:
                    var5 = var9;
                    if (!var13) {
                        _fun46114_ip = 351;
                        continue _fun46114
                    }
                case 217:
                    var13 = var2._stableIdToRenderKeyMap;
                    var10 = var10[var9];
                    var10 = delete var13[var10];
                    var5 = var9;
                    _fun46114_ip = 351;
                    continue _fun46114;
                case 236:
                    var10 = var12.dataIndex;
                    var12.dataIndex = var4;
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var12 = var12[var7];
                    var12 = var13.bind(var6)(var12);
                    var13 = var12.ObjectUtil;
                    var12 = var13.isNullOrUndefined;
                    var12 = var12.bind(var13)(var10);
                    if (var12) {
                        _fun46114_ip = 289;
                        continue _fun46114
                    }
                case 285:
                    var12 = var10 === var4;
                case 289:
                    var5 = var9;
                    if (var12) {
                        _fun46114_ip = 351;
                        continue _fun46114
                    }
                case 295:
                    var12 = var2._stableIdToRenderKeyMap;
                    var10 = var8.bind(var6)(var10);
                    var10 = delete var12[var10];
                    var5 = var9;
                    _fun46114_ip = 351;
                    continue _fun46114;
                case 315:
                    var9 = var8.bind(var6)(var4);
                    var10 = var1[var9];
                    if (!var10) {
                        _fun46114_ip = 337;
                        continue _fun46114
                    }
                case 327:
                    var10 = var2._getCollisionAvoidingKey;
                    var9 = var10.bind(var2)();
                case 337:
                    var10 = {};
                    var10.dataIndex = var4;
                    var1[var9] = var10;
                    var5 = var9;
                case 351:
                    var9 = true;
                    var2._markDirty = var9;
                    var10 = var2._stableIdToRenderKeyMap;
                    var9 = var8.bind(var6)(var4);
                    var8 = {};
                    var8.key = var5;
                    var8.type = var11;
                    var10[var9] = var8;
                    var0 = var5;
                case 387:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var6 = var3.ObjectUtil;
                    var5 = var6.isNullOrUndefined;
                    var3 = var2._engagedIndexes;
                    var3 = var3[var4];
                    var3 = var5.bind(var6)(var3);
                    if (var3) {
                        _fun46114_ip = 451;
                        continue _fun46114
                    }
                case 434:
                    var3 = var2._recyclePool;
                    var2 = var3.removeFromPool;
                    var2 = var2.bind(var3)(var0);
                case 451:
                    var2 = var1[var0];
                    var1 = var2;
                    if (!var1) {
                        _fun46114_ip = 471;
                        continue _fun46114
                    }
                case 461:
                    var2 = var2.dataIndex;
                    var1 = var2 !== var4;
                case 471:
                    if (!var1) {
                        _fun46114_ip = 499;
                        continue _fun46114
                    }
                case 474:
                    var1 = global;
                    var3 = var1.console;
                    var2 = var3.warn;
                    var1 = 'Possible stableId collision @';
                    var1 = var2.bind(var3)(var1, var4);
                case 499:
                    return var0;
            }
        };
        var3.syncAndGetKey = var2;
        var3 = var0.prototype;
        var2 = function(arg0) { // Environment: var1
            _fun46115: for (var _fun46115_ip = 0;;) switch (_fun46115_ip) {
                case 0:
                    var1 = arg0;
                    var9 = this;
                    var _closure3_slot0 = var9;
                    var14 = var1.getStableId;
                    var0 = var1.getSize;
                    var0 = var0.bind(var1)();
                    var8 = 1;
                    var13 = var0 - var8;
                    var17 = {};
                    var12 = {};
                    var11 = {};
                    var0 = var9._optimizeForAnimations;
                    if (!var0) {
                        _fun46115_ip = 56;
                        continue _fun46115
                    }
                case 50:
                    var0 = var9._recyclePool;
                case 56:
                    if (!var0) {
                        _fun46115_ip = 75;
                        continue _fun46115
                    }
                case 59:
                    var1 = var9._recyclePool;
                    var0 = var1.clearAll;
                    var0 = var0.bind(var1)();
                case 75:
                    var10 = var9._renderStack;
                    var0 = undefined;
                    var1 = undefined;
                    var6 = undefined;
                    for (var3 in var10)
                        case 98: {
                            var6 = var1;
                            case 110: var18 = var3;
                            var19 = var9._renderStack;
                            var16 = var19.hasOwnProperty;
                            var16 = var16.bind(var19)(var18);
                            if (!var16) {
                                _fun46115_ip = 98;
                                continue _fun46115
                            }
                            case 133: var16 = var9._renderStack;
                            var16 = var16[var18];
                            var16 = var16.dataIndex;
                            var19 = _closure1_slot0;
                            var18 = _closure1_slot1;
                            var18 = var18[var8];
                            var18 = var19.bind(var0)(var18);
                            var19 = var18.ObjectUtil;
                            var18 = var19.isNullOrUndefined;
                            var18 = var18.bind(var19)(var16);
                            var1 = var16;
                            if (var18) {
                                _fun46115_ip = 98;
                                continue _fun46115
                            }
                            case 189: var1 = var16;
                            if (!(var16 <= var13)) {
                                _fun46115_ip = 98;
                                continue _fun46115
                            }
                            case 196: var18 = var14.bind(var0)(var16);
                            var17[var18] = var8;
                            var1 = var16;
                            _fun46115_ip = 98;
                            continue _fun46115;
                        }
                case 210:
                    var1 = global;
                    var5 = var1.Object;
                    var4 = var5.keys;
                    var3 = var9._stableIdToRenderKeyMap;
                    var16 = var4.bind(var5)(var3);
                    var15 = var16.length;
                    var10 = 0;
                    var18 = var10 < var15;
                    var5 = 0;
                    var4 = undefined;
                    var3 = undefined;
                    if (!var18) {
                        _fun46115_ip = 496;
                        continue _fun46115
                    }
                case 257:
                    var21 = var16[var5];
                    var18 = var9._stableIdToRenderKeyMap;
                    var20 = var18[var21];
                    var19 = var4;
                    var18 = var3;
                    if (!var20) {
                        _fun46115_ip = 480;
                        continue _fun46115
                    }
                case 283:
                    var22 = var17[var21];
                    if (var22) {
                        _fun46115_ip = 465;
                        continue _fun46115
                    }
                case 293:
                    var22 = var9._optimizeForAnimations;
                    var22 = !var22;
                    if (!var22) {
                        _fun46115_ip = 311;
                        continue _fun46115
                    }
                case 305:
                    var22 = var9._isRecyclingEnabled;
                case 311:
                    if (!var22) {
                        _fun46115_ip = 342;
                        continue _fun46115
                    }
                case 314:
                    var25 = var9._recyclePool;
                    var24 = var25.putRecycledObject;
                    var23 = var20.type;
                    var22 = var20.key;
                    var22 = var24.bind(var25)(var23, var22);
                case 342:
                    var22 = var9._stableIdToRenderKeyMap;
                    var22 = delete var22[var21];
                    var23 = var9._renderStack;
                    var22 = var20.key;
                    var23 = var23[var22];
                    var22 = undefined;
                    if (!var23) {
                        _fun46115_ip = 378;
                        continue _fun46115
                    }
                case 372:
                    var22 = var23.dataIndex;
                case 378:
                    var25 = _closure1_slot0;
                    var24 = _closure1_slot1;
                    var24 = var24[var8];
                    var24 = var25.bind(var0)(var24);
                    var25 = var24.ObjectUtil;
                    var24 = var25.isNullOrUndefined;
                    var24 = var24.bind(var25)(var22);
                    var24 = !var24;
                    if (!var24) {
                        _fun46115_ip = 422;
                        continue _fun46115
                    }
                case 418:
                    var24 = var22 <= var13;
                case 422:
                    if (!var24) {
                        _fun46115_ip = 431;
                        continue _fun46115
                    }
                case 425:
                    var24 = var9._layoutManager;
                case 431:
                    var19 = var23;
                    var18 = var22;
                    if (!var24) {
                        _fun46115_ip = 480;
                        continue _fun46115
                    }
                case 440:
                    var25 = var9._layoutManager;
                    var24 = var25.removeLayout;
                    var24 = var24.bind(var25)(var22);
                    var19 = var23;
                    var18 = var22;
                    _fun46115_ip = 480;
                    continue _fun46115;
                case 465:
                    var20 = var20.key;
                    var11[var20] = var21;
                    var19 = var4;
                    var18 = var3;
                case 480:
                    var5 = var5 + 1;
                    var4 = var19;
                    var3 = var18;
                    if (var5 < var15) {
                        _fun46115_ip = 257;
                        continue _fun46115
                    }
                case 496:
                    var5 = var1.Object;
                    var4 = var5.keys;
                    var3 = var9._renderStack;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.sort;
                    var2 = function(arg0, arg1) { // Environment: var2
                        _fun46116: for (var _fun46116_ip = 0;;) switch (_fun46116_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0._renderStack;
                                var1 = arg0;
                                var2 = var2[var1];
                                var1 = var0._renderStack;
                                var0 = arg1;
                                var1 = var1[var0];
                                var4 = 1;
                                var0 = var4;
                                if (!var2) {
                                    _fun46116_ip = 88;
                                    continue _fun46116
                                }
                            case 42:
                                var3 = var2.dataIndex;
                                var0 = var4;
                                if (!var3) {
                                    _fun46116_ip = 88;
                                    continue _fun46116
                                }
                            case 54:
                                var0 = var4;
                                if (!var1) {
                                    _fun46116_ip = 88;
                                    continue _fun46116
                                }
                            case 60:
                                var3 = var1.dataIndex;
                                var0 = var4;
                                if (!var3) {
                                    _fun46116_ip = 88;
                                    continue _fun46116
                                }
                            case 72:
                                var2 = var2.dataIndex;
                                var1 = var1.dataIndex;
                                var0 = var2 - var1;
                            case 88:
                                return var0;
                        }
                    };
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.length;
                    var15 = var10 < var4;
                    var10 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var15) {
                        _fun46115_ip = 799;
                        continue _fun46115
                    }
                case 555:
                    var19 = var5[var10];
                    var15 = var9._renderStack;
                    var15 = var15[var19];
                    var15 = var15.dataIndex;
                    var17 = _closure1_slot0;
                    var16 = _closure1_slot1;
                    var16 = var16[var8];
                    var16 = var17.bind(var0)(var16);
                    var17 = var16.ObjectUtil;
                    var16 = var17.isNullOrUndefined;
                    var18 = var16.bind(var17)(var15);
                    var17 = var3;
                    var16 = var2;
                    if (var18) {
                        _fun46115_ip = 770;
                        continue _fun46115
                    }
                case 621:
                    var17 = var3;
                    var16 = var2;
                    if (!(var15 <= var13)) {
                        _fun46115_ip = 770;
                        continue _fun46115
                    }
                case 634:
                    var18 = var9.syncAndGetKey;
                    var30 = var9;
                    var29 = var15;
                    var28 = var14;
                    var27 = var12;
                    var26 = var11;
                    var20 = var30[var18](var29, var28, var27, var26, var25);
                    var18 = var12[var20];
                    if (var18) {
                        _fun46115_ip = 685;
                        continue _fun46115
                    }
                case 666:
                    var21 = {};
                    var21.dataIndex = var15;
                    var12[var20] = var21;
                    var17 = var20;
                    var16 = var18;
                    _fun46115_ip = 770;
                    continue _fun46115;
                case 685:
                    var21 = var18.dataIndex;
                    var17 = var20;
                    var16 = var18;
                    if (!(var21 !== var15)) {
                        _fun46115_ip = 770;
                        continue _fun46115
                    }
                case 701:
                    var21 = var9._getCollisionAvoidingKey;
                    var24 = var21.bind(var9)();
                    var21 = {};
                    var21.dataIndex = var15;
                    var12[var24] = var21;
                    var23 = var9._stableIdToRenderKeyMap;
                    var22 = var14.bind(var0)(var15);
                    var21 = {};
                    var21.key = var24;
                    var25 = var9._layoutProvider;
                    var24 = var25.getLayoutTypeForIndex;
                    var24 = var24.bind(var25)(var15);
                    var21.type = var24;
                    var23[var22] = var21;
                    var17 = var20;
                    var16 = var18;
                case 770:
                    var18 = var9._renderStack;
                    var18 = delete var18[var19];
                    var10 = var10 + 1;
                    var3 = var17;
                    var2 = var16;
                    var6 = var15;
                    if (var10 < var4) {
                        _fun46115_ip = 555;
                        continue _fun46115
                    }
                case 799:
                    var11 = var1.Object;
                    var10 = var11.assign;
                    var1 = var9._renderStack;
                    var1 = var10.bind(var11)(var1, var12);
                    var4 = var9._renderStack;
                    for (var1 in var4)
                        case 839: {
                            case 851: var14 = var1;
                            var11 = var9._renderStack;
                            var10 = var11.hasOwnProperty;
                            var10 = var10.bind(var11)(var14);
                            if (!var10) {
                                _fun46115_ip = 839;
                                continue _fun46115
                            }
                            case 874: var10 = var9._renderStack;
                            var10 = var10[var14];
                            var10 = var10.dataIndex;
                            var12 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var11 = var11[var8];
                            var11 = var12.bind(var0)(var11);
                            var12 = var11.ObjectUtil;
                            var11 = var12.isNullOrUndefined;
                            var11 = var11.bind(var12)(var10);
                            var6 = var10;
                            if (var11) {
                                _fun46115_ip = 839;
                                continue _fun46115
                            }
                            case 930: var12 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var11 = var11[var8];
                            var11 = var12.bind(var0)(var11);
                            var13 = var11.ObjectUtil;
                            var12 = var13.isNullOrUndefined;
                            var11 = var9._engagedIndexes;
                            var11 = var11[var10];
                            var11 = var12.bind(var13)(var11);
                            var6 = var10;
                            if (!var11) {
                                _fun46115_ip = 839;
                                continue _fun46115
                            }
                            case 983: var12 = var9._layoutProvider;
                            var11 = var12.getLayoutTypeForIndex;
                            var13 = var11.bind(var12)(var10);
                            var12 = var9._recyclePool;
                            var11 = var12.putRecycledObject;
                            var11 = var11.bind(var12)(var13, var14);
                            var6 = var10;
                            _fun46115_ip = 839;
                            continue _fun46115;
                        }
                case 1026:
                    return var0;
            }
        };
        var3.handleDataSetChange = var2;
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            var2 = this;
            var0 = var2._startKey;
            var1 = parseFloat(var0);
            var0 = var1 + 1;
            var2._startKey = var0;
            var0 = '#';
            var1 = var0 + var1;
            var0 = '_rlv_c';
            var0 = var1 + var0;
            return var0;
        };
        var3._getCollisionAvoidingKey = var2;
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            _fun46118: for (var _fun46118_ip = 0;;) switch (_fun46118_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._viewabilityTracker;
                    if (!var0) {
                        _fun46118_ip = 39;
                        continue _fun46118
                    }
                case 12:
                    var0 = var1._layoutManager;
                    if (!var0) {
                        _fun46118_ip = 39;
                        continue _fun46118
                    }
                case 21:
                    var0 = var1._dimensions;
                    if (!var0) {
                        _fun46118_ip = 39;
                        continue _fun46118
                    }
                case 30:
                    var0 = var1._params;
                    if (var0) {
                        _fun46118_ip = 114;
                        continue _fun46118
                    }
                case 39:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 4;
                    var0 = var5[var0];
                    var2 = undefined;
                    var0 = var4.bind(var2)(var0);
                    var3 = var0.default;
                    var0 = 5;
                    var0 = var5[var0];
                    var0 = var4.bind(var2)(var0);
                    var0 = var0.default;
                    var9 = var0.initializationException;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var10 = var2;
                    var0 = new var10[var3](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var2;
                    throw var0;
                case 114:
                    var2 = var1._viewabilityTracker;
                    var0 = var1._onEngagedItemsChanged;
                    var2.onEngagedRowsChanged = var0;
                    var0 = var1.onVisibleItemsChanged;
                    if (!var0) {
                        _fun46118_ip = 159;
                        continue _fun46118
                    }
                case 141:
                    var2 = var1._viewabilityTracker;
                    var0 = var1._onVisibleItemsChanged;
                    var2.onVisibleRowsChanged = var0;
                case 159:
                    var4 = var1._viewabilityTracker;
                    var3 = var4.setLayouts;
                    var2 = var1._layoutManager;
                    var0 = var2.getLayouts;
                    var2 = var0.bind(var2)();
                    var0 = var1._params;
                    var0 = var0.isHorizontal;
                    var6 = var1._layoutManager;
                    var5 = var6.getContentDimension;
                    var5 = var5.bind(var6)();
                    if (var0) {
                        _fun46118_ip = 225;
                        continue _fun46118
                    }
                case 218:
                    var0 = var5.height;
                    _fun46118_ip = 230;
                    continue _fun46118;
                case 225:
                    var0 = var5.width;
                case 230:
                    var0 = var3.bind(var4)(var2, var0);
                    var4 = var1._viewabilityTracker;
                    var3 = var4.setDimensions;
                    var2 = {};
                    var0 = var1._dimensions;
                    var0 = var0.height;
                    var2.height = var0;
                    var0 = var1._dimensions;
                    var0 = var0.width;
                    var2.width = var0;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 1;
                    var5 = var5[var0];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var7 = var5.Default;
                    var6 = var7.value;
                    var1 = var1._params;
                    var5 = var1.isHorizontal;
                    var1 = false;
                    var1 = var6.bind(var7)(var5, var1);
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var3._prepareViewabilityTracker = var2;
        var2 = var0.prototype;
        var1 = function(arg0) { // Environment: var1
            _fun46119: for (var _fun46119_ip = 0;;) switch (_fun46119_ip) {
                case 0:
                    var6 = arg0;
                    var2 = this;
                    var1 = false;
                    var2._markDirty = var1;
                    var5 = var6.length;
                    var4 = 0;
                    var7 = var4 < var5;
                    var3 = 1;
                    var0 = false;
                    if (!var7) {
                        _fun46119_ip = 71;
                        continue _fun46119
                    }
                case 33:
                    var8 = var6[var4];
                    var7 = var2._engagedIndexes;
                    var7[var8] = var3;
                    var7 = var2.syncAndGetKey;
                    var7 = var7.bind(var2)(var8);
                    var0 = var2._markDirty;
                    var4 = var4 + 1;
                    if (var4 < var5) {
                        _fun46119_ip = 33;
                        continue _fun46119
                    }
                case 71:
                    var2._markDirty = var1;
                    return var0;
            }
        };
        var2._updateRenderStack = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5162, 5150, 5163, 5164, 5137, 5138]);