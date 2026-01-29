// modules/keyboard/native/useSystemKeyboardHeight.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = function(arg0) { // Original name: SYSTEM_KEYBOARD_HEIGHT_GETTER, environment: var1
        var0 = arg0;
        var0 = var0.keyboardHeight;
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = function(arg0) { // Original name: SYSTEM_KEYBOARD_HEIGHT_GETTER_IGNORING_KEYBOARD, environment: var1
        var0 = arg0;
        var0 = var0.keyboardHeightExcludingSafeAreaInsets;
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = {};
    var4 = false;
    var0.excludeSafeAreaInsets = var4;
    var _closure1_slot4 = var0;
    var0 = 1;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard/native/useSystemKeyboardHeight.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useSystemKeyboardHeight, environment: var1
        _fun17618: for (var _fun17618_ip = 0;;) switch (_fun17618_ip) {
            case 0:
                var0 = arguments[0];
                var2 = undefined;
                if (!(var0 === var2)) {
                    _fun17618_ip = 16;
                    continue _fun17618
                }
            case 9:
                var0 = _closure1_slot4;
            case 16:
                var0 = var0.excludeSafeAreaInsets;
                if (!(var0 === var2)) {
                    _fun17618_ip = 28;
                    continue _fun17618
                }
            case 26:
                var0 = false;
            case 28:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 0;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                if (var0) {
                    _fun17618_ip = 59;
                    continue _fun17618
                }
            case 53:
                var0 = _closure1_slot2;
                _fun17618_ip = 63;
                continue _fun17618;
            case 59:
                var0 = _closure1_slot3;
            case 63:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function() { // Original name: getSystemKeyboardHeight, environment: var1
        _fun17619: for (var _fun17619_ip = 0;;) switch (_fun17619_ip) {
            case 0:
                var0 = arguments[0];
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun17619_ip = 16;
                    continue _fun17619
                }
            case 9:
                var0 = _closure1_slot4;
            case 16:
                var0 = var0.excludeSafeAreaInsets;
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                if (var0) {
                    _fun17619_ip = 65;
                    continue _fun17619
                }
            case 57:
                var0 = var1.keyboardHeight;
                _fun17619_ip = 71;
                continue _fun17619;
            case 65:
                var0 = var1.keyboardHeightExcludingSafeAreaInsets;
            case 71:
                return var0;
        }
    };
    var2.getSystemKeyboardHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1467, 2]);