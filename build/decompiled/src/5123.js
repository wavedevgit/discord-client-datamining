// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var3 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var0 = undefined;
            var5 = var6.bind(var0)(var2, var5);
            var5 = 2;
            var2.initialDrawBatchSize = var5;
            var6 = false;
            var2.isFirstLayoutComplete = var6;
            var2.hasRenderedProgressively = var6;
            var7 = 0;
            var2.progressiveRenderCount = var7;
            var2._isDisposed = var6;
            var2._isLayoutManagerDirty = var6;
            var2._animationOptimizationsEnabled = var6;
            var2.firstItemOffset = var7;
            var2.ignoreScrollEvents = var6;
            var2.isFirstPaintOnUiComplete = var6;
            var4 = function(arg0) { // Environment: var4
                var1 = _closure3_slot0;
                var5 = var1.renderStackManager;
                var4 = var5.sync;
                var9 = var1.getDataKey;
                var8 = var1.getItemType;
                var0 = var1.getDataLength;
                var6 = var0.bind(var1)();
                var7 = arg0;
                var10 = var5;
                var0 = var10[var4](var9, var8, var7, var6, var5);
                var0 = undefined;
                return var0;
            };
            var2.updateRenderStack = var4;
            var6 = var2.getDataKey;
            var4 = var6.bind;
            var4 = var4.bind(var6)(var2);
            var2.getDataKey = var4;
            var6 = var2.getItemType;
            var4 = var6.bind;
            var4 = var4.bind(var6)(var2);
            var2.getItemType = var4;
            var6 = var2.overrideItemLayout;
            var4 = var6.bind;
            var4 = var4.bind(var6)(var2);
            var2.overrideItemLayout = var4;
            var2.propsRef = var3;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = var4[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.RVEngagedIndicesTrackerImpl;
            var7 = var5.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var5
                }
            });
            var11 = var7;
            var5 = new var11[var5](var10);
            var5 = var5 instanceof Object ? var5 : var7;
            var2.engagedIndicesTracker = var5;
            var5 = 3;
            var5 = var4[var5];
            var5 = var6.bind(var0)(var5);
            var6 = var5.RenderStackManager;
            var10 = var3.maxItemsInRecyclePool;
            var5 = var6.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var6
                }
            });
            var11 = var5;
            var3 = new var11[var6](var10, var9);
            var3 = var3 instanceof Object ? var3 : var5;
            var2.renderStackManager = var3;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var11 = var3;
            var10 = var2;
            var1 = new var11[var1](var10, var9);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.itemViewabilityManager = var1;
            var1 = var2.checkPropsAndWarn;
            var1 = var1.bind(var2)();
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'animationOptimizationsEnabled';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._animationOptimizationsEnabled;
            return var0;
        };
        var0.get = var1;
        var1 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0._animationOptimizationsEnabled = var1;
            var0 = var0.renderStackManager;
            var0.disableRecycling = var1;
            var0 = undefined;
            return var0;
        };
        var0.set = var1;
        var1 = new Array(44);
        var1[0] = var0;
        var0 = {};
        var5 = 'isOffsetProjectionEnabled';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.engagedIndicesTracker;
            var0 = var0.enableOffsetProjection;
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isDisposed';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._isDisposed;
            return var0;
        };
        var0.get = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'numColumns';
        var0.key = var5;
        var5 = function() {
            _fun45707: for (var _fun45707_ip = 0;;) switch (_fun45707_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.propsRef;
                    var1 = var0.numColumns;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 1;
                    if (!var2) {
                        _fun45707_ip = 30;
                        continue _fun45707
                    }
                case 27:
                    var0 = var1;
                case 30:
                    return var0;
            }
        };
        var0.get = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'props';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.propsRef;
            return var0;
        };
        var0.get = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'setOffsetProjectionEnabled';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0.engagedIndicesTracker;
            var0 = arg0;
            var1.enableOffsetProjection = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'updateProps';
        var0.key = var5;
        var5 = function arg0() {
            _fun45710: for (var _fun45710_ip = 0;;) switch (_fun45710_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var2.propsRef = var0;
                    var1 = var2.engagedIndicesTracker;
                    var0 = var0.drawDistance;
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun45710_ip = 42;
                        continue _fun45710
                    }
                case 30:
                    var4 = var2.engagedIndicesTracker;
                    var0 = var4.drawDistance;
                case 42:
                    var1.drawDistance = var0;
                    var0 = var2.propsRef;
                    var4 = var0.overrideProps;
                    var5 = var3 == var4;
                    var0 = undefined;
                    var1 = undefined;
                    if (var5) {
                        _fun45710_ip = 77;
                        continue _fun45710
                    }
                case 71:
                    var1 = var4.initialDrawBatchSize;
                case 77:
                    if (!(var3 == var1)) {
                        _fun45710_ip = 87;
                        continue _fun45710
                    }
                case 81:
                    var1 = var2.initialDrawBatchSize;
                case 87:
                    var2.initialDrawBatchSize = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'updateScrollOffset';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun45711: for (var _fun45711_ip = 0;;) switch (_fun45711_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.layoutManager;
                    if (!var0) {
                        _fun45711_ip = 78;
                        continue _fun45711
                    }
                case 12:
                    var0 = var2._isDisposed;
                    if (var0) {
                        _fun45711_ip = 78;
                        continue _fun45711
                    }
                case 21:
                    var5 = var2.engagedIndicesTracker;
                    var4 = var5.updateScrollOffset;
                    var1 = var2.firstItemOffset;
                    var0 = arg0;
                    var3 = var0 - var1;
                    var1 = var2.layoutManager;
                    var0 = arg1;
                    var0 = var4.bind(var5)(var3, var0, var1);
                    if (!var0) {
                        _fun45711_ip = 78;
                        continue _fun45711
                    }
                case 65:
                    var1 = var2.updateRenderStack;
                    var1 = var1.bind(var2)(var0);
                    return var0;
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'updateAverageRenderTime';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0.engagedIndicesTracker;
            var0 = arg0;
            var1.averageRenderTime = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'getIsFirstLayoutComplete';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.isFirstLayoutComplete;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getLayout';
        var0.key = var5;
        var5 = function arg0() {
            _fun45714: for (var _fun45714_ip = 0;;) switch (_fun45714_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.layoutManager;
                    if (var1) {
                        _fun45714_ip = 79;
                        continue _fun45714
                    }
                case 12:
                    var1 = global;
                    var3 = var1.Error;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.ErrorMessages;
                    var5 = var1.layoutManagerNotInitializedLayoutInfo;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 79:
                    var2 = var0.layoutManager;
                    var1 = var2.getLayout;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'tryGetLayout';
        var0.key = var5;
        var5 = function arg0() {
            _fun45715: for (var _fun45715_ip = 0;;) switch (_fun45715_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0.layoutManager;
                    if (!var1) {
                        _fun45715_ip = 43;
                        continue _fun45715
                    }
                case 15:
                    var1 = 0;
                    if (!(var2 >= var1)) {
                        _fun45715_ip = 43;
                        continue _fun45715
                    }
                case 21:
                    var3 = var0.layoutManager;
                    var1 = var3.getLayoutCount;
                    var1 = var1.bind(var3)();
                    if (!(!(var2 < var1))) {
                        _fun45715_ip = 47;
                        continue _fun45715
                    }
                case 43:
                    var1 = undefined;
                    return var1;
                case 47:
                    var1 = var0.layoutManager;
                    var0 = var1.getLayout;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'getChildContainerDimensions';
        var0.key = var5;
        var5 = function() {
            _fun45716: for (var _fun45716_ip = 0;;) switch (_fun45716_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.layoutManager;
                    if (var1) {
                        _fun45716_ip = 79;
                        continue _fun45716
                    }
                case 12:
                    var1 = global;
                    var3 = var1.Error;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.ErrorMessages;
                    var5 = var1.layoutManagerNotInitializedChildContainer;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 79:
                    var1 = var0.layoutManager;
                    var0 = var1.getLayoutSize;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'getRenderStack';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.renderStackManager;
            var0 = var1.getRenderStack;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'getWindowSize';
        var0.key = var5;
        var5 = function() {
            _fun45718: for (var _fun45718_ip = 0;;) switch (_fun45718_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.layoutManager;
                    if (var1) {
                        _fun45718_ip = 79;
                        continue _fun45718
                    }
                case 12:
                    var1 = global;
                    var3 = var1.Error;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.ErrorMessages;
                    var5 = var1.layoutManagerNotInitializedWindowSize;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 79:
                    var1 = var0.layoutManager;
                    var0 = var1.getWindowsSize;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'getLastScrollOffset';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.engagedIndicesTracker;
            var0 = var0.scrollOffset;
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'getMaxScrollOffset';
        var0.key = var5;
        var5 = function() {
            _fun45720: for (var _fun45720_ip = 0;;) switch (_fun45720_ip) {
                case 0:
                    var0 = this;
                    var1 = global;
                    var3 = var1.Math;
                    var2 = var3.max;
                    var1 = var0.propsRef;
                    var4 = var1.horizontal;
                    var1 = var0.getChildContainerDimensions;
                    var1 = var1.bind(var0)();
                    if (var4) {
                        _fun45720_ip = 48;
                        continue _fun45720
                    }
                case 41:
                    var4 = var1.height;
                    _fun45720_ip = 53;
                    continue _fun45720;
                case 48:
                    var4 = var1.width;
                case 53:
                    var1 = var0.propsRef;
                    var1 = var1.horizontal;
                    var5 = var0.getWindowSize;
                    var5 = var5.bind(var0)();
                    if (var1) {
                        _fun45720_ip = 85;
                        continue _fun45720
                    }
                case 78:
                    var1 = var5.height;
                    _fun45720_ip = 90;
                    continue _fun45720;
                case 85:
                    var1 = var5.width;
                case 90:
                    var1 = var4 - var1;
                    var0 = var0.firstItemOffset;
                    var1 = var1 + var0;
                    var0 = 0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'getAbsoluteLastScrollOffset';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.engagedIndicesTracker;
            var1 = var1.scrollOffset;
            var0 = var0.firstItemOffset;
            var0 = var1 + var0;
            return var0;
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'setScrollDirection';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.engagedIndicesTracker;
            var1 = var2.setScrollDirection;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'resetVelocityCompute';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.engagedIndicesTracker;
            var0 = var1.resetVelocityHistory;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'updateLayoutParams';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun45724: for (var _fun45724_ip = 0;;) switch (_fun45724_ip) {
                case 0:
                    var6 = this;
                    var0 = arg1;
                    var6.firstItemOffset = var0;
                    var0 = var6.getLayoutManagerClass;
                    var2 = var0.bind(var6)();
                    var0 = var6.layoutManager;
                    if (!var0) {
                        _fun45724_ip = 105;
                        continue _fun45724
                    }
                case 33:
                    var0 = global;
                    var4 = var0.Boolean;
                    var7 = var6.layoutManager;
                    var1 = null;
                    var5 = var1 == var7;
                    var3 = undefined;
                    var1 = undefined;
                    if (var5) {
                        _fun45724_ip = 70;
                        continue _fun45724
                    }
                case 60:
                    var5 = var7.isHorizontal;
                    var1 = var5.bind(var7)();
                case 70:
                    var4 = var4.bind(var3)(var1);
                    var5 = var0.Boolean;
                    var1 = var6.propsRef;
                    var1 = var1.horizontal;
                    var1 = var5.bind(var3)(var1);
                    if (!(var4 === var1)) {
                        _fun45724_ip = 300;
                        continue _fun45724
                    }
                case 105:
                    var1 = var6._isLayoutManagerDirty;
                    if (!var1) {
                        _fun45724_ip = 130;
                        continue _fun45724
                    }
                case 114:
                    var1 = undefined;
                    var6.layoutManager = var1;
                    var1 = false;
                    var6._isLayoutManagerDirty = var1;
                case 130:
                    var5 = {};
                    var1 = arg0;
                    var5.windowSize = var1;
                    var1 = var6.numColumns;
                    var5.maxColumns = var1;
                    var1 = global;
                    var7 = var1.Boolean;
                    var1 = var6.propsRef;
                    var4 = var1.horizontal;
                    var1 = undefined;
                    var4 = var7.bind(var1)(var4);
                    var5.horizontal = var4;
                    var4 = var6.propsRef;
                    var7 = var4.optimizeItemArrangement;
                    var4 = null;
                    var4 = var4 == var7;
                    if (var4) {
                        _fun45724_ip = 207;
                        continue _fun45724
                    }
                case 204:
                    var4 = var7;
                case 207:
                    var5.optimizeItemArrangement = var4;
                    var4 = var6.overrideItemLayout;
                    var5.overrideItemLayout = var4;
                    var4 = var6.getItemType;
                    var5.getItemType = var4;
                    var4 = var6.layoutManager;
                    var7 = var4 instanceof var2;
                    var4 = var6.layoutManager;
                    if (var7) {
                        _fun45724_ip = 287;
                        continue _fun45724
                    }
                case 253:
                    var7 = var2.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = var7;
                    var10 = var5;
                    var9 = var4;
                    var2 = new var11[var2](var10, var9, var8);
                    var2 = var2 instanceof Object ? var2 : var7;
                    var6.layoutManager = var2;
                    _fun45724_ip = 298;
                    continue _fun45724;
                case 287:
                    var2 = var4.updateLayoutParams;
                    var2 = var2.bind(var4)(var5);
                case 298:
                    return var1;
                case 300:
                    var2 = var0.Error;
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 5;
                    var0 = var4[var0];
                    var0 = var1.bind(var3)(var0);
                    var0 = var0.ErrorMessages;
                    var10 = var0.horizontalPropCannotBeToggled;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = var1;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = 'hasLayout';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.layoutManager;
            var0 = undefined;
            var0 = var0 !== var1;
            return var0;
        };
        var0.value = var5;
        var1[21] = var0;
        var0 = {};
        var5 = 'computeVisibleIndices';
        var0.key = var5;
        var5 = function() {
            _fun45726: for (var _fun45726_ip = 0;;) switch (_fun45726_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.layoutManager;
                    if (var1) {
                        _fun45726_ip = 79;
                        continue _fun45726
                    }
                case 12:
                    var1 = global;
                    var3 = var1.Error;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.ErrorMessages;
                    var5 = var1.layoutManagerNotInitializedVisibleIndices;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 79:
                    var2 = var0.engagedIndicesTracker;
                    var1 = var2.computeVisibleIndices;
                    var0 = var0.layoutManager;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[22] = var0;
        var0 = {};
        var5 = 'getEngagedIndices';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.engagedIndicesTracker;
            var0 = var1.getEngagedIndices;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[23] = var0;
        var0 = {};
        var5 = 'modifyChildrenLayout';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun45728: for (var _fun45728_ip = 0;;) switch (_fun45728_ip) {
                case 0:
                    var1 = arg1;
                    var2 = this;
                    var5 = var2.layoutManager;
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun45728_ip = 35;
                        continue _fun45728
                    }
                case 18:
                    var4 = var5.modifyLayout;
                    var0 = arg0;
                    var0 = var4.bind(var5)(var0, var1);
                case 35:
                    var0 = 0;
                    var0 = var0 !== var1;
                    if (!var0) {
                        _fun45728_ip = 150;
                        continue _fun45728
                    }
                case 44:
                    var1 = var2.layoutManager;
                    if (!(var3 != var1)) {
                        _fun45728_ip = 63;
                        continue _fun45728
                    }
                case 54:
                    var1 = var1.requiresRepaint;
                    if (var1) {
                        _fun45728_ip = 131;
                        continue _fun45728
                    }
                case 63:
                    var1 = var2.hasRenderedProgressively;
                    if (var1) {
                        _fun45728_ip = 95;
                        continue _fun45728
                    }
                case 72:
                    var1 = var2.renderProgressively;
                    var1 = var1.bind(var2)();
                    var1 = var2.hasRenderedProgressively;
                    var1 = !var1;
                    _fun45728_ip = 129;
                    continue _fun45728;
                case 95:
                    var3 = var2.isFirstPaintOnUiComplete;
                    var4 = !var3;
                    var3 = !var4;
                    if (var4) {
                        _fun45728_ip = 126;
                        continue _fun45728
                    }
                case 110:
                    var4 = var2.recomputeEngagedIndices;
                    var5 = var4.bind(var2)();
                    var4 = undefined;
                    var3 = var4 !== var5;
                case 126:
                    var1 = var3;
                case 129:
                    _fun45728_ip = 147;
                    continue _fun45728;
                case 131:
                    var3 = var2.layoutManager;
                    var2 = false;
                    var3.requiresRepaint = var2;
                    var1 = true;
                case 147:
                    var0 = var1;
                case 150:
                    return var0;
            }
        };
        var0.value = var5;
        var1[24] = var0;
        var0 = {};
        var5 = 'computeItemViewability';
        var0.key = var5;
        var5 = function() {
            _fun45729: for (var _fun45729_ip = 0;;) switch (_fun45729_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.itemViewabilityManager;
                    var0 = var0.shouldListenToVisibleIndices;
                    if (!var0) {
                        _fun45729_ip = 98;
                        continue _fun45729
                    }
                case 18:
                    var2 = var3.itemViewabilityManager;
                    var1 = var2.updateViewableItems;
                    var0 = var3.propsRef;
                    var0 = var0.masonry;
                    if (var0) {
                        _fun45729_ip = 67;
                        continue _fun45729
                    }
                case 45:
                    var0 = var3.computeVisibleIndices;
                    var4 = var0.bind(var3)();
                    var0 = var4.toArray;
                    var0 = var0.bind(var4)();
                    _fun45729_ip = 93;
                    continue _fun45729;
                case 67:
                    var4 = var3.engagedIndicesTracker;
                    var3 = var4.getEngagedIndices;
                    var4 = var3.bind(var4)();
                    var3 = var4.toArray;
                    var0 = var3.bind(var4)();
                case 93:
                    var0 = var1.bind(var2)(var0);
                case 98:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[25] = var0;
        var0 = {};
        var5 = 'recordInteraction';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.itemViewabilityManager;
            var0 = var1.recordInteraction;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[26] = var0;
        var0 = {};
        var5 = 'recomputeViewableItems';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.itemViewabilityManager;
            var0 = var1.recomputeViewableItems;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[27] = var0;
        var0 = {};
        var5 = 'processDataUpdate';
        var0.key = var5;
        var5 = function() {
            _fun45732: for (var _fun45732_ip = 0;;) switch (_fun45732_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.hasLayout;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun45732_ip = 123;
                        continue _fun45732
                    }
                case 16:
                    var3 = var2.modifyChildrenLayout;
                    var0 = var2.propsRef;
                    var4 = var0.data;
                    var1 = null;
                    var5 = var1 == var4;
                    var0 = undefined;
                    if (var5) {
                        _fun45732_ip = 49;
                        continue _fun45732
                    }
                case 44:
                    var0 = var4.length;
                case 49:
                    var4 = var1 != var0;
                    var1 = 0;
                    if (!var4) {
                        _fun45732_ip = 61;
                        continue _fun45732
                    }
                case 58:
                    var1 = var0;
                case 61:
                    var0 = new Array(0);
                    var0 = var3.bind(var2)(var0, var1);
                    var0 = var2.hasRenderedProgressively;
                    if (!var0) {
                        _fun45732_ip = 93;
                        continue _fun45732
                    }
                case 80:
                    var1 = var2.recomputeEngagedIndices;
                    var1 = var1.bind(var2)();
                    var0 = !var1;
                case 93:
                    if (!var0) {
                        _fun45732_ip = 123;
                        continue _fun45732
                    }
                case 96:
                    var1 = var2.updateRenderStack;
                    var3 = var2.engagedIndicesTracker;
                    var0 = var3.getEngagedIndices;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                case 123:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[28] = var0;
        var0 = {};
        var5 = 'recomputeEngagedIndices';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var1 = var2.updateScrollOffset;
            var0 = var2.getAbsoluteLastScrollOffset;
            var0 = var0.bind(var2)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[29] = var0;
        var0 = {};
        var5 = 'restoreIfNeeded';
        var0.key = var5;
        var5 = function() {
            _fun45734: for (var _fun45734_ip = 0;;) switch (_fun45734_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._isDisposed;
                    if (!var0) {
                        _fun45734_ip = 20;
                        continue _fun45734
                    }
                case 12:
                    var0 = false;
                    var1._isDisposed = var0;
                case 20:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[30] = var0;
        var0 = {};
        var5 = 'dispose';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = true;
            var0._isDisposed = var1;
            var1 = var0.itemViewabilityManager;
            var0 = var1.dispose;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[31] = var0;
        var0 = {};
        var5 = 'markLayoutManagerDirty';
        var0.key = var5;
        var5 = function() {
            var1 = true;
            var0 = this;
            var0._isLayoutManagerDirty = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[32] = var0;
        var0 = {};
        var5 = 'getInitialScrollIndex';
        var0.key = var5;
        var5 = function() {
            _fun45737: for (var _fun45737_ip = 0;;) switch (_fun45737_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.propsRef;
                    var0 = var0.initialScrollIndex;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun45737_ip = 73;
                        continue _fun45737
                    }
                case 21:
                    var2 = var3.propsRef;
                    var2 = var2.maintainVisibleContentPosition;
                    var5 = var1 != var2;
                    var1 = undefined;
                    if (!var5) {
                        _fun45737_ip = 70;
                        continue _fun45737
                    }
                case 42:
                    var2 = var2.startRenderingFromBottom;
                    var1 = undefined;
                    if (!var2) {
                        _fun45737_ip = 70;
                        continue _fun45737
                    }
                case 53:
                    var2 = var3.getDataLength;
                    var3 = var2.bind(var3)();
                    var2 = 1;
                    var1 = var3 - var2;
                case 70:
                    var0 = var1;
                case 73:
                    return var0;
            }
        };
        var0.value = var5;
        var1[33] = var0;
        var0 = {};
        var5 = 'shouldMaintainVisibleContentPosition';
        var0.key = var5;
        var5 = function() {
            _fun45738: for (var _fun45738_ip = 0;;) switch (_fun45738_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.propsRef;
                    var2 = var0.maintainVisibleContentPosition;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun45738_ip = 29;
                        continue _fun45738
                    }
                case 24:
                    var0 = var2.disabled;
                case 29:
                    if (var0) {
                        _fun45738_ip = 44;
                        continue _fun45738
                    }
                case 32:
                    var1 = var1.propsRef;
                    var0 = var1.horizontal;
                case 44:
                    var0 = !var0;
                    return var0;
            }
        };
        var0.value = var5;
        var1[34] = var0;
        var0 = {};
        var5 = 'getDataLength';
        var0.key = var5;
        var5 = function() {
            _fun45739: for (var _fun45739_ip = 0;;) switch (_fun45739_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.propsRef;
                    var2 = var0.data;
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun45739_ip = 30;
                        continue _fun45739
                    }
                case 25:
                    var1 = var2.length;
                case 30:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun45739_ip = 42;
                        continue _fun45739
                    }
                case 39:
                    var0 = var1;
                case 42:
                    return var0;
            }
        };
        var0.value = var5;
        var1[35] = var0;
        var0 = {};
        var5 = 'hasStableDataKeys';
        var0.key = var5;
        var5 = function() {
            var0 = global;
            var2 = var0.Boolean;
            var0 = this;
            var0 = var0.propsRef;
            var1 = var0.keyExtractor;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.value = var5;
        var1[36] = var0;
        var0 = {};
        var5 = 'getDataKey';
        var0.key = var5;
        var5 = function arg0() {
            _fun45741: for (var _fun45741_ip = 0;;) switch (_fun45741_ip) {
                case 0:
                    var2 = arg0;
                    var3 = this;
                    var6 = var3.propsRef;
                    var5 = var6.keyExtractor;
                    var1 = null;
                    var4 = var1 == var5;
                    var0 = undefined;
                    if (var4) {
                        _fun45741_ip = 56;
                        continue _fun45741
                    }
                case 29:
                    var4 = var5.call;
                    var3 = var3.propsRef;
                    var3 = var3.data;
                    var3 = var3[var2];
                    var0 = var4.bind(var5)(var6, var3, var2);
                case 56:
                    if (!(var1 == var0)) {
                        _fun45741_ip = 69;
                        continue _fun45741
                    }
                case 60:
                    var1 = var2.toString;
                    var0 = var1.bind(var2)();
                case 69:
                    return var0;
            }
        };
        var0.value = var5;
        var1[37] = var0;
        var0 = {};
        var5 = 'getLayoutManagerClass';
        var0.key = var5;
        var5 = function() {
            _fun45742: for (var _fun45742_ip = 0;;) switch (_fun45742_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.propsRef;
                    var1 = var1.masonry;
                    if (!var1) {
                        _fun45742_ip = 36;
                        continue _fun45742
                    }
                case 18:
                    var1 = var0.propsRef;
                    var1 = var1.horizontal;
                    if (var1) {
                        _fun45742_ip = 273;
                        continue _fun45742
                    }
                case 36:
                    var1 = var0.numColumns;
                    var2 = 1;
                    if (!(var1 > var2)) {
                        _fun45742_ip = 67;
                        continue _fun45742
                    }
                case 49:
                    var1 = var0.propsRef;
                    var1 = var1.horizontal;
                    if (var1) {
                        _fun45742_ip = 206;
                        continue _fun45742
                    }
                case 67:
                    var1 = var0.propsRef;
                    var1 = var1.masonry;
                    if (var1) {
                        _fun45742_ip = 173;
                        continue _fun45742
                    }
                case 82:
                    var1 = var0.numColumns;
                    if (!(var1 > var2)) {
                        _fun45742_ip = 140;
                        continue _fun45742
                    }
                case 92:
                    var0 = var0.propsRef;
                    var0 = var0.horizontal;
                    if (var0) {
                        _fun45742_ip = 140;
                        continue _fun45742
                    }
                case 107:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.RVGridLayoutManagerImpl;
                    _fun45742_ip = 171;
                    continue _fun45742;
                case 140:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var0 = var1.RVLinearLayoutManagerImpl;
                case 171:
                    _fun45742_ip = 204;
                    continue _fun45742;
                case 173:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var0 = var1.RVMasonryLayoutManagerImpl;
                case 204:
                    return var0;
                case 206:
                    var0 = global;
                    var2 = var0.Error;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1);
                    var0 = var0.ErrorMessages;
                    var4 = var0.numColumnsAndHorizontalIncompatible;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 273:
                    var0 = global;
                    var2 = var0.Error;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1);
                    var0 = var0.ErrorMessages;
                    var4 = var0.masonryAndHorizontalIncompatible;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var1[38] = var0;
        var0 = {};
        var5 = 'applyInitialScrollAdjustment';
        var0.key = var5;
        var5 = function() {
            _fun45743: for (var _fun45743_ip = 0;;) switch (_fun45743_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.layoutManager;
                    if (!var0) {
                        _fun45743_ip = 214;
                        continue _fun45743
                    }
                case 15:
                    var0 = var2.getDataLength;
                    var0 = var0.bind(var2)();
                    var3 = 0;
                    if (!(var3 !== var0)) {
                        _fun45743_ip = 214;
                        continue _fun45743
                    }
                case 34:
                    var0 = var2.getInitialScrollIndex;
                    var6 = var0.bind(var2)();
                    var8 = var2.layoutManager;
                    var4 = null;
                    var1 = var4 == var8;
                    var0 = undefined;
                    var7 = undefined;
                    if (var1) {
                        _fun45743_ip = 86;
                        continue _fun45743
                    }
                case 63:
                    var5 = var8.getLayout;
                    var9 = var4 != var6;
                    var1 = 0;
                    if (!var9) {
                        _fun45743_ip = 81;
                        continue _fun45743
                    }
                case 78:
                    var1 = var6;
                case 81:
                    var7 = var5.bind(var8)(var1);
                case 86:
                    var1 = var2.propsRef;
                    var1 = var1.horizontal;
                    var8 = var4 == var7;
                    if (var1) {
                        _fun45743_ip = 117;
                        continue _fun45743
                    }
                case 105:
                    var1 = undefined;
                    if (var8) {
                        _fun45743_ip = 115;
                        continue _fun45743
                    }
                case 110:
                    var1 = var7.y;
                case 115:
                    _fun45743_ip = 130;
                    continue _fun45743;
                case 117:
                    var5 = undefined;
                    if (var8) {
                        _fun45743_ip = 127;
                        continue _fun45743
                    }
                case 122:
                    var5 = var7.x;
                case 127:
                    var1 = var5;
                case 130:
                    if (!(var0 === var6)) {
                        _fun45743_ip = 170;
                        continue _fun45743
                    }
                case 134:
                    var5 = var2.engagedIndicesTracker;
                    var0 = var4 != var1;
                    var7 = 0;
                    if (!var0) {
                        _fun45743_ip = 152;
                        continue _fun45743
                    }
                case 149:
                    var7 = var1;
                case 152:
                    var0 = var2.firstItemOffset;
                    var0 = var7 - var0;
                    var5.scrollOffset = var0;
                    _fun45743_ip = 214;
                    continue _fun45743;
                case 170:
                    var5 = var2.layoutManager;
                    var0 = var5.recomputeLayouts;
                    var0 = var0.bind(var5)(var3, var6);
                    var0 = var2.engagedIndicesTracker;
                    if (!(var4 == var1)) {
                        _fun45743_ip = 208;
                        continue _fun45743
                    }
                case 198:
                    var2 = var2.firstItemOffset;
                    var1 = var3 + var2;
                case 208:
                    var0.scrollOffset = var1;
                case 214:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[39] = var0;
        var0 = {};
        var5 = 'renderProgressively';
        var0.key = var5;
        var5 = function() {
            _fun45744: for (var _fun45744_ip = 0;;) switch (_fun45744_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.progressiveRenderCount;
                    var1 = var1 + 1;
                    var2.progressiveRenderCount = var1;
                    var1 = var2.layoutManager;
                    var _closure3_slot0 = var1;
                    if (!var1) {
                        _fun45744_ip = 229;
                        continue _fun45744
                    }
                case 36:
                    var1 = var2.applyInitialScrollAdjustment;
                    var1 = var1.bind(var2)();
                    var1 = var2.computeVisibleIndices;
                    var5 = var1.bind(var2)();
                    var1 = var5.every;
                    var0 = function(arg0) { // Environment: var0
                        _fun45745: for (var _fun45745_ip = 0;;) switch (_fun45745_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure3_slot0;
                                var0 = var2.getLayout;
                                var0 = var0.bind(var2)(var3);
                                var0 = var0.isHeightMeasured;
                                if (!var0) {
                                    _fun45745_ip = 51;
                                    continue _fun45745
                                }
                            case 30:
                                var2 = _closure3_slot0;
                                var1 = var2.getLayout;
                                var1 = var1.bind(var2)(var3);
                                var0 = var1.isWidthMeasured;
                            case 51:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var5)(var0);
                    var2.hasRenderedProgressively = var0;
                    var0 = var2.hasRenderedProgressively;
                    if (!var0) {
                        _fun45744_ip = 97;
                        continue _fun45744
                    }
                case 89:
                    var0 = true;
                    var2.isFirstLayoutComplete = var0;
                case 97:
                    var3 = var2.numColumns;
                    var4 = var2.initialDrawBatchSize;
                    var0 = global;
                    var7 = var0.Math;
                    var6 = var7.ceil;
                    var8 = var2.progressiveRenderCount;
                    var1 = 5;
                    var1 = var8 / var1;
                    var9 = var6.bind(var7)(var1);
                    var10 = var4;
                    var1 = exponentiationOperator(var10, var9);
                    var8 = var3 * var1;
                    var1 = var2.hasRenderedProgressively;
                    var1 = !var1;
                    if (!var1) {
                        _fun45744_ip = 229;
                        continue _fun45744
                    }
                case 164:
                    var1 = var2.updateRenderStack;
                    var4 = var5.slice;
                    var7 = var0.Math;
                    var6 = var7.min;
                    var3 = var5.length;
                    var0 = var2.getRenderStack;
                    var0 = var0.bind(var2)();
                    var0 = var0.size;
                    var0 = var0 + var8;
                    var3 = var6.bind(var7)(var3, var0);
                    var0 = 0;
                    var0 = var4.bind(var5)(var0, var3);
                    var0 = var1.bind(var2)(var0);
                case 229:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[40] = var0;
        var0 = {};
        var5 = 'getItemType';
        var0.key = var5;
        var5 = function arg0() {
            _fun45746: for (var _fun45746_ip = 0;;) switch (_fun45746_ip) {
                case 0:
                    var6 = arg0;
                    var2 = this;
                    var5 = var2.propsRef;
                    var4 = var5.getItemType;
                    var1 = null;
                    var3 = var1 == var4;
                    var0 = undefined;
                    if (var3) {
                        _fun45746_ip = 56;
                        continue _fun45746
                    }
                case 29:
                    var3 = var4.call;
                    var2 = var2.propsRef;
                    var2 = var2.data;
                    var2 = var2[var6];
                    var0 = var3.bind(var4)(var5, var2, var6);
                case 56:
                    var2 = var1 != var0;
                    var1 = 'default';
                    if (!var2) {
                        _fun45746_ip = 70;
                        continue _fun45746
                    }
                case 67:
                    var1 = var0;
                case 70:
                    var0 = var1.toString;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[41] = var0;
        var0 = {};
        var5 = 'overrideItemLayout';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun45747: for (var _fun45747_ip = 0;;) switch (_fun45747_ip) {
                case 0:
                    var6 = arg0;
                    var0 = this;
                    var5 = var0.propsRef;
                    var3 = null;
                    var1 = var3 == var5;
                    if (var1) {
                        _fun45747_ip = 31;
                        continue _fun45747
                    }
                case 21:
                    var2 = var5.overrideItemLayout;
                    var1 = var3 == var2;
                case 31:
                    if (var1) {
                        _fun45747_ip = 86;
                        continue _fun45747
                    }
                case 34:
                    var4 = var5.overrideItemLayout;
                    var1 = var0.propsRef;
                    var1 = var1.data;
                    var10 = var1[var6];
                    var8 = var0.numColumns;
                    var0 = var0.propsRef;
                    var7 = var0.extraData;
                    var11 = arg1;
                    var12 = var5;
                    var9 = var6;
                    var0 = var12[var4](var11, var10, var9, var8, var7, var6);
                case 86:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[42] = var0;
        var0 = {};
        var5 = 'checkPropsAndWarn';
        var0.key = var5;
        var4 = function() {
            _fun45748: for (var _fun45748_ip = 0;;) switch (_fun45748_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.propsRef;
                    var0 = var0.onStartReached;
                    if (!var0) {
                        _fun45748_ip = 33;
                        continue _fun45748
                    }
                case 18:
                    var1 = var1.propsRef;
                    var1 = var1.keyExtractor;
                    var0 = !var1;
                case 33:
                    if (!var0) {
                        _fun45748_ip = 91;
                        continue _fun45748
                    }
                case 36:
                    var0 = global;
                    var2 = var0.console;
                    var1 = var2.warn;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 9;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.WarningMessages;
                    var0 = var0.keyExtractorNotDefinedForMVCP;
                    var0 = var1.bind(var2)(var0);
                case 91:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[43] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.RecyclerViewManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5113, 5114, 5124, 5130, 5131, 5133, 5134, 5144, 5145, 5146]);