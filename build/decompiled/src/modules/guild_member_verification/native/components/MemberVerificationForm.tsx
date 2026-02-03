// modules/guild_member_verification/native/components/MemberVerificationForm.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun60437: for (var _fun60437_ip = 0;;) switch (_fun60437_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.id;
                var _closure2_slot0 = var1;
                var2 = function arg0() {
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var5 = var4[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.useInitialVerification;
                    var3 = var3.id;
                    var3 = var5.bind(var6)(var3);
                    var _closure3_slot1 = var3;
                    var3 = _closure1_slot1;
                    var1 = 12;
                    var1 = var4[var1];
                    var1 = var3.bind(var2)(var1);
                    var0 = function() { // Environment: var0
                        _fun60439: for (var _fun60439_ip = 0;;) switch (_fun60439_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = var0.verificationLevel;
                                var0 = _closure1_slot9;
                                var0 = var0.VERY_HIGH;
                                if (!(var1 !== var0)) {
                                    _fun60439_ip = 99;
                                    continue _fun60439
                                }
                            case 30:
                                var0 = {};
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 13;
                                var7 = var6[var1];
                                var4 = undefined;
                                var7 = var5.bind(var4)(var7);
                                var7 = var7.VerificationFormFieldTypes;
                                var7 = var7.VERIFICATION;
                                var0.field_type = var7;
                                var1 = var6[var1];
                                var1 = var5.bind(var4)(var1);
                                var1 = var1.UserVerificationFieldPlatforms;
                                var1 = var1.EMAIL;
                                var0.platform = var1;
                                _fun60439_ip = 197;
                                continue _fun60439;
                            case 99:
                                var4 = _closure3_slot1;
                                var1 = null;
                                if (!(var1 != var4)) {
                                    _fun60439_ip = 124;
                                    continue _fun60439
                                }
                            case 109:
                                var2 = _closure3_slot1;
                                var2 = var2.phone;
                                var1 = null;
                                if (var2) {
                                    _fun60439_ip = 194;
                                    continue _fun60439
                                }
                            case 124:
                                var2 = {};
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 13;
                                var7 = var6[var3];
                                var4 = undefined;
                                var7 = var5.bind(var4)(var7);
                                var7 = var7.VerificationFormFieldTypes;
                                var7 = var7.VERIFICATION;
                                var2.field_type = var7;
                                var3 = var6[var3];
                                var3 = var5.bind(var4)(var3);
                                var3 = var3.UserVerificationFieldPlatforms;
                                var3 = var3.PHONE;
                                var2.platform = var3;
                                var1 = var2;
                            case 194:
                                var0 = var1;
                            case 197:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = undefined;
                var2 = var2.bind(var7)(var3);
                var _closure2_slot1 = var2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var6 = var3.bind(var7)(var2);
                var4 = var6.useStateFromStores;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.get;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var4.bind(var6)(var3, var1, var2);
                var _closure2_slot2 = var2;
                var6 = _closure1_slot5;
                var4 = var6.useMemo;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if (var3) {
                    _fun60437_ip = 120;
                    continue _fun60437
                }
            case 114:
                var1 = var2.formFields;
            case 120:
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    _fun60441: for (var _fun60441_ip = 0;;) switch (_fun60441_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = null;
                            var4 = var1 == var0;
                            var0 = undefined;
                            if (var4) {
                                _fun60441_ip = 55;
                                continue _fun60441
                            }
                        case 18:
                            var3 = _closure2_slot2;
                            var3 = var3.formFields;
                            var1 = var1 == var3;
                            var0 = undefined;
                            if (var1) {
                                _fun60441_ip = 55;
                                continue _fun60441
                            }
                        case 37:
                            var2 = var3.some;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.field_type;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 13;
                                var2 = var2[var0];
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                                var0 = var0.VerificationFormFieldTypes;
                                var0 = var0.TERMS;
                                var0 = var1 !== var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 55:
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1, var3);
                var _closure2_slot3 = var1;
                var3 = function() {
                    _fun60443: for (var _fun60443_ip = 0;;) switch (_fun60443_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun60443_ip = 78;
                                continue _fun60443
                            }
                        case 10:
                            var0 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun60443_ip = 78;
                                continue _fun60443
                            }
                        case 20:
                            var3 = _closure2_slot1;
                            var0 = new Array(1);
                            var0[0] = var3;
                            var3 = _closure2_slot2;
                            var4 = var1 == var3;
                            var3 = undefined;
                            if (var4) {
                                _fun60443_ip = 55;
                                continue _fun60443
                            }
                        case 45:
                            var4 = _closure2_slot2;
                            var3 = var4.formFields;
                        case 55:
                            if (!(var1 == var3)) {
                                _fun60443_ip = 63;
                                continue _fun60443
                            }
                        case 59:
                            var3 = new Array(0);
                        case 63:
                            var5 = 1;
                            var7 = var0;
                            var6 = var3;
                            var1 = arraySpread(var7, var6, var5);
                            _fun60443_ip = 130;
                            continue _fun60443;
                        case 78:
                            var3 = _closure2_slot2;
                            var1 = null;
                            var4 = var1 == var3;
                            var3 = undefined;
                            if (var4) {
                                _fun60443_ip = 103;
                                continue _fun60443
                            }
                        case 93:
                            var2 = _closure2_slot2;
                            var3 = var2.formFields;
                        case 103:
                            if (!(var1 == var3)) {
                                _fun60443_ip = 111;
                                continue _fun60443
                            }
                        case 107:
                            var3 = new Array(0);
                        case 111:
                            var1 = new Array(0);
                            var5 = 0;
                            var7 = var1;
                            var6 = var3;
                            var2 = arraySpread(var7, var6, var5);
                            var0 = var1;
                        case 130:
                            return var0;
                    }
                };
                var _closure2_slot4 = var3;
                var6 = _closure1_slot5;
                var4 = var6.useRef;
                var4 = var4.bind(var6)(var3);
                var _closure2_slot5 = var4;
                var8 = _closure1_slot5;
                var6 = var8.useEffect;
                var4 = function() { // Environment: var0
                    var1 = _closure2_slot5;
                    var0 = _closure2_slot4;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var4 = var6.bind(var8)(var4);
                var6 = _closure1_slot5;
                var4 = var6.useState;
                var3 = var3.bind(var7)();
                var6 = var4.bind(var6)(var3);
                var4 = _closure1_slot4;
                var3 = 2;
                var6 = var4.bind(var7)(var6, var3);
                var3 = 0;
                var4 = var6[var3];
                var3 = 1;
                var3 = var6[var3];
                var _closure2_slot6 = var3;
                var7 = _closure1_slot5;
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var2;
                var0 = function() { // Environment: var0
                    _fun60445: for (var _fun60445_ip = 0;;) switch (_fun60445_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun60445_ip = 37;
                                continue _fun60445
                            }
                        case 13:
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot5;
                            var0 = var1.current;
                            var1 = var0.bind(var1)();
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 37:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var0, var5);
                var0 = new Array(4);
                var0[0] = var4;
                var0[1] = var3;
                var0[2] = var2;
                var0[3] = var1;
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NO_MEMBER_VERIFICATION_FORM;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerificationLevels;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'flexDirection': 'column',
        'alignItems': 'stretch',
        'paddingHorizontal': 16,
        'paddingVertical': 0
    };
    var3.container = var8;
    var8 = {
        'marginTop': 12,
        'marginBottom': 12
    };
    var3.submitButton = var8;
    var8 = {
        'alignSelf': 'center',
        'paddingVertical': 16,
        'fontSize': 16
    };
    var3.error = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/MemberVerificationForm.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun60446: for (var _fun60446_ip = 0;;) switch (_fun60446_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.guild;
                var _closure2_slot0 = var17;
                var1 = var0.onSuccess;
                var _closure2_slot1 = var1;
                var7 = var0.onClose;
                var _closure2_slot2 = var7;
                var0 = _closure1_slot12;
                var4 = undefined;
                var15 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 11;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useUserVerificationState;
                var8 = var0.bind(var1)();
                var _closure2_slot3 = var8;
                var0 = _closure1_slot13;
                var2 = var0.bind(var4)(var17);
                var1 = _closure1_slot4;
                var0 = 4;
                var1 = var1.bind(var4)(var2, var0);
                var6 = 0;
                var16 = var1[var6];
                var _closure2_slot4 = var16;
                var5 = 1;
                var0 = var1[var5];
                var _closure2_slot5 = var0;
                var11 = 2;
                var2 = var1[var11];
                var _closure2_slot6 = var2;
                var0 = 3;
                var1 = var1[var0];
                var _closure2_slot7 = var1;
                var9 = _closure1_slot5;
                var3 = var9.useState;
                var0 = false;
                var3 = var3.bind(var9)(var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var4)(var3, var11);
                var10 = var0[var6];
                var0 = var0[var5];
                var _closure2_slot8 = var0;
                var9 = _closure1_slot5;
                var3 = var9.useState;
                var0 = null;
                var9 = var3.bind(var9)(var0);
                var3 = _closure1_slot4;
                var3 = var3.bind(var4)(var9, var11);
                var14 = var3[var6];
                var3 = var3[var5];
                var _closure2_slot9 = var3;
                var6 = _closure1_slot5;
                var5 = var6.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var2;
                var2 = function() { // Environment: var13
                    _fun60447: for (var _fun60447_ip = 0;;) switch (_fun60447_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = _closure1_slot8;
                            if (!(var2 === var1)) {
                                _fun60447_ip = 41;
                                continue _fun60447
                            }
                        case 18:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun60447_ip = 41;
                                continue _fun60447
                            }
                        case 28:
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 41:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var2, var3);
                var5 = _closure1_slot5;
                var3 = var5.useMemo;
                var6 = var17.verificationLevel;
                var2 = new Array(4);
                var2[0] = var6;
                var2[1] = var1;
                var2[2] = var8;
                var2[3] = var16;
                var1 = function() { // Environment: var13
                    _fun60448: for (var _fun60448_ip = 0;;) switch (_fun60448_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun60448_ip = 41;
                                continue _fun60448
                            }
                        case 13:
                            var3 = _closure2_slot4;
                            var2 = var3.some;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 15;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isValidFormResponse;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                var0 = !var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var0);
                            if (var0) {
                                _fun60448_ip = 278;
                                continue _fun60448
                            }
                        case 41:
                            var0 = _closure2_slot7;
                            if (var0) {
                                _fun60448_ip = 274;
                                continue _fun60448
                            }
                        case 51:
                            var0 = _closure2_slot0;
                            var3 = var0.verificationLevel;
                            var2 = _closure1_slot9;
                            var2 = var2.VERY_HIGH;
                            if (!(var2 !== var3)) {
                                _fun60448_ip = 227;
                                continue _fun60448
                            }
                        case 81:
                            var2 = _closure1_slot9;
                            var2 = var2.HIGH;
                            if (!(var2 !== var3)) {
                                _fun60448_ip = 137;
                                continue _fun60448
                            }
                        case 95:
                            var2 = _closure1_slot9;
                            var2 = var2.MEDIUM;
                            if (!(var2 !== var3)) {
                                _fun60448_ip = 137;
                                continue _fun60448
                            }
                        case 109:
                            var2 = _closure1_slot9;
                            var2 = var2.LOW;
                            if (!(var2 !== var3)) {
                                _fun60448_ip = 137;
                                continue _fun60448
                            }
                        case 123:
                            var2 = _closure1_slot9;
                            var2 = var2.NONE;
                            var2 = false;
                            return var2;
                        case 137:
                            var3 = _closure2_slot3;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 13;
                            var2 = var2[var7];
                            var6 = undefined;
                            var2 = var4.bind(var6)(var2);
                            var2 = var2.UserVerificationFieldPlatforms;
                            var2 = var2.EMAIL;
                            var2 = var3[var2];
                            var2 = !var2;
                            if (!var2) {
                                _fun60448_ip = 225;
                                continue _fun60448
                            }
                        case 185:
                            var4 = _closure2_slot3;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var3 = var5.bind(var6)(var3);
                            var3 = var3.UserVerificationFieldPlatforms;
                            var3 = var3.PHONE;
                            var3 = var4[var3];
                            var2 = !var3;
                        case 225:
                            return var2;
                        case 227:
                            var1 = _closure2_slot3;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = var0.UserVerificationFieldPlatforms;
                            var0 = var0.PHONE;
                            var0 = var1[var0];
                            var0 = !var0;
                            return var0;
                        case 274:
                            var0 = false;
                            return var0;
                        case 278:
                            var0 = true;
                            return var0;
                    }
                };
                var11 = var3.bind(var5)(var1, var2);
                var _closure2_slot10 = var11;
                if (!(var0 != var16)) {
                    _fun60446_ip = 650;
                    continue _fun60446
                }
            case 311:
                var1 = function() { // Environment: var13
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun60452: for (var _fun60452_ip = 0;;) switch (_fun60452_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun60452_ip = 581;
                                        continue _fun60452
                                    }
                                case 10:
                                    var1 = undefined;
                                    var4 = undefined;
                                    var10 = undefined;
                                    var8 = undefined;
                                    var5 = undefined;
                                    var6 = undefined;
                                    var3 = _closure2_slot10;
                                    if (var3) {
                                        _fun60452_ip = 459;
                                        continue _fun60452
                                    }
                                case 35:
                                    var3 = _closure2_slot9;
                                    var7 = null;
                                    var3 = var3.bind(var1)(var7);
                                    var3 = _closure2_slot8;
                                    var11 = true;
                                    var3 = var3.bind(var1)(var11);
                                    var12 = {};
                                    var3 = _closure2_slot6;
                                    if (!(var7 == var3)) {
                                        _fun60452_ip = 76;
                                        continue _fun60452
                                    }
                                case 67:
                                    var3 = _closure1_slot8;
                                    _fun60452_ip = 80;
                                    continue _fun60452;
                                case 76:
                                    var3 = _closure2_slot6;
                                case 80:
                                    var17 = var12;
                                    var16 = var3;
                                    var3 = copyDataProperties(var17, var16);
                                    var14 = _closure1_slot0;
                                    var15 = _closure1_slot2;
                                    var13 = 15;
                                    var13 = var15[var13];
                                    var15 = var14.bind(var1)(var13);
                                    var14 = var15.removeInternalFields;
                                    var13 = _closure2_slot4;
                                    var14 = var14.bind(var15)(var13);
                                    var13 = 'formFields';
                                    var12[var13] = var14;
                                    var4 = var12;
                                case 140: // try_start_0
                                    var13 = _closure1_slot1;
                                    var14 = _closure1_slot2;
                                    var12 = 16;
                                    var12 = var14[var12];
                                    var14 = var13.bind(var1)(var12);
                                    var13 = var14.submitVerificationForm;
                                    var12 = _closure2_slot0;
                                    var12 = var12.id;
                                    var4 = var13.bind(var14)(var12, var4);
                                    SaveGenerator(address = 185);
                                case 183:
                                    return var4;
                                case 185:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 12);
                                    if (var12) {
                                        _fun60452_ip = 244;
                                        continue _fun60452
                                    }
                                case 191:
                                    var10 = var4;
                                    var13 = _closure2_slot8;
                                    var12 = false;
                                    var12 = var13.bind(var1)(var12);
                                    var12 = _closure2_slot1;
                                    if (!(var7 != var12)) {
                                        _fun60452_ip = 222;
                                        continue _fun60452
                                    }
                                case 213:
                                    var12 = _closure2_slot1;
                                    var10 = var12.bind(var1)(var10);
                                case 222:
                                    var10 = _closure2_slot2;
                                    if (!(var7 != var10)) {
                                        _fun60452_ip = 239;
                                        continue _fun60452
                                    }
                                case 230:
                                    var10 = _closure2_slot2;
                                    var10 = var10.bind(var1)(var11);
                                case 239: // try_end0
                                    _fun60452_ip = 578;
                                    continue _fun60452;
                                case 244:
                                    return var4;
                                case 247: // catch_target0
                                    CatchBlockStart(arg_register = 4);
                                    var9 = var4;
                                    var10 = var7 == var4;
                                    var4 = undefined;
                                    if (var10) {
                                        _fun60452_ip = 266;
                                        continue _fun60452
                                    }
                                case 261:
                                    var4 = var9.body;
                                case 266:
                                    var6 = var4;
                                    var9 = var7 == var4;
                                    var4 = undefined;
                                    if (var9) {
                                        _fun60452_ip = 305;
                                        continue _fun60452
                                    }
                                case 278:
                                    var9 = var6;
                                    var9 = var9.errors;
                                    var8 = var9;
                                    var9 = var7 == var9;
                                    var4 = undefined;
                                    if (var9) {
                                        _fun60452_ip = 305;
                                        continue _fun60452
                                    }
                                case 299:
                                    var4 = var8.version;
                                case 305:
                                    if (!(var7 == var4)) {
                                        _fun60452_ip = 380;
                                        continue _fun60452
                                    }
                                case 309:
                                    var4 = var6;
                                    var8 = var7 == var4;
                                    var4 = undefined;
                                    if (var8) {
                                        _fun60452_ip = 348;
                                        continue _fun60452
                                    }
                                case 321:
                                    var8 = var6;
                                    var8 = var8.errors;
                                    var5 = var8;
                                    var8 = var7 == var8;
                                    var4 = undefined;
                                    if (var8) {
                                        _fun60452_ip = 348;
                                        continue _fun60452
                                    }
                                case 342:
                                    var4 = var5.form_fields;
                                case 348:
                                    if (!(var7 == var4)) {
                                        _fun60452_ip = 380;
                                        continue _fun60452
                                    }
                                case 352:
                                    var5 = _closure2_slot9;
                                    var4 = var6;
                                    var7 = var7 == var4;
                                    var4 = undefined;
                                    if (var7) {
                                        _fun60452_ip = 373;
                                        continue _fun60452
                                    }
                                case 368:
                                    var4 = var6.message;
                                case 373:
                                    var4 = var5.bind(var1)(var4);
                                    _fun60452_ip = 446;
                                    continue _fun60452;
                                case 380:
                                    var4 = _closure2_slot9;
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var3 = 9;
                                    var5 = var8[var3];
                                    var5 = var7.bind(var1)(var5);
                                    var6 = var5.intl;
                                    var5 = var6.string;
                                    var3 = var8[var3];
                                    var3 = var7.bind(var1)(var3);
                                    var3 = var3.t;
                                    var3 = var3.PD09Sl;
                                    var3 = var5.bind(var6)(var3);
                                    var3 = var4.bind(var1)(var3);
                                case 446:
                                    var3 = _closure2_slot8;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                    _fun60452_ip = 578;
                                    continue _fun60452;
                                case 459:
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var2 = 8;
                                    var2 = var7[var2];
                                    var4 = var6.bind(var1)(var2);
                                    var3 = var4.open;
                                    var2 = {};
                                    var8 = 'MEMBER_VERIFICATION_FORM_INCOMPLETE';
                                    var2.key = var8;
                                    var10 = _closure1_slot0;
                                    var5 = 9;
                                    var8 = var7[var5];
                                    var8 = var10.bind(var1)(var8);
                                    var9 = var8.intl;
                                    var8 = var9.string;
                                    var5 = var7[var5];
                                    var5 = var10.bind(var1)(var5);
                                    var5 = var5.t;
                                    var5 = var5.StC497;
                                    var5 = var8.bind(var9)(var5);
                                    var2.content = var5;
                                    var5 = 10;
                                    var5 = var7[var5];
                                    var5 = var6.bind(var1)(var5);
                                    var2.icon = var5;
                                    var2 = var3.bind(var4)(var2);
                                case 578:
                                    return var1;
                                case 581:
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
                var9 = var1.bind(var4)();
                var3 = _closure1_slot11;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var15.container;
                var1.style = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var18 = _closure1_slot2;
                var5 = 17;
                var5 = var18[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var17 = var17.rulesChannelId;
                var5.rulesChannelId = var17;
                var5.formFields = var16;
                var13 = function arg0, arg1() {
                    var6 = arg0;
                    var5 = _closure2_slot4;
                    var4 = var5[var6];
                    var2 = _closure2_slot5;
                    var0 = var5.slice;
                    var3 = 0;
                    var9 = var0.bind(var5)(var3, var6);
                    var1 = new Array(1);
                    var10 = var1;
                    var8 = 0;
                    var3 = arraySpread(var10, var9, var8);
                    var0 = {};
                    var10 = var0;
                    var9 = var4;
                    var4 = copyDataProperties(var10, var9);
                    var7 = arg1;
                    var4 = 'response';
                    var0[var4] = var7;
                    var1[var3] = var0;
                    var0 = 1;
                    var8 = var3 + var0;
                    var4 = var5.slice;
                    var0 = var6 + var0;
                    var9 = var4.bind(var5)(var0);
                    var10 = var1;
                    var0 = arraySpread(var10, var9, var8);
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onChange = var13;
                var5.verification = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var7 = var0 != var14;
                var6 = null;
                if (!var7) {
                    _fun60446_ip = 464;
                    continue _fun60446
                }
            case 419:
                var13 = _closure1_slot10;
                var8 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 18;
                var7 = var16[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var16 = var15.error;
                var7.style = var16;
                var7.children = var14;
                var6 = var13.bind(var4)(var8, var7);
            case 464:
                var5[1] = var6;
                var8 = _closure1_slot10;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var13 = 19;
                var6 = var16[var13];
                var7 = var14.bind(var4)(var6);
                var6 = {};
                var15 = var15.submitButton;
                var6.style = var15;
                var15 = var16[var13];
                var15 = var14.bind(var4)(var15);
                var15 = var15.Colors;
                var15 = var15.BRAND;
                var6.color = var15;
                var13 = var16[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.Sizes;
                var13 = var13.MEDIUM;
                var6.size = var13;
                var15 = _closure1_slot0;
                var12 = 9;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["var8/DT+"];
                var12 = var13.bind(var14)(var12);
                var6.text = var12;
                var6.loading = var10;
                if (var10) {
                    _fun60446_ip = 620;
                    continue _fun60446
                }
            case 617:
                var10 = var11;
            case 620:
                var6.disabled = var10;
                var6.onPress = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 650:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 4696, 660, 33, 1297, 3139, 1234, 7452, 7442, 4923, 3207, 566, 4820, 7426, 7453, 5881, 4868, 2]);