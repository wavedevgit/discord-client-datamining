// modules/keyboard/native/KeyboardAwareView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun51052: for (var _fun51052_ip = 0;;) switch (_fun51052_ip) {
            case 0:
                var0 = global;
                var3 = var0.Math;
                var2 = var3.max;
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 5;
                var0 = var4[var0];
                var7 = undefined;
                var1 = var1.bind(var7)(var0);
                var0 = var1.getSystemKeyboardHeight;
                var4 = var0.bind(var1)();
                var1 = 0;
                if (!(var1 === var4)) {
                    _fun51052_ip = 147;
                    continue _fun51052
                }
            case 54:
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 6;
                var0 = var9[var0];
                var8 = var6.bind(var7)(var0);
                var0 = var8.getKeyboardType;
                var8 = var0.bind(var8)();
                var0 = 7;
                var0 = var9[var0];
                var0 = var6.bind(var7)(var0);
                var0 = var0.KeyboardTypes;
                var6 = var0.SYSTEM;
                var0 = 0;
                if (!(var8 !== var6)) {
                    _fun51052_ip = 144;
                    continue _fun51052
                }
            case 114:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 8;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.getCustomKeyboardHeight;
                var0 = var5.bind(var6)();
            case 144:
                var4 = var0;
            case 147:
                var0 = arg0;
                var0 = var4 + var0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot4 = var8;
    var3 = var3.StyleSheet;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun51053: for (var _fun51053_ip = 0;;) switch (_fun51053_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.style;
                var _closure2_slot0 = var8;
                var4 = var0.children;
                var5 = var0.pointerEvents;
                var2 = var0.animated;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun51053_ip = 39;
                    continue _fun51053
                }
            case 37:
                var2 = true;
            case 39:
                var _closure2_slot1 = var2;
                var6 = var0.keyboardHeightOffset;
                if (!(var6 === var3)) {
                    _fun51053_ip = 57;
                    continue _fun51053
                }
            case 55:
                var6 = 0;
            case 57:
                var _closure2_slot2 = var6;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var7 = _closure1_slot3;
                var10 = var7.useRef;
                var9 = _closure1_slot8;
                var9 = var9.bind(var3)(var6);
                var9 = var10.bind(var7)(var9);
                _closure2_slot3 = var9;
                var10 = var7.useState;
                var9 = var9.current;
                var11 = var10.bind(var7)(var9);
                var10 = _closure1_slot2;
                var9 = 2;
                var11 = var10.bind(var3)(var11, var9);
                var9 = 0;
                var9 = var11[var9];
                _closure2_slot4 = var9;
                var10 = 1;
                var10 = var11[var10];
                _closure2_slot5 = var10;
                var11 = var7.useEffect;
                var10 = new Array(1);
                var10[0] = var6;
                var6 = function() { // Environment: var1
                    var2 = _closure1_slot6;
                    var1 = undefined;
                    var0 = function() { // Environment: var0
                        _fun51055: for (var _fun51055_ip = 0;;) switch (_fun51055_ip) {
                            case 0:
                                var3 = _closure1_slot8;
                                var2 = _closure2_slot2;
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = _closure2_slot3;
                                var3 = var3.current;
                                if (!(var3 !== var2)) {
                                    _fun51055_ip = 53;
                                    continue _fun51055
                                }
                            case 34:
                                var3 = _closure2_slot3;
                                var3.current = var2;
                                var1 = _closure2_slot5;
                                var1 = var1.bind(var0)(var2);
                            case 53:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var6 = var11.bind(var7)(var6, var10);
                var10 = var7.useRef;
                var6 = false;
                var6 = var10.bind(var7)(var6);
                _closure2_slot6 = var6;
                var10 = var7.useEffect;
                var6 = new Array(2);
                var6[0] = var2;
                var6[1] = var9;
                var2 = function() { // Environment: var1
                    _fun51056: for (var _fun51056_ip = 0;;) switch (_fun51056_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var0 = var0.current;
                            if (var0) {
                                _fun51056_ip = 29;
                                continue _fun51056
                            }
                        case 15:
                            var2 = _closure2_slot6;
                            var0 = true;
                            var2.current = var0;
                            _fun51056_ip = 111;
                            continue _fun51056;
                        case 29:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 9;
                            var2 = var3[var2];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.getKeyboardDuration;
                            var2 = var2.bind(var4)();
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun51056_ip = 77;
                                continue _fun51056
                            }
                        case 71:
                            var4 = 0;
                            var1 = var2 > var4;
                        case 77:
                            if (!var1) {
                                _fun51056_ip = 111;
                                continue _fun51056
                            }
                        case 80:
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 10;
                            var0 = var4[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.DeprecatedLayoutAnimationKeyboard;
                            var0 = var0.bind(var1)(var2);
                        case 111:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var10.bind(var7)(var2, var6);
                var6 = var7.useMemo;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var8;
                var1 = function() { // Environment: var1
                    _fun51057: for (var _fun51057_ip = 0;;) switch (_fun51057_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun51057_ip = 117;
                                continue _fun51057
                            }
                        case 13:
                            var3 = _closure1_slot5;
                            var2 = var3.flatten;
                            var0 = _closure2_slot0;
                            var3 = var2.bind(var3)(var0);
                            var0 = var3.marginBottom;
                            var2 = 'number';
                            var0 = typeof var0;
                            if (!(var2 !== var0)) {
                                _fun51057_ip = 78;
                                continue _fun51057
                            }
                        case 51:
                            var0 = {};
                            var6 = var0;
                            var5 = var3;
                            var2 = copyDataProperties(var6, var5);
                            var4 = _closure2_slot4;
                            var2 = 'marginBottom';
                            var0[var2] = var4;
                            _fun51057_ip = 115;
                            continue _fun51057;
                        case 78:
                            var2 = {};
                            var6 = var2;
                            var5 = var3;
                            var4 = copyDataProperties(var6, var5);
                            var4 = var3.marginBottom;
                            var3 = _closure2_slot4;
                            var4 = var4 + var3;
                            var3 = 'marginBottom';
                            var2[var3] = var4;
                            var0 = var2;
                        case 115:
                            return var0;
                        case 117:
                            var0 = {};
                            var1 = _closure2_slot4;
                            var0.marginBottom = var1;
                            return var0;
                    }
                };
                var6 = var6.bind(var7)(var1, var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var6;
                var0.pointerEvents = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard/native/KeyboardAwareView.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1466, 33, 1585, 3905, 1567, 4891, 4889, 4890, 2]);