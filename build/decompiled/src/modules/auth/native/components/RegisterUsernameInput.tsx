// modules/auth/native/components/RegisterUsernameInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = ['username'];
    var _closure1_slot3 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.setRegistrationErrors;
    var _closure1_slot7 = var6;
    var3 = var3.useRegistrationUIStore;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.jsxs;
    var _closure1_slot10 = var6;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = '90%';
    var8.width = var9;
    var3.status = var8;
    var8 = {};
    var9 = '100%';
    var8.width = var9;
    var3.inputHint = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 6;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var9 = var7.FadeIn;
    var7 = var9.duration;
    var8 = 300;
    var7 = var7.bind(var9)(var8);
    var3.entering = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var9 = var7.FadeOut;
    var7 = var9.duration;
    var7 = var7.bind(var9)(var8);
    var3.exiting = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var9 = var7.LinearTransition;
    var7 = var9.easing;
    var10 = var5[var6];
    var10 = var4.bind(var0)(var10);
    var11 = var10.Easing;
    var10 = var11.inOut;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.Easing;
    var6 = var6.quad;
    var6 = var10.bind(var11)(var6);
    var7 = var7.bind(var9)(var6);
    var6 = var7.duration;
    var6 = var6.bind(var7)(var8);
    var3.layout = var6;
    var _closure1_slot14 = var3;
    var3 = function arg0() {
        _fun100401: for (var _fun100401_ip = 0;;) switch (_fun100401_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.usernameStatus;
                var1 = var0.isUsernameFocused;
                var0 = _closure1_slot12;
                var4 = undefined;
                var11 = var0.bind(var4)();
                var0 = null;
                var2 = var0 == var9;
                var3 = undefined;
                if (var2) {
                    _fun100401_ip = 44;
                    continue _fun100401
                }
            case 39:
                var3 = var9.type;
            case 44:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 7;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.NameValidationState;
                var2 = var2.ERROR;
                if (!(var3 !== var2)) {
                    _fun100401_ip = 478;
                    continue _fun100401
                }
            case 83:
                if (!var1) {
                    _fun100401_ip = 136;
                    continue _fun100401
                }
            case 86:
                var2 = var0 == var9;
                var3 = undefined;
                if (var2) {
                    _fun100401_ip = 100;
                    continue _fun100401
                }
            case 95:
                var3 = var9.type;
            case 100:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.NameValidationState;
                var2 = var2.AVAILABLE;
                if (!(var3 !== var2)) {
                    _fun100401_ip = 322;
                    continue _fun100401
                }
            case 136:
                var0 = null;
                if (!var1) {
                    _fun100401_ip = 317;
                    continue _fun100401
                }
            case 144:
                var3 = _closure1_slot9;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 11;
                var1 = var12[var1];
                var1 = var8.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var15 = _closure1_slot13;
                var16 = var1;
                var5 = copyDataProperties(var16, var15);
                var15 = _closure1_slot14;
                var16 = var1;
                var5 = copyDataProperties(var16, var15);
                var6 = var11.inputHint;
                var5 = 'style';
                var1[var5] = var6;
                var6 = 'text-xs/medium';
                var5 = 'variant';
                var1[var5] = var6;
                var6 = 'text-muted';
                var5 = 'color';
                var1[var5] = var6;
                var6 = true;
                var5 = 'animated';
                var1[var5] = var6;
                var5 = 12;
                var6 = var12[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var12[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.y7LSyU;
                var6 = var6.bind(var7)(var5);
                var5 = 'children';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 317:
                _fun100401_ip = 473;
                continue _fun100401;
            case 322:
                var3 = _closure1_slot9;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 11;
                var1 = var7[var5];
                var1 = var6.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var15 = _closure1_slot13;
                var16 = var1;
                var8 = copyDataProperties(var16, var15);
                var15 = _closure1_slot14;
                var16 = var1;
                var8 = copyDataProperties(var16, var15);
                var12 = var11.status;
                var8 = 'style';
                var1[var8] = var12;
                var12 = 'text-xs/medium';
                var8 = 'variant';
                var1[var8] = var12;
                var12 = true;
                var8 = 'animated';
                var1[var8] = var12;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-feedback-positive'
                };
                var7 = var9.message;
                var5.children = var7;
                var6 = var3.bind(var4)(var6, var5);
                var5 = 'children';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 473:
                _fun100401_ip = 706;
                continue _fun100401;
            case 478:
                var3 = _closure1_slot10;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 8;
                var1 = var12[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.Stack;
                var1 = {
                    'direction': 'horizontal',
                    'spacing': 4,
                    'align': 'flex-start'
                };
                var8 = _closure1_slot9;
                var5 = 9;
                var5 = var12[var5];
                var5 = var7.bind(var4)(var5);
                var6 = var5.CircleErrorIcon;
                var5 = {};
                var13 = 'xs';
                var5.size = var13;
                var14 = _closure1_slot1;
                var13 = 10;
                var13 = var12[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.colors;
                var13 = var13.TEXT_FEEDBACK_CRITICAL;
                var5.color = var13;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 11;
                var6 = var12[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-feedback-critical'
                };
                var11 = var11.status;
                var6.style = var11;
                var15 = _closure1_slot13;
                var16 = var6;
                var11 = copyDataProperties(var16, var15);
                var15 = _closure1_slot14;
                var16 = var6;
                var10 = copyDataProperties(var16, var15);
                var11 = true;
                var10 = 'animated';
                var6[var10] = var11;
                var10 = var9.message;
                var9 = 'children';
                var6[var9] = var10;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 706:
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/RegisterUsernameInput.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun100402: for (var _fun100402_ip = 0;;) switch (_fun100402_ip) {
            case 0:
                var2 = arg0;
                var16 = var2.username;
                var1 = var2.setUsername;
                var _closure2_slot0 = var1;
                var9 = var2.usernameStatus;
                var15 = var2.onSubmitEditing;
                var10 = var2.submitBehavior;
                var7 = var2.autoFocus;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var4 = _closure1_slot6;
                var2 = var4.useRef;
                var11 = null;
                var20 = var2.bind(var4)(var11);
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 13;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = {};
                var2.inputRef = var20;
                var6 = var11 != var7;
                if (!var6) {
                    _fun100402_ip = 110;
                    continue _fun100402
                }
            case 107:
                var6 = var7;
            case 110:
                var2.enabled = var6;
                var2 = var4.bind(var3)(var2);
                var4 = _closure1_slot6;
                var2 = var4.useState;
                var12 = true;
                var7 = var2.bind(var4)(var12);
                var6 = _closure1_slot5;
                var2 = 2;
                var6 = var6.bind(var3)(var7, var2);
                var2 = 0;
                var8 = var6[var2];
                var2 = 1;
                var6 = var6[var2];
                _closure2_slot1 = var6;
                var7 = _closure1_slot8;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.errors;
                    return var0;
                };
                var13 = var7.bind(var3)(var2);
                _closure2_slot2 = var13;
                var7 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun100404: for (var _fun100404_ip = 0;;) switch (_fun100404_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure2_slot2;
                            var3 = var2.username;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun100404_ip = 62;
                                continue _fun100404
                            }
                        case 21:
                            var2 = _closure2_slot2;
                            var2 = var2.username;
                            var6 = _closure1_slot4;
                            var5 = _closure2_slot2;
                            var3 = _closure1_slot3;
                            var4 = undefined;
                            var3 = var6.bind(var4)(var5, var3);
                            var2 = _closure1_slot7;
                            var2 = var2.bind(var4)(var3);
                        case 62:
                            var2 = _closure2_slot0;
                            var0 = var1.toLowerCase;
                            var1 = var0.bind(var1)();
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var17 = var7.bind(var4)(var1, var2);
                var7 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var14 = var7.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var13 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot11;
                var0 = {};
                var7 = _closure1_slot9;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var4 = 14;
                var4 = var19[var4];
                var4 = var18.bind(var3)(var4);
                var6 = var4.TextInput;
                var4 = {};
                var4.ref = var20;
                var20 = 12;
                var21 = var19[var20];
                var21 = var18.bind(var3)(var21);
                var23 = var21.intl;
                var22 = var23.string;
                var21 = var19[var20];
                var21 = var18.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.IEpCBQ;
                var21 = var22.bind(var23)(var21);
                var4.label = var21;
                var21 = var19[var20];
                var21 = var18.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var19[var20];
                var20 = var18.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["47dcUZ"];
                var20 = var21.bind(var22)(var20);
                var4.accessibilityHint = var20;
                var4.onChange = var17;
                var17 = false;
                var4.autoCorrect = var17;
                var17 = 15;
                var20 = var19[var17];
                var21 = var18.bind(var3)(var20);
                var20 = var21.isAndroid;
                var20 = var20.bind(var21)();
                var4.secureTextEntry = var20;
                var17 = var19[var17];
                var18 = var18.bind(var3)(var17);
                var17 = var18.isAndroid;
                var18 = var17.bind(var18)();
                var17 = 'default';
                if (!var18) {
                    _fun100402_ip = 486;
                    continue _fun100402
                }
            case 480:
                var17 = 'visible-password';
            case 486:
                var4.keyboardType = var17;
                var4.value = var16;
                var4.onSubmitEditing = var15;
                var15 = 'next';
                var4.returnKeyType = var15;
                var15 = 'username';
                var4.autoComplete = var15;
                var4.textContentType = var15;
                var15 = 'none';
                var4.autoCapitalize = var15;
                var4.onFocus = var14;
                var4.onBlur = var13;
                var4.isClearable = var12;
                var11 = var11 == var9;
                var13 = undefined;
                if (var11) {
                    _fun100402_ip = 561;
                    continue _fun100402
                }
            case 556:
                var13 = var9.type;
            case 561:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 7;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.NameValidationState;
                var12 = var11.ERROR;
                var11 = undefined;
                if (!(var13 === var12)) {
                    _fun100402_ip = 603;
                    continue _fun100402
                }
            case 599:
                var11 = 'error';
            case 603:
                var4.status = var11;
                var4.submitBehavior = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot15;
                var5 = {};
                var5.usernameStatus = var9;
                var5.isUsernameFocused = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.RegisterUsernameInput = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 57, 31, 13006, 33, 1297, 3681, 10260, 4041, 5355, 671, 3902, 1234, 13024, 5365, 478, 2]);