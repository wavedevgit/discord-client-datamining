// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function(arg0, arg1) { // Original name: ViewabilityHelper, environment: var4
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2.possiblyViewableIndices = var1;
            var1 = false;
            var2.hasInteracted = var1;
            var1 = new Array(0);
            var2.viewableIndices = var1;
            var1 = new Array(0);
            var2.lastReportedViewableIndices = var1;
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.timers = var1;
            var1 = arg0;
            var2.viewabilityConfig = var1;
            var1 = arg1;
            var2.viewableIndicesChanged = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'dispose';
        var0.key = var1;
        var1 = function() { // Original name: dispose, environment: var4
            var0 = this;
            var2 = var0.timers;
            var1 = var2.forEach;
            var0 = global;
            var0 = var0.clearTimeout;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'updateViewableItems';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: updateViewableItems, environment: var4
            _fun45521: for (var _fun45521_ip = 0;;) switch (_fun45521_ip) {
                case 0:
                    var0 = arg6;
                    var5 = this;
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var2 = arg1;
                    var _closure3_slot1 = var2;
                    var2 = arg2;
                    var _closure3_slot2 = var2;
                    var2 = arg3;
                    var _closure3_slot3 = var2;
                    var2 = arg4;
                    var _closure3_slot4 = var2;
                    var2 = arg5;
                    var _closure3_slot5 = var2;
                    var _closure3_slot6 = var5;
                    var3 = undefined;
                    if (!(var3 !== var0)) {
                        _fun45521_ip = 66;
                        continue _fun45521
                    }
                case 60:
                    var5.possiblyViewableIndices = var0;
                case 66:
                    var2 = var5.viewabilityConfig;
                    var4 = null;
                    var6 = var4 == var2;
                    var0 = undefined;
                    if (var6) {
                        _fun45521_ip = 89;
                        continue _fun45521
                    }
                case 83:
                    var0 = var2.itemVisiblePercentThreshold;
                case 89:
                    if (!(var4 !== var0)) {
                        _fun45521_ip = 171;
                        continue _fun45521
                    }
                case 93:
                    var2 = var5.viewabilityConfig;
                    var6 = var4 == var2;
                    var0 = undefined;
                    if (var6) {
                        _fun45521_ip = 114;
                        continue _fun45521
                    }
                case 108:
                    var0 = var2.itemVisiblePercentThreshold;
                case 114:
                    if (!(var3 !== var0)) {
                        _fun45521_ip = 171;
                        continue _fun45521
                    }
                case 118:
                    var2 = var5.viewabilityConfig;
                    var6 = var4 == var2;
                    var0 = undefined;
                    if (var6) {
                        _fun45521_ip = 139;
                        continue _fun45521
                    }
                case 133:
                    var0 = var2.viewAreaCoveragePercentThreshold;
                case 139:
                    if (!(var4 !== var0)) {
                        _fun45521_ip = 171;
                        continue _fun45521
                    }
                case 143:
                    var2 = var5.viewabilityConfig;
                    var6 = var4 == var2;
                    var0 = undefined;
                    if (var6) {
                        _fun45521_ip = 164;
                        continue _fun45521
                    }
                case 158:
                    var0 = var2.viewAreaCoveragePercentThreshold;
                case 164:
                    if (!(var3 === var0)) {
                        _fun45521_ip = 317;
                        continue _fun45521
                    }
                case 171:
                    var2 = var5.viewabilityConfig;
                    var6 = var4 == var2;
                    var0 = undefined;
                    if (var6) {
                        _fun45521_ip = 192;
                        continue _fun45521
                    }
                case 186:
                    var0 = var2.waitForInteraction;
                case 192:
                    if (!(var4 != var0)) {
                        _fun45521_ip = 208;
                        continue _fun45521
                    }
                case 196:
                    if (!var0) {
                        _fun45521_ip = 208;
                        continue _fun45521
                    }
                case 199:
                    var0 = var5.hasInteracted;
                    if (!var0) {
                        _fun45521_ip = 315;
                        continue _fun45521
                    }
                case 208:
                    var6 = var5.possiblyViewableIndices;
                    var2 = var6.filter;
                    var0 = function(arg0) { // Environment: var1
                        _fun45522: for (var _fun45522_ip = 0;;) switch (_fun45522_ip) {
                            case 0:
                                var10 = _closure3_slot6;
                                var9 = var10.isItemViewable;
                                var8 = _closure3_slot0;
                                var7 = _closure3_slot1;
                                var6 = _closure3_slot2;
                                var5 = _closure3_slot3;
                                var4 = _closure3_slot4;
                                var1 = var10.viewabilityConfig;
                                var11 = null;
                                var12 = var11 == var1;
                                var2 = undefined;
                                if (var12) {
                                    _fun45522_ip = 58;
                                    continue _fun45522
                                }
                            case 52:
                                var2 = var1.viewAreaCoveragePercentThreshold;
                            case 58:
                                var1 = _closure3_slot6;
                                var1 = var1.viewabilityConfig;
                                var11 = var11 == var1;
                                var3 = undefined;
                                if (var11) {
                                    _fun45522_ip = 83;
                                    continue _fun45522
                                }
                            case 77:
                                var3 = var1.itemVisiblePercentThreshold;
                            case 83:
                                var13 = _closure3_slot5;
                                var21 = arg0;
                                var22 = var10;
                                var20 = var8;
                                var19 = var7;
                                var18 = var6;
                                var17 = var5;
                                var16 = var4;
                                var15 = var2;
                                var14 = var3;
                                var0 = var22[var9](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
                                return var0;
                        }
                    };
                    var2 = var2.bind(var6)(var0);
                    var _closure3_slot7 = var2;
                    var5.viewableIndices = var2;
                    var6 = var5.viewabilityConfig;
                    var7 = var4 == var6;
                    var0 = undefined;
                    if (var7) {
                        _fun45521_ip = 260;
                        continue _fun45521
                    }
                case 254:
                    var0 = var6.minimumViewTime;
                case 260:
                    var6 = var4 != var0;
                    var4 = 250;
                    if (!var6) {
                        _fun45521_ip = 273;
                        continue _fun45521
                    }
                case 270:
                    var4 = var0;
                case 273:
                    var0 = 0;
                    if (!(!(var4 > var0))) {
                        _fun45521_ip = 292;
                        continue _fun45521
                    }
                case 279:
                    var0 = var5.checkViewableIndicesChanges;
                    var0 = var0.bind(var5)(var2);
                    _fun45521_ip = 315;
                    continue _fun45521;
                case 292:
                    var0 = global;
                    var2 = var0.setTimeout;
                    var0 = function() { // Environment: var1
                        var1 = _closure3_slot6;
                        var4 = var1.timers;
                        var3 = var4.delete;
                        var2 = _closure3_slot8;
                        var2 = var3.bind(var4)(var2);
                        var3 = var1.checkViewableIndicesChanges;
                        var2 = _closure3_slot7;
                        var2 = var3.bind(var1)(var2);
                        var2 = var1.timers;
                        var1 = var2.add;
                        var0 = _closure3_slot8;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var4);
                    var _closure3_slot8 = var0;
                case 315:
                    return var3;
                case 317:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 2;
                    var0 = var4[var0];
                    var2 = var1.bind(var3)(var0);
                    var0 = 3;
                    var0 = var4[var0];
                    var0 = var1.bind(var3)(var0);
                    var9 = var0.multipleViewabilityThresholdTypesNotSupported;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'checkViewableIndicesChanges';
        var0.key = var5;
        var5 = function(arg0) { // Original name: checkViewableIndicesChanges, environment: var4
            _fun45524: for (var _fun45524_ip = 0;;) switch (_fun45524_ip) {
                case 0:
                    var3 = arg0;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var0 = _closure3_slot0;
                        var2 = var0.viewableIndices;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    var _closure3_slot1 = var3;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var0 = _closure3_slot0;
                        var2 = var0.lastReportedViewableIndices;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var5 = var4.lastReportedViewableIndices;
                    var1 = var5.filter;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot1;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var1.bind(var5)(var0);
                    var0 = var2.length;
                    var6 = 0;
                    var0 = var0 > var6;
                    if (var0) {
                        _fun45524_ip = 90;
                        continue _fun45524
                    }
                case 81:
                    var5 = var1.length;
                    var0 = var5 > var6;
                case 90:
                    if (!var0) {
                        _fun45524_ip = 112;
                        continue _fun45524
                    }
                case 93:
                    var4.lastReportedViewableIndices = var3;
                    var0 = var4.viewableIndicesChanged;
                    var0 = var0.bind(var4)(var3, var2, var1);
                case 112:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'clearLastReportedViewableIndices';
        var0.key = var5;
        var5 = function() { // Original name: clearLastReportedViewableIndices, environment: var4
            var1 = new Array(0);
            var0 = this;
            var0.lastReportedViewableIndices = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'isItemViewable';
        var0.key = var5;
        var4 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) { // Original name: isItemViewable, environment: var4
            _fun45529: for (var _fun45529_ip = 0;;) switch (_fun45529_ip) {
                case 0:
                    var1 = arg1;
                    var8 = arg4;
                    var2 = arg5;
                    var3 = arg6;
                    var0 = arg7;
                    var6 = arg8;
                    var4 = undefined;
                    var5 = arg0;
                    var5 = var6.bind(var4)(var5);
                    if (!(var4 !== var5)) {
                        _fun45529_ip = 293;
                        continue _fun45529
                    }
                case 35:
                    if (var1) {
                        _fun45529_ip = 45;
                        continue _fun45529
                    }
                case 38:
                    var6 = var5.y;
                    _fun45529_ip = 50;
                    continue _fun45529;
                case 45:
                    var6 = var5.x;
                case 50:
                    var4 = arg2;
                    var9 = var6 - var4;
                    if (var1) {
                        _fun45529_ip = 67;
                        continue _fun45529
                    }
                case 60:
                    var4 = var5.height;
                    _fun45529_ip = 72;
                    continue _fun45529;
                case 67:
                    var4 = var5.width;
                case 72:
                    var10 = var9 + var4;
                    if (var1) {
                        _fun45529_ip = 86;
                        continue _fun45529
                    }
                case 79:
                    var4 = var2.height;
                    _fun45529_ip = 91;
                    continue _fun45529;
                case 86:
                    var4 = var2.width;
                case 91:
                    var2 = arg3;
                    var6 = var4 - var2;
                    var4 = global;
                    var7 = var4.Math;
                    var2 = var7.max;
                    var7 = var2.bind(var7)(var9, var8);
                    var9 = var4.Math;
                    var2 = var9.min;
                    var2 = var2.bind(var9)(var10, var6);
                    var10 = var4.Math;
                    var9 = var10.max;
                    var7 = var2 - var7;
                    var2 = 0;
                    var7 = var9.bind(var10)(var2, var7);
                    if (var1) {
                        _fun45529_ip = 167;
                        continue _fun45529
                    }
                case 160:
                    var1 = var5.height;
                    _fun45529_ip = 172;
                    continue _fun45529;
                case 167:
                    var1 = var5.width;
                case 172:
                    var9 = var4.Math;
                    var5 = var9.abs;
                    var4 = var7 - var1;
                    var5 = var5.bind(var9)(var4);
                    var4 = 0.001;
                    if (!(!(var5 <= var4))) {
                        _fun45529_ip = 289;
                        continue _fun45529
                    }
                case 207:
                    if (!(!(var7 <= var2))) {
                        _fun45529_ip = 285;
                        continue _fun45529
                    }
                case 211:
                    var4 = null;
                    var5 = var4 != var3;
                    if (var5) {
                        _fun45529_ip = 226;
                        continue _fun45529
                    }
                case 220:
                    var1 = var7 / var1;
                    _fun45529_ip = 234;
                    continue _fun45529;
                case 226:
                    var6 = var6 - var8;
                    var1 = var7 / var6;
                case 234:
                    if (var5) {
                        _fun45529_ip = 265;
                        continue _fun45529
                    }
                case 237:
                    var4 = var4 != var0;
                    var2 = 0;
                    if (!var4) {
                        _fun45529_ip = 249;
                        continue _fun45529
                    }
                case 246:
                    var2 = var0;
                case 249:
                    var0 = 0.01;
                    var0 = var0 * var2;
                    _fun45529_ip = 279;
                    continue _fun45529;
                case 265:
                    var2 = 0.01;
                    var0 = var2 * var3;
                case 279:
                    var0 = var1 >= var0;
                    return var0;
                case 285:
                    var0 = false;
                    return var0;
                case 289:
                    var0 = true;
                    return var0;
                case 293:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5058, 5059, 5082, 5087]);