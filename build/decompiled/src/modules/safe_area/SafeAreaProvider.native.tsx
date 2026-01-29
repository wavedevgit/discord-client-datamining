// modules/safe_area/SafeAreaProvider.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: getSafeAreaInsets, environment: var1
        _fun46280: for (var _fun46280_ip = 0;;) switch (_fun46280_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.isAndroid;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun46280_ip = 43;
                    continue _fun46280
                }
            case 41:
                return var3;
            case 43:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 4;
                var0 = var5[var0];
                var1 = var2.bind(var4)(var0);
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var1 = var0.safeAreaInsets;
                var0 = 5;
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.getStableSafeAreaInsets;
                var4 = var0.bind(var2)();
                var2 = null;
                var0 = var3;
                if (!(var2 != var4)) {
                    _fun46280_ip = 210;
                    continue _fun46280
                }
            case 110:
                var5 = var4.bottom;
                var2 = var1.bottom;
                if (!(var5 === var2)) {
                    _fun46280_ip = 166;
                    continue _fun46280
                }
            case 124:
                var5 = var4.top;
                var2 = var1.top;
                if (!(var5 === var2)) {
                    _fun46280_ip = 166;
                    continue _fun46280
                }
            case 138:
                var5 = var4.left;
                var2 = var1.left;
                if (!(var5 === var2)) {
                    _fun46280_ip = 166;
                    continue _fun46280
                }
            case 152:
                var5 = var4.right;
                var2 = var1.right;
                if (!(var5 !== var2)) {
                    _fun46280_ip = 207;
                    continue _fun46280
                }
            case 166:
                var2 = {};
                var5 = var4.bottom;
                var2.bottom = var5;
                var4 = var4.top;
                var2.top = var4;
                var4 = var3.left;
                var2.left = var4;
                var3 = var3.right;
                var2.right = var3;
                var1 = var2;
            case 207:
                var0 = var1;
            case 210:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = {
        'position': 'absolute',
        'width': 0,
        'height': 0
    };
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safe_area/SafeAreaProvider.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: SafeAreaReporter, environment: var1
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = var2.useSafeAreaInsets;
        var6 = var1.bind(var2)();
        var _closure2_slot0 = var6;
        var4 = _closure1_slot3;
        var7 = var4.useLayoutEffect;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.setState;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var3 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var0.safeAreaInsets = var1;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var7.bind(var4)(var1, var2);
        var2 = var4.useRef;
        var1 = false;
        var1 = var2.bind(var4)(var1);
        var _closure2_slot1 = var1;
        var2 = var4.useCallback;
        var1 = new Array(1);
        var1[0] = var6;
        var0 = function() { // Environment: var0
            _fun46285: for (var _fun46285_ip = 0;;) switch (_fun46285_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    if (var1) {
                        _fun46285_ip = 70;
                        continue _fun46285
                    }
                case 15:
                    var1 = _closure2_slot1;
                    var0 = true;
                    var1.current = var0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.batchUpdates;
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.setState;
                        var1 = function() { // Environment: var1
                            var0 = {};
                            var3 = _closure1_slot7;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var0.safeAreaInsets = var1;
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 70:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = _closure1_slot6;
        var0.style = var5;
        var0.onLayout = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.SafeAreaReporter = var3;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var5 = var0.children;
        var4 = var0.style;
        var3 = _closure1_slot5;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 6;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.SafeAreaProvider;
        var0 = {};
        var6 = 8;
        var6 = var8[var6];
        var6 = var7.bind(var2)(var6);
        var6 = var6.INITIAL_SAFE_AREA_METRICS;
        var0.initialMetrics = var6;
        var0.children = var5;
        var0.style = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.SafeAreaProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 478, 1569, 1580, 1571, 802, 1570, 2]);