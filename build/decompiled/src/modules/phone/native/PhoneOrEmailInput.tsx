// modules/phone/native/PhoneOrEmailInput.tsx
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun60904: for (var _fun60904_ip = 0;;) switch (_fun60904_ip) {
            case 0:
                var4 = arg0;
                var6 = var4.onChange;
                var _closure2_slot0 = var6;
                var2 = var4.alpha2;
                var12 = var4.countryCode;
                var _closure2_slot1 = var12;
                var10 = var4.onPressCountrySelector;
                var _closure2_slot2 = var10;
                var16 = var4.forceMode;
                var _closure2_slot3 = var16;
                var3 = {
                    'onChange': 0,
                    'alpha2': 0,
                    'countryCode': 0,
                    'onPressCountrySelector': 0,
                    'forceMode': 0
                };
                var5 = null;
                var20 = var3;
                var19 = null;
                var0 = silentSetPrototypeOf(var20, var19);
                var7 = 0;
                var20 = {};
                var19 = var4;
                var18 = var3;
                var4 = copyDataProperties(var20, var19, var18);
                var3 = undefined;
                var _closure2_slot7 = var3;
                var15 = _closure1_slot4;
                var8 = var15.useState;
                var11 = '';
                var13 = var8.bind(var15)(var11);
                var9 = _closure1_slot3;
                var8 = 2;
                var8 = var9.bind(var3)(var13, var8);
                var13 = var8[var7];
                var7 = 1;
                var7 = var8[var7];
                var _closure2_slot4 = var7;
                var7 = var15.useRef;
                var8 = var7.bind(var15)(var5);
                var _closure2_slot5 = var8;
                var17 = var15.useImperativeHandle;
                var14 = arg1;
                var9 = function() { // Environment: var1
                    var0 = {};
                    var2 = function() {
                        _fun60906: for (var _fun60906_ip = 0;;) switch (_fun60906_ip) {
                            case 0:
                                var0 = _closure2_slot5;
                                var2 = var0.current;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun60906_ip = 33;
                                    continue _fun60906
                                }
                            case 23:
                                var1 = var2.blur;
                                var0 = var1.bind(var2)();
                            case 33:
                                return var0;
                        }
                    };
                    var0.blur = var2;
                    var2 = function() {
                        _fun60907: for (var _fun60907_ip = 0;;) switch (_fun60907_ip) {
                            case 0:
                                var0 = _closure2_slot5;
                                var2 = var0.current;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun60907_ip = 33;
                                    continue _fun60907
                                }
                            case 23:
                                var1 = var2.focus;
                                var0 = var1.bind(var2)();
                            case 33:
                                return var0;
                        }
                    };
                    var0.focus = var2;
                    var2 = function() {
                        _fun60908: for (var _fun60908_ip = 0;;) switch (_fun60908_ip) {
                            case 0:
                                var0 = _closure2_slot5;
                                var3 = var0.current;
                                var0 = null;
                                var2 = var0 == var3;
                                var1 = undefined;
                                if (var2) {
                                    _fun60908_ip = 33;
                                    continue _fun60908
                                }
                            case 23:
                                var2 = var3.isFocused;
                                var1 = var2.bind(var3)();
                            case 33:
                                var0 = var0 != var1;
                                if (!var0) {
                                    _fun60908_ip = 43;
                                    continue _fun60908
                                }
                            case 40:
                                var0 = var1;
                            case 43:
                                return var0;
                        }
                    };
                    var0.isFocused = var2;
                    var2 = function arg0() {
                        _fun60909: for (var _fun60909_ip = 0;;) switch (_fun60909_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure2_slot4;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var3);
                                var1 = _closure2_slot5;
                                var2 = var1.current;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun60909_ip = 43;
                                    continue _fun60909
                                }
                            case 32:
                                var1 = var2.setText;
                                var1 = var1.bind(var2)(var3);
                            case 43:
                                return var0;
                        }
                    };
                    var0.setText = var2;
                    var2 = function() {
                        _fun60910: for (var _fun60910_ip = 0;;) switch (_fun60910_ip) {
                            case 0:
                                var0 = _closure2_slot5;
                                var3 = var0.current;
                                var0 = null;
                                var2 = var0 == var3;
                                var1 = undefined;
                                if (var2) {
                                    _fun60910_ip = 33;
                                    continue _fun60910
                                }
                            case 23:
                                var2 = var3.getText;
                                var1 = var2.bind(var3)();
                            case 33:
                                var2 = var0 != var1;
                                var0 = '';
                                if (!var2) {
                                    _fun60910_ip = 47;
                                    continue _fun60910
                                }
                            case 44:
                                var0 = var1;
                            case 47:
                                return var0;
                        }
                    };
                    var0.getText = var2;
                    var2 = function arg0() {
                        _fun60911: for (var _fun60911_ip = 0;;) switch (_fun60911_ip) {
                            case 0:
                                var0 = _closure2_slot5;
                                var3 = var0.current;
                                var0 = null;
                                var1 = var0 == var3;
                                var0 = undefined;
                                if (var1) {
                                    _fun60911_ip = 37;
                                    continue _fun60911
                                }
                            case 23:
                                var2 = var3.measure;
                                var1 = arg0;
                                var0 = var2.bind(var3)(var1);
                            case 37:
                                return var0;
                        }
                    };
                    var0.measure = var2;
                    var2 = function arg0() {
                        _fun60912: for (var _fun60912_ip = 0;;) switch (_fun60912_ip) {
                            case 0:
                                var0 = _closure2_slot5;
                                var3 = var0.current;
                                var0 = null;
                                var1 = var0 == var3;
                                var0 = undefined;
                                if (var1) {
                                    _fun60912_ip = 37;
                                    continue _fun60912
                                }
                            case 23:
                                var2 = var3.measureInWindow;
                                var1 = arg0;
                                var0 = var2.bind(var3)(var1);
                            case 37:
                                return var0;
                        }
                    };
                    var0.measureInWindow = var2;
                    var1 = function arg0, arg1, arg2() {
                        _fun60913: for (var _fun60913_ip = 0;;) switch (_fun60913_ip) {
                            case 0:
                                var0 = _closure2_slot5;
                                var5 = var0.current;
                                var0 = null;
                                var1 = var0 == var5;
                                var0 = undefined;
                                if (var1) {
                                    _fun60913_ip = 45;
                                    continue _fun60913
                                }
                            case 23:
                                var4 = var5.measureLayout;
                                var3 = arg0;
                                var2 = arg1;
                                var1 = arg2;
                                var0 = var4.bind(var5)(var3, var2, var1);
                            case 45:
                                return var0;
                        }
                    };
                    var0.measureLayout = var1;
                    return var0;
                };
                var7 = new Array(0);
                var7 = var17.bind(var15)(var14, var9, var7);
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 3;
                var7 = var14[var7];
                var9 = var9.bind(var3)(var7);
                var7 = var9.shouldShowCountryCodeSelector;
                var9 = var7.bind(var9)(var16, var13);
                var13 = var15.useCallback;
                var7 = new Array(3);
                var7[0] = var12;
                var7[1] = var16;
                var7[2] = var6;
                var6 = function(arg0) { // Environment: var1
                    _fun60914: for (var _fun60914_ip = 0;;) switch (_fun60914_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot4;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 3;
                            var2 = var5[var2];
                            var5 = var4.bind(var0)(var2);
                            var4 = var5.shouldShowCountryCodeSelector;
                            var2 = _closure2_slot3;
                            var4 = var4.bind(var5)(var2, var3);
                            var2 = '';
                            if (!var4) {
                                _fun60914_ip = 67;
                                continue _fun60914
                            }
                        case 63:
                            var2 = _closure2_slot1;
                        case 67:
                            var5 = _closure2_slot0;
                            var4 = null;
                            if (!(var4 != var5)) {
                                _fun60914_ip = 87;
                                continue _fun60914
                            }
                        case 77:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)(var3, var2);
                        case 87:
                            return var0;
                    }
                };
                var7 = var13.bind(var15)(var6, var7);
                var13 = _closure1_slot1;
                var6 = 4;
                var6 = var14[var6];
                var6 = var13.bind(var3)(var6);
                var6 = var6.bind(var3)(var7);
                var _closure2_slot6 = var6;
                var14 = var15.useEffect;
                var13 = new Array(2);
                var13[0] = var12;
                var13[1] = var6;
                var6 = function() { // Environment: var1
                    _fun60915: for (var _fun60915_ip = 0;;) switch (_fun60915_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = _closure2_slot5;
                            var5 = var0.current;
                            var1 = null;
                            var4 = var1 == var5;
                            var0 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun60915_ip = 39;
                                continue _fun60915
                            }
                        case 29:
                            var4 = var5.getText;
                            var3 = var4.bind(var5)();
                        case 39:
                            var4 = var1 != var3;
                            var1 = '';
                            if (!var4) {
                                _fun60915_ip = 53;
                                continue _fun60915
                            }
                        case 50:
                            var1 = var3;
                        case 53:
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var6 = var14.bind(var15)(var6, var13);
                var6 = undefined;
                if (!var9) {
                    _fun60904_ip = 345;
                    continue _fun60904
                }
            case 306:
                var5 = var5 != var2;
                var9 = var11;
                if (!var5) {
                    _fun60904_ip = 319;
                    continue _fun60904
                }
            case 316:
                var9 = var2;
            case 319:
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = ' ';
                var6 = var5.bind(var11)(var9, var2, var12);
            case 345:
                _closure2_slot7 = var6;
                var9 = _closure1_slot4;
                var5 = var9.useMemo;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var10;
                var1 = function() { // Environment: var1
                    _fun60916: for (var _fun60916_ip = 0;;) switch (_fun60916_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot2;
                            var0.onPress = var1;
                            var1 = 'button';
                            var0.accessibilityRole = var1;
                            var3 = _closure2_slot7;
                            var1 = null;
                            var3 = var1 != var3;
                            var1 = '';
                            if (!var3) {
                                _fun60916_ip = 42;
                                continue _fun60916
                            }
                        case 38:
                            var1 = _closure2_slot7;
                        case 42:
                            var0.accessibilityLabel = var1;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 5;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.GwAW3k;
                            var1 = var2.bind(var3)(var1);
                            var0.accessibilityHint = var1;
                            return var0;
                    }
                };
                var5 = var5.bind(var9)(var1, var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 6;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.SplitTextInput;
                var0 = {};
                var20 = var0;
                var19 = var4;
                var4 = copyDataProperties(var20, var19);
                var4 = 'ref';
                var0[var4] = var8;
                var4 = 'onChange';
                var0[var4] = var7;
                var4 = 'leadingText';
                var0[var4] = var6;
                var4 = 'leadingPressableProps';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/phone/native/PhoneOrEmailInput.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 7483, 7530, 1234, 7532, 2]);