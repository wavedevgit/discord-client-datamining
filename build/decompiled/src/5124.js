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
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = 0;
            var2.scrollOffset = var1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.PlatformConfig;
            var3 = var3.defaultDrawDistance;
            var2.drawDistance = var3;
            var3 = true;
            var2.enableOffsetProjection = var3;
            var3 = 16;
            var2.averageRenderTime = var3;
            var3 = false;
            var2.forceDisableOffsetProjection = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.ConsecutiveNumbers;
            var3 = var3.EMPTY;
            var2.engagedIndices = var3;
            var3 = 0.3;
            var2.smallMultiplier = var3;
            var3 = 0.7;
            var2.largeMultiplier = var3;
            var3 = [0, 0, 0];
            var4 = -0.1;
            var3[3] = var4;
            var3[4] = var4;
            var2.velocityHistory = var3;
            var2.velocityIndex = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'updateScrollOffset';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun45752: for (var _fun45752_ip = 0;;) switch (_fun45752_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var4 = arg2;
                    var0 = this;
                    var0.scrollOffset = var7;
                    var1 = var4.getWindowsSize;
                    var5 = var1.bind(var4)();
                    var1 = var4.isHorizontal;
                    var1 = var1.bind(var4)();
                    if (!var6) {
                        _fun45752_ip = 69;
                        continue _fun45752
                    }
                case 41:
                    var3 = var0.updateVelocityHistory;
                    if (var1) {
                        _fun45752_ip = 59;
                        continue _fun45752
                    }
                case 52:
                    var2 = var6.y;
                    _fun45752_ip = 64;
                    continue _fun45752;
                case 59:
                    var2 = var6.x;
                case 64:
                    var2 = var3.bind(var0)(var2);
                case 69:
                    var2 = var0.isScrollingBackward;
                    var3 = var2.bind(var0)();
                    var2 = var0.enableOffsetProjection;
                    var10 = var7;
                    if (!var2) {
                        _fun45752_ip = 123;
                        continue _fun45752
                    }
                case 91:
                    var2 = var0.forceDisableOffsetProjection;
                    var10 = var7;
                    if (var2) {
                        _fun45752_ip = 123;
                        continue _fun45752
                    }
                case 103:
                    var6 = var0.getProjectedScrollOffset;
                    var2 = var0.averageRenderTime;
                    var10 = var6.bind(var0)(var7, var2);
                case 123:
                    if (var1) {
                        _fun45752_ip = 133;
                        continue _fun45752
                    }
                case 126:
                    var2 = var5.height;
                    _fun45752_ip = 138;
                    continue _fun45752;
                case 133:
                    var2 = var5.width;
                case 138:
                    var5 = var10 + var2;
                    var6 = var0.drawDistance;
                    var2 = 2;
                    var9 = var2 * var6;
                    if (var3) {
                        _fun45752_ip = 166;
                        continue _fun45752
                    }
                case 158:
                    var2 = var0.smallMultiplier;
                    _fun45752_ip = 172;
                    continue _fun45752;
                case 166:
                    var2 = var0.largeMultiplier;
                case 172:
                    if (var3) {
                        _fun45752_ip = 183;
                        continue _fun45752
                    }
                case 175:
                    var3 = var0.largeMultiplier;
                    _fun45752_ip = 189;
                    continue _fun45752;
                case 183:
                    var3 = var0.smallMultiplier;
                case 189:
                    var6 = global;
                    var8 = var6.Math;
                    var7 = var8.ceil;
                    var2 = var9 * var2;
                    var2 = var7.bind(var8)(var2);
                    var8 = var6.Math;
                    var7 = var8.ceil;
                    var3 = var9 * var3;
                    var3 = var7.bind(var8)(var3);
                    var11 = var6.Math;
                    var9 = var11.max;
                    var7 = var10 - var2;
                    var8 = 0;
                    var9 = var9.bind(var11)(var8, var7);
                    var3 = var5 + var3;
                    var7 = var6.Math;
                    var5 = var7.max;
                    var2 = var2 - var10;
                    var2 = var5.bind(var7)(var8, var2);
                    var5 = var3 + var2;
                    var2 = var4.getLayoutSize;
                    var2 = var2.bind(var4)();
                    if (var1) {
                        _fun45752_ip = 305;
                        continue _fun45752
                    }
                case 298:
                    var1 = var2.height;
                    _fun45752_ip = 310;
                    continue _fun45752;
                case 305:
                    var1 = var2.width;
                case 310:
                    var3 = var9;
                    var2 = var5;
                    if (!(var2 > var1)) {
                        _fun45752_ip = 348;
                        continue _fun45752
                    }
                case 320:
                    var5 = var5 - var1;
                    var7 = var6.Math;
                    var6 = var7.max;
                    var5 = var9 - var5;
                    var3 = var6.bind(var7)(var8, var5);
                    var2 = var1;
                case 348:
                    var1 = var4.getVisibleLayouts;
                    var1 = var1.bind(var4)(var3, var2);
                    var2 = var0.engagedIndices;
                    var0.engagedIndices = var1;
                    var0 = var1.equals;
                    var2 = var0.bind(var1)(var2);
                    var0 = undefined;
                    if (var2) {
                        _fun45752_ip = 391;
                        continue _fun45752
                    }
                case 388:
                    var0 = var1;
                case 391:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(9);
        var1[0] = var0;
        var0 = {};
        var5 = 'updateVelocityHistory';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var3 = var1.velocityHistory;
            var2 = var1.velocityIndex;
            var0 = arg0;
            var3[var2] = var0;
            var2 = var1.velocityIndex;
            var0 = 1;
            var2 = var2 + var0;
            var0 = var1.velocityHistory;
            var0 = var0.length;
            var0 = var2 % var0;
            var1.velocityIndex = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isScrollingBackward';
        var0.key = var5;
        var5 = function() {
            _fun45754: for (var _fun45754_ip = 0;;) switch (_fun45754_ip) {
                case 0:
                    var7 = this;
                    var0 = var7.velocityHistory;
                    var0 = var0.length;
                    var6 = 0;
                    var2 = var6 < var0;
                    var5 = 0;
                    var4 = 0;
                    var3 = 0;
                    var1 = 0;
                    var0 = 0;
                    if (!var2) {
                        _fun45754_ip = 111;
                        continue _fun45754
                    }
                case 33:
                    var2 = var7.velocityHistory;
                    var2 = var2[var3];
                    if (!(!(var2 > var6))) {
                        _fun45754_ip = 75;
                        continue _fun45754
                    }
                case 47:
                    var2 = var7.velocityHistory;
                    var2 = var2[var3];
                    var9 = var5;
                    var8 = var4;
                    if (!(var2 < var6)) {
                        _fun45754_ip = 81;
                        continue _fun45754
                    }
                case 67:
                    var8 = var4 + 1;
                    var9 = var5;
                    _fun45754_ip = 81;
                    continue _fun45754;
                case 75:
                    var9 = var5 + 1;
                    var8 = var4;
                case 81:
                    var3 = var3 + 1;
                    var2 = var7.velocityHistory;
                    var2 = var2.length;
                    var5 = var9;
                    var4 = var8;
                    var1 = var5;
                    var0 = var4;
                    if (var3 < var2) {
                        _fun45754_ip = 33;
                        continue _fun45754
                    }
                case 111:
                    var0 = var1 < var0;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getMedianVelocity';
        var0.key = var5;
        var5 = function() {
            _fun45755: for (var _fun45755_ip = 0;;) switch (_fun45755_ip) {
                case 0:
                    var2 = _closure1_slot2;
                    var0 = this;
                    var1 = var0.velocityHistory;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var4 = var1.length;
                    var0 = 2;
                    var2 = var4 % var0;
                    var3 = 1;
                    if (!(var2 !== var3)) {
                        _fun45755_ip = 86;
                        continue _fun45755
                    }
                case 60:
                    var2 = var4 / var0;
                    var3 = var2 - var3;
                    var3 = var1[var3];
                    var2 = var1[var2];
                    var2 = var3 + var2;
                    var2 = var2 / var0;
                    return var2;
                case 86:
                    var2 = global;
                    var3 = var2.Math;
                    var2 = var3.floor;
                    var0 = var4 / var0;
                    var0 = var2.bind(var3)(var0);
                    var0 = var1[var0];
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getProjectedScrollOffset';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var1 = this;
            var0 = var1.getMedianVelocity;
            var1 = var0.bind(var1)();
            var0 = arg1;
            var1 = var1 * var0;
            var0 = arg0;
            var0 = var0 + var1;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'computeVisibleIndices';
        var0.key = var5;
        var5 = function arg0() {
            _fun45758: for (var _fun45758_ip = 0;;) switch (_fun45758_ip) {
                case 0:
                    var3 = arg0;
                    var0 = var3.getWindowsSize;
                    var1 = var0.bind(var3)();
                    var0 = var3.isHorizontal;
                    var0 = var0.bind(var3)();
                    var2 = this;
                    var2 = var2.scrollOffset;
                    if (var0) {
                        _fun45758_ip = 42;
                        continue _fun45758
                    }
                case 35:
                    var0 = var1.height;
                    _fun45758_ip = 47;
                    continue _fun45758;
                case 42:
                    var0 = var1.width;
                case 47:
                    var1 = var2 + var0;
                    var0 = var3.getVisibleLayouts;
                    var0 = var0.bind(var3)(var2, var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getEngagedIndices';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.engagedIndices;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'setScrollDirection';
        var0.key = var5;
        var5 = function arg0() {
            _fun45760: for (var _fun45760_ip = 0;;) switch (_fun45760_ip) {
                case 0:
                    var1 = this;
                    var2 = 'forward';
                    var0 = arg0;
                    if (!(var2 !== var0)) {
                        _fun45760_ip = 58;
                        continue _fun45760
                    }
                case 14:
                    var0 = [0, 0, 0];
                    var2 = -0.1;
                    var0[3] = var2;
                    var0[4] = var2;
                    var1.velocityHistory = var0;
                    var0 = 0;
                    var1.velocityIndex = var0;
                    _fun45760_ip = 82;
                    continue _fun45760;
                case 58:
                    var0 = [0, 0, 0, 0.1, 0.1];
                    var1.velocityHistory = var0;
                    var0 = 0;
                    var1.velocityIndex = var0;
                case 82:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'resetVelocityHistory';
        var0.key = var5;
        var4 = function() {
            _fun45761: for (var _fun45761_ip = 0;;) switch (_fun45761_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.isScrollingBackward;
                    var0 = var0.bind(var2)();
                    var1 = var2.setScrollDirection;
                    if (var0) {
                        _fun45761_ip = 33;
                        continue _fun45761
                    }
                case 22:
                    var0 = 'forward';
                    var0 = var1.bind(var2)(var0);
                    _fun45761_ip = 44;
                    continue _fun45761;
                case 33:
                    var0 = 'backward';
                    var0 = var1.bind(var2)(var0);
                case 44:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[8] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.RVEngagedIndicesTrackerImpl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5125, 5113, 5114, 5119, 5129]);