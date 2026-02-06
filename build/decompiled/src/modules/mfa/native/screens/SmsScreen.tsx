// modules/mfa/native/screens/SmsScreen.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mfa/native/screens/SmsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun86899: for (var _fun86899_ip = 0;;) switch (_fun86899_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.mfaChallenge;
                var _closure2_slot0 = var6;
                var5 = var0.finish;
                var _closure2_slot1 = var5;
                var7 = _closure1_slot1;
                var18 = _closure1_slot2;
                var0 = 6;
                var0 = var18[var0];
                var3 = undefined;
                var1 = var7.bind(var3)(var0);
                var0 = var1.useScreenStyles;
                var12 = var0.bind(var1)();
                var15 = _closure1_slot5;
                var1 = var15.useState;
                var0 = null;
                var0 = var1.bind(var15)(var0);
                var16 = _closure1_slot4;
                var11 = 2;
                var0 = var16.bind(var3)(var0, var11);
                var2 = 0;
                var21 = var0[var2];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot2 = var0;
                var0 = var15.useState;
                var19 = false;
                var0 = var0.bind(var15)(var19);
                var0 = var16.bind(var3)(var0, var11);
                var8 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot3 = var0;
                var4 = var15.useState;
                var0 = '';
                var0 = var4.bind(var15)(var0);
                var0 = var16.bind(var3)(var0, var11);
                var10 = var0[var2];
                var _closure2_slot4 = var10;
                var0 = var0[var1];
                var _closure2_slot5 = var0;
                var4 = var15.useState;
                var17 = _closure1_slot0;
                var14 = 7;
                var0 = var18[var14];
                var0 = var17.bind(var3)(var0);
                var22 = var0.intl;
                var20 = var22.string;
                var0 = var18[var14];
                var0 = var17.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.LQdCQE;
                var0 = var20.bind(var22)(var0);
                var0 = var4.bind(var15)(var0);
                var0 = var16.bind(var3)(var0, var11);
                var4 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot6 = var0;
                var0 = var15.useState;
                var0 = var0.bind(var15)(var19);
                var0 = var16.bind(var3)(var0, var11);
                var11 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot7 = var0;
                var2 = var15.useEffect;
                var0 = var6.ticket;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var13
                    var3 = _closure2_slot2;
                    var0 = undefined;
                    var2 = null;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.LOGIN_SMS_SEND;
                    var2.url = var5;
                    var5 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.ticket;
                    var5.ticket = var6;
                    var2.body = var5;
                    var5 = true;
                    var2.oldFormErrors = var5;
                    var5 = false;
                    var2.rejectWithError = var5;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot6;
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 7;
                        var4 = var6[var1];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var4);
                        var5 = var4.intl;
                        var4 = var5.formatToPlainString;
                        var1 = var6[var1];
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.t;
                        var3 = var1["8r6h7+"];
                        var1 = {};
                        var6 = arg0;
                        var6 = var6.body;
                        var6 = var6.phone;
                        var1.phoneNumber = var6;
                        var1 = var4.bind(var5)(var3, var1);
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function(arg0) { // Environment: var1
                        _fun86902: for (var _fun86902_ip = 0;;) switch (_fun86902_ip) {
                            case 0:
                                var4 = arg0;
                                var3 = _closure2_slot2;
                                var6 = var4.body;
                                var5 = null;
                                var7 = var5 == var6;
                                var0 = undefined;
                                var2 = undefined;
                                if (var7) {
                                    _fun86902_ip = 33;
                                    continue _fun86902
                                }
                            case 28:
                                var2 = var6.message;
                            case 33:
                                if (!(var5 == var2)) {
                                    _fun86902_ip = 42;
                                    continue _fun86902
                                }
                            case 37:
                                var2 = var4.message;
                            case 42:
                                var2 = var3.bind(var0)(var2);
                                var1 = _closure2_slot6;
                                var1 = var1.bind(var0)(var0);
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var15)(var0, var1);
                var0 = function() { // Environment: var13
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun86905: for (var _fun86905_ip = 0;;) switch (_fun86905_ip) {
                                case 0:
                                    StartGenerator();
                                    var4 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun86905_ip = 212;
                                        continue _fun86905
                                    }
                                case 13:
                                    var10 = var4;
                                    var1 = undefined;
                                    var5 = undefined;
                                    var8 = undefined;
                                    var6 = _closure2_slot5;
                                    var6 = var6.bind(var1)(var4);
                                    var6 = var4.length;
                                    var7 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var4 = 9;
                                    var4 = var9[var4];
                                    var4 = var7.bind(var1)(var4);
                                    var4 = var4.SMS_CODE_LENGTH;
                                    if (!(var6 === var4)) {
                                        _fun86905_ip = 209;
                                        continue _fun86905
                                    }
                                case 75:
                                    var4 = _closure2_slot2;
                                    var7 = null;
                                    var4 = var4.bind(var1)(var7);
                                    var4 = _closure2_slot3;
                                    var9 = true;
                                    var4 = var4.bind(var1)(var9);
                                case 97: // try_start_0
                                    var6 = _closure2_slot1;
                                    var4 = {};
                                    var11 = 'sms';
                                    var4.mfaType = var11;
                                    var4.data = var10;
                                    var4 = var6.bind(var1)(var4);
                                    SaveGenerator(address = 125);
                                case 123:
                                    return var4;
                                case 125:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun86905_ip = 142;
                                        continue _fun86905
                                    }
                                case 131:
                                    var6 = _closure2_slot7;
                                    var6 = var6.bind(var1)(var9);
                                case 140: // try_end0
                                    _fun86905_ip = 198;
                                    continue _fun86905;
                                case 142:
                                    return var4;
                                case 145: // catch_target0
                                    CatchBlockStart(arg_register = 6);
                                    var3 = var6;
                                    var4 = _closure2_slot2;
                                    var6 = var6.body;
                                    var8 = var6;
                                    var9 = var7 == var6;
                                    var6 = undefined;
                                    if (var9) {
                                        _fun86905_ip = 176;
                                        continue _fun86905
                                    }
                                case 171:
                                    var6 = var8.message;
                                case 176:
                                    var5 = var6;
                                    if (!(var7 == var6)) {
                                        _fun86905_ip = 190;
                                        continue _fun86905
                                    }
                                case 183:
                                    var3 = var3.message;
                                    _fun86905_ip = 193;
                                    continue _fun86905;
                                case 190:
                                    var3 = var5;
                                case 193:
                                    var3 = var4.bind(var1)(var3);
                                case 198:
                                    var3 = _closure2_slot3;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                case 209:
                                    return var1;
                                case 212:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var23 = var0.bind(var3)();
                var _closure2_slot8 = var23;
                var0 = function() { // Environment: var13
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun86909: for (var _fun86909_ip = 0;;) switch (_fun86909_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun86909_ip = 387;
                                        continue _fun86909
                                    }
                                case 10:
                                    var4 = undefined;
                                    var5 = undefined;
                                    var6 = undefined;
                                    var3 = _closure2_slot2;
                                    var7 = null;
                                    var3 = var3.bind(var4)(var7);
                                    var3 = _closure2_slot3;
                                    var9 = true;
                                    var3 = var3.bind(var4)(var9);
                                    var10 = _closure2_slot6;
                                    var13 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var14 = 7;
                                    var11 = var3[var14];
                                    var11 = var13.bind(var4)(var11);
                                    var12 = var11.intl;
                                    var11 = var12.string;
                                    var3 = var3[var14];
                                    var3 = var13.bind(var4)(var3);
                                    var3 = var3.t;
                                    var3 = var3.LQdCQE;
                                    var3 = var11.bind(var12)(var3);
                                    var3 = var10.bind(var4)(var3);
                                case 108: // try_start_0 // try_start_1
                                    var10 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var3 = 8;
                                    var3 = var11[var3];
                                    var3 = var10.bind(var4)(var3);
                                    var11 = var3.HTTP;
                                    var10 = var11.post;
                                    var3 = {};
                                    var12 = _closure1_slot7;
                                    var12 = var12.LOGIN_SMS_SEND;
                                    var3.url = var12;
                                    var12 = {};
                                    var13 = _closure2_slot0;
                                    var13 = var13.ticket;
                                    var12.ticket = var13;
                                    var3.body = var12;
                                    var3.oldFormErrors = var9;
                                    var9 = false;
                                    var3.rejectWithError = var9;
                                    var3 = var10.bind(var11)(var3);
                                    SaveGenerator(address = 196);
                                case 194:
                                    return var3;
                                case 196:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 10);
                                    if (var10) {
                                        _fun86909_ip = 284;
                                        continue _fun86909
                                    }
                                case 202:
                                    var10 = _closure2_slot6;
                                    var11 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var12 = var8[var14];
                                    var12 = var11.bind(var4)(var12);
                                    var13 = var12.intl;
                                    var12 = var13.formatToPlainString;
                                    var8 = var8[var14];
                                    var8 = var11.bind(var4)(var8);
                                    var8 = var8.t;
                                    var11 = var8["8r6h7+"];
                                    var8 = {};
                                    var14 = var3.body;
                                    var14 = var14.phone;
                                    var8.phoneNumber = var14;
                                    var8 = var12.bind(var13)(var11, var8);
                                    var8 = var10.bind(var4)(var8);
                                case 282: // try_end0
                                    _fun86909_ip = 358;
                                    continue _fun86909;
                                case 284: // try_end1
                                    var8 = _closure2_slot3;
                                    var8 = var8.bind(var4)(var9);
                                    return var3;
                                case 296: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 8);
                                    var1 = var8;
                                    var3 = _closure2_slot2;
                                    var8 = var8.message;
                                    var5 = var8;
                                    if (!(var7 == var8)) {
                                        _fun86909_ip = 341;
                                        continue _fun86909
                                    }
                                case 317:
                                    var1 = var1.body;
                                    var6 = var1;
                                    var7 = var7 == var1;
                                    var1 = undefined;
                                    if (var7) {
                                        _fun86909_ip = 339;
                                        continue _fun86909
                                    }
                                case 334:
                                    var1 = var6.message;
                                case 339:
                                    _fun86909_ip = 344;
                                    continue _fun86909;
                                case 341:
                                    var1 = var5;
                                case 344:
                                    var1 = var3.bind(var4)(var1);
                                    var1 = _closure2_slot6;
                                    var1 = var1.bind(var4)(var4);
                                case 358: // try_end2
                                    var3 = _closure2_slot3;
                                    var1 = false;
                                    var1 = var3.bind(var4)(var1);
                                    return var4;
                                case 372: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure2_slot3;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    throw var1;
                                case 387:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var22 = var0.bind(var3)();
                var2 = _closure1_slot8;
                var0 = 10;
                var0 = var18[var0];
                var1 = var7.bind(var3)(var0);
                var0 = {};
                var15 = var18[var14];
                var15 = var17.bind(var3)(var15);
                var19 = var15.intl;
                var16 = var19.string;
                var15 = var18[var14];
                var15 = var17.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.o4JNrO;
                var15 = var16.bind(var19)(var15);
                var0.headerText = var15;
                var0.subtitle = var4;
                var16 = _closure1_slot9;
                var15 = _closure1_slot6;
                var4 = {};
                var12 = var12.inputContainer;
                var4.style = var12;
                var12 = 11;
                var12 = var18[var12];
                var12 = var17.bind(var3)(var12);
                var20 = var12.TextInput;
                var19 = {
                    'autoFocus': true,
                    'autoCapitalize': 'characters',
                    'maxLength': null,
                    'autoComplete': 'sms-otp',
                    'textContentType': 'oneTimeCode',
                    'keyboardType': 'number-pad'
                };
                var12 = 9;
                var24 = var18[var12];
                var24 = var17.bind(var3)(var24);
                var24 = var24.SMS_CODE_LENGTH;
                var19.maxLength = var24;
                var19.onChange = var23;
                var23 = var18[var14];
                var23 = var17.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var18[var14];
                var23 = var17.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23["/sHnXc"];
                var23 = var24.bind(var25)(var23);
                var19.label = var23;
                var23 = var18[var14];
                var23 = var17.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var18[var14];
                var23 = var17.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.HZPBOd;
                var23 = var24.bind(var25)(var23);
                var19.accessibilityLabel = var23;
                var23 = var18[var14];
                var23 = var17.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var18[var14];
                var23 = var17.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.tARzgo;
                var23 = var24.bind(var25)(var23);
                var19.placeholder = var23;
                var19.errorMessage = var21;
                var20 = var2.bind(var3)(var20, var19);
                var19 = new Array(2);
                var19[0] = var20;
                var23 = 12;
                var20 = var18[var23];
                var21 = var7.bind(var3)(var20);
                var20 = {};
                var24 = var18[var14];
                var24 = var17.bind(var3)(var24);
                var26 = var24.intl;
                var25 = var26.string;
                var24 = var18[var14];
                var24 = var17.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.WbaP3r;
                var24 = var25.bind(var26)(var24);
                var20.text = var24;
                var24 = var18[var23];
                var24 = var7.bind(var3)(var24);
                var24 = var24.Looks;
                var24 = var24.LINK;
                var20.look = var24;
                var24 = var18[var23];
                var24 = var7.bind(var3)(var24);
                var24 = var24.Colors;
                var24 = var24.LINK;
                var20.color = var24;
                var23 = var18[var23];
                var23 = var7.bind(var3)(var23);
                var23 = var23.Sizes;
                var23 = var23.SMALL;
                var20.size = var23;
                var20.onPress = var22;
                var20 = var2.bind(var3)(var21, var20);
                var19[1] = var20;
                var4.children = var19;
                var4 = var16.bind(var3)(var15, var4);
                var0.input = var4;
                var4 = 13;
                var4 = var18[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var15 = 'primary';
                var4.variant = var15;
                var15 = var18[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.geKm7t;
                var14 = var15.bind(var16)(var14);
                var4.text = var14;
                var14 = var8;
                if (var8) {
                    _fun86899_ip = 906;
                    continue _fun86899
                }
            case 903:
                var14 = var11;
            case 906:
                var4.loading = var14;
                var13 = function() {
                    var2 = _closure2_slot8;
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onPress = var13;
                if (var8) {
                    _fun86899_ip = 928;
                    continue _fun86899
                }
            case 925:
                var8 = var11;
            case 928:
                if (var8) {
                    _fun86899_ip = 963;
                    continue _fun86899
                }
            case 931:
                var10 = var10.length;
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var9 = var11.bind(var3)(var9);
                var9 = var9.SMS_CODE_LENGTH;
                var8 = var10 !== var9;
            case 963:
                var4.disabled = var8;
                var4 = var2.bind(var3)(var7, var4);
                var0.submit = var4;
                var4 = {};
                var4.mfaChallenge = var6;
                var4.finish = var5;
                var0.screenProps = var4;
                var4 = 'sms';
                var0.mfaMethod = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 660, 33, 11243, 1234, 507, 11247, 11242, 5406, 4876, 11245, 2]);