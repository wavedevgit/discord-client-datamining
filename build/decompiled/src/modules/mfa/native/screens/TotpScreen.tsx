// modules/mfa/native/screens/TotpScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun86856: for (var _fun86856_ip = 0;;) switch (_fun86856_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.length;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var2);
                var0 = var0.TOTP_CODE_LENGTH;
                var0 = var1 === var0;
                if (!var0) {
                    _fun86856_ip = 70;
                    continue _fun86856
                }
            case 46:
                var2 = /^\d+$/;
                var1 = var2.test;
                var0 = var1.bind(var2)(var3);
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mfa/native/screens/TotpScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun86857: for (var _fun86857_ip = 0;;) switch (_fun86857_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.mfaChallenge;
                var5 = var0.finish;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot5;
                var0 = var4.useState;
                var13 = false;
                var0 = var0.bind(var4)(var13);
                var12 = _closure1_slot4;
                var3 = undefined;
                var7 = 2;
                var0 = var12.bind(var3)(var0, var7);
                var2 = 0;
                var9 = var0[var2];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot1 = var0;
                var8 = var4.useState;
                var0 = '';
                var0 = var8.bind(var4)(var0);
                var0 = var12.bind(var3)(var0, var7);
                var11 = var0[var2];
                var _closure2_slot2 = var11;
                var0 = var0[var1];
                var _closure2_slot3 = var0;
                var0 = var4.useState;
                var0 = var0.bind(var4)(var3);
                var0 = var12.bind(var3)(var0, var7);
                var8 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot4 = var0;
                var0 = var4.useState;
                var0 = var0.bind(var4)(var13);
                var0 = var12.bind(var3)(var0, var7);
                var12 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot5 = var0;
                var2 = var4.useCallback;
                var0 = function() { // Environment: var14
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun86860: for (var _fun86860_ip = 0;;) switch (_fun86860_ip) {
                                case 0:
                                    StartGenerator();
                                    var6 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun86860_ip = 201;
                                        continue _fun86860
                                    }
                                case 13:
                                    var9 = var6;
                                    var1 = undefined;
                                    var5 = undefined;
                                    var8 = undefined;
                                    var4 = _closure2_slot3;
                                    var4 = var4.bind(var1)(var6);
                                    var4 = _closure1_slot7;
                                    var4 = var4.bind(var1)(var6);
                                    if (!var4) {
                                        _fun86860_ip = 198;
                                        continue _fun86860
                                    }
                                case 52:
                                    var4 = _closure2_slot4;
                                    var4 = var4.bind(var1)(var1);
                                    var4 = _closure2_slot1;
                                    var7 = true;
                                    var4 = var4.bind(var1)(var7);
                                case 72: // try_start_0
                                    var6 = _closure2_slot0;
                                    var4 = {};
                                    var10 = 'totp';
                                    var4.mfaType = var10;
                                    var4.data = var9;
                                    var4 = var6.bind(var1)(var4);
                                    SaveGenerator(address = 100);
                                case 98:
                                    return var4;
                                case 100:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun86860_ip = 117;
                                        continue _fun86860
                                    }
                                case 106:
                                    var6 = _closure2_slot5;
                                    var6 = var6.bind(var1)(var7);
                                case 115: // try_end0
                                    _fun86860_ip = 187;
                                    continue _fun86860;
                                case 117:
                                    return var4;
                                case 120: // catch_target0
                                    CatchBlockStart(arg_register = 6);
                                    var3 = var6;
                                    var4 = _closure2_slot4;
                                    var7 = null;
                                    var9 = var7 == var6;
                                    var6 = undefined;
                                    if (var9) {
                                        _fun86860_ip = 165;
                                        continue _fun86860
                                    }
                                case 140:
                                    var9 = var3;
                                    var9 = var9.body;
                                    var8 = var9;
                                    var9 = var7 == var9;
                                    var6 = undefined;
                                    if (var9) {
                                        _fun86860_ip = 165;
                                        continue _fun86860
                                    }
                                case 160:
                                    var6 = var8.message;
                                case 165:
                                    var5 = var6;
                                    if (!(var7 == var6)) {
                                        _fun86860_ip = 179;
                                        continue _fun86860
                                    }
                                case 172:
                                    var3 = var3.message;
                                    _fun86860_ip = 182;
                                    continue _fun86860;
                                case 179:
                                    var3 = var5;
                                case 182:
                                    var3 = var4.bind(var1)(var3);
                                case 187:
                                    var3 = _closure2_slot1;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                case 198:
                                    return var1;
                                case 201:
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
                var1 = var0.bind(var3)();
                var0 = new Array(1);
                var0[0] = var5;
                var15 = var2.bind(var4)(var1, var0);
                var _closure2_slot6 = var15;
                var2 = _closure1_slot6;
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var0 = 5;
                var0 = var16[var0];
                var1 = var7.bind(var3)(var0);
                var0 = {};
                var17 = _closure1_slot0;
                var19 = 6;
                var4 = var16[var19];
                var4 = var17.bind(var3)(var4);
                var18 = var4.intl;
                var13 = var18.string;
                var4 = var16[var19];
                var4 = var17.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.uc00u5;
                var4 = var13.bind(var18)(var4);
                var0.headerText = var4;
                var4 = 7;
                var4 = var16[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var13 = var16[var19];
                var13 = var17.bind(var3)(var13);
                var20 = var13.intl;
                var18 = var20.string;
                var13 = var16[var19];
                var13 = var17.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.HZPBOd;
                var13 = var18.bind(var20)(var13);
                var4.label = var13;
                var13 = var16[var19];
                var13 = var17.bind(var3)(var13);
                var20 = var13.intl;
                var18 = var20.string;
                var13 = var16[var19];
                var13 = var17.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.tARzgo;
                var13 = var18.bind(var20)(var13);
                var4.placeholder = var13;
                var13 = _closure1_slot7;
                var4.isValidClipboardCode = var13;
                var13 = 4;
                var16 = var16[var13];
                var16 = var17.bind(var3)(var16);
                var16 = var16.TOTP_CODE_LENGTH;
                var4.maxLength = var16;
                var4.onChangeCode = var15;
                var4.error = var8;
                var8 = var9;
                if (var9) {
                    _fun86857_ip = 443;
                    continue _fun86857
                }
            case 440:
                var8 = var12;
            case 443:
                var4.isDisabled = var8;
                var8 = 'oneTimeCode';
                var4.textContentType = var8;
                var8 = 'one-time-code';
                var4.autoComplete = var8;
                var8 = 'number-pad';
                var4.keyboardType = var8;
                var4 = var2.bind(var3)(var7, var4);
                var0.input = var4;
                var8 = _closure1_slot6;
                var7 = _closure1_slot1;
                var15 = _closure1_slot2;
                var4 = 8;
                var4 = var15[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var16 = 'primary';
                var4.variant = var16;
                var18 = _closure1_slot0;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.geKm7t;
                var15 = var16.bind(var17)(var15);
                var4.text = var15;
                var15 = var9;
                if (var9) {
                    _fun86857_ip = 585;
                    continue _fun86857
                }
            case 582:
                var15 = var12;
            case 585:
                var4.loading = var15;
                var14 = function() {
                    var2 = _closure2_slot6;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onPress = var14;
                if (var9) {
                    _fun86857_ip = 607;
                    continue _fun86857
                }
            case 604:
                var9 = var12;
            case 607:
                if (var9) {
                    _fun86857_ip = 642;
                    continue _fun86857
                }
            case 610:
                var11 = var11.length;
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var13];
                var10 = var12.bind(var3)(var10);
                var10 = var10.TOTP_CODE_LENGTH;
                var9 = var11 !== var10;
            case 642:
                var4.disabled = var9;
                var4 = var8.bind(var3)(var7, var4);
                var0.submit = var4;
                var4 = {};
                var4.mfaChallenge = var6;
                var4.finish = var5;
                var0.screenProps = var4;
                var4 = 'totp';
                var0.mfaMethod = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 33, 11247, 11242, 1234, 11248, 11245, 2]);