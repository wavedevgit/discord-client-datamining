// modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: VoicePanelVisualEffectViewInner, environment: var1
        _fun111886: for (var _fun111886_ip = 0;;) switch (_fun111886_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.matchAppTheme;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun111886_ip = 17;
                    continue _fun111886
                }
            case 15:
                var6 = false;
            case 17:
                var4 = 'dark';
                if (!var6) {
                    _fun111886_ip = 26;
                    continue _fun111886
                }
            case 24:
                var4 = undefined;
            case 26:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var2 = var7[var2];
                var8 = var1.bind(var3)(var2);
                var5 = var8.useToken;
                var9 = _closure1_slot1;
                var2 = 3;
                var2 = var7[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.THEME_LOCKED_BLUR_FALLBACK;
                var5 = var5.bind(var8)(var2);
                var2 = _closure1_slot3;
                var0 = 4;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BackgroundBlurFill;
                var0 = {};
                var0.blurTheme = var4;
                var4 = undefined;
                if (var6) {
                    _fun111886_ip = 124;
                    continue _fun111886
                }
            case 121:
                var4 = var5;
            case 124:
                var0.android_fallbackColor = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx';
    var3 = var4.bind(var5)(var3);
    var2.VoicePanelVisualEffectView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3110, 671, 6985, 2]);