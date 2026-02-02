// modules/app_analytics/useAnalyticsLocations.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1() {
        _fun50743: for (var _fun50743_ip = 0;;) switch (_fun50743_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var1 = var4.length;
                var2 = 0;
                if (!(var2 !== var1)) {
                    _fun50743_ip = 81;
                    continue _fun50743
                }
            case 17:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var1 = var3.flatten;
                var3 = var1.bind(var3)(var4);
                var1 = new Array(0);
                var8 = var1;
                var7 = var0;
                var6 = 0;
                var6 = arraySpread(var8, var7, var6);
                var8 = var1;
                var7 = var3;
                var2 = arraySpread(var8, var7, var6);
                return var1;
            case 81:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var4 = var6[var3];
    var3 = arg3;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var4 = var7.createContext;
    var3 = new Array(0);
    var3 = var4.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_analytics/useAnalyticsLocations.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        var3 = 0;
        var11 = 0;
        var8 = copyRestArgs(var11);
        var _closure2_slot0 = var8;
        var6 = _closure1_slot3;
        var2 = var6.useState;
        var7 = var2.bind(var6)(var8);
        var5 = _closure1_slot2;
        var4 = undefined;
        var2 = 2;
        var2 = var5.bind(var4)(var7, var2);
        var7 = var2[var3];
        var _closure2_slot1 = var7;
        var3 = 1;
        var2 = var2[var3];
        var _closure2_slot2 = var2;
        var2 = var6.useContext;
        var1 = _closure1_slot5;
        var1 = var2.bind(var6)(var1);
        var _closure2_slot3 = var1;
        var5 = var6.useMemo;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var1;
        var2 = function() { // Environment: var0
            var3 = _closure1_slot6;
            var2 = _closure2_slot3;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var2 = var5.bind(var6)(var2, var4);
        var5 = var6.useMemo;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var1;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot6;
            var2 = _closure2_slot3;
            var5 = _closure2_slot1;
            var4 = var5.slice;
            var1 = var5.length;
            var0 = 1;
            var1 = var1 - var0;
            var0 = 0;
            var1 = var4.bind(var5)(var0, var1);
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4 = var5.bind(var6)(var1, var4);
        var5 = var6.useEffect;
        var1 = new Array(2);
        var1[0] = var8;
        var1[1] = var7;
        var0 = function() { // Environment: var0
            _fun50747: for (var _fun50747_ip = 0;;) switch (_fun50747_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var0)(var3, var2);
                    if (var2) {
                        _fun50747_ip = 58;
                        continue _fun50747
                    }
                case 45:
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                case 58:
                    return var0;
            }
        };
        var0 = var5.bind(var6)(var0, var1);
        var0 = {};
        var0.analyticsLocations = var2;
        var0.sourceAnalyticsLocations = var4;
        var1 = var4.length;
        var1 = var1 - var3;
        var1 = var4[var1];
        var0.parentAnalyticsLocation = var1;
        var1 = var2.length;
        var1 = var1 - var3;
        var1 = var2[var1];
        var0.newestAnalyticsLocation = var1;
        return var0;
    };
    var2.default = var4;
    var2.LocationContext = var3;
    var1 = function arg0() {
        var1 = arg0;
        var0 = var1.children;
        var4 = var1.value;
        var3 = _closure1_slot4;
        var1 = _closure1_slot5;
        var2 = var1.Provider;
        var1 = {};
        var1.value = var4;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.AnalyticsLocationProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 22, 644, 2]);