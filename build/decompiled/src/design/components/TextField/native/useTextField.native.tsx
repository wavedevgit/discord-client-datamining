// design/components/TextField/native/useTextField.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var3 = function arg0() {
        _fun47936: for (var _fun47936_ip = 0;;) switch (_fun47936_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.value;
                var9 = var2.defaultValue;
                var3 = var2.onChange;
                var _closure2_slot0 = var3;
                var7 = var2.onClear;
                var _closure2_slot1 = var7;
                var8 = _closure1_slot1;
                var5 = var8.useState;
                var6 = null;
                if (!(var6 != var1)) {
                    _fun47936_ip = 57;
                    continue _fun47936
                }
            case 54:
                var9 = var1;
            case 57:
                var10 = var6 != var9;
                var4 = '';
                if (!var10) {
                    _fun47936_ip = 71;
                    continue _fun47936
                }
            case 68:
                var4 = var9;
            case 71:
                var9 = var5.bind(var8)(var4);
                var8 = _closure1_slot0;
                var5 = undefined;
                var4 = 2;
                var9 = var8.bind(var5)(var9, var4);
                var5 = 0;
                var4 = var9[var5];
                var8 = 1;
                var8 = var9[var8];
                var _closure2_slot2 = var8;
                if (!(var6 != var1)) {
                    _fun47936_ip = 115;
                    continue _fun47936
                }
            case 112:
                var4 = var1;
            case 115:
                var1 = var4.length;
                var1 = var1 > var5;
                var8 = _closure1_slot1;
                var6 = var8.useCallback;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function(arg0) { // Environment: var0
                    _fun47937: for (var _fun47937_ip = 0;;) switch (_fun47937_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot2;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var4 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun47937_ip = 36;
                                continue _fun47937
                            }
                        case 27:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)(var2);
                        case 36:
                            return var0;
                    }
                };
                var3 = var6.bind(var8)(var3, var5);
                var _closure2_slot3 = var3;
                var6 = _closure1_slot1;
                var5 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var3;
                var2[1] = var7;
                var0 = function() { // Environment: var0
                    _fun47938: for (var _fun47938_ip = 0;;) switch (_fun47938_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var0 = undefined;
                            var2 = '';
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun47938_ip = 36;
                                continue _fun47938
                            }
                        case 28:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 36:
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var0, var2);
                var0 = {};
                var0.value = var4;
                var0.setTextValue = var3;
                var0.clear = var2;
                var0.hasValue = var1;
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var6 = var5[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var6);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TextField/native/useTextField.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useTextFieldState = var3;
    var1 = function arg0, arg1() {
        _fun47939: for (var _fun47939_ip = 0;;) switch (_fun47939_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var5 = _closure1_slot1;
                var3 = var5.useRef;
                var1 = null;
                var1 = var3.bind(var5)(var1);
                var _closure2_slot1 = var1;
                var7 = _closure1_slot1;
                var6 = var7.useCallback;
                var5 = new Array(2);
                var5[0] = var1;
                var3 = var2.onClear;
                var5[1] = var3;
                var3 = function() { // Environment: var0
                    _fun47940: for (var _fun47940_ip = 0;;) switch (_fun47940_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = var0.current;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun47940_ip = 28;
                                continue _fun47940
                            }
                        case 18:
                            var2 = var3.clear;
                            var2 = var2.bind(var3)();
                        case 28:
                            var1 = _closure2_slot0;
                            var1 = var1.onClear;
                            if (!(var0 != var1)) {
                                _fun47940_ip = 48;
                                continue _fun47940
                            }
                        case 42:
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 48:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var6.bind(var7)(var3, var5);
                var6 = _closure1_slot2;
                var3 = {};
                var11 = var3;
                var10 = var2;
                var5 = copyDataProperties(var11, var10);
                var5 = 'onClear';
                var3[var5] = var7;
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var _closure2_slot2 = var3;
                var8 = _closure1_slot1;
                var7 = var8.useImperativeHandle;
                var6 = new Array(2);
                var6[0] = var1;
                var6[1] = var3;
                var4 = arg1;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = function() {
                        _fun47942: for (var _fun47942_ip = 0;;) switch (_fun47942_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun47942_ip = 28;
                                    continue _fun47942
                                }
                            case 18:
                                var0 = var1.blur;
                                var0 = var0.bind(var1)();
                            case 28:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.blur = var2;
                    var2 = function() {
                        _fun47943: for (var _fun47943_ip = 0;;) switch (_fun47943_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun47943_ip = 28;
                                    continue _fun47943
                                }
                            case 18:
                                var0 = var1.focus;
                                var0 = var0.bind(var1)();
                            case 28:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.focus = var2;
                    var2 = function() {
                        _fun47944: for (var _fun47944_ip = 0;;) switch (_fun47944_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var2 = var0.current;
                                var0 = null;
                                var0 = var0 == var2;
                                var1 = undefined;
                                if (var0) {
                                    _fun47944_ip = 33;
                                    continue _fun47944
                                }
                            case 23:
                                var0 = var2.isFocused;
                                var1 = var0.bind(var2)();
                            case 33:
                                var0 = true;
                                var0 = var0 === var1;
                                return var0;
                        }
                    };
                    var0.isFocused = var2;
                    var2 = function() {
                        var0 = _closure2_slot2;
                        var0 = var0.value;
                        return var0;
                    };
                    var0.getText = var2;
                    var2 = function arg0() {
                        _fun47946: for (var _fun47946_ip = 0;;) switch (_fun47946_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = '';
                                if (!(var0 !== var2)) {
                                    _fun47946_ip = 63;
                                    continue _fun47946
                                }
                            case 11:
                                var1 = _closure2_slot1;
                                var4 = var1.current;
                                var1 = null;
                                if (!(var1 != var4)) {
                                    _fun47946_ip = 46;
                                    continue _fun47946
                                }
                            case 29:
                                var3 = var4.setNativeProps;
                                var1 = {};
                                var1.text = var2;
                                var1 = var3.bind(var4)(var1);
                            case 46:
                                var1 = _closure2_slot2;
                                var0 = var1.setTextValue;
                                var0 = var0.bind(var1)(var2);
                                _fun47946_ip = 80;
                                continue _fun47946;
                            case 63:
                                var1 = _closure2_slot2;
                                var0 = var1.clear;
                                var0 = var0.bind(var1)();
                            case 80:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.setText = var2;
                    var2 = function arg0() {
                        _fun47947: for (var _fun47947_ip = 0;;) switch (_fun47947_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var2 = var0.current;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun47947_ip = 32;
                                    continue _fun47947
                                }
                            case 18:
                                var1 = var2.measure;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 32:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.measure = var2;
                    var2 = function arg0() {
                        _fun47948: for (var _fun47948_ip = 0;;) switch (_fun47948_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var2 = var0.current;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun47948_ip = 32;
                                    continue _fun47948
                                }
                            case 18:
                                var1 = var2.measureInWindow;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 32:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.measureInWindow = var2;
                    var1 = function arg0, arg1, arg2() {
                        _fun47949: for (var _fun47949_ip = 0;;) switch (_fun47949_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var4 = var0.current;
                                var0 = null;
                                if (!(var0 != var4)) {
                                    _fun47949_ip = 40;
                                    continue _fun47949
                                }
                            case 18:
                                var3 = var4.measureLayout;
                                var2 = arg0;
                                var1 = arg1;
                                var0 = arg2;
                                var0 = var3.bind(var4)(var2, var1, var0);
                            case 40:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.measureLayout = var1;
                    return var0;
                };
                var0 = var7.bind(var8)(var4, var0, var6);
                var0 = {};
                var0.innerRef = var1;
                var0.state = var3;
                var1 = {};
                var11 = var1;
                var10 = var2;
                var4 = copyDataProperties(var11, var10);
                var4 = 'onChange';
                var1[var4] = var5;
                var4 = var3.setTextValue;
                var3 = 'onChangeText';
                var1[var3] = var4;
                var3 = var2.isDisabled;
                var4 = !var3;
                var3 = 'editable';
                var1[var3] = var4;
                var3 = var2.isDisabled;
                var4 = !var3;
                if (!var4) {
                    _fun47939_ip = 226;
                    continue _fun47939
                }
            case 220:
                var4 = var2.focusable;
            case 226:
                var3 = 'focusable';
                var1[var3] = var4;
                var3 = var2.isDisabled;
                var2 = 'aria-disabled';
                var1[var2] = var3;
                var0.inputProps = var1;
                return var0;
        }
    };
    var2.useTextField = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 2]);