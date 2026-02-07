// modules/quests/QuestBarRenderDelayTracker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = null;
            var2.startTime = var1;
            var2.questId = var1;
            var2.timeoutTimer = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'clearTimeoutTimer';
        var0.key = var1;
        var1 = function() {
            _fun47708: for (var _fun47708_ip = 0;;) switch (_fun47708_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.timeoutTimer;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun47708_ip = 42;
                        continue _fun47708
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.timeoutTimer;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.timeoutTimer = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'sendMetric';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun47709: for (var _fun47709_ip = 0;;) switch (_fun47709_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg1;
                    var4 = arg2;
                    var11 = global;
                    var1 = var11.Math;
                    var0 = var1.random;
                    var1 = var0.bind(var1)();
                    var0 = 0.1;
                    if (!(!(var1 > var0))) {
                        _fun47709_ip = 225;
                        continue _fun47709
                    }
                case 44:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 3;
                    var1 = var7[var1];
                    var2 = undefined;
                    var9 = var3.bind(var2)(var1);
                    var8 = var9.distribution;
                    var1 = {};
                    var12 = _closure1_slot0;
                    var10 = 4;
                    var10 = var7[var10];
                    var10 = var12.bind(var2)(var10);
                    var10 = var10.MetricEvents;
                    var10 = var10.QUEST_BAR_RENDER_DELAY;
                    var1.name = var10;
                    var10 = var11.HermesInternal;
                    var12 = var10.concat;
                    var10 = 'quest_id:';
                    var12 = var12.bind(var10)(var6);
                    var10 = new Array(2);
                    var10[0] = var12;
                    var11 = var11.HermesInternal;
                    var12 = var11.concat;
                    var11 = 'timeout:';
                    var11 = var12.bind(var11)(var5);
                    var10[1] = var11;
                    var1.tags = var10;
                    var1 = var8.bind(var9)(var1, var4);
                    var1 = 5;
                    var1 = var7[var1];
                    var3 = var3.bind(var2)(var1);
                    var2 = var3.track;
                    var0 = _closure1_slot5;
                    var1 = var0.QUEST_BAR_RENDER_DELAY;
                    var0 = {};
                    var0.quest_id = var6;
                    var0.timeout = var5;
                    var0.duration = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 225:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'startTracking';
        var0.key = var5;
        var5 = function arg0() {
            var3 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var3;
            var0 = var2.clearTracking;
            var0 = var0.bind(var2)();
            var0 = global;
            var5 = var0.performance;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var2.startTime = var4;
            var2.questId = var3;
            var4 = var0.setTimeout;
            var0 = undefined;
            var3 = function() { // Environment: var1
                var3 = _closure3_slot0;
                var2 = var3.stopTracking;
                var1 = _closure3_slot1;
                var0 = true;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var1 = 30000;
            var1 = var4.bind(var0)(var3, var1);
            var2.timeoutTimer = var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'stopTracking';
        var0.key = var5;
        var5 = function arg0() {
            _fun47712: for (var _fun47712_ip = 0;;) switch (_fun47712_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arguments[1];
                    var2 = this;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun47712_ip = 17;
                        continue _fun47712
                    }
                case 15:
                    var4 = false;
                case 17:
                    var3 = var2.startTime;
                    var1 = null;
                    if (!(var1 !== var3)) {
                        _fun47712_ip = 185;
                        continue _fun47712
                    }
                case 32:
                    var1 = var2.questId;
                    if (!(var1 === var5)) {
                        _fun47712_ip = 185;
                        continue _fun47712
                    }
                case 45:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 6;
                    var1 = var6[var1];
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.getState;
                    var3 = var1.bind(var3)();
                    var1 = 'active';
                    if (!(var1 === var3)) {
                        _fun47712_ip = 175;
                        continue _fun47712
                    }
                case 86:
                    var7 = 30000;
                    var6 = var7;
                    if (var4) {
                        _fun47712_ip = 141;
                        continue _fun47712
                    }
                case 98:
                    var1 = global;
                    var8 = var1.Math;
                    var3 = var8.round;
                    var9 = var1.performance;
                    var1 = var9.now;
                    var9 = var1.bind(var9)();
                    var1 = var2.startTime;
                    var1 = var9 - var1;
                    var6 = var3.bind(var8)(var1);
                case 141:
                    var1 = global;
                    var3 = var1.Math;
                    var1 = var3.min;
                    var3 = var1.bind(var3)(var6, var7);
                    var1 = var2.sendMetric;
                    var1 = var1.bind(var2)(var5, var4, var3);
                case 175:
                    var1 = var2.clearTracking;
                    var1 = var1.bind(var2)();
                case 185:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'clearTracking';
        var0.key = var5;
        var4 = function() {
            var1 = this;
            var0 = var1.clearTimeoutTimer;
            var0 = var0.bind(var1)();
            var0 = null;
            var1.startTime = var0;
            var1.questId = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/QuestBarRenderDelayTracker.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 660, 4263, 4268, 795, 5335, 2]);