// modules/verification/native/components/PhoneVerificationModal.tsx
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerificationModalScenes;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/PhoneVerificationModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var12 = arg0;
        var3 = _closure1_slot6;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 12;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var _closure2_slot0 = var12;
        var5 = {};
        var4 = _closure1_slot4;
        var9 = var4.ADD_PHONE;
        var6 = {};
        var11 = 5;
        var13 = var8[var11];
        var14 = var7.bind(var2)(var13);
        var13 = var14.getHeaderNoTitle;
        var13 = var13.bind(var14)();
        var6.headerTitle = var13;
        var13 = var8[var11];
        var14 = var7.bind(var2)(var13);
        var13 = var14.getHeaderCloseButton;
        var12 = var12.onClose;
        var12 = var13.bind(var14)(var12);
        var6.headerLeft = var12;
        var12 = function arg0, arg1() {
            _fun61055: for (var _fun61055_ip = 0;;) switch (_fun61055_ip) {
                case 0:
                    var6 = arg0;
                    var _closure3_slot0 = var6;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var10 = var0;
                    var9 = var6;
                    var5 = copyDataProperties(var10, var9);
                    var5 = null;
                    var8 = var5 == var6;
                    var7 = undefined;
                    if (var8) {
                        _fun61055_ip = 74;
                        continue _fun61055
                    }
                case 68:
                    var7 = var6.reason;
                case 74:
                    if (!(var5 == var7)) {
                        _fun61055_ip = 91;
                        continue _fun61055
                    }
                case 78:
                    var6 = _closure2_slot0;
                    var7 = var6.reason;
                case 91:
                    var6 = 'reason';
                    var0[var6] = var7;
                    var7 = function arg0() {
                        var3 = _closure3_slot1;
                        var2 = var3.push;
                        var0 = _closure1_slot4;
                        var1 = var0.VERIFY_PHONE;
                        var0 = {};
                        var4 = arg0;
                        var0.phone = var4;
                        var4 = function arg0() {
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var0 = _closure1_slot4;
                            var1 = var0.VERIFY_PASSWORD;
                            var0 = {};
                            var5 = true;
                            var0.hideUnverifiedBanner = var5;
                            var5 = function arg0() {
                                _fun61058: for (var _fun61058_ip = 0;;) switch (_fun61058_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 7;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var4 = var2.bind(var1)(var0);
                                        var3 = var4.addPhone;
                                        var2 = _closure5_slot0;
                                        var6 = _closure3_slot0;
                                        var0 = null;
                                        var6 = var0 == var6;
                                        if (var6) {
                                            _fun61058_ip = 64;
                                            continue _fun61058
                                        }
                                    case 54:
                                        var5 = _closure3_slot0;
                                        var1 = var5.reason;
                                    case 64:
                                        if (!(var0 == var1)) {
                                            _fun61058_ip = 81;
                                            continue _fun61058
                                        }
                                    case 68:
                                        var0 = _closure2_slot0;
                                        var1 = var0.reason;
                                    case 81:
                                        var0 = arg0;
                                        var0 = var3.bind(var4)(var2, var0, var1);
                                        return var0;
                                }
                            };
                            var0.onSubmit = var5;
                            var4 = function() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 8;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.popWithKey;
                                var1 = _closure1_slot5;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0.onSuccess = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var0.onVerified = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var6 = 'onComplete';
                    var0[var6] = var7;
                    var6 = _closure2_slot0;
                    var6 = var6.allowDeletePhone;
                    var5 = null;
                    if (!var6) {
                        _fun61055_ip = 137;
                        continue _fun61055
                    }
                case 132:
                    var5 = function() { // Environment: var4
                        var3 = _closure3_slot1;
                        var2 = var3.push;
                        var0 = _closure1_slot4;
                        var1 = var0.VERIFY_PASSWORD;
                        var0 = {};
                        var5 = true;
                        var0.hideUnverifiedBanner = var5;
                        var5 = function arg0() {
                            _fun61061: for (var _fun61061_ip = 0;;) switch (_fun61061_ip) {
                                case 0:
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 7;
                                    var0 = var1[var0];
                                    var1 = undefined;
                                    var3 = var2.bind(var1)(var0);
                                    var2 = var3.removePhone;
                                    var5 = _closure3_slot0;
                                    var0 = null;
                                    var5 = var0 == var5;
                                    if (var5) {
                                        _fun61061_ip = 57;
                                        continue _fun61061
                                    }
                                case 47:
                                    var4 = _closure3_slot0;
                                    var1 = var4.reason;
                                case 57:
                                    if (!(var0 == var1)) {
                                        _fun61061_ip = 74;
                                        continue _fun61061
                                    }
                                case 61:
                                    var0 = _closure2_slot0;
                                    var1 = var0.reason;
                                case 74:
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                            }
                        };
                        var0.onSubmit = var5;
                        var4 = function() {
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.pop;
                            var1 = var1.bind(var2)();
                            return var0;
                        };
                        var0.onSuccess = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                case 137:
                    var4 = 'onDeletePhone';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var6.render = var12;
        var5[var9] = var6;
        var9 = var4.VERIFY_PHONE;
        var6 = {};
        var12 = var8[var11];
        var13 = var7.bind(var2)(var12);
        var12 = var13.getHeaderNoTitle;
        var12 = var12.bind(var13)();
        var6.headerTitle = var12;
        var12 = 9;
        var12 = var8[var12];
        var12 = var7.bind(var2)(var12);
        var12 = var12.ImpressionNames;
        var12 = var12.USER_VERIFY_PHONE;
        var6.impressionName = var12;
        var12 = function arg0, arg1() {
            var0 = arg1;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot6;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 10;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var7 = arg0;
            var8 = var0;
            var5 = copyDataProperties(var8, var7);
            var6 = true;
            var5 = 'disableKeyboardAvoidingView';
            var0[var5] = var6;
            var5 = function arg0() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var4 = _closure3_slot0;
                var3 = var4.push;
                var1 = _closure1_slot4;
                var2 = var1.VERIFY_PASSWORD;
                var1 = {};
                var6 = true;
                var1.hideUnverifiedBanner = var6;
                var7 = _closure1_slot3;
                var0 = undefined;
                var6 = function*(arg0) { // Environment: var5
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun61066: for (var _fun61066_ip = 0;;) switch (_fun61066_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun61066_ip = 92;
                                    continue _fun61066
                                }
                            case 7:
                                var1 = arg0;
                            case 10: // try_start_0
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 7;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.addPhone;
                                var3 = _closure4_slot0;
                                var2 = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.reason;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                SaveGenerator(address = 75);
                            case 73:
                                return var1;
                            case 75:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun61066_ip = 84;
                                    continue _fun61066
                                }
                            case 81: // try_end0
                                return var1;
                            case 84:
                                return var1;
                            case 87: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                return var1;
                            case 92:
                                return var0;
                        }
                    };
                    return var0;
                };
                var6 = var7.bind(var0)(var6);
                var _closure4_slot1 = var6;
                var6 = function() { // Environment: var5
                    var0 = undefined;
                    var3 = _closure4_slot1;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var1.onSubmit = var6;
                var5 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.popWithKey;
                    var1 = _closure1_slot5;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1.onSuccess = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var4 = 'onVerified';
            var0[var4] = var5;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var6.render = var12;
        var5[var9] = var6;
        var9 = var4.VERIFY_PASSWORD;
        var6 = {};
        var11 = var8[var11];
        var12 = var7.bind(var2)(var11);
        var11 = var12.getHeaderNoTitle;
        var11 = var11.bind(var12)();
        var6.headerTitle = var11;
        var10 = function arg0() {
            var3 = _closure1_slot6;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 11;
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
        var6.render = var10;
        var5[var9] = var6;
        var0.screens = var5;
        var4 = var4.ADD_PHONE;
        var0.initialRouteName = var4;
        var4 = 13;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["13/7kX"];
        var4 = var5.bind(var6)(var4);
        var0.headerBackTitle = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 660, 7556, 33, 4705, 7557, 7558, 4561, 481, 7584, 7551, 5786, 1234, 2]);