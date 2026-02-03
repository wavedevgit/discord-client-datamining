// modules/age_assurance/AgeVerificationActionCreators.native.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.AGE_VERIFICATION_MODAL_KEY;
    var _closure1_slot4 = var6;
    var6 = var1.AGE_VERIFICATION_GET_STARTED_MODAL_KEY;
    var _closure1_slot5 = var6;
    var1 = var1.VerificationVendorName;
    var _closure1_slot6 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.SafetyToastType;
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot8 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun51998: for (var _fun51998_ip = 0;;) switch (_fun51998_ip) {
            case 0:
                var8 = arg0;
                var1 = var8.onClose;
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun51998_ip = 22;
                    continue _fun51998
                }
            case 17:
                var1 = function() {
                    var0 = undefined;
                    return var0;
                };
            case 22:
                var _closure2_slot0 = var1;
                var1 = var8.shouldShowExpressiveModal;
                var6 = var8.verificationVendorName;
                var4 = var8.webviewUrl;
                var _closure2_slot1 = var4;
                var7 = var8.verificationRequestId;
                var5 = {
                    'onClose': 0,
                    'shouldShowExpressiveModal': 0,
                    'verificationVendorName': 0,
                    'webviewUrl': 0,
                    'verificationRequestId': 0
                };
                var3 = null;
                var11 = var5;
                var10 = null;
                var1 = silentSetPrototypeOf(var11, var10);
                var11 = {};
                var10 = var8;
                var9 = var5;
                var1 = copyDataProperties(var11, var10, var9);
                var _closure2_slot2 = var1;
                var5 = _closure1_slot6;
                var5 = var5.PERSONA;
                if (!(var6 === var5)) {
                    _fun51998_ip = 267;
                    continue _fun51998
                }
            case 115:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 4;
                var5 = var8[var5];
                var8 = var6.bind(var0)(var5);
                var6 = var8.isAgeVerificationPersonaEnabled;
                var5 = 'AgeVerificationActionCreators';
                var5 = var6.bind(var8)(var5);
                if (!var5) {
                    _fun51998_ip = 265;
                    continue _fun51998
                }
            case 155:
                if (!(var3 != var7)) {
                    _fun51998_ip = 265;
                    continue _fun51998
                }
            case 159:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 5;
                var5 = var8[var5];
                var5 = var6.bind(var0)(var5);
                var6 = var5.Inquiry;
                var5 = var6.fromInquiry;
                var7 = var5.bind(var6)(var7);
                var6 = var7.onComplete;
                var5 = function() { // Environment: var2
                    var2 = _closure2_slot2;
                    var1 = var2.onComplete;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var7 = var6.bind(var7)(var5);
                var6 = var7.onError;
                var5 = function() { // Environment: var2
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.showFailedToast;
                    var1 = _closure1_slot7;
                    var1 = var1.TIGGER_PAWTECT_ERROR;
                    var1 = var2.bind(var3)(var1);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var7 = var6.bind(var7)(var5);
                var6 = var7.onCanceled;
                var5 = function() { // Environment: var2
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var6 = var6.bind(var7)(var5);
                var5 = var6.build;
                var6 = var5.bind(var6)();
                var5 = var6.start;
                var5 = var5.bind(var6)();
                _fun51998_ip = 324;
                continue _fun51998;
            case 265:
                return var0;
            case 267:
                if (!(var3 != var4)) {
                    _fun51998_ip = 324;
                    continue _fun51998
                }
            case 271:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 7;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.pushLazy;
                var3 = _closure1_slot3;
                var2 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun52001: for (var _fun52001_ip = 0;;) switch (_fun52001_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun52001_ip = 86;
                                    continue _fun52001
                                }
                            case 9:
                                var5 = undefined;
                                var _closure4_slot0 = var5;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var3 = 9;
                                var3 = var1[var3];
                                var4 = var4.bind(var5)(var3);
                                var3 = 8;
                                var3 = var1[var3];
                                var1 = var1.paths;
                                var1 = var4.bind(var5)(var3, var1);
                                SaveGenerator(address = 60);
                            case 58:
                                return var1;
                            case 60:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun52001_ip = 83;
                                    continue _fun52001
                                }
                            case 66:
                                var3 = var1.default;
                                _closure4_slot0 = var3;
                                var2 = function() { // Environment: var2
                                    var3 = _closure1_slot8;
                                    var2 = _closure4_slot0;
                                    var1 = {};
                                    var4 = _closure2_slot1;
                                    var1.webviewUrl = var4;
                                    var4 = _closure2_slot0;
                                    var1.onClose = var4;
                                    var5 = _closure2_slot2;
                                    var6 = var1;
                                    var0 = copyDataProperties(var6, var5);
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                return var2;
                            case 83:
                                return var1;
                            case 86:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot4;
                var1 = {};
                var1 = var4.bind(var5)(var3, var1, var2);
            case 324:
                return var0;
        }
    };
    var1.showAgeVerification = var6;
    var6 = function arg0() {
        _fun52006: for (var _fun52006_ip = 0;;) switch (_fun52006_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.entryPoint;
                var _closure2_slot0 = var0;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 10;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.isAgeVerified;
                var3 = var3.bind(var4)();
                if (!var3) {
                    _fun52006_ip = 130;
                    continue _fun52006
                }
            case 57:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 11;
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.hasAgeGatedFeatures;
                var4 = var4.bind(var5)();
                if (var4) {
                    _fun52006_ip = 127;
                    continue _fun52006
                }
            case 90:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 12;
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.getIsGidgetPawtectEnabled;
                var5 = 'age_verification_utils';
                var4 = var6.bind(var7)(var5);
            case 127:
                var3 = var4;
            case 130:
                _closure2_slot1 = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 7;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.pushLazy;
                var3 = _closure1_slot3;
                var2 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun52008: for (var _fun52008_ip = 0;;) switch (_fun52008_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun52008_ip = 86;
                                    continue _fun52008
                                }
                            case 9:
                                var5 = undefined;
                                var _closure4_slot0 = var5;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var3 = 9;
                                var3 = var1[var3];
                                var4 = var4.bind(var5)(var3);
                                var3 = 13;
                                var3 = var1[var3];
                                var1 = var1.paths;
                                var1 = var4.bind(var5)(var3, var1);
                                SaveGenerator(address = 60);
                            case 58:
                                return var1;
                            case 60:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun52008_ip = 83;
                                    continue _fun52008
                                }
                            case 66:
                                var3 = var1.default;
                                _closure4_slot0 = var3;
                                var2 = function() { // Environment: var2
                                    var3 = _closure1_slot8;
                                    var2 = _closure4_slot0;
                                    var1 = {};
                                    var4 = _closure2_slot0;
                                    var1.entryPoint = var4;
                                    var0 = _closure2_slot1;
                                    var1.isRetry = var0;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                return var2;
                            case 83:
                                return var1;
                            case 86:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot5;
                var1 = {};
                var1 = var4.bind(var5)(var3, var1, var2);
                return var0;
        }
    };
    var1.showAgeVerificationGetStartedModal = var6;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.openURL;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.openUrl = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_assurance/AgeVerificationActionCreators.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 5928, 5912, 33, 5929, 5930, 5919, 4557, 5934, 1307, 4244, 4272, 4271, 5946, 3135, 2]);