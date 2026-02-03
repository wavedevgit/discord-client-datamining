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
    var0 = function arg0() {
        _fun46498: for (var _fun46498_ip = 0;;) switch (_fun46498_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var1 = var2[var1];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.isMetaQuest;
                var4 = var1.bind(var3)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                if (var4) {
                    _fun46498_ip = 248;
                    continue _fun46498
                }
            case 52:
                var4 = 5;
                var4 = var3[var4];
                var5 = var1.bind(var2)(var4);
                var4 = var5.isAndroid;
                var4 = var4.bind(var5)();
                if (var4) {
                    _fun46498_ip = 79;
                    continue _fun46498
                }
            case 77:
                return var6;
            case 79:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 6;
                var0 = var7[var0];
                var4 = var5.bind(var2)(var0);
                var0 = var4.getState;
                var0 = var0.bind(var4)();
                var4 = var0.safeAreaInsets;
                var0 = 7;
                var0 = var7[var0];
                var5 = var5.bind(var2)(var0);
                var0 = var5.getStableSafeAreaInsets;
                var7 = var0.bind(var5)();
                var5 = null;
                var0 = var6;
                if (!(var5 != var7)) {
                    _fun46498_ip = 246;
                    continue _fun46498
                }
            case 146:
                var8 = var7.bottom;
                var5 = var4.bottom;
                if (!(var8 === var5)) {
                    _fun46498_ip = 202;
                    continue _fun46498
                }
            case 160:
                var8 = var7.top;
                var5 = var4.top;
                if (!(var8 === var5)) {
                    _fun46498_ip = 202;
                    continue _fun46498
                }
            case 174:
                var8 = var7.left;
                var5 = var4.left;
                if (!(var8 === var5)) {
                    _fun46498_ip = 202;
                    continue _fun46498
                }
            case 188:
                var8 = var7.right;
                var5 = var4.right;
                if (!(var8 !== var5)) {
                    _fun46498_ip = 243;
                    continue _fun46498
                }
            case 202:
                var5 = {};
                var8 = var7.bottom;
                var5.bottom = var8;
                var7 = var7.top;
                var5.top = var7;
                var7 = var6.left;
                var5.left = var7;
                var6 = var6.right;
                var5.right = var6;
                var4 = var5;
            case 243:
                var0 = var4;
            case 246:
                return var0;
            case 248:
                var0 = 4;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.META_QUEST_SAFE_AREA_INSETS;
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safe_area/SafeAreaProvider.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
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
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 6;
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
            _fun46503: for (var _fun46503_ip = 0;;) switch (_fun46503_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    if (var1) {
                        _fun46503_ip = 70;
                        continue _fun46503
                    }
                case 15:
                    var1 = _closure2_slot1;
                    var0 = true;
                    var1.current = var0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.batchUpdates;
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 6;
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
        var0 = 8;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.SafeAreaProvider;
        var0 = {};
        var6 = 4;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4106, 1570, 478, 1569, 1580, 1571, 802, 2]);