// modules/user_settings/native/appearance/FontScaleStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun37522: for (var _fun37522_ip = 0;;) switch (_fun37522_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var0 = global;
            var7 = var0.Object;
            var4 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var7)(var2, var0, var3);
            var0 = 0;
            var3 = var6[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if (var3) {
                _fun37522_ip = 85;
                continue _fun37522
            }
        case 69:
            var4 = {
                'fontScale': 1,
                'isClassicChatFontScaleEnabled': false
            };
            _fun37522_ip = 112;
            continue _fun37522;
        case 85:
            var3 = 1;
            var7 = var6[var3];
            var3 = metroImportDefault;
            var7 = var3.bind(var0)(var7);
            var3 = var7.getCustomFontScale;
            var4 = var3.bind(var7)();
        case 112:
            var3 = {};
            var7 = var4.fontScale;
            var3.persistedFontScale = var7;
            var7 = var4.isClassicChatFontScaleEnabled;
            var3.persistedIsClassicChatFontScaleEnabled = var7;
            var7 = var4.fontScale;
            var3.fontScale = var7;
            var4 = var4.isClassicChatFontScaleEnabled;
            var3.isClassicChatFontScaleEnabled = var4;
            var _closure1_slot0 = var3;
            var4 = 2;
            var4 = var6[var4];
            var7 = var5.bind(var0)(var4);
            var4 = var7.createWithEqualityFn;
            var1 = function() { // Environment: var1
                var0 = _closure1_slot0;
                return var0;
            };
            var1 = var4.bind(var7)(var1);
            var4 = 3;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'modules/user_settings/native/appearance/FontScaleStore.tsx';
            var4 = var5.bind(var6)(var4);
            var2.DEFAULT_FONT_SCALE_STORE_STATE = var3;
            var2.useFontScaleStore = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 4083, 797, 2]);