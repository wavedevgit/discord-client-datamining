// modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun99917: for (var _fun99917_ip = 0;;) switch (_fun99917_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.impressionName;
                var2 = var0.impressionProperties;
                var1 = 'function';
                var0 = typeof var2;
                var3 = var2;
                if (!(var1 === var0)) {
                    _fun99917_ip = 45;
                    continue _fun99917
                }
            case 29:
                var0 = arg1;
                var1 = var0.params;
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
            case 45:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 0;
                var1 = var7[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = {};
                var6 = _closure1_slot0;
                var5 = 1;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.ImpressionTypes;
                var5 = var5.PAGE;
                var1.type = var5;
                var1.name = var4;
                var1.properties = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.useTrackNavigatorScreenImpression = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5216, 481, 2]);