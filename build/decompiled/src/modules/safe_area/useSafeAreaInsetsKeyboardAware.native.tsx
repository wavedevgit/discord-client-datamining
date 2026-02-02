// modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun44397: for (var _fun44397_ip = 0;;) switch (_fun44397_ip) {
            case 0:
                var0 = arguments[0];
                var6 = undefined;
                if (!(var0 === var6)) {
                    _fun44397_ip = 13;
                    continue _fun44397
                }
            case 11:
                var0 = {};
            case 13:
                var7 = var0.isKeyboardAwareOnIOS;
                if (!(var7 === var6)) {
                    _fun44397_ip = 27;
                    continue _fun44397
                }
            case 25:
                var7 = true;
            case 27:
                var _closure2_slot0 = var7;
                var4 = var0.isKeyboardAwareOnAndroid;
                if (!(var4 === var6)) {
                    _fun44397_ip = 43;
                    continue _fun44397
                }
            case 41:
                var4 = true;
            case 43:
                var _closure2_slot1 = var4;
                var2 = var0.includeCustomKeyboardHeight;
                if (!(var2 === var6)) {
                    _fun44397_ip = 59;
                    continue _fun44397
                }
            case 57:
                var2 = true;
            case 59:
                var _closure2_slot2 = var2;
                var0 = var0.includeKeyboardHeight;
                if (!(var0 === var6)) {
                    _fun44397_ip = 75;
                    continue _fun44397
                }
            case 73:
                var0 = false;
            case 75:
                var _closure2_slot3 = var6;
                var _closure2_slot4 = var6;
                var _closure2_slot5 = var6;
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 5;
                var3 = var9[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.bind(var6)();
                var11 = _closure1_slot4;
                var9 = var11.useCallback;
                var5 = new Array(3);
                var5[0] = var2;
                var5[1] = var7;
                var5[2] = var4;
                var2 = function() { // Environment: var1
                    _fun44398: for (var _fun44398_ip = 0;;) switch (_fun44398_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var3 = 6;
                            var0 = var0[var3];
                            var4 = undefined;
                            var1 = var1.bind(var4)(var0);
                            var0 = var1.isIOS;
                            var0 = var0.bind(var1)();
                            if (!var0) {
                                _fun44398_ip = 52;
                                continue _fun44398
                            }
                        case 38:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun44398_ip = 52;
                                continue _fun44398
                            }
                        case 48:
                            var0 = 0;
                            return var0;
                        case 52:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var3];
                            var1 = var1.bind(var4)(var0);
                            var0 = var1.isAndroid;
                            var0 = var0.bind(var1)();
                            if (!var0) {
                                _fun44398_ip = 96;
                                continue _fun44398
                            }
                        case 82:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun44398_ip = 96;
                                continue _fun44398
                            }
                        case 92:
                            var0 = 0;
                            return var0;
                        case 96:
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 7;
                            var0 = var3[var0];
                            var1 = var1.bind(var4)(var0);
                            var0 = var1.getSystemKeyboardHeight;
                            var0 = var0.bind(var1)();
                            var5 = 0;
                            if (!(var5 === var0)) {
                                _fun44398_ip = 237;
                                continue _fun44398
                            }
                        case 132:
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 8;
                            var1 = var7[var1];
                            var6 = var3.bind(var4)(var1);
                            var1 = var6.getKeyboardType;
                            var6 = var1.bind(var6)();
                            var1 = 9;
                            var1 = var7[var1];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.KeyboardTypes;
                            var3 = var1.SYSTEM;
                            var1 = 0;
                            if (!(var6 !== var3)) {
                                _fun44398_ip = 234;
                                continue _fun44398
                            }
                        case 192:
                            var3 = _closure2_slot2;
                            var1 = 0;
                            if (!var3) {
                                _fun44398_ip = 234;
                                continue _fun44398
                            }
                        case 204:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 10;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.getCustomKeyboardHeight;
                            var1 = var2.bind(var3)();
                        case 234:
                            var0 = var1;
                        case 237:
                            return var0;
                    }
                };
                var12 = var9.bind(var11)(var2, var5);
                _closure2_slot3 = var12;
                var5 = var11.useRef;
                var2 = var12.bind(var6)();
                var2 = var5.bind(var11)(var2);
                _closure2_slot4 = var2;
                var5 = var11.useState;
                var2 = var2.current;
                var9 = var5.bind(var11)(var2);
                var5 = _closure1_slot3;
                var2 = 2;
                var10 = var5.bind(var6)(var9, var2);
                var5 = 0;
                var2 = var10[var5];
                var9 = 1;
                var9 = var10[var9];
                _closure2_slot5 = var9;
                var10 = var11.useEffect;
                var9 = new Array(3);
                var9[0] = var12;
                var9[1] = var7;
                var9[2] = var4;
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = undefined;
                    var0 = function() { // Environment: var0
                        _fun44400: for (var _fun44400_ip = 0;;) switch (_fun44400_ip) {
                            case 0:
                                var2 = _closure2_slot3;
                                var0 = undefined;
                                var2 = var2.bind(var0)();
                                var3 = _closure2_slot4;
                                var3 = var3.current;
                                if (!(var3 !== var2)) {
                                    _fun44400_ip = 45;
                                    continue _fun44400
                                }
                            case 26:
                                var3 = _closure2_slot4;
                                var3.current = var2;
                                var1 = _closure2_slot5;
                                var1 = var1.bind(var0)(var2);
                            case 45:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var4 = var10.bind(var11)(var4, var9);
                var4 = {};
                var4.keyboardHeight = var2;
                var7 = !var7;
                if (var7) {
                    _fun44397_ip = 265;
                    continue _fun44397
                }
            case 262:
                var7 = !var0;
            case 265:
                if (var7) {
                    _fun44397_ip = 298;
                    continue _fun44397
                }
            case 268:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 6;
                var8 = var10[var8];
                var9 = var9.bind(var6)(var8);
                var8 = var9.isAndroid;
                var7 = var8.bind(var9)();
            case 298:
                var4.disabled = var7;
                var1 = function arg0() {
                    var1 = arg0;
                    var5 = var1.keyboardHeight;
                    var4 = var1.disabled;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot4;
                    var2 = var3.useRef;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot1 = var1;
                    var2 = var3.useEffect;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var1[1] = var4;
                    var0 = function() { // Environment: var0
                        _fun44402: for (var _fun44402_ip = 0;;) switch (_fun44402_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 3;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var1);
                                var1 = var3.getKeyboardDuration;
                                var4 = var1.bind(var3)();
                                var3 = _closure3_slot1;
                                var3 = var3.current;
                                if (!var3) {
                                    _fun44402_ip = 96;
                                    continue _fun44402
                                }
                            case 50:
                                var3 = 0;
                                if (!(var3 !== var4)) {
                                    _fun44402_ip = 96;
                                    continue _fun44402
                                }
                            case 56:
                                var3 = _closure3_slot0;
                                if (var3) {
                                    _fun44402_ip = 96;
                                    continue _fun44402
                                }
                            case 63:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 4;
                                var2 = var5[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.DeprecatedLayoutAnimationKeyboard;
                                var2 = var2.bind(var3)(var4);
                                _fun44402_ip = 108;
                                continue _fun44402;
                            case 96:
                                var2 = _closure3_slot1;
                                var1 = true;
                                var2.current = var1;
                            case 108:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var1 = var1.bind(var6)(var4);
                var4 = 0;
                if (!var0) {
                    _fun44397_ip = 320;
                    continue _fun44397
                }
            case 317:
                var4 = var2;
            case 320:
                var0 = {};
                var1 = var3;
                if (!(var2 > var5)) {
                    _fun44397_ip = 353;
                    continue _fun44397
                }
            case 329:
                var2 = {};
                var14 = var2;
                var13 = var3;
                var3 = copyDataProperties(var14, var13);
                var3 = 'bottom';
                var2[var3] = var4;
                var1 = var2;
            case 353:
                var0.insets = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1466, 4859, 4860, 1568, 478, 1585, 3875, 1567, 4861, 2]);