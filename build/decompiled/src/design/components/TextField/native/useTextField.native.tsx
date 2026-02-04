// design/components/TextField/native/useTextField.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var3 = function arg0() {
        _fun48103: for (var _fun48103_ip = 0;;) switch (_fun48103_ip) {
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
                    _fun48103_ip = 57;
                    continue _fun48103
                }
            case 54:
                var9 = var1;
            case 57:
                var10 = var6 != var9;
                var4 = '';
                if (!var10) {
                    _fun48103_ip = 71;
                    continue _fun48103
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
                    _fun48103_ip = 115;
                    continue _fun48103
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
                    _fun48104: for (var _fun48104_ip = 0;;) switch (_fun48104_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot2;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var4 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun48104_ip = 36;
                                continue _fun48104
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
                    _fun48105: for (var _fun48105_ip = 0;;) switch (_fun48105_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var0 = undefined;
                            var2 = '';
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun48105_ip = 36;
                                continue _fun48105
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
        _fun48106: for (var _fun48106_ip = 0;;) switch (_fun48106_ip) {
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
                    _fun48107: for (var _fun48107_ip = 0;;) switch (_fun48107_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = var0.current;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun48107_ip = 28;
                                continue _fun48107
                            }
                        case 18:
                            var2 = var3.clear;
                            var2 = var2.bind(var3)();
                        case 28:
                            var1 = _closure2_slot0;
                            var1 = var1.onClear;
                            if (!(var0 != var1)) {
                                _fun48107_ip = 48;
                                continue _fun48107
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
                        _fun48109: for (var _fun48109_ip = 0;;) switch (_fun48109_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun48109_ip = 28;
                                    continue _fun48109
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
                        _fun48110: for (var _fun48110_ip = 0;;) switch (_fun48110_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun48110_ip = 28;
                                    continue _fun48110
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
                        _fun48111: for (var _fun48111_ip = 0;;) switch (_fun48111_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var2 = var0.current;
                                var0 = null;
                                var0 = var0 == var2;
                                var1 = undefined;
                                if (var0) {
                                    _fun48111_ip = 33;
                                    continue _fun48111
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
                        _fun48113: for (var _fun48113_ip = 0;;) switch (_fun48113_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = '';
                                if (!(var0 !== var2)) {
                                    _fun48113_ip = 63;
                                    continue _fun48113
                                }
                            case 11:
                                var1 = _closure2_slot1;
                                var4 = var1.current;
                                var1 = null;
                                if (!(var1 != var4)) {
                                    _fun48113_ip = 46;
                                    continue _fun48113
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
                                _fun48113_ip = 80;
                                continue _fun48113;
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
                        _fun48114: for (var _fun48114_ip = 0;;) switch (_fun48114_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var2 = var0.current;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun48114_ip = 32;
                                    continue _fun48114
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
                        _fun48115: for (var _fun48115_ip = 0;;) switch (_fun48115_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var2 = var0.current;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun48115_ip = 32;
                                    continue _fun48115
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
                        _fun48116: for (var _fun48116_ip = 0;;) switch (_fun48116_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var4 = var0.current;
                                var0 = null;
                                if (!(var0 != var4)) {
                                    _fun48116_ip = 40;
                                    continue _fun48116
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
                    _fun48106_ip = 226;
                    continue _fun48106
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