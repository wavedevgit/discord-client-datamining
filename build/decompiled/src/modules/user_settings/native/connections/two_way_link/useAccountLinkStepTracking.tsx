// modules/user_settings/native/connections/two_way_link/useAccountLinkStepTracking.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun51601: for (var _fun51601_ip = 0;;) switch (_fun51601_ip) {
            case 0:
                var6 = arg0;
                var1 = arg1;
                var9 = null;
                if (!(var9 != var6)) {
                    _fun51601_ip = 137;
                    continue _fun51601
                }
            case 15:
                var0 = var6.index;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var7 = undefined;
                var5 = var4.bind(var7)(var3);
                var4 = var5.track;
                var2 = _closure1_slot3;
                var3 = var2.ACCOUNT_LINK_STEP;
                var2 = {};
                var8 = arg3;
                var2.location_stack = var8;
                var8 = var1.current;
                var8 = var9 != var8;
                if (!var8) {
                    _fun51601_ip = 97;
                    continue _fun51601
                }
            case 82:
                var9 = var6.routeNames;
                var8 = var1.current;
                var7 = var9[var8];
            case 97:
                var2.previous_step = var7;
                var6 = var6.routeNames;
                var6 = var6[var0];
                var2.current_step = var6;
                var6 = arg2;
                var2.platform_type = var6;
                var2 = var4.bind(var5)(var3, var2);
                var1.current = var0;
            case 137:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/connections/two_way_link/useAccountLinkStepTracking.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var5 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot2;
        var2 = var4.useRef;
        var0 = null;
        var0 = var2.bind(var4)(var0);
        var _closure2_slot2 = var0;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var0 = function(arg0) { // Environment: var1
            var5 = _closure1_slot4;
            var8 = _closure2_slot2;
            var7 = _closure2_slot0;
            var6 = _closure2_slot1;
            var0 = undefined;
            var9 = arg0;
            var10 = undefined;
            var1 = var10[var5](var9, var8, var7, var6, var5);
            return var0;
        };
        var0 = var3.bind(var4)(var0, var2);
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            var5 = _closure1_slot4;
            var4 = {};
            var0 = 0;
            var4.index = var0;
            var0 = ['landing'];
            var4.routeNames = var0;
            var8 = _closure2_slot2;
            var7 = _closure2_slot0;
            var6 = _closure2_slot1;
            var0 = undefined;
            var10 = undefined;
            var9 = var4;
            var1 = var10[var5](var9, var8, var7, var6, var5);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useAccountLinkStepTracking = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 795, 2]);