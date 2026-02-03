// modules/mfa/native/screens/BackupScreen.tsx
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
        _fun86727: for (var _fun86727_ip = 0;;) switch (_fun86727_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.length;
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 4;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var6.bind(var4)(var0);
                var0 = var0.BACKUP_CODE_MIN_LENGTH;
                var0 = var3 >= var0;
                if (!var0) {
                    _fun86727_ip = 78;
                    continue _fun86727
                }
            case 46:
                var2 = var2.length;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.BACKUP_CODE_MAX_LENGTH;
                var0 = var2 <= var1;
            case 78:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun86728: for (var _fun86728_ip = 0;;) switch (_fun86728_ip) {
            case 0:
                var10 = arg0;
                var3 = _closure1_slot6;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.Text;
                var0 = 0;
                if (!(!(var10 > var0))) {
                    _fun86728_ip = 180;
                    continue _fun86728
                }
            case 46:
                var0 = {};
                var4 = 'text-md/normal';
                var0.variant = var4;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 6;
                var4 = var11[var6];
                var4 = var9.bind(var2)(var4);
                var8 = var4.intl;
                var7 = var8.string;
                var4 = var11[var6];
                var4 = var9.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4.RRtlLg;
                var7 = var7.bind(var8)(var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = var11[var6];
                var7 = var9.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var11[var6];
                var6 = var9.bind(var2)(var6);
                var6 = var6.t;
                var6 = var6.v3a6Pd;
                var6 = var7.bind(var8)(var6);
                var4[1] = var6;
                var0.children = var4;
                _fun86728_ip = 320;
                continue _fun86728;
            case 180:
                var4 = {};
                var6 = 'text-md/normal';
                var4.variant = var6;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 6;
                var5 = var11[var6];
                var5 = var7.bind(var2)(var5);
                var9 = var5.intl;
                var8 = var9.string;
                var5 = var11[var6];
                var5 = var7.bind(var2)(var5);
                var5 = var5.t;
                var5 = var5.RRtlLg;
                var8 = var8.bind(var9)(var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = var11[var6];
                var8 = var7.bind(var2)(var8);
                var9 = var8.intl;
                var8 = var9.format;
                var6 = var11[var6];
                var6 = var7.bind(var2)(var6);
                var6 = var6.t;
                var7 = var6.tsWkAE;
                var6 = {};
                var6.countdown = var10;
                var6 = var8.bind(var9)(var7, var6);
                var5[1] = var6;
                var4.children = var5;
                var0 = var4;
            case 320:
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.Fragment;
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mfa/native/screens/BackupScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun86729: for (var _fun86729_ip = 0;;) switch (_fun86729_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.mfaChallenge;
                var5 = var0.finish;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot5;
                var0 = var4.useState;
                var8 = false;
                var0 = var0.bind(var4)(var8);
                var7 = _closure1_slot4;
                var3 = undefined;
                var2 = 2;
                var0 = var7.bind(var3)(var0, var2);
                var11 = 0;
                var9 = var0[var11];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot1 = var0;
                var10 = var4.useState;
                var0 = '';
                var0 = var10.bind(var4)(var0);
                var0 = var7.bind(var3)(var0, var2);
                var13 = var0[var11];
                var _closure2_slot2 = var13;
                var0 = var0[var1];
                var _closure2_slot3 = var0;
                var0 = var4.useState;
                var0 = var0.bind(var4)(var3);
                var0 = var7.bind(var3)(var0, var2);
                var20 = var0[var11];
                var0 = var0[var1];
                var _closure2_slot4 = var0;
                var0 = var4.useState;
                var0 = var0.bind(var4)(var8);
                var0 = var7.bind(var3)(var0, var2);
                var14 = var0[var11];
                var0 = var0[var1];
                var _closure2_slot5 = var0;
                var8 = var4.useState;
                var0 = 10;
                var0 = var8.bind(var4)(var0);
                var0 = var7.bind(var3)(var0, var2);
                var10 = var0[var11];
                var _closure2_slot6 = var10;
                var0 = var0[var1];
                var _closure2_slot7 = var0;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var10;
                var0 = function() { // Environment: var16
                    _fun86730: for (var _fun86730_ip = 0;;) switch (_fun86730_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = 0;
                            if (!(!(var2 <= var1))) {
                                _fun86730_ip = 57;
                                continue _fun86730
                            }
                        case 15:
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = function() { // Environment: var0
                                var2 = _closure2_slot7;
                                var0 = undefined;
                                var1 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var0 = 1;
                                    var0 = var1 - var0;
                                    return var0;
                                };
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = 1000;
                            var1 = var4.bind(var3)(var2, var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = var4.useCallback;
                var0 = function() { // Environment: var16
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun86736: for (var _fun86736_ip = 0;;) switch (_fun86736_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun86736_ip = 171;
                                        continue _fun86736
                                    }
                                case 10:
                                    var9 = arg0;
                                    var1 = undefined;
                                    var5 = undefined;
                                    var8 = undefined;
                                    var4 = _closure2_slot4;
                                    var4 = var4.bind(var1)(var1);
                                    var4 = _closure2_slot1;
                                    var7 = true;
                                    var4 = var4.bind(var1)(var7);
                                case 42: // try_start_0
                                    var6 = _closure2_slot0;
                                    var4 = {};
                                    var10 = 'backup';
                                    var4.mfaType = var10;
                                    var4.data = var9;
                                    var4 = var6.bind(var1)(var4);
                                    SaveGenerator(address = 70);
                                case 68:
                                    return var4;
                                case 70:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun86736_ip = 87;
                                        continue _fun86736
                                    }
                                case 76:
                                    var6 = _closure2_slot5;
                                    var6 = var6.bind(var1)(var7);
                                case 85: // try_end0
                                    _fun86736_ip = 157;
                                    continue _fun86736;
                                case 87:
                                    return var4;
                                case 90: // catch_target0
                                    CatchBlockStart(arg_register = 6);
                                    var3 = var6;
                                    var4 = _closure2_slot4;
                                    var7 = null;
                                    var9 = var7 == var6;
                                    var6 = undefined;
                                    if (var9) {
                                        _fun86736_ip = 135;
                                        continue _fun86736
                                    }
                                case 110:
                                    var9 = var3;
                                    var9 = var9.body;
                                    var8 = var9;
                                    var9 = var7 == var9;
                                    var6 = undefined;
                                    if (var9) {
                                        _fun86736_ip = 135;
                                        continue _fun86736
                                    }
                                case 130:
                                    var6 = var8.message;
                                case 135:
                                    var5 = var6;
                                    if (!(var7 == var6)) {
                                        _fun86736_ip = 149;
                                        continue _fun86736
                                    }
                                case 142:
                                    var3 = var3.message;
                                    _fun86736_ip = 152;
                                    continue _fun86736;
                                case 149:
                                    var3 = var5;
                                case 152:
                                    var3 = var4.bind(var1)(var3);
                                case 157:
                                    var3 = _closure2_slot1;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                case 171:
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
                var0 = var2.bind(var4)(var1, var0);
                var _closure2_slot8 = var0;
                var2 = _closure1_slot7;
                var18 = _closure1_slot1;
                var22 = _closure1_slot2;
                var0 = 7;
                var0 = var22[var0];
                var1 = var18.bind(var3)(var0);
                var0 = {};
                var23 = _closure1_slot0;
                var21 = 6;
                var4 = var22[var21];
                var4 = var23.bind(var3)(var4);
                var8 = var4.intl;
                var7 = var8.string;
                var4 = var22[var21];
                var4 = var23.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.B2T1HD;
                var4 = var7.bind(var8)(var4);
                var0.headerText = var4;
                var4 = var22[var21];
                var4 = var23.bind(var3)(var4);
                var8 = var4.intl;
                var7 = var8.string;
                var4 = var22[var21];
                var4 = var23.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.c5J7O0;
                var4 = var7.bind(var8)(var4);
                var0.subtitle = var4;
                var8 = _closure1_slot6;
                var7 = _closure1_slot8;
                var4 = {};
                var15 = _closure1_slot10;
                var15 = var15.bind(var3)(var10);
                var17 = new Array(2);
                var17[0] = var15;
                var15 = 8;
                var15 = var22[var15];
                var19 = var18.bind(var3)(var15);
                var18 = {};
                var15 = var22[var21];
                var15 = var23.bind(var3)(var15);
                var25 = var15.intl;
                var24 = var25.string;
                var15 = var22[var21];
                var15 = var23.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["C/ZAw/"];
                var15 = var24.bind(var25)(var15);
                var18.label = var15;
                var15 = var22[var21];
                var15 = var23.bind(var3)(var15);
                var25 = var15.intl;
                var24 = var25.string;
                var15 = var22[var21];
                var15 = var23.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.fZSi1D;
                var15 = var24.bind(var25)(var15);
                var18.placeholder = var15;
                var15 = _closure1_slot9;
                var18.isValidClipboardCode = var15;
                var15 = 4;
                var22 = var22[var15];
                var22 = var23.bind(var3)(var22);
                var22 = var22.BACKUP_CODE_MAX_LENGTH;
                var18.maxLength = var22;
                var22 = function arg0() {
                    var3 = _closure2_slot3;
                    var0 = undefined;
                    var2 = arg0;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var0)(var0);
                    return var0;
                };
                var18.onChangeCode = var22;
                var18.error = var20;
                var20 = var9;
                if (var9) {
                    _fun86729_ip = 593;
                    continue _fun86729
                }
            case 590:
                var20 = var14;
            case 593:
                var18.isDisabled = var20;
                var18 = var2.bind(var3)(var19, var18);
                var17[1] = var18;
                var4.children = var17;
                var4 = var8.bind(var3)(var7, var4);
                var0.input = var4;
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var17 = _closure1_slot2;
                var4 = 9;
                var4 = var17[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var18 = 'primary';
                var4.variant = var18;
                var20 = _closure1_slot0;
                var18 = var17[var21];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.geKm7t;
                var17 = var18.bind(var19)(var17);
                var4.text = var17;
                var17 = var9;
                if (var9) {
                    _fun86729_ip = 718;
                    continue _fun86729
                }
            case 715:
                var17 = var14;
            case 718:
                var4.loading = var17;
                var16 = function() {
                    var2 = _closure2_slot8;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onPress = var16;
                if (var9) {
                    _fun86729_ip = 740;
                    continue _fun86729
                }
            case 737:
                var9 = var14;
            case 740:
                if (var9) {
                    _fun86729_ip = 775;
                    continue _fun86729
                }
            case 743:
                var13 = var13.length;
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var15];
                var12 = var14.bind(var3)(var12);
                var12 = var12.BACKUP_CODE_MIN_LENGTH;
                var9 = var13 < var12;
            case 775:
                if (var9) {
                    _fun86729_ip = 782;
                    continue _fun86729
                }
            case 778:
                var9 = var10 > var11;
            case 782:
                var4.disabled = var9;
                var4 = var8.bind(var3)(var7, var4);
                var0.submit = var4;
                var4 = {};
                var4.mfaChallenge = var6;
                var4.finish = var5;
                var0.screenProps = var4;
                var4 = 'backup';
                var0.mfaMethod = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 33, 11204, 3932, 1234, 11199, 11205, 11202, 2]);