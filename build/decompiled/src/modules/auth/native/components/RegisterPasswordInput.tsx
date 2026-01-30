// modules/auth/native/components/RegisterPasswordInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: PasswordStrength, environment: var1
        _fun101036: for (var _fun101036_ip = 0;;) switch (_fun101036_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.password;
                var5 = var0.isPasswordFocused;
                var1 = var0.passwordError;
                var2 = var0.passwordScore;
                var0 = _closure1_slot13;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var0 = null;
                if (!(var0 != var2)) {
                    _fun101036_ip = 580;
                    continue _fun101036
                }
            case 49:
                if (!var5) {
                    _fun101036_ip = 580;
                    continue _fun101036
                }
            case 55:
                var5 = var3.length;
                var3 = 0;
                if (!(var3 !== var5)) {
                    _fun101036_ip = 580;
                    continue _fun101036
                }
            case 69:
                if (!(var0 == var1)) {
                    _fun101036_ip = 580;
                    continue _fun101036
                }
            case 76:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 9;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.PasswordScore;
                var1 = var1.WEAK;
                if (!(!(var2 <= var1))) {
                    _fun101036_ip = 323;
                    continue _fun101036
                }
            case 115:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.PasswordScore;
                var1 = var1.MEDIUM;
                if (!(var2 !== var1)) {
                    _fun101036_ip = 258;
                    continue _fun101036
                }
            case 148:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.PasswordScore;
                var1 = var1.STRONG;
                var5 = '';
                var6 = undefined;
                if (!(var2 === var1)) {
                    _fun101036_ip = 386;
                    continue _fun101036
                }
            case 190:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 10;
                var2 = var10[var1];
                var2 = var9.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Xraqqc;
                var5 = var2.bind(var3)(var1);
                var6 = var7.strong;
                _fun101036_ip = 386;
                continue _fun101036;
            case 258:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 10;
                var2 = var10[var1];
                var2 = var9.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["2fmTpT"];
                var5 = var2.bind(var3)(var1);
                var6 = var7.medium;
                _fun101036_ip = 386;
                continue _fun101036;
            case 323:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 10;
                var2 = var10[var1];
                var2 = var9.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["w/8TuV"];
                var5 = var2.bind(var3)(var1);
                var6 = var7.weak;
            case 386:
                var3 = _closure1_slot10;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 11;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var12 = _closure1_slot14;
                var13 = var1;
                var11 = copyDataProperties(var13, var12);
                var12 = _closure1_slot15;
                var13 = var1;
                var8 = copyDataProperties(var13, var12);
                var11 = 'text-xs/medium';
                var8 = 'variant';
                var1[var8] = var11;
                var8 = var7.passwordStrength;
                var7 = new Array(2);
                var7[0] = var8;
                var7[1] = var6;
                var6 = 'style';
                var1[var6] = var7;
                var7 = true;
                var6 = 'animated';
                var1[var6] = var7;
                var6 = 10;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["5gbdUX"];
                var7 = var7.bind(var8)(var6);
                var6 = new Array(3);
                var6[0] = var7;
                var7 = ': ';
                var6[1] = var7;
                var6[2] = var5;
                var5 = 'children';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 580:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = ['password'];
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.setRegistrationErrors;
    var _closure1_slot8 = var7;
    var3 = var3.useRegistrationUIStore;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsxs;
    var _closure1_slot10 = var7;
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_FEEDBACK_CRITICAL;
    var9.color = var12;
    var3.weak = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_FEEDBACK_WARNING;
    var9.color = var12;
    var3.medium = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_FEEDBACK_POSITIVE;
    var9.color = var10;
    var3.strong = var9;
    var9 = {
        'marginTop': 4,
        'marginBottom': 4
    };
    var3.passwordStrength = var9;
    var9 = {};
    var10 = '100%';
    var9.width = var10;
    var3.inputHint = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.FadeIn;
    var8 = var10.duration;
    var9 = 300;
    var8 = var8.bind(var10)(var9);
    var3.entering = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.FadeOut;
    var8 = var10.duration;
    var8 = var8.bind(var10)(var9);
    var3.exiting = var8;
    var _closure1_slot14 = var3;
    var3 = {};
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.LinearTransition;
    var8 = var10.easing;
    var11 = var5[var7];
    var11 = var4.bind(var0)(var11);
    var12 = var11.Easing;
    var11 = var12.inOut;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.Easing;
    var7 = var7.quad;
    var7 = var11.bind(var12)(var7);
    var8 = var8.bind(var10)(var7);
    var7 = var8.duration;
    var7 = var7.bind(var8)(var9);
    var3.layout = var7;
    var _closure1_slot15 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun101037: for (var _fun101037_ip = 0;;) switch (_fun101037_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot13;
                var3 = undefined;
                var9 = var2.bind(var3)();
                var15 = var1.password;
                var12 = var1.onPasswordChange;
                var _closure2_slot0 = var12;
                var19 = var1.onSubmitEditing;
                var13 = var1.passwordScore;
                var21 = var1.returnKeyType;
                var5 = var1.autoFocus;
                var2 = _closure1_slot6;
                var1 = var2.useRef;
                var7 = null;
                var27 = var1.bind(var2)(var7);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.inputRef = var27;
                var4 = var7 != var5;
                if (!var4) {
                    _fun101037_ip = 111;
                    continue _fun101037
                }
            case 108:
                var4 = var5;
            case 111:
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
                var4 = _closure1_slot6;
                var1 = var4.useState;
                var14 = false;
                var1 = var1.bind(var4)(var14);
                var10 = _closure1_slot5;
                var8 = 2;
                var1 = var10.bind(var3)(var1, var8);
                var6 = 0;
                var17 = var1[var6];
                var2 = 1;
                var5 = var1[var2];
                var _closure2_slot1 = var5;
                var1 = var4.useState;
                var1 = var1.bind(var4)(var14);
                var1 = var10.bind(var3)(var1, var8);
                var14 = var1[var6];
                var _closure2_slot2 = var14;
                var1 = var1[var2];
                var _closure2_slot3 = var1;
                var6 = _closure1_slot9;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.errors;
                    return var0;
                };
                var2 = var6.bind(var3)(var2);
                var _closure2_slot4 = var2;
                var8 = _closure1_slot1;
                var20 = _closure1_slot2;
                var6 = 13;
                var6 = var20[var6];
                var8 = var8.bind(var3)(var6);
                var6 = 'password';
                var6 = var8.bind(var3)(var6, var2);
                var10 = var4.useCallback;
                var8 = new Array(2);
                var8[0] = var12;
                var8[1] = var2;
                var2 = function(arg0) { // Environment: var0
                    _fun101039: for (var _fun101039_ip = 0;;) switch (_fun101039_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = var1.password;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun101039_ip = 61;
                                continue _fun101039
                            }
                        case 19:
                            var1 = _closure2_slot4;
                            var1 = var1.password;
                            var5 = _closure1_slot4;
                            var4 = _closure2_slot4;
                            var2 = _closure1_slot3;
                            var3 = undefined;
                            var2 = var5.bind(var3)(var4, var2);
                            var1 = _closure1_slot8;
                            var1 = var1.bind(var3)(var2);
                        case 61:
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var22 = var10.bind(var4)(var2, var8);
                var25 = _closure1_slot0;
                var2 = 14;
                var2 = var20[var2];
                var12 = var25.bind(var3)(var2);
                var10 = var12.useStateFromStores;
                var2 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var0
                    _fun101040: for (var _fun101040_ip = 0;;) switch (_fun101040_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var1 = var1.CountryCodesSets;
                            var2 = var1.FRANCE_AND_FRENCH_REGION;
                            var1 = var2.has;
                            var3 = _closure1_slot7;
                            var0 = var3.getCountryCode;
                            var0 = var0.bind(var3)();
                            var0 = var0.alpha2;
                            var1 = var1.bind(var2)(var0);
                            var0 = 8;
                            if (!var1) {
                                _fun101040_ip = 76;
                                continue _fun101040
                            }
                        case 73:
                            var0 = 12;
                        case 76:
                            return var0;
                    }
                };
                var2 = var10.bind(var12)(var8, var2);
                var _closure2_slot5 = var2;
                var10 = var4.useMemo;
                var8 = new Array(2);
                var8[0] = var14;
                var8[1] = var2;
                var2 = function() { // Environment: var0
                    _fun101041: for (var _fun101041_ip = 0;;) switch (_fun101041_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun101041_ip = 14;
                                continue _fun101041
                            }
                        case 10:
                            var0 = undefined;
                            return var0;
                        case 14:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 10;
                            var2 = var6[var0];
                            var1 = undefined;
                            var2 = var5.bind(var1)(var2);
                            var3 = var2.intl;
                            var2 = var3.format;
                            var0 = var6[var0];
                            var0 = var5.bind(var1)(var0);
                            var0 = var0.t;
                            var1 = var0.VUUJ6V;
                            var0 = {};
                            var4 = _closure2_slot5;
                            var0.minimumLength = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var10 = var10.bind(var4)(var2, var8);
                var12 = var4.useCallback;
                var8 = new Array(1);
                var8[0] = var1;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var18 = var12.bind(var4)(var2, var8);
                var8 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12 = var8.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var16 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot12;
                var0 = {};
                var8 = _closure1_slot11;
                var4 = 16;
                var4 = var20[var4];
                var4 = var25.bind(var3)(var4);
                var5 = var4.TextInput;
                var4 = {
                    'ref': null,
                    'textContentType': 'newPassword',
                    'autoComplete': 'new-password'
                };
                var23 = 17;
                var23 = var20[var23];
                var26 = var25.bind(var3)(var23);
                var24 = var26.mergeRefs;
                var23 = arg1;
                var23 = var24.bind(var26)(var23, var27);
                var4.ref = var23;
                var4.onChange = var22;
                var4.value = var15;
                var22 = 10;
                var23 = var20[var22];
                var23 = var25.bind(var3)(var23);
                var26 = var23.intl;
                var24 = var26.string;
                var23 = var20[var22];
                var23 = var25.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23["CIGa+7"];
                var23 = var24.bind(var26)(var23);
                var4.label = var23;
                var23 = var20[var22];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var20 = var20[var22];
                var20 = var25.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.cUVsEG;
                var20 = var23.bind(var24)(var20);
                var4.accessibilityHint = var20;
                var20 = !var17;
                var4.secureTextEntry = var20;
                var23 = var7 != var21;
                var20 = 'next';
                if (!var23) {
                    _fun101037_ip = 648;
                    continue _fun101037
                }
            case 645:
                var20 = var21;
            case 648:
                var4.returnKeyType = var20;
                var20 = 'none';
                var4.autoCapitalize = var20;
                var4.onSubmitEditing = var19;
                var4.onFocus = var18;
                var4.onBlur = var12;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                if (var17) {
                    _fun101037_ip = 708;
                    continue _fun101037
                }
            case 688:
                var12 = 19;
                var12 = var20[var12];
                var12 = var19.bind(var3)(var12);
                var12 = var12.EyeIcon;
                _fun101037_ip = 726;
                continue _fun101037;
            case 708:
                var18 = 18;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var12 = var18.EyeSlashIcon;
            case 726:
                var4.trailingIcon = var12;
                var12 = {};
                var21 = _closure1_slot0;
                var18 = _closure1_slot2;
                var19 = var18[var22];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var22];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                if (var17) {
                    _fun101037_ip = 790;
                    continue _fun101037
                }
            case 777:
                var17 = var18.nFzpM5;
                var17 = var19.bind(var20)(var17);
                _fun101037_ip = 801;
                continue _fun101037;
            case 790:
                var18 = var18.Nusip4;
                var17 = var19.bind(var20)(var18);
            case 801:
                var12.accessibilityLabel = var17;
                var12.onPress = var16;
                var16 = {
                    'top': 8,
                    'bottom': 8
                };
                var12.hitSlop = var16;
                var4.trailingPressableProps = var12;
                var4.errorMessage = var6;
                var16 = var7 != var6;
                var12 = undefined;
                if (!var16) {
                    _fun101037_ip = 851;
                    continue _fun101037
                }
            case 847:
                var12 = 'error';
            case 851:
                var4.status = var12;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var12 = _closure1_slot11;
                var8 = _closure1_slot16;
                var5 = {};
                var5.password = var15;
                var5.isPasswordFocused = var14;
                var5.passwordError = var6;
                var5.passwordScore = var13;
                var5 = var12.bind(var3)(var8, var5);
                var4[1] = var5;
                var8 = var7 != var10;
                var5 = null;
                if (!var8) {
                    _fun101037_ip = 1057;
                    continue _fun101037
                }
            case 921:
                var6 = var7 == var6;
                var5 = null;
                if (!var6) {
                    _fun101037_ip = 1057;
                    continue _fun101037
                }
            case 933:
                var8 = _closure1_slot11;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 11;
                var6 = var12[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {};
                var28 = _closure1_slot14;
                var29 = var6;
                var12 = copyDataProperties(var29, var28);
                var28 = _closure1_slot15;
                var29 = var6;
                var11 = copyDataProperties(var29, var28);
                var11 = var9.inputHint;
                var9 = 'style';
                var6[var9] = var11;
                var11 = 'text-xs/medium';
                var9 = 'variant';
                var6[var9] = var11;
                var11 = 'text-muted';
                var9 = 'color';
                var6[var9] = var11;
                var11 = true;
                var9 = 'animated';
                var6[var9] = var11;
                var9 = 'children';
                var6[var9] = var10;
                var5 = var8.bind(var3)(var7, var6);
            case 1057:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/RegisterPasswordInput.tsx';
    var3 = var4.bind(var5)(var3);
    var2.RegisterPasswordInput = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 57, 31, 7441, 13068, 33, 1297, 671, 3679, 13091, 1234, 3901, 13086, 7452, 566, 3927, 5362, 3114, 7502, 7503, 2]);