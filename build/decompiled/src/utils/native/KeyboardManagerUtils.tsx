// utils/native/KeyboardManagerUtils.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/KeyboardManagerUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: dismissGlobalKeyboard, environment: var1
        _fun17609: for (var _fun17609_ip = 0;;) switch (_fun17609_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17609_ip = 60;
                    continue _fun17609
                }
            case 38:
                var2 = _closure1_slot3;
                var3 = var2.KeyboardManager;
                var2 = var3.dismissGlobalKeyboard;
                var2 = var2.bind(var3)();
                _fun17609_ip = 113;
                continue _fun17609;
            case 60:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 2;
                var2 = var2[var3];
                var4 = var4.bind(var0)(var2);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun17609_ip = 113;
                    continue _fun17609
                }
            case 86:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var2 = var2.bind(var0)(var1);
                var1 = var2.dismissGlobalKeyboard;
                var1 = var1.bind(var2)();
            case 113:
                return var0;
        }
    };
    var2.dismissGlobalKeyboard = var3;
    var3 = function() { // Original name: clearCurrentFocusAndDismissKeyboard, environment: var1
        _fun17610: for (var _fun17610_ip = 0;;) switch (_fun17610_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun17610_ip = 91;
                    continue _fun17610
                }
            case 38:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 2;
                var2 = var2[var3];
                var4 = var4.bind(var0)(var2);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun17610_ip = 91;
                    continue _fun17610
                }
            case 64:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var2 = var2.bind(var0)(var1);
                var1 = var2.clearCurrentFocusAndDismissKeyboard;
                var1 = var1.bind(var2)();
            case 91:
                return var0;
        }
    };
    var2.clearCurrentFocusAndDismissKeyboard = var3;
    var1 = function(arg0) { // Original name: onKeyboardChanged, environment: var1
        _fun17611: for (var _fun17611_ip = 0;;) switch (_fun17611_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17611_ip = 91;
                    continue _fun17611
                }
            case 38:
                var2 = _closure1_slot3;
                var2 = var2.KeyboardManager;
                var3 = var2.onKeyboardChanged;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun17611_ip = 148;
                    continue _fun17611
                }
            case 60:
                var2 = _closure1_slot3;
                var4 = var2.KeyboardManager;
                var3 = var4.onKeyboardChanged;
                var2 = global;
                var2 = var2.open;
                var2 = var3.bind(var4)(var2);
                _fun17611_ip = 148;
                continue _fun17611;
            case 91:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 2;
                var2 = var2[var3];
                var4 = var4.bind(var0)(var2);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun17611_ip = 148;
                    continue _fun17611
                }
            case 117:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.onKeyboardChanged;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
            case 148:
                return var0;
        }
    };
    var2.onKeyboardChanged = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 1583, 2]);