// uikit-native/experimental/Shadows.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/experimental/Shadows.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun44539: for (var _fun44539_ip = 0;;) switch (_fun44539_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.xOffset;
                var6 = var0.yOffset;
                var8 = var0.shadowColorIos;
                var5 = var0.shadowOpacity;
                var4 = var0.shadowRadius;
                var3 = var0.elevation;
                var2 = var0.shadowColorAndroid;
                var9 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var9.bind(var0)(var1);
                var0 = var1.isAndroid;
                var0 = var0.bind(var1)();
                var1 = {};
                if (var0) {
                    _fun44539_ip = 116;
                    continue _fun44539
                }
            case 84:
                var0 = {};
                var0.shadowColor = var8;
                var1.width = var7;
                var1.height = var6;
                var0.shadowOffset = var1;
                var0.shadowOpacity = var5;
                var0.shadowRadius = var4;
                _fun44539_ip = 129;
                continue _fun44539;
            case 116:
                var1.elevation = var3;
                var1.shadowColor = var2;
                var0 = var1;
            case 129:
                return var0;
        }
    };
    var2.generateBoxShadowStyle = var1;
    var1 = {
        'xOffset': 0,
        'yOffset': 4,
        'shadowColorIos': '#000000',
        'shadowOpacity': 0.3,
        'shadowRadius': 4.65,
        'elevation': 8,
        'shadowColorAndroid': '#000000'
    };
    var2.EIGHT_DP_ELEVATION_SHADOW_PARAMS = var1;
    var1 = {
        'xOffset': 0,
        'yOffset': 2,
        'shadowColorIos': '#000000',
        'shadowOpacity': 0.23,
        'shadowRadius': 2.62,
        'elevation': 4,
        'shadowColorAndroid': '#000000'
    };
    var2.FOUR_DP_ELEVATION_SHADOW_PARAMS = var1;
    var1 = {
        'xOffset': 0,
        'yOffset': 7,
        'shadowColorIos': '#000',
        'shadowOpacity': 0.36,
        'shadowRadius': 9.51,
        'elevation': 15,
        'shadowColorAndroid': '#000'
    };
    var2.EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS = var1;
    var1 = {
        'xOffset': 0,
        'yOffset': 0,
        'shadowColorIos': '#000',
        'shadowOpacity': 0,
        'shadowRadius': 0,
        'elevation': 0,
        'shadowColorAndroid': '#000'
    };
    var2.NO_ELEVATION_SHADOW_PARAMS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 2]);