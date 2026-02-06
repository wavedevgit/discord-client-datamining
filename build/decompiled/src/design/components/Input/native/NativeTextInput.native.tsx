// design/components/Input/native/NativeTextInput.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getKeyboardIsOpen;
            var3 = var3.bind(var4)();
            var _closure3_slot0 = var3;
            var1 = _closure1_slot8;
            var0 = function(arg0) { // Environment: var0
                _fun48133: for (var _fun48133_ip = 0;;) switch (_fun48133_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.systemKeyboardOpen;
                        var2 = _closure3_slot0;
                        var2 = var1 === var2;
                        if (var2) {
                            _fun48133_ip = 26;
                            continue _fun48133
                        }
                    case 23:
                        var2 = var1;
                    case 26:
                        if (var2) {
                            _fun48133_ip = 57;
                            continue _fun48133
                        }
                    case 29:
                        var2 = _closure2_slot0;
                        var3 = var2.current;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun48133_ip = 57;
                            continue _fun48133
                        }
                    case 47:
                        var2 = var3.blur;
                        var2 = var2.bind(var3)();
                    case 57:
                        _closure3_slot0 = var1;
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.Pressable;
    var _closure1_slot4 = var9;
    var9 = var4.TextInput;
    var _closure1_slot5 = var9;
    var9 = var4.StyleSheet;
    var _closure1_slot6 = var9;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.KeyboardThemes;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = var7.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun48134: for (var _fun48134_ip = 0;;) switch (_fun48134_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot3;
                var2 = var3.useRef;
                var4 = null;
                var9 = var2.bind(var3)(var4);
                var2 = _closure1_slot12;
                var3 = undefined;
                var2 = var2.bind(var3)(var9);
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 8;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var13 = var2.bind(var3)(var0);
                var2 = function arg0, arg1() {
                    var1 = arg0;
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var6 = var1.value;
                    var _closure3_slot1 = var6;
                    var2 = var1.defaultValue;
                    var _closure3_slot2 = var2;
                    var5 = _closure1_slot3;
                    var4 = var5.useEffect;
                    var3 = new Array(3);
                    var3[0] = var7;
                    var3[1] = var6;
                    var3[2] = var2;
                    var2 = function() { // Environment: var0
                        _fun48136: for (var _fun48136_ip = 0;;) switch (_fun48136_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0.current;
                                var5 = null;
                                if (!(var5 != var2)) {
                                    _fun48136_ip = 53;
                                    continue _fun48136
                                }
                            case 18:
                                var1 = var2.setNativeProps;
                                var0 = {};
                                var3 = _closure3_slot1;
                                if (!(var5 == var3)) {
                                    _fun48136_ip = 40;
                                    continue _fun48136
                                }
                            case 34:
                                var3 = _closure3_slot2;
                                _fun48136_ip = 44;
                                continue _fun48136;
                            case 40:
                                var3 = _closure3_slot1;
                            case 44:
                                var0.text = var3;
                                var0 = var1.bind(var2)(var0);
                            case 53:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.useMountLayoutEffect;
                    var0 = function() { // Environment: var0
                        _fun48137: for (var _fun48137_ip = 0;;) switch (_fun48137_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0.current;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun48137_ip = 39;
                                    continue _fun48137
                                }
                            case 18:
                                var1 = var2.setNativeProps;
                                var0 = {};
                                var3 = _closure3_slot1;
                                var0.text = var3;
                                var0 = var1.bind(var2)(var0);
                            case 39:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0);
                    var0 = {};
                    var0.value = var1;
                    var0.defaultValue = var1;
                    return var0;
                };
                var12 = var2.bind(var3)(var0, var9);
                var1 = function arg0() {
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 7;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var0 = var4.useIsScreenReaderEnabled;
                    var0 = var0.bind(var4)();
                    var _closure3_slot1 = var0;
                    var6 = _closure1_slot3;
                    var5 = var6.useCallback;
                    var4 = new Array(1);
                    var4[0] = var3;
                    var3 = function() { // Environment: var1
                        _fun48139: for (var _fun48139_ip = 0;;) switch (_fun48139_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0.current;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun48139_ip = 33;
                                    continue _fun48139
                                }
                            case 23:
                                var1 = var2.focus;
                                var0 = var1.bind(var2)();
                            case 33:
                                return var0;
                        }
                    };
                    var3 = var5.bind(var6)(var3, var4);
                    var _closure3_slot2 = var3;
                    var4 = _closure1_slot3;
                    var3 = var4.useMemo;
                    var2 = new Array(1);
                    var2[0] = var0;
                    var0 = function() { // Environment: var1
                        _fun48140: for (var _fun48140_ip = 0;;) switch (_fun48140_ip) {
                            case 0:
                                var0 = {};
                                var1 = _closure1_slot6;
                                var3 = var1.absoluteFillObject;
                                var4 = var0;
                                var1 = copyDataProperties(var4, var3);
                                var1 = _closure3_slot1;
                                var2 = 'flex';
                                if (!var1) {
                                    _fun48140_ip = 40;
                                    continue _fun48140
                                }
                            case 36:
                                var2 = 'none';
                            case 40:
                                var1 = 'display';
                                var0[var1] = var2;
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var0, var2);
                    var _closure3_slot3 = var0;
                    var0 = {};
                    var1 = function arg0() {
                        _fun48141: for (var _fun48141_ip = 0;;) switch (_fun48141_ip) {
                            case 0:
                                var3 = _closure1_slot11;
                                var2 = _closure1_slot7;
                                var1 = {};
                                var4 = {
                                    'flexBasis': 0,
                                    'flexGrow': 1
                                };
                                var1.style = var4;
                                var4 = new Array(2);
                                var5 = arg0;
                                var4[0] = var5;
                                var7 = _closure1_slot10;
                                var6 = _closure1_slot4;
                                var5 = {};
                                var8 = _closure3_slot0;
                                var11 = var8.current;
                                var8 = null;
                                var9 = var8 != var11;
                                var10 = 'auto';
                                var8 = var10;
                                if (!var9) {
                                    _fun48141_ip = 100;
                                    continue _fun48141
                                }
                            case 80:
                                var9 = var11.isFocused;
                                var9 = var9.bind(var11)();
                                var8 = var10;
                                if (!var9) {
                                    _fun48141_ip = 100;
                                    continue _fun48141
                                }
                            case 96:
                                var8 = 'none';
                            case 100:
                                var5.pointerEvents = var8;
                                var8 = _closure3_slot2;
                                var5.onPress = var8;
                                var0 = _closure3_slot3;
                                var5.style = var0;
                                var0 = undefined;
                                var5 = var7.bind(var0)(var6, var5);
                                var4[1] = var5;
                                var1.children = var4;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                        }
                    };
                    var0.panGestureWrapper = var1;
                    return var0;
                };
                var1 = var1.bind(var3)(var9);
                var2 = var1.panGestureWrapper;
                var5 = _closure1_slot0;
                var1 = 9;
                var1 = var7[var1];
                var5 = var5.bind(var3)(var1);
                var1 = var5.useThemeContext;
                var1 = var1.bind(var5)();
                var5 = var1.theme;
                var1 = var0.keyboardAppearance;
                if (!(var4 == var1)) {
                    _fun48134_ip = 187;
                    continue _fun48134
                }
            case 129:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.isThemeDark;
                var1 = var1.bind(var4)(var5);
                var4 = _closure1_slot9;
                if (var1) {
                    _fun48134_ip = 175;
                    continue _fun48134
                }
            case 167:
                var1 = var4.LIGHT;
                _fun48134_ip = 181;
                continue _fun48134;
            case 175:
                var1 = var4.DARK;
            case 181:
                var0.keyboardAppearance = var1;
            case 187:
                var5 = _closure1_slot10;
                var4 = _closure1_slot5;
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 10;
                var10 = var8[var6];
                var11 = var7.bind(var3)(var10);
                var10 = var11.mergeProps;
                var15 = var10.bind(var11)(var0, var13, var12);
                var16 = var1;
                var10 = copyDataProperties(var16, var15);
                var6 = var8[var6];
                var8 = var7.bind(var3)(var6);
                var7 = var8.mergeRefs;
                var6 = arg1;
                var7 = var7.bind(var8)(var9, var6);
                var6 = 'ref';
                var1[var6] = var7;
                var1 = var5.bind(var3)(var4, var1);
                var4 = var0.multiline;
                var0 = var1;
                if (var4) {
                    _fun48134_ip = 293;
                    continue _fun48134
                }
            case 288:
                var0 = var2.bind(var3)(var1);
            case 293:
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Input/native/NativeTextInput.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useKeyboardBlurring = var3;
    var2.NativeTextInput = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1466, 660, 33, 5404, 4104, 4071, 5405, 3161, 3155, 2]);