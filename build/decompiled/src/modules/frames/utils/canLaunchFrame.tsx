// modules/frames/utils/canLaunchFrame.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _canLaunchFrame, environment: var1
        _fun42788: for (var _fun42788_ip = 0;;) switch (_fun42788_ip) {
            case 0:
                var2 = arg0;
                var4 = null;
                var0 = var4 != var2;
                if (!var0) {
                    _fun42788_ip = 175;
                    continue _fun42788
                }
            case 15:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var7 = undefined;
                var5 = var5.bind(var7)(var1);
                var1 = var5.isRealApplication;
                var5 = var1.bind(var5)(var2);
                var1 = false;
                if (!var5) {
                    _fun42788_ip = 155;
                    continue _fun42788
                }
            case 56:
                var2 = var2.flags;
                var4 = var4 != var2;
                var6 = 0;
                if (!var4) {
                    _fun42788_ip = 73;
                    continue _fun42788
                }
            case 70:
                var6 = var2;
            case 73:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 3;
                var2 = var8[var4];
                var10 = var5.bind(var7)(var2);
                var9 = var10.hasFlag;
                var2 = _closure1_slot3;
                var2 = var2.EMBEDDED;
                var2 = var9.bind(var10)(var6, var2);
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.hasFlag;
                var3 = _closure1_slot3;
                var3 = var3.CONTEXTLESS_ACTIVITY;
                var3 = var4.bind(var5)(var6, var3);
                if (!var2) {
                    _fun42788_ip = 152;
                    continue _fun42788
                }
            case 149:
                var2 = var3;
            case 152:
                var1 = var2;
            case 155:
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun42788_ip = 172;
                    continue _fun42788
                }
            case 164:
                var2 = arg1;
                var1 = var2.enabled;
            case 172:
                var0 = var1;
            case 175:
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
    var3 = var3.ApplicationFlags;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/utils/canLaunchFrame.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: canLaunchFrame, environment: var1
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 4;
        var0 = var2[var0];
        var2 = undefined;
        var4 = var1.bind(var2)(var0);
        var1 = var4.getContextlessFramesMobileExperiment;
        var0 = 'canLaunchFrame';
        var1 = var1.bind(var4)(var0);
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.canLaunchFrame = var3;
    var1 = function(arg0) { // Original name: useCanLaunchFrame, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useContextlessFramesMobileExperiment;
        var2 = 'canLaunchFrame';
        var4 = var3.bind(var4)(var2);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useCanLaunchFrame = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 4629, 1384, 12193, 2]);