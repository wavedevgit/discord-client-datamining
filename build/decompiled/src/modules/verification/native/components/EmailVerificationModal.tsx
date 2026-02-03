// modules/verification/native/components/EmailVerificationModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var2 = _closure1_slot6;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var1 = var3[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.close;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.resetChangeEmailStore;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerificationModalScenes;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/EmailVerificationModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun60542: for (var _fun60542_ip = 0;;) switch (_fun60542_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.isChangeEmail;
                var _closure2_slot0 = var4;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 17;
                var1 = var7[var1];
                var8 = var2.bind(var3)(var1);
                var6 = var8.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var5
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var6.bind(var8)(var2, var1);
                var6 = _closure1_slot1;
                var2 = 18;
                var2 = var7[var2];
                var7 = var6.bind(var3)(var2);
                var2 = null;
                var6 = var2 == var1;
                var8 = undefined;
                if (var6) {
                    _fun60542_ip = 113;
                    continue _fun60542
                }
            case 107:
                var8 = var1.verified;
            case 113:
                var6 = var2 != var8;
                if (!var6) {
                    _fun60542_ip = 123;
                    continue _fun60542
                }
            case 120:
                var6 = var8;
            case 123:
                var9 = var7.bind(var3)(var6);
                _closure2_slot1 = var9;
                var8 = _closure1_slot4;
                var6 = var8.useState;
                var10 = var6.bind(var8)();
                var7 = _closure1_slot3;
                var6 = 2;
                var7 = var7.bind(var3)(var10, var6);
                var6 = 0;
                var10 = var7[var6];
                _closure2_slot2 = var10;
                var6 = 1;
                var6 = var7[var6];
                _closure2_slot3 = var6;
                var7 = var8.useMemo;
                var6 = new Array(3);
                var6[0] = var10;
                var6[1] = var4;
                var6[2] = var9;
                var5 = function() { // Environment: var5
                    var2 = {};
                    var1 = _closure2_slot1;
                    var2.initiallyVerified = var1;
                    var1 = _closure2_slot0;
                    var2.isChangeEmail = var1;
                    var1 = _closure2_slot2;
                    var2.changeEmailReason = var1;
                    var0 = _closure2_slot3;
                    var2.setChangeEmailReason = var0;
                    var1 = function arg0() {
                        var0 = arg0;
                        var14 = var0.initiallyVerified;
                        var1 = var0.isChangeEmail;
                        var _closure4_slot0 = var1;
                        var1 = var0.changeEmailReason;
                        var _closure4_slot1 = var1;
                        var0 = var0.setChangeEmailReason;
                        var _closure4_slot2 = var0;
                        var4 = {};
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 7;
                        var0 = var8[var5];
                        var6 = undefined;
                        var0 = var7.bind(var6)(var0);
                        var0 = var0.ImpressionGroups;
                        var0 = var0.USER_ACCOUNT_EMAIL_CHANGE_FLOW;
                        var4.impression_group = var0;
                        var0 = {};
                        var1 = _closure1_slot7;
                        var10 = var1.CHANGE_EMAIL_COLLECT_REASONS;
                        var2 = {};
                        var9 = 8;
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderNoTitle;
                        var12 = var12.bind(var13)();
                        var2.headerTitle = var12;
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderCloseButton;
                        var11 = _closure1_slot9;
                        var12 = var12.bind(var13)(var11);
                        var2.headerLeft = var12;
                        var12 = var8[var5];
                        var12 = var7.bind(var6)(var12);
                        var12 = var12.ImpressionNames;
                        var12 = var12.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS;
                        var2.impressionName = var12;
                        var2.impressionProperties = var4;
                        var12 = function() {
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 9;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = _closure4_slot1;
                            var0.changeEmailReason = var5;
                            var4 = _closure4_slot2;
                            var0.setChangeEmailReason = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var12;
                        var0[var10] = var2;
                        var10 = var1.CHANGE_EMAIL_WARNING;
                        var2 = {};
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderNoTitle;
                        var12 = var12.bind(var13)();
                        var2.headerTitle = var12;
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderCloseButton;
                        var12 = var12.bind(var13)(var11);
                        var2.headerLeft = var12;
                        var12 = var8[var5];
                        var12 = var7.bind(var6)(var12);
                        var12 = var12.ImpressionNames;
                        var12 = var12.USER_ACCOUNT_EMAIL_CHANGE_WARNING;
                        var2.impressionName = var12;
                        var2.impressionProperties = var4;
                        var12 = function() {
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 10;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure4_slot1;
                            var0.changeEmailReason = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var12;
                        var0[var10] = var2;
                        var10 = var1.RESEND_EMAIL;
                        var2 = {};
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderNoTitle;
                        var12 = var12.bind(var13)();
                        var2.headerTitle = var12;
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderCloseButton;
                        var12 = var12.bind(var13)(var11);
                        var2.headerLeft = var12;
                        var12 = var8[var5];
                        var12 = var7.bind(var6)(var12);
                        var12 = var12.ImpressionNames;
                        var12 = var12.USER_ACCOUNT_EMAIL_RESEND_VERIFICATION_EMAIL;
                        var2.impressionName = var12;
                        var2.impressionProperties = var4;
                        var12 = function() {
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var12;
                        var0[var10] = var2;
                        var10 = var1.CONFIRM_EMAIL_CHANGE_START;
                        var2 = {};
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderNoTitle;
                        var12 = var12.bind(var13)();
                        var2.headerTitle = var12;
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderCloseButton;
                        var12 = var12.bind(var13)(var11);
                        var2.headerLeft = var12;
                        var12 = var8[var5];
                        var12 = var7.bind(var6)(var12);
                        var12 = var12.ImpressionNames;
                        var12 = var12.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE;
                        var2.impressionName = var12;
                        var2.impressionProperties = var4;
                        var12 = function() {
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 12;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var12;
                        var0[var10] = var2;
                        var10 = var1.CONFIRM_EMAIL_CHANGE_CODE;
                        var2 = {};
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderNoTitle;
                        var12 = var12.bind(var13)();
                        var2.headerTitle = var12;
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderCloseButton;
                        var12 = var12.bind(var13)(var11);
                        var2.headerLeft = var12;
                        var12 = var8[var5];
                        var12 = var7.bind(var6)(var12);
                        var12 = var12.ImpressionNames;
                        var12 = var12.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE;
                        var2.impressionName = var12;
                        var2.impressionProperties = var4;
                        var12 = function() {
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure4_slot0;
                            var0.isChangeEmail = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var12;
                        var0[var10] = var2;
                        var10 = var1.ENTER_EMAIL;
                        var2 = {};
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderNoTitle;
                        var12 = var12.bind(var13)();
                        var2.headerTitle = var12;
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderCloseButton;
                        var12 = var12.bind(var13)(var11);
                        var2.headerLeft = var12;
                        var12 = var8[var5];
                        var12 = var7.bind(var6)(var12);
                        var12 = var12.ImpressionNames;
                        var12 = var12.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL;
                        var2.impressionName = var12;
                        var12 = {};
                        var16 = var12;
                        var15 = var4;
                        var13 = copyDataProperties(var16, var15);
                        var13 = 'email_verified';
                        var12[var13] = var14;
                        var2.impressionProperties = var12;
                        var12 = function() {
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = _closure4_slot0;
                            var0.isChangeEmail = var5;
                            var4 = _closure4_slot1;
                            var0.changeEmailReason = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var12;
                        var0[var10] = var2;
                        var10 = var1.VERIFY_PASSWORD;
                        var2 = {};
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderNoTitle;
                        var12 = var12.bind(var13)();
                        var2.headerTitle = var12;
                        var12 = var8[var9];
                        var13 = var7.bind(var6)(var12);
                        var12 = var13.getHeaderCloseButton;
                        var12 = var12.bind(var13)(var11);
                        var2.headerLeft = var12;
                        var12 = var8[var5];
                        var12 = var7.bind(var6)(var12);
                        var12 = var12.ImpressionNames;
                        var12 = var12.USER_ACCOUNT_PASSWORD_VERIFY;
                        var2.impressionName = var12;
                        var2.impressionProperties = var4;
                        var12 = function arg0() {
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 15;
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
                        var2.render = var12;
                        var0[var10] = var2;
                        var2 = var1.CHANGE_EMAIL_COMPLETE;
                        var1 = {};
                        var10 = var8[var9];
                        var12 = var7.bind(var6)(var10);
                        var10 = var12.getHeaderNoTitle;
                        var10 = var10.bind(var12)();
                        var1.headerTitle = var10;
                        var9 = var8[var9];
                        var10 = var7.bind(var6)(var9);
                        var9 = var10.getHeaderCloseButton;
                        var9 = var9.bind(var10)(var11);
                        var1.headerLeft = var9;
                        var5 = var8[var5];
                        var5 = var7.bind(var6)(var5);
                        var5 = var5.ImpressionNames;
                        var5 = var5.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE;
                        var1.impressionName = var5;
                        var1.impressionProperties = var4;
                        var3 = function arg0() {
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 16;
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
                        var1.render = var3;
                        var0[var2] = var1;
                        return var0;
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var5 = var7.bind(var8)(var5, var6);
                if (var4) {
                    _fun60542_ip = 245;
                    continue _fun60542
                }
            case 214:
                var6 = var2 == var1;
                var4 = undefined;
                if (var6) {
                    _fun60542_ip = 229;
                    continue _fun60542
                }
            case 223:
                var4 = var1.email;
            case 229:
                if (!(var2 != var4)) {
                    _fun60542_ip = 245;
                    continue _fun60542
                }
            case 233:
                var4 = _closure1_slot7;
                var4 = var4.RESEND_EMAIL;
                _fun60542_ip = 283;
                continue _fun60542;
            case 245:
                if (!(var2 != var1)) {
                    _fun60542_ip = 258;
                    continue _fun60542
                }
            case 249:
                var1 = var1.verified;
                if (var1) {
                    _fun60542_ip = 270;
                    continue _fun60542
                }
            case 258:
                var1 = _closure1_slot7;
                var1 = var1.ENTER_EMAIL;
                _fun60542_ip = 280;
                continue _fun60542;
            case 270:
                var2 = _closure1_slot7;
                var1 = var2.CONFIRM_EMAIL_CHANGE_START;
            case 280:
                var4 = var1;
            case 283:
                var2 = _closure1_slot8;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 19;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.Navigator;
                var0 = {};
                var0.screens = var5;
                var0.initialRouteName = var4;
                var4 = 20;
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
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1621, 7465, 660, 33, 7463, 481, 4705, 7466, 7469, 7470, 7473, 7475, 7546, 7548, 7551, 566, 4928, 5786, 1234, 2]);