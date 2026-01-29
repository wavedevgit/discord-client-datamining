// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun4475: for (var _fun4475_ip = 0;;) switch (_fun4475_ip) {
        case 0:
            var7 = metroImportDefault;
            var2 = exports;
            var8 = dependencyMap;
            var0 = require;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var8;
            var0 = global;
            var5 = var0.Object;
            var3 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var5)(var2, var0, var1);
            var0 = {};
            var1 = {
                'isHighlighted': true,
                'isPressable': true,
                'numberOfLines': true,
                'ellipsizeMode': true,
                'allowFontScaling': true,
                'dynamicTypeRamp': true,
                'maxFontSizeMultiplier': true,
                'disabled': true,
                'selectable': true,
                'selectionColor': true,
                'adjustsFontSizeToFit': true,
                'minimumFontScale': true,
                'textBreakStrategy': true,
                'onTextLayout': true,
                'dataDetectorType': true,
                'android_hyphenationFrequency': true,
                'lineBreakStrategyIOS': true,
                'gradientColors': true,
                'gradientAngle': true,
                'gradientWidth': true,
                'gradientMode': true,
                'textStrokeWidth': true,
                'textStrokeColor': true
            };
            var0.validAttributes = var1;
            var1 = {};
            var3 = {};
            var5 = 'onTextLayout';
            var3.registrationName = var5;
            var1.topTextLayout = var3;
            var0.directEventTypes = var1;
            var9 = 'RCTText';
            var0.uiViewClassName = var9;
            var _closure1_slot2 = var0;
            var0 = {};
            var1 = {
                'isHighlighted': true,
                'isPressable': true,
                'maxFontSizeMultiplier': true,
                'gradientColors': true,
                'gradientAngle': true,
                'gradientWidth': true,
                'gradientMode': true,
                'textStrokeWidth': true,
                'textStrokeColor': true
            };
            var0.validAttributes = var1;
            var6 = 'RCTVirtualText';
            var0.uiViewClassName = var6;
            var _closure1_slot3 = var0;
            var5 = 0;
            var1 = var8[var5];
            var0 = undefined;
            var3 = var7.bind(var0)(var1);
            var1 = function() { // Environment: var4
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.createViewConfig;
                var0 = _closure1_slot2;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3 = var3.bind(var0)(var9, var1);
            var1 = arg0;
            var1 = var1.RN$Bridgeless;
            if (var1) {
                _fun4475_ip = 206;
                continue _fun4475
            }
        case 177:
            var1 = 2;
            var1 = var8[var1];
            var9 = var7.bind(var0)(var1);
            var1 = var9.hasViewManagerConfig;
            var9 = var1.bind(var9)(var6);
            var1 = var3;
            if (!var9) {
                _fun4475_ip = 226;
                continue _fun4475
            }
        case 206:
            var5 = var8[var5];
            var5 = var7.bind(var0)(var5);
            var4 = function() { // Environment: var4
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.createViewConfig;
                var0 = _closure1_slot3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var5.bind(var0)(var6, var4);
        case 226:
            var2.NativeText = var3;
            var2.NativeVirtualText = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [291, 107, 46]);