// modules/verification/native/components/EnterEmail.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot7 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useChangeEmailError;
    var _closure1_slot10 = var6;
    var6 = var3.useChangeEmailStore;
    var _closure1_slot11 = var6;
    var3 = var3.ChangeEmailFields;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 9;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.background = var8;
    var9 = 16;
    var8 = {
        'paddingVertical': 12,
        'paddingHorizontal': 16
    };
    var3.container = var8;
    var8 = {};
    var10 = 'center';
    var8.textAlign = var10;
    var3.title = var8;
    var8 = {
        'marginTop': 8,
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.prompt = var8;
    var8 = {};
    var10 = 24;
    var8.marginTop = var10;
    var3.input = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/EnterEmail.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61518: for (var _fun61518_ip = 0;;) switch (_fun61518_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.isChangeEmail;
                var _closure2_slot0 = var6;
                var5 = var1.changeEmailReason;
                var _closure2_slot1 = var5;
                var1 = _closure1_slot16;
                var4 = undefined;
                var17 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 10;
                var1 = var3[var1];
                var7 = var2.bind(var4)(var1);
                var1 = var7.useNavigation;
                var10 = var1.bind(var7)();
                var _closure2_slot2 = var10;
                var1 = 11;
                var1 = var3[var1];
                var7 = var2.bind(var4)(var1);
                var3 = var7.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var3.bind(var7)(var2, var1);
                var _closure2_slot3 = var13;
                var3 = _closure1_slot6;
                var1 = var3.useState;
                var12 = '';
                var1 = var1.bind(var3)(var12);
                var9 = _closure1_slot5;
                var8 = 2;
                var1 = var9.bind(var4)(var1, var8);
                var7 = 0;
                var14 = var1[var7];
                var _closure2_slot4 = var14;
                var2 = 1;
                var22 = var1[var2];
                var11 = _closure1_slot10;
                var1 = _closure1_slot12;
                var1 = var1.EMAIL;
                var1 = var11.bind(var4)(var1);
                var1 = var9.bind(var4)(var1, var8);
                var18 = var1[var7];
                var9 = var1[var2];
                var _closure2_slot5 = var9;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                var8 = var1.emailToken;
                var _closure2_slot6 = var8;
                var7 = var3.useCallback;
                var2 = new Array(1);
                var2[0] = var10;
                var1 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure2_slot2;
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    var2 = var1.routes;
                    var1 = var2.findIndex;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.name;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var3)(var1, var2);
                var _closure2_slot7 = var7;
                var2 = var3.useCallback;
                var1 = new Array(8);
                var1[0] = var10;
                var1[1] = var13;
                var1[2] = var9;
                var1[3] = var14;
                var1[4] = var8;
                var1[5] = var7;
                var1[6] = var6;
                var1[7] = var5;
                var0 = function() { // Environment: var0
                    var4 = _closure2_slot2;
                    var3 = var4.push;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.VerificationModalScenes;
                    var2 = var1.VERIFY_PASSWORD;
                    var1 = {};
                    var7 = _closure1_slot4;
                    var6 = function*(arg0) { // Environment: var5
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun61524: for (var _fun61524_ip = 0;;) switch (_fun61524_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun61524_ip = 127;
                                        continue _fun61524
                                    }
                                case 7:
                                    var1 = _closure2_slot3;
                                    var4 = null;
                                    var3 = var4 == var1;
                                    var1 = null;
                                    if (var3) {
                                        _fun61524_ip = 124;
                                        continue _fun61524
                                    }
                                case 25:
                                    var3 = _closure2_slot5;
                                    var5 = undefined;
                                    var3 = var3.bind(var5)(var4);
                                    var4 = _closure1_slot2;
                                    var6 = _closure1_slot3;
                                    var3 = 13;
                                    var3 = var6[var3];
                                    var6 = var4.bind(var5)(var3);
                                    var5 = var6.saveEmail;
                                    var4 = {};
                                    var3 = _closure2_slot4;
                                    var4.email = var3;
                                    var3 = arg0;
                                    var4.password = var3;
                                    var3 = _closure2_slot6;
                                    var4.emailToken = var3;
                                    var3 = _closure2_slot2;
                                    var2 = _closure2_slot7;
                                    var2 = var5.bind(var6)(var4, var3, var2);
                                    SaveGenerator(address = 112);
                                case 110:
                                    return var2;
                                case 112:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                    var1 = var2;
                                    if (!var3) {
                                        _fun61524_ip = 124;
                                        continue _fun61524
                                    }
                                case 121:
                                    return var2;
                                case 124:
                                    return var1;
                                case 127:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var6 = var7.bind(var0)(var6);
                    var _closure3_slot0 = var6;
                    var6 = function() { // Environment: var5
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var1.onSubmit = var6;
                    var5 = function() {
                        _fun61526: for (var _fun61526_ip = 0;;) switch (_fun61526_ip) {
                            case 0:
                                var2 = _closure2_slot0;
                                if (var2) {
                                    _fun61526_ip = 57;
                                    continue _fun61526
                                }
                            case 13:
                                var4 = _closure1_slot2;
                                var3 = _closure1_slot3;
                                var2 = 13;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.finishVerifyEmailFlow;
                                var3 = _closure2_slot2;
                                var2 = _closure2_slot7;
                                var2 = var4.bind(var5)(var3, var2);
                                _fun61526_ip = 147;
                                continue _fun61526;
                            case 57:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var2 = 14;
                                var2 = var4[var2];
                                var3 = undefined;
                                var7 = var5.bind(var3)(var2);
                                var6 = var7.track;
                                var2 = _closure1_slot13;
                                var5 = var2.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL;
                                var2 = {};
                                var8 = _closure2_slot1;
                                var2.change_email_reason_enum = var8;
                                var2 = var6.bind(var7)(var5, var2);
                                var2 = _closure1_slot2;
                                var1 = 13;
                                var1 = var4[var1];
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.finishChangeEmailFlow;
                                var1 = _closure2_slot2;
                                var0 = _closure2_slot4;
                                var0 = var2.bind(var3)(var1, var0);
                            case 147:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onSuccess = var5;
                    var5 = true;
                    var1.hideUnverifiedBanner = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var15 = var2.bind(var3)(var0, var1);
                var20 = null;
                var1 = var20 == var13;
                var0 = null;
                if (var1) {
                    _fun61518_ip = 1131;
                    continue _fun61518
                }
            case 313:
                var3 = _closure1_slot14;
                var2 = _closure1_slot8;
                var1 = {
                    'style': null,
                    'keyboardShouldPersistTaps': 'handled',
                    'alwaysBounceVertical': false
                };
                var5 = var17.background;
                var1.style = var5;
                var7 = _closure1_slot15;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = var17.container;
                var5.style = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var19 = 15;
                var8 = var8[var19];
                var8 = var9.bind(var4)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var10 = var17.title;
                var8.style = var10;
                var10 = var13.email;
                if (!(var20 == var10)) {
                    _fun61518_ip = 485;
                    continue _fun61518
                }
            case 426:
                var23 = _closure1_slot0;
                var24 = _closure1_slot3;
                var10 = 16;
                var11 = var24[var10];
                var11 = var23.bind(var4)(var11);
                var21 = var11.intl;
                var11 = var21.string;
                var10 = var24[var10];
                var10 = var23.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["CDTD/K"];
                var10 = var11.bind(var21)(var10);
                _fun61518_ip = 540;
                continue _fun61518;
            case 485:
                var24 = _closure1_slot0;
                var25 = _closure1_slot3;
                var11 = 16;
                var21 = var25[var11];
                var21 = var24.bind(var4)(var21);
                var23 = var21.intl;
                var21 = var23.string;
                var11 = var25[var11];
                var11 = var24.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.Vm8akB;
                var10 = var21.bind(var23)(var11);
            case 540:
                var8.children = var10;
                var9 = var3.bind(var4)(var9, var8);
                var8 = new Array(4);
                var8[0] = var9;
                var11 = _closure1_slot14;
                var10 = _closure1_slot0;
                var9 = _closure1_slot3;
                var9 = var9[var19];
                var9 = var10.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var19 = var17.prompt;
                var9.style = var19;
                var19 = var13.email;
                if (!(var20 == var19)) {
                    _fun61518_ip = 679;
                    continue _fun61518
                }
            case 620:
                var23 = _closure1_slot0;
                var24 = _closure1_slot3;
                var19 = 16;
                var20 = var24[var19];
                var20 = var23.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var24[var19];
                var19 = var23.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.YXXMxK;
                var19 = var20.bind(var21)(var19);
                _fun61518_ip = 750;
                continue _fun61518;
            case 679:
                var21 = _closure1_slot0;
                var25 = _closure1_slot3;
                var20 = 16;
                var23 = var25[var20];
                var23 = var21.bind(var4)(var23);
                var24 = var23.intl;
                var23 = var24.formatToPlainString;
                var20 = var25[var20];
                var20 = var21.bind(var4)(var20);
                var20 = var20.t;
                var21 = var20.Z7CaI7;
                var20 = {};
                var25 = var13.email;
                var20.email = var25;
                var19 = var23.bind(var24)(var21, var20);
            case 750:
                var9.children = var19;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var11 = _closure1_slot14;
                var21 = _closure1_slot1;
                var20 = _closure1_slot3;
                var9 = 17;
                var9 = var20[var9];
                var10 = var21.bind(var4)(var9);
                var9 = {};
                var19 = var17.input;
                var9.style = var19;
                var19 = _closure1_slot0;
                var16 = 16;
                var23 = var20[var16];
                var23 = var19.bind(var4)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var20[var16];
                var23 = var19.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23["w/qqKK"];
                var23 = var24.bind(var25)(var23);
                var9.label = var23;
                var23 = 'emailAddress';
                var9.textContentType = var23;
                var23 = 'email-address';
                var9.keyboardType = var23;
                var9.value = var14;
                var9.onChangeText = var22;
                var9.onSubmitEditing = var15;
                var22 = var20[var16];
                var22 = var19.bind(var4)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var20[var16];
                var22 = var19.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.dI4d4S;
                var22 = var23.bind(var24)(var22);
                var9.placeholder = var22;
                var22 = 'done';
                var9.returnKeyType = var22;
                var22 = 'none';
                var9.autoCapitalize = var22;
                var9.error = var18;
                var18 = true;
                var9.autoFocus = var18;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var18 = 18;
                var9 = var20[var18];
                var10 = var21.bind(var4)(var9);
                var9 = {};
                var18 = var20[var18];
                var18 = var21.bind(var4)(var18);
                var18 = var18.Sizes;
                var18 = var18.MEDIUM;
                var9.size = var18;
                var17 = var17.button;
                var9.style = var17;
                var17 = var20[var16];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.Vm8akB;
                var16 = var17.bind(var18)(var16);
                var9.text = var16;
                var9.onPress = var15;
                var12 = var12 === var14;
                if (var12) {
                    _fun61518_ip = 1097;
                    continue _fun61518
                }
            case 1087:
                var13 = var13.email;
                var12 = var14 === var13;
            case 1097:
                var9.disabled = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1131:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1621, 7536, 660, 33, 1297, 671, 1469, 566, 670, 7618, 795, 3942, 1234, 5933, 4875, 2]);