// modules/verification/VerificationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.UserRequiredActions;
    var _closure1_slot3 = var6;
    var1 = var1.VerificationTypes;
    var _closure1_slot4 = var1;
    var9 = var1.CAPTCHA;
    var12 = var1.EMAIL;
    var13 = var1.PHONE;
    var11 = var1.REVERIFY_EMAIL;
    var10 = var1.REVERIFY_PHONE;
    var1 = {};
    var8 = var6.REQUIRE_VERIFIED_EMAIL;
    var7 = new Array(1);
    var7[0] = var12;
    var1[var8] = var7;
    var8 = var6.REQUIRE_VERIFIED_PHONE;
    var7 = new Array(1);
    var7[0] = var13;
    var1[var8] = var7;
    var8 = var6.REQUIRE_REVERIFIED_EMAIL;
    var7 = new Array(1);
    var7[0] = var11;
    var1[var8] = var7;
    var8 = var6.REQUIRE_REVERIFIED_PHONE;
    var7 = new Array(1);
    var7[0] = var10;
    var1[var8] = var7;
    var8 = var6.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE;
    var7 = new Array(2);
    var7[0] = var12;
    var7[1] = var13;
    var1[var8] = var7;
    var8 = var6.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
    var7 = new Array(2);
    var7[0] = var13;
    var7[1] = var11;
    var1[var8] = var7;
    var8 = var6.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    var7 = new Array(2);
    var7[0] = var12;
    var7[1] = var10;
    var1[var8] = var7;
    var8 = var6.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    var7 = new Array(2);
    var7[0] = var11;
    var7[1] = var10;
    var1[var8] = var7;
    var8 = var6.REQUIRE_CAPTCHA;
    var7 = new Array(1);
    var7[0] = var9;
    var1[var8] = var7;
    var8 = var6.AGREEMENTS;
    var7 = new Array(0);
    var1[var8] = var7;
    var7 = var6.REQUIRE_SAFETY_FLOWS;
    var6 = new Array(0);
    var1[var7] = var6;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        _fun60594: for (var _fun60594_ip = 0;;) switch (_fun60594_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = undefined;
                var0 = var0 !== var2;
                if (!var0) {
                    _fun60594_ip = 25;
                    continue _fun60594
                }
            case 15:
                var1 = var2.isPhoneVerified;
                var0 = var1.bind(var2)();
            case 25:
                if (!var0) {
                    _fun60594_ip = 82;
                    continue _fun60594
                }
            case 28:
                var1 = _closure1_slot3;
                var1 = var1.REQUIRE_REVERIFIED_PHONE;
                var1 = var3 === var1;
                if (var1) {
                    _fun60594_ip = 62;
                    continue _fun60594
                }
            case 48:
                var4 = _closure1_slot3;
                var4 = var4.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
                var1 = var3 === var4;
            case 62:
                if (var1) {
                    _fun60594_ip = 79;
                    continue _fun60594
                }
            case 65:
                var2 = _closure1_slot3;
                var2 = var2.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
                var1 = var3 === var2;
            case 79:
                var0 = var1;
            case 82:
                return var0;
        }
    };
    var1.isPhoneReverification = var6;
    var6 = function arg0() {
        _fun60595: for (var _fun60595_ip = 0;;) switch (_fun60595_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot3;
                var0 = var0.REQUIRE_REVERIFIED_EMAIL;
                var0 = var2 === var0;
                if (var0) {
                    _fun60595_ip = 37;
                    continue _fun60595
                }
            case 23:
                var3 = _closure1_slot3;
                var3 = var3.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
                var0 = var2 === var3;
            case 37:
                if (var0) {
                    _fun60595_ip = 54;
                    continue _fun60595
                }
            case 40:
                var1 = _closure1_slot3;
                var1 = var1.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
                var0 = var2 === var1;
            case 54:
                return var0;
        }
    };
    var1.isEmailReverification = var6;
    var6 = function arg0() {
        _fun60596: for (var _fun60596_ip = 0;;) switch (_fun60596_ip) {
            case 0:
                var3 = arg0;
                var2 = this;
                var0 = _closure1_slot3;
                var0 = var0.REQUIRE_CAPTCHA;
                var0 = var3 === var0;
                if (var0) {
                    _fun60596_ip = 40;
                    continue _fun60596
                }
            case 26:
                var4 = _closure1_slot3;
                var4 = var4.REQUIRE_VERIFIED_EMAIL;
                var0 = var3 === var4;
            case 40:
                if (var0) {
                    _fun60596_ip = 57;
                    continue _fun60596
                }
            case 43:
                var4 = _closure1_slot3;
                var4 = var4.REQUIRE_VERIFIED_PHONE;
                var0 = var3 === var4;
            case 57:
                if (var0) {
                    _fun60596_ip = 74;
                    continue _fun60596
                }
            case 60:
                var4 = _closure1_slot3;
                var4 = var4.REQUIRE_REVERIFIED_PHONE;
                var0 = var3 === var4;
            case 74:
                if (var0) {
                    _fun60596_ip = 91;
                    continue _fun60596
                }
            case 77:
                var4 = _closure1_slot3;
                var4 = var4.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
                var0 = var3 === var4;
            case 91:
                if (var0) {
                    _fun60596_ip = 108;
                    continue _fun60596
                }
            case 94:
                var1 = _closure1_slot3;
                var1 = var1.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
                var0 = var3 === var1;
            case 108:
                if (var0) {
                    _fun60596_ip = 122;
                    continue _fun60596
                }
            case 111:
                var1 = var2.isEmailReverification;
                var0 = var1.bind(var2)(var3);
            case 122:
                return var0;
        }
    };
    var1.isFullScreenVerification = var6;
    var6 = function arg0() {
        _fun60597: for (var _fun60597_ip = 0;;) switch (_fun60597_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun60597_ip = 33;
                    continue _fun60597
                }
            case 9:
                var2 = 'symbol';
                var0 = typeof var1;
                if (!(var2 !== var0)) {
                    _fun60597_ip = 33;
                    continue _fun60597
                }
            case 20:
                var0 = _closure1_slot5;
                var0 = var0[var1];
                _fun60597_ip = 37;
                continue _fun60597;
            case 33:
                var0 = new Array(0);
            case 37:
                return var0;
        }
    };
    var1.getVerificationTypes = var6;
    var6 = function arg0() {
        _fun60598: for (var _fun60598_ip = 0;;) switch (_fun60598_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot4;
                var1 = var1.EMAIL;
                if (!(var1 !== var2)) {
                    _fun60598_ip = 315;
                    continue _fun60598
                }
            case 23:
                var1 = _closure1_slot4;
                var1 = var1.PHONE;
                if (!(var1 !== var2)) {
                    _fun60598_ip = 254;
                    continue _fun60598
                }
            case 40:
                var1 = _closure1_slot4;
                var1 = var1.REVERIFY_EMAIL;
                if (!(var1 !== var2)) {
                    _fun60598_ip = 193;
                    continue _fun60598
                }
            case 57:
                var1 = _closure1_slot4;
                var1 = var1.REVERIFY_PHONE;
                if (!(var1 !== var2)) {
                    _fun60598_ip = 132;
                    continue _fun60598
                }
            case 71:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["oF6+Ww"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 132:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.of2125;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 193:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.nmdPFX;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 254:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.mjJeco;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 315:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 1;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["1MPz27"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.getButtonTitle = var6;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.isEqual;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.areVerificationTypesEqual = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/VerificationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1234, 22, 2]);