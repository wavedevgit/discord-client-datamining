// modules/icymi/useICYMIEmptyLoadingAnalytics.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/useICYMIEmptyLoadingAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useICYMIEmptyLoadingAnalytics, environment: var1
        var1 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot2;
        var5 = var3.useRef;
        var2 = null;
        var2 = var5.bind(var3)(var2);
        var _closure2_slot2 = var2;
        var5 = var3.useEffect;
        var2 = new Array(2);
        var2[0] = var1;
        var2[1] = var4;
        var1 = function() { // Environment: var0
            _fun104581: for (var _fun104581_ip = 0;;) switch (_fun104581_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (!var1) {
                        _fun104581_ip = 189;
                        continue _fun104581
                    }
                case 13:
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    if (var2) {
                        _fun104581_ip = 125;
                        continue _fun104581
                    }
                case 24:
                    var3 = var1.current;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun104581_ip = 189;
                        continue _fun104581
                    }
                case 38:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var4 = var3.bind(var4)();
                    var0 = _closure2_slot2;
                    var3 = var0.current;
                    var6 = var4 - var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 1;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = var3.ICYMIAnalytics;
                    var4 = var5.trackFeedEmptyLoadingComplete;
                    var3 = {};
                    var3.dwellTimeMs = var6;
                    var3 = var4.bind(var5)(var3);
                    var0.current = var2;
                    _fun104581_ip = 189;
                    continue _fun104581;
                case 125:
                    var0 = global;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1.current = var0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.ICYMIAnalytics;
                    var0 = var1.trackFeedEmptyLoadingSeen;
                    var0 = var0.bind(var1)();
                case 189:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var5.bind(var3)(var1, var2);
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun104582: for (var _fun104582_ip = 0;;) switch (_fun104582_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun104582_ip = 110;
                        continue _fun104582
                    }
                case 10:
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun104582_ip = 110;
                        continue _fun104582
                    }
                case 25:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var0 = _closure2_slot2;
                    var2 = var0.current;
                    var5 = var3 - var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 1;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.ICYMIAnalytics;
                    var3 = var4.trackFeedEmptyLoadingAbandoned;
                    var2 = {};
                    var2.dwellTimeMs = var5;
                    var2 = var3.bind(var4)(var2);
                    var0.current = var1;
                case 110:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useICYMIEmptyLoadingAnalytics = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8836, 2]);