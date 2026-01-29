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
        var2 = function() { // Original name: ListMetricsAggregator, environment: var4
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 0;
            var2._averageCellLength = var1;
            var3 = global;
            var3 = var3.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2._cellMetrics = var3;
            var2._highestMeasuredCellIndex = var1;
            var2._measuredCellsLength = var1;
            var2._measuredCellsCount = var1;
            var1 = {
                'horizontal': false,
                'rtl': false
            };
            var2._orientation = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'notifyCellLayout';
        var0.key = var1;
        var1 = function(arg0) { // Original name: notifyCellLayout, environment: var4
            _fun4710: for (var _fun4710_ip = 0;;) switch (_fun4710_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var6 = var0.cellIndex;
                    var7 = var0.cellKey;
                    var1 = var0.orientation;
                    var2 = var0.layout;
                    var0 = var3._invalidateIfOrientationChanged;
                    var0 = var0.bind(var3)(var1);
                    var5 = {};
                    var5.index = var6;
                    var0 = var3._selectLength;
                    var0 = var0.bind(var3)(var2);
                    var5.length = var0;
                    var1 = true;
                    var5.isMounted = var1;
                    var0 = var3.flowRelativeOffset;
                    var0 = var0.bind(var3)(var2);
                    var5.offset = var0;
                    var2 = var3._cellMetrics;
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var7);
                    if (!var0) {
                        _fun4710_ip = 137;
                        continue _fun4710
                    }
                case 104:
                    var4 = var5.offset;
                    var2 = var0.offset;
                    if (!(var4 === var2)) {
                        _fun4710_ip = 137;
                        continue _fun4710
                    }
                case 120:
                    var4 = var5.length;
                    var2 = var0.length;
                    if (!(var4 !== var2)) {
                        _fun4710_ip = 284;
                        continue _fun4710
                    }
                case 137:
                    if (var0) {
                        _fun4710_ip = 182;
                        continue _fun4710
                    }
                case 140:
                    var4 = var3._measuredCellsLength;
                    var2 = var5.length;
                    var2 = var4 + var2;
                    var3._measuredCellsLength = var2;
                    var4 = var3._measuredCellsCount;
                    var2 = 1;
                    var2 = var4 + var2;
                    var3._measuredCellsCount = var2;
                    _fun4710_ip = 212;
                    continue _fun4710;
                case 182:
                    var4 = var5.length;
                    var2 = var0.length;
                    var4 = var4 - var2;
                    var2 = var3._measuredCellsLength;
                    var2 = var2 + var4;
                    var3._measuredCellsLength = var2;
                case 212:
                    var4 = var3._measuredCellsLength;
                    var2 = var3._measuredCellsCount;
                    var2 = var4 / var2;
                    var3._averageCellLength = var2;
                    var4 = var3._cellMetrics;
                    var2 = var4.set;
                    var2 = var2.bind(var4)(var7, var5);
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var2 = var3._highestMeasuredCellIndex;
                    var2 = var4.bind(var5)(var2, var6);
                    var3._highestMeasuredCellIndex = var2;
                    return var1;
                case 284:
                    var0.isMounted = var1;
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(15);
        var1[0] = var0;
        var0 = {};
        var5 = 'notifyCellUnmounted';
        var0.key = var5;
        var5 = function(arg0) { // Original name: notifyCellUnmounted, environment: var4
            _fun4711: for (var _fun4711_ip = 0;;) switch (_fun4711_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._cellMetrics;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    if (!var1) {
                        _fun4711_ip = 33;
                        continue _fun4711
                    }
                case 25:
                    var0 = false;
                    var1.isMounted = var0;
                case 33:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'notifyListContentLayout';
        var0.key = var5;
        var5 = function(arg0) { // Original name: notifyListContentLayout, environment: var4
            var0 = arg0;
            var1 = this;
            var3 = var0.orientation;
            var2 = var0.layout;
            var0 = var1._invalidateIfOrientationChanged;
            var0 = var0.bind(var1)(var3);
            var0 = var1._selectLength;
            var0 = var0.bind(var1)(var2);
            var1._contentLength = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getAverageCellLength';
        var0.key = var5;
        var5 = function() { // Original name: getAverageCellLength, environment: var4
            var0 = this;
            var0 = var0._averageCellLength;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getHighestMeasuredCellIndex';
        var0.key = var5;
        var5 = function() { // Original name: getHighestMeasuredCellIndex, environment: var4
            var0 = this;
            var0 = var0._highestMeasuredCellIndex;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getCellMetricsApprox';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: getCellMetricsApprox, environment: var4
            _fun4715: for (var _fun4715_ip = 0;;) switch (_fun4715_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var4 = this;
                    var0 = var4.getCellMetrics;
                    var0 = var0.bind(var4)(var2, var1);
                    if (!var0) {
                        _fun4715_ip = 36;
                        continue _fun4715
                    }
                case 24:
                    var3 = var0.index;
                    if (!(var3 !== var2)) {
                        _fun4715_ip = 228;
                        continue _fun4715
                    }
                case 36:
                    var3 = var4.getHighestMeasuredCellIndex;
                    var5 = var3.bind(var4)();
                    var6 = var5 < var2;
                    var7 = undefined;
                    var3 = undefined;
                    if (!var6) {
                        _fun4715_ip = 114;
                        continue _fun4715
                    }
                case 57:
                    var6 = var4.getCellMetrics;
                    var6 = var6.bind(var4)(var5, var1);
                    var3 = undefined;
                    if (!var6) {
                        _fun4715_ip = 114;
                        continue _fun4715
                    }
                case 74:
                    var8 = var6.offset;
                    var6 = var6.length;
                    var6 = var8 + var6;
                    var8 = var4._averageCellLength;
                    var9 = var2 - var5;
                    var5 = 1;
                    var5 = var9 - var5;
                    var5 = var8 * var5;
                    var3 = var6 + var5;
                case 114:
                    var5 = null;
                    if (!(var5 == var3)) {
                        _fun4715_ip = 130;
                        continue _fun4715
                    }
                case 120:
                    var5 = var4._averageCellLength;
                    var3 = var5 * var2;
                case 130:
                    var8 = var1.data;
                    var1 = var1.getItemCount;
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 2;
                    var5 = var9[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = 0;
                    var5 = var2 >= var5;
                    if (!var5) {
                        _fun4715_ip = 182;
                        continue _fun4715
                    }
                case 173:
                    var1 = var1.bind(var7)(var8);
                    var5 = var2 < var1;
                case 182:
                    var1 = 'Tried to get frame for out of range index ';
                    var1 = var1 + var2;
                    var1 = var6.bind(var7)(var5, var1);
                    var1 = {};
                    var4 = var4._averageCellLength;
                    var1.length = var4;
                    var1.offset = var3;
                    var1.index = var2;
                    var2 = false;
                    var1.isMounted = var2;
                    return var1;
                case 228:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getCellMetrics';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: getCellMetrics, environment: var4
            _fun4716: for (var _fun4716_ip = 0;;) switch (_fun4716_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var4 = var5.data;
                    var0 = var5.getItem;
                    var7 = var5.getItemCount;
                    var2 = var5.getItemLayout;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 2;
                    var8 = var8[var1];
                    var1 = undefined;
                    var9 = var9.bind(var1)(var8);
                    var8 = 0;
                    var8 = var3 >= var8;
                    if (!var8) {
                        _fun4716_ip = 72;
                        continue _fun4716
                    }
                case 63:
                    var7 = var7.bind(var1)(var4);
                    var8 = var3 < var7;
                case 72:
                    var7 = 'Tried to get metrics for out of range cell index ';
                    var7 = var7 + var3;
                    var7 = var9.bind(var1)(var8, var7);
                    var8 = var5.keyExtractor;
                    var5 = null;
                    if (!(var5 == var8)) {
                        _fun4716_ip = 126;
                        continue _fun4716
                    }
                case 100:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 3;
                    var6 = var9[var6];
                    var6 = var7.bind(var1)(var6);
                    var8 = var6.keyExtractor;
                case 126:
                    var6 = this;
                    var7 = var6._cellMetrics;
                    var6 = var7.get;
                    var0 = var0.bind(var1)(var4, var3);
                    var0 = var8.bind(var1)(var0, var3);
                    var0 = var6.bind(var7)(var0);
                    if (!var0) {
                        _fun4716_ip = 169;
                        continue _fun4716
                    }
                case 160:
                    var6 = var0.index;
                    if (!(var6 !== var3)) {
                        _fun4716_ip = 215;
                        continue _fun4716
                    }
                case 169:
                    if (var2) {
                        _fun4716_ip = 174;
                        continue _fun4716
                    }
                case 172:
                    return var5;
                case 174:
                    var2 = var2.bind(var1)(var4, var3);
                    var1 = {};
                    var1.index = var3;
                    var3 = var2.length;
                    var1.length = var3;
                    var2 = var2.offset;
                    var1.offset = var2;
                    var2 = true;
                    var1.isMounted = var2;
                    return var1;
                case 215:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getCellOffsetApprox';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: getCellOffsetApprox, environment: var4
            _fun4717: for (var _fun4717_ip = 0;;) switch (_fun4717_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var5 = global;
                    var4 = var5.Number;
                    var0 = var4.isInteger;
                    var4 = var0.bind(var4)(var3);
                    var0 = var1.getCellMetricsApprox;
                    if (var4) {
                        _fun4717_ip = 102;
                        continue _fun4717
                    }
                case 37:
                    var6 = var5.Math;
                    var4 = var6.floor;
                    var4 = var4.bind(var6)(var3);
                    var4 = var0.bind(var1)(var4, var2);
                    var6 = var5.Math;
                    var5 = var6.floor;
                    var5 = var5.bind(var6)(var3);
                    var6 = var3 - var5;
                    var5 = var4.offset;
                    var4 = var4.length;
                    var4 = var6 * var4;
                    var4 = var5 + var4;
                    return var4;
                case 102:
                    var0 = var0.bind(var1)(var3, var2);
                    var0 = var0.offset;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getContentLength';
        var0.key = var5;
        var5 = function() { // Original name: getContentLength, environment: var4
            _fun4718: for (var _fun4718_ip = 0;;) switch (_fun4718_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._contentLength;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun4718_ip = 23;
                        continue _fun4718
                    }
                case 20:
                    var0 = var1;
                case 23:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'hasContentLength';
        var0.key = var5;
        var5 = function() { // Original name: hasContentLength, environment: var4
            var0 = this;
            var1 = var0._contentLength;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'flowRelativeOffset';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: flowRelativeOffset, environment: var4
            _fun4720: for (var _fun4720_ip = 0;;) switch (_fun4720_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arg1;
                    var3 = this;
                    var0 = var3._orientation;
                    var2 = var0.horizontal;
                    var0 = var0.rtl;
                    if (!var2) {
                        _fun4720_ip = 33;
                        continue _fun4720
                    }
                case 30:
                    if (var0) {
                        _fun4720_ip = 46;
                        continue _fun4720
                    }
                case 33:
                    var0 = var3._selectOffset;
                    var0 = var0.bind(var3)(var4);
                    return var0;
                case 46:
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun4720_ip = 58;
                        continue _fun4720
                    }
                case 52:
                    var1 = var3._contentLength;
                case 58:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 2;
                    var2 = var6[var2];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var2);
                    var2 = var0 != var1;
                    var0 = 'ListMetricsAggregator must be notified of list content layout before resolving offsets';
                    var0 = var5.bind(var6)(var2, var0);
                    var0 = var3._selectOffset;
                    var2 = var0.bind(var3)(var4);
                    var0 = var3._selectLength;
                    var0 = var0.bind(var3)(var4);
                    var0 = var2 + var0;
                    var0 = var1 - var0;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'cartesianOffset';
        var0.key = var5;
        var5 = function(arg0) { // Original name: cartesianOffset, environment: var4
            _fun4721: for (var _fun4721_ip = 0;;) switch (_fun4721_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1._orientation;
                    var4 = var0.horizontal;
                    var3 = var0.rtl;
                    var0 = var2;
                    if (!var4) {
                        _fun4721_ip = 95;
                        continue _fun4721
                    }
                case 30:
                    var0 = var2;
                    if (!var3) {
                        _fun4721_ip = 95;
                        continue _fun4721
                    }
                case 36:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 2;
                    var3 = var5[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var1._contentLength;
                    var3 = null;
                    var4 = var3 != var4;
                    var3 = 'ListMetricsAggregator must be notified of list content layout before resolving offsets';
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = var1._contentLength;
                    var0 = var1 - var2;
                case 95:
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = '_invalidateIfOrientationChanged';
        var0.key = var5;
        var5 = function(arg0) { // Original name: _invalidateIfOrientationChanged, environment: var4
            _fun4722: for (var _fun4722_ip = 0;;) switch (_fun4722_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var3 = var1.rtl;
                    var2 = var0._orientation;
                    var2 = var2.rtl;
                    if (!(var3 !== var2)) {
                        _fun4722_ip = 44;
                        continue _fun4722
                    }
                case 28:
                    var3 = var0._cellMetrics;
                    var2 = var3.clear;
                    var2 = var2.bind(var3)();
                case 44:
                    var3 = var1.horizontal;
                    var2 = var0._orientation;
                    var2 = var2.horizontal;
                    if (!(var3 !== var2)) {
                        _fun4722_ip = 92;
                        continue _fun4722
                    }
                case 66:
                    var2 = 0;
                    var0._averageCellLength = var2;
                    var0._highestMeasuredCellIndex = var2;
                    var0._measuredCellsLength = var2;
                    var0._measuredCellsCount = var2;
                case 92:
                    var0._orientation = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = '_selectLength';
        var0.key = var5;
        var5 = function(arg0) { // Original name: _selectLength, environment: var4
            _fun4723: for (var _fun4723_ip = 0;;) switch (_fun4723_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.width;
                    var0 = var0.height;
                    var2 = this;
                    var2 = var2._orientation;
                    var2 = var2.horizontal;
                    if (!var2) {
                        _fun4723_ip = 34;
                        continue _fun4723
                    }
                case 31:
                    var0 = var1;
                case 34:
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = '_selectOffset';
        var0.key = var5;
        var4 = function(arg0) { // Original name: _selectOffset, environment: var4
            _fun4724: for (var _fun4724_ip = 0;;) switch (_fun4724_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.x;
                    var0 = var0.y;
                    var2 = this;
                    var2 = var2._orientation;
                    var2 = var2.horizontal;
                    if (!var2) {
                        _fun4724_ip = 34;
                        continue _fun4724
                    }
                case 31:
                    var0 = var1;
                case 34:
                    return var0;
            }
        };
        var0.value = var4;
        var1[14] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 44, 304]);