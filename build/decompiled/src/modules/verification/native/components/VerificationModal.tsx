// modules/verification/native/components/VerificationModal.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StyleSheet;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.UserRequiredActions;
    var _closure1_slot9 = var6;
    var3 = var3.VerificationModalScenes;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/VerificationModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: VerificationModal, environment: var1
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 29;
        var1 = var8[var1];
        var3 = undefined;
        var6 = var7.bind(var3)(var1);
        var4 = var6.useStateFromStores;
        var1 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var5
            var1 = _closure1_slot6;
            var0 = var1.getCountrySelectorOpened;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = var4.bind(var6)(var2, var1);
        var _closure2_slot0 = var1;
        var10 = _closure1_slot4;
        var4 = var10.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var5
            _fun115030: for (var _fun115030_ip = 0;;) switch (_fun115030_ip) {
                case 0:
                    var1 = {};
                    var0 = _closure1_slot10;
                    var0 = var0.OVERVIEW;
                    var1.name = var0;
                    var0 = new Array(1);
                    var0[0] = var1;
                    var1 = _closure2_slot0;
                    if (!var1) {
                        _fun115030_ip = 63;
                        continue _fun115030
                    }
                case 37:
                    var2 = var0.push;
                    var1 = {};
                    var3 = _closure1_slot10;
                    var3 = var3.ADD_PHONE;
                    var1.name = var3;
                    var1 = var2.bind(var0)(var1);
                case 63:
                    return var0;
            }
        };
        var4 = var4.bind(var10)(var1, var2);
        var6 = var10.useEffect;
        var2 = function() { // Environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 30;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var1 = new Array(0);
        var1 = var6.bind(var10)(var2, var1);
        var2 = _closure1_slot11;
        var0 = 31;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var9 = var10.useMemo;
        var6 = function() { // Environment: var5
            var1 = function() { // Original name: getScreens, environment: var0
                var9 = function(arg0) { // Original name: impressionProperties, environment: var3
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ImpressionGroups;
                    var1 = var1.USER_VERIFICATION_MODAL_FLOW;
                    var0.impression_group = var1;
                    var1 = arg0;
                    var0.step = var1;
                    return var0;
                };
                var0 = {};
                var8 = _closure1_slot10;
                var2 = var8.CHANGE_EMAIL_COLLECT_REASONS;
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var10 = 8;
                var4 = var7[var10];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var4 = var4.ImpressionNames;
                var4 = var4.USER_VERIFICATION_MODAL;
                var1.impressionName = var4;
                var4 = var8.CHANGE_EMAIL_COLLECT_REASONS;
                var4 = var9.bind(var5)(var4);
                var1.impressionProperties = var4;
                var4 = 9;
                var11 = var7[var4];
                var12 = var6.bind(var5)(var11);
                var11 = var12.getHeaderNoTitle;
                var11 = var11.bind(var12)();
                var1.headerTitle = var11;
                var11 = function() { // Original name: render, environment: var3
                    var0 = null;
                    return var0;
                };
                var1.render = var11;
                var0[var2] = var1;
                var2 = var8.CHANGE_EMAIL_WARNING;
                var1 = {};
                var11 = var7[var10];
                var11 = var6.bind(var5)(var11);
                var11 = var11.ImpressionNames;
                var11 = var11.USER_VERIFICATION_MODAL;
                var1.impressionName = var11;
                var11 = var8.CHANGE_EMAIL_WARNING;
                var11 = var9.bind(var5)(var11);
                var1.impressionProperties = var11;
                var11 = var7[var4];
                var12 = var6.bind(var5)(var11);
                var11 = var12.getHeaderNoTitle;
                var11 = var11.bind(var12)();
                var1.headerTitle = var11;
                var11 = function() { // Original name: render, environment: var3
                    var0 = null;
                    return var0;
                };
                var1.render = var11;
                var0[var2] = var1;
                var2 = var8.OVERVIEW;
                var1 = {};
                var11 = var7[var10];
                var11 = var6.bind(var5)(var11);
                var11 = var11.ImpressionNames;
                var11 = var11.USER_VERIFICATION_MODAL;
                var1.impressionName = var11;
                var11 = var8.OVERVIEW;
                var11 = var9.bind(var5)(var11);
                var1.impressionProperties = var11;
                var11 = false;
                var1.gestureEnabled = var11;
                var11 = function() { // Original name: headerLeft, environment: var3
                    var0 = null;
                    return var0;
                };
                var1.headerLeft = var11;
                var11 = var7[var4];
                var12 = var6.bind(var5)(var11);
                var11 = var12.getHeaderNoTitle;
                var11 = var11.bind(var12)();
                var1.headerTitle = var11;
                var11 = function() { // Original name: headerRight, environment: var3
                    var3 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 10;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var7.bind(var2)(var0);
                    var1 = var0.HeaderActionButton;
                    var0 = {};
                    var5 = _closure1_slot1;
                    var4 = 11;
                    var4 = var8[var4];
                    var4 = var5.bind(var2)(var4);
                    var0.source = var4;
                    var4 = 12;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.PdRCRg;
                    var4 = var5.bind(var6)(var4);
                    var0.accessibilityLabel = var4;
                    var4 = function() { // Original name: onPress, environment: var4
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var0 = 13;
                        var1 = var9[var0];
                        var0 = undefined;
                        var3 = var8.bind(var0)(var1);
                        var2 = var3.showSimpleActionSheet;
                        var1 = {};
                        var4 = 'VerificationOverviewMore';
                        var1.key = var4;
                        var5 = {};
                        var4 = 12;
                        var6 = var9[var4];
                        var6 = var8.bind(var0)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var4 = var9[var4];
                        var4 = var8.bind(var0)(var4);
                        var4 = var4.t;
                        var4 = var4["2jxGer"];
                        var4 = var6.bind(var7)(var4);
                        var5.label = var4;
                        var4 = true;
                        var5.isDestructive = var4;
                        var4 = function() { // Original name: onPress, environment: var4
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.logout;
                            var0 = 'verification_modal';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var5.onPress = var4;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var1.options = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.onPress = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.headerRight = var11;
                var11 = function() { // Original name: render, environment: var3
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var11;
                var0[var2] = var1;
                var2 = var8.RESEND_EMAIL;
                var1 = {};
                var11 = var7[var10];
                var11 = var6.bind(var5)(var11);
                var11 = var11.ImpressionNames;
                var11 = var11.USER_VERIFICATION_MODAL;
                var1.impressionName = var11;
                var11 = var8.RESEND_EMAIL;
                var11 = var9.bind(var5)(var11);
                var1.impressionProperties = var11;
                var11 = var7[var4];
                var12 = var6.bind(var5)(var11);
                var11 = var12.getHeaderNoTitle;
                var11 = var11.bind(var12)();
                var1.headerTitle = var11;
                var11 = function() { // Original name: render, environment: var3
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var11;
                var0[var2] = var1;
                var2 = var8.CHANGE_EMAIL_COMPLETE;
                var1 = {};
                var11 = var7[var10];
                var11 = var6.bind(var5)(var11);
                var11 = var11.ImpressionNames;
                var11 = var11.USER_VERIFICATION_MODAL;
                var1.impressionName = var11;
                var11 = var8.RESEND_EMAIL;
                var11 = var9.bind(var5)(var11);
                var1.impressionProperties = var11;
                var11 = var7[var4];
                var12 = var6.bind(var5)(var11);
                var11 = var12.getHeaderNoTitle;
                var11 = var11.bind(var12)();
                var1.headerTitle = var11;
                var11 = function() { // Original name: render, environment: var3
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var11;
                var0[var2] = var1;
                var2 = var8.CONFIRM_EMAIL_CHANGE_CODE;
                var1 = {};
                var11 = var7[var10];
                var11 = var6.bind(var5)(var11);
                var11 = var11.ImpressionNames;
                var11 = var11.USER_VERIFICATION_MODAL;
                var1.impressionName = var11;
                var11 = var8.CONFIRM_EMAIL_CHANGE_CODE;
                var11 = var9.bind(var5)(var11);
                var1.impressionProperties = var11;
                var11 = var7[var4];
                var12 = var6.bind(var5)(var11);
                var11 = var12.getHeaderNoTitle;
                var11 = var11.bind(var12)();
                var1.headerTitle = var11;
                var11 = function() { // Original name: render, environment: var3
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 17;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = false;
                    var0.isChangeEmail = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var11;
                var0[var2] = var1;
                var2 = var8.CONFIRM_EMAIL_CHANGE_START;
                var1 = {};
                var11 = var7[var10];
                var11 = var6.bind(var5)(var11);
                var11 = var11.ImpressionNames;
                var11 = var11.USER_VERIFICATION_MODAL;
                var1.impressionName = var11;
                var11 = var8.CONFIRM_EMAIL_CHANGE_START;
                var11 = var9.bind(var5)(var11);
                var1.impressionProperties = var11;
                var11 = var7[var4];
                var12 = var6.bind(var5)(var11);
                var11 = var12.getHeaderNoTitle;
                var11 = var11.bind(var12)();
                var1.headerTitle = var11;
                var11 = function() { // Original name: render, environment: var3
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var11;
                var0[var2] = var1;
                var2 = var8.ENTER_EMAIL;
                var1 = {};
                var11 = var7[var10];
                var11 = var6.bind(var5)(var11);
                var11 = var11.ImpressionNames;
                var11 = var11.USER_VERIFICATION_MODAL;
                var1.impressionName = var11;
                var11 = var8.ENTER_EMAIL;
                var11 = var9.bind(var5)(var11);
                var1.impressionProperties = var11;
                var11 = var7[var4];
                var12 = var6.bind(var5)(var11);
                var11 = var12.getHeaderNoTitle;
                var11 = var11.bind(var12)();
                var1.headerTitle = var11;
                var11 = function() { // Original name: render, environment: var3
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = false;
                    var0.isChangeEmail = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var11;
                var0[var2] = var1;
                var2 = var8.ADD_PHONE;
                var1 = {};
                var11 = var7[var10];
                var11 = var6.bind(var5)(var11);
                var11 = var11.ImpressionNames;
                var11 = var11.USER_VERIFICATION_MODAL;
                var1.impressionName = var11;
                var11 = var8.ADD_PHONE;
                var11 = var9.bind(var5)(var11);
                var1.impressionProperties = var11;
                var11 = var7[var4];
                var12 = var6.bind(var5)(var11);
                var11 = var12.getHeaderNoTitle;
                var11 = var11.bind(var12)();
                var1.headerTitle = var11;
                var11 = function(arg0, arg1) { // Original name: render, environment: var3
                    var0 = arg1;
                    var _closure5_slot0 = var0;
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 20;
                    var0 = var7[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var8 = arg0;
                    var9 = var0;
                    var6 = copyDataProperties(var9, var8);
                    var6 = _closure1_slot0;
                    var5 = 21;
                    var5 = var7[var5];
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.ChangePhoneReason;
                    var6 = var5.USER_ACTION_REQUIRED;
                    var5 = 'reason';
                    var0[var5] = var6;
                    var5 = function(arg0) { // Original name: onComplete, environment: var4
                        var3 = _closure5_slot0;
                        var2 = var3.push;
                        var0 = _closure1_slot10;
                        var1 = var0.VERIFY_PHONE;
                        var0 = {};
                        var4 = arg0;
                        var0.phone = var4;
                        var4 = function(arg0) { // Original name: onVerified, environment: var4
                            var0 = arg0;
                            var _closure7_slot0 = var0;
                            var4 = _closure5_slot0;
                            var3 = var4.push;
                            var1 = _closure1_slot10;
                            var2 = var1.VERIFY_PASSWORD;
                            var1 = {};
                            var6 = true;
                            var1.hideUnverifiedBanner = var6;
                            var7 = _closure1_slot3;
                            var0 = undefined;
                            var6 = function*(arg0) { // Environment: var5
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun115051: for (var _fun115051_ip = 0;;) switch (_fun115051_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun115051_ip = 236;
                                                continue _fun115051
                                            }
                                        case 10:
                                            var3 = arg0;
                                        case 13: // try_start_0
                                            var2 = _closure1_slot1;
                                            var4 = _closure1_slot2;
                                            var1 = 22;
                                            var1 = var4[var1];
                                            var8 = undefined;
                                            var5 = var2.bind(var8)(var1);
                                            var4 = var5.isPhoneReverification;
                                            var2 = _closure1_slot8;
                                            var1 = var2.getCurrentUser;
                                            var2 = var1.bind(var2)();
                                            var6 = _closure1_slot7;
                                            var1 = var6.getAction;
                                            var1 = var1.bind(var6)();
                                            var2 = var4.bind(var5)(var2, var1);
                                            var5 = _closure1_slot1;
                                            var9 = _closure1_slot2;
                                            var1 = 21;
                                            var4 = var9[var1];
                                            var6 = var5.bind(var8)(var4);
                                            if (var2) {
                                                _fun115051_ip = 167;
                                                continue _fun115051
                                            }
                                        case 100:
                                            var10 = var6.addPhone;
                                            var5 = _closure7_slot0;
                                            var4 = var3;
                                            var11 = _closure1_slot0;
                                            var2 = var9[var1];
                                            var2 = var11.bind(var8)(var2);
                                            var2 = var2.ChangePhoneReason;
                                            var2 = var2.USER_ACTION_REQUIRED;
                                            var4 = var10.bind(var6)(var5, var4, var2);
                                            SaveGenerator(address = 152);
                                        case 150:
                                            return var4;
                                        case 152:
                                            ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 2);
                                            var5 = var2;
                                            var2 = var4;
                                            if (!var5) {
                                                _fun115051_ip = 225;
                                                continue _fun115051
                                            }
                                        case 164: // try_end0
                                            return var4;
                                        case 167: // try_start_1
                                            var5 = var6.reverifyPhone;
                                            var4 = _closure7_slot0;
                                            var7 = _closure1_slot0;
                                            var1 = var9[var1];
                                            var1 = var7.bind(var8)(var1);
                                            var1 = var1.ChangePhoneReason;
                                            var1 = var1.USER_ACTION_REQUIRED;
                                            var1 = var5.bind(var6)(var4, var3, var1);
                                            SaveGenerator(address = 216);
                                        case 214:
                                            return var1;
                                        case 216:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                            var2 = var1;
                                            if (var3) {
                                                _fun115051_ip = 228;
                                                continue _fun115051
                                            }
                                        case 225: // try_end1
                                            return var2;
                                        case 228:
                                            return var1;
                                        case 231: // catch_target0 // catch_target1
                                            CatchBlockStart(arg_register = 1);
                                            return var1;
                                        case 236:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var6 = var7.bind(var0)(var6);
                            var _closure7_slot2 = var6;
                            var6 = function() { // Environment: var5
                                var0 = undefined;
                                var3 = _closure7_slot2;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var1.onSubmit = var6;
                            var6 = function*() { // Environment: var5
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun115054: for (var _fun115054_ip = 0;;) switch (_fun115054_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun115054_ip = 155;
                                                continue _fun115054
                                            }
                                        case 10:
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var1 = 23;
                                            var1 = var2[var1];
                                            var2 = undefined;
                                            var5 = var4.bind(var2)(var1);
                                            var4 = var5.waitUntil;
                                            var1 = function() { // Environment: var1
                                                var2 = _closure1_slot7;
                                                var1 = var2.getAction;
                                                var1 = var1.bind(var2)();
                                                var0 = _closure1_slot9;
                                                var0 = var0.REQUIRE_VERIFIED_PHONE;
                                                var0 = var1 !== var0;
                                                return var0;
                                            };
                                            var1 = var4.bind(var5)(var1);
                                            SaveGenerator(address = 59);
                                        case 57:
                                            return var1;
                                        case 59:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                            if (var4) {
                                                _fun115054_ip = 152;
                                                continue _fun115054
                                            }
                                        case 65:
                                            var5 = _closure1_slot7;
                                            var4 = var5.getAction;
                                            var5 = var4.bind(var5)();
                                            var4 = _closure1_slot9;
                                            var4 = var4.REQUIRE_VERIFIED_EMAIL;
                                            if (!(var5 !== var4)) {
                                                _fun115054_ip = 122;
                                                continue _fun115054
                                            }
                                        case 93:
                                            var6 = _closure5_slot0;
                                            var5 = var6.push;
                                            var4 = _closure1_slot10;
                                            var4 = var4.OVERVIEW;
                                            var4 = var5.bind(var6)(var4);
                                            _fun115054_ip = 149;
                                            continue _fun115054;
                                        case 122:
                                            var5 = _closure5_slot0;
                                            var4 = var5.push;
                                            var3 = _closure1_slot10;
                                            var3 = var3.PHONE_THEN_EMAIL_INTERSTITIAL;
                                            var3 = var4.bind(var5)(var3);
                                        case 149:
                                            return var2;
                                        case 152:
                                            return var1;
                                        case 155:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var6 = var7.bind(var0)(var6);
                            var _closure7_slot1 = var6;
                            var5 = function() { // Environment: var5
                                var0 = undefined;
                                var3 = _closure7_slot1;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var1.onSuccess = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var0.onVerified = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var4 = 'onComplete';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var11;
                var0[var2] = var1;
                var2 = var8.VERIFY_PHONE;
                var1 = {};
                var11 = var7[var10];
                var11 = var6.bind(var5)(var11);
                var11 = var11.ImpressionNames;
                var11 = var11.USER_VERIFICATION_MODAL;
                var1.impressionName = var11;
                var11 = var8.VERIFY_PHONE;
                var11 = var9.bind(var5)(var11);
                var1.impressionProperties = var11;
                var11 = var7[var4];
                var12 = var6.bind(var5)(var11);
                var11 = var12.getHeaderNoTitle;
                var11 = var11.bind(var12)();
                var1.headerTitle = var11;
                var11 = function(arg0) { // Original name: render, environment: var3
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 24;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = true;
                    var0.disableKeyboardAvoidingView = var4;
                    var5 = arg0;
                    var6 = var0;
                    var4 = copyDataProperties(var6, var5);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var11;
                var0[var2] = var1;
                var2 = var8.VERIFY_PASSWORD;
                var1 = {};
                var11 = var7[var10];
                var11 = var6.bind(var5)(var11);
                var11 = var11.ImpressionNames;
                var11 = var11.USER_VERIFICATION_MODAL;
                var1.impressionName = var11;
                var11 = var8.VERIFY_PASSWORD;
                var11 = var9.bind(var5)(var11);
                var1.impressionProperties = var11;
                var11 = var7[var4];
                var12 = var6.bind(var5)(var11);
                var11 = var12.getHeaderNoTitle;
                var11 = var11.bind(var12)();
                var1.headerTitle = var11;
                var11 = function(arg0) { // Original name: render, environment: var3
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 25;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = arg0;
                    var6 = var0;
                    var4 = copyDataProperties(var6, var5);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var11;
                var0[var2] = var1;
                var2 = var8.PHONE_THEN_EMAIL_INTERSTITIAL;
                var1 = {};
                var10 = var7[var10];
                var10 = var6.bind(var5)(var10);
                var10 = var10.ImpressionNames;
                var10 = var10.USER_VERIFICATION_MODAL;
                var1.impressionName = var10;
                var8 = var8.PHONE_THEN_EMAIL_INTERSTITIAL;
                var8 = var9.bind(var5)(var8);
                var1.impressionProperties = var8;
                var4 = var7[var4];
                var5 = var6.bind(var5)(var4);
                var4 = var5.getHeaderNoTitle;
                var4 = var4.bind(var5)();
                var1.headerTitle = var4;
                var3 = function(arg0, arg1) { // Original name: render, environment: var3
                    var0 = arg1;
                    var _closure5_slot0 = var0;
                    var2 = _closure1_slot5;
                    var1 = var2.create;
                    var0 = {};
                    var3 = {
                        'position': 'absolute',
                        'right': 32,
                        'bottom': 32,
                        'left': 32
                    };
                    var0.button = var3;
                    var8 = var1.bind(var2)(var0);
                    var3 = _closure1_slot11;
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var0 = 26;
                    var0 = var11[var0];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var0);
                    var0 = {};
                    var10 = _closure1_slot0;
                    var4 = 27;
                    var4 = var11[var4];
                    var4 = var10.bind(var2)(var4);
                    var4 = var4.VerifyPhone;
                    var0.Illustration = var4;
                    var7 = 12;
                    var4 = var11[var7];
                    var4 = var10.bind(var2)(var4);
                    var12 = var4.intl;
                    var9 = var12.string;
                    var4 = var11[var7];
                    var4 = var10.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.KLnLIP;
                    var4 = var9.bind(var12)(var4);
                    var0.title = var4;
                    var4 = var11[var7];
                    var4 = var10.bind(var2)(var4);
                    var12 = var4.intl;
                    var9 = var12.string;
                    var4 = var11[var7];
                    var4 = var10.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.XGbCq3;
                    var4 = var9.bind(var12)(var4);
                    var0.body = var4;
                    var4 = 28;
                    var4 = var11[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = {};
                    var8 = var8.button;
                    var4.style = var8;
                    var8 = var11[var7];
                    var8 = var10.bind(var2)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var2)(var7);
                    var7 = var7.t;
                    var7 = var7["3oK4qw"];
                    var7 = var8.bind(var9)(var7);
                    var4.text = var7;
                    var6 = function() { // Original name: onPress, environment: var6
                        _fun115060: for (var _fun115060_ip = 0;;) switch (_fun115060_ip) {
                            case 0:
                                var2 = _closure1_slot8;
                                var0 = var2.getCurrentUser;
                                var4 = var0.bind(var2)();
                                var3 = null;
                                var5 = var3 == var4;
                                var0 = undefined;
                                var2 = undefined;
                                if (var5) {
                                    _fun115060_ip = 35;
                                    continue _fun115060
                                }
                            case 29:
                                var2 = var4.email;
                            case 35:
                                if (!(var3 == var2)) {
                                    _fun115060_ip = 51;
                                    continue _fun115060
                                }
                            case 39:
                                var2 = _closure1_slot10;
                                var3 = var2.ENTER_EMAIL;
                                _fun115060_ip = 61;
                                continue _fun115060;
                            case 51:
                                var1 = _closure1_slot10;
                                var3 = var1.RESEND_EMAIL;
                            case 61:
                                var2 = _closure5_slot0;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                                return var0;
                        }
                    };
                    var4.onPress = var6;
                    var4 = var3.bind(var2)(var5, var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var3;
                var0[var2] = var1;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var5 = new Array(0);
        var5 = var9.bind(var10)(var6, var5);
        var0.screens = var5;
        var0.initialRouteStack = var4;
        var4 = 12;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4["13/7kX"];
        var4 = var5.bind(var6)(var4);
        var0.headerBackTitle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 14683, 1366, 1613, 660, 33, 481, 4667, 5283, 8158, 1234, 7692, 4520, 14684, 7433, 7438, 7436, 7509, 7517, 7518, 7434, 14685, 7544, 7511, 7321, 14686, 4835, 566, 3237, 5747, 2]);