// modules/keyboard/native/useKeyboardIsOpen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function() {
        _fun48127: for (var _fun48127_ip = 0;;) switch (_fun48127_ip) {
            case 0:
                var0 = arguments[0];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun48127_ip = 16;
                    continue _fun48127
                }
            case 9:
                var0 = _closure1_slot4;
            case 16:
                var1 = var0.includeCustomKeyboard;
                if (!(var1 === var5)) {
                    _fun48127_ip = 28;
                    continue _fun48127
                }
            case 26:
                var1 = false;
            case 28:
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var3 = 2;
                var0 = var0[var3];
                var4 = var4.bind(var5)(var0);
                var0 = var4.getState;
                var0 = var0.bind(var4)();
                var4 = var0.systemKeyboardOpen;
                var0 = var4;
                if (!var1) {
                    _fun48127_ip = 147;
                    continue _fun48127
                }
            case 73:
                var1 = var4;
                if (var4) {
                    _fun48127_ip = 144;
                    continue _fun48127
                }
            case 79:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getState;
                var3 = var3.bind(var4)();
                var3 = var3.keyboardType;
                var4 = _closure1_slot0;
                var2 = 1;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.KeyboardTypes;
                var2 = var2.SYSTEM;
                var1 = var3 !== var2;
            case 144:
                var0 = var1;
            case 147:
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = {};
    var _closure1_slot4 = var4;
    var4 = function arg0() {
        var0 = arg0;
        var0 = var0.systemKeyboardOpen;
        return var0;
    };
    var _closure1_slot5 = var4;
    var4 = function arg0() {
        _fun48129: for (var _fun48129_ip = 0;;) switch (_fun48129_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.systemKeyboardOpen;
                if (var0) {
                    _fun48129_ip = 59;
                    continue _fun48129
                }
            case 12:
                var2 = var1.keyboardType;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.KeyboardTypes;
                var1 = var1.SYSTEM;
                var0 = var2 !== var1;
            case 59:
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/useKeyboardIsOpen.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        _fun48130: for (var _fun48130_ip = 0;;) switch (_fun48130_ip) {
            case 0:
                var0 = arguments[0];
                var2 = undefined;
                if (!(var0 === var2)) {
                    _fun48130_ip = 16;
                    continue _fun48130
                }
            case 9:
                var0 = _closure1_slot4;
            case 16:
                var0 = var0.includeCustomKeyboard;
                if (!(var0 === var2)) {
                    _fun48130_ip = 28;
                    continue _fun48130
                }
            case 26:
                var0 = false;
            case 28:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                if (var0) {
                    _fun48130_ip = 60;
                    continue _fun48130
                }
            case 54:
                var0 = _closure1_slot5;
                _fun48130_ip = 64;
                continue _fun48130;
            case 60:
                var0 = _closure1_slot6;
            case 64:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var4;
    var3 = function arg0() {
        _fun48131: for (var _fun48131_ip = 0;;) switch (_fun48131_ip) {
            case 0:
                var1 = arguments[1];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun48131_ip = 25;
                    continue _fun48131
                }
            case 18:
                var1 = _closure1_slot4;
            case 25:
                var1 = var1.includeCustomKeyboard;
                if (!(var1 === var2)) {
                    _fun48131_ip = 37;
                    continue _fun48131
                }
            case 35:
                var1 = false;
            case 37:
                var _closure2_slot1 = var1;
                var1 = _closure1_slot3;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var3 = _closure1_slot7;
                    var0 = {};
                    var1 = _closure2_slot1;
                    var0.includeCustomKeyboard = var1;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var0);
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.subscribeToKeyboardIsOpen = var3;
    var2.getKeyboardIsOpen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1466, 1567, 1467, 2]);