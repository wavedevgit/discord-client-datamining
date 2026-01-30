// modules/verification/native/components/ConfirmEmailCode.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useChangeEmailError;
    var _closure1_slot9 = var6;
    var3 = var3.ChangeEmailFields;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingVertical = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.background = var8;
    var8 = {};
    var11 = 'center';
    var8.textAlign = var11;
    var3.title = var8;
    var8 = {
        'marginTop': 8,
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.prompt = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.marginTop = var11;
    var3.input = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_24;
    var8.gap = var9;
    var3.contentContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/ConfirmEmailCode.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ConfirmEmailCode, environment: var1
        _fun60444: for (var _fun60444_ip = 0;;) switch (_fun60444_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.onFormSubmit;
                var _closure2_slot0 = var7;
                var6 = var0.onSuccess;
                var _closure2_slot1 = var6;
                var1 = var0.onResend;
                var _closure2_slot2 = var1;
                var20 = var0.headerText;
                var13 = var0.confirmButtonText;
                var0 = _closure1_slot13;
                var4 = undefined;
                var24 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var18
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var2.bind(var3)(var1, var0);
                var5 = _closure1_slot5;
                var0 = var5.useState;
                var10 = '';
                var0 = var0.bind(var5)(var10);
                var12 = _closure1_slot4;
                var11 = 2;
                var0 = var12.bind(var4)(var0, var11);
                var3 = 0;
                var9 = var0[var3];
                var _closure2_slot3 = var9;
                var2 = 1;
                var23 = var0[var2];
                var8 = _closure1_slot9;
                var0 = _closure1_slot10;
                var0 = var0.EMAIL_TOKEN;
                var0 = var8.bind(var4)(var0);
                var0 = var12.bind(var4)(var0, var11);
                var22 = var0[var3];
                var8 = var0[var2];
                var _closure2_slot4 = var8;
                var14 = var5.useState;
                var0 = false;
                var0 = var14.bind(var5)(var0);
                var0 = var12.bind(var4)(var0, var11);
                var11 = var0[var3];
                var0 = var0[var2];
                var _closure2_slot5 = var0;
                var3 = var5.useCallback;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var18
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60447: for (var _fun60447_ip = 0;;) switch (_fun60447_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60447_ip = 210;
                                    continue _fun60447
                                }
                            case 10:
                                var4 = undefined;
                                var6 = undefined;
                            case 14: // try_start_0 // try_start_1
                                var1 = _closure2_slot4;
                                var3 = null;
                                var1 = var1.bind(var4)(var3);
                                var5 = _closure2_slot5;
                                var1 = true;
                                var1 = var5.bind(var4)(var1);
                                var5 = _closure2_slot0;
                                var1 = _closure2_slot3;
                                var1 = var5.bind(var4)(var1);
                                SaveGenerator(address = 56);
                            case 54:
                                return var1;
                            case 56:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun60447_ip = 91;
                                    continue _fun60447
                                }
                            case 62:
                                var6 = var1;
                                var5 = _closure2_slot1;
                                var7 = var3 == var1;
                                var3 = undefined;
                                if (var7) {
                                    _fun60447_ip = 84;
                                    continue _fun60447
                                }
                            case 78:
                                var3 = var6.token;
                            case 84:
                                var3 = var5.bind(var4)(var3);
                            case 89: // try_end0
                                _fun60447_ip = 175;
                                continue _fun60447;
                            case 91: // try_end1
                                var3 = _closure2_slot5;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            case 105: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var2 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 10;
                                var1 = var5[var1];
                                var1 = var2.bind(var4)(var1);
                                var2 = var1.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var9 = var2;
                                var8 = var3;
                                var1 = new var9[var1](var8, var7);
                                var3 = var1 instanceof Object ? var1 : var2;
                                var2 = _closure2_slot4;
                                var1 = var3.getAnyErrorMessage;
                                var1 = var1.bind(var3)();
                                var1 = var2.bind(var4)(var1);
                            case 175: // try_end2
                                var2 = _closure2_slot5;
                                var1 = false;
                                var1 = var2.bind(var4)(var1);
                                return var4;
                            case 192: // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot5;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 210:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var4)(var0);
                var0 = new Array(4);
                var0[0] = var9;
                var0[1] = var8;
                var0[2] = var7;
                var0[3] = var6;
                var12 = var3.bind(var5)(var2, var0);
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun60444_ip = 844;
                    continue _fun60444
                }
            case 280:
                var3 = _closure1_slot12;
                var2 = _closure1_slot7;
                var1 = {
                    'style': null,
                    'keyboardShouldPersistTaps': 'handled',
                    'alwaysBounceVertical': false
                };
                var5 = var24.background;
                var1.style = var5;
                var5 = var24.contentContainer;
                var1.contentContainerStyle = var5;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = _closure1_slot11;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var16 = 11;
                var15 = var14[var16];
                var15 = var7.bind(var4)(var15);
                var17 = var15.Text;
                var15 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = var24.title;
                var15.style = var21;
                var15.children = var20;
                var17 = var8.bind(var4)(var17, var15);
                var15 = new Array(4);
                var15[0] = var17;
                var16 = var14[var16];
                var16 = var7.bind(var4)(var16);
                var17 = var16.Text;
                var16 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var20 = var24.prompt;
                var16.style = var20;
                var20 = 'text-sm/medium';
                var21 = 12;
                var25 = var14[var21];
                var25 = var7.bind(var4)(var25);
                var27 = var25.intl;
                var26 = var27.string;
                var25 = var14[var21];
                var25 = var7.bind(var4)(var25);
                var25 = var25.t;
                var25 = var25.SZJowy;
                var25 = var26.bind(var27)(var25);
                var16.children = var25;
                var16 = var8.bind(var4)(var17, var16);
                var15[1] = var16;
                var17 = _closure1_slot1;
                var16 = 13;
                var16 = var14[var16];
                var17 = var17.bind(var4)(var16);
                var16 = {};
                var24 = var24.input;
                var16.style = var24;
                var24 = var14[var21];
                var24 = var7.bind(var4)(var24);
                var26 = var24.intl;
                var25 = var26.string;
                var24 = var14[var21];
                var24 = var7.bind(var4)(var24);
                var24 = var24.t;
                var24 = var24["8mZX6M"];
                var24 = var25.bind(var26)(var24);
                var16.label = var24;
                var24 = 'emailAddress';
                var16.textContentType = var24;
                var24 = 'email-address';
                var16.keyboardType = var24;
                var16.value = var9;
                var16.onChangeText = var23;
                var16.onSubmitEditing = var12;
                var23 = 'done';
                var16.returnKeyType = var23;
                var23 = 'none';
                var16.autoCapitalize = var23;
                var16.error = var22;
                var22 = true;
                var16.autoFocus = var22;
                var16 = var8.bind(var4)(var17, var16);
                var15[2] = var16;
                var16 = 14;
                var16 = var14[var16];
                var16 = var7.bind(var4)(var16);
                var17 = var16.LinkButton;
                var16 = {};
                var22 = var14[var21];
                var22 = var7.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var14[var21];
                var21 = var7.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.K0NPQ6;
                var21 = var22.bind(var23)(var21);
                var16.text = var21;
                var16.variant = var20;
                var19 = _closure1_slot3;
                var18 = function*() { // Environment: var18
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60449: for (var _fun60449_ip = 0;;) switch (_fun60449_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60449_ip = 258;
                                    continue _fun60449
                                }
                            case 10:
                                var1 = undefined;
                                var5 = undefined;
                            case 14: // try_start_0
                                var2 = _closure2_slot2;
                                var2 = var2.bind(var1)();
                                SaveGenerator(address = 29);
                            case 27:
                                return var2;
                            case 29:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun60449_ip = 138;
                                    continue _fun60449
                                }
                            case 35:
                                var4 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var3 = 15;
                                var3 = var11[var3];
                                var6 = var4.bind(var1)(var3);
                                var4 = var6.open;
                                var3 = {};
                                var8 = 'USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT';
                                var3.key = var8;
                                var10 = _closure1_slot0;
                                var7 = 12;
                                var8 = var11[var7];
                                var8 = var10.bind(var1)(var8);
                                var9 = var8.intl;
                                var8 = var9.string;
                                var7 = var11[var7];
                                var7 = var10.bind(var1)(var7);
                                var7 = var7.t;
                                var7 = var7["84yeoz"];
                                var7 = var8.bind(var9)(var7);
                                var3.content = var7;
                                var3 = var4.bind(var6)(var3);
                            case 136: // try_end0
                                _fun60449_ip = 255;
                                continue _fun60449;
                            case 138:
                                return var2;
                            case 141: // catch_target0
                                CatchBlockStart(arg_register = 6);
                                var4 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var3 = 10;
                                var3 = var7[var3];
                                var3 = var4.bind(var1)(var3);
                                var4 = var3.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var13 = var4;
                                var12 = var6;
                                var3 = new var13[var3](var12, var11);
                                var4 = var3 instanceof Object ? var3 : var4;
                                var3 = var4.getAnyErrorMessage;
                                var4 = var3.bind(var4)();
                                var5 = var4;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun60449_ip = 255;
                                    continue _fun60449
                                }
                            case 208:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 15;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.open;
                                var2 = {};
                                var6 = 'CONFIRM_EMAIL_ERROR';
                                var2.key = var6;
                                var2.content = var5;
                                var2 = var3.bind(var4)(var2);
                            case 255:
                                return var1;
                            case 258:
                                return var0;
                        }
                    };
                    return var0;
                };
                var18 = var19.bind(var4)(var18);
                var16.onPress = var18;
                var16 = var8.bind(var4)(var17, var16);
                var15[3] = var16;
                var5.children = var15;
                var6 = var3.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 16;
                var6 = var14[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Button;
                var6 = {};
                var6.text = var13;
                var6.onPress = var12;
                var6.loading = var11;
                var9 = var10 === var9;
                var6.disabled = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 844:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1613, 7428, 33, 1297, 671, 566, 3311, 3901, 1234, 5843, 7440, 3107, 4043, 2]);