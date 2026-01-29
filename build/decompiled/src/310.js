// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: _isViewable, environment: var1
        _fun4752: for (var _fun4752_ip = 0;;) switch (_fun4752_ip) {
            case 0:
                var6 = arg2;
                var5 = arg3;
                var2 = arg4;
                var4 = 0;
                var0 = var6 >= var4;
                if (!var0) {
                    _fun4752_ip = 22;
                    continue _fun4752
                }
            case 18:
                var0 = var5 <= var2;
            case 22:
                if (!var0) {
                    _fun4752_ip = 29;
                    continue _fun4752
                }
            case 25:
                var0 = var5 > var6;
            case 29:
                if (var0) {
                    _fun4752_ip = 124;
                    continue _fun4752
                }
            case 32:
                var0 = global;
                var3 = var0.Math;
                var1 = var3.min;
                var3 = var1.bind(var3)(var5, var2);
                var5 = var0.Math;
                var1 = var5.max;
                var1 = var1.bind(var5)(var6, var4);
                var3 = var3 - var1;
                var1 = var0.Math;
                var0 = var1.max;
                var0 = var0.bind(var1)(var4, var3);
                var1 = arg0;
                if (var1) {
                    _fun4752_ip = 104;
                    continue _fun4752
                }
            case 95:
                var1 = arg5;
                var1 = var0 / var1;
                _fun4752_ip = 108;
                continue _fun4752;
            case 104:
                var1 = var0 / var2;
            case 108:
                var0 = 100;
                var1 = var0 * var1;
                var0 = arg1;
                var0 = var1 >= var0;
                return var0;
            case 124:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
        var2 = function() { // Original name: ViewabilityHelper, environment: var4
            _fun4754: for (var _fun4754_ip = 0;;) switch (_fun4754_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var4 = undefined;
                    var1 = arguments.length;
                    var3 = 0;
                    if (!(var1 > var3)) {
                        _fun4754_ip = 24;
                        continue _fun4754
                    }
                case 16:
                    var1 = arguments[var3];
                    if (!(var0 === var1)) {
                        _fun4754_ip = 33;
                        continue _fun4754
                    }
                case 24:
                    var1 = {};
                    var1.viewAreaCoveragePercentThreshold = var3;
                    _fun4754_ip = 37;
                    continue _fun4754;
                case 33:
                    var1 = arguments[var3];
                case 37:
                    var4 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var0)(var2, var3);
                    var3 = false;
                    var2._hasInteracted = var3;
                    var3 = global;
                    var4 = var3.Set;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var5;
                    var4 = new var8[var4](var7);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var2._timers = var4;
                    var4 = new Array(0);
                    var2._viewableIndices = var4;
                    var3 = var3.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var8 = var4;
                    var3 = new var8[var3](var7);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var2._viewableItems = var3;
                    var2._config = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'dispose';
        var0.key = var1;
        var1 = function() { // Original name: dispose, environment: var4
            var0 = this;
            var2 = var0._timers;
            var1 = var2.forEach;
            var0 = global;
            var0 = var0.clearTimeout;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'computeViewableItems';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: computeViewableItems, environment: var4
            _fun4756: for (var _fun4756_ip = 0;;) switch (_fun4756_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg1;
                    var15 = arg2;
                    var14 = arg3;
                    var7 = arg4;
                    var1 = var17.getItemCount;
                    var0 = var17.data;
                    var6 = var1.bind(var17)(var0);
                    var0 = this;
                    var0 = var0._config;
                    var3 = var0.itemVisiblePercentThreshold;
                    var4 = var0.viewAreaCoveragePercentThreshold;
                    var0 = null;
                    var13 = var0 != var4;
                    var12 = var3;
                    if (!var13) {
                        _fun4756_ip = 67;
                        continue _fun4756
                    }
                case 64:
                    var12 = var4;
                case 67:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 3;
                    var1 = var5[var1];
                    var10 = undefined;
                    var2 = var2.bind(var10)(var1);
                    var1 = var0 != var12;
                    if (!var1) {
                        _fun4756_ip = 111;
                        continue _fun4756
                    }
                case 99:
                    var3 = var0 != var3;
                    var0 = var0 != var4;
                    var1 = var3 !== var0;
                case 111:
                    var0 = 'Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold';
                    var0 = var2.bind(var10)(var1, var0);
                    var0 = new Array(0);
                    var9 = 0;
                    if (!(var9 !== var6)) {
                        _fun4756_ip = 444;
                        continue _fun4756
                    }
                case 136:
                    var1 = var7;
                    if (var1) {
                        _fun4756_ip = 164;
                        continue _fun4756
                    }
                case 142:
                    var2 = {};
                    var2.first = var9;
                    var3 = 1;
                    var3 = var6 - var3;
                    var2.last = var3;
                    var1 = var2;
                case 164:
                    var8 = var1.first;
                    var5 = var1.last;
                    if (!(!(var5 >= var6))) {
                        _fun4756_ip = 381;
                        continue _fun4756
                    }
                case 183:
                    var18 = var8 <= var5;
                    var4 = -1;
                    var3 = global;
                    var2 = undefined;
                    var1 = undefined;
                    if (!var18) {
                        _fun4756_ip = 379;
                        continue _fun4756
                    }
                case 205:
                    var18 = var14.getCellMetrics;
                    var22 = var18.bind(var14)(var8, var17);
                    var19 = var8;
                    var18 = var4;
                    if (!var22) {
                        _fun4756_ip = 366;
                        continue _fun4756
                    }
                case 229:
                    var23 = var3.Math;
                    var21 = var23.floor;
                    var20 = var22.offset;
                    var20 = var20 - var16;
                    var21 = var21.bind(var23)(var20);
                    var24 = var3.Math;
                    var23 = var24.floor;
                    var20 = var22.length;
                    var20 = var21 + var20;
                    var20 = var23.bind(var24)(var20);
                    if (!(var21 < var15)) {
                        _fun4756_ip = 290;
                        continue _fun4756
                    }
                case 286:
                    if (!(!(var20 > var9))) {
                        _fun4756_ip = 305;
                        continue _fun4756
                    }
                case 290:
                    var2 = var21;
                    var1 = var20;
                    var18 = var4;
                    if (!(!(var18 >= var9))) {
                        _fun4756_ip = 379;
                        continue _fun4756
                    }
                case 303:
                    _fun4756_ip = 366;
                    continue _fun4756;
                case 305:
                    var23 = _closure1_slot5;
                    var25 = var22.length;
                    var31 = undefined;
                    var30 = var13;
                    var29 = var12;
                    var28 = var21;
                    var27 = var20;
                    var26 = var15;
                    var22 = var31[var23](var30, var29, var28, var27, var26, var25, var24);
                    var18 = var19;
                    var2 = var21;
                    var1 = var20;
                    if (!var22) {
                        _fun4756_ip = 366;
                        continue _fun4756
                    }
                case 347:
                    var22 = var0.push;
                    var22 = var22.bind(var0)(var19);
                    var18 = var19;
                    var2 = var21;
                    var1 = var20;
                case 366:
                    var8 = var19 + 1;
                    var4 = var18;
                    if (var8 <= var5) {
                        _fun4756_ip = 205;
                        continue _fun4756
                    }
                case 379:
                    return var0;
                case 381:
                    var1 = global;
                    var3 = var1.console;
                    var2 = var3.warn;
                    var5 = var1.JSON;
                    var4 = var5.stringify;
                    var1 = {};
                    var1.renderRange = var7;
                    var1.itemCount = var6;
                    var4 = var4.bind(var5)(var1);
                    var1 = 'Invalid render range computing viewability ';
                    var1 = var1 + var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = new Array(0);
                    return var1;
                case 444:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'onUpdate';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: onUpdate, environment: var4
            _fun4757: for (var _fun4757_ip = 0;;) switch (_fun4757_ip) {
                case 0:
                    var6 = arg0;
                    var10 = arg3;
                    var5 = arg4;
                    var4 = arg5;
                    var0 = this;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var5;
                    var _closure3_slot2 = var4;
                    var _closure3_slot3 = var0;
                    var3 = var6.getItemCount;
                    var2 = var6.data;
                    var2 = var3.bind(var6)(var2);
                    var3 = var0._config;
                    var3 = var3.waitForInteraction;
                    if (!var3) {
                        _fun4757_ip = 76;
                        continue _fun4757
                    }
                case 64:
                    var3 = var0._hasInteracted;
                    if (!var3) {
                        _fun4757_ip = 295;
                        continue _fun4757
                    }
                case 76:
                    var7 = 0;
                    if (!(var7 !== var2)) {
                        _fun4757_ip = 295;
                        continue _fun4757
                    }
                case 85:
                    var3 = var10.getCellMetrics;
                    var3 = var3.bind(var10)(var7, var6);
                    if (!var3) {
                        _fun4757_ip = 295;
                        continue _fun4757
                    }
                case 103:
                    var3 = new Array(0);
                    var _closure3_slot4 = var3;
                    if (!var2) {
                        _fun4757_ip = 149;
                        continue _fun4757
                    }
                case 114:
                    var9 = var0.computeViewableItems;
                    var14 = arg1;
                    var13 = arg2;
                    var11 = arg6;
                    var16 = var0;
                    var15 = var6;
                    var12 = var10;
                    var2 = var16[var9](var15, var14, var13, var12, var11, var10);
                    _closure3_slot4 = var2;
                    var3 = var2;
                case 149:
                    var2 = var0._viewableIndices;
                    var7 = var2.length;
                    var2 = var3.length;
                    if (!(var7 === var2)) {
                        _fun4757_ip = 194;
                        continue _fun4757
                    }
                case 169:
                    var8 = var0._viewableIndices;
                    var7 = var8.every;
                    var2 = function(arg0, arg1) { // Environment: var1
                        var1 = _closure3_slot4;
                        var0 = arg1;
                        var1 = var1[var0];
                        var0 = arg0;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var2 = var7.bind(var8)(var2);
                    if (var2) {
                        _fun4757_ip = 295;
                        continue _fun4757
                    }
                case 194:
                    var0._viewableIndices = var3;
                    var2 = var0._config;
                    var2 = var2.minimumViewTime;
                    if (var2) {
                        _fun4757_ip = 242;
                        continue _fun4757
                    }
                case 215:
                    var2 = var0._onUpdateSync;
                    var16 = var0;
                    var15 = var6;
                    var14 = var3;
                    var13 = var4;
                    var12 = var5;
                    var2 = var16[var2](var15, var14, var13, var12, var11);
                    _fun4757_ip = 295;
                    continue _fun4757;
                case 242:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var2 = var0._config;
                    var4 = var2.minimumViewTime;
                    var3 = undefined;
                    var2 = function() { // Environment: var1
                        var5 = _closure3_slot3;
                        var3 = var5._timers;
                        var2 = var3.delete;
                        var1 = _closure3_slot5;
                        var1 = var2.bind(var3)(var1);
                        var4 = var5._onUpdateSync;
                        var9 = _closure3_slot0;
                        var8 = _closure3_slot4;
                        var7 = _closure3_slot2;
                        var6 = _closure3_slot1;
                        var10 = var5;
                        var0 = var10[var4](var9, var8, var7, var6, var5);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var5.bind(var3)(var2, var4);
                    var _closure3_slot5 = var2;
                    var1 = var0._timers;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                case 295:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'resetViewableIndices';
        var0.key = var5;
        var5 = function() { // Original name: resetViewableIndices, environment: var4
            var1 = new Array(0);
            var0 = this;
            var0._viewableIndices = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'recordInteraction';
        var0.key = var5;
        var5 = function() { // Original name: recordInteraction, environment: var4
            var1 = true;
            var0 = this;
            var0._hasInteracted = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = '_onUpdateSync';
        var0.key = var5;
        var4 = function(arg0, arg1, arg2, arg3) { // Original name: _onUpdateSync, environment: var4
            _fun4762: for (var _fun4762_ip = 0;;) switch (_fun4762_ip) {
                case 0:
                    var8 = arg1;
                    var1 = this;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg3;
                    var _closure3_slot1 = var0;
                    var0 = undefined;
                    var5 = undefined;
                    var2 = undefined;
                    var3 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var _closure3_slot2 = var1;
                    var7 = var8.filter;
                    var4 = function(arg0) { // Environment: var6
                        var0 = _closure3_slot2;
                        var2 = var0._viewableIndices;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var9 = var7.bind(var8)(var4);
                    var5 = var1._viewableItems;
                    var4 = global;
                    var8 = var4.Map;
                    var7 = var9.map;
                    var6 = function(arg0) { // Environment: var6
                        var4 = _closure3_slot1;
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = true;
                        var1 = var4.bind(var2)(var1, var0, var3);
                        var2 = var1.key;
                        var0 = new Array(2);
                        var0[0] = var2;
                        var0[1] = var1;
                        return var0;
                    };
                    var22 = var7.bind(var9)(var6);
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var23 = var7;
                    var6 = new var23[var8](var22, var21);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var2 = var6;
                    var3 = new Array(0);
                    var7 = var6;
                    var8 = var7[Symbol.iterator];
                    var7 = var8().next;
                    var10 = 2;
                    var6 = 0;
                    var9 = 1;
                case 126:
                    var15 = var7().value;
                    var14 = var8;
                    if (!(var14 !== var0)) {
                        _fun4762_ip = 196;
                        continue _fun4762
                    }
                case 137: // try_start_0
                    var14 = _closure1_slot2;
                    var14 = var14.bind(var0)(var15, var10);
                    var16 = var14[var6];
                    var13 = var14[var9];
                    var15 = var5;
                    var14 = var15.has;
                    var14 = var14.bind(var15)(var16);
                    if (var14) {
                        _fun4762_ip = 187;
                        continue _fun4762
                    }
                case 171:
                    var16 = var3;
                    var15 = var16.push;
                    var14 = var13;
                    var14 = var15.bind(var16)(var14);
                case 187: // try_end0
                    _fun4762_ip = 126;
                    continue _fun4762;
                case 189: // catch_target0
                    CatchBlockStart(arg_register = 7);
                    var8.return();
                    throw var7;
                case 196:
                    var8 = var5;
                    var7 = var8[Symbol.iterator];
                    var8 = var7().next;
                    var5 = false;
                case 204:
                    var14 = var8().value;
                    var13 = var7;
                    if (!(var13 !== var0)) {
                        _fun4762_ip = 301;
                        continue _fun4762
                    }
                case 215: // try_start_1
                    var13 = _closure1_slot2;
                    var13 = var13.bind(var0)(var14, var10);
                    var15 = var13[var6];
                    var12 = var13[var9];
                    var14 = var2;
                    var13 = var14.has;
                    var13 = var13.bind(var14)(var15);
                    if (var13) {
                        _fun4762_ip = 292;
                        continue _fun4762
                    }
                case 249:
                    var15 = var3;
                    var14 = var15.push;
                    var19 = var4.Object;
                    var18 = var19.assign;
                    var17 = var12;
                    var16 = {};
                    var16.isViewable = var5;
                    var13 = {};
                    var13 = var18.bind(var19)(var13, var17, var16);
                    var13 = var14.bind(var15)(var13);
                case 292: // try_end1
                    _fun4762_ip = 204;
                    continue _fun4762;
                case 294: // catch_target1
                    CatchBlockStart(arg_register = 5);
                    var7.return();
                    throw var5;
                case 301:
                    var5 = var3;
                    var5 = var5.length;
                    if (!(var5 > var6)) {
                        _fun4762_ip = 378;
                        continue _fun4762
                    }
                case 313:
                    var7 = var2;
                    var1._viewableItems = var7;
                    var2 = {};
                    var6 = var4.Array;
                    var5 = var6.from;
                    var4 = var7.values;
                    var4 = var4.bind(var7)();
                    var4 = var5.bind(var6)(var4);
                    var2.viewableItems = var4;
                    var2.changed = var3;
                    var1 = var1._config;
                    var2.viewabilityConfig = var1;
                    var1 = arg2;
                    var1 = var1.bind(var0)(var2);
                case 378:
                    return var0;
            }
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 44]);