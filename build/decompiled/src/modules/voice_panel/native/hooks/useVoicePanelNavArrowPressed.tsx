// modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot2;
        var2 = var3.useContext;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 2;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var2.bind(var3)(var1);
        var7 = var1.focused;
        var _closure2_slot0 = var7;
        var4 = var1.setFocused;
        var _closure2_slot1 = var4;
        var5 = var1.dismissPanel;
        var _closure2_slot2 = var5;
        var6 = var1.controlsSpecs;
        var _closure2_slot3 = var6;
        var2 = var3.useCallback;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun110930: for (var _fun110930_ip = 0;;) switch (_fun110930_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = var2.get;
                    var4 = var0.bind(var2)();
                    var3 = null;
                    var5 = var3 == var4;
                    var2 = undefined;
                    var0 = undefined;
                    if (var5) {
                        _fun110930_ip = 34;
                        continue _fun110930
                    }
                case 29:
                    var0 = var4.id;
                case 34:
                    if (!(var3 != var0)) {
                        _fun110930_ip = 73;
                        continue _fun110930
                    }
                case 38:
                    var4 = _closure2_slot3;
                    var0 = var4.get;
                    var0 = var0.bind(var4)();
                    var4 = var0.mode;
                    var0 = _closure1_slot3;
                    var0 = var0.DRAWER;
                    if (!(var4 === var0)) {
                        _fun110930_ip = 83;
                        continue _fun110930
                    }
                case 73:
                    var0 = _closure2_slot2;
                    var0 = var0.bind(var2)();
                    _fun110930_ip = 94;
                    continue _fun110930;
                case 83:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)(var3);
                    var0 = true;
                case 94:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11771, 11772, 2]);