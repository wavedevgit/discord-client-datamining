// modules/chat_input/native/ChatInputNativeCommands.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.findNodeHandle;
    var _closure1_slot3 = var6;
    var1 = var1.NativeModules;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun89428: for (var _fun89428_ip = 0;;) switch (_fun89428_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun89428_ip = 116;
                    continue _fun89428
                }
            case 9:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = var4.isAndroid;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun89428_ip = 79;
                    continue _fun89428
                }
            case 47:
                var1 = _closure1_slot4;
                var5 = var1.DCDChatInputManager;
                var4 = var5.backspace;
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var2);
                var1 = var4.bind(var5)(var1);
                _fun89428_ip = 116;
                continue _fun89428;
            case 79:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Commands;
                var0 = var1.backspace;
                var0 = var0.bind(var1)(var2);
            case 116:
                var0 = undefined;
                return var0;
        }
    };
    var1.backspace = var6;
    var6 = function arg0() {
        _fun89429: for (var _fun89429_ip = 0;;) switch (_fun89429_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun89429_ip = 116;
                    continue _fun89429
                }
            case 9:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = var4.isAndroid;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun89429_ip = 79;
                    continue _fun89429
                }
            case 47:
                var1 = _closure1_slot4;
                var5 = var1.DCDChatInputManager;
                var4 = var5.blur;
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var2);
                var1 = var4.bind(var5)(var1);
                _fun89429_ip = 116;
                continue _fun89429;
            case 79:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Commands;
                var0 = var1.blur;
                var0 = var0.bind(var1)(var2);
            case 116:
                var0 = undefined;
                return var0;
        }
    };
    var1.blur = var6;
    var6 = function arg0() {
        _fun89430: for (var _fun89430_ip = 0;;) switch (_fun89430_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun89430_ip = 77;
                    continue _fun89430
                }
            case 9:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.isAndroid;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun89430_ip = 81;
                    continue _fun89430
                }
            case 47:
                var1 = _closure1_slot4;
                var2 = var1.DCDChatInputManager;
                var1 = var2.closeCustomKeyboard;
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4);
                var0 = var1.bind(var2)(var0);
            case 77:
                var0 = undefined;
                return var0;
            case 81:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'closeCustomKeyboard is not supported/needed on Android';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1.closeCustomKeyboard = var6;
    var6 = function arg0, arg1() {
        _fun89431: for (var _fun89431_ip = 0;;) switch (_fun89431_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun89431_ip = 124;
                    continue _fun89431
                }
            case 9:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 1;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var4.bind(var2)(var1);
                var1 = var4.isAndroid;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun89431_ip = 83;
                    continue _fun89431
                }
            case 47:
                var1 = global;
                var5 = var1.Error;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = 'flushText is not supported/needed on iOS';
                var8 = var4;
                var1 = new var8[var5](var7, var6);
                var1 = var1 instanceof Object ? var1 : var4;
                throw var1;
            case 83:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.Commands;
                var1 = var2.flushText;
                var0 = arg1;
                var0 = var1.bind(var2)(var3, var0);
            case 124:
                var0 = undefined;
                return var0;
        }
    };
    var1.flushText = var6;
    var6 = function arg0, arg1, arg2() {
        _fun89432: for (var _fun89432_ip = 0;;) switch (_fun89432_ip) {
            case 0:
                var5 = arg0;
                var8 = arg1;
                var7 = arg2;
                var _closure2_slot0 = var8;
                var _closure2_slot1 = var7;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun89432_ip = 334;
                    continue _fun89432
                }
            case 28:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var3);
                var3 = var6.isAndroid;
                var3 = var3.bind(var6)();
                if (var3) {
                    _fun89432_ip = 250;
                    continue _fun89432
                }
            case 69:
                var3 = _closure1_slot3;
                var9 = var3.bind(var1)(var5);
                if (!(var0 != var9)) {
                    _fun89432_ip = 183;
                    continue _fun89432
                }
            case 82:
                var3 = _closure1_slot4;
                var11 = var3.DCDChatInputManager;
                var10 = var11.markTextInputChanged;
                var6 = _closure1_slot3;
                var6 = var6.bind(var1)(var5);
                var6 = var10.bind(var11)(var6);
                var6 = var3.DCDChatInputManager;
                var3 = var6.getText;
                var6 = var3.bind(var6)(var9);
                var3 = var6.then;
                var7 = var3.bind(var6)(var7);
                var6 = var7.catch;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 4;
                var3 = var10[var3];
                var3 = var9.bind(var1)(var3);
                var3 = var3.captureException;
                var3 = var6.bind(var7)(var3);
                _fun89432_ip = 332;
                continue _fun89432;
            case 183:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 4;
                var3 = var7[var3];
                var7 = var6.bind(var1)(var3);
                var6 = var7.captureException;
                var3 = global;
                var10 = var3.Error;
                var3 = var10.prototype;
                var9 = Object.create(var3, {
                    constructor: {
                        value: var10
                    }
                });
                var13 = 'inputRef is null';
                var14 = var9;
                var3 = new var14[var10](var13, var12);
                var3 = var3 instanceof Object ? var3 : var9;
                var3 = var6.bind(var7)(var3);
                _fun89432_ip = 332;
                continue _fun89432;
            case 250:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var7 = var3.bind(var1)(var4);
                var4 = var7.createNonce;
                var4 = var4.bind(var7)();
                var _closure2_slot2 = var4;
                var7 = var8.set;
                var2 = function(arg0) { // Environment: var2
                    var3 = _closure2_slot0;
                    var2 = var3.delete;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = var7.bind(var8)(var4, var2);
                var2 = 2;
                var2 = var6[var2];
                var2 = var3.bind(var1)(var2);
                var3 = var2.Commands;
                var2 = var3.flushText;
                var2 = var2.bind(var3)(var5, var4);
            case 332:
                return var1;
            case 334:
                return var0;
        }
    };
    var1.getText = var6;
    var6 = function arg0() {
        _fun89434: for (var _fun89434_ip = 0;;) switch (_fun89434_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun89434_ip = 116;
                    continue _fun89434
                }
            case 9:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = var4.isAndroid;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun89434_ip = 79;
                    continue _fun89434
                }
            case 47:
                var1 = _closure1_slot4;
                var5 = var1.DCDChatInputManager;
                var4 = var5.focus;
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var2);
                var1 = var4.bind(var5)(var1);
                _fun89434_ip = 116;
                continue _fun89434;
            case 79:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Commands;
                var0 = var1.focus;
                var0 = var0.bind(var1)(var2);
            case 116:
                var0 = undefined;
                return var0;
        }
    };
    var1.focus = var6;
    var6 = function arg0() {
        _fun89435: for (var _fun89435_ip = 0;;) switch (_fun89435_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun89435_ip = 120;
                    continue _fun89435
                }
            case 9:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = var4.isAndroid;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun89435_ip = 83;
                    continue _fun89435
                }
            case 47:
                var1 = global;
                var5 = var1.Error;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var6 = 'openCustomKeyboard is not supported/needed on iOS';
                var7 = var4;
                var1 = new var7[var5](var6, var5);
                var1 = var1 instanceof Object ? var1 : var4;
                throw var1;
            case 83:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Commands;
                var0 = var1.openCustomKeyboard;
                var0 = var0.bind(var1)(var2);
            case 120:
                var0 = undefined;
                return var0;
        }
    };
    var1.openCustomKeyboard = var6;
    var6 = function arg0() {
        _fun89436: for (var _fun89436_ip = 0;;) switch (_fun89436_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun89436_ip = 116;
                    continue _fun89436
                }
            case 9:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = var4.isAndroid;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun89436_ip = 79;
                    continue _fun89436
                }
            case 47:
                var1 = _closure1_slot4;
                var5 = var1.DCDChatInputManager;
                var4 = var5.openSystemKeyboard;
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var2);
                var1 = var4.bind(var5)(var1);
                _fun89436_ip = 116;
                continue _fun89436;
            case 79:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Commands;
                var0 = var1.openSystemKeyboard;
                var0 = var0.bind(var1)(var2);
            case 116:
                var0 = undefined;
                return var0;
        }
    };
    var1.openSystemKeyboard = var6;
    var6 = function arg0, arg1() {
        _fun89437: for (var _fun89437_ip = 0;;) switch (_fun89437_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun89437_ip = 121;
                    continue _fun89437
                }
            case 12:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 1;
                var1 = var4[var1];
                var4 = undefined;
                var5 = var5.bind(var4)(var1);
                var1 = var5.isAndroid;
                var1 = var1.bind(var5)();
                if (var1) {
                    _fun89437_ip = 83;
                    continue _fun89437
                }
            case 50:
                var1 = _closure1_slot4;
                var6 = var1.DCDChatInputManager;
                var5 = var6.setText;
                var1 = _closure1_slot3;
                var1 = var1.bind(var4)(var3);
                var1 = var5.bind(var6)(var1, var2);
                _fun89437_ip = 121;
                continue _fun89437;
            case 83:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 2;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.Commands;
                var0 = var1.setText;
                var0 = var0.bind(var1)(var3, var2);
            case 121:
                var0 = undefined;
                return var0;
        }
    };
    var1.setText = var6;
    var6 = function arg0, arg1, arg2() {
        _fun89438: for (var _fun89438_ip = 0;;) switch (_fun89438_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = arg2;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun89438_ip = 126;
                    continue _fun89438
                }
            case 15:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 1;
                var1 = var5[var1];
                var5 = undefined;
                var6 = var6.bind(var5)(var1);
                var1 = var6.isAndroid;
                var1 = var1.bind(var6)();
                if (var1) {
                    _fun89438_ip = 87;
                    continue _fun89438
                }
            case 53:
                var1 = _closure1_slot4;
                var7 = var1.DCDChatInputManager;
                var6 = var7.setSelectedRange;
                var1 = _closure1_slot3;
                var1 = var1.bind(var5)(var4);
                var1 = var6.bind(var7)(var1, var3, var2);
                _fun89438_ip = 126;
                continue _fun89438;
            case 87:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 2;
                var0 = var6[var0];
                var0 = var1.bind(var5)(var0);
                var1 = var0.Commands;
                var0 = var1.setSelectedRange;
                var0 = var0.bind(var1)(var4, var3, var2);
            case 126:
                var0 = undefined;
                return var0;
        }
    };
    var1.setSelectedRange = var6;
    var6 = function arg0, arg1, arg2() {
        _fun89439: for (var _fun89439_ip = 0;;) switch (_fun89439_ip) {
            case 0:
                var4 = arg0;
                var8 = arg1;
                var5 = arg2;
                var6 = null;
                if (!(var6 != var4)) {
                    _fun89439_ip = 160;
                    continue _fun89439
                }
            case 18:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun89439_ip = 90;
                    continue _fun89439
                }
            case 56:
                var2 = _closure1_slot4;
                var7 = var2.DCDChatInputManager;
                var3 = var7.updateTextBlocks;
                var2 = _closure1_slot3;
                var2 = var2.bind(var0)(var4);
                var2 = var3.bind(var7)(var2, var8, var5);
                _fun89439_ip = 160;
                continue _fun89439;
            case 90:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.Commands;
                var2 = var3.updateTextBlocks;
                var1 = global;
                var7 = var1.JSON;
                var1 = var7.stringify;
                var1 = var1.bind(var7)(var8);
                var6 = var6 != var5;
                var0 = undefined;
                if (!var6) {
                    _fun89439_ip = 153;
                    continue _fun89439
                }
            case 150:
                var0 = var5;
            case 153:
                var0 = var2.bind(var3)(var4, var1, var0);
            case 160:
                var0 = undefined;
                return var0;
        }
    };
    var1.updateTextBlocks = var6;
    var3 = function arg0, arg1() {
        _fun89440: for (var _fun89440_ip = 0;;) switch (_fun89440_ip) {
            case 0:
                var9 = arg0;
                var1 = arg1;
                var8 = var1.location;
                var7 = var1.length;
                var6 = var1.text;
                var11 = var1.nodes;
                var0 = undefined;
                if (!(var11 === var0)) {
                    _fun89440_ip = 37;
                    continue _fun89440
                }
            case 33:
                var11 = new Array(0);
            case 37:
                var5 = var1.keepCursorPosition;
                if (!(var5 === var0)) {
                    _fun89440_ip = 49;
                    continue _fun89440
                }
            case 47:
                var5 = false;
            case 49:
                var4 = var1.editId;
                var1 = null;
                if (!(var1 != var9)) {
                    _fun89440_ip = 228;
                    continue _fun89440
                }
            case 64:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 1;
                var2 = var10[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun89440_ip = 152;
                    continue _fun89440
                }
            case 100:
                var2 = _closure1_slot4;
                var10 = var2.DCDChatInputManager;
                var3 = var10.replaceRange;
                var2 = _closure1_slot3;
                var18 = var2.bind(var0)(var9);
                var19 = var10;
                var17 = var8;
                var16 = var7;
                var15 = var6;
                var14 = var11;
                var13 = var5;
                var12 = var4;
                var2 = var19[var3](var18, var17, var16, var15, var14, var13, var12, var11);
                _fun89440_ip = 228;
                continue _fun89440;
            case 152:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.Commands;
                var2 = var3.replaceRange;
                var1 = global;
                var10 = var1.JSON;
                var1 = var10.stringify;
                var14 = var1.bind(var10)(var11);
                var19 = var3;
                var18 = var9;
                var17 = var8;
                var16 = var7;
                var15 = var6;
                var13 = var5;
                var12 = var4;
                var1 = var19[var2](var18, var17, var16, var15, var14, var13, var12, var11);
            case 228:
                return var0;
        }
    };
    var1.replaceRange = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/ChatInputNativeCommands.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 11630, 6564, 1207, 2]);