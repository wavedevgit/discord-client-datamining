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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1() {
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
        var1 = function() {
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
        var5 = function arg0, arg1, arg2, arg3, arg4() {
            _fun45826: for (var _fun45826_ip = 0;;) switch (_fun45826_ip) {
                case 0:
                    var2 = arg4;
                    var0 = this;
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var3 = arg1;
                    var _closure3_slot1 = var3;
                    var3 = arg2;
                    var _closure3_slot2 = var3;
                    var3 = arg3;
                    var _closure3_slot3 = var3;
                    var _closure3_slot4 = var0;
                    var3 = undefined;
                    if (!(var3 !== var2)) {
                        _fun45826_ip = 52;
                        continue _fun45826
                    }
                case 46:
                    var0.possiblyViewableIndices = var2;
                case 52:
                    var4 = var0.viewabilityConfig;
                    var5 = null;
                    var6 = var5 == var4;
                    var2 = undefined;
                    if (var6) {
                        _fun45826_ip = 75;
                        continue _fun45826
                    }
                case 69:
                    var2 = var4.itemVisiblePercentThreshold;
                case 75:
                    if (!(var5 !== var2)) {
                        _fun45826_ip = 157;
                        continue _fun45826
                    }
                case 79:
                    var4 = var0.viewabilityConfig;
                    var6 = var5 == var4;
                    var2 = undefined;
                    if (var6) {
                        _fun45826_ip = 100;
                        continue _fun45826
                    }
                case 94:
                    var2 = var4.itemVisiblePercentThreshold;
                case 100:
                    if (!(var3 !== var2)) {
                        _fun45826_ip = 157;
                        continue _fun45826
                    }
                case 104:
                    var4 = var0.viewabilityConfig;
                    var6 = var5 == var4;
                    var2 = undefined;
                    if (var6) {
                        _fun45826_ip = 125;
                        continue _fun45826
                    }
                case 119:
                    var2 = var4.viewAreaCoveragePercentThreshold;
                case 125:
                    if (!(var5 !== var2)) {
                        _fun45826_ip = 157;
                        continue _fun45826
                    }
                case 129:
                    var4 = var0.viewabilityConfig;
                    var6 = var5 == var4;
                    var2 = undefined;
                    if (var6) {
                        _fun45826_ip = 150;
                        continue _fun45826
                    }
                case 144:
                    var2 = var4.viewAreaCoveragePercentThreshold;
                case 150:
                    if (!(var3 === var2)) {
                        _fun45826_ip = 322;
                        continue _fun45826
                    }
                case 157:
                    var4 = var0.viewabilityConfig;
                    var6 = var5 == var4;
                    var2 = undefined;
                    if (var6) {
                        _fun45826_ip = 178;
                        continue _fun45826
                    }
                case 172:
                    var2 = var4.waitForInteraction;
                case 178:
                    if (!(var5 != var2)) {
                        _fun45826_ip = 197;
                        continue _fun45826
                    }
                case 182:
                    if (!var2) {
                        _fun45826_ip = 197;
                        continue _fun45826
                    }
                case 185:
                    var2 = var0.hasInteracted;
                    if (!var2) {
                        _fun45826_ip = 320;
                        continue _fun45826
                    }
                case 197:
                    var6 = var0.possiblyViewableIndices;
                    var4 = var6.filter;
                    var2 = function(arg0) { // Environment: var1
                        _fun45827: for (var _fun45827_ip = 0;;) switch (_fun45827_ip) {
                            case 0:
                                var8 = _closure3_slot4;
                                var7 = var8.isItemViewable;
                                var6 = _closure3_slot0;
                                var5 = _closure3_slot1;
                                var4 = _closure3_slot2;
                                var1 = var8.viewabilityConfig;
                                var9 = null;
                                var10 = var9 == var1;
                                var2 = undefined;
                                if (var10) {
                                    _fun45827_ip = 48;
                                    continue _fun45827
                                }
                            case 42:
                                var2 = var1.viewAreaCoveragePercentThreshold;
                            case 48:
                                var1 = _closure3_slot4;
                                var1 = var1.viewabilityConfig;
                                var9 = var9 == var1;
                                var3 = undefined;
                                if (var9) {
                                    _fun45827_ip = 73;
                                    continue _fun45827
                                }
                            case 67:
                                var3 = var1.itemVisiblePercentThreshold;
                            case 73:
                                var11 = _closure3_slot3;
                                var17 = arg0;
                                var18 = var8;
                                var16 = var6;
                                var15 = var5;
                                var14 = var4;
                                var13 = var2;
                                var12 = var3;
                                var0 = var18[var7](var17, var16, var15, var14, var13, var12, var11, var10);
                                return var0;
                        }
                    };
                    var4 = var4.bind(var6)(var2);
                    var _closure3_slot5 = var4;
                    var0.viewableIndices = var4;
                    var6 = var0.viewabilityConfig;
                    var7 = var5 == var6;
                    var2 = undefined;
                    if (var7) {
                        _fun45826_ip = 249;
                        continue _fun45826
                    }
                case 243:
                    var2 = var6.minimumViewTime;
                case 249:
                    var6 = var5 != var2;
                    var5 = 250;
                    if (!var6) {
                        _fun45826_ip = 262;
                        continue _fun45826
                    }
                case 259:
                    var5 = var2;
                case 262:
                    var2 = 0;
                    if (!(!(var5 > var2))) {
                        _fun45826_ip = 281;
                        continue _fun45826
                    }
                case 268:
                    var2 = var0.checkViewableIndicesChanges;
                    var2 = var2.bind(var0)(var4);
                    _fun45826_ip = 320;
                    continue _fun45826;
                case 281:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var2 = function() { // Environment: var1
                        var2 = _closure3_slot4;
                        var4 = var2.timers;
                        var3 = var4.delete;
                        var1 = _closure3_slot6;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.checkViewableIndicesChanges;
                        var0 = _closure3_slot5;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var4.bind(var3)(var2, var5);
                    var _closure3_slot6 = var2;
                    var1 = var0.timers;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                case 320:
                    return var3;
                case 322:
                    var0 = global;
                    var2 = var0.Error;
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 2;
                    var0 = var4[var0];
                    var0 = var1.bind(var3)(var0);
                    var0 = var0.ErrorMessages;
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
        var5 = function arg0() {
            _fun45829: for (var _fun45829_ip = 0;;) switch (_fun45829_ip) {
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
                        _fun45829_ip = 90;
                        continue _fun45829
                    }
                case 81:
                    var5 = var1.length;
                    var0 = var5 > var6;
                case 90:
                    if (!var0) {
                        _fun45829_ip = 112;
                        continue _fun45829
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
        var5 = function() {
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
        var4 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6() {
            _fun45834: for (var _fun45834_ip = 0;;) switch (_fun45834_ip) {
                case 0:
                    var4 = arg1;
                    var2 = arg3;
                    var3 = arg4;
                    var0 = arg5;
                    var6 = arg6;
                    var1 = undefined;
                    var5 = arg0;
                    var5 = var6.bind(var1)(var5);
                    if (!(var1 !== var5)) {
                        _fun45834_ip = 219;
                        continue _fun45834
                    }
                case 32:
                    if (var4) {
                        _fun45834_ip = 42;
                        continue _fun45834
                    }
                case 35:
                    var6 = var5.y;
                    _fun45834_ip = 47;
                    continue _fun45834;
                case 42:
                    var6 = var5.x;
                case 47:
                    var1 = arg2;
                    var8 = var6 - var1;
                    if (var4) {
                        _fun45834_ip = 64;
                        continue _fun45834
                    }
                case 57:
                    var1 = var5.height;
                    _fun45834_ip = 69;
                    continue _fun45834;
                case 64:
                    var1 = var5.width;
                case 69:
                    if (var4) {
                        _fun45834_ip = 79;
                        continue _fun45834
                    }
                case 72:
                    var4 = var2.height;
                    _fun45834_ip = 84;
                    continue _fun45834;
                case 79:
                    var4 = var2.width;
                case 84:
                    var2 = global;
                    var7 = var2.Math;
                    var6 = var7.min;
                    var5 = var8 + var1;
                    var6 = var6.bind(var7)(var5, var4);
                    var7 = var2.Math;
                    var5 = var7.max;
                    var2 = 0;
                    var5 = var5.bind(var7)(var8, var2);
                    var7 = var6 - var5;
                    var6 = var4;
                    if (!(var7 !== var1)) {
                        _fun45834_ip = 215;
                        continue _fun45834
                    }
                case 137:
                    if (!(var2 !== var7)) {
                        _fun45834_ip = 211;
                        continue _fun45834
                    }
                case 141:
                    var4 = null;
                    var5 = var4 != var3;
                    if (var5) {
                        _fun45834_ip = 156;
                        continue _fun45834
                    }
                case 150:
                    var1 = var7 / var1;
                    _fun45834_ip = 160;
                    continue _fun45834;
                case 156:
                    var1 = var7 / var6;
                case 160:
                    if (var5) {
                        _fun45834_ip = 191;
                        continue _fun45834
                    }
                case 163:
                    var4 = var4 != var0;
                    var2 = 0;
                    if (!var4) {
                        _fun45834_ip = 175;
                        continue _fun45834
                    }
                case 172:
                    var2 = var0;
                case 175:
                    var0 = 0.01;
                    var0 = var0 * var2;
                    _fun45834_ip = 205;
                    continue _fun45834;
                case 191:
                    var2 = 0.01;
                    var0 = var2 * var3;
                case 205:
                    var0 = var1 >= var0;
                    return var0;
                case 211:
                    var0 = false;
                    return var0;
                case 215:
                    var0 = true;
                    return var0;
                case 219:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5113, 5114, 5133]);