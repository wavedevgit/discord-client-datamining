// modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun100742: for (var _fun100742_ip = 0;;) switch (_fun100742_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var1 = var0.uiTime;
                var3 = null;
                var1 = var3 != var1;
                if (!var1) {
                    _fun100742_ip = 31;
                    continue _fun100742
                }
            case 21:
                var2 = var0.layoutUITime;
                var1 = var3 != var2;
            case 31:
                if (!var1) {
                    _fun100742_ip = 280;
                    continue _fun100742
                }
            case 37:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var4.bind(var2)(var3);
                var4 = var6.track;
                var2 = _closure1_slot4;
                var3 = var2.REDESIGN_NAV_BAR_RENDERED;
                var2 = {};
                var2.tab = var5;
                var7 = var0.startTime;
                var2.start_time = var7;
                var7 = var0.layoutEffectTime;
                var2.layout_effect_time = var7;
                var7 = var0.layoutUITime;
                var2.layout_ui_thread_time = var7;
                var7 = var0.effectTime;
                var2.effect_time = var7;
                var7 = var0.uiTime;
                var2.ui_thread_time = var7;
                var2 = var4.bind(var6)(var3, var2);
                var4 = _closure1_slot5;
                var3 = var4.info;
                var2 = {};
                var6 = var0.layoutEffectTime;
                var1 = var0.startTime;
                var1 = var6 - var1;
                var2.layoutEffectDuration = var1;
                var6 = var0.effectTime;
                var1 = var0.startTime;
                var1 = var6 - var1;
                var2.effectDuration = var1;
                var6 = var0.layoutUITime;
                var1 = var0.startTime;
                var1 = var6 - var1;
                var2.layoutUIDuration = var1;
                var1 = var0.uiTime;
                var0 = var0.startTime;
                var0 = var1 - var0;
                var2.uiDuration = var0;
                var11 = 'First navigation to';
                var9 = 'took';
                var12 = var4;
                var10 = var5;
                var8 = var2;
                var0 = var12[var3](var11, var10, var9, var8, var7);
            case 280:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'TabsPerformanceTracker';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot5 = var3;
    var3 = {};
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function TabsPerformanceTrackerTsx2(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun100743: for (var _fun100743_ip = 0;;) switch (_fun100743_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot6;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun100743_ip = 52;
                    continue _fun100743
                }
            case 20:
                var1 = _closure1_slot6;
                var0 = {};
                var3 = global;
                var4 = var3.performance;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var0.startTime = var3;
                var1[var2] = var0;
            case 52:
                var0 = undefined;
                return var0;
        }
    };
    var2.trackTabPressed = var3;
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var5 = var3.useLayoutEffect;
        var2 = new Array(1);
        var2[0] = var4;
        var1 = function() { // Environment: var0
            _fun100745: for (var _fun100745_ip = 0;;) switch (_fun100745_ip) {
                case 0:
                    var3 = _closure1_slot6;
                    var2 = _closure2_slot0;
                    var2 = var3[var2];
                    var _closure3_slot0 = var2;
                    var6 = null;
                    if (!(var6 != var2)) {
                        _fun100745_ip = 40;
                        continue _fun100745
                    }
                case 30:
                    var3 = var2.startTime;
                    if (!(var6 == var3)) {
                        _fun100745_ip = 67;
                        continue _fun100745
                    }
                case 40:
                    var5 = _closure1_slot6;
                    var3 = _closure2_slot0;
                    var1 = var5[var3];
                    if (!(var6 == var1)) {
                        _fun100745_ip = 58;
                        continue _fun100745
                    }
                case 56:
                    var1 = {};
                case 58:
                    var5[var3] = var1;
                    _fun100745_ip = 201;
                    continue _fun100745;
                case 67:
                    var1 = global;
                    var3 = var1.performance;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2.layoutEffectTime = var1;
                    var6 = function() {
                        var3 = _closure3_slot0;
                        var0 = global;
                        var1 = var0.performance;
                        var0 = var1.now;
                        var0 = var0.bind(var1)();
                        var3.layoutUITime = var0;
                        var2 = _closure1_slot9;
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1, var3);
                        return var0;
                    };
                    var _closure3_slot1 = var6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 4;
                    var2 = var9[var7];
                    var1 = undefined;
                    var3 = var8.bind(var1)(var2);
                    var2 = var3.runOnUI;
                    var0 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var0 = var1[var0];
                        var1 = undefined;
                        var3 = var2.bind(var1)(var0);
                        var2 = var3.runOnJS;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var0);
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var5 = {};
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.runOnJS;
                    var5.runOnJS = var7;
                    var5.log = var6;
                    var0.__closure = var5;
                    var5 = 7114578957129.0;
                    var0.__workletHash = var5;
                    var4 = _closure1_slot7;
                    var0.__initData = var4;
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.bind(var1)();
                case 201:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var5.bind(var3)(var1, var2);
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun100748: for (var _fun100748_ip = 0;;) switch (_fun100748_ip) {
                case 0:
                    var3 = _closure1_slot6;
                    var2 = _closure2_slot0;
                    var2 = var3[var2];
                    var _closure3_slot0 = var2;
                    var6 = null;
                    if (!(var6 != var2)) {
                        _fun100748_ip = 40;
                        continue _fun100748
                    }
                case 30:
                    var3 = var2.startTime;
                    if (!(var6 == var3)) {
                        _fun100748_ip = 67;
                        continue _fun100748
                    }
                case 40:
                    var5 = _closure1_slot6;
                    var3 = _closure2_slot0;
                    var1 = var5[var3];
                    if (!(var6 == var1)) {
                        _fun100748_ip = 58;
                        continue _fun100748
                    }
                case 56:
                    var1 = {};
                case 58:
                    var5[var3] = var1;
                    _fun100748_ip = 201;
                    continue _fun100748;
                case 67:
                    var1 = global;
                    var3 = var1.performance;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2.effectTime = var1;
                    var6 = function() {
                        var3 = _closure3_slot0;
                        var0 = global;
                        var1 = var0.performance;
                        var0 = var1.now;
                        var0 = var0.bind(var1)();
                        var3.uiTime = var0;
                        var2 = _closure1_slot9;
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1, var3);
                        return var0;
                    };
                    var _closure3_slot1 = var6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 4;
                    var2 = var9[var7];
                    var1 = undefined;
                    var3 = var8.bind(var1)(var2);
                    var2 = var3.runOnUI;
                    var0 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var0 = var1[var0];
                        var1 = undefined;
                        var3 = var2.bind(var1)(var0);
                        var2 = var3.runOnJS;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var0);
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var5 = {};
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.runOnJS;
                    var5.runOnJS = var7;
                    var5.log = var6;
                    var0.__closure = var5;
                    var5 = 331508196106.0;
                    var0.__workletHash = var5;
                    var4 = _closure1_slot8;
                    var0.__initData = var4;
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.bind(var1)();
                case 201:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useTrackTabPerformance = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 3, 795, 3720, 2]);