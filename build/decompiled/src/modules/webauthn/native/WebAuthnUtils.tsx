// modules/webauthn/native/WebAuthnUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun60545: for (var _fun60545_ip = 0;;) switch (_fun60545_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60545_ip = 142;
                            continue _fun60545
                        }
                    case 13:
                        var5 = undefined;
                        if (!(var6 === var5)) {
                            _fun60545_ip = 38;
                            continue _fun60545
                        }
                    case 19:
                        var1 = _closure1_slot4;
                        var1 = var1.DCDSecurityKeyManager;
                        var6 = var1.register;
                    case 38:
                        SaveGenerator(address = 42);
                    case 40:
                        return var5;
                    case 42:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun60545_ip = 139;
                            continue _fun60545
                        }
                    case 48:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var2 = var4[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.startRegisterWebAuthnCredential;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 85);
                    case 83:
                        return var2;
                    case 85:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun60545_ip = 136;
                            continue _fun60545
                        }
                    case 91:
                        var7 = var2.ticket;
                        var3 = var2.challenge;
                        var4 = {};
                        var4.ticket = var7;
                        var3 = var6.bind(var5)(var3);
                        SaveGenerator(address = 119);
                    case 117:
                        return var3;
                    case 119:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun60545_ip = 133;
                            continue _fun60545
                        }
                    case 125:
                        var4.credential = var3;
                        return var4;
                    case 133:
                        return var3;
                    case 136:
                        return var2;
                    case 139:
                        return var1;
                    case 142:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var3 = function arg0() {
        _fun60546: for (var _fun60546_ip = 0;;) switch (_fun60546_ip) {
            case 0:
                var1 = arg0;
                var4 = arguments[1];
                var2 = undefined;
                if (!(var4 === var2)) {
                    _fun60546_ip = 33;
                    continue _fun60546
                }
            case 14:
                var3 = _closure1_slot4;
                var3 = var3.DCDSecurityKeyManager;
                var4 = var3.register;
            case 33:
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var2;
                var3 = var1.onRegisterSuccess;
                var6 = var1.setError;
                _closure2_slot0 = var6;
                var5 = var1.setRegistering;
                _closure2_slot1 = var5;
                if (!(var2 !== var6)) {
                    _fun60546_ip = 80;
                    continue _fun60546
                }
            case 71:
                var1 = '';
                var1 = var6.bind(var2)(var1);
            case 80:
                var1 = true;
                var1 = var5.bind(var2)(var1);
                var1 = function() {
                    var0 = undefined;
                    var3 = _closure1_slot7;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var2 = var1.bind(var2)(var4);
                var1 = var2.then;
                var3 = var1.bind(var2)(var3);
                var2 = var3.catch;
                var1 = function(arg0) { // Environment: var0
                    _fun60548: for (var _fun60548_ip = 0;;) switch (_fun60548_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot0;
                            var3 = undefined;
                            if (!(var3 !== var2)) {
                                _fun60548_ip = 85;
                                continue _fun60548
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 6;
                            var4 = var7[var1];
                            var4 = var6.bind(var3)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var3)(var1);
                            var1 = var1.t;
                            var1 = var1.xSCvBf;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            throw var0;
                        case 85:
                            throw var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.finally;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var3 = var0.JSON;
            var2 = var3.parse;
            var1 = arg0;
            var3 = var2.bind(var3)(var1);
            var1 = var3.publicKey;
            var2 = var1.authenticatorSelection;
            var1 = 'required';
            var2.residentKey = var1;
            var2 = _closure2_slot0;
            var1 = var0.JSON;
            var0 = var1.stringify;
            var1 = var0.bind(var1)(var3);
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        return var0;
    };
    var _closure1_slot9 = var0;
    var7 = function arg0() {
        var3 = _closure1_slot8;
        var1 = _closure1_slot9;
        var0 = _closure1_slot4;
        var0 = var0.DCDSecurityKeyManager;
        var0 = var0.registerPasskey;
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var7;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var8 = var5[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var8);
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.NativeModules;
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.WebAuthnScreens;
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot6 = var1;
    var1 = {};
    var9 = function() {
        _fun60553: for (var _fun60553_ip = 0;;) switch (_fun60553_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var5 = undefined;
                var1 = var1.bind(var5)(var0);
                var0 = var1.isAndroid;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun60553_ip = 82;
                    continue _fun60553
                }
            case 38:
                var1 = _closure1_slot4;
                var2 = null;
                var4 = var2 == var1;
                var1 = undefined;
                if (var4) {
                    _fun60553_ip = 78;
                    continue _fun60553
                }
            case 53:
                var3 = _closure1_slot4;
                var3 = var3.DCDSecurityKeyManager;
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun60553_ip = 78;
                    continue _fun60553
                }
            case 72:
                var1 = var3.registerPasskey;
            case 78:
                var0 = var2 != var1;
            case 82:
                return var0;
        }
    };
    var8 = 'hasAndroidPasskeySupport';
    Object.defineProperty(var1, var8, {
        get: var9,
        set: var0,
        enumerable: true
    });
    var9 = function() {
        _fun60554: for (var _fun60554_ip = 0;;) switch (_fun60554_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun60554_ip = 71;
                    continue _fun60554
                }
            case 38:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isMetaQuest;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 71:
                return var0;
        }
    };
    var8 = 'shouldDisplayAndroidFidoSelector';
    Object.defineProperty(var1, var8, {
        get: var9,
        set: var0,
        enumerable: true
    });
    var8 = function arg0() {
        _fun60555: for (var _fun60555_ip = 0;;) switch (_fun60555_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.isModal;
                var0 = {};
                var1 = _closure1_slot5;
                var5 = var1.MODAL_UPSELL;
                var2 = {};
                var7 = '';
                var2.title = var7;
                var7 = function() {
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.render = var7;
                var0[var5] = var2;
                var2 = var1.INIT;
                var1 = {};
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = 6;
                var9 = var5[var8];
                var7 = undefined;
                var9 = var11.bind(var7)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var5[var8];
                var5 = var11.bind(var7)(var5);
                var5 = var5.t;
                var5 = var5["0N1s81"];
                var5 = var9.bind(var10)(var5);
                var1.title = var5;
                var5 = function() {
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var5;
                var5 = undefined;
                if (!var6) {
                    _fun60555_ip = 190;
                    continue _fun60555
                }
            case 137:
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 10;
                var9 = var13[var9];
                var11 = var10.bind(var7)(var9);
                var10 = var11.getHeaderCloseButton;
                var12 = _closure1_slot1;
                var9 = 11;
                var9 = var13[var9];
                var9 = var12.bind(var7)(var9);
                var9 = var9.closePasskeyUpsellModal;
                var5 = var10.bind(var11)(var9);
            case 190:
                var1.headerLeft = var5;
                var0[var2] = var1;
                var1 = _closure1_slot5;
                var9 = var1.EDIT;
                var2 = {};
                var5 = function arg0() {
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
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
                var2.render = var5;
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = var5[var8];
                var10 = var11.bind(var7)(var10);
                var13 = var10.intl;
                var12 = var13.string;
                var10 = var5[var8];
                var10 = var11.bind(var7)(var10);
                var10 = var10.t;
                var10 = var10.UBBwwF;
                var10 = var12.bind(var13)(var10);
                var2.title = var10;
                var0[var9] = var2;
                var9 = var1.REGISTER;
                var2 = {};
                var10 = function() {
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.render = var10;
                var10 = var5[var8];
                var10 = var11.bind(var7)(var10);
                var13 = var10.intl;
                var12 = var13.string;
                var10 = var5[var8];
                var10 = var11.bind(var7)(var10);
                var10 = var10.t;
                var10 = var10.vrOCCk;
                var10 = var12.bind(var13)(var10);
                var2.title = var10;
                var0[var9] = var2;
                var2 = var1.NAME;
                var1 = {};
                var9 = function arg0() {
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 14;
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
                var1.render = var9;
                var9 = var5[var8];
                var9 = var11.bind(var7)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var5[var8];
                var5 = var11.bind(var7)(var5);
                var5 = var5.t;
                var5 = var5["cY/IOu"];
                var5 = var9.bind(var10)(var5);
                var1.title = var5;
                var5 = undefined;
                if (!var6) {
                    _fun60555_ip = 484;
                    continue _fun60555
                }
            case 431:
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 10;
                var6 = var12[var6];
                var10 = var9.bind(var7)(var6);
                var9 = var10.getHeaderCloseButton;
                var11 = _closure1_slot1;
                var6 = 11;
                var6 = var12[var6];
                var6 = var11.bind(var7)(var6);
                var6 = var6.closePasskeyUpsellModal;
                var5 = var9.bind(var10)(var6);
            case 484:
                var1.headerLeft = var5;
                var0[var2] = var1;
                var1 = _closure1_slot5;
                var2 = var1.SUCCESS;
                var1 = {};
                var4 = function() {
                    var3 = _closure1_slot6;
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
                var1.render = var4;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = var3[var8];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var3[var8];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3["7wPZln"];
                var3 = var4.bind(var5)(var3);
                var1.title = var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var1.getScreens = var8;
    var1.registerAndroidCredentialManagerPasskey = var7;
    var7 = function arg0() {
        var3 = _closure1_slot8;
        var1 = _closure1_slot9;
        var0 = _closure1_slot4;
        var0 = var0.DCDSecurityKeyManager;
        var0 = var0.register;
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var1.registerAndroidDevicePasskey = var7;
    var6 = function arg0() {
        _fun60563: for (var _fun60563_ip = 0;;) switch (_fun60563_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var2 = undefined;
                var4 = var4.bind(var2)(var0);
                var0 = var4.isAndroid;
                var0 = var0.bind(var4)();
                if (var0) {
                    _fun60563_ip = 52;
                    continue _fun60563
                }
            case 41:
                var0 = _closure1_slot8;
                var0 = var0.bind(var2)(var3);
                _fun60563_ip = 61;
                continue _fun60563;
            case 52:
                var1 = _closure1_slot10;
                var0 = var1.bind(var2)(var3);
            case 61:
                return var0;
        }
    };
    var1.registerPasskey = var6;
    var1.registerSecurityKey = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/webauthn/native/WebAuthnUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 7453, 33, 4529, 1234, 478, 7454, 7468, 4668, 7462, 7478, 7479, 7482, 7483, 4065, 2]);