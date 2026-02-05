// modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun111653: for (var _fun111653_ip = 0;;) switch (_fun111653_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = {};
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var6 = 1;
                var8 = var4[var6];
                var5 = undefined;
                var8 = var7.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_MOD_STRONG;
                var1.backgroundColor = var8;
                var0.iconBg = var1;
                var1 = {};
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.colors;
                var4 = var4.WHITE;
                var1.backgroundColor = var4;
                var0.iconBgSelected = var1;
                var1 = {};
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var7 = var4.colors;
                if (var2) {
                    _fun111653_ip = 118;
                    continue _fun111653
                }
            case 110:
                var4 = var7.WHITE;
                _fun111653_ip = 124;
                continue _fun111653;
            case 118:
                var4 = var7.INTERACTIVE_TEXT_DEFAULT;
            case 124:
                var1.color = var4;
                var0.iconFill = var1;
                var1 = {};
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var8 = var4[var6];
                var8 = var7.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.ICON_MUTED;
                var1.color = var8;
                var0.iconFillMuted = var1;
                var1 = {};
                var8 = var4[var6];
                var8 = var7.bind(var5)(var8);
                var8 = var8.unsafe_rawColors;
                var8 = var8.RED_400;
                var1.color = var8;
                var0.iconFillRed = var1;
                var1 = {};
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.colors;
                var4 = var4.BLACK;
                var1.color = var4;
                var0.iconFillSelected = var1;
                var1 = {};
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.colors;
                if (var2) {
                    _fun111653_ip = 269;
                    continue _fun111653
                }
            case 261:
                var2 = var3.WHITE;
                _fun111653_ip = 275;
                continue _fun111653;
            case 269:
                var2 = var3.CONTROL_BRAND_FOREGROUND;
            case 275:
                var1.backgroundColor = var2;
                var0.iconBadgeIndicator = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var1 = var2[var1];
        var2 = undefined;
        var5 = var3.bind(var2)(var1);
        var4 = var5.useDerivedStateFromSharedValue;
        var3 = arg0;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.drawerMode;
            return var0;
        };
        var1 = var4.bind(var5)(var3, var1);
        var0 = _closure1_slot3;
        var0 = var0.bind(var2)(var1);
        return var0;
    };
    var2.useVoicePanelButtonStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1297, 671, 8212, 2]);