// modules/user_settings/native/premium_marketing/utils/PremiumNitroHomeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
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
    var3 = var3.AnalyticEvents;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/premium_marketing/utils/PremiumNitroHomeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun59336: for (var _fun59336_ip = 0;;) switch (_fun59336_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.nativeEvent;
                var5 = var1.trackedType;
                var1 = var1.hasTrackedScrolledToBottom;
                var6 = var0.layoutMeasurement;
                var3 = var0.contentOffset;
                var2 = var0.contentSize;
                var0 = var1.current;
                if (var0) {
                    _fun59336_ip = 123;
                    continue _fun59336
                }
            case 47:
                var4 = global;
                var8 = var4.Math;
                var7 = var8.ceil;
                var6 = var6.height;
                var6 = var7.bind(var8)(var6);
                var8 = var4.Math;
                var7 = var8.ceil;
                var3 = var3.y;
                var3 = var7.bind(var8)(var3);
                var3 = var6 + var3;
                var6 = var4.Math;
                var4 = var6.floor;
                var2 = var2.height;
                var2 = var4.bind(var6)(var2);
                var0 = var3 < var2;
            case 123:
                if (var0) {
                    _fun59336_ip = 186;
                    continue _fun59336
                }
            case 126:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var0 = _closure1_slot2;
                var2 = var0.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM;
                var0 = {};
                var0.type = var5;
                var0 = var3.bind(var4)(var2, var0);
                var0 = true;
                var1.current = var0;
            case 186:
                var0 = undefined;
                return var0;
        }
    };
    var2.trackIfScrolledToBottom = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 2]);