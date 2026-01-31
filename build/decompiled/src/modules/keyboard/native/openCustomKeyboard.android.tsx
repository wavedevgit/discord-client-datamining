// modules/keyboard/native/openCustomKeyboard.android.tsx
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
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard/native/openCustomKeyboard.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var _closure2_slot0 = var2;
        var2 = var0.chatInputRef;
        var _closure2_slot1 = var2;
        var2 = var0.chatInputNativeRef;
        var _closure2_slot2 = var2;
        var6 = var0.keyboardParams;
        var _closure2_slot3 = var6;
        var0 = var0.secondaryTextFieldRef;
        var _closure2_slot4 = var0;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 0;
        var2 = var4[var0];
        var0 = undefined;
        var5 = var3.bind(var0)(var2);
        var2 = var5.setKeyboardType;
        var2 = var2.bind(var5)(var6);
        var2 = 1;
        var2 = var4[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.runAfterInteractions;
        var1 = function() { // Environment: var1
            _fun89587: for (var _fun89587_ip = 0;;) switch (_fun89587_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var2 = var0.current;
                    var0 = var2.blur;
                    var0 = var0.bind(var2)();
                    var0 = _closure2_slot4;
                    var5 = null;
                    var2 = var5 == var0;
                    var0 = undefined;
                    var3 = undefined;
                    if (var2) {
                        _fun89587_ip = 55;
                        continue _fun89587
                    }
                case 39:
                    var4 = _closure2_slot4;
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var3 = var4;
                case 55:
                    if (var2) {
                        _fun89587_ip = 68;
                        continue _fun89587
                    }
                case 58:
                    var2 = var3.blur;
                    var2 = var2.bind(var3)();
                case 68:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 2;
                    var3 = var4[var3];
                    var8 = var5.bind(var0)(var3);
                    var7 = var8.openPortalKeyboard;
                    var3 = _closure2_slot3;
                    var6 = var3.type;
                    var5 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var7.bind(var8)(var6, var5, var3);
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.openCustomKeyboard;
                    var1 = _closure2_slot2;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1467, 5813, 3874, 11563, 2]);