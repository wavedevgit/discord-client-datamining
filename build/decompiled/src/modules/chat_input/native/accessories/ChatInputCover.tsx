// modules/chat_input/native/accessories/ChatInputCover.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var _closure1_slot3 = var7;
    var7 = var3.TouchableWithoutFeedback;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun90482: for (var _fun90482_ip = 0;;) switch (_fun90482_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.keyboardType;
                var _closure2_slot0 = var6;
                var9 = var1.onSelectKeyboard;
                var _closure2_slot1 = var9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var4 = undefined;
                var5 = var2.bind(var4)(var1);
                var1 = var5.useIsScreenReaderEnabled;
                var1 = var1.bind(var5)();
                var _closure2_slot2 = var1;
                var10 = _closure1_slot2;
                var8 = var10.useMemo;
                var5 = new Array(3);
                var5[0] = var1;
                var5[1] = var6;
                var5[2] = var9;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = function() {
                        var0 = {};
                        var1 = function arg0() {
                            _fun90485: for (var _fun90485_ip = 0;;) switch (_fun90485_ip) {
                                case 0:
                                    var0 = arg0;
                                    if (!var0) {
                                        _fun90485_ip = 54;
                                        continue _fun90485
                                    }
                                case 6:
                                    var2 = _closure2_slot0;
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var1 = 4;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var1 = var4.bind(var1)(var3);
                                    var1 = var1.KeyboardTypes;
                                    var1 = var1.SYSTEM;
                                    var0 = var2 !== var1;
                                case 54:
                                    if (!var0) {
                                        _fun90485_ip = 64;
                                        continue _fun90485
                                    }
                                case 57:
                                    var0 = _closure2_slot2;
                                case 64:
                                    if (!var0) {
                                        _fun90485_ip = 122;
                                        continue _fun90485
                                    }
                                case 67:
                                    var2 = _closure2_slot1;
                                    var1 = {};
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var0 = 4;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var3 = var4.bind(var0)(var3);
                                    var3 = var3.KeyboardTypes;
                                    var3 = var3.SYSTEM;
                                    var1.type = var3;
                                    var0 = var2.bind(var0)(var1);
                                case 122:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0.focused = var1;
                        return var0;
                    };
                    var0.imperativeHandle = var2;
                    var1 = function() {
                        var2 = _closure2_slot1;
                        var1 = {};
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 4;
                        var3 = var3[var0];
                        var0 = undefined;
                        var3 = var4.bind(var0)(var3);
                        var3 = var3.KeyboardTypes;
                        var3 = var3.SYSTEM;
                        var1.type = var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.openSystemKeyboard = var1;
                    return var0;
                };
                var0 = var8.bind(var10)(var0, var5);
                var9 = var0.imperativeHandle;
                var5 = var0.openSystemKeyboard;
                var8 = var10.useImperativeHandle;
                var0 = arg1;
                var0 = var8.bind(var10)(var0, var9);
                var0 = 4;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.KeyboardTypes;
                var3 = var0.SYSTEM;
                var0 = null;
                if (!(var6 !== var3)) {
                    _fun90482_ip = 222;
                    continue _fun90482
                }
            case 159:
                var0 = null;
                if (var1) {
                    _fun90482_ip = 222;
                    continue _fun90482
                }
            case 164:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {
                    'accessible': false,
                    'accessibilityRole': 'none'
                };
                var1.onPress = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var7 = _closure1_slot3;
                var7 = var7.absoluteFill;
                var5.style = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 222:
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = 'ChatInputCover';
    var3.displayName = var1;
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/accessories/ChatInputCover.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4070, 1567, 2]);