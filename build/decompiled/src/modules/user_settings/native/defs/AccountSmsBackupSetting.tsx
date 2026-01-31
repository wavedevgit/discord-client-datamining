// modules/user_settings/native/defs/AccountSmsBackupSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var7 = function() {
        _fun81138: for (var _fun81138_ip = 0;;) switch (_fun81138_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var4 = undefined;
                var5 = var2.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var3.bind(var5)(var2, var0);
                var0 = null;
                var2 = var0 == var3;
                if (var2) {
                    _fun81138_ip = 97;
                    continue _fun81138
                }
            case 66:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getSMSBackupDisabledMessage;
                var0 = var1.bind(var2)(var3);
            case 97:
                return var0;
        }
    };
    var _closure1_slot7 = var7;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.UserFlags;
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = var1;
    var1 = 14;
    var1 = var5[var1];
    var10 = var4.bind(var0)(var1);
    var6 = var10.debounce;
    var3 = function arg0() {
        _fun81140: for (var _fun81140_ip = 0;;) switch (_fun81140_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.mfaSMSEnabled;
                var0 = var0.user;
                if (var1) {
                    _fun81140_ip = 277;
                    continue _fun81140
                }
            case 20:
                var1 = null;
                if (!(var1 != var0)) {
                    _fun81140_ip = 36;
                    continue _fun81140
                }
            case 26:
                var0 = var0.phone;
                if (!(var1 == var0)) {
                    _fun81140_ip = 148;
                    continue _fun81140
                }
            case 36:
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var7 = undefined;
                var4 = var2.bind(var7)(var1);
                var3 = var4.pushLazy;
                var6 = _closure1_slot0;
                var1 = 12;
                var1 = var8[var1];
                var5 = var6.bind(var7)(var1);
                var1 = 11;
                var2 = var8[var1];
                var1 = var8.paths;
                var2 = var5.bind(var7)(var2, var1);
                var1 = {};
                var5 = 13;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.ChangePhoneReason;
                var5 = var5.USER_SETTINGS_UPDATE;
                var1.reason = var5;
                var0 = _closure1_slot5;
                var0 = var3.bind(var4)(var2, var1, var0);
                _fun81140_ip = 465;
                continue _fun81140;
            case 148:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var3 = var4[var1];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var1 = var4[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.DZQe23;
                var3 = var3.bind(var5)(var1);
                var1 = var3.toUpperCase;
                var3 = var1.bind(var3)();
                var1 = _closure1_slot1;
                var0 = 9;
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.confirm;
                var0 = {};
                var0.title = var3;
                var2 = var1.bind(var2)(var0);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun81141: for (var _fun81141_ip = 0;;) switch (_fun81141_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun81141_ip = 41;
                                continue _fun81141
                            }
                        case 6:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.enableSMS;
                            var0 = var0.bind(var1)();
                        case 41:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                _fun81140_ip = 465;
                continue _fun81140;
            case 277:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var0 = var4[var1];
                var2 = undefined;
                var0 = var7.bind(var2)(var0);
                var6 = var0.intl;
                var5 = var6.string;
                var0 = var4[var1];
                var0 = var7.bind(var2)(var0);
                var0 = var0.t;
                var0 = var0["CIGa+7"];
                var5 = var5.bind(var6)(var0);
                var0 = var5.toUpperCase;
                var0 = var0.bind(var5)();
                var5 = var4[var1];
                var5 = var7.bind(var2)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var1 = var4[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.wlfmlR;
                var5 = var5.bind(var6)(var1);
                var1 = var5.toUpperCase;
                var5 = var1.bind(var5)();
                var1 = {};
                var3 = _closure1_slot1;
                var6 = 7;
                var6 = var4[var6];
                var6 = var3.bind(var2)(var6);
                var6 = var6.disableSMS;
                var1.onSubmit = var6;
                var1.title = var5;
                var1.placeholder = var0;
                var0 = true;
                var1.closeOnSuccess = var0;
                var0 = 8;
                var0 = var4[var0];
                var0 = var3.bind(var2)(var0);
                var0 = var0.bind(var2)(var1);
            case 465:
                var0 = undefined;
                return var0;
        }
    };
    var1 = 200;
    var1 = var6.bind(var10)(var3, var1);
    var _closure1_slot6 = var1;
    var1 = 15;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 6;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.uHAJ5v;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var9 = var9.ACCOUNT;
    var1.parent = var9;
    var9 = function() {
        var1 = _closure1_slot7;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var1.useIsDisabled = var9;
    var9 = function() {
        _fun81144: for (var _fun81144_ip = 0;;) switch (_fun81144_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var0 = var1[var0];
                var1 = undefined;
                var5 = var3.bind(var1)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var4.bind(var5)(var3, var0);
                var0 = null;
                var3 = var0 == var4;
                if (var3) {
                    _fun81144_ip = 87;
                    continue _fun81144
                }
            case 66:
                var3 = var4.hasFlag;
                var2 = _closure1_slot4;
                var2 = var2.MFA_SMS;
                var1 = var3.bind(var4)(var2);
            case 87:
                var0 = var0 != var1;
                if (!var0) {
                    _fun81144_ip = 97;
                    continue _fun81144
                }
            case 94:
                var0 = var1;
            case 97:
                return var0;
        }
    };
    var1.useValue = var9;
    var8 = function arg0() {
        _fun81146: for (var _fun81146_ip = 0;;) switch (_fun81146_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = var2.getCurrentUser;
                var0 = var0.bind(var2)();
                var2 = null;
                if (!(var2 != var0)) {
                    _fun81146_ip = 50;
                    continue _fun81146
                }
            case 22:
                var2 = _closure1_slot6;
                var1 = {};
                var3 = arg0;
                var3 = !var3;
                var1.mfaSMSEnabled = var3;
                var1.user = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 50:
                var0 = undefined;
                return var0;
        }
    };
    var1.onValueChange = var8;
    var1.useDescription = var7;
    var7 = 16;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.useIsTOTPEnabled;
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/AccountSmsBackupSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 6967, 660, 7515, 566, 10303, 1234, 7486, 10305, 3895, 4525, 7514, 1307, 7517, 22, 8943, 10086, 2]);