// modules/mfa/native/screens/PasswordScreen.tsx
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
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mfa/native/screens/PasswordScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PasswordScreen, environment: var1
        _fun86320: for (var _fun86320_ip = 0;;) switch (_fun86320_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.mfaChallenge;
                var6 = var1.finish;
                var _closure2_slot0 = var6;
                var1 = _closure1_slot1;
                var21 = _closure1_slot2;
                var2 = 5;
                var2 = var21[var2];
                var3 = undefined;
                var4 = var1.bind(var3)(var2);
                var2 = var4.useScreenStyles;
                var4 = var2.bind(var4)();
                var12 = _closure1_slot5;
                var5 = var12.useState;
                var2 = null;
                var2 = var5.bind(var12)(var2);
                var9 = _closure1_slot4;
                var8 = 2;
                var2 = var9.bind(var3)(var2, var8);
                var15 = 0;
                var20 = var2[var15];
                var5 = 1;
                var2 = var2[var5];
                var _closure2_slot1 = var2;
                var10 = var12.useState;
                var2 = '';
                var2 = var10.bind(var12)(var2);
                var2 = var9.bind(var3)(var2, var8);
                var14 = var2[var15];
                var _closure2_slot2 = var14;
                var18 = var2[var5];
                var2 = var12.useState;
                var10 = false;
                var2 = var2.bind(var12)(var10);
                var2 = var9.bind(var3)(var2, var8);
                var11 = var2[var15];
                var2 = var2[var5];
                var _closure2_slot3 = var2;
                var2 = var12.useState;
                var2 = var2.bind(var12)(var10);
                var2 = var9.bind(var3)(var2, var8);
                var12 = var2[var15];
                var2 = var2[var5];
                var _closure2_slot4 = var2;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun86323: for (var _fun86323_ip = 0;;) switch (_fun86323_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun86323_ip = 160;
                                        continue _fun86323
                                    }
                                case 10:
                                    var1 = undefined;
                                    var5 = undefined;
                                    var8 = undefined;
                                    var4 = _closure2_slot1;
                                    var7 = null;
                                    var4 = var4.bind(var1)(var7);
                                    var4 = _closure2_slot3;
                                    var9 = true;
                                    var4 = var4.bind(var1)(var9);
                                case 41: // try_start_0
                                    var6 = _closure2_slot0;
                                    var4 = {};
                                    var10 = 'password';
                                    var4.mfaType = var10;
                                    var10 = _closure2_slot2;
                                    var4.data = var10;
                                    var4 = var6.bind(var1)(var4);
                                    SaveGenerator(address = 73);
                                case 71:
                                    return var4;
                                case 73:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun86323_ip = 90;
                                        continue _fun86323
                                    }
                                case 79:
                                    var6 = _closure2_slot4;
                                    var6 = var6.bind(var1)(var9);
                                case 88: // try_end0
                                    _fun86323_ip = 146;
                                    continue _fun86323;
                                case 90:
                                    return var4;
                                case 93: // catch_target0
                                    CatchBlockStart(arg_register = 6);
                                    var3 = var6;
                                    var4 = _closure2_slot1;
                                    var6 = var6.body;
                                    var8 = var6;
                                    var9 = var7 == var6;
                                    var6 = undefined;
                                    if (var9) {
                                        _fun86323_ip = 124;
                                        continue _fun86323
                                    }
                                case 119:
                                    var6 = var8.message;
                                case 124:
                                    var5 = var6;
                                    if (!(var7 == var6)) {
                                        _fun86323_ip = 138;
                                        continue _fun86323
                                    }
                                case 131:
                                    var3 = var3.message;
                                    _fun86323_ip = 141;
                                    continue _fun86323;
                                case 138:
                                    var3 = var5;
                                case 141:
                                    var3 = var4.bind(var1)(var3);
                                case 146:
                                    var3 = _closure2_slot3;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                case 160:
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
                var10 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var0 = 6;
                var0 = var21[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var24 = _closure1_slot0;
                var19 = 7;
                var5 = var21[var19];
                var5 = var24.bind(var3)(var5);
                var9 = var5.intl;
                var8 = var9.string;
                var5 = var21[var19];
                var5 = var24.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.Rw1XuM;
                var5 = var8.bind(var9)(var5);
                var0.headerText = var5;
                var8 = _closure1_slot6;
                var5 = {};
                var4 = var4.inputContainer;
                var5.style = var4;
                var4 = 8;
                var4 = var21[var4];
                var4 = var24.bind(var3)(var4);
                var13 = var4.TextInput;
                var9 = {
                    'autoFocus': true,
                    'textContentType': 'password',
                    'label': null,
                    'placeholder': null,
                    'autoComplete': 'current-password',
                    'errorMessage': null,
                    'returnKeyType': 'done'
                };
                var17 = true;
                var4 = 'password';
                var22 = var21[var19];
                var22 = var24.bind(var3)(var22);
                var25 = var22.intl;
                var23 = var25.string;
                var22 = var21[var19];
                var22 = var24.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["CIGa+7"];
                var22 = var23.bind(var25)(var22);
                var9.label = var22;
                var22 = var21[var19];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var19];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["CIGa+7"];
                var21 = var22.bind(var23)(var21);
                var9.placeholder = var21;
                var9.errorMessage = var20;
                var9.onChange = var18;
                var9.onSubmitEditing = var10;
                var18 = var11;
                if (var11) {
                    _fun86320_ip = 458;
                    continue _fun86320
                }
            case 455:
                var18 = var12;
            case 458:
                var9.isDisabled = var18;
                var9.isClearable = var17;
                var9.secureTextEntry = var17;
                var9 = var2.bind(var3)(var13, var9);
                var5.children = var9;
                var5 = var2.bind(var3)(var8, var5);
                var0.input = var5;
                var9 = _closure1_slot7;
                var8 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 9;
                var5 = var13[var5];
                var8 = var8.bind(var3)(var5);
                var5 = {};
                var18 = _closure1_slot0;
                var16 = var13[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var13 = var13[var19];
                var13 = var18.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.geKm7t;
                var13 = var16.bind(var17)(var13);
                var5.text = var13;
                var13 = var11;
                if (var11) {
                    _fun86320_ip = 581;
                    continue _fun86320
                }
            case 578:
                var13 = var12;
            case 581:
                if (var13) {
                    _fun86320_ip = 593;
                    continue _fun86320
                }
            case 584:
                var14 = var14.length;
                var13 = var15 === var14;
            case 593:
                var5.disabled = var13;
                if (var11) {
                    _fun86320_ip = 603;
                    continue _fun86320
                }
            case 600:
                var11 = var12;
            case 603:
                var5.loading = var11;
                var5.onPress = var10;
                var5 = var9.bind(var3)(var8, var5);
                var0.submit = var5;
                var5 = {};
                var5.mfaChallenge = var7;
                var5.finish = var6;
                var0.screenProps = var5;
                var0.mfaMethod = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 33, 11115, 11114, 1234, 5358, 11117, 2]);