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
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var4 = var1.AverageWindow;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var6 = 5;
            var7 = var3;
            var1 = new var7[var4](var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.renderTimeAvgWindow = var1;
            var1 = -1;
            var2.lastTimerStartedAt = var1;
            var1 = 32;
            var2.maxRenderTime = var1;
            var1 = 16;
            var2.defaultRenderTime = var1;
            var1 = 0;
            var2.rendersWithoutCommit = var1;
            var1 = 40;
            var2.maxRendersWithoutCommit = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'startTracking';
        var0.key = var1;
        var1 = function() {
            _fun45654: for (var _fun45654_ip = 0;;) switch (_fun45654_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.rendersWithoutCommit;
                    var0 = var0 + 1;
                    var2.rendersWithoutCommit = var0;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.PlatformConfig;
                    var1 = var1.trackAverageRenderTimeForOffsetProjection;
                    if (!var1) {
                        _fun45654_ip = 74;
                        continue _fun45654
                    }
                case 58:
                    var4 = var2.lastTimerStartedAt;
                    var3 = -1;
                    var1 = var3 === var4;
                case 74:
                    if (!var1) {
                        _fun45654_ip = 100;
                        continue _fun45654
                    }
                case 77:
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2.lastTimerStartedAt = var1;
                case 100:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'markRenderComplete';
        var0.key = var5;
        var5 = function() {
            _fun45655: for (var _fun45655_ip = 0;;) switch (_fun45655_ip) {
                case 0:
                    var2 = this;
                    var0 = 0;
                    var2.rendersWithoutCommit = var0;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.PlatformConfig;
                    var1 = var1.trackAverageRenderTimeForOffsetProjection;
                    if (!var1) {
                        _fun45655_ip = 67;
                        continue _fun45655
                    }
                case 51:
                    var4 = var2.lastTimerStartedAt;
                    var3 = -1;
                    var1 = var3 !== var4;
                case 67:
                    if (!var1) {
                        _fun45655_ip = 126;
                        continue _fun45655
                    }
                case 70:
                    var4 = var2.renderTimeAvgWindow;
                    var3 = var4.addValue;
                    var1 = global;
                    var5 = var1.Date;
                    var1 = var5.now;
                    var5 = var1.bind(var5)();
                    var1 = var2.lastTimerStartedAt;
                    var1 = var5 - var1;
                    var1 = var3.bind(var4)(var1);
                    var1 = -1;
                    var2.lastTimerStartedAt = var1;
                case 126:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'hasExceededMaxRendersWithoutCommit';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.rendersWithoutCommit;
            var0 = var0.maxRendersWithoutCommit;
            var0 = var1 >= var0;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getRawValue';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.renderTimeAvgWindow;
            var0 = var0.currentValue;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getAverageRenderTime';
        var0.key = var5;
        var4 = function() {
            _fun45658: for (var _fun45658_ip = 0;;) switch (_fun45658_ip) {
                case 0:
                    var1 = this;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.PlatformConfig;
                    var0 = var0.trackAverageRenderTimeForOffsetProjection;
                    if (var0) {
                        _fun45658_ip = 51;
                        continue _fun45658
                    }
                case 43:
                    var0 = var1.defaultRenderTime;
                    _fun45658_ip = 124;
                    continue _fun45658;
                case 51:
                    var5 = global;
                    var4 = var5.Math;
                    var3 = var4.min;
                    var2 = var1.maxRenderTime;
                    var7 = var5.Math;
                    var6 = var7.max;
                    var8 = var5.Math;
                    var5 = var8.round;
                    var1 = var1.renderTimeAvgWindow;
                    var1 = var1.currentValue;
                    var5 = var5.bind(var8)(var1);
                    var1 = 16;
                    var1 = var6.bind(var7)(var5, var1);
                    var0 = var3.bind(var4)(var2, var1);
                case 124:
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
    var2.RenderTimeTracker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5113, 5114, 5118, 5119]);